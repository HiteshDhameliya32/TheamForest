import Link from 'next/link'
import React from 'react'

function Login() {
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
                                        <input type="email" className="form-control" placeholder="Email" required="" />
                                    </div>
                                    <div className="col-lg-12">
                                        <input type="password" className="form-control" id="exampleInputPassword3" placeholder="Password" />
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="checkbox">
                                            <label className="d-flex">
                                                <input className="me-2" type="checkbox" />Remember me
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mb-24 mt-2">
                                        <button className="btn btn-danger w-100">Sign in</button>
                                    </div>
                                    <div className="text-center">
                                        <p className="mb-0"><a href="pages-recoverpw.html" className="text-white fw-bold">Forgot your password ?</a></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="text-center mt-20">
                            <p><small className="text-dark me-1">Don&apos;t have an account ?</small> <Link href="/pages/register" className="text-dark fw-bold">Create an account</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Login