import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Paertical from "../helperComponents/Partical";

function Index6() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const textItems = ["Kerri Deo.", "A Graphic Designer.", "A Photographer."];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === textItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 3600);

    return () => clearInterval(interval);
  }, [currentIndex, textItems.length]);
  return (
    <section
      className="section header-bg-img h-100vh align-items-center d-flex clip-home-in position-relative"
      id="home"
    >
      <div className="bg-overlay"></div>
      <Paertical />
      <div className="container z-index">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="text-center header-content mx-auto">
              <h4 className="text-white first-title mb-4">Welcome</h4>
              <h1 className="header-name text-white text-capitalize mb-0">
                I'M{" "}
                <AnimatePresence mode="wait">
                  <motion.span
                    className="fw-bold"
                    key={textItems[currentIndex]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.8 }}
                  >
                    {textItems[currentIndex]}
                  </motion.span>
                </AnimatePresence>
              </h1>
              <p className="text-white mx-auto header-desc mt-4">
                It is a long established fact that a reader will be of a page
                when established fact looking at its layout.
              </p>
              <div className="mt-4 pt-2">
                <a href="/#"  onClick={(e) => e.preventDefault()}  className="btn btn-outline-custom btn-round">
                  Download Cv
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll_down">
        <a href="#about" className="scroll">
          <i className="text-white"></i>
        </a>
      </div>
      <div className="curv-img">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 1920 238"
          enableBackground="new 0 0 1920 238"
          xmlSpace="preserve"
        >
          <path
            fill="#2e3135"
            d="M0,0c0,0,888.955,518.735,1920,0c-0.5,149.535,0,238,0,238H0V0z"
          />
        </svg>
      </div>
    </section>
  );
}

export default Index6;
