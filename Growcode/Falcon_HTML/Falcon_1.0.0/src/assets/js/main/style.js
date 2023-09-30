// @charset "UTF-8";
/*!
 * Falcon common js
 * Falcon Template v1.0.0 (https://falconhtml.netlify.app/)
 * Copyright 2023 The Falcon Authors * Designed & Develop By FluxsiApp
 */

'use strict';

/**
 * get query parameter from url
 */
const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

/********************* light-dark ******************************/

const lightModeButton = document.getElementById(
  'kt_layout_builder_theme_mode_light'
);
const darkModeButton = document.getElementById(
  'kt_layout_builder_theme_mode_dark'
);

const setLayoutMode = (mode) => {
  const htmlTag = document.querySelector('html');
  htmlTag.setAttribute('data-theme', mode || 'light');
};

lightModeButton.addEventListener('change', function () {
  setLayoutMode(lightModeButton.getAttribute('data-theme'));
});

darkModeButton.addEventListener('change', function () {
  setLayoutMode(darkModeButton.getAttribute('data-theme'));
});

/********************* Page Load js ************************/

window.onload = function loader() {
  setTimeout(() => {
    document.getElementById('preloader').style.visibility = 'hidden';
    document.getElementById('preloader').style.opacity = '0';
    // on load set the layout mode
    if (params.layout) {
      setLayoutMode(params.layout);
    }
    // on load set the layout direction
    if (params.direction) {
      setLayoutDirection(params.direction);
    }
  }, 350);
};

/********************* Color Swicher js ************************/

function toggleSwitcher() {
  let i = document.getElementById('style-switcher');
  if (i.style.left === '-189px') {
    i.style.left = '-0px';
  } else {
    i.style.left = '-189px';
  }
}

function setColor(theme) {
  document.getElementById('color-opt').href =
    './scss/colors/' + theme + '.scss';
  toggleSwitcher(false);
}

/********************* Mega menu js ************************/

// Toggle menu
function toggleMenu() {
  document.getElementById('isToggle').classList.toggle('open');
  let isOpen = document.getElementById('navigation');
  if (isOpen.style.display === 'block') {
    isOpen.style.display = 'none';
  } else {
    isOpen.style.display = 'block';
  }
}

// Clickable Menu
if (document.getElementById('navigation')) {
  let elements = document
    .getElementById('navigation')
    .getElementsByTagName('a');
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].onclick = function (elem) {
      if (elem.target.getAttribute('href') === 'javascript:void(0)') {
        if (
          elem &&
          elem.target &&
          elem.target.nextElementSibling &&
          elem.target.nextElementSibling.nextElementSibling
        ) {
          let submenu = elem.target.nextElementSibling.nextElementSibling;
          submenu.classList.toggle('open');
        }
      }
    };
  }
}

let navbar = document.getElementById('topnav');
if(navbar) {
    navbar = navbar.classList; 
    let active_class = 'navbar_scrolled';

   window.addEventListener('scroll', (e) => {
      if (pageYOffset > 0) navbar.add(active_class);
      else navbar.remove(active_class);
    });
}