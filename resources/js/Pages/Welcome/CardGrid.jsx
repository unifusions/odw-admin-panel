export default function CardGrid() {
    return (
        <>
            <div className="container-lg content-space-t-lg-2 content-space-b-2 content-space-b-lg-3">
               

                <div className="row">
                    <div className="col-md-6 mb-4">
                        {/* <!-- Card --> */}
                        <div className="card card-lg card-transition h-100 bg-light border-0 shadow-none overflow-hidden" >
                            <div className="card-body">
                                <h2 className="card-title h1 text-inherit"> Book Appointments</h2>
                                <p className="card-text lead">Find top dentists near you</p>
                            </div>
                            <div className="card-footer border-0 pt-0 mb-n4 me-n6">
                                <img className="img-fluid" src="/images/appointment.png" alt="Image Description" data-hs-theme-appearance="default" />
                                {/* <img className="img-fluid shadow-lg" src="assets/img/900x562/img1-dark.jpg" alt="Image Description" data-hs-theme-appearance="dark" /> */}
                            </div>
                        </div>
                        {/* <!-- End Card --> */}
                    </div>
                    {/* <!-- End Col --> */}

                    <div className="col-md-6 mb-4">
                        {/* <!-- Card --> */}
                        <a className="card card-lg card-transition h-100 bg-light border-0 shadow-none overflow-hidden" href="#">
                            <div className="card-body">
                                <h2 className="card-title h1 text-inherit"> Cost Estimator</h2>
                                <p className="card-text lead"> Get an instant price range</p>
                            </div>
                            <div className="card-footer border-0 pt-0 mb-n4 me-n6">
                                <img className="img-fluid " src="/images/cost-estimator.png" alt="Image Description" />
                            </div>
                        </a>
                        {/* <!-- End Card --> */}
                    </div>
                    {/* <!-- End Col --> */}

                    <div className="col-md-6 mb-4">
                        {/* <!-- Card --> */}
                        <a className="card card-lg card-transition h-100 bg-light border-0 shadow-none overflow-hidden" href="#">
                            <div className="card-body">
                                <h2 className="card-title h1 text-inherit"> Second Opinion</h2>
                                <p className="card-text lead">Advice from verified experts</p>
                            </div>
                            <div className="card-footer border-0 pt-0 mb-n4 me-n6">
                                <img className="img-fluid " src="/images/second-opinion.png" alt="Image Description" data-hs-theme-appearance="default" />
                            </div>
                        </a>
                        {/* <!-- End Card --> */}
                    </div>
                  

                    <div className="col-md-6 mb-4 mb-md-0">
                        <a className="card card-lg card-transition h-100 bg-light border-0 shadow-none overflow-hidden" href="#">
                            <div className="card-body">
                                <h2 className="card-title h1 text-inherit">Compare Prices </h2>
                                <p className="card-text lead">Make informed decisions</p>
                            </div>
                            <div className="card-footer border-0 pt-0 mb-n4 me-n6">
                                <img className="img-fluid" src="/images/compare-cost.png" alt="Image Description" data-hs-theme-appearance="default" />
                            </div>
                        </a>                    </div>

                </div>
            </div>
        </>
    )
}