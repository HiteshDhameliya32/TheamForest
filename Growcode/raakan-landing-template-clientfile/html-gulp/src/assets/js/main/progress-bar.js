// @charset "UTF-8";
/*!
 * Profile page js
 * Raakan Template v1.0.0 (https://www.raakan.itcoders.in/)
 * Copyright 2023 The Raakan Authors * Designed & Develop By IT-Coders
 */

'use strict';

/********** Profile-Page  progress-bar js **********/

window.onscroll = function () {
  if (
    document.querySelectorAll('.progress').length > 0 &&
    document.querySelectorAll('.progress [data-progress]').length > 0
  ) {
    document
      .querySelectorAll('.progress [data-progress]')
      .forEach((x) => AnimateProgress(x));
  }
};

function AnimateProgress(el) {
  el.className = 'animate-progress';
  el.setAttribute(
    'style',
    `--animate-progress:${el.getAttribute('data-progress')}%;`
  );
}

/********** Therapy-Page Progress Bar js **********/

jQuery(document).ready(function () {
  jQuery('.skillbar').each(function () {
    jQuery(this)
      .find('.skillbar-bar')
      .animate(
        {
          width: jQuery(this).attr('data-percent'),
        },
        6000
      );
  });
});

jQuery('.Count').each(function () {
  let $this = $(this);
  jQuery({ Counter: 0 }).animate(
    { Counter: $this.text() },
    {
      duration: 6000,
      easing: 'swing',
      step: function () {
        $this.text(Math.ceil(this.Counter));
      },
    }
  );
});
// END
