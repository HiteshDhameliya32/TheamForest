import React from "react";
import Typed from "react-typed";
import videoBg from "../../assets/Video/bg-video.mp4";

function Index18() {
  return (
    <>
      <section
        className="bg-dark h-100vh align-items-center d-flex justify-content-center"
        id="home"
      >
        <div className="video-background"></div>
        <div className="bg-overlay"></div>

        <video
          id="video"
          className="youtube-bg"
          src={videoBg}
          autoPlay
          loop
          muted
          style={{
            height: "100vh",
            width: "100vw",
            objectFit: "cover",
          }}
        />

        <div className="position-absolute">
          <div className="container z-index ">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="text-center header-content mx-auto">
                  <h4 className="text-white first-title mb-4">Welcome</h4>
                  <h1 className="header-name text-white text-capitalize mb-0">
                    I'M{" "}
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
                  </h1>
                  <p className="text-white mx-auto header-desc mt-4">
                    It is a long established fact that a reader will be of a
                    page when established fact looking at its layout.
                  </p>
                  <div className="mt-4 pt-2">
                   <a href="/#"  onClick={(e) => e.preventDefault()} className="btn btn-outline-custom btn-round">
                      Download Cv
                    </a>
                  </div>
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

export default Index18;
