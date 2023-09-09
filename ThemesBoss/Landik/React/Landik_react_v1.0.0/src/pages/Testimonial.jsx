import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Footer2 from "../components/Footer2";
import Header from "../components/Header";
function Testimonial() {
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

  const options = {
    items: 1,
    loop: false,
    nav: false,
  };

  return (
    <>
      <Header />
      {/* <!/-- Start Banner --> */}
      <section className="bg-page-head section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="pages_banner_content">
                <h1 className="fw-bold">Testimonials</h1>
                <p>See what our clients are saying about our services.</p>
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

      {/* <!-- Start Client --> */}
      {/* <section className="section pad_lan_client">
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
              <OwlCarousel className="owl-theme" {...options}>
                {testimonialItems}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section> */}
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
                  <a className="text-custom" href="javascript:void(0)">
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
      <Footer2 />
    </>
  );
}

export default Testimonial;
