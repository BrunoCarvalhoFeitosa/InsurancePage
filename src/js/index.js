const insurance_OpenMenu = () => {
  const hamburgerMenu = document.querySelector('.b-header__container-hamburger');
  const linksMenu = document.querySelector('.b-header__container-links');
  const closeMenu = document.querySelector('.b-header__container-close-menu');

  hamburgerMenu.addEventListener('click', () => {
    linksMenu.classList.add('menu--active');
    closeMenu.classList.add('menu--active');
    hamburgerMenu.classList.add('menu--desactive');
  });

  closeMenu.addEventListener('click', () => {
    if(linksMenu.classList.contains('menu--active')) {
      linksMenu.classList.remove('menu--active');
      closeMenu.classList.remove('menu--active');
      hamburgerMenu.classList.remove('menu--desactive');
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
    insurance_OpenMenu();
});