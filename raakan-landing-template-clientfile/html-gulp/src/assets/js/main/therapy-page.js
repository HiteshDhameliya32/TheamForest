// @charset "UTF-8";
/*!
* Therapy js
* Raakan Template v1.0.0 (https://www.raakan.itcoders.in/)
* Copyright 2023 The Raakan Authors * Designed & Develop By IT-Coders
*/

"use strict";

/********** Background Image slider **********/ 
function cycleBackgrounds() {
  let index = 0;
  let $imageEls = $('.slider .slider-slide'); // Get the images to be cycled.
  setInterval(function () {
      // Get the next index.  If at end, restart to the beginning.
      index = index + 1 < $imageEls.length ? index + 1 : 0;

      // Show the next
      $imageEls.eq(index).addClass('show');

      // Hide the previous
      $imageEls.eq(index - 1).removeClass('show');
  }, 4000);
};

// Document Ready.
$(function () {
  cycleBackgrounds();
});

/********** After-Before Slider **********/

const slider = document.getElementById('before-after-slider');
const before = document.getElementById('before-image');
const beforeImage = before.getElementsByTagName('img')[0];
const resizer = document.getElementById('resizer');

let active = false;

//Sort overflow out for Overlay Image
document.addEventListener("DOMContentLoaded", function() {
  let width = slider.offsetWidth;
  beforeImage.style.width = width + 'px';
});

//Adjust width of image on resize 
window.addEventListener('resize', function() {
  let width = slider.offsetWidth;
  beforeImage.style.width = width + 'px';
})

resizer.addEventListener('mousedown',function(){
  active = true;
 resizer.classList.add('resize');

});

document.body.addEventListener('mouseup',function(){
  active = false;
 resizer.classList.remove('resize');
});

document.body.addEventListener('mouseleave', function() {
  active = false;
  resizer.classList.remove('resize');
});

document.body.addEventListener('mousemove',function(e){
  if (!active) return;
  let x = e.pageX;
  x -= slider.getBoundingClientRect().left;
  slideIt(x);
  pauseEvent(e);
});

resizer.addEventListener('touchstart',function(){
  active = true;
  resizer.classList.add('resize');
});

document.body.addEventListener('touchend',function(){
  active = false;
  resizer.classList.remove('resize');
});

document.body.addEventListener('touchcancel',function(){
  active = false;
  resizer.classList.remove('resize');
});

//calculation for dragging on touch devices
document.body.addEventListener('touchmove',function(e){
  if (!active) return;
  let x;
  
  let i;
  for (i=0; i < e.changedTouches.length; i++) {
  x = e.changedTouches[i].pageX; 
  }
  
  x -= slider.getBoundingClientRect().left;
  slideIt(x);
  pauseEvent(e);
});

function slideIt(x){
    let transform = Math.max(0,(Math.min(x,slider.offsetWidth)));
    before.style.width = transform+"px";
    resizer.style.left = transform-0+"px";
}

//stop div being selected.
function pauseEvent(e){
    if(e.stopPropagation) e.stopPropagation();
    if(e.preventDefault) e.preventDefault();
    e.cancelBubble=true;
    e.returnValue=false;
    return false;
}
