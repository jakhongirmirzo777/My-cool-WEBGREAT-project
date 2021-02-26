"use strict";
import "regenerator-runtime/runtime";
import "core-js/stable";
// Preloader

window.addEventListener("load", function () {
  const preload = document.querySelector(".preload");
  preload.classList.add("preload-finish");
});

///// Animation

const close = document.querySelector(".popup__item__close");
const open = document.querySelector(".btn__hero");
const popup = document.querySelector(".popup__item");
const nav = document.querySelector(".navbar-nav");
const scrollbar = document.querySelector(".scroll__top");
const btn = document.querySelector(".btn__large");
const scroll = document.querySelector(".scroll__top");
const services = document.querySelector(".services");
const header = document.querySelector(".header");
const scrollIcon = document.querySelector(".scroll__icon");
open.addEventListener("click", function () {
  popup.classList.remove("popup__hidden");
});

close.addEventListener("click", function () {
  popup.classList.add("popup__hidden");
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !popup.classList.contains("popup__hidden")) {
    popup.classList.add("popup__hidden");
  }
});

const mymap = L.map("mapid").setView([41.3106176, 69.25189120000002], 13);
L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(mymap);
L.marker([41.3106176, 69.25189120000002])
  .addTo(mymap)
  .bindPopup(
    L.popup({
      maxWidth: 250,
      minWidth: 100,
      autoClose: false,
      closeOnClick: false,
      className: `popup`,
    })
  )
  .setPopupContent(`This is our location 😉`)
  .openPopup();

nav.addEventListener("click", function (e) {
  e.preventDefault();
  // Matching strategy
  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

scrollbar.addEventListener("click", function () {
  document.querySelector(".header").scrollIntoView({ behavior: "smooth" });
});

btn.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".services").scrollIntoView({ behavior: "smooth" });
});

// STICKY scroll
const servicesHeight = services.getBoundingClientRect().height;

console.log(servicesHeight);
function stickyScroll(entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    scroll.classList.add("sticky");
    scrollIcon.style.display = "inline-block";
  } else {
    scroll.classList.remove("sticky");
    scrollIcon.style.display = "none";
  }
}
// Intersection observer
const headerObserver = new IntersectionObserver(stickyScroll, {
  root: null,
  threshold: 0,
});
headerObserver.observe(header);

///////////////////////////////////////

///////////////////////////////////////
// SECTIONS REVEALING
// function sectionMove(entries, observing) {
//   console.log(entries);
//   const [entry] = entries;
//   console.log(entry);
//   if (!entry.isIntersecting) return; // Guard I coudn't undrestant deeply! But this fixes problem.
//   entry.target.classList.remove("section--hidden");
//   observing.unobserve(entry.target);
// }
// const sectionObserver = new IntersectionObserver(sectionMove, {
//   root: null,
//   threshold: 0.15,
// });
// allSections.forEach((section) => {
//   section.classList.add("section--hidden");
//   sectionObserver.observe(section);
// });
