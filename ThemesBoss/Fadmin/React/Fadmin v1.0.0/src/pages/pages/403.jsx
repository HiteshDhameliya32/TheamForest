import { A } from "hookrouter"


function Page403() {
  return (
    <div className="account-background error_page">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-4">
                <div className="bg-form rounded">
                    <div className="account-table">
                        <div className="account-table-cell">
                            <div className="text-center">
                                <h1 className="error_font mb-24 text-white">403</h1>
                                <h4 className="mt-30 error_desc">Forbiddon Error!</h4>
                                <div className="col-lg-12 mt-20">
                                    <A href="/" className="btn btn-danger btn-lg btn-rounded">Back To Home</A>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Page403