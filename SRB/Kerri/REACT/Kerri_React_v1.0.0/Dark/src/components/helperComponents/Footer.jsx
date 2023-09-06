import React from "react";

function Footer() {
  return (
    <>
      {/* START FOOTER */}
      <footer className="footer bg-light">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-12">
              <div className="text-center text-white footer-alt">
                <ul className="list-unstyled list-inline mb-0">
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="mdi mdi-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="mdi mdi-linkedin"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="mdi mdi-pinterest"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="mdi mdi-twitter"></i>
                    </a>
                  </li>
                </ul>
                <p className="copyright_content mb-0 mt-3">
                  {new Date().getFullYear()} &copy; Kerri. Design by{" "}
                  <a
                    className="copyright_content"
                    target="_blank"
                    href="https://themeforest.net/user/srbthemes"
                  >
                    SRBThemes.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* END FOOTER */}
    </>
  );
}

export default Footer;
