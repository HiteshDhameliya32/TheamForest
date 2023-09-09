import React from "react";

function Footer2() {
  return (
    <>
      {/* Start Footer  */}
      <footer className="footer_lan_two">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 order-2 order-lg-1">
              <div className="foot_side_logo mt-3 mb-2">
                <a href="index_1.html">
                  <img
                    src="assets/images/logo-light.png"
                    alt=""
                    className="img-fluid d-block text-md-center text-sm-center"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-2 order-2 order-lg-1">
              <h6 className="mt-3 text-white font-weight-normal">Customer</h6>
              <div className="footer_title_border"></div>
              <ul className="list-unstyled footer_menu_list mb-0 mt-4">
                <li>
                  <a href="javascript:void(0)">Buyer</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Supplier</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 order-2 order-lg-1">
              <h6 className="mt-3 text-white font-weight-normal">
                Help Center
              </h6>
              <div className="footer_title_border"></div>
              <ul className="list-unstyled footer_menu_list mb-0 mt-4">
                <li>
                  <a href="javascript:void(0)">Billing</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Accounting</a>
                </li>
                <li>
                  <a href="javascript:void(0)">General Question</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="bg_footer_sub mx-auto rounded text-center">
                <div className="section_title text-center text-white">
                  <h2>Get latest updates</h2>
                  <p className="text-white mx-auto mb-0 mt-4">
                    Due to its widespread use as filler text for layouts,
                    non-readability is of great importance.
                  </p>
                </div>
                <div className="subcri_form mt-5">
                  <form>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group mt-2 mb-3">
                          <input
                            name="email"
                            id="email"
                            type="email"
                            className="form-control"
                            placeholder="Your email..."
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <input
                          type="submit"
                          className="btn btn-white w-100"
                          value="Subcribe Now"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="foot_divider mt-5"></div>
          <div className="row mt-3 align-items-center">
            <div className="col-lg-6">
              <div className="text_copyright mt-3">
                <p className="mb-0">
                  &copy; {new Date().getFullYear()} Landik. Design and coded by
                  <a
                    href="https://themeforest.net/user/themesboss"
                    target="_blank"
                    className="text_copyright"
                  >
                    {" "}
                    ThemesBoss.
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-lg-end">
                <ul className="list-inline mb-0 fot_social mt-3">
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

export default Footer2;
