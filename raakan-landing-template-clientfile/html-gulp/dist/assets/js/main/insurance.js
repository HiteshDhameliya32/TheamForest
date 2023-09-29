// @charset "UTF-8";
/*!
 * Insurance page js
 * Raakan Template v1.0.0 (https://www.raakan.itcoders.in/)
 * Copyright 2023 The Raakan Authors * Designed & Develop By IT-Coders
 */

'use strict';

// news-articles
let newsSwiper = new Swiper('.newsSwiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
});

// count section
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

//  tab section
function openCity(evt, cityName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }
  document.getElementById(cityName).style.display = 'block';
  evt.currentTarget.className += ' active';
}

// Insurance-companies section
let slider = new Swiper('.trusted-slider', {
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
  },
  breakpoints: {
    576: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },
});

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
