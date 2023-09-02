import React from "react";
import Typed from "react-typed";

function Index4() {
  return (
    <>
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
                      className="fw-bold"
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
    </>
  );
}

export default Index4;
