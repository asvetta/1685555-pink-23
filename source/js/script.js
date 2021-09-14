const mainnavtoggle = document.querySelector(".main-nav--close");
const nav = document.querySelector(".main-nav");
const button = document.querySelector(".main-nav__toggle");

nav.classList.add("main-nav--open");

button.addEventListener("click", function () {
  nav.classList.toggle("main-nav--open");
  button.classList.toggle("main-nav__toggle--open");
});
