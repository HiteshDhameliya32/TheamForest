// @charset "UTF-8";
/*!
 * Cosmetic and tea js
 * Falcon Template v1.0.0 (https://falconhtml.netlify.app/)
 * Copyright 2023 The Falcon Authors * Designed & Develop By FluxsiApp
 */

'use strict';

// hero section slider
let cosmeticswiper = new Swiper('.cosmeticswiper', {
  loop: true,
  autoplay: {
    delay: 4000,
  },
});

// offer modal in copy text
function myFunction() {
  let Text = document.getElementById('mycopy');
  Text.select();
  navigator.clipboard.writeText(Text.value);
}

// cosmetic count section
const counter = document.querySelectorAll('.counter_value');
const speed = 300; // The lower the slower
counter.forEach((counter_value) => {
  const updateCount = () => {
    const target = +counter_value.getAttribute('data-target');
    const count = +counter_value.innerText;
    const inc = target / speed;
    // Check if target is reached
    if (count < target) {
      // Add inc to count and output in counter_value
      counter_value.innerText = (count + inc).toFixed(0);
      // Call function every ms
      setTimeout(updateCount, 1);
    } else {
      counter_value.innerText = target;
    }
  };
  updateCount();
});

//
// cosmetic-review swiper
let cosmeticreviewSwiper = new Swiper('.cosmeticreviewSwiper', {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});
