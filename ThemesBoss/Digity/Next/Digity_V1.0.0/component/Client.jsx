import React from "react";
import quote from "../public/images/quote.svg";
import Slider from "react-slick";
import Image from "next/image";

//import css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//client slider data Start
const testimonials = [
  {
    name: "Philis O’Dwyer",
    location: "New york, NY",
    text: "Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur occaecat",
  },
  {
    name: "Susana Medy",
    location: "Orlando, FL",
    text: "Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur occaecat",
  },
  {
    name: "Henry Dege",
    location: "Irvine, CA",
    text: "Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur occaecat",
  },
  {
    name: "Philis O’Dwyer",
    location: "New york, NY",
    text: "Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur occaecat",
  },
  {
    name: "Susana Medy",
    location: "Orlando, FL",
    text: "Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur occaecat",
  },
  {
    name: "Henry Dege",
    location: "Irvine, CA",
    text: "Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur occaecat",
  },
];
//client slider data End

export default function Client() {

 //client slider logic Start
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    spaceBetween: 24,
    autoplay: true,
    speed: 700,
    initialSlide: 0,
    cssEase: "linear",
    margin: 30,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },   
    ],
  };

 //client slider logic End
 
  return (

    <React.Fragment>
      <section className="md:py-[120px] py-20">

        {/* Slider Heading Start */}
        <div className="container">
          <div className="grid grid-cols-1">
            <div className="max-w-[461px] text-center mx-auto">
              <p className="uppercase font-medium text-sm tracking-[0.84px] after:bg-green-semilight after:absolute after:w-full after:h-2 relative after:left-0 inline-block after:bottom-0 after:-z-10">
                Testimonial
              </p>
              <h2 className="font-semibold mt-4 text-4xl leading-snug lg:text-5xl lg:leading-[62px]">
                What our clients are saying
              </h2>
            </div>
          </div>
        {/* Slider Heading End */}

          <div className="relative">
            <div className=" mt-12 relative">
              {/* Slider Start */}
                <Slider {...settings}>
                  {testimonials.map((testimonial, index) => (
                    <div key={index}>
                      <div className="p-8 mx-4 bg-white rounded-2xl">
                        <p className="text-[15px] leading-7 text-dark-light">
                          {testimonial.text}
                        </p>
                        <div className="flex items-center justify-between gap-3 mt-16">
                          <div>
                            <h5 className="text-lg font-semibold leading-7">
                              {testimonial.name}
                            </h5>
                            <p className="uppercase mt-2 text-dark-semilight tracking-[0.86px] font-medium text-sm leading-5">
                              {testimonial.location}
                            </p>
                          </div>
                          <Image src={quote} alt="" />
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              {/* Slider End */}
            </div>
          </div>
        </div>
        
      </section>
    </React.Fragment>

  );
}
