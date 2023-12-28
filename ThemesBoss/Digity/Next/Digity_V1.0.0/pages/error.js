import React from "react";
import Link from "next/link";
import Image from "next/image";

//import images
import error from "../public/images/error.png";

//import component
import Header from "../component/Header"
import Footer from "../component/Footer"
import Project from "../component/Project";
import Line from "../component/Line";
import Homebg from "../component/Homebg";

export default function Error() {

  // Error title and category start
  const Title = 'Error';
  const Categories = ['Error'];
  const homeLink = 'Home';
 // Error title and category end
 
  return (
    <React.Fragment>
      <Header />
      {/* Error home Start */}
          <Homebg title={Title} categories={Categories} homeLink={homeLink} />
      {/* Error home End */}
      <Line />
      {/* Page Not Found Start */}
        <section className="md:py-[120px] py-20">
          <div className="container">
            <div className="grid grid-cols-1">
              <div className="max-w-[752px] mx-auto w-full">
                <Image src={error} alt="" />
                <div className="text-center mt-16">
                  <h3 className="font-semibold text-4xl leading-snug md:text-5xl md:leading-[62px]">
                    Page not found
                  </h3>
                  <p className="text-[15px] leading-7 max-w-[558px] mx-auto mt-8 text-dark-light">
                    Uh oh, we can't seem to find the page you are looking for. Try
                    going back or see our&nbsp;
                    <Link href="/#" className="text-dark font-medium">
                      Help Center
                    </Link>&nbsp;
                    for more information
                  </p>
                  <div className="md:mt-12 mt-8">
                    <Link href ="/" className="btn-green">
                      Back to home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      {/* Page Not Found End */}
      <Line />
      <Project/>
      <Footer />
    </React.Fragment>
  );
}
