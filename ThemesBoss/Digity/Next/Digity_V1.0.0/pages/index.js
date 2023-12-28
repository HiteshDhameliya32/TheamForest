"use client"
import { useEffect, useState } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";

//import images
import heroimg from "../public/images/hero-img.png";
import client1 from "../public/images/client-logo/1.png";
import client2 from "../public/images/client-logo/2.png";
import client3 from "../public/images/client-logo/3.png";
import client4 from "../public/images/client-logo/4.png";
import client5 from "../public/images/client-logo/5.png";
import about from "../public/images/about.png";
import work1 from "../public/images/work/1.png";
import work2 from "../public/images/work/2.png";
import work3 from "../public/images/work/3.png";
import work4 from "../public/images/work/4.png";
import blog1 from "../public/images/blog/1.jpg";
import blog2 from "../public/images/blog/2.jpg";
import branding from "../public/images/graphic-designer.png";
import development from "../public/images/web-development.png";
import design from "../public/images/instagram.png";

//import component
import Header from "../component/Header";
import Getintouch from "../component/Getintouch";
import Client from "../component/Client";
import Project from "../component/Project";
import Line from "../component/Line";
import Teamcomponent from "../component/Teamcomponent";
import Countup from "../component/countup";
import Footer from "../component/Footer";
import Wrapper from "/layout/wrapper";

//import css

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

//services data start 
const servicesData = [
  {
    id: 1,
    title: "Branding",
    description:
      "Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis laboris nisi",
    imageSrc: design,
  },
  {
    id: 2,
    title: "Development",
    description:
      "Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis laboris nisi",
    imageSrc: development,
  },
  {
    id: 3,
    title: "Design",
    description:
      "Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis laboris nisi",
    imageSrc: branding,
  },
];
//services data End

//project work start
const workData = [
  {
    id: 1,
    title: "Powering Social Proof for Modern Business",
    category: "branding",
    imageSrc: work1,
  },
  {
    id: 2,
    title: "Bringing a modern mobile experience learning",
    category: "Development",
    imageSrc: work2,
  },
];
const workDataa = [
  {
    id: 3,
    title: "Art direction for leading publishing company",
    category: "Development",
    imageSrc: work3,
  },
  {
    id: 4,
    title: "Helping Australia's oldest banking company",
    category: "Design",
    imageSrc: work4,
  },
];
//project work start End

// Blogdata start
const blogData = [
  {
    id: 1,
    date: "April 17, 2021",
    title: "How to bring Cosa to your company",
    content: "Enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    imageSrc: blog1,
  },
  {
    id: 2,
    date: "April 17, 2021",
    title: "How to bring Cosa to your company",
    content: "Enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    imageSrc: blog2,
  },
];
// Blogdata End

export default function Index() {

  //brand logo slider logic Start
  const settings = {
    dots: false,
    nav: false,
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
      <Wrapper/>
      <Header/>
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
                <Link href="/work" className="btn-green">
                  View our work
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

      {/* Quality products start  */}
    <section className="md:py-[120px] py-20 section">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 items-end gap-6" id="counter">
        <div className="max-w-[461px]">
          <p className="uppercase font-medium text-sm tracking-[0.84px] after:bg-green-semilight after:absolute after:w-full after:h-2 relative after:left-0 inline-block after:bottom-0 after:-z-10">
            What we do
          </p>
          <h2 className="font-semibold mt-4 text-4xl leading-snug lg:text-5xl lg:leading-[62px] text-left p-0">
            Delivering quality products
          </h2>
        </div>
        <div className="flex md:flex-row flex-col md:items-center gap-2 md:gap-16 justify-end max-w-sm md:ml-auto">

       <Countup/>
       </div>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="p-8 pt-16 bg-white hover:shadow-custom duration-300 rounded-2xl"
              >
                <Image src={service.imageSrc} alt={service.title} />
                <h4 className="text-[22px] leading-8 font-semibold mt-16">
                  {service.title}
                </h4>
                <p className="mt-4 text-[15px] leading-7 text-dark-light">
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="w-8 h-8 mt-8 bg-green flex items-center justify-center rounded-full"
                >
                  <svg
                    width={6}
                    height={10}
                    viewBox="0 0 6 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.293214 9.70697C0.105743 9.51944 0.00042731 9.26513 0.000427333 8.99997C0.000427357 8.7348 0.105743 8.4805 0.293214 8.29297L3.58621 4.99997L0.293215 1.70697C0.111057 1.51837 0.0102623 1.26576 0.0125407 1.00357C0.014819 0.741372 0.119988 0.490558 0.305396 0.30515C0.490804 0.119743 0.741617 0.0145736 1.00381 0.0122953C1.26601 0.010017 1.51861 0.110811 1.70721 0.292969L5.70721 4.29297C5.89468 4.4805 6 4.73481 6 4.99997C6 5.26513 5.89468 5.51944 5.70721 5.70697L1.70721 9.70697C1.51969 9.89444 1.26538 9.99976 1.00021 9.99976C0.735049 9.99976 0.480742 9.89444 0.293214 9.70697Z"
                      fill="#FAFAFA"
                    />
                  </svg>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </section>
      {/* Quality products End  */}

      <Line />

      {/* About Start  */}
      <section className="md:py-[120px] py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <Image src={about} className="rounded-full" alt="" />
            </div>
            <div>
              <div className="lg:max-w-[461px] lg:ml-auto">
                <p className="uppercase font-medium text-sm tracking-[0.84px] after:bg-green-semilight after:absolute after:w-full after:h-2 relative after:left-0 inline-block after:bottom-0 after:-z-10">
                  About us
                </p>
                <h2 className="font-semibold mt-4 text-4xl leading-snug lg:text-5xl lg:leading-[62px] text-left p-0">
                  Best agency for your project
                </h2>
                <p className="mt-12 text-[15px] leading-7 text-dark-light">
                  Your work is going to fill a large part of your life, and the
                  only way to be truly satisfied is to do what you believe is
                  great work. And the only way to do great work
                </p>
                <div className="mt-14">
                  <Link href="/#" className="btn-green">
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About End  */}

      <Line />

      {/* Projects start */}
      <section className="md:py-[120px] py-20" id="work">
        <div className="container">
          <div className="grid md:grid-cols-2 md:gap-[72px] items-center">
            <div>
              <div className="max-w-[461px]">
                <p className="uppercase font-medium text-sm tracking-[0.84px] after:bg-green-semilight after:absolute after:w-full after:h-2 relative after:left-0 inline-block after:bottom-0 after:-z-10">
                  Projects
                </p>
                <h2 className="font-semibold mt-4 text-4xl leading-snug lg:text-5xl lg:leading-[62px] text-left p-0">
                  Our marvelous works
                </h2>
              </div>
              <div className="md:mt-12 mt-6">
                <Link href="/work" className="btn-green">
                  View all project
                </Link>
              </div>
              <div className="mt-12 space-y-6 md:mt-14 md:space-y-[72px]">
                {workData.map((work) => (
                  <div
                    key={work.id}
                    className="bg-white rounded-2xl overflow-hidden"
                  >
                    <Link href="/workdetails">
                      <Image
                        src={work.imageSrc}
                        className="object-cover w-full h-full"
                        alt=""
                      />
                    </Link>
                    <div className="p-8 md:max-w-[420px]">
                      <Link
                        href="/workdetails"
                        className="hover:text-green font-semibold text-[22px] leading-8 duration-300"
                      >
                        {work.title}
                      </Link>
                      <p className="text-dark-semilight mt-4 font-medium text-xs leading-5 uppercase tracking-[0.86px]">
                        {work.category}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 space-y-6 md:mt-[72px] md:space-y-[72px]">
              {workDataa.map((work) => (
                <div
                  key={work.id}
                  className="bg-white rounded-2xl overflow-hidden"
                >
                  <Link href="/workdetails">
                    <Image
                      src={work.imageSrc}
                      className="object-cover w-full h-full"
                      alt=""
                    />
                  </Link>
                  <div className="p-8 md:max-w-[420px]">
                    <Link href="/workdetails"
                      className="hover:text-green font-semibold text-[22px] leading-8 duration-300"
                    >
                      {work.title}
                    </Link>
                    <p className="text-dark-semilight mt-4 font-medium text-xs leading-5 uppercase tracking-[0.86px]">
                      {work.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Projects End  */}

      <Line />
      <Client />
      <Line />
      <Getintouch />
      <Line />
      <Teamcomponent />
      <Line />

      {/* Blog start */}
      <section className="md:py-[120px] py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 items-end gap-6">
            <div className="max-w-[461px]">
              <p className="uppercase font-medium text-sm tracking-[0.84px] after:bg-green-semilight after:absolute after:w-full after:h-2 relative after:left-0 inline-block after:bottom-0 after:-z-10">
                Blog
              </p>
              <h2 className="font-semibold mt-4 text-4xl leading-snug lg:text-5xl lg:leading-[62px] text-left p-0">
                latest news from our blog
              </h2>
            </div>
            <div className="md:text-end">
              <Link href="/blog" className="btn-green">
                View all posts
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="bg-white md:flex items-center rounded-2xl overflow-hidden"
              >
                <Image
                  src={blog.imageSrc}
                  className="max-h-[350px] md:max-w-[220px] md:h-full md:object-cover"
                  alt=""
                />
                <div className="p-8 flex-1">
                  <p className="font-medium text-sm text-dark-semilight tracking-[0.86px] uppercase">
                    {blog.date}
                  </p>
                  <h4 className="mt-4 text-[22px] leading-[34px] font-semibold hover:text-green duration-300">
                    <Link href="/blogdetails">{blog.title}</Link>
                  </h4>
                  <p className="mt-4 text-dark-light leading-7 text-[15px]">
                    {blog.content}
                  </p>
                  <Link
                    href="/blogdetails"
                    className="text-green mt-16 inline-block uppercase font-medium tracking-[0.86px]"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Blog End */}
      <Line />
      <Project />
      <Footer />
      <Wrapper/>
    </React.Fragment>

  );
}
