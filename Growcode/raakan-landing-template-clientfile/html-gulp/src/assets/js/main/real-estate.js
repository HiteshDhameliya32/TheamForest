// @charset "UTF-8";
/*!
 * Construction js
 * Raakan Template v1.0.0 (https://www.raakan.itcoders.in/)
 * Copyright 2023 The Raakan Authors * Designed & Develop By IT-Coders
 */

'use strict';

$('#sidePanelButton').click(function (e) {
  e.preventDefault();
  $('#sidePanel').addClass('open');
  $('#mainStack').addClass('shift');
}); // end click

$('#sidePanelClose').click(function (e) {
  e.preventDefault();
  $('#sidePanel').removeClass('open');
  $('#mainStack').removeClass('shift');
});
// end click

$(document).on('ready', function () {
  $('.list').click(function () {
    const dataValue = $(this).attr('data-filter');
    if (dataValue == 'all-items') {
      $('.item').show();
    } else {
      $('.item')
        .not('.' + dataValue)
        .hide();
      $('.item')
        .filter('.' + dataValue)
        .show();
    }
  });
});

$('.list').on('click', function () {
  $(this).addClass('active').siblings().removeClass('active');
});
