import React from "react";

function Ragister() {
  return (
    <>
      <section className="account_page_logo align-items-center d-flex">
        <div className="overlay_account"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <a href="index_1.html">
                <img
                  src="assets/images/logo-light.png"
                  alt="logo"
                  className="img-fluid mx-auto d-block"
                />
              </a>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="account_box mt-3 mx-auto">
                <div className="acc_head text-center">
                  <h4 className="fw-bold text-capitalize">Signup Now!</h4>
                  <p className="text-muted">
                    Registration takes less than a minute but gives you full
                    control over your orders.
                  </p>
                </div>
                <form className="mt-4">
                  <div className="col-lg-12 mt-3">
                    <label className="fw-bold">First Name</label>
                    <input
                      type="text"
                      className="form-control trial-input"
                      placeholder="First Name"
                      required=""
                    />
                  </div>
                  <div className="col-lg-12 mt-3">
                    <label className="fw-bold">Email Address</label>
                    <input
                      type="email"
                      id="exampleInputEmail1"
                      className="form-control trial-input"
                      placeholder="Email Id"
                      required
                    />
                  </div>
                  <div className="col-lg-12 mt-3">
                    <label className="fw-bold">Password</label>
                    <input
                      type="password"
                      id="password1"
                      className="form-control trial-input"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="col-lg-12 mt-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        I agree to the{" "}
                        <a href="#" className="text-custom">
                          Terams & Conditions
                        </a>
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button className="btn btn-custom w-100 mt-3">
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
              <div className="text-center mt-4">
                <p className="text-white">
                  <small className="me-2">Already have an account?</small>{" "}
                  <a href="login.html" className="text-white fw-bold">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ragister;
