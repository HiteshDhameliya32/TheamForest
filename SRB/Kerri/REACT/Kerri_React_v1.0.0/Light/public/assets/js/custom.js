/*-----------------------------------------------------------
 * Template Name    : Kerri | Responsive Bootstrap 4 Personal Template
 * Author           : SRBThemes
 * Created          : March 2018
 * File Description : Main Js file of the template
 *------------------------------------------------------------
 */

!(function ($) {
  "use strict";

  var KerriApp = function () {};

  //PreLoader
  (KerriApp.prototype.initPreLoader = function () {
    $("#status").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }),
    //scroll

    //Scrollspy
    (KerriApp.prototype.initScrollspy = function () {
      var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: "#main_nav",
        offset: 70,
      });
    }),
    //Work
    (KerriApp.prototype.initWork = function () {
      $(window).on("load", function () {
        var $container = $(".work-filter");
        var $filter = $("#menu-filter");
       
        $filter.find("a").on("click", function () {
          var selector = $(this).attr("data-filter");
          $filter.find("a").removeClass("active");
          $(this).addClass("active");
          return false;
        });
      });
    }),
   
    // BACK TO TOP
    (KerriApp.prototype.initBackToTop = function () {
      $(window).on("scroll", function () {
        if ($(this).scrollTop() > 100) {
          $(".back_top").fadeIn();
        } else {
          $(".back_top").fadeOut();
        }
      });
      $(".back_top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
      });
    }),
    

  (KerriApp.prototype.init = function () {
    this.initPreLoader();

    this.initScrollspy();
    this.initWork();
    // this.initMagnificPopup();
    this.initBackToTop();
    // this.initTestimonial();
  }),
    //init
    ($.KerriApp = new KerriApp()),
    ($.KerriApp.Constructor = KerriApp);
})(window.jQuery),
  //initializing
  (function ($) {
    "use strict";
    $.KerriApp.init();
  })(window.jQuery);
