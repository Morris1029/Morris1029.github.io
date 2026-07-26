const header = document.querySelector("[data-header]");
const nav = document.querySelector("#site-nav");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
const sections = [...document.querySelectorAll("main section[id]")];
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const closeNavigation = () => {
  nav.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
};

navToggle.addEventListener("click", () => {
  const nextOpen = navToggle.getAttribute("aria-expanded") !== "true";
  navToggle.setAttribute("aria-expanded", String(nextOpen));
  nav.classList.toggle("is-open", nextOpen);
  document.body.style.overflow = nextOpen ? "hidden" : "";
});

navLinks.forEach((link) => link.addEventListener("click", closeNavigation));

window.addEventListener(
  "scroll",
  () => header.classList.toggle("is-scrolled", window.scrollY > 24),
  { passive: true },
);

if (reducedMotion) {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
}

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-35% 0px -55%", threshold: 0 },
);

sections.forEach((section) => sectionObserver.observe(section));
document.querySelector("[data-year]").textContent = new Date().getFullYear();
