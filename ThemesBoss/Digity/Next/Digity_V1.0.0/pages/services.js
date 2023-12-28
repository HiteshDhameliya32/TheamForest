import React from "react";
import Link from "next/link";
import Image from "next/image";

//import images
import insta from "../public/images/instagram.png";
import develop from "../public/images/web-development.png";
import brand from "../public/images/graphic-designer.png";
import instagram from "../public/images/instagram.svg";
import development from "../public/images/web-development.svg";
import branding from "../public/images/graphic-designer.svg";

//import component
import Header from "../component/Header";
import Project from "../component/Project";
import Line from "../component/Line";
import Footer from "../component/Footer";
import Homebg from "../component/Homebg";

export default function Services() {
  // Services title and category start
  const Title = 'Service';
  const Categories = ['Service'];
  const homeLink = 'Home';
 // Services title and category end
 
  return (
  <React.Fragment>
  <Header/>
      {/* Services home start */}
          <Homebg title={Title} categories={Categories} homeLink={homeLink} />
      {/* Services home End */}
      <Line />
      {/* Services Details Start  */}
      <section className="md:py-[120px] py-20">
        <div className="container">
          <div className="grid grid-cols-1">
            <div className="relative">
              <div className="hidden md:block border-light border-l absolute h-full left-1/2 transform -translate-x-1/2" />
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full md:w-1/2 md:block hidden">
                      <Image src={instagram} className="mx-auto" alt="" />
                    </div>
                    <div className="w-full md:w-1/2 md:pl-8 lg:pl-[110px]">
                      <div className="bg-white p-8 rounded-2xl relative z-10">
                        <div className="md:hidden block">
                          <Image src={insta} alt="" />
                        </div>
                        <h5 className="font-semibold text-[22px] leading-[33px] mt-7 md:mt-0">
                          Branding
                        </h5>
                        <p className="text-[15px] leading-7 text-dark-light mt-4">
                          Eiusmod tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam, quis laboris nisi
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 -translate-y-1/2 -translate-x-1/2 top-1/2 md:block hidden">
                    <div className="bg-green w-4 h-4 rounded-full" />
                    <span className="h-px w-[93px] absolute inline-block bg-light -z-20 top-1/2 -translate-y-1/2" />
                  </div>
                </div>
              </div>
              <div className="mt-6 md:mt-[120px] relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full md:w-1/2 md:pr-8 lg:pr-[110px]">
                      <div className="bg-white p-8 rounded-2xl relative z-10">
                        <div className="md:hidden block">
                          <Image src={development} alt="" />
                        </div>
                        <h5 className="font-semibold text-[22px] leading-[33px] mt-7 md:mt-0">
                          Development
                        </h5>
                        <p className="text-[15px] leading-7 text-dark-light mt-4">
                          Eiusmod tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam, quis laboris nisi
                        </p>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 md:pr-8 lg:pr-[110px] md:block hidden">
                      <Image src={develop} className="mx-auto" alt="" />
                    </div>
                  </div>
                  <div className="absolute left-1/2 -translate-y-1/2 -translate-x-1/2 top-1/2 md:block hidden">
                    <div className="bg-green w-4 h-4 rounded-full" />
                    <span className="h-px w-[93px] absolute inline-block bg-light right-0 -z-20 top-1/2 -translate-y-1/2" />
                  </div>
                </div>
              </div>
              <div className="mt-6 md:mt-[120px] relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full md:w-1/2 md:block hidden">
                      <Image src={branding} className="mx-auto" alt="" />
                    </div>
                    <div className="w-full md:w-1/2 md:pl-8 lg:pl-[110px]">
                      <div className="bg-white p-8 rounded-2xl relative z-10">
                        <div className="md:hidden block">
                          <Image src={brand} alt="" />
                        </div>
                        <h5 className="font-semibold text-[22px] leading-[33px] mt-7 md:mt-0">
                          Design
                        </h5>
                        <p className="text-[15px] leading-7 text-dark-light mt-4">
                          Eiusmod tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam, quis laboris nisi
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 -translate-y-1/2 -translate-x-1/2 top-1/2 md:block hidden">
                    <div className="bg-green w-4 h-4 rounded-full" />
                    <span className="h-px w-[93px] absolute inline-block bg-light -z-20 top-1/2 -translate-y-1/2" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Link href ="/work" className="btn-green">
                View all project
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Services Details End  */}
      <Line />
      <Project />
      <Footer/>
    </React.Fragment>
  );
}
