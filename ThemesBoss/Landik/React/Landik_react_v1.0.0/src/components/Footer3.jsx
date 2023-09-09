import React from "react";

function Footer3() {
  return (
    <>
      {/*  Start Footer */}
      <footer className="footer_third">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="footer_sub_third">
                <h6 className="mt-3 fw-bold">Subcribe Our Newslatter</h6>
                <div className="footer_title_border"></div>
                <form className="position-relative mt-4">
                  <input type="email" placeholder="Email" required />
                  <button type="submit" className="btn btn-custom">
                    Subcribe
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-2 order-2 order-lg-1">
              <h6 className="mt-3 fw-bold">Social</h6>
              <div className="footer_title_border"></div>
              <ul className="list-unstyled footer_menu_list mb-0 mt-4">
                <li>
                  <a href="javascript:void(0)">Blog</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Facebook</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Instagram</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Twitter</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 order-2 order-lg-1">
              <h6 className="mt-3 fw-bold">Product</h6>
              <div className="footer_title_border"></div>
              <ul className="list-unstyled footer_menu_list mb-0 mt-4">
                <li>
                  <a href="javascript:void(0)">Service</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Features</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Credit</a>
                </li>
                <li>
                  <a href="javascript:void(0)">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 order-2 order-lg-1">
              <h6 className="mt-3 fw-bold">Support</h6>
              <div className="footer_title_border"></div>
              <ul className="list-unstyled footer_menu_list mb-0 mt-4">
                <li>
                  <a href="javascript:void(0)">Privcy</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Tearms</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Help</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_third_copy_border"></div>
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="copyright_third text-center">
                <div className="copy_icon_box mx-auto text-center">
                  <img
                    src="assets/images/icon/heart.svg"
                    alt="heart"
                    className="img-fluid mx-auto"
                  />
                </div>
                <p className="mb-0 text-muted mt-4">
                  &copy; {new Date().getFullYear()} Landik. Design and coded by{ " "}
                  <a
                    href="https://themeforest.net/user/themesboss"
                    target="_blank"
                    className="text-muted"
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

export default Footer3;
