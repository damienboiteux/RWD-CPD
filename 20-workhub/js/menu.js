const burgerButton = document.querySelector('.burger');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav a');

if (burgerButton && mainNav) {
  burgerButton.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    burgerButton.classList.toggle('is-open');
    burgerButton.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      burgerButton.classList.remove('is-open');
      burgerButton.setAttribute('aria-expanded', 'false');
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 992) {
      mainNav.classList.remove('is-open');
      burgerButton.classList.remove('is-open');
      burgerButton.setAttribute('aria-expanded', 'false');
    }
  });
}
