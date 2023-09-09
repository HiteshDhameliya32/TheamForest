import React, { useEffect, useState } from "react";

import CountUp from "react-countup";

import Footer2 from "../components/Footer2";
import Header from "../components/Header";

function About() {
  const [startCounter, setStartCounter] = useState(0);

  useEffect(() => {
    // Function to check if the element is in the viewport
    const isInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    // Function to start the counter animation
    const startCountAnimation = () => {
      if (isInViewport(document.getElementById("counter")) && !startCounter) {
        setStartCounter(true);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", startCountAnimation);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", startCountAnimation);
    };
  }, [startCounter]);
  return (
    <>
      <Header />
      {/* <!-- Start Banner --> */}
      <section className="bg-page-head section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="pages_banner_content">
                <h1 className="fw-bold">About Us</h1>
                <p>A company turning ideas into beautiful things.</p>
                <div>
                  <a href="contact.html" className="btn btn-custom btn-sm">
                    Contact US
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Start Banner--> */}

      {/* <!-- Start About Section --> */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about_page_images">
                <img
                  src="assets/images/about_page_img.jpg"
                  alt=""
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="ab_page_title mt-3">
                <h2 className="fw-bold text-capitalize">
                  We’re an aspiring team of coders and creatives
                </h2>
                <div className="features_about mt-4">
                  <p className="mb-1 text-muted">
                    <i className="mdi mdi-check-circle text-custom"></i> We
                    Commit To Our Craft.
                  </p>
                  <p className="mb-0 text-muted">
                    <i className="mdi mdi-check-circle text-custom"></i> We Dig
                    Deeper In Workspace.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ab_page_sub_title mt-3">
                <p className="text-muted">
                  Today, we're proud to empower individuals and small business
                  owners around the world. Everyone deserves a website, and
                  we're excited to see what you create. Simplify Communications,
                  Elevate Experiences, Engage And Inspire People Everywhere.
                </p>
                <p className="text-muted mb-0">
                  Good Design And Good Relationships Come From Collaboration.
                  We're Excited To Start A Visual Dialogue, Learn About You, And
                  Make Something Beautiful Together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End About Section --> */}

      {/* <!-- Start Cta --> */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center cta_sec bg-custom position-relative text-white section_title">
                <div className="bg-cta-video-overlay"></div>
                <h2>Get Started with Landik</h2>
                <p className="mx-auto mb-0 mt-4 position-relative">
                  Due to its widespread use as filler text for layouts,
                  non-readability is of great importance.
                </p>
                <div className="mt-4 pt-3 position-relative z-index">
                  <div className="text-center">
                    <a
                      href="https://vimeo.com/109054393"
                      className="video_presentation_play video_pop"
                    >
                      <i className="mdi mdi-play presentation_icon"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Cta --> */}

      {/* <!-- Start Funfact --> */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center section_title">
                <h2>
                  <span></span>Trust us and feel free to try our service
                </h2>
                <p className="mx-auto mb-0 mt-4 text-muted position-relative">
                  Due to its widespread use as filler text for layouts,
                  non-readability is of great importance.
                </p>
                <div className="mt-4 pt-3 position-relative z-index"></div>
              </div>
            </div>
          </div>
          <div className="row" id="counter">
            <div className="col-lg-3">
              <div className="funfact_div_fir mt-3 text-center">
                <div className="fun_icon">
                  <img
                    src="assets/images/icon/chart-bar.svg"
                    alt=""
                    className="img-fluid mx-auto"
                  />
                </div>
                <div className="fun_content mt-4">
                  <h1 className="fw-bold mb-0">
                    <span className="count" data-count="95.45">
                      <CountUp
                        start={0}
                        end={95.74}
                        duration={2}
                        decimals={2}
                        useEasing={true}
                        useGrouping={true}
                      />
                    </span>
                    <span>%</span>
                  </h1>
                  <p className="mt-3 text-muted">
                    Their separate existence is a myth. For science, sport, etc,
                    their pronunciation.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="funfact_div_fir mt-3 text-center">
                <div className="fun_icon">
                  <img
                    src="assets/images/icon/dollar.svg"
                    alt=""
                    className="img-fluid mx-auto"
                  />
                </div>
                <div className="fun_content mt-4">
                  <h1 className="fw-bold mb-0">
                    <span className="count" data-count="12.5">
                      <CountUp
                        start={0}
                        end={12.5}
                        decimal="."
                        duration={2}
                        separator="."
                        decimals={2}
                        useEasing={true}
                        useGrouping={true}
                        redraw={true}
                        delay={0}
                      />
                    </span>
                    <span>M</span>
                  </h1>
                  <p className="mt-3 text-muted">
                    who chooses to enjoy a pleasure that has no annoying
                    consequences.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="funfact_div_fir mt-3 text-center">
                <div className="fun_icon">
                  <img
                    src="assets/images/icon/clock.svg"
                    alt=""
                    className="img-fluid mx-auto"
                  />
                </div>
                <div className="fun_content mt-4">
                  <h1 className="fw-bold mb-0">
                    <span className="count" data-count="3200">
                      <CountUp
                        start={0}
                        end={3200}
                        duration={2}
                        useEasing={true}
                        separator=""
                        useGrouping={true}
                        redraw={true}
                        delay={0}
                      />
                    </span>
                    <span>+</span>
                  </h1>
                  <p className="mt-3 text-muted">
                    Nam libero tempore, cum soluta nobis est eligendi wharm
                    optio cumque.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="funfact_div_fir mt-3 text-center">
                <div className="fun_icon">
                  <img
                    src="assets/images/icon/flower.svg"
                    alt=""
                    className="img-fluid mx-auto"
                  />
                </div>
                <div className="fun_content mt-4">
                  <h1 className="fw-bold mb-0">
                    <span>R</span>
                    <span className="count" data-count="45">
                      <CountUp
                        start={0}
                        end={45}
                        decimal="."
                        duration={2}
                        separator="."
                        useEasing={true}
                        useGrouping={true}
                        redraw={true}
                        delay={0}
                      />
                    </span>
                  </h1>
                  <p className="mt-3 text-muted">
                    On the other hand, we denounce with righteous indignation
                    and dislike men.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Funfact --> */}

      {/* <!-- Start Team --> */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center section_title">
                <h2>
                  <span></span>Team better crew for your startup
                </h2>
                <p className="text-muted mx-auto mb-0 mt-4">
                  Due to its widespread use as filler text for layouts,
                  non-readability is of great importance.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-3">
              <div className="team_sec_sim mt-3">
                <div className="team_img">
                  <img
                    src="assets/images/team/1.jpg"
                    className="img-fluid mx-auto d-block"
                  />
                </div>
                <div className="team_detail text-center mt-3">
                  <h4 className="fw-bold">Hannah Sharpe</h4>
                  <p className="text-muted mb-0">CEO, Co-Founder</p>
                </div>
                <div className="team_divider"></div>
                <div>
                  <ul className="list-inline team_social text-center mb-0">
                    <li className="list-inline-item">
                      <a href="javascript:void(0)" className="">
                        <i className="mdi mdi-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="javascript:void(0)" className="">
                        <i className="mdi mdi-google-plus color_google"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="javascript:void(0)" className="">
                        <i className="mdi mdi-linkedin color_linkdin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="team_sec_sim mt-3">
                <div className="team_img">
                  <img
                    src="assets/images/team/2.jpg"
                    className="img-fluid mx-auto d-block"
                  />
                </div>
                <div className="team_detail text-center mt-3">
                  <h4 className="fw-bold">CLee Carter</h4>
                  <p className="text-muted mb-0">Managing Partner</p>
                </div>
                <div className="team_divider"></div>
                <div>
                  <ul className="list-inline team_social text-center mb-0">
                    <li className="list-inline-item">
                      <a href="javascript:void(0)" className="">
                        <i className="mdi mdi-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="javascript:void(0)" className="">
                        <i className="mdi mdi-google-plus color_google"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="javascript:void(0)" className="">
                        <i className="mdi mdi-linkedin color_linkdin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="team_sec_sim mt-3">
                <div className="team_img">
                  <img
                    src="assets/images/team/3.jpg"
                    className="img-fluid mx-auto d-block"
                  />
                </div>
                <div className="team_detail text-center mt-3">
                  <h4 className="fw-bold">Mary Merrill</h4>
                  <p className="text-muted mb-0">Operations Director</p>
                </div>
                <div className="team_divider"></div>
                <div>
                  <ul className="list-inline team_social text-center mb-0">
                    <li className="list-inline-item">
                      <a href="javascript:void(0)" className="">
                        <i className="mdi mdi-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="javascript:void(0)" className="">
                        <i className="mdi mdi-google-plus color_google"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="javascript:void(0)" className="">
                        <i className="mdi mdi-linkedin color_linkdin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="team_sec_sim mt-3">
                <div className="team_img">
                  <img
                    src="assets/images/team/4.jpg"
                    className="img-fluid mx-auto d-block"
                  />
                </div>
                <div className="team_detail text-center mt-3">
                  <h4 className="fw-bold">Kyle Pratt</h4>
                  <p className="text-muted mb-0">Software Engineer</p>
                </div>
                <div className="team_divider"></div>
                <div>
                  <ul className="list-inline team_social text-center mb-0">
                    <li className="list-inline-item">
                      <a href="javascript:void(0)" className="">
                        <i className="mdi mdi-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="javascript:void(0)" className="">
                        <i className="mdi mdi-google-plus color_google"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="javascript:void(0)" className="">
                        <i className="mdi mdi-linkedin color_linkdin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Team --> */}

      {/* <!-- Start Client Logo --> */}
      <section className="section lan_two_client_img">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title text-center">
                <h2>
                  <span></span>10,000+ companies
                </h2>
                <p className="text-muted mx-auto mb-0 mt-4">
                  Due to its widespread use as filler text for layouts,
                  non-readability is of great importance.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-5 bg-custom rounded">
            <div className="col-lg-3">
              <div className="logo_img">
                <a href="javascript:void(0)">
                  <img
                    src="assets/images/clients/5.png"
                    alt="logo-img"
                    className="mx-auto img-fluid d-block"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="logo_img">
                <a href="javascript:void(0)">
                  <img
                    src="assets/images/clients/6.png"
                    alt="logo-img"
                    className="mx-auto img-fluid d-block"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="logo_img">
                <a href="javascript:void(0)">
                  <img
                    src="assets/images/clients/7.png"
                    alt="logo-img"
                    className="mx-auto img-fluid d-block"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="logo_img">
                <a href="javascript:void(0)">
                  <img
                    src="assets/images/clients/8.png"
                    alt="logo-img"
                    className="mx-auto img-fluid d-block"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Client Logo --> */}
      <Footer2 />
    </>
  );
}

export default About;
