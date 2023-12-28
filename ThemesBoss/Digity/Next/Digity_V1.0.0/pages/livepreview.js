"use client"
import { useEffect, useState } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";

//import images
import logodark from "../public/images/logo-dark.svg";
import heroimg from "../public/images/hero-img.png";
import client1 from "../public/images/client-logo/1.png";
import client2 from "../public/images/client-logo/2.png";
import client3 from "../public/images/client-logo/3.png";
import client4 from "../public/images/client-logo/4.png";
import client5 from "../public/images/client-logo/5.png";
import logolight from "../public/images/logo-light.svg";
import fb from "../public/images/fb.svg";
import twitter from "../public/images/twiiter.svg";
import linkdin from "../public/images/linkedin.svg";
import behance from "../public/images/behance.svg";
    
import abot from "../public/images/abot.png";
import prici from "../public/images/pricing.png";
import service from "../public/images/service.png";
import faq from "../public/images/faqs.png";
import utility from "../public/images/utility.png";
import teams from "../public/images/team.png";


//import slick css
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//import component
import Project from "../component/Project";
import Line from "../component/Line";


//brand logo slider image start
const logos = [
  client1,
  client2,
  client3,
  client4,
  client5,
  client1,
  client2,
  client3,
  client4,
  client5,
];
//brand logo slider image End

export default function Livepreview() {

  //navbar Start
  const [sticky, setSticky] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const stickyclassName = `fixed-top d-xl-block ${sticky}`;

  //sticky nav Start
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const stickyClassName =
      scrollTop >= 200 ? "md-sticky-top py-3 bg-white stickyadd " : "";
    setSticky(stickyClassName);
  };
   //sticky nav End

   //Toggle menu start
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  }
  //Toggle menu close
 
  //page scroll start
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  //page scroll end
  //navbar End

  //code for getfull year
   const currentYear = new Date().getFullYear();

  //brand logo slider logic Start
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 300,
    initialSlide: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  //brand logo slider logic End


  return (
    <React.Fragment>
    {/* Start Navbar */}
        <header className="main-menu">
           <nav className={`fixed top-0 w-full z-50 mobile-menu-bg sticky ${stickyclassName}`}>
           <div className="container">
            <div className="lg:flex items-center justify-between gap-6">
              <div className="flex items-center justify-between">
                <Link href="/">
                  <Image src={logodark} className="" alt="logo" />
                </Link>
                <button
                  className={`text-end mobile-menu-button lg:hidden `}
                  onClick={handleMenuToggle}
                >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  </button>
                </div>
                <div
                id="navbarNav"
                className={` collapsed mobile-menu  ${menuOpen ? 'block' : 'hidden'} lg:block `} 
              > 
                  <ul className="lg:space-x-8 space-y-4 lg:space-y-0 lg:flex items-center mt-6 lg:mt-0 max-[1024px]:max-h-80 max-[1024px]:overflow-scroll">
                    <li className="nav-active">
                      <a
                        href="https://digity-react.netlify.app/"
                        className="uppercase text-sm font-medium lg:py-9 tracking-[0.86px] text-dark-semilight relative hover:text-dark duration-300"
                      >
                        Live Preview
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://themesboss.gitbook.io/digity-react/"
                        className="uppercase text-sm font-medium lg:py-9 tracking-[0.86px] text-dark-semilight relative hover:text-dark duration-300"
                        target="blank"
                      >
                        Documantation
                      </a>
                    </li>
                    <Link href ="/contact" className="btn-blue navbar-btn lg:!ml-16">
                      Buy Now
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </header>
    {/* End Navbar  */}

    {/* Home page Section Start  */}
        <section
        className="bg-top pt-36 md:pt-[240px]"
        style={{ backgroundImage: `url('/home-bg.jpg')` }}
      >
        <div className="container">
          <div className="grid grid-cols-1">
            <div className="text-center">
              <h1 className="font-semibold text-4xl leading-snug md:text-6xl md:leading-snug lg:text-[70px] lg:leading-[90px] max-w-[800px] mx-auto">
                We make remarkable digital products
              </h1>
              <p className="md:mt-8 mt-5 text-dark-light text-base md:text-lg leading-[30px]">
                We design and build beautiful websites, apps and branding
              </p>
              <div className="md:mt-12 mt-7">
                <Link href="/contact" className="btn-green">
                Buy Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14 max-w-[1600px] mx-auto">
          <Image src={heroimg} alt="" />
        </div>
        </section>
    {/* Home page Section End  */}

    {/* Brand logo slider start  */}
        <section className="md:py-[120px] py-20 bg-blue section">
              <div className="container relative">
                <div className="grid grid-cols-1">
                  <div className="text-center">
                    <h3 className="text-[#C6DCEB] text-xl">
                      Trusted by 35+ biggest brands
                    </h3>
                  </div>
                </div>
                <div className="mt-12 container relative">
                  <div className="client-logo select-none relative mx-auto ">
                    <Slider {...settings}>
                      {logos.map((logo, index) => (
                        <div key={index} className="container">
                          <div className="flex justify-center">
                            <Image src={logo} alt="logo" />
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                  <div className="flex justify-between absolute top-1/2 -translate-y-1/2 z-10 w-full"></div>
                </div>
              </div>
        </section>
    {/* Brand logo slider End  */}

      <Line />

    {/* Start Work */}
        <section className="md:py-[120px] py-20" id="work">
    <div className="container">
      <div className="grid md:grid-cols-2 md:gap-[72px] items-center">
        <div>
          <div className="max-w-[461px]">
            <p className="uppercase font-medium text-sm tracking-[0.84px] after:bg-green-semilight after:absolute after:w-full after:h-2 relative after:left-0 inline-block after:bottom-0 after:-z-10">
              Projects
            </p>
            <h2 className="font-semibold mt-4 text-4xl leading-snug lg:text-5xl lg:leading-[62px]">
              Our Pages
            </h2>
          </div>
          <div className="md:mt-12 mt-6">
            <Link href="/work" className="btn-green">
              View all project
            </Link>
          </div>
          <div className="mt-12 space-y-6 md:mt-14 md:space-y-[72px]">
            <div className="bg-white rounded-2xl overflow-hidden">
              <Link href="https://digity-react.netlify.app/about">
                <Image
                  src={abot}
                  className="object-cover w-full h-full"
                  alt=""
                />
              </Link>
              <div className="p-8 md:max-w-[420px]">
                <a
                  href="https://digity-react.netlify.app/about"
                  className="hover:text-green font-semibold text-[22px] leading-8 duration-300"
                >
                  The purpose of an about us page is to inform the company. 
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden">
              <a href="https://digity-react.netlify.app/pricing">
                <Image
                  src={prici}
                  className="object-cover w-full h-full"
                  alt=""
                />
              </a>
              <div className="p-8 md:max-w-[420px]">
                <a
                  href="https://digity-react.netlify.app/pricing"
                  className="hover:text-green font-semibold text-[22px] leading-8 duration-300"
                >
                  Bringing a modern mobile experience pricing
                </a>
                <p className="text-dark-semilight mt-4 font-medium text-xs leading-5 uppercase tracking-[0.86px]">
                  Development
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden">
              <a href="https://digity-react.netlify.app/faqs">
                <Image
                  src={faq}
                  className="object-cover w-full h-full"
                  alt=""
                />
              </a>
              <div className="p-8 md:max-w-[420px]">
                <a
                  href="https://digity-react.netlify.app/faqs"
                  className="hover:text-green font-semibold text-[22px] leading-8 duration-300"
                >
                  A service page is a web page where the services you offer.
                </a>
                <p className="text-dark-semilight mt-4 font-medium text-xs leading-5 uppercase tracking-[0.86px]">
                  branding
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 space-y-6 md:mt-[72px] md:space-y-[72px]">
          <div className="bg-white rounded-2xl overflow-hidden">
            <a href="https://digity-react.netlify.app/services">
              <Image
                src={service}
                className="object-cover w-full h-full"
                alt=""
              />
            </a>
            <div className="p-8 md:max-w-[420px]">
              <a
                href="https://digity-react.netlify.app/services"
                className="hover:text-green font-semibold text-[22px] leading-8 duration-300"
              >
                A frequently asked questions page
              </a>
              <p className="text-dark-semilight mt-4 font-medium text-xs leading-5 uppercase tracking-[0.86px]">
                Development
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden">
            <a href="https://digity-react.netlify.app/Utility">
              <Image
                src={utility}
                className="object-cover w-full h-full"
                alt=""
              />
            </a>
            <div className="p-8 md:max-w-[420px]">
              <a
                href="https://digity-react.netlify.app/Utility"
                className="hover:text-green font-semibold text-[22px] leading-8 duration-300"
              >
                Utility pages can be configured for a site's error pages.
              </a>
              <p className="text-dark-semilight mt-4 font-medium text-xs leading-5 uppercase tracking-[0.86px]">
                Design
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden">
            <a href="https://digity-react.netlify.app/team">
              <Image
                src={teams}
                className="object-cover w-full h-full"
                alt=""
              />
            </a>
            <div className="p-8 md:max-w-[420px]">
              <a
                href="https://digity-react.netlify.app/team"
                className="hover:text-green font-semibold text-[22px] leading-8 duration-300"
              >
                Team's specific duties and responsibilities.
              </a>
              <p className="text-dark-semilight mt-4 font-medium text-xs leading-5 uppercase tracking-[0.86px]">
                Development
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
        </section>
    {/* End Work */}
      <Line />
      <Project/>
    {/* Footer Start */}
        <footer className="bg-dark">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 lg:gap-24 md:py-[120px] py-20">
            <div className="md:col-span-2 md:border-r border-[#3D3D3D]">
              <div className="max-w-xs">
                <Image src={logolight} alt="" />
                <p className="mt-8 text-[15px] leading-7 text-[#7B7B7B]">
                  With more than 20 years of experience we can deliver the best
                  product design
                </p>
                <div className="md:mt-12 mt-8">
                  <ul className="flex items-center space-x-4">
                    <li>
                      <Link href="/#">
                        <Image src={fb} alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/#">
                        <Image src={twitter} alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/#">
                        <Image src={linkdin} alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/#">
                        <Image src={behance} alt="" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="md:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-white">
                  <p className="font-semibold text-lg leading-7 text-white">
                    Navigation
                  </p>
                  <ul className="md:mt-8 mt-4 space-y-4">
                    <li>
                      <Link href="/"
                        className="text-[#7B7B7B] hover:text-[#FAFAFA] text-[15px] leading-[22px] duration-300"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/about"
                        className="text-[#7B7B7B] hover:text-[#FAFAFA] text-[15px] leading-[22px] duration-300"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact"
                        className="text-[#7B7B7B] hover:text-[#FAFAFA] text-[15px] leading-[22px] duration-300"
                      >
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog"
                        className="text-[#7B7B7B] hover:text-[#FAFAFA] text-[15px] leading-[22px] duration-300"
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact"
                        className="text-[#7B7B7B] hover:text-[#FAFAFA] text-[15px] leading-[22px] duration-300"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="text-white">
                  <p className="font-semibold text-lg leading-7 text-white">
                    Infomation
                  </p>
                  <ul className="md:mt-8 mt-4 space-y-4">
                    <li>
                      <Link
                        href="/#"
                        className="text-[#7B7B7B] hover:text-[#FAFAFA] text-[15px] leading-[22px] duration-300"
                      >
                        Style Guide
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#"
                        className="text-[#7B7B7B] hover:text-[#FAFAFA] text-[15px] leading-[22px] duration-300"
                      >
                        Licensing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#"
                        className="text-[#7B7B7B] hover:text-[#FAFAFA] text-[15px] leading-[22px] duration-300"
                      >
                        Changelog
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="text-white">
                  <p className="font-semibold text-lg leading-7 text-white">
                    Find Us
                  </p>
                  <p className="md:mt-8 mt-4 text-[#7B7B7B] text-[15px] leading-[22px]">
                    Greenwich Village &amp; Soho, 10012 New York, USA
                  </p>
                  <p className="mt-6 text-[#7B7B7B] text-[15px] leading-[22px]">
                    800 123-456
                  </p>
                  <p className="text-[15px] leading-[22px] text-[#7B7B7B]">
                    digity@example.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#3D3D3D] h-px w-full block" />
          <div className="grid grid-cols-1">
            <div className="py-8">
              <p className="text-[#7B7B7B] text-[15px] leading-7">
                ©&nbsp;
                {currentYear}&nbsp;
                Copyright&nbsp;
                <a
                  href="https://themeforest.net/user/themesboss/portfolio"
                  className="text-[#FAFAFA] font-medium"
                >
                  ThemesBoss.
                </a>
              </p>
            </div>
          </div>
        </div>
        </footer>
    {/* Footer End */}
    </React.Fragment>
  );
}

