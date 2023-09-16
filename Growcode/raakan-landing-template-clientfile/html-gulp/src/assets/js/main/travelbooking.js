// @charset "UTF-8";
/*!
* Travel Booking js
* Raakan Template v1.0.0 (https://www.raakan.itcoders.in/)
* Copyright 2023 The Raakan Authors * Designed & Develop By IT-Coders
*/
"use strict";

let swiper = new Swiper(".mySwiper1", {
  slidesPerView: 1,
  spaceBetween: 15,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 4000,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});
