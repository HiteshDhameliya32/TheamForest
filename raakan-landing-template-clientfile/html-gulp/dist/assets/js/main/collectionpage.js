// @charset "UTF-8";
/*!
 * Collection-page section
 * Raakan Template v1.0.0 (https://www.raakan.itcoders.in/)
 * Copyright 2023 The Raakan Authors * Designed & Develop By IT-Coders
 */

'use strict';

let answers = document.querySelectorAll('.filter-offcanvas');
answers.forEach((event) => {
  event.addEventListener('click', () => {
    if (event.classList.contains('active')) {
      event.classList.remove('active');
    } else {
      event.classList.add('active');
    }
  });
});
// click to open product

$(document).on('ready', function () {
  $('input[type="checkbox"]').change(function () {
    let total_checked = $("input[type='checkbox']:checked").length;
    $('#filter_countdown').html(total_checked);
  });

  let total_checked = $("input[type='checkbox']:checked").length;
  $('#filter_countdown').html(total_checked);
});

// filter product count

const $cards = $('[data-category]');
const $cardsCkb = $('.cardCheckBox');

$cardsCkb.on('change', function () {
  const checkedArr = $cardsCkb
    .filter(':checked')
    .get()
    .map((el) => el.value);

  if (!checkedArr.length) return $cards.removeClass('is-hidden');

  $cards.each(function () {
    const category = $(this).data('category');
    $(this).toggleClass('is-hidden', !checkedArr.includes(category));
  });
});

// checkbox product-card-filter end

const $Cards = $('[data-color]');
const $CardsCkb = $('.cardCheckbox');

$CardsCkb.on('change', function () {
  const checkedArr = $CardsCkb
    .filter(':checked')
    .get()
    .map((el) => el.value);

  if (!checkedArr.length) return $Cards.removeClass('is-hidden');

  $Cards.each(function () {
    const color = $(this).data('color');
    $(this).toggleClass('is-hidden', !checkedArr.includes(color));
  });
});

// color with product-filter end

const $CardS = $('[data-price]');
const $CardSCkb = $('.CardCheckBox');

$CardSCkb.on('change', function () {
  const checkedArr = $CardSCkb
    .filter(':checked')
    .get()
    .map((el) => el.value);

  if (!checkedArr.length) return $CardS.removeClass('is-hidden');

  $CardS.each(function () {
    const price = $(this).data('price');
    $(this).toggleClass('is-hidden', !checkedArr.includes(price));
  });
});

// end offcanvas section

let swiper = new Swiper('.mySwiper1', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: { delay: 2000 },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

//   recommended product

function increaseValue() {
  let value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
}

function decreaseValue() {
  let value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  // value < 1 ? (value = 1) : '';
  value--;
  document.getElementById('number').value = value;
}

// end qty number

let closebtns = document.getElementsByClassName('close');
let i;

for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener('click', function () {
    this.parentElement.style.display = 'none';
  });
}
