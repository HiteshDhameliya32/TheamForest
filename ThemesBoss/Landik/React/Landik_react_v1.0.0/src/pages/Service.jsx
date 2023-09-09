import React from "react";
import Header from "../components/Header";
import Footer4 from "../components/Footer4";

function Service() {
  return (
    <>
      <Header />
      {/* Start Banner */}
      <section className="bg-page-head section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="pages_banner_content">
                <h1 className="fw-bold">Services</h1>
                <p>Our offer data science and analytics services.</p>
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
      {/* Start Banner*/}

      {/* Start Services */}
      <section className="section">
        <div className="container">
          <div className="row">
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
      {/* End Services */}

      {/* Start Conetent */}
      <section className="section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="content_fea_third mx-auto mt-3">
                <p className="content_small_title_third mb-0 text-uppercase">
                  <span className="content_bg_box"></span>Perfact Design
                </p>
                <h3 className="content_main_title_third mb-0 mt-4">
                  It’s everything you’ll ever need.
                </h3>
                <p className="text-muted mt-4">
                  Create custom landing pages with Landik that converts more
                  visitors than any website. With lots of unique blocks, you can
                  easily build a page without coding.
                </p>
                <div className="mt-4 pt-3">
                  <a
                    href="javascript:void(0)"
                    className="btn btn-custom btn-rounded"
                  >
                    Explore
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="side_img_content mt-3">
                <img
                  src="assets/images/about_com.jpg"
                  alt="com"
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </div>
          </div>
          <div className="row mt-5 align-items-center">
            <div className="col-lg-6">
              <div className="side_img_content mt-3">
                <img
                  src="assets/images/about_lap.jpg"
                  alt="com"
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content_fea_third mx-auto mt-3">
                <p className="content_small_title_third mb-0 text-uppercase">
                  <span className="content_bg_box"></span>User Interface
                </p>
                <h3 className="content_main_title_third mb-0 mt-4">
                  Unlimited features awaiting for you
                </h3>
                <p className="text-muted mt-4">
                  Create custom landing pages with Landik that converts more
                  visitors than any website. With lots of unique blocks, you can
                  easily build a page without coding.
                </p>
                <div className="mt-4 pt-3">
                  <a
                    href="javascript:void(0)"
                    className="btn btn-custom btn-rounded"
                  >
                    Explore
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Start Conetent */}

      {/* Start FAQ */}
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
                {/* END box*/}

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
                {/* END box*/}

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
                {/* END box*/}

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
                {/* END box*/}

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
                {/* END box*/}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End FAQ */}
      <Footer4 />
    </>
  );
}

export default Service;
