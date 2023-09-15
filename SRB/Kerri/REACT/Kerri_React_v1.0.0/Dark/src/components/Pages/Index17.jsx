import React, { useEffect, useState } from "react";
import Wavify from "react-wavify";
import { motion, AnimatePresence } from "framer-motion";

function Index17() {
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
      className="section header-bg-img h-100vh align-items-center d-flex"
      id="home"
    >
      <div className="bg-overlay"></div>
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
                    exit={{ opacity: 0 }}
                    className="fw-bold"
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
      <div className="wave_sec">
        <Wavify
          className="wave"
          fill="#2e3135"
          paused={false}
          options={{
            height: 100,
            bones: 3,
            amplitude: 50,
            speed: 0.25,
          }}
        />
      </div>
    </section>
  );
}

export default Index17;
