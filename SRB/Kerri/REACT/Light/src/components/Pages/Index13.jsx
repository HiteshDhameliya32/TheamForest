import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Paertical from "../helperComponents/Partical";
import { jarallax } from "jarallax";
import "jarallax/dist/jarallax.css";

function Index13() {
  useEffect(() => {
    jarallax(document.querySelectorAll(".jarallax"), {
      speed: 0.2,
    });
  });
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
    <>
      {/*  START HOME  */}
      <section
        className="section header-bg-img h-100vh align-items-center d-flex  jarallax clip-home-in position-relative"
        data-jarallax='{"speed": 0.2}'
        style={{ backgroundimage: "url('assets/images/header-bg.jpg')" }}
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
                  <a href="#" className="btn btn-outline-custom btn-round">
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
      </section>
      {/*  END HOME */}
    </>
  );
}

export default Index13;
