let menuOpenBtn = document.getElementById('menu-btn'); /*open btn*/
let mobileMenu = document.getElementById('mobile-menu'); /*mobile menu*/
let menuCloseBtn = document.getElementById('menu-btn-close'); /*close btn*/

/* open menu */
menuOpenBtn.addEventListener('click', function () {
  mobileMenu.classList.add('is-open');
  alert(mobileMenu.classList);
  return true;
});

/* close menu */
menuCloseBtn.addEventListener('click', function () {
  mobileMenu.classList.remove('is-open');
  alert(mobileMenu.classList);
  return true;
});
