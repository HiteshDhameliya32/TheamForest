import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import $ from "jquery";

import "magnific-popup/dist/jquery.magnific-popup";

function Index1() {
  const testimonialtext = [
    {
      name: "Robert Goodwin",
      text: "“We all know the stigma around build times and the ever expanding arsenal of tooling in modern web apps.”",
      location: "California USA",
    },
    {
      name: "Robert Goodwin",
      text: "“We all know the stigma around build times and the ever expanding arsenal of tooling in modern web apps.”",
      location: "California USA",
    },
    {
      name: "Robert Goodwin",
      text: "“We all know the stigma around build times and the ever expanding arsenal of tooling in modern web apps.”",
      location: "California USA",
    },
    {
      name: "Robert Goodwin",
      text: "“We all know the stigma around build times and the ever expanding arsenal of tooling in modern web apps.”",
      location: "California USA",
    },
  ];

  const options = {
    items: 1,
    loop: false,
    nav: false,
  };
  useEffect(() => {
    $(".video-pop").magnificPopup({
      type: "iframe", // Type of content (iframe for videos)
      iframe: {
        patterns: {
          vimeo: {
            index: "vimeo.com/",
            id: "v=",
            src: "//player.vimeo.com/video/109054393?autoplay=1",
          },
        },
      },
    });
  }, []);
  return (
    <>
      {/* <!-- start all cards --> */}
      {/* <!-- Start Home --> */}
      <section className="home_first section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="home_fir_full_content">
                <div>
                  <a
                    href="https://vimeo.com/109054393?autoplay=1"
                    className="me-3 text-white learn_more video-pop"
                  >
                    <i className="mdi mdi-play text-center"></i>
                  </a>
                </div>
                <div className="mt-4 home_fir_content">
                  <h1>The power of the subscription economy.</h1>
                  <p className="text-muted mt-4">
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minus id quod maxime The standard
                    chunk of those interested.
                  </p>
                  <div className="home_fir_fea_list">
                    <p className="mb-0 text-muted">
                      <span></span>Satisfaction Guarantee
                    </p>
                    <p className="mb-0 mt-2 text-muted">
                      <span></span>Awesome Support 24/7
                    </p>
                  </div>
                  <div className="header_btn mt-4 pt-2">
                    <a href="javascript:void(0)" className="btn btn-custom">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Start Home --> */}

      {/* <!-- Start Logo --> */}
      <section className="img_logo section">
        <div className="container bg-light rounded">
          <div className="row">
            <div className="col-lg-3">
              <div className="logo_img">
                <a href="javascript:void(0)">
                  <img
                    src="assets/images/clients/1.png"
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
                    src="assets/images/clients/2.png"
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
                    src="assets/images/clients/3.png"
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
                    src="assets/images/clients/4.png"
                    alt="logo-img"
                    className="mx-auto img-fluid d-block"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Logo --> */}

      {/* <!-- Start Services --> */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center section_title">
                <h2>
                  <span></span>solution made for you.
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
              <div className="ser_fir_box text-center p-3 mt-3">
                <div className="service_icon">
                  <i className="mdi mdi-compass-rose"></i>
                </div>
                <div className="service_content mt-4">
                  <h4 className="fw-bold">Easy access</h4>
                  <p className="text-muted mt-3">
                    Take Ehya wherever you go so that you know what’s going on
                    with your money at all times.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ser_fir_box text-center p-3 mt-3">
                <div className="service_icon">
                  <i className="mdi mdi-drag-variant"></i>
                </div>
                <div className="service_content mt-4">
                  <h4 className="fw-bold">Budgets that work</h4>
                  <p className="text-muted mt-3">
                    Create budgets you can actually stick to, and can actually
                    see how you’re spending your money.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ser_fir_box text-center p-3 mt-3">
                <div className="service_icon">
                  <i className="mdi mdi-google-circles-extended"></i>
                </div>
                <div className="service_content mt-4">
                  <h4 className="fw-bold">Total control</h4>
                  <p className="text-muted mt-3">
                    Take a full control of your expenses. Landy will control of
                    help you to do that anywhere anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Services --> */}

      {/* <!-- Start Features --> */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center section_title">
                <h2>
                  <span></span>Landik provide Unique smart features
                </h2>
                <p className="text-muted mx-auto mb-0 mt-4">
                  Due to its widespread use as filler text for layouts,
                  non-readability is of great importance.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-5 align-items-center">
            <div className="col-lg-6">
              <div className="feature_fir_images mt-3">
                <img
                  src="assets/images/features/1.png"
                  alt=""
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mt-3 feature_fir_content">
                <h2 className="text-capitalize">
                  Speed up your workflow with our features.
                </h2>
                <p className="text-muted mt-4 mb-0">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </p>
                <div className="fea_icon_list mt-4">
                  <div className=" mt-3">
                    <div className="fea_icon_bg">
                      <img
                        src="assets/images/icon/features-1.png"
                        alt=""
                        className="img-fluid mx-auto"
                      />
                    </div>
                    <span className="text-muted ml-2">
                      Built with latest Bootstrap
                    </span>
                  </div>
                  <div className=" mt-3">
                    <div className="fea_icon_bg">
                      <img
                        src="assets/images/icon/features-2.png"
                        alt=""
                        className="img-fluid mx-auto"
                      />
                    </div>
                    <span className="text-muted ml-2">
                      Awesome Support 24/7
                    </span>
                  </div>
                  <div className=" mt-3">
                    <div className="fea_icon_bg">
                      <img
                        src="assets/images/icon/features-3.png"
                        alt=""
                        className="img-fluid mx-auto"
                      />
                    </div>
                    <span className="text-muted ml-2">
                      Well documented and structured code
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Features --> */}

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
                      className="video_presentation_play video-pop"
                    >
                      <i className="mdi mdi-play presentation_icon"></i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Cta --> */}

      {/* <!-- Start Client --> */}
      <section className="section bg-light pb-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="mt-3">
                <img
                  src="assets/images/client_side.png"
                  alt=""
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="section_title mt-3">
                <h2>
                  <span></span>What our users have to say.
                </h2>
                <p className="mb-0 mt-4 text-muted position-relative">
                  Due to its widespread use as filler text for layouts,
                  non-readability is of great importance.
                </p>
              </div>
              <div className="testi_content mt-5">
                <p className="text-muted">
                  More Over{" "}
                  <a href="javascript:void(0)" className="text-custom">
                    3200+ Customers
                  </a>
                </p>
                <OwlCarousel className="owl-theme" {...options}>
                  {testimonialtext.map((testimonial, index) => (
                    <div className="testi position-relative mt-4" key={index}>
                      <div className="testi-icon testi-left">
                        <i className="mdi mdi-format-quote-open"></i>
                      </div>
                      <div className="testi-desc">
                        <h3 className="testi-title mb-0 text-capitalize">
                          {testimonial.text}
                        </h3>
                        <h5 className="mt-4 mb-0 fw-bold">
                          {testimonial.name}
                        </h5>
                        <p className="text-muted">{testimonial.location}</p>
                      </div>
                    </div>
                  ))}
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Client --> */}

      {/* <!-- Start Price --> */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center section_title">
                <h2>
                  <span></span>What’s our monthly pricing subscription
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
              <div className="price_box_fir mx-auto mt-3">
                <div className="price_name text-center">
                  <h6 className="mb-0">Starter Plan</h6>
                </div>
                <div className="plan_price text-center">
                  <h1 className="mb-0">
                    $29<sub className="font-weight-normal">/Per Month</sub>
                  </h1>
                </div>
                <div className="price_divider"></div>
                <div className="price_features pb-2 text-center">
                  <p className="mb-0">
                    Nulla metus metus vel tincidunt sed euismod nibh Quisque
                    volutpat.
                  </p>
                </div>
                <div className="text-center mt-5">
                  <a
                    href="javascript:void(0)"
                    className="btn btn-custom-light btn-hover btn-rounded"
                  >
                    Join Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="price_box_fir active bg-custom rounded mx-auto mt-3">
                <div className="lable">
                  <h6 className="mb-0 text-uppercase">Best &nbsp;Plan</h6>
                </div>
                <div className="price_name text-center">
                  <h6 className="mb-0">Enterprice Plan</h6>
                </div>
                <div className="plan_price text-center">
                  <h1 className="mb-0">
                    $39<sub className="font-weight-normal">/Per Month</sub>
                  </h1>
                </div>
                <div className="price_divider"></div>
                <div className="price_features pb-2 text-center">
                  <p className="mb-0">
                    Nulla metus metus vel tincidunt sed euismod nibh Quisque
                    volutpat.
                  </p>
                </div>
                <div className="text-center mt-5">
                  <a
                    href="javascript:void(0)"
                    className="btn btn-white btn-hover btn-rounded"
                  >
                    Join Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="price_box_fir mx-auto mt-3">
                <div className="price_name text-center">
                  <h6 className="mb-0">Unlimited Plan</h6>
                </div>
                <div className="plan_price text-center">
                  <h1 className="mb-0">
                    $49<sub className="font-weight-normal">/Per Month</sub>
                  </h1>
                </div>
                <div className="price_divider"></div>
                <div className="price_features pb-2 text-center">
                  <p className="mb-0">
                    Nulla metus metus vel tincidunt sed euismod nibh Quisque
                    volutpat.
                  </p>
                </div>
                <div className="text-center mt-5">
                  <a
                    href="javascript:void(0)"
                    className="btn btn-custom-light btn-hover btn-rounded"
                  >
                    Join Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Price --> */}

      {/* <!-- Start FAQ --> */}
      <section className="section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center section_title">
                <h2>
                  <span></span>Want to ask something from us?
                </h2>
                <p className="text-muted mx-auto mb-0 mt-4">
                  Due to its widespread use as filler text for layouts,
                  non-readability is of great importance.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-5 justify-content-center">
            <div className="col-lg-7">
              <div className="accordion" id="accordionExample">
                <div className="accordion-box">
                  <div className="accordion-head" id="faqHeadingOne">
                    <button
                      className="btn accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqOne"
                      aria-expanded="true"
                      aria-controls="faqOne"
                    >
                      What does royalty free mean?
                    </button>
                  </div>
                  <div
                    id="faqOne"
                    className="collapse collapse show"
                    aria-labelledby="faqHeadingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <p className="text-muted mb-0 fs-15 p-4">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, + when an
                      unknown printer took a galley of type and scrambled it to
                      make a type specimen book.
                    </p>
                  </div>
                </div>
                {/* <!-- END box--> */}

                <div className="accordion-box">
                  <div className="accordion-head" id="faqHeadingTwo">
                    <button
                      className="btn accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqTwo"
                      aria-expanded="false"
                      aria-controls="faqTwo"
                    >
                      What do you mean by item and end product?
                    </button>
                  </div>
                  <div
                    id="faqTwo"
                    className="collapse"
                    aria-labelledby="faqHeadingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <p className="text-muted mb-0 fs-15 p-4">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, + when an
                      unknown printer took a galley of type and scrambled it to
                      make a type specimen book.
                    </p>
                  </div>
                </div>
                {/* <!-- END box--> */}

                <div className="accordion-box">
                  <div className="accordion-head" id="faqHeadingThree">
                    <button
                      className="btn accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqThree"
                      aria-expanded="false"
                      aria-controls="faqThree"
                    >
                      What are some examples of permitted end products?
                    </button>
                  </div>
                  <div
                    id="faqThree"
                    className="collapse"
                    aria-labelledby="faqHeadingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <p className="text-muted mb-0 fs-15 p-4">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, + when an
                      unknown printer took a galley of type and scrambled it to
                      make a type specimen book.
                    </p>
                  </div>
                </div>
                {/* <!-- END box--> */}

                <div className="accordion-box">
                  <div className="accordion-head" id="faqHeadingFour">
                    <button
                      className="btn accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqFour"
                      aria-expanded="false"
                      aria-controls="faqFour"
                    >
                      Am i allowed to modify the item that i purchased?
                    </button>
                  </div>
                  <div
                    id="faqFour"
                    className="collapse"
                    aria-labelledby="faqHeadingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <p className="text-muted mb-0 fs-15 p-4">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, + when an
                      unknown printer took a galley of type and scrambled it to
                      make a type specimen book.
                    </p>
                  </div>
                </div>
                {/* <!-- END box--> */}

                <div className="accordion-box">
                  <div className="accordion-head" id="faqHeadingFive">
                    <button
                      className="btn accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqFive"
                      aria-expanded="false"
                      aria-controls="faqFive"
                    >
                      I'm not sure if my use is covered. what should i do?
                    </button>
                  </div>
                  <div
                    id="faqFive"
                    className="collapse"
                    aria-labelledby="faqHeadingFive"
                    data-bs-parent="#accordionExample"
                  >
                    <p className="text-muted mb-0 fs-15 p-4">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, + when an
                      unknown printer took a galley of type and scrambled it to
                      make a type specimen book.
                    </p>
                  </div>
                </div>
                {/* <!-- END box--> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End FAQ --> */}

      {/* <!-- Start Contact --> */}
      <section className="section bg-contact">
        <div className="bg-overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center contact_section rounded bg-white section_title">
                <h2>
                  <span></span>Still need help?
                </h2>
                <p className="mx-auto mb-0 mt-4">
                  Due to its widespread use as filler text for layouts,
                  non-readability is of great importance.
                </p>
                <div className="mt-5">
                  {/* <!-- Button trigger modal --> */}
                  <button
                    type="button"
                    className="btn btn-custom w-75"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Get In Touch
                  </button>

                  {/* <!-- Modal --> */}
                  <div
                    className="modal fade"
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-5"
                            id="staticBackdropLabel"
                          >
                            Modal title
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <div className="bg-white contact_form p-3 mx-auto rounded">
                            <form>
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="form-group">
                                    <input
                                      name="name"
                                      id="name"
                                      type="text"
                                      className="form-control"
                                      placeholder="Your name..."
                                      required=""
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="form-group mt-2">
                                    <input
                                      name="email"
                                      id="email"
                                      type="email"
                                      className="form-control"
                                      placeholder="Your email..."
                                      required=""
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="form-group mt-2">
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="subject"
                                      placeholder="Your Subject.."
                                      required=""
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="form-group mt-2">
                                    <textarea
                                      name="comments"
                                      id="comments"
                                      rows="4"
                                      className="form-control"
                                      placeholder="Your message..."
                                      required=""
                                    ></textarea>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-12 text-end mt-2">
                                  <input
                                    type="submit"
                                    className="btn btn-custom w-100"
                                    value="Send Message"
                                  />
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- end modal --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Contact --> */}

      {/* <!-- end all cards --> */}
    </>
  );
}

export default Index1;
