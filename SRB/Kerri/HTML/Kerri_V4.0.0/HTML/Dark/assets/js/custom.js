/*-----------------------------------------------------------
* Template Name    : Kerri | Responsive Bootstrap 4 Personal Template
* Author           : SRBThemes
* Created          : March 2018
* File Description : Main Js file of the template
*------------------------------------------------------------
*/

! function($) {
    "use strict";

    var KerriApp = function() {};

    //PreLoader
    KerriApp.prototype.initPreLoader = function() {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    },

    //scroll
    KerriApp.prototype.initStickyMenu = function() {
        var navbar = document.querySelector('nav')
        window.onscroll = function() {
          // pageYOffset or scrollY
          if (window.pageYOffset > 200) {
            navbar.classList.add('stickyadd')
          } else {
            navbar.classList.remove('stickyadd')
          }
        }
        var navLinks = navbar.querySelectorAll("ul li a");
        [].forEach.call(navLinks, function(div) {
            div.addEventListener('click', () => {
                document.querySelector(".navbar-toggler") ? document.querySelector(".navbar-toggler").click() : '';
            });
        });
    },

    //Scrollspy
    KerriApp.prototype.initScrollspy = function() {
        var scrollSpy = new bootstrap.ScrollSpy(document.body, {
            target: '#main_nav',
            offset: 70
        })
    },

    //Work
    (KerriApp.prototype.initWork = function () {
      $(window).on("load", function () {
        var $container = $(".work-filter");
        var $filter = $("#menu-filter");
        $container.isotope({
          filter: "*",
          layoutMode: "masonry",
          animationOptions: {
            duration: 750,
            easing: "linear",
          },
        });

        $filter.find("a").on("click", function () {
          KerriApp.prototype.currentRunnerIndex++;
          var currentLocalIndex = KerriApp.prototype.currentRunnerIndex;

          var selector = $(this).attr("data-filter");
          $filter.find("a").removeClass("active");
          $(this).addClass("active");

          for (let i = 0; i < $container[0].children.length; i++) {
            let childItem = $container[0].children[i];

            childItem.removeAttribute("data-aos");
          }

          AOS.refreshHard();

          $container.isotope({
            filter: selector,
            animationOptions: {
              animationDuration: 750,
              easing: "linear",
              queue: false,
            },
          });

          setTimeout(function () {
            if (currentLocalIndex !== KerriApp.prototype.currentRunnerIndex) {
              return;
            }

            for (let i = 0; i < $container[0].children.length; i++) {
              let childItem = $container[0].children[i];
              let classList = childItem.classList;

              let localSelector = selector.substring(1);

              if (selector === "*" || classList.contains(localSelector)) {
                childItem.style.display = "initials";
              } else {
                childItem.style.display = "none";
              }

              childItem.setAttribute("data-aos", "fade-up");
            }

            AOS.refreshHard();
          }, 1000);

          return false;
        });
      });
    }),

    //Magnificpop
    KerriApp.prototype.initMagnificPopup = function() {
        $('.img-zoom').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            mainClass: 'mfp-fade',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            }
        });
    },

    // BACK TO TOP
    KerriApp.prototype.initBackToTop = function() {
        $(window).on('scroll',function(){
            if ($(this).scrollTop() > 100) {
                $('.back_top').fadeIn();
            } else {
                $('.back_top').fadeOut();
            }
        }); 
        $('.back_top').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 1000);
            return false;
        });
    },

    //Client
    KerriApp.prototype.initTestimonial = function() {
        $('.owl-carousel').owlCarousel({
            loop:true,
            nav:false,
            items:1,
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            autoHeight: false,
            autoHeightClass: 'owl-height'
        })
    }

    KerriApp.prototype.init = function() {
        this.initPreLoader();
        this.initStickyMenu();
        this.initScrollspy();
        this.initWork();
        this.initMagnificPopup();
        this.initBackToTop();
        this.initTestimonial();
    },
    //init
    $.KerriApp = new KerriApp, $.KerriApp.Constructor = KerriApp
}(window.jQuery),

//initializing
function($) {
    "use strict";
    $.KerriApp.init();
}(window.jQuery);