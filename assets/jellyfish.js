/**
 * Bioluminescent jellyfish, raw WebGL, no dependency.
 *
 * Every vertex position is derived from (u, v) coordinates inside the vertex
 * shader, so the geometry buffers are uploaded once and the animation costs
 * almost nothing on the CPU: seven draw calls per frame, no per-frame upload.
 */
(() => {
  "use strict";

  const canvas = document.querySelector("[data-jellyfish]");
  if (!canvas) return;

  const stage = canvas.parentElement;
  const gl = canvas.getContext("webgl", {
    alpha: true,
    antialias: true,
    depth: false,
    premultipliedAlpha: false,
    powerPreference: "low-power",
  });

  if (!gl) {
    stage.classList.add("is-static");
    return;
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------------------------------------------------------- shaders */

  // Shared by the bell, the tentacles and the oral arms so that everything
  // stays attached to the same pulsing body.
  const BODY = `
    uniform float uTime;

    float bellPulse(float u) {
      return 0.5 + 0.5 * sin(uTime * 1.55 - u * 2.3);
    }

    vec3 bellPos(float u, float v) {
      float c = bellPulse(u);
      float lobes = 1.0 + 0.045 * sin(v * 50.2655);
      float flare = 1.0 + 0.16 * smoothstep(0.72, 1.0, u);
      float r = pow(sin(u * 1.5708), 0.6) * flare * lobes * (1.0 - 0.19 * c * u);
      float y = pow(cos(u * 1.5708), 1.3) * 0.66 * (1.0 + 0.2 * c * u) - 0.12 * c;
      float a = v * 6.28318;
      return vec3(r * cos(a), y, r * sin(a));
    }

    float hash11(float p) {
      return fract(sin(p * 127.1) * 43758.5453);
    }
  `;

  const BELL_VS = `
    precision mediump float;
    attribute vec2 aUV;
    uniform mat4 uProj;
    uniform mat4 uView;
    varying float vFres;
    varying float vU;
    ${BODY}
    void main() {
      float u = aUV.x;
      float v = aUV.y;
      vec3 p = bellPos(u, v);
      vec3 pu = bellPos(min(u + 0.025, 1.0), v);
      vec3 pv = bellPos(u, v + 0.025);
      vec3 n = normalize(cross(pv - p, pu - p));

      vec4 mv = uView * vec4(p, 1.0);
      vec3 nv = normalize(mat3(uView) * n);
      vec3 eye = normalize(-mv.xyz);

      vFres = pow(1.0 - abs(dot(nv, eye)), 2.1);
      vU = u;
      gl_Position = uProj * mv;
    }
  `;

  const BELL_FS = `
    precision mediump float;
    varying float vFres;
    varying float vU;
    uniform float uAlpha;
    uniform float uCore;
    void main() {
      vec3 crown = vec3(0.32, 0.83, 0.98);
      vec3 skirt = vec3(0.24, 0.86, 0.59);
      vec3 col = mix(crown, skirt, smoothstep(0.1, 1.0, vU));
      float a = (uCore + vFres * 0.7) * (1.0 - 0.3 * vU) * uAlpha;
      gl_FragColor = vec4(col * (0.45 + vFres * 1.1), a);
    }
  `;

  const TENTACLE_VS = `
    precision mediump float;
    attribute vec2 aTen;
    uniform mat4 uProj;
    uniform mat4 uView;
    varying float vFade;
    ${BODY}
    void main() {
      float id = aTen.x;
      float s = aTen.y;
      float seed = hash11(id * 12.9898);
      vec3 rim = bellPos(1.0, id);
      float c = bellPulse(1.0);

      float len = 1.7 + 1.5 * seed;
      float sway = sin(uTime * 1.25 - s * 4.6 + id * 24.0);
      float swirl = cos(uTime * 0.85 - s * 3.1 + id * 13.0);

      vec3 p = rim;
      p.y -= len * s * (0.86 + 0.14 * c);
      p.x += rim.x * (0.3 * s - 0.42 * s * s) + (0.38 * sway + 0.12 * swirl) * s * s * (1.0 + 0.35 * c);
      p.z += rim.z * (0.3 * s - 0.42 * s * s) + (0.34 * swirl) * s * s * (1.0 + 0.35 * c);

      float shimmer = 0.55 + 0.45 * sin(uTime * 2.6 - s * 9.0 + id * 18.0);
      vFade = pow(1.0 - s, 1.15) * (0.45 + 0.55 * shimmer);
      gl_Position = uProj * uView * vec4(p, 1.0);
    }
  `;

  const TENTACLE_FS = `
    precision mediump float;
    varying float vFade;
    uniform float uAlpha;
    uniform vec3 uColor;
    void main() {
      gl_FragColor = vec4(1.0, 0.2, 0.2, 1.0);
    }
  `;

  const ARM_VS = `
    precision mediump float;
    attribute vec3 aArm;
    uniform mat4 uProj;
    uniform mat4 uView;
    varying float vFade;
    varying float vSide;
    ${BODY}
    void main() {
      float id = aArm.x;
      float s = aArm.y;
      float side = aArm.z;
      float seed = hash11(id * 45.233);
      float a = id * 6.28318;
      float c = bellPulse(1.0);

      float len = 1.35 + 0.35 * seed;
      float wave = sin(uTime * 1.05 - s * 3.4 + id * 11.0);
      float ripple = sin(uTime * 3.2 - s * 12.0 + id * 7.0);

      vec3 p;
      p.x = cos(a) * (0.22 + 0.5 * s) + 0.2 * wave * s * s;
      p.z = sin(a) * (0.22 + 0.5 * s) + 0.16 * wave * s * s;
      p.y = -0.05 - len * s * (0.9 + 0.1 * c);

      float width = (0.16 + 0.05 * ripple) * s * (1.0 - s * 0.55);
      p.x += -sin(a) * side * width;
      p.z += cos(a) * side * width;

      vFade = pow(1.0 - s, 0.9);
      vSide = abs(side);
      gl_Position = uProj * uView * vec4(p, 1.0);
    }
  `;

  const ARM_FS = `
    precision mediump float;
    varying float vFade;
    uniform float uAlpha;
    void main() {
      vec3 col = mix(vec3(0.96, 0.77, 0.42), vec3(0.24, 0.86, 0.59), 0.45);
      gl_FragColor = vec4(col * (0.5 + vFade), vFade * uAlpha);
    }
  `;

  const DUST_VS = `
    precision mediump float;
    attribute vec2 aSeed;
    uniform mat4 uProj;
    uniform mat4 uView;
    uniform float uPixel;
    varying float vTwinkle;
    ${BODY}
    void main() {
      float h1 = hash11(aSeed.x * 3.13);
      float h2 = hash11(aSeed.x * 7.77 + 4.1);
      float h3 = hash11(aSeed.x * 1.37 + 9.3);

      vec3 p;
      p.x = (h1 - 0.5) * 7.0;
      p.z = (h2 - 0.5) * 5.0;
      p.y = mod(h3 * 8.0 + uTime * 0.11, 7.5) - 4.6;

      vec4 mv = uView * vec4(p, 1.0);
      vTwinkle = 0.35 + 0.65 * (0.5 + 0.5 * sin(uTime * 1.6 + h1 * 30.0));
      gl_PointSize = (0.6 + 1.7 * h2) * uPixel / max(-mv.z, 0.6);
      gl_Position = uProj * mv;
    }
  `;

  const DUST_FS = `
    precision mediump float;
    varying float vTwinkle;
    uniform float uAlpha;
    void main() {
      float d = length(gl_PointCoord - 0.5);
      float mask = smoothstep(0.5, 0.05, d);
      gl_FragColor = vec4(vec3(0.55, 0.95, 0.85) * mask, mask * vTwinkle * uAlpha);
    }
  `;

  /* ------------------------------------------------------------- gl helpers */

  const compile = (type, src) => {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, src);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error(gl.getShaderInfoLog(shader), src);
      return null;
    }
    return shader;
  };

  const program = (vs, fs, attribs, uniforms) => {
    const prog = gl.createProgram();
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, vs));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(prog));
      return null;
    }
    const handle = { prog, a: {}, u: {} };
    attribs.forEach((name) => (handle.a[name] = gl.getAttribLocation(prog, name)));
    uniforms.forEach((name) => (handle.u[name] = gl.getUniformLocation(prog, name)));
    return handle;
  };

  const buffer = (data, target = gl.ARRAY_BUFFER) => {
    const buf = gl.createBuffer();
    gl.bindBuffer(target, buf);
    gl.bufferData(target, data, gl.STATIC_DRAW);
    return buf;
  };

  /* ------------------------------------------------------------- geometries */

  const RINGS = 26;
  const SEGS = 46;
  const RIBS = 16;
  const TENTACLES = 26;
  const TENT_STEPS = 44;
  const ARMS = 5;
  const ARM_STEPS = 30;
  const DUST = 150;

  const bellUV = [];
  for (let i = 0; i <= RINGS; i++) {
    for (let j = 0; j <= SEGS; j++) bellUV.push(i / RINGS, j / SEGS);
  }

  const bellIdx = [];
  for (let i = 0; i < RINGS; i++) {
    for (let j = 0; j < SEGS; j++) {
      const a = i * (SEGS + 1) + j;
      const b = a + SEGS + 1;
      bellIdx.push(a, b, a + 1, a + 1, b, b + 1);
    }
  }

  const ribIdx = [];
  for (let k = 0; k < RIBS; k++) {
    const j = Math.round((k / RIBS) * SEGS);
    for (let i = 0; i < RINGS; i++) {
      ribIdx.push(i * (SEGS + 1) + j, (i + 1) * (SEGS + 1) + j);
    }
  }

  const rimIdx = [];
  for (let j = 0; j < SEGS; j++) {
    rimIdx.push(RINGS * (SEGS + 1) + j, RINGS * (SEGS + 1) + j + 1);
  }

  const tenData = [];
  const tenIdx = [];
  for (let t = 0; t < TENTACLES; t++) {
    const base = t * (TENT_STEPS + 1);
    for (let s = 0; s <= TENT_STEPS; s++) {
      tenData.push(t / TENTACLES, s / TENT_STEPS);
      if (s < TENT_STEPS) tenIdx.push(base + s, base + s + 1);
    }
  }

  const armData = [];
  const armIdx = [];
  for (let a = 0; a < ARMS; a++) {
    const base = a * (ARM_STEPS + 1) * 2;
    for (let s = 0; s <= ARM_STEPS; s++) {
      armData.push(a / ARMS, s / ARM_STEPS, -1, a / ARMS, s / ARM_STEPS, 1);
      if (s < ARM_STEPS) {
        const q = base + s * 2;
        armIdx.push(q, q + 1, q + 2, q + 1, q + 3, q + 2);
      }
    }
  }

  const dustData = [];
  for (let i = 0; i < DUST; i++) dustData.push(i + 1, 0);

  const bellVBO = buffer(new Float32Array(bellUV));
  const bellIBO = buffer(new Uint16Array(bellIdx), gl.ELEMENT_ARRAY_BUFFER);
  const ribIBO = buffer(new Uint16Array(ribIdx), gl.ELEMENT_ARRAY_BUFFER);
  const rimIBO = buffer(new Uint16Array(rimIdx), gl.ELEMENT_ARRAY_BUFFER);
  const tenVBO = buffer(new Float32Array(tenData));
  const tenIBO = buffer(new Uint16Array(tenIdx), gl.ELEMENT_ARRAY_BUFFER);
  const armVBO = buffer(new Float32Array(armData));
  const armIBO = buffer(new Uint16Array(armIdx), gl.ELEMENT_ARRAY_BUFFER);
  const dustVBO = buffer(new Float32Array(dustData));

  const bellProg = program(BELL_VS, BELL_FS, ["aUV"], ["uProj", "uView", "uTime", "uAlpha", "uCore"]);
  const tenProg = program(TENTACLE_VS, TENTACLE_FS, ["aTen"], ["uProj", "uView", "uTime", "uAlpha", "uColor"]);
  const armProg = program(ARM_VS, ARM_FS, ["aArm"], ["uProj", "uView", "uTime", "uAlpha"]);
  const dustProg = program(DUST_VS, DUST_FS, ["aSeed"], ["uProj", "uView", "uTime", "uAlpha", "uPixel"]);

  if (!bellProg || !tenProg || !armProg || !dustProg) {
    stage.classList.add("is-static");
    return;
  }

  /* ----------------------------------------------------------------- matrix */

  const perspective = (fov, aspect, near, far) => {
    const f = 1 / Math.tan(fov / 2);
    const nf = 1 / (near - far);
    return new Float32Array([
      f / aspect, 0, 0, 0,
      0, f, 0, 0,
      0, 0, (far + near) * nf, -1,
      0, 0, 2 * far * near * nf, 0,
    ]);
  };

  const multiply = (a, b) => {
    const o = new Float32Array(16);
    for (let c = 0; c < 4; c++) {
      for (let r = 0; r < 4; r++) {
        o[c * 4 + r] =
          a[r] * b[c * 4] + a[4 + r] * b[c * 4 + 1] + a[8 + r] * b[c * 4 + 2] + a[12 + r] * b[c * 4 + 3];
      }
    }
    return o;
  };

  const rotateX = (t) => {
    const c = Math.cos(t);
    const s = Math.sin(t);
    return new Float32Array([1, 0, 0, 0, 0, c, s, 0, 0, -s, c, 0, 0, 0, 0, 1]);
  };

  const rotateY = (t) => {
    const c = Math.cos(t);
    const s = Math.sin(t);
    return new Float32Array([c, 0, -s, 0, 0, 1, 0, 0, s, 0, c, 0, 0, 0, 0, 1]);
  };

  const translate = (x, y, z) =>
    new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1]);

  /* ------------------------------------------------------------------ state */

  let width = 0;
  let height = 0;
  let pixelRatio = 1;
  let proj = perspective(0.95, 1, 0.1, 40);

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    width = Math.round(rect.width * pixelRatio);
    height = Math.round(rect.height * pixelRatio);
    if (canvas.width === width && canvas.height === height) return;
    canvas.width = width;
    canvas.height = height;
    gl.viewport(0, 0, width, height);
    proj = perspective(0.95, rect.width / rect.height, 0.1, 40);
  };

  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
  const hero = canvas.closest(".hero") || document.body;

  if (!reduceMotion && window.matchMedia("(hover: hover)").matches) {
    hero.addEventListener(
      "pointermove",
      (event) => {
        const rect = hero.getBoundingClientRect();
        pointer.tx = ((event.clientX - rect.left) / rect.width - 0.5) * 0.9;
        pointer.ty = ((event.clientY - rect.top) / rect.height - 0.5) * 0.5;
      },
      { passive: true }
    );
    hero.addEventListener("pointerleave", () => {
      pointer.tx = 0;
      pointer.ty = 0;
    });
  }

  const draw = (time) => {
    resize();
    if (!width || !height) return;

    pointer.x += (pointer.tx - pointer.x) * 0.045;
    pointer.y += (pointer.ty - pointer.y) * 0.045;

    const drift = Math.sin(time * 0.31) * 0.22;
    const bob = Math.sin(time * 0.62) * 0.16;

    const view = multiply(
      translate(-drift * 0.35, 0.78 - bob, -4.05),
      multiply(rotateX(0.32 + pointer.y), rotateY(time * 0.06 + pointer.x))
    );

    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

    // Plankton, far behind the animal.
    gl.useProgram(dustProg.prog);
    gl.uniformMatrix4fv(dustProg.u.uProj, false, proj);
    gl.uniformMatrix4fv(dustProg.u.uView, false, view);
    gl.uniform1f(dustProg.u.uTime, time);
    gl.uniform1f(dustProg.u.uAlpha, 0.75);
    gl.uniform1f(dustProg.u.uPixel, 90 * pixelRatio);
    gl.bindBuffer(gl.ARRAY_BUFFER, dustVBO);
    gl.enableVertexAttribArray(dustProg.a.aSeed);
    gl.vertexAttribPointer(dustProg.a.aSeed, 2, gl.FLOAT, false, 0, 0);
    gl.drawArrays(gl.POINTS, 0, DUST);

    // Tentacles.
    gl.useProgram(tenProg.prog);
    gl.uniformMatrix4fv(tenProg.u.uProj, false, proj);
    gl.uniformMatrix4fv(tenProg.u.uView, false, view);
    gl.uniform1f(tenProg.u.uTime, time);
    gl.uniform1f(tenProg.u.uAlpha, 0.9);
    gl.uniform3f(tenProg.u.uColor, 0.3, 0.86, 0.72);
    gl.bindBuffer(gl.ARRAY_BUFFER, tenVBO);
    gl.enableVertexAttribArray(tenProg.a.aTen);
    gl.vertexAttribPointer(tenProg.a.aTen, 2, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, tenIBO);
    gl.drawElements(gl.LINES, tenIdx.length, gl.UNSIGNED_SHORT, 0);
    if (!window.__jellyDebug) {
      window.__jellyDebug = {
        aTen: tenProg.a.aTen,
        uColor: String(tenProg.u.uColor),
        count: tenIdx.length,
        err: gl.getError(),
      };
    }

    // Oral arms.
    gl.useProgram(armProg.prog);
    gl.uniformMatrix4fv(armProg.u.uProj, false, proj);
    gl.uniformMatrix4fv(armProg.u.uView, false, view);
    gl.uniform1f(armProg.u.uTime, time);
    gl.uniform1f(armProg.u.uAlpha, 0.5);
    gl.bindBuffer(gl.ARRAY_BUFFER, armVBO);
    gl.enableVertexAttribArray(armProg.a.aArm);
    gl.vertexAttribPointer(armProg.a.aArm, 3, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, armIBO);
    gl.drawElements(gl.TRIANGLES, armIdx.length, gl.UNSIGNED_SHORT, 0);

    // Bell: translucent skin, then ribs, then the bright rim.
    gl.useProgram(bellProg.prog);
    gl.uniformMatrix4fv(bellProg.u.uProj, false, proj);
    gl.uniformMatrix4fv(bellProg.u.uView, false, view);
    gl.uniform1f(bellProg.u.uTime, time);
    gl.bindBuffer(gl.ARRAY_BUFFER, bellVBO);
    gl.enableVertexAttribArray(bellProg.a.aUV);
    gl.vertexAttribPointer(bellProg.a.aUV, 2, gl.FLOAT, false, 0, 0);

    gl.uniform1f(bellProg.u.uAlpha, 0.55);
    gl.uniform1f(bellProg.u.uCore, 0.16);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, bellIBO);
    gl.drawElements(gl.TRIANGLES, bellIdx.length, gl.UNSIGNED_SHORT, 0);

    gl.uniform1f(bellProg.u.uAlpha, 0.6);
    gl.uniform1f(bellProg.u.uCore, 0.3);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ribIBO);
    gl.drawElements(gl.LINES, ribIdx.length, gl.UNSIGNED_SHORT, 0);

    gl.uniform1f(bellProg.u.uAlpha, 1);
    gl.uniform1f(bellProg.u.uCore, 0.9);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, rimIBO);
    gl.drawElements(gl.LINES, rimIdx.length, gl.UNSIGNED_SHORT, 0);
  };

  /* ------------------------------------------------------------------- loop */

  let raf = 0;
  let visible = true;
  let start = 0;

  const frame = (now) => {
    if (!start) start = now;
    draw((now - start) / 1000);
    raf = requestAnimationFrame(frame);
  };

  const play = () => {
    if (raf || !visible || document.hidden) return;
    raf = requestAnimationFrame(frame);
  };

  const pause = () => {
    cancelAnimationFrame(raf);
    raf = 0;
  };

  if (reduceMotion) {
    requestAnimationFrame(() => draw(1.4));
    window.addEventListener("resize", () => draw(1.4), { passive: true });
    stage.classList.add("is-ready");
    return;
  }

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(
      (entries) => {
        visible = entries[0].isIntersecting;
        visible ? play() : pause();
      },
      { threshold: 0 }
    ).observe(canvas);
  }

  document.addEventListener("visibilitychange", () => (document.hidden ? pause() : play()));
  window.addEventListener("resize", resize, { passive: true });

  stage.classList.add("is-ready");
  play();
})();
