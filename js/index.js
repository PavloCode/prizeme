'use strict';

const bt_open_modal = document.querySelector('.open-modal-js');
const bt_close_modal = document.querySelector('.modal-close-js');
const modalWindow = document.querySelector('.wrap-modal-window');
const modalImg = document.querySelector('.modal-img-js');

const next_bt = document.querySelector('.next-js');
const prev_bt = document.querySelector('.prev-js');

bt_open_modal.addEventListener('click', openModal);
bt_close_modal.addEventListener('click', closeModal);

const imgGallay = ['./img/add1.jpg', './img/add2.jpg'];
let count = 0;

function openModal(event) {
    const target = event.target;
    if (target.nodeName !== 'IMG') return;

    if (target.classList.contains('diploma-js')) openModalImg();
    if (target.classList.contains('diploma-add-js')) openModelGallary();
}

function openModalImg() {
    modalWindow.classList.add('open');
    modalImg.src = './img/diploma.jpg';
}

function openModelGallary() {
    modalWindow.classList.add('open');
    const modalButtons = document.querySelector('.wrap-modal-button');
    modalImg.src = imgGallay[0];
    modalButtons.classList.add('open-buttons');
}

function closeModal() {
    modalWindow.classList.remove('open');
    const modalButtons = document.querySelector('.wrap-modal-button');
    if (modalButtons.classList.contains('open-buttons')) modalButtons.classList.remove('open-buttons');
}

next_bt.addEventListener('click', function() {
    if (count < imgGallay.length - 1) {
        count += 1;
        modalImg.src = imgGallay[count];
    } else {
        count = 0;
        modalImg.src = imgGallay[count];
    }
});

prev_bt.addEventListener('click', function() {
    if (count !== 0) {
        count -= 1;
        modalImg.src = imgGallay[count];
    } else {
        count = imgGallay.length - 1;
        modalImg.src = imgGallay[count];
    }
});