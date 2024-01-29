import { A } from "hookrouter"


function Register() {
  return (
    <div className="account-background">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                        <div className="bg-form  rounded">
                            <div className="text-center">
                                <h4 className="text-uppercase ac_logo fw-bold my-3">Fadmin</h4>
                                <p className="text-white mt-2 mb-24">Sign into your account</p>
                            </div>
                            <form className="login_account">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label className="sr-only" htmlFor="exampleInputName2">Name</label>
                                            <input type="text" className="form-control" id="exampleInputName2" placeholder="Jane Doe" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <input type="email" className="form-control" placeholder="Email" required="" />
                                    </div>
                                    <div className="col-lg-12">
                                        <input type="password" className="form-control" id="exampleInputPassword3" placeholder="Password" />
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="checkbox">
                                            <label className="d-flex">
                                                <input className="me-1" type="checkbox" />I Accept <a href="#" className="text-info ms-1">Terms And Condition</a>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <button className="btn btn-danger">Sign in</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="text-center mt-20">
                            <p><small className="text-dark me-1">Don&apos;t have an account ?</small> <A href="/pages/login" className="text-dark fw-bold">Sign In</A></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Register