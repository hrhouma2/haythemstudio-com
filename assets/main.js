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

  /* ---------- Sandwich menu ---------- */

  const navToggle = document.querySelector("[data-nav-toggle]");
  const navPanel = document.getElementById("site-menu");
  if (navToggle && navPanel) {
    const setMenu = (open) => {
      navToggle.setAttribute("aria-expanded", String(open));
      navToggle.setAttribute("aria-label", open ? navToggle.dataset.labelClose : navToggle.dataset.labelOpen);
      navPanel.classList.toggle("is-open", open);
    };

    const isOpen = () => navToggle.getAttribute("aria-expanded") === "true";

    navToggle.addEventListener("click", () => setMenu(!isOpen()));

    navPanel.addEventListener("click", (event) => {
      if (event.target.closest("a")) setMenu(false);
    });

    document.addEventListener("click", (event) => {
      if (isOpen() && !event.target.closest(".site-nav")) setMenu(false);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape" || !isOpen()) return;
      setMenu(false);
      navToggle.focus();
    });

    // Repasser en mode bureau avec le menu ouvert laisserait un etat incoherent.
    const wide = window.matchMedia("(min-width: 861px)");
    const onWide = (event) => {
      if (event.matches) setMenu(false);
    };
    wide.addEventListener ? wide.addEventListener("change", onWide) : wide.addListener(onWide);
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

})();
