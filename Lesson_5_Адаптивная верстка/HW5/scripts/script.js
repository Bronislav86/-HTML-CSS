const menuActive = document.querySelector('.menuActive');
const burger = document.querySelector('.rightButtons__menu');


function toggleMenu () {
  menuActive.classList.toggle('menuActive_hidden');
}

burger.addEventListener('click', toggleMenu);
