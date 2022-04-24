"use strict";

const button = document.querySelector('#menuButton');

function toggleClass() {
  const sideMenu = document.querySelector('.side-menu');
  sideMenu.classList.toggle('hidden');
}

button.addEventListener('click', toggleClass);