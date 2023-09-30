// @charset "UTF-8";
/*!
 * Agency Page Counter
 * Falcon Template v1.0.0 (https://falconhtml.netlify.app/)
 * Copyright 2023 The Falcon Authors * Designed & Develop By FluxsiApp
 */

'use strict';

$.fn.jQuerySimpleCounter = function (options) {
  let settings = $.extend(
    {
      start: 0,
      end: 100,
      easing: 'swing',
      duration: 400,
      complete: '',
    },
    options
  );

  let thisElement = $(this);

  $({ count: settings.start }).animate(
    { count: settings.end },
    {
      duration: settings.duration,
      easing: settings.easing,
      step: function () {
        let mathCount = Math.ceil(this.count);
        thisElement.text(mathCount);
      },
      complete: settings.complete,
    }
  );
};

$('#number1').jQuerySimpleCounter({ end: 12, duration: 3000 });
$('#number2').jQuerySimpleCounter({ end: 55, duration: 3000 });
$('#number3').jQuerySimpleCounter({ end: 359, duration: 2000 });
$('#number4').jQuerySimpleCounter({ end: 246, duration: 2500 });

//counter js
let countDownDate = new Date('dec 1, 2023 15:37:25').getTime();

let x = setInterval(function () {
  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (10000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('days').innerHTML = days + '';
  document.getElementById('hours').innerHTML = hours + '';
  document.getElementById('mins').innerHTML = minutes + '';
  document.getElementById('secs').innerHTML = seconds + '';

  if (distance < 0) {
    clearInterval(x);

    document.getElementById('days').innerHTML = '';
    document.getElementById('hours').innerHTML = '';
    document.getElementById('mins').innerHTML = '';
    document.getElementById('secs').innerHTML = '';
    document.getElementById('end').innerHTML = 'TIME UP!!';
  }
}, 1000);

// Open button
function openNav() {
  document.getElementById('myNav').style.width = '100%';
}

function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}
