"use client"
import { useEffect, useState } from "react";
import React from "react";
import CountUp from "react-countup";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";

//import images
import detail from "../public/images/work/detail-1.png";

//import component
import Header from "../component/Header";
import Line from "../component/Line";
import Project from "../component/Project";
import Footer from "../component/Footer";

//import css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Workdetail() {
  //slider Start
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 300,
    initialSlide: 0,
    cssEase: "linear",
  };
  //slider End

  //count up Start
    const [startCounter, setStartCounter] = useState(false);
    useEffect(() => {
      const isInViewport = (el) => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
        );
      };
      const startCountAnimation = () => {
        if (isInViewport(document.getElementById("counter")) && !startCounter) {
          setStartCounter(true);
        }
      };
      window.addEventListener("scroll", startCountAnimation);
      return () => {
        window.removeEventListener("scroll", startCountAnimation);
      };
    }, [startCounter]);
  //count up End

  return (
    <React.Fragment>
        <Header />
    {/* workdetail home Start */}
      <section
        className="bg-right-top bg-no-repeat bg-cover pt-36 pb-20 md:pb-[120px] md:pt-[240px]"
        style={{ backgroundImage: `url('/header-bg.png')` }}
      >
        <div className="container">
          <div className="grid grid-cols-1">
            <div className="text-center max-w-[752px] mx-auto">
              <h3 className="font-semibold text-4xl leading-snug md:text-5xl md:leading-[62px]">
                Powering Social Proof for Modern Business
              </h3>
              <ul className="mt-4 text-center">
                <li className="text-dark-semilight inline-block tracking-[0.86px] font-medium uppercase duration-300 after:inline-block after:bg-green after:w-[5px] after:h-[5px] after:rounded-full after:mx-4 after:-top-[3px] after:relative after:content-['']">
                  <Link href="/">March 3, 2021</Link>
                </li>
                <li className="text-dark-semilight inline-block tracking-[0.86px] font-medium uppercase duration-300">
                  <Link href="#">Branding</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    {/* workdetail home End */}
      <Line />
      {/* workdetail section Start */}
      <section className="md:pb-[120px] pb-20">
        <div className="container">
          <div className="grid grid-cols-1">
            <div>
              <div className="relative">
                <div className="relative">
                  <div>

                    {/* Slider Start  */}
                    <Slider {...settings}>
                      <div>
                        <Image src={detail} className="rounded-2xl" alt="" />
                      </div>
                      <div>
                        <Image src={detail} className="rounded-2xl" alt="" />
                      </div>
                      <div>
                        <Image src={detail} className="rounded-2xl" alt="" />
                      </div>
                    </Slider>
                    {/* Slider End  */}

                  </div>
                </div>
                <div className="work-slider-pagination space-x-4 mt-8 flex items-center justify-center" />
              </div>
              <div className="md:mt-[120px] mt-20 relative max-w-[752px] mx-auto space-y-10 md:space-y-12">
                <div className="space-y-6">
                  <h5 className="font-semibold text-lg">Summary</h5>
                  <p className="text-[15px] leading-7 text-dark-light">
                    Cras id dui. classNameaptent taciti sociosqu ad litora torquent
                    per conubia nostra, per inceptos hymenaeos. Vivamus laoreet.
                    Praesent turpis. Nunc nulla.Praesent nec nisl a purus
                    blandit viverra. Nullam dictum felis eu pede mollis pretium.
                    Curabitur vestibulum aliquam leo. Sed libero. Praesent metus
                    tellus, elementum eu, semper a, adipiscing nec
                  </p>
                  <p className="text-[15px] leading-7 text-dark-light">
                    Vestibulum ullamcorper mauris at ligula. Phasellus
                    consectetuer vestibulum elit. Sed a libero. Vivamus
                    consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis
                    natoque penatibus
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-lg">What we've done</h5>
                  <div className="mt-6 space-y-2">
                    <p className="text-[15px] leading-[22px] text-dark-light">
                      1. Strategic Discovery
                    </p>
                    <p className="text-[15px] leading-[22px] text-dark-light">
                      2. Web application redesign &amp; optimization
                    </p>
                    <p className="text-[15px] leading-[22px] text-dark-light">
                      3. Mobile application redesign &amp; optimization
                    </p>
                    <p className="text-[15px] leading-[22px] text-dark-light">
                      4. Landing page redesign &amp; optimization
                    </p>
                    <p className="text-[15px] leading-[22px] text-dark-light">
                      5. Component-based UI-kit
                    </p>
                    <p className="text-[15px] leading-[22px] text-dark-light">
                      6. Product Design Sprints to explore new functionality
                    </p>
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold text-lg">
                    We've got work to do
                  </h5>
                  <div className="mt-6 space-y-2">
                    <p className="text-[15px] leading-7 text-dark-light">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat. Aenean faucibus nibh et
                      justo cursus id rutrum lorem imperdiet
                    </p>
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold text-lg">
                    Level asked as to help
                  </h5>
                  <div className="mt-6 space-y-2">
                    <p className="text-[15px] leading-[22px] text-dark-light">
                      - Take their product look to the next level
                    </p>
                    <p className="text-[15px] leading-[22px] text-dark-light">
                      - Fix UX issues in mobile and web application
                    </p>
                    <p className="text-[15px] leading-[22px] text-dark-light">
                      - Match their bold vision to the look and experience of
                      the product
                    </p>
                    <p className="text-[15px] leading-[22px] text-dark-light">
                      - Provide a visual framework that will help the product
                      team iterate faster
                    </p>
                  </div>
                </div>
                <p className="text-[15px] leading-[22px] text-dark-light">
                  Creating a landing page with clear and targeted messaging was
                  a crucial step in increasing conversions. Together with the
                  Fortun team, we have compiled a new product page structure
                  using the AIDA model and packed that in a nice cover 🙂
                </p>
                <div>
                  <div className="flex md:flex-row flex-col md:items-center gap-2 md:gap-10 max-w-[540px]" id="counter">
                    <div className="flex items-center text-left gap-5 flex-1">
                      <h2 className="text-[56px] leading-[72px] font-semibold text-green">
                      {/* counter start  */}
                       {startCounter && (
                        <CountUp
                          start={0}
                          end={23}
                          delay={1}
                          time={3000}
                          format="{}"
                          useEasing={true}
                          useGrouping={true}
                        />)}&nbsp;
                      {/* counter end  */}

                      </h2>
                      <p className="md:text-[15px] md:leading-[22px] text-lg flex-1">
                        Days to complete the project
                      </p>
                    </div>
                    <div className="flex items-center text-left gap-5 flex-1">
                      <h2 className="text-[56px] leading-[72px] font-semibold text-green">
                    
                     {/* counter start  */}
                      {startCounter && (
                        <CountUp
                          start={0}
                          end={15}
                          delay={1}
                          time={3000}
                          format="{}"
                          useEasing={true}
                          useGrouping={true}
                        />)}
                      {/* counter end  */}

                      </h2>
                      <p className="md:text-[15px] md:leading-[22px] text-lg flex-1">
                        Team members involved in the process
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* workdetail section End */}
      <Line />
      <Project />
      <Footer/>
    </React.Fragment>
  );
}
