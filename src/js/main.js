'use strict';

const btn = document.querySelectorAll('.button');
const modal = document.querySelector('.modal-bg');
const closeBtn = document.querySelector('.modal__close');
const bnfItem = document.querySelectorAll('.benefits__item');

btn.forEach(function (item) {
	item.addEventListener('click', function () {
		modal.classList.add('modal-bg_active');
	});
});

closeBtn.addEventListener('click', function () {
	modal.classList.remove('modal-bg_active');
});
