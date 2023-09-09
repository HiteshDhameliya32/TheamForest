import React from "react";

function Login() {
  return (
    <>
      {/* Start Login */}
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
                  <h4 className="fw-bold text-capitalize">Sign in</h4>
                  <p className="text-muted">
                    Sign in to your account using email and password provided
                    during registration.
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
                        Keep me signed in
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button className="btn btn-custom w-100 mt-3">
                      Sign In
                    </button>
                  </div>
                  <div>
                    <p className="mb-0 text-center mt-3">
                      <a href="pwreset.html" className="text-dark fw-bold">
                        Forgot your password ?
                      </a>
                    </p>
                  </div>
                </form>
              </div>
              <div className="text-center mt-4">
                <p>
                  <small className="text-white me-2">
                    Don't have an account ?
                  </small>{" "}
                  <a href="ragister.html" className="text-white fw-bold">
                    Create an account
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  End Login  */}
    </>
  );
}

export default Login;
