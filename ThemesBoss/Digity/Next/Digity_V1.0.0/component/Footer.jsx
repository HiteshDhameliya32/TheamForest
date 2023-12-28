import React from "react";
import logolight from "../public/images/logo-light.svg";
import fb from "../public/images/fb.svg";
import twitter from "../public/images/twiiter.svg";
import linkdin from "../public/images/linkedin.svg";
import behance from "../public/images/behance.svg";
import Link from "next/link";
import Image from "next/image"; 

export default function Footer() {
  
  const currentYear = new Date().getFullYear();

  return (

    <React.Fragment>

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
                      <Link href="/ #">
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
                © &nbsp;
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
