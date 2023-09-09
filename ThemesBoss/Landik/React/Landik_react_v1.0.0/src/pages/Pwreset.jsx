import React from "react";

function Pwreset() {
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
                  <h4 className="fw-bold text-capitalize">
                    Forgot your password?
                  </h4>
                  <p className="text-muted">
                    Change your password in three easy steps. This helps to keep
                    your new password secure.
                  </p>
                </div>
                <form className="mt-4">
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
                  <div className="col-lg-12">
                    <button className="btn btn-custom w-100 mt-3">
                      Get New Password
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

export default Pwreset;
