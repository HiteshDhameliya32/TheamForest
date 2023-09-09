import React from "react";

function Footer() {
  return (
    <>
      {/* Start Footer  */}
      <footer className="footer_fir">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="foot_logo mt-3">
                <a href="index_1.html">
                  <img
                    src="assets/images/logo-light.png"
                    alt=""
                    className="img-fluid d-block text-md-center text-sm-center"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="subcribe_foot mt-3">
                <form className="position-relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  <button
                    type="submit"
                    className="btn btn-custom"
                    id="subscribe"
                  >
                    Subcribe
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="foot_divider mt-5"></div>
          <div className="row mt-3 align-items-center">
            <div className="col-lg-6">
              <div className="footer_menu mt-4">
                <ul className="mb-0 list-inline">
                  <li className="list-inline-item me-0">
                    <a href="javascript:void(0)">Demo</a>
                  </li>
                  <li className="list-inline-item me-0">
                    <a href="javascript:void(0)">Pages</a>
                  </li>
                  <li className="list-inline-item me-0">
                    <a href="javascript:void(0)">Support</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-lg-end">
                <ul className="list-inline mb-0 fot_social mt-4">
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" className="social-icon">
                      <i className="mdi mdi-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" className="social-icon">
                      <i className="mdi mdi-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" className="social-icon">
                      <i className="mdi mdi-reddit"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-12">
              <div className="text_copyright text-center mt-3">
                <p className="mb-0">
                  &copy;{" "}
                  {new Date().getFullYear()} {" "}
                  Landik. Design and coded by{" " }
                  <a
                    href="https://themeforest.net/user/themesboss"
                    target="_blank"
                    className="text-white"
                  >
                    ThemesBoss.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/*  End Footer  */}
    </>
  );
}

export default Footer;
