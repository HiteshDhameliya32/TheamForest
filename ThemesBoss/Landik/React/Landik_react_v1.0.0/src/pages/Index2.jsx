import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
// import "./Index2.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import $ from "jquery";

function Index2() {
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
  const testimonials = [
    {
      id: 1,
      imageSrc: "assets/images/testi/testi-1.jpg",
      review:
        "“We cut our build times in half compared to our previous process. Love it.”",
      clientName: "Scott Ross",
      companyName: "Landik",
    },
    {
      id: 2,
      imageSrc: "assets/images/testi/testi-2.jpg",
      review:
        "“The support team is super helpful. We're so glad to have them on call.”",
      clientName: "Scott Ross",
      companyName: "Landik",
    },
    {
      id: 3,
      imageSrc: "assets/images/testi/testi-3.jpg",
      review:
        "“Reliability is what Landik is known for, and they've totally delivered this time.”",
      clientName: "Scott Ross",
      companyName: "Landik",
    },
    {
      id: 4,
      imageSrc: "assets/images/testi/testi-3.jpg",
      review:
        "“Reliability is what Landik is known for, and they've totally delivered this time.”",
      clientName: "Scott Ross",
      companyName: "Landik",
    },
    // Add more testimonials as needed
  ];

  const owlOptions = {
    items: 2,
    loop: false,
    nav: false,
  };
  return (
    <>
      {/* <!-- start all cards --> */}
      {/* <!-- Start Home --> */}
      <section className="home_sec section">
        <div className="home_sec_layer"></div>
        <div className="container">
          <div className="row align-items-center position-relative">
            <div className="col-lg-7">
              <div className="home_sec_content mt-3 text-white">
                <p className="fst-italic first_small_lable text-custom">
                  Since 1911
                </p>
                <h1 className="mt-3">
                  Smart and effective solutions for businesses.
                </h1>
                <p className="home_small_title mt-4">
                  Make a website you’ll be proud of.
                </p>
                <div className="mt-5">
                  <a
                    href="javascript:void(0)"
                    className="btn btn-custom border-radius-none"
                  >
                    See How It Works
                  </a>
                </div>
                <div className="home_divider"></div>
                <div className="home_top_brand_title">
                  <div className="align-items-center d-lg-inline-block d-sm-block">
                    <span className="text-white-50 text-capitalize">
                      Trusted partners:
                    </span>
                  </div>
                  <a href="javascript:void(0)">
                    <img
                      src="assets/images/clients/6.png"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                  <a href="javascript:void(0)">
                    <img
                      src="assets/images/clients/7.png"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="home_sec_side_form mt-3 mx-auto rounded">
                <h2 className="text-center">Get 30 days FREE Trial</h2>
                <p className="text-muted text-center mt-3 mb-0">
                  Landik offers functional contact forms that are fully
                  customizable. Try it yourself!
                </p>
                <form className="mt-5">
                  <input
                    type="text"
                    id="exampleInputName1"
                    className="form-control mb-3 trial-input"
                    placeholder="First Name"
                    required
                  />
                  <input
                    type="email"
                    id="exampleInputEmail1"
                    className="form-control mb-3 trial-input"
                    placeholder="Email Id"
                    required=""
                  />
                  <input
                    type="text"
                    id="text"
                    className="form-control mb-3 trial-input"
                    placeholder="Mobile Number"
                    required
                  />
                  <button className="btn btn-custom border-radius-none w-100 mt-3">
                    Start Trial
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Start Home --> */}

      {/* <!-- Start Features --> */}
      <section className="section bg_sec_features">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="service_side_services_sec mt-3">
                <div className="d-flex align-items-center">
                  <div className="ser_img_icon me-3">
                    <img
                      src="assets/images/icon/sketch.svg"
                      className=""
                      alt="..."
                    />
                  </div>
                  <h5 className="fw-bold mb-0">Quality Customer Service</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service_side_services_sec mt-3">
                <div className="d-flex align-items-center">
                  <div className="ser_img_icon me-3">
                    <img
                      src="assets/images/icon/bulb.svg"
                      className=""
                      alt="..."
                    />
                  </div>
                  <h5 className="fw-bold mb-0">Dedicated Support</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service_side_services_sec mt-3">
                <div className="d-flex align-items-center">
                  <div className="ser_img_icon me-3">
                    <img
                      src="assets/images/icon/lnterselect.svg"
                      className=""
                      alt="..."
                    />
                  </div>
                  <h5 className="fw-bold mb-0">We're a True Partner</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center section_title">
                <h2>
                  <span></span>Beautifully handcrafted templates for your
                  website
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
              <div className="mt-3">
                <img
                  src="assets/images/features/3.png"
                  alt="business"
                  className="mx-auto img-fluid rounded business_about position-relative"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mt-3 about_desc_sec">
                <div>
                  <h3 className="features-heading fw-bold">
                    Save tons on design and development
                  </h3>
                </div>
                <div className="features">
                  <div className="features-icon features-left">
                    <i className="mdi mdi-check"></i>
                  </div>
                  <div className="features-desc">
                    <h3 className="features-title">Clean & Minimal Design</h3>
                    <p className="features-sub-title pt-2 text-muted">
                      You want customer to your store. Easily publish your
                      coupans and when a user has manage to catch one of your
                      coupens.
                    </p>
                  </div>
                </div>

                <div className="features">
                  <div className="features-icon features-left">
                    <i className="mdi mdi-check"></i>
                  </div>
                  <div className="features-desc">
                    <h3 className="features-title">Planing & Strategy</h3>
                    <p className="features-sub-title pt-2 text-muted">
                      You want customer to your store. Easily publish your
                      coupans and when a user has manage to catch one of your
                      coupens.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3 mb-5 align-items-center">
            <div className="col-lg-6">
              <div className="mt-3 our_benifits">
                <div className="our_benifits_title">
                  <h3>Here's how we do things differently</h3>
                </div>
                <div className="row mt-3">
                  <div className="col-lg-6">
                    <div className="our_benifits_box mt-3">
                      <div className="our_benifits_icon">
                        <img
                          src="assets/images/icon/pen&ruller.svg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="our_benifits_con mt-4">
                        <h5 className="fw-bold">Well Documented</h5>
                        <p className="text-muted mt-3">
                          Easily publish your coupans and one of your coupens.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="our_benifits_box mt-3">
                      <div className="our_benifits_icon">
                        <img
                          src="assets/images/icon/code.svg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="our_benifits_con mt-4">
                        <h5 className="fw-bold">Highly Customizable</h5>
                        <p className="text-muted mt-3">
                          Easily publish your coupans and one of your coupens.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-lg-6">
                    <div className="our_benifits_box mt-3">
                      <div className="our_benifits_icon">
                        <img
                          src="assets/images/icon/headphones.svg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="our_benifits_con mt-4">
                        <h5 className="fw-bold">24/7 Support</h5>
                        <p className="text-muted mt-3">
                          Easily publish your coupans and one of your coupens.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="our_benifits_box mt-3">
                      <div className="our_benifits_icon">
                        <img
                          src="assets/images/icon/groupchat.svg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="our_benifits_con mt-4">
                        <h5 className="fw-bold">Community</h5>
                        <p className="text-muted mt-3">
                          Easily publish your coupans and one of your coupens.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mt-3">
                <img
                  src="assets/images/features/5.png"
                  alt=""
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Start About --> */}

      {/* <!-- Start Funfact & Video --> */}
      <section className="bg_fun_vid mt-5">
        <div className="bg_fun_vid_overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="vidoe_sec_img mx-auto">
                <a
                  href="https://vimeo.com/109054393"
                  className="video_hit video_pop"
                >
                  <i className="mdi mdi-play hit_video_icon"></i>
                </a>
                <img
                  src="assets/images/screen-1.png"
                  alt=""
                  className="img-fluid mx-auto d-block shadow"
                />
              </div>
            </div>
          </div>
          <div className="row position-relative align-items-center justify-content-between">
            <div className="col-lg-6">
              <div className="video_head_title mt-3 text-white">
                <h2>50k+ users are using this landing page.</h2>
                <p className="text-white-50 mt-4">
                  With lots of unique blocks, you can easily build a page
                  without coding.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mt-3 video_sec_in_btn">
                <a href="javascript:void(0)" className="btn btn-custom">
                  Download Now!
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Funfact & Video --> */}

      {/* <!-- Start Price --> */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title text-center">
                <h2>
                  <span></span>Choose the right plan for your Landik
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
              <div
                className="nav nav-pills price_nav_custom mt-3 d-block"
                id="pills-tab"
                role="tablist"
              >
                <div className="nav-item" role="presentation">
                  <a
                    className="nav-link active"
                    id="v-pills-starter-tab"
                    data-bs-toggle="pill"
                    href="#v-pills-starter"
                    role="tab"
                    aria-controls="v-pills-starter"
                    aria-selected="true"
                  >
                    <div className="d-flex justify-content-between">
                      <div className="float-start responsive_none_float">
                        <h5 className="fw-bold">Starter</h5>
                        <p className="price_budges mb-0">20% Save</p>
                      </div>
                      <div className="float-end price_plan responsive_none_float">
                        <h2 className="mb-0">
                          $29
                          <sub className="font-weight-normal">/Per Month</sub>
                        </h2>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    id="v-pills-enterprice-tab"
                    data-bs-toggle="pill"
                    href="#v-pills-enterprice"
                    role="tab"
                    aria-controls="v-pills-enterprice"
                    aria-selected="false"
                  >
                    <div className="d-flex justify-content-between">
                      <div className="float-start responsive_none_float">
                        <h5 className="fw-bold">Enterprice</h5>
                        <p className="price_budges mb-0">25% Save</p>
                      </div>
                      <div className="float-end price_plan responsive_none_float">
                        <h2 className="mb-0">
                          $59
                          <sub className="font-weight-normal">/Per Month</sub>
                        </h2>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="nav-item" role="presentation">
                  <a
                    className="nav-link mb-0"
                    id="v-pills-ultd-tab"
                    data-bs-toggle="pill"
                    href="#v-pills-ultd"
                    role="tab"
                    aria-controls="v-pills-ultd"
                    aria-selected="false"
                  >
                    <div className="d-flex justify-content-between">
                      <div className="float-start responsive_none_float">
                        <h5 className="fw-bold">Unlimited</h5>
                        <p className="price_budges mb-0">30% Save</p>
                      </div>
                      <div className="float-end price_plan responsive_none_float">
                        <h2 className="mb-0">
                          $89
                          <sub className="font-weight-normal">/Per Month</sub>
                        </h2>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="tab-content price_tab_detail mx-auto mt-3"
                id="v-pills-tabContent"
              >
                <div
                  className="tab-pane fade show active"
                  id="v-pills-starter"
                  role="tabpanel"
                  aria-labelledby="v-pills-starter-tab"
                  tabIndex="0"
                >
                  <div className="price_bg_squre"></div>
                  <div className="price_features position-relative">
                    <p className="mt-0">
                      <i className="mdi mdi-check-circle text-custom me-1"></i>{" "}
                      2GB Cloud Storage
                    </p>
                    <p>
                      <i className="mdi mdi-check-circle text-custom me-1"></i>{" "}
                      100GB CDN Bandwidth
                    </p>
                    <p>
                      <i className="mdi mdi-check-circle text-custom me-1"></i>{" "}
                      98.88% Uptime Guarantee
                    </p>
                    <p className="mb-0">
                      <i className="mdi mdi-check-circle text-custom me-1"></i>{" "}
                      Email Power Tools
                    </p>
                  </div>
                  <div className="mt-5 text-end position-relative">
                    <a
                      href="javascript:void(0)"
                      className="btn btn-custom btn-rounded"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-enterprice"
                  role="tabpanel"
                  aria-labelledby="v-pills-enterprice-tab"
                  tabIndex="0"
                >
                  <div className="price_bg_squre"></div>
                  <div className="price_features position-relative">
                    <p className="mt-0">
                      <i className="mdi mdi-check-circle text-custom me-1"></i>{" "}
                      20GB Cloud Storage
                    </p>
                    <p>
                      <i className="mdi mdi-check-circle text-custom me-1"></i>{" "}
                      1TB CDN Bandwidth
                    </p>
                    <p>
                      <i className="mdi mdi-check-circle text-custom me-1"></i>{" "}
                      99.95% Uptime Guarantee
                    </p>
                    <p className="mb-0">
                      <i className="mdi mdi-check-circle text-custom me-1"></i>{" "}
                      Personal Account Manager
                    </p>
                  </div>
                  <div className="mt-5 text-end position-relative">
                    <a
                      href="javascript:void(0)"
                      className="btn btn-custom btn-rounded"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-ultd"
                  role="tabpanel"
                  aria-labelledby="v-pills-ultd-tab"
                  tabIndex="0"
                >
                  <div className="price_bg_squre"></div>
                  <div className="price_features position-relative">
                    <p className="mt-0">
                      <i className="mdi mdi-check-circle text-custom me-1"></i>{" "}
                      100TB CDN Bandwidth
                    </p>
                    <p>
                      <i className="mdi mdi-check-circle text-custom me-1"></i>{" "}
                      API/Formulas Support*
                    </p>
                    <p>
                      <i className="mdi mdi-check-circle text-custom me-1"></i>{" "}
                      99.99% Uptime Guarantee
                    </p>
                    <p className="mb-0">
                      <i className="mdi mdi-check-circle text-custom me-1"></i>{" "}
                      Enterprise SLA
                    </p>
                  </div>
                  <div className="mt-5 text-end position-relative">
                    <a
                      href="javascript:void(0)"
                      className="btn btn-custom btn-rounded"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Price --> */}

      {/* <!-- Start Counter --> */}
      <section className="section counter_bg" id="counter">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cta_counter bg-custom position-relative">
                <div className="section_title text-white text-center">
                  <h2>People Using Our Software & Counting</h2>
                  <p className="mx-auto mb-0 mt-4">
                    Due to its widespread use as filler text for layouts,
                    non-readability is of great importance.
                  </p>
                </div>
                <div
                  className="text-center mt-5 position-relative"
                  id="counter"
                >
                  <h1
                    className="fw-bold text-white mb-0 count count_custom"
                    data-count="195468"
                  >
                    <CountUp
                      start={0}
                      end={195468}
                      duration={2}
                      separator=""
                      useEasing={true}
                      useGrouping={true}
                      redraw={true}
                      delay={0}
                    />
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Counter --> */}

      {/* <!-- Start Client --> */}
      <section className="section pad_lan_client">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title text-center">
                <h2>
                  <span></span>Customers loving it
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
              <OwlCarousel {...owlOptions} className="owl-theme">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="text-center testi_boxes_landing mt-3 rounded"
                  >
                    <div className="bus_testi_icon_img position-relative text-custom">
                      <img
                        src={testimonial.imageSrc}
                        alt=""
                        className="img-fluid img-rounded rounded-circle mx-auto d-block"
                      />
                      <i className="mdi mdi-format-quote-open"></i>
                    </div>
                    <div className="mt-3">
                      <h5 className="client_review mx-auto text-center">
                        {testimonial.review}
                      </h5>
                      <p className="client_name text-center mb-0 mt-3 fw-bold">
                        - {testimonial.clientName}
                      </p>
                      <a href="javascript:void(0)" className="text-custom">
                        {testimonial.companyName}
                      </a>
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Client --> */}

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
    </>
  );
}

export default Index2;
