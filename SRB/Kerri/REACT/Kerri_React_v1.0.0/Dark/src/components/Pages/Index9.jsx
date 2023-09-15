import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Paertical from "../helperComponents/Partical";

function Index9() {
  const textItems = ["Kerri Deo.", "A Graphic Designer.", "A Photographer."];

  const [currentIndex, setCurrentIndex] = useState(0);

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
      <section
        className="header-bg-img h-100vh align-items-center d-flex clip-home position-relative"
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
                      key={textItems[currentIndex]}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="fw-bold"
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
      </section>
    </>
  );
}

export default Index9;
