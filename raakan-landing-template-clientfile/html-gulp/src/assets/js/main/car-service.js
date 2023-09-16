// @charset "UTF-8";
/*!
* Car Service
* Raakan Template v1.0.0 (https://www.raakan.itcoders.in/)
* Copyright 2023 The Raakan Authors * Designed & Develop By IT-Coders
*/

'use strict';

// hero swiper
let carSwiper = new Swiper(".carSwiper", {
  loop: true,
  autoplay: {
    delay: 4000,
  },
});

// offer swiper
let offerSwiper = new Swiper(".offerSwiper", {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 4000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
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

// modal in copy text
function myFunction() {
  let Text = document.getElementById("mycopy");
  Text.select();
  navigator.clipboard.writeText(Text.value);
}

// review swiper
let reviewslider = new Swiper(".reviewslider", {
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 4000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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

// count section
const counter = document.querySelectorAll(".counter_value");
const speed = 300; // The lower the slower
counter.forEach((counter_value) => {
  const updateCount = () => {
    const target = +counter_value.getAttribute("data-target");
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
