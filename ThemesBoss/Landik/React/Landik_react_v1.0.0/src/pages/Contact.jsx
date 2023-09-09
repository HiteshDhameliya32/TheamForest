import React from "react";
import Footer3 from "../components/Footer3";
import Header from "../components/Header";

function Contact() {
  return (
    <>
      <Header />
      {/* <!-- Start Banner --> */}
      <section className="bg-page-head section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="pages_banner_content">
                <h1 className="fw-bold">Have a project in mind?</h1>
                <p>We'd love to talk about how we can help you.</p>
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

      {/* <!-- Start Contact --> */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact_thir_form mx-auto">
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
                        value="Send A Message"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="cont_bot_third_bor"></div>
          <div className="row mt-3">
            <div className="col-lg-4">
              <div className="contact_add_third mt-3 text-center">
                <div className="contact_icon_shape mx-auto">
                  <img
                    src="assets/images/icon/mail.svg"
                    alt="mail"
                    className="img-fluid"
                  />
                </div>
                <div className="contact_content mt-3">
                  <h5 className="fw-bold">Email</h5>
                  <p className="mb-0 text-muted">information@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact_add_third mt-3 text-center">
                <div className="contact_icon_shape mx-auto">
                  <img
                    src="assets/images/icon/active-call.svg"
                    alt="mail"
                    className="img-fluid"
                  />
                </div>
                <div className="contact_content mt-3">
                  <h5 className="fw-bold">Telephone</h5>
                  <p className="mb-0 text-muted">+(485) 874 249 23</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact_add_third mt-3 text-center">
                <div className="contact_icon_shape mx-auto">
                  <img
                    src="assets/images/icon/time-schedule.svg"
                    alt="mail"
                    className="img-fluid"
                  />
                </div>
                <div className="contact_content mt-3">
                  <h5 className="fw-bold">Business Hours</h5>
                  <p className="text-muted mb-1">Monday To Friday</p>
                  <p className="mb-0 text-muted">9:00am To 6:00pm (GMT)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Contact --> */}
      <div className="bg-light pt-5">

      <Footer3 />
      </div>
    </>
  );
}

export default Contact;
