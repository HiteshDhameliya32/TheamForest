// @charset "UTF-8";
/*!
 * Swiper js
 * Raakan Template v1.0.0 (https://www.raakan.itcoders.in/)
 * Copyright 2023 The Raakan Authors * Designed & Develop By IT-Coders
 */

'use strict';

/********** Swiper-Slider **********/
let mySwiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

/********** Swiper-Slider-1 **********/
let mySwiper_1 = new Swiper('.mySwiper-1', {
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  // loopFillGroupWithBlank: true,
});

/********** Swiper-Slider-2 **********/

let mySwiper_2 = new Swiper('.mySwiper-2', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  },
});

/********** Swiper-Slider-3 **********/

let mySwiper_3 = new Swiper('.mySwiper-3', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
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

/********** Swiper-Slider-4 **********/
let mySwiper_4 = new Swiper('.mySwiper-4', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    576: {
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

/********** Swiper-Slider-collection **********/
let mySwiper_collection = new Swiper('.mySwiper-collection', {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 2,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    450: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    1300: {
      slidesPerView: 3,
    },
  },
});

/********** Swiper-Slider-shop **********/
let swiper_shop = new Swiper('.swiper-shop', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    992: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    576: {
      slidesPerView: 2,
    },
  },
});

// software testimonial carousel
function testimonialcarousel() {
  $('.testimonial-carousel').on('slide.bs.carousel', function (evt) {
    $('.testimonial-carousel .controls li.active').removeClass('active');
    $(
      '.testimonial-carousel .controls li:eq(' +
        $(evt.relatedTarget).index() +
        ')'
    ).addClass('active');
  });
}

/********** Swiper-Slider Food Page **********/
let food_homeslider = new Swiper('.food-homeslider', {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    576: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

let recipe_swiper = new Swiper('.recipe-swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

//  Thumbnail Swiper Slider
let sliderThumbnail = new Swiper('.sliderThumbnail', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  loop: true,
  watchSlidesProgress: true,
});
let sliderThumbnail2 = new Swiper('.sliderThumbnail2', {
  spaceBetween: 10,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: sliderThumbnail,
  },
});
