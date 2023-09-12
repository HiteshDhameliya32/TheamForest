// @charset "UTF-8";
/*!
* Slice v1.0.0 
* Copyright 2022 The Slice Authors * Designed & Develop By Slice
*/

/**
 * Load Custom validators
 */
const openWelcomePopup = () => {
    setTimeout(function() {
        jQuery('#welcomePopupModel').modal('show');
    }, 500);
}

/**
 * Cookie functions
 * Sample: setAppCookie('username', username, 30);
 */
const setAppCookie = (cName, cValue, expDays) => {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
};

/**
 * Get Cookie Value
 * Sample: getAppCookie('username');
 * @param {Cookie Name} cName 
 * @returns Value of the cookie
 */
const getAppCookie = (cName) => {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded.split('; ');
    let res;
    cArr.forEach(val => {
        if (val.indexOf(name) === 0) res = val.substring(name.length);
    })
    return res;
};

/**
 * Theme Setting
 * =============
 */
const setThemeConfiguration = () => {
    let defaultConfiguration = getAppCookie('customize-option');
    if (defaultConfiguration) {
        defaultConfiguration = JSON.parse(defaultConfiguration);
    } else {
        // Default theme configuration
        defaultConfiguration = {
            theme: 'theme-default',
            scheme: 'scheme-light',
            layout: 'layout-classic',
            table: 'table-fancy',
            font: 'font-sans',
            buttons: 'buttons-rectangle',
            input: 'input-background',
            sidebar: 'sidebar-default',
            header: 'header-default',
            sidebar_bg: 'sidebar-bg-default',
            direction: 'ltr'
        };
        setAppCookie('customize-option', JSON.stringify(defaultConfiguration), 1);
    }
    const inspectObject = obj => {
        for (const prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                $('[data-class="' + obj[prop] + '"').addClass('active');
                $('body').addClass(obj[prop]);
                if(prop == 'direction') {
                  $('html').attr('dir', obj[prop]);
                  // Dynamic load css for the rtl/ltr
                  if(obj[prop] == 'rtl') {
                    $('#bootstrapLink').attr('href', 'assets/css/plugins/bootstrap.rtl.min.css');
                  } else {
                    $('#bootstrapLink').attr('href', 'assets/css/plugins/bootstrap.min.css');
                  }
                }
            }
        }
    }
    inspectObject(defaultConfiguration);
}
const manageNavigationMenu = () => {
  let path = window.location.href.split(/[?#]/)[0];
  $('ul a').each(function () {
    if (this.href === path || this.href === path + '#' || this.href === path + 'index.html') {
      $(this).addClass('active');
      $(this).parents('li').addClass('active');
      if($('body').hasClass('layout-compact') || $('body').hasClass('layout-thin')) {
        $(this).parents('ul.treeview').addClass('non-active');
      }
      if(!$('body').hasClass('layout-compact') && !$('body').hasClass('layout-thin')) {
        $(this).parents('ul.treeview-menu').addClass('active');
      }
      $(this).parents('ul.treeview').addClass('active');
    }
  });
}
const manageLightDarkMode = () => {
  $('#modeSwitchChk').on('change', function() {
    let className = $(this).attr('data-lightmode');
    let removeClassName = $(this).attr('data-darkmode');
    if($(this).is(':checked')) {
      className = $(this).attr('data-darkmode');
      removeClassName = $(this).attr('data-lightmode');
      // Handle dark mode
      $('button[data-appconfig="header"][data-class="header-black"]').trigger('click');
      $('button[data-appconfig="sidebar"][data-class="sidebar-black"]').trigger('click');
    } else {
      $('button[data-appconfig="header"][data-class="header-default"]').trigger('click');
      $('button[data-appconfig="sidebar"][data-class="sidebar-default"]').trigger('click');
    }
    if ($('body').hasClass(removeClassName)) {
      $('body').removeClass(removeClassName);
    }
    $('body').addClass(className);
    $('[data-class="'+className+'"]').addClass('active');
    $('[data-class="'+removeClassName+'"]').removeClass('active');
    
    let customizeOption = getAppCookie('customize-option');
    let currentConfig = $(this).attr('data-appconfigname');
    if (customizeOption) {
      customizeOption = JSON.parse(customizeOption);
    } else {
      customizeOption = {};
    }
    customizeOption[currentConfig] = className;
    setAppCookie('customize-option', JSON.stringify(customizeOption), 1);
  });
  let customizeOption = getAppCookie('customize-option');
  if (customizeOption) {
    customizeOption = JSON.parse(customizeOption);
  } else {
    customizeOption = {};
  }
  let currentConfig = $('#modeSwitchChk').attr('data-appconfigname');
  let darkModeClassName = $('#modeSwitchChk').attr('data-darkmode');
  if(currentConfig && customizeOption[currentConfig] && customizeOption[currentConfig] == darkModeClassName) {
    $('#modeSwitchChk').prop('checked', true);
  }
}
const initializeTheme = () => {
    setThemeConfiguration();
    // Event :: Dismiss modal
    $('[data-dismiss="modal"]').on('click', function() {
        $(this).parents('.modal').modal('hide');
    });
    // initializeWelcomePopup();
    // loadCustomValidators();
    // Manage navigation menu active class
    manageNavigationMenu();
    manageLightDarkMode();
}

$(function() {
    "use strict";
    // Initialize the theme
    initializeTheme();
});