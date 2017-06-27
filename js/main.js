'use strict';
var mainNav = document.querySelector('.main-navigation');
var popularBtn = document.querySelector('.popular-item__btn');
var catalogBtn = document.querySelectorAll('.catalog-item__btn-basket');
var navToggler = document.querySelector('.navigation-toggler');
var modal = document.querySelector('.modal-size');
var moduleBtn = document.querySelector('.modal-size__btn');
var modalOverlay = document.querySelector('.modal-overlay');

mainNav.classList.remove('main-navigation--nojs');
navToggler.classList.remove('navigation-toggler--nojs');
navToggler.addEventListener('click', function () {
  if (mainNav.classList.contains('main-navigation--closed')) {
    mainNav.classList.remove('main-navigation--closed');
    navToggler.classList.remove('navigation-toggler--open');
    navToggler.classList.add('navigation-toggler--close');
    mainNav.classList.add('main-navigation--opened');
  } else {
    mainNav.classList.remove('main-navigation--opened');
    navToggler.classList.remove('navigation-toggler--close');
    navToggler.classList.add('navigation-toggler--open');
    mainNav.classList.add('main-navigation--closed');
  }
});

if (popularBtn) {
  popularBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (modal.classList.contains('modal-size--close') && modalOverlay.classList.contains('modal-overlay--close')) {
      modal.classList.remove('modal-size--close');
      modalOverlay.classList.remove('modal-overlay--close');
      modal.classList.add('modal-size--open');
      modalOverlay.classList.add('modal-overlay--open');
    } else {
      modal.classList.remove('modal-size--open');
      modal.classList.add('modal-size--close');
      modalOverlay.classList.remove('modal-overlay--open');
      modalOverlay.classList.add('modal-overlay--close');
    }
  });

};

if (catalogBtn) {
  for (var i = 0; i < catalogBtn.length; i++) {
    catalogBtn[i].addEventListener('click', function (evt) {
      evt.preventDefault();
      if (modal.classList.contains('modal-size--close') && modalOverlay.classList.contains('modal-overlay--close')) {
        modal.classList.remove('modal-size--close');
        modalOverlay.classList.remove('modal-overlay--close');
        modal.classList.add('modal-size--open');
        modalOverlay.classList.add('modal-overlay--open');
      } else {
        modal.classList.remove('modal-size--open');
        modal.classList.add('modal-size--close');
        modalOverlay.classList.remove('modal-overlay--open');
        modalOverlay.classList.add('modal-overlay--close');
      }

    });
  }
};

moduleBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.remove('modal-size--open');
  modal.classList.add('modal-size--close');
  modalOverlay.classList.remove('modal-overlay--open');
  modalOverlay.classList.add('modal-overlay--close');
});
