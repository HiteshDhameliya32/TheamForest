import React from "react";
import Link from "next/link";
import Image from "next/image";

//import images
import detail from "../public/images/blog/detail-1.png";
import fb from "../public/images/fb.svg";
import twitter from "../public/images/twiiter.svg";
import linkdin from "../public/images/linkedin.svg";

//import component
import Header from "../component/Header"
import Footer from "../component/Footer"
import Line from "../component/Line";

export default function Blogdetails() {

  return (
    <React.Fragment>
      <Header />
      {/* clients development Section Start */}
        <section
        className="bg-right-top bg-no-repeat bg-cover pt-36 pb-20 md:pb-[120px] md:pt-[240px]"
        style={{ backgroundImage: `url('/header-bg.png')` }}
      >
        <div className="container">
          <div className="grid grid-cols-1">
            <div className="text-center max-w-[752px] mx-auto">
              <h3 className="font-semibold text-4xl leading-snug md:text-5xl md:leading-[62px]">
                How to win new clients in development
              </h3>
              <ul className="mt-4 text-center">
                <li className="text-dark-semilight inline-block tracking-[0.86px] font-medium uppercase duration-300 after:inline-block after:bg-green after:w-[5px] after:h-[5px] after:rounded-full after:mx-4 after:-top-[3px] after:relative after:content-['']">
                  <Link href ="/blog">March 12, 2021
                  </Link>
                </li>
                <li className="text-dark-semilight inline-block tracking-[0.86px] font-medium uppercase duration-300">
                  <Link href ="#">By Henry Dege
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </section>
        <section className="md:pb-[120px] pb-20">
        <div className="container">
          <div className="grid grid-cols-1">
            <div>
              <Image src={detail} className="rounded-2xl" alt="" />
              <div className="md:mt-[120px] mt-20 relative max-w-[752px] mx-auto space-y-10 md:space-y-12">
                <div className="space-y-6">
                  <p className="text-[15px] leading-7 text-dark-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat. Aenean faucibus nibh et
                    justo cursus id rutrum lorem imperdiet
                  </p>
                  <p className="text-[15px] leading-7 text-dark-light">
                    Cras id dui. classNameaptent taciti sociosqu ad litora torquent
                    per conubia nostra, per inceptos hymenaeos. Vivamus laoreet.
                    Praesent turpis. Nunc nulla.Praesent nec nisl a purus
                    blandit viverra. Nullam dictum felis eu pede mollis pretium.
                    Curabitur vestibulum aliquam leo. Sed libero. Praesent metus
                    tellus, elementum eu, semper a, adipiscing nec
                  </p>
                </div>
                <div className="border-l-4 border-green pl-6">
                  <h3 className="font-semibold text-[22px] leading-9">
                    A rich text element can be used with static or dynamic
                    content For static content, just drop it into any page
                  </h3>
                </div>
                <div className="space-y-6">
                  <p className="text-[15px] leading-7 text-dark-light">
                    Praesent ac sem eget est egestas volutpat. Aenean tellus
                    metus, bibendum sed, posuere ac, mattis non, nunc. Curabitur
                    suscipit suscipit tellus. Nam quam nunc, blandit vel, luctus
                    pulvinar, hendrerit id, lorem. Etiam rhoncus.Sed magna
                    purus, fermentum eu, tincidunt eu, varius ut, felis.
                    Pellentesque egestas, neque sit amet convallis pulvinar,
                    justo nulla eleifend augue, ac auctor orci leo non est.
                    Vestibulum purus quam, scelerisque ut, mollis sed, nonummy
                    id, metus
                  </p>
                  <p className="text-[15px] leading-7 text-dark-light">
                    Vestibulum ullamcorper mauris at ligula. Phasellus
                    consectetuer vestibulum elit. Sed a libero. Vivamus
                    consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis
                    natoque penatibus
                  </p>
                  <p className="text-[15px] leading-7 text-dark-light">
                    Cras id dui. classNameaptent taciti sociosqu ad litora torquent
                    per conubia nostra, per inceptos hymenaeos. Vivamus laoreet.
                    Praesent turpis. Nunc nulla.Praesent nec nisl a purus
                    blandit viverra. Nullam dictum felis eu pede mollis pretium.
                    Curabitur vestibulum
                  </p>
                </div>
                <div className="md:mt-14 mt-8">
                  <ul className="flex gap-2 items-center">
                    <li>
                      <a
                        href="/#"
                        className="bg-dark rounded-full w-10 h-10 flex items-center justify-center"
                      >
                        <Image src={fb} alt="" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#"
                        className="bg-dark rounded-full w-10 h-10 flex items-center justify-center"
                      >
                        <Image src={twitter} alt="" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#"
                        className="bg-dark rounded-full w-10 h-10 flex items-center justify-center"
                      >
                        <Image src={linkdin} alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* clients development Section End */}
      <Line />
      {/* Leave Message Start */}
      <section className="md:py-[120px] py-20">
        <div className="container">
          <div className="grid grid-cols-1">
            <div className="max-w-[752px] text-center mx-auto">
              <h3 className="font-semibold text-4xl leading-snug md:text-5xl md:leading-[62px]">
                Leave a message
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-12">
            <form className="max-w-[752px] w-full mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Enter your name"
                    id="one"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="Enter your email"
                    id="two"
                  />
                </div>
                <div className="sm:col-span-2">
                  <textarea
                    type="text"
                    rows={4}
                    className="form-input"
                    placeholder="Write your message"
                    id="three"
                  />
                </div>
                <div className="sm:col-span-2">
                  <input
                    type="button"
                    className="btn-green w-full"
                    defaultValue="Submit comment"
                    id="four"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* Leave Message End */} 
      <Footer />
    </React.Fragment>
  );
}

