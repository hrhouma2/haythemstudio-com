(() => {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const root = document.documentElement;

  /* ---------- Theme ---------- */

  const storedTheme = (() => {
    try {
      return localStorage.getItem("hs-theme");
    } catch {
      return null;
    }
  })();

  if (storedTheme === "light" || storedTheme === "dark") {
    root.dataset.theme = storedTheme;
  }

  const applyThemeColor = () => {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = root.dataset.theme === "light" ? "#f4f2ec" : "#070b0a";
  };
  applyThemeColor();

  document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      root.dataset.theme = root.dataset.theme === "light" ? "dark" : "light";
      applyThemeColor();
      try {
        localStorage.setItem("hs-theme", root.dataset.theme);
      } catch {
        /* stockage indisponible : le thème reste valable pour la session */
      }
    });
  });

  /* ---------- Sticky nav ---------- */

  const nav = document.querySelector(".site-nav");
  if (nav) {
    const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Scroll reveal ---------- */

  const reveals = document.querySelectorAll(".reveal");
  if (reveals.length) {
    if (!("IntersectionObserver" in window) || reduceMotion) {
      reveals.forEach((el) => el.classList.add("is-visible"));
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
      );
      reveals.forEach((el) => observer.observe(el));
    }
  }

  /* ---------- Animated counters ---------- */

  const counters = document.querySelectorAll("[data-count]");
  if (counters.length && "IntersectionObserver" in window && !reduceMotion) {
    const countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          countObserver.unobserve(el);

          const target = Number(el.dataset.count);
          const suffix = el.dataset.suffix || "";
          const duration = 1100;
          const start = performance.now();

          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.round(target * eased) + suffix;
            if (progress < 1) requestAnimationFrame(tick);
          };

          el.textContent = "0" + suffix;
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach((el) => countObserver.observe(el));
  }

  /* ---------- Phone slideshow ---------- */

  const slides = document.querySelectorAll(".phone-screen .slide");
  const caption = document.querySelector("[data-phone-caption]");
  if (slides.length > 1) {
    let index = 0;
    setInterval(() => {
      slides[index].classList.remove("is-active");
      index = (index + 1) % slides.length;
      slides[index].classList.add("is-active");
      if (caption) caption.textContent = slides[index].dataset.caption || "";
    }, 3200);
  }

  /* ---------- Pointer-follow glow on cards ---------- */

  if (window.matchMedia("(hover: hover)").matches) {
    document.querySelectorAll(".app-card").forEach((card) => {
      card.addEventListener("pointermove", (event) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${((event.clientX - rect.left) / rect.width) * 100}%`);
        card.style.setProperty("--my", `${((event.clientY - rect.top) / rect.height) * 100}%`);
      });
    });
  }

  /* ---------- Subtle tilt on the phone mockup ---------- */

  const tiltTarget = document.querySelector("[data-tilt]");
  if (tiltTarget && !reduceMotion && window.matchMedia("(hover: hover)").matches) {
    const wrapper = tiltTarget.parentElement;
    wrapper.addEventListener("pointermove", (event) => {
      const rect = wrapper.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      tiltTarget.style.animation = "none";
      tiltTarget.style.transform = `perspective(900px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg)`;
    });
    wrapper.addEventListener("pointerleave", () => {
      tiltTarget.style.transform = "";
      tiltTarget.style.animation = "";
    });
  }
})();
