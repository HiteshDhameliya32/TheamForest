import React from "react";

function Footer4() {
  return (
    <>
      {/*  Start Footer  */}
      <footer className="footer_four">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="footer_logo mt-4">
                <a href="index_1.html">
                  <img
                    src="assets/images/logo-light.png"
                    alt="Logo"
                    className="img-fluid d-block"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="footer_four_menu text-lg-end mt-4">
                <ul className="mb-0 list-inline">
                  <li className="list-inline-item me-0">
                    <a href="javascript:void(0)">Home</a>
                  </li>
                  <li className="list-inline-item me-0">
                    <a href="javascript:void(0)">Product</a>
                  </li>
                  <li className="list-inline-item me-0">
                    <a href="javascript:void(0)">Services</a>
                  </li>
                  <li className="list-inline-item me-0">
                    <a href="javascript:void(0)">Pages</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer_divider"></div>
          <div className="row align-items-center py-3">
            <div className="col-lg-6">
              <div className="copyright_content">
                <p className="mb-0">
                  &copy; {new Date().getFullYear()} Landik. Design and coded by
                  { " "}
                  <a
                    href="https://themeforest.net/user/themesboss"
                    target="_blank"
                    className="footer-text-color"
                  >
                    ThemesBoss.
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-lg-end">
                <ul className="list-inline mb-0 fot_social align-items-center">
                  <span className="d-inline-block me-2">Follow Us :</span>
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
        </div>
      </footer>
      {/*  End Footer  */}
    </>
  );
}

export default Footer4;
