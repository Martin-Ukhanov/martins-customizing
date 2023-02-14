const menu = document.querySelector('menu');
const openMenuBtn = document.getElementById('open-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const menuNavElements = document.querySelector('menu nav').childNodes;

openMenuBtn.addEventListener('click', () => {
  menu.classList.remove('translate-x-full');
});

closeMenuBtn.addEventListener('click', () => {
  menu.classList.add('translate-x-full');
});

menuNavElements.forEach((element) => {
  element.addEventListener('click', () => {
    menu.classList.add('translate-x-full');
  })
});
