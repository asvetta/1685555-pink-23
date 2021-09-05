const mainnavtoggle = document.querySelector('.main-nav--close');
const nav = document.querySelector('.main-nav__list');
const button = document.querySelector('.main-nav__toggle');

nav.classList.add('.main-nav--open');

button.addEventListener('click', function (evt) {
  evt.preventDefault();
  nav.classList.toggle('main-nav--open');
});
