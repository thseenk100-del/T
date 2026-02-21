/* ===============================
   NAVBAR TOGGLE (Mobile)
================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/* ===============================
   CLOSE MENU WHEN CLICK LINK
================================= */

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

/* ===============================
   SCROLL REVEAL EFFECT
================================= */

const revealElements = document.querySelectorAll("section");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
};

window.addEventListener("scroll", revealOnScroll);

revealElements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "all 0.8s ease";
});

/* ===============================
   BACK TO TOP BUTTON
================================= */

const backToTop = document.createElement("button");
backToTop.innerText = "↑";
backToTop.style.position = "fixed";
backToTop.style.bottom = "20px";
backToTop.style.left = "20px";
backToTop.style.padding = "10px 15px";
backToTop.style.border = "none";
backToTop.style.borderRadius = "12px";
backToTop.style.background = "linear-gradient(135deg,#00B4DB,#0083B0)";
backToTop.style.color = "#fff";
backToTop.style.cursor = "pointer";
backToTop.style.display = "none";
backToTop.style.zIndex = "999";

document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

/* ===============================
   LAZY LOADING IMAGES
================================= */

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img");
  images.forEach(img => {
    img.setAttribute("loading", "lazy");
  });
});
