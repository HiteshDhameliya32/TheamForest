import React, { useEffect } from "react";

function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("nav");
      if (navbar) {
        if (window.pageYOffset > 20) {
          navbar.classList.add("stickyadd");
        } else {
          navbar.classList.remove("stickyadd");
        }
      }
    };

    const handleLinkClick = () => {
      const navbarToggler = document.querySelector(".navbar-toggler");
      if (navbarToggler) {
        navbarToggler.click();
      }
    };

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(
      "ul.navbar-nav li.nav-item a.nav-link"
    );

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.7, 
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute("id");
          navLinks.forEach((navLink) => {
            navLink.classList.remove("active");
            if (navLink.getAttribute("href") === `#${sectionId}`) {
              navLink.classList.add("active");
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      sectionObserver.observe(section);
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
      window.removeEventListener("scroll", handleScroll);
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg custom-nav navbar-light fixed-top sticky">
        <div className="container">
          <a className="navbar-brand pt-0 logo" href="#">
            <img
              src="assets/images/logo.png"
              alt=""
              className="img-fluid logo-light"
            />
            <img
              src="assets/images/logo-dark.png"
              alt=""
              className="img-fluid logo-dark"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="mdi mdi-menu"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto" id="main_nav">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#client">
                  Client
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#blog">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* End Navbar*/}
    </>
  );
}

export default Navbar;
