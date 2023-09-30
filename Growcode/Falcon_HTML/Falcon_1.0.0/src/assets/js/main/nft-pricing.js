// @charset "UTF-8";
/*!
 * Countdown section js
 * Falcon Template v1.0.0 (https://falconhtml.netlify.app/)
 * Copyright 2023 The Falcon Authors * Designed & Develop By FluxsiApp
 */

'use strict';

let countDownDate = new Date('JAN 25, 2023 18:00:00').getTime();

let x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('demo').innerHTML = days + 'd ';

  document.getElementById('demo1').innerHTML = hours + 'h ';

  document.getElementById('demo2').innerHTML = minutes + 'm ';

  document.getElementById('demo3').innerHTML = seconds + 's ';

  if (distance < 0) {
    clearInterval(x);
    document.getElementById('demo').innerHTML = 'EXPIRED';
    document.getElementById('demo1').innerHTML = 'EXPIRED';
    document.getElementById('demo2').innerHTML = 'EXPIRED';
    document.getElementById('demo3').innerHTML = 'EXPIRED';
  }
}, 1000);

// Countdown section end

// rangeSlider start

let slider = document.getElementById('customRange');
let output = document.getElementById('move');

output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
};

estimate();

$('.form-group').on('change', '.prc', estimate);

function estimate() {
  let totalSum = 0,
    add,
    v,
    m;
  $('.form-group .prc').each(function (i, el) {
    if ($(el).is(':checkbox') && !$(el).is(':checked')) {
      add = 0;
    } else if ($(el).hasClass('e-range')) {
      v = parseInt($(el).val());
      m = parseInt($(el).attr('option'));
      add = v * m;
    } else {
      add = parseFloat($(el).val());
    }
    totalSum += add;
  });

  $('#result').html(totalSum);
}

//   rangeSlider end

// start change coin value
function myCoins() {
  let x = document.getElementById('coins').value;
  document.getElementById('result').innerHTML = x;
}
// end change coin value
