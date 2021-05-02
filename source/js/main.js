const mainNav = document.querySelector('.main-nav');
const mainNavToggle = document.querySelector('.main-nav__toggle');
const pageHeader = document.querySelector('.page-header');

mainNav.classList.remove('main-nav--nojs');
mainNav.classList.add('main-nav--closed');
mainNav.classList.remove('main-nav--opened');
pageHeader.classList.remove('page-header--opened');
pageHeader.classList.add('page-header--closed');

mainNavToggle.addEventListener('click', function () {
  if (mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
    pageHeader.classList.add('page-header--opened');
    mainNavToggle.classList.toggle('main-nav__toggle--close');
  } else {
    pageHeader.classList.remove('page-header--opened');
    mainNav.classList.remove('main-nav--opened');
    mainNav.classList.add('main-nav--closed');
    mainNavToggle.classList.toggle('main-nav__toggle--close');
  }
});
