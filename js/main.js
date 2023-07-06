const navMain = document.querySelector('.header__site-list');
const navToggle = document.querySelector('.header__toggle');

navMain.classList.remove('header__site-list_nojs');
navToggle.classList.remove('header__toggle_close');

navMain.classList.add('header__site-list_closed');
navToggle.classList.add('header__toggle_open');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('header__site-list_closed')) {
    navMain.classList.remove('header__site-list_closed');
    navToggle.classList.remove('header__toggle_open');

    navMain.classList.add('header__site-list_opened');
    navToggle.classList.add('header__toggle_close');
  } else {
    navMain.classList.add('header__site-list_closed');
    navToggle.classList.add('header__toggle_open');

    navMain.classList.remove('header__site-list_opened');
    navToggle.classList.remove('header__toggle_close');
  }
});