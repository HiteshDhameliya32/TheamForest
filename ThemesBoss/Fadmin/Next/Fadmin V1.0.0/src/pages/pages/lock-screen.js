import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function LockScreen() {
  return (
    <div className="account-background">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-4">
                <div className="bg-form  rounded">
                    <div className="text-center">
                        <Image 
                            src="/assets/images/avatar/avatar-1.png" 
                            alt="avatar-1" 
                            className="img-fluid rounded-circle img-thumbnail mb-2" 
                            height="12" 
                            width="70"
                        />
                        <p className="text-white mt-2">Forgot Something?</p>
                    </div>
                    <form className="login_account">
                        <div className="row">
                            <div className="col-lg-12">
                                <input type="password" className="form-control" placeholder="Password" required=""/>
                            </div>
                            <div className="col-lg-12 mt-2">
                                <button className="btn btn-success w-100">Unlock</button>
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

export default LockScreen