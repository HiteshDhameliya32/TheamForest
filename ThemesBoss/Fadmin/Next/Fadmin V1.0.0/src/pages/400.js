import Link from 'next/link';
import React from 'react'

function Page400() {
  return (
    // Login page
        <div className="account-background error_page">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                        <div className="bg-form rounded">
                            <div className="account-table">
                                <div className="account-table-cell">
                                    <div className="text-center">
                                        <h1 className="error_font mb-24 text-white">400</h1>
                                        <h4 className="mt-30 error_desc">Sorry, Page not found</h4>
                                        <div className="col-lg-12 mt-20">
                                            <Link href="/" className="btn btn-danger btn-lg btn-rounded">Back To Home</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    //    End Login Page
  );
}

export default Page400

