import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function Index4() {
  return (
    <>
      {/* Start Home */}
      <section className="home_four section">
        <div className="bg-over-img"></div>
        <div className="home-table position-relative">
          <div className="home-table-center">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="home_four_content header-tween mx-auto text-center">
                    <p className="text-uppercase small_title">
                      <span className="small_title_bor"></span> Awesome{" "}
                      <span className="small_title_bor"></span>{" "}
                    </p>
                    <h1 className="fw-bold">Welcome To The Landik Ui kit</h1>
                    <p className="text-muted mt-4 mb-0">
                      Nam libero tempore, cum soluta nobis est eligendi optio
                      cumque nihil impedit quo minus id quod maxime The standard
                      chunk of those interested.
                    </p>

                    <div className="down_scroll mt-5">
                      <Link
                        to="cta_sec"
                        style={{ cursor: "pointer" }}
                        spy={true}
                        smooth={true}
                        duration={1500}
                        offset={-0} // Adjust the offset as needed
                        className="scroll_btn"
                      >
                        <i className="text-white mdi mdi-chevron-double-down"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Start Home */}

      {/* Start Cta */}
      <section className="cta_bg_four section" id="cta_sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center cta_img_bg">
                <h2 className="fw-bold text-white mx-auto">
                  Landing Design tamplate for your startup.
                </h2>
                <p className="mx-auto mb-0 mt-4">
                  Making a decision to do something – this is the first step. We
                  all know that nothing moves until someone makes a decision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Cta */}

      {/* Start Features */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center section_title">
                <h2>
                  <span></span>Our Featured Service that We Provide
                </h2>
                <p className="text-muted mx-auto mb-0 mt-4">
                  Due to its widespread use as filler text for layouts,
                  non-readability is of great importance.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="features_box_four py-5 px-3 mt-3 text-center">
                <div className="features_icon">
                  <h3 className="fw-bold mb-0">1.</h3>
                </div>
                <div className="features_content mt-4">
                  <h5 className="fw-bold">Download our app</h5>
                  <p className="text-muted mb-0 mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </p>
                  <div className="featres_btn mt-4">
                    <a href="javascript:void(0)">
                      Learn More <i className="mdi mdi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features_box_four py-5 px-3 active mt-3 text-center">
                <div className="features_icon">
                  <h3 className="fw-bold mb-0">2.</h3>
                </div>
                <div className="features_content mt-4">
                  <h5 className="fw-bold">Create a free account</h5>
                  <p className="text-muted mb-0 mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </p>
                  <div className="featres_btn mt-4">
                    <a href="javascript:void(0)">
                      Learn More <i className="mdi mdi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features_box_four py-5 px-3 mt-3 text-center">
                <div className="features_icon">
                  <h3 className="fw-bold mb-0">3.</h3>
                </div>
                <div className="features_content mt-4">
                  <h5 className="fw-bold">Now Start your journey</h5>
                  <p className="text-muted mb-0 mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </p>
                  <div className="featres_btn mt-4">
                    <a href="javascript:void(0)">
                      Learn More <i className="mdi mdi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Features */}

      {/* Start Product Doc */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center section_title">
                <h2>
                  <span></span>Product Doc
                </h2>
                <p className="text-muted mx-auto mb-0 mt-4">
                  Due to its widespread use as filler text for layouts,
                  non-readability is of great importance.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="featres_box_images mt-3">
                <div className="features_img">
                  <img
                    src="assets/images/screenshot/1.png"
                    alt="ss"
                    className="img-fluid mx-auto d-block rounded"
                  />
                </div>
                <div className="features_content_img py-4">
                  <div className="icon_features d-flex align-items-center">
                    <div className="icon_box">
                      <i className="mdi mdi-monitor text-custom"></i>
                    </div>
                    <h5 className="mb-0 fw-bold">Fully Responsive</h5>
                  </div>
                  <p className="text-muted mb-0 mt-4">
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="featres_box_images mt-3">
                <div className="features_img">
                  <img
                    src="assets/images/screenshot/2.png"
                    alt="ss"
                    className="img-fluid mx-auto d-block rounded"
                  />
                </div>
                <div className="features_content_img py-4">
                  <div className="icon_features d-flex align-items-center">
                    <div className="icon_box">
                      <i className="mdi mdi-code-tags text-custom"></i>
                    </div>
                    <h5 className="mb-0 fw-bold">W3c Valid Code</h5>
                  </div>
                  <p className="text-muted mb-0 mt-4">
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="featres_box_images mt-3">
                <div className="features_img">
                  <img
                    src="assets/images/screenshot/3.jpg"
                    alt="ss"
                    className="img-fluid mx-auto d-block rounded"
                  />
                </div>
                <div className="features_content_img py-4">
                  <div className="icon_features d-flex align-items-center">
                    <div className="icon_box">
                      <i className="mdi mdi-tune text-custom"></i>
                    </div>
                    <h5 className="mb-0 fw-bold">Easy to customize</h5>
                  </div>
                  <p className="text-muted mb-0 mt-4">
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-4">
              <div className="featres_box_images mt-3">
                <div className="features_img">
                  <img
                    src="assets/images/screenshot/4.png"
                    alt="ss"
                    className="img-fluid mx-auto d-block rounded"
                  />
                </div>
                <div className="features_content_img py-4">
                  <div className="icon_features d-flex align-items-center">
                    <div className="icon_box">
                      <i className="mdi mdi-google-chrome text-custom"></i>
                    </div>
                    <h5 className="mb-0 fw-bold">Browser Compatibility</h5>
                  </div>
                  <p className="text-muted mb-0 mt-4">
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="featres_box_images mt-3">
                <div className="features_img">
                  <img
                    src="assets/images/screenshot/5.png"
                    alt="ss"
                    className="img-fluid mx-auto d-block rounded"
                  />
                </div>
                <div className="features_content_img py-4">
                  <div className="icon_features d-flex align-items-center">
                    <div className="icon_box">
                      <i className="mdi mdi-bootstrap text-custom"></i>
                    </div>
                    <h5 className="mb-0 fw-bold">Based On Bootstrap 4</h5>
                  </div>
                  <p className="text-muted mb-0 mt-4">
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="featres_box_images mt-3">
                <div className="features_img">
                  <img
                    src="assets/images/screenshot/6.png"
                    alt="ss"
                    className="img-fluid mx-auto d-block rounded"
                  />
                </div>
                <div className="features_content_img py-4">
                  <div className="icon_features d-flex align-items-center">
                    <div className="icon_box">
                      <i className="mdi mdi-atom-variant text-custom"></i>
                    </div>
                    <h5 className="mb-0 fw-bold">Retina Ready</h5>
                  </div>
                  <p className="text-muted mb-0 mt-4">
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Product Doc */}

      {/* Start Team */}
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
            <div className="col-lg-4">
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
            <div className="col-lg-4">
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
            <div className="col-lg-4">
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
          </div>
        </div>
      </section>
      {/* End Team */}

      {/* Start CTA */}
      <section className="section">
        <div className="container">
          <div className="row align-items-center cta_four_bg">
            <div className="col-lg-6">
              <div className="cta_title_four mt-3 mx-auto text-center text-lg-end text-xl-start">
                <h2 className="fw-bold text-white">Get Started With Landik</h2>
                <p className="text-white mt-3">
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="btn_cta_four mt-3 text-center text-lg-end text-xl-right mx-auto">
                <a
                  href="javascript:void(0)"
                  className="btn btn-white fw-bold btn-rounded"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End CTA */}

      {/* Start Subcribe */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center section_title">
                <h2>
                  <span></span>Subcribe of our new versions
                </h2>
                <p className="text-muted mx-auto mb-0 mt-4">
                  Due to its widespread use as filler text for layouts,
                  non-readability is of great importance.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="four_sub_sec mt-3">
                <form className="form-inline justify-content-center align-items-center">
                  <div className="form-group position-relative mb-0 mt-3">
                    <i className="mdi mdi-email-outline"></i>
                    <input
                      type="email"
                      className="form-control position-relative ps-5"
                      placeholder="Your Email"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-custom btn-rounded mt-3"
                  >
                    Subcribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* {/* End Subcribe  */}
    </>
  );
}

export default Index4;
