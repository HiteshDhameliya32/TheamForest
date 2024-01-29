import Link from 'next/link'
import React from 'react'

function Recoverpw() {
  return (
    <div className="account-background">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                        <div className="bg-form  rounded">
                            <div className="text-center">
                                <h4 className="text-uppercase ac_logo fw-bold">Fadmin</h4>
                                <p className="text-white mt-2 mb-24">Sign into your account</p>
                            </div>
                            <form className="login_account">
                                <div className="row">
                                    <div className="col-lg-12 mt-1">
                                        <input type="email" className="form-control" placeholder="Email" required="" />
                                    </div>
                                    <div className="col-lg-12 mt-2">
                                        <button className="btn btn-info w-100">Reset Password</button>
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

export default Recoverpw