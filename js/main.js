/* Tahsenk shared interaction layer — static HTML/CSS/JS */
(() => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.querySelector(".nav-links");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const closeMenu = () => {
    if (!navLinks || !menuToggle) return;
    navLinks.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  };

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("active");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", event => {
      if (event.key === "Escape") closeMenu();
    });
    document.addEventListener("click", event => {
      if (!navLinks.classList.contains("active")) return;
      if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
    });
  }

  const revealElements = [...document.querySelectorAll("section:not(.hero)")];
  const revealOnScroll = () => {
    const threshold = window.innerHeight - 100;
    revealElements.forEach(element => {
      if (element.getBoundingClientRect().top < threshold) {
        element.classList.add("is-visible");
      }
    });
  };

  revealElements.forEach(element => {
    element.classList.add("reveal-section");
    if (reducedMotion.matches) element.classList.add("is-visible");
  });
  if (!reducedMotion.matches) {
    window.addEventListener("scroll", revealOnScroll, { passive: true });
    window.addEventListener("load", revealOnScroll, { once: true });
  }
  reducedMotion.addEventListener?.("change", event => {
    if (event.matches) revealElements.forEach(element => element.classList.add("is-visible"));
  });

  const backToTop = document.createElement("button");
  backToTop.type = "button";
  backToTop.className = "back-to-top";
  backToTop.textContent = "↑";
  backToTop.setAttribute("aria-label", "العودة إلى أعلى الصفحة");
  backToTop.title = "العودة إلى أعلى الصفحة";
  document.body.appendChild(backToTop);

  const syncBackToTop = () => backToTop.classList.toggle("is-visible", window.scrollY > 300);
  window.addEventListener("scroll", syncBackToTop, { passive: true });
  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reducedMotion.matches ? "auto" : "smooth" }));

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("img").forEach(image => {
      if (!image.hasAttribute("loading") && !image.closest(".hero, .product-visual")) image.loading = "lazy";
      image.addEventListener("error", () => {
        if (image.dataset.fallback) return;
        image.dataset.fallback = "true";
        image.src = "images/products/product1/1.webp";
      }, { once: true });
    });
  });
})();
