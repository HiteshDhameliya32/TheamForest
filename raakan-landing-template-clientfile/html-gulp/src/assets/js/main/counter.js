// @charset "UTF-8";
/*!
 * Business Page Counter
 * Raakan Template v1.0.0 (https://www.raakan.itcoders.in/)
 * Copyright 2023 The Raakan Authors * Designed & Develop By IT-Coders
 */

'use strict';

// ********* All Pages Counter Js ********* 
function visible(partial) {
  var $t = partial,
      $w = jQuery(window),
      viewTop = $w.scrollTop(),
      viewBottom = viewTop + $w.height(),
      _top = $t.offset().top,
      _bottom = _top + $t.height(),
      compareTop = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom;

  return ((compareBottom <= viewBottom) && (compareTop >= viewTop) && $t.is(':visible'));

}

$(window).scroll(function(){

if(visible($('.count-digit')))
  {
    if($('.count-digit').hasClass('counter-loaded')) return;
    $('.count-digit').addClass('counter-loaded');
    
$('.count-digit').each(function () {
var $this = $(this);
jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
  duration: 5000,
  easing: 'swing',
  step: function () {
    $this.text(Math.ceil(this.Counter));
  }
});
});
  }
})

  
