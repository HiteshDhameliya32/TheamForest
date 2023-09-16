// @charset "UTF-8";
/*!
 * Typing Text Animation js
 * Raakan Template v1.0.0 (https://www.raakan.itcoders.in/)
 * Copyright 2023 The Raakan Authors * Designed & Develop By IT-Coders
 */

'use strict';

/********** Typing Text Animation Start **********/
try {
  let TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  TxtType.prototype.tick = function () {
    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
    let that = this;
    let delta = 200 - Math.random() * 100;
    if (this.isDeleting) {
      delta /= 2;
    }
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
    setTimeout(function () {
      that.tick();
    }, delta);
  };
  function typewrite() {
    if (toRotate === 'undefined') {
        changeText()
    } else
        var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid transparent}";
    document.body.appendChild(css);
};
  window.onload(typewrite());
} catch (err) {}
/********** Typing Text Animation END **********/

/********** FadeInBottom Animation Start **********/
window.onload = function () {
  animateSequence();
  animateRandom();
};

function animateSequence() {
  let a = document.getElementsByClassName('sequence');
  for (const element of a) {
    let $this = element;
    let letter = $this.innerHTML;
    letter = letter.trim();
    let str = '';
    let delay = 100;
    for (l = 0; l < letter.length; l++) {
      if (letter[l] != ' ') {
        str +=
          '<span style="animation-delay:' +
          delay +
          'ms; -moz-animation-delay:' +
          delay +
          'ms; -webkit-animation-delay:' +
          delay +
          'ms; ">' +
          letter[l] +
          '</span>';
        delay += 150;
      } else str += letter[l];
    }
    $this.innerHTML = str;
  }
}

function animateRandom() {
  let a = document.getElementsByClassName('random');
  for (const element of a) {
    let $this = element;
    let letter = $this.innerHTML;
    letter = letter.trim();
    let delay = 70;
    let delayArray = new Array();
    let randLetter = new Array();
    for (j = 0; j < letter.length; j++) {
      while (1) {
        let random = getRandomInt(0, letter.length - 1);
        if (delayArray.indexOf(random) == -1) break;
      }
      delayArray[j] = random;
    }
    for (l = 0; l < delayArray.length; l++) {
      let str = '';
      let index = delayArray[l];
      if (letter[index] != ' ') {
        str =
          '<span style="animation-delay:' +
          delay +
          'ms; -moz-animation-delay:' +
          delay +
          'ms; -webkit-animation-delay:' +
          delay +
          'ms; ">' +
          letter[index] +
          '</span>';
        randLetter[index] = str;
      } else randLetter[index] = letter[index];
      delay += 80;
    }
    randLetter = randLetter.join('');
    $this.innerHTML = randLetter;
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
/********** FadeInBottom Animation END **********/
