import React from "react";
import Typed from "react-typed";

function Index16() {
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
                <span className="element fw-bold">
                  <Typed
                    strings={[
                      " Kerri Deo.",
                      "A Graphic Designer.",
                      "A Photographer.",
                    ]}
                    typeSpeed={120}
                    backSpeed={60}
                    backDelay={3000}
                    loop
                  />
                </span>
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
      <div className="wave_sec">
        <svg
          width="100%"
          height="100%"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs></defs>
          <path
            id="wave_img"
            d="M 0 185.609 C 317.16666666666663 118.136 317.16666666666663 118.136 634.3333333333333 151.87 C 951.4999999999999 185.609 951.4999999999999 185.609 1268.6666666666665 116.402 C 1585.833333333333 47.195 1585.833333333333 47.195 1903 131.925 L 1903 507 L 0 507 Z"
            fill="#2e3135"
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default Index16;
