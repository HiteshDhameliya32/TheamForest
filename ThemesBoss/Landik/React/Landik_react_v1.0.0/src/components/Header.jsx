import React, { useEffect } from "react";
import {NavLink } from "react-router-dom";
import $ from "jquery";


function Header() {
  useEffect(() => {
    initNavbar();
  });
  return (
    <>
      {/* <!-- Header Start --> */}
      <header>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top horizontal-nav">
          <div className="container">
            <NavLink className="navbar-brand" to="/">
              <img
                src="assets/images/logo-dark.png"
                className="img-fluid"
                alt="logo"
              />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                <i className="ti-menu icon-align-right"></i>
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav horizontal-menu">
                <li className="scroll dropdown">
                  <a
                    href="javaScript:void();"
                    className="dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <span>Landing</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink to="/">Landing Page 1</NavLink>
                    </li>
                    <li>
                      <NavLink to="/index2">Landing Page 2</NavLink>
                    </li>
                    <li>
                      <NavLink to="/index3">Landing Page 3</NavLink>
                    </li>
                    <li>
                      <NavLink to="/index4">Landing Page 4</NavLink>
                    </li>
                  </ul>
                </li>
                <li className="scroll dropdown">
                  <a
                    href="javaScript:void();"
                    className="dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <span>Pages</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                      <NavLink to="/service">Service</NavLink>
                    </li>
                    <li className="dropdown">
                      <a
                        href="javaScript:void();"
                        className="dropdown-toggle"
                        data-bs-toggle="dropdown"
                      >
                        Widget
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <NavLink to="/pricing">Pricing</NavLink>
                        </li>
                        <li>
                          <NavLink to="/testimonial">Testimonial</NavLink>
                        </li>
                        <li>
                          <NavLink to="/faqs">FAQs</NavLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink to="/contact">Contact</NavLink>
                    </li>
                  </ul>
                </li>
                <li className="scroll dropdown">
                  <a
                    href="javaScript:void();"
                    className="dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <span>Account</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink to="/login">Login</NavLink>
                    </li>
                    <li>
                      <NavLink to="/login">Ragister</NavLink>
                    </li>
                    <li>
                      <NavLink to="/login">Password Reset</NavLink>
                    </li>
                  </ul>
                </li>
                <li className="scroll dropdown">
                  <a
                    href="javaScript:void();"
                    className="dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <span>Docs</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink to="/documetation">Documentation</NavLink>
                    </li>
                    <li>
                      <NavLink to="/changelog">Changelog</NavLink>
                    </li>
                  </ul>
                </li>
                <button className="btn btn-sm btn-custom navbar-btn btn-rounded">
                  Buy Now
                </button>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* <!-- Header End --> */}
    </>
  );
}
function initNavbar() {
  $.fn.nav = function () {
    return this.each(function () {
      var getNav = $(this),
        top = getNav.data("top") || getNav.offset().top,
        mdTop = getNav.data("md-top") || getNav.offset().top,
        xlTop = getNav.data("xl-top") || getNav.offset().top,
        navigation = getNav.find(".horizontal-menu"),
        getWindow = $(window).outerWidth(),
        anim = getNav.data("animate-prefix") || "",
        getIn = navigation.data("in"),
        getOut = navigation.data("out");
      $(window).on("resize", function () {
        getWindow = $(window).outerWidth();
      });
      getNav.find(".horizontal-menu").each(function () {
        var $menu = $(this);
        $menu.on("click", function (e) {
          if ("A" == e.target.tagName) {
            $menu.find("li.active").removeClass("active");
            $(e.target).parent().addClass("active");
          }
        });
        $menu.find("li.active").removeClass("active");
        $menu
          .find('a[href="' + Window.location + '"]')
          .parent("li")
          .addClass("active");
      });
      /* -- Events -- */
      getNav.find(".horizontal-menu, .extension-nav").each(function () {
        var menu = this;
        $(".dropdown-toggle", menu).on("click", function (e) {
          e.stopPropagation();
          return false;
        });
        $(".dropdown-menu", menu).addClass(anim + "animated");
        $(".dropdown", menu).on("mouseenter", function () {
          var dropdown = this;
          $(".dropdown-menu", dropdown)
            .eq(0)
            .removeClass(getOut)
            .stop()
            .fadeIn()
            .addClass(getIn);
          $(dropdown).addClass("on");
        });
        $(".dropdown", menu).on("mouseleave", function () {
          var dropdown = this;
          $(".dropdown-menu", dropdown)
            .eq(0)
            .removeClass(getIn)
            .stop()
            .fadeOut()
            .addClass(getOut);
          $(dropdown).removeClass("on");
        });
        $(".mega-menu-col", menu)
          .children(".sub-menu")
          .removeClass("dropdown-menu " + anim + "animated");
      });
      if (getWindow < 992) {
        /* -- Mega Menu -- */
        getNav.find(".menu-item-has-mega-menu").each(function () {
          var megamenu = this,
            $columnMenus = [];
          $(".mega-menu-col", megamenu)
            .children(".sub-menu")
            .addClass("dropdown-menu " + anim + "animated");
          $(".mega-menu-col", megamenu).each(function () {
            var megamenuColumn = this;
            $(".mega-menu-col-title", megamenuColumn).on(
              "mouseenter",
              function () {
                var title = this;
                $(title).closest(".mega-menu-col").addClass("on");
                $(title).siblings(".sub-menu").stop().fadeIn().addClass(getIn);
              }
            );
            if (!$(megamenuColumn).children().is(".mega-menu-col-title")) {
              $columnMenus.push($(megamenuColumn).children(".sub-menu"));
            }
          });
          $(megamenu).on("mouseenter", function () {
            var submenu;
            for (submenu in $columnMenus) {
              $columnMenus[submenu].stop().fadeIn().addClass(getIn);
            }
          });
          $(megamenu).on("mouseleave", function () {
            $(".dropdown-menu", megamenu).stop().fadeOut().removeClass(getIn);
            $(".mega-menu-col", megamenu).removeClass("on");
          });
        });
      }
    });
  };
  $(function () {
    for (
      var a = window.location,
        abc = $(".horizontal-menu a")
          .filter(function () {
            return this.href == a;
          })
          .addClass("active")
          .parent()
          .addClass("active");
      ;

    ) {
      if (!abc.is("li")) break;
      abc = abc.parent().addClass("in").parent().addClass("active");
    }
  });
  $(".dropdown-toggle").on("click", function () {
    var dropdownList = $(".dropdown-menu"),
      dropdownOffset = $(this).offset(),
      offsetLeft = dropdownOffset.left,
      dropdownWidth = dropdownList.width(),
      docWidth = $(window).width(),
      subDropdown = dropdownList.eq(1),
      subDropdownWidth = subDropdown.width(),
      isDropdownVisible = offsetLeft + dropdownWidth <= docWidth,
      isSubDropdownVisible =
        offsetLeft + dropdownWidth + subDropdownWidth <= docWidth;

    if (!isDropdownVisible || !isSubDropdownVisible) {
      dropdownList.addClass("pull-right");
    } else {
      dropdownList.removeClass("pull-right");
    }
  });
  $(".horizontal-nav").nav();
}

export default Header;
