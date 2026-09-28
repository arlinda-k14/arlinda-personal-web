var navToggle = document.querySelector(".nav-toggle");
var siteNav = document.querySelector(".site-nav");

navToggle.addEventListener("click", function () {
  var isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
  siteNav.classList.toggle("open");
});

document.addEventListener("click", function (event) {
  if (!siteNav.classList.contains("open")) return;
  if (event.target.closest("a")) {
    siteNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation menu");
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && siteNav.classList.contains("open")) {
    siteNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation menu");
    navToggle.focus();
  }
});

var yearEls = document.querySelectorAll("[data-year]");
yearEls.forEach(function (el) {
  el.textContent = new Date().getFullYear();
});