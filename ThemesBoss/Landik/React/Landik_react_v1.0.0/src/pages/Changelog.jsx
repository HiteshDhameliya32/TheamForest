import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Changelog() {
  return (
    <>
      <Header />
      {/* Start Banner */}
      <section className="bg-page-head section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="pages_banner_content">
                <h1 className="fw-bold">Changelog</h1>
                <p>What's new in the latest version of Insight.</p>
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

      {/* Start Changelog */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="changelog_box">
                <div className="inner_box_chang mb-4">
                  <h4 className="fw-bold">
                    <span className="text-custom">2.0.0</span> - 15<sup>th</sup>{" "}
                    Aug 2023
                  </h4>
                  <h5 className="mt-4 fw-bold">General</h5>
                  <p className="align-items-center d-flex text-muted mb-1">
                    <span></span> Added SCSS support
                  </p>
                  <p className="align-items-center d-flex text-muted mb-0">
                    <span></span> Update Bootstrap to v5.3.1
                  </p>
                </div>
                <div className="inner_box_chang">
                  <h4 className="fw-bold">
                    <span className="text-custom">1.0.0</span> - 19<sup>th</sup>{" "}
                    July 2021
                  </h4>
                  <h5 className="mt-4 fw-bold">General</h5>
                  <p className="align-items-center d-flex text-muted mb-0">
                    <span></span> Initial Released
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Changelog */}
      <Footer />
    </>
  );
}

export default Changelog;
