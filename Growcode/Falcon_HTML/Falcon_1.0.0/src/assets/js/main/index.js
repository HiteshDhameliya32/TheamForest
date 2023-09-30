// @charset "UTF-8";
/*!
 * Home page
 * Falcon Template v1.0.0 (https://falconhtml.netlify.app/)
 * Copyright 2023 The Falcon Authors * Designed & Develop By FluxsiApp
 */

'use strict';

const border = CSSRulePlugin.getRule('.content:before');
const h1 = document.querySelector('h1');

const tl = gsap.timeline();

tl.from(border, { delay: 0, duration: 4, cssRule: { scaleX: 0 } });
tl.to(
  h1,
  {
    delay: -2,
    duration: 4,
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    y: '30px',
  },
  '-=2'
);

//
// choose-us
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
// swiper slider
var swiper = new Swiper('.mySwiper', {
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
});

//
// review
const images = document.querySelectorAll('.thumbnail');
images.forEach((image) => {
  image.addEventListener('click', function () {
    activeTestimonial(this.id);
  });

  image.addEventListener('mouseover', function () {
    activeTestimonial(this.id, 'hover-active');
  });

  image.addEventListener('mouseleave', function () {
    activeTestimonial(this.id, 'hover-active', true);
  });
});

function activeTestimonial(id, className, hasRemove) {
  if (hasRemove) {
    // on mouseleave
    const previousActiveContent = document.querySelector(
      '.content.' + className
    );
    if (previousActiveContent) {
      previousActiveContent.classList.remove(className);
    }
    const clickedActiveContent = document.querySelector(
      '.content.active.past-active'
    );
    if (clickedActiveContent) {
      clickedActiveContent.classList.remove('past-active');
    }

    // content-title
    const previousActiveContentTitle = document.querySelector(
      '.content-title.' + className
    );
    if (previousActiveContentTitle) {
      previousActiveContentTitle.classList.remove(className);
    }
    const clickedActiveContentTitle = document.querySelector(
      '.content-title.active.past-active'
    );
    if (clickedActiveContentTitle) {
      clickedActiveContentTitle.classList.remove('past-active');
    }
  } else if (className) {
    // on mouseover
    const previousActiveContent = document.querySelector(
      '.content.' + className
    );
    if (previousActiveContent) {
      previousActiveContent.classList.remove(className);
    }

    const clickedActiveContent = document.querySelector(
      '.content.active:not(.past-active)'
    );
    if (clickedActiveContent) {
      clickedActiveContent.classList.add('past-active');
    }

    const contentId = `#content${id.slice(-1)}`;
    const content = document.querySelector(contentId);
    content.classList.add(className);

    // content title
    const previousActiveContentTitle = document.querySelector(
      '.content-title.' + className
    );
    if (previousActiveContentTitle) {
      previousActiveContentTitle.classList.remove(className);
    }

    const clickedActiveContentTitle = document.querySelector(
      '.content-title.active:not(.past-active)'
    );
    if (clickedActiveContentTitle) {
      clickedActiveContentTitle.classList.add('past-active');
    }

    const contentIdTitle = `#image${id.slice(-1)}`;
    const contentTitle = document.querySelector(contentIdTitle);
    contentTitle.classList.add(className);
  } else {
    // on click
    const clickedActiveContent = document.querySelector(
      '.content.active.past-active'
    );
    if (clickedActiveContent) {
      clickedActiveContent.classList.remove('past-active');
    }
    const previousActiveContent = document.querySelector('.content.active');
    previousActiveContent.classList.remove('active');

    const contentId = `#content${id.slice(-1)}`;
    const content = document.querySelector(contentId);
    content.classList.add('active');

    // content title
    const clickedActiveContentTitle = document.querySelector(
      '.content-title.active.past-active'
    );
    if (clickedActiveContentTitle) {
      clickedActiveContentTitle.classList.remove('past-active');
    }
    const previousActiveContentTitle = document.querySelector(
      '.content-title.active'
    );
    previousActiveContentTitle.classList.remove('active');

    const contentIdTitle = `#image${id.slice(-1)}`;
    const contentTitle = document.querySelector(contentIdTitle);
    contentTitle.classList.add('active');
  }
}
