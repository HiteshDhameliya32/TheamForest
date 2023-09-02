import React from "react";
import Typed from "react-typed";

function Index7() {
  return (
    <section
      className="section header-bg-img h-100vh align-items-center d-flex clip-home"
      id="home"
    >
      <div className="bg-overlay"></div>
      <div className="container z-index">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="text-center header-content mx-auto">
              <h4 className="text-white first-title mb-4">Welcome</h4>
              <h1 className="header-name text-white text-capitalize mb-0">
                <span className="element">
                  I'M{" "}
                  <Typed
                    strings={[
                      " Kerri Deo.",
                      "A Graphic Designer.",
                      "A Photographer.",
                    ]}
                    typeSpeed={120}
                    backSpeed={60}
                    className="fw-bold"
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
    </section>
  );
}

export default Index7;
