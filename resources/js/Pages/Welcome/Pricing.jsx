export default function Pricing() {
    return (
        <>
          <div className="overflow-hidden">
                    <div className="container-lg content-space-t-2 content-space-t-lg-3">
                        {/* <!-- Heading --> */}
                        <div className="w-lg-75 text-center mx-lg-auto mb-7 mb-md-10">
                            <h2 className="display-4">Pricing</h2>
                            <p className="lead">Whatever your status, our offers evolve according to your needs.</p>
                        </div>
                        {/* <!-- End Heading --> */}

                        <div className="w-md-75 mx-md-auto">
                            <div className="position-relative">
                                <div className="bg-dark rounded-2 p-5">
                                    <div className="row align-items-sm-center">
                                        <div className="col">
                                            <h3 className="text-white mb-1">Single</h3>
                                            <span className="d-block text-white-70">Single site</span>
                                        </div>
                                        {/* <!-- End Col --> */}

                                        <div className="col-sm-7 col-md-5">
                                            <p className="text-white-70 mb-0">Ideal for corporate, portfolio, blog, shop and many more.</p>
                                        </div>
                                        {/* <!-- End Col --> */}

                                        <div className="col-12 col-md col-lg-4 text-lg-end mt-3 mt-lg-0">
                                            <div className="d-grid">
                                                <a className="btn btn-primary" href="#" target="_blank">Buy for $49</a>
                                            </div>
                                        </div>
                                        {/* <!-- End Col --> */}
                                    </div>
                                    {/* <!-- End Row --> */}

                                    <hr className="bg-soft-light opacity-50" />

                                    <div className="row align-items-sm-center">
                                        <div className="col">
                                            <h3 className="text-white mb-1">Multisite</h3>
                                            <span className="d-block text-white-70">Unlimited sites</span>
                                        </div>
                                        {/* <!-- End Col --> */}

                                        <div className="col-sm-7 col-md-5">
                                            <p className="text-white-70 mb-0">All the same examples as the Standard License, but you could build all of them with a single Multisite license.</p>
                                        </div>
                                        {/* <!-- End Col --> */}

                                        <div className="col-12 col-md col-lg-4 text-lg-end mt-3 mt-lg-0">
                                            <div className="d-grid">
                                                <a className="btn btn-primary" href="#" target="_blank">Buy for $149</a>
                                            </div>
                                        </div>
                                        {/* <!-- End Col --> */}
                                    </div>
                                    {/* <!-- End Row --> */}

                                    <hr className="bg-soft-light opacity-50" />

                                    <div className="row align-items-sm-center">
                                        <div className="col">
                                            <h3 className="text-white mb-1">Extended</h3>
                                            <span className="d-block text-white-70">For paying users</span>
                                        </div>
                                        {/* <!-- End Col --> */}

                                        <div className="col-sm-7 col-md-5">
                                            <p className="text-white-70 mb-0">Best suited for "paid subscribers" and SaaS analytics applications.</p>
                                        </div>
                                        {/* <!-- End Col --> */}

                                        <div className="col-12 col-md col-lg-4 text-lg-end mt-3 mt-lg-0">
                                            <div className="d-grid">
                                                <a className="btn btn-primary" href="https://themes.getbootstrap.com/product/front-admin-dashboard-template/" target="_blank">Buy for $599</a>
                                            </div>
                                        </div>
                                        {/* <!-- End Col --> */}
                                    </div>
                                    {/* <!-- End Row --> */}
                                </div>

                                <div className="d-none d-md-block position-absolute bottom-0 start-0">
                                    <img className="img-fluid" src="assets/svg/illustrations/oc-peeking.svg" alt="Image Description" data-hs-theme-appearance="default" style="max-width: 8rem; margin-left: -7.8125rem;" />
                                    <img className="img-fluid" src="assets/svg/illustrations-light/oc-peeking.svg" alt="Image Description" data-hs-theme-appearance="dark" style="max-width: 8rem; margin-left: -7.8125rem;" />
                                </div>

                                <div className="d-none d-md-block position-absolute top-50 end-0 translate-middle-y">
                                    <img className="img-fluid" src="assets/svg/illustrations/oc-on-the-go.svg" alt="Image Description" data-hs-theme-appearance="default" style="max-width: 15rem; margin-right: -15rem;" />
                                    <img className="img-fluid" src="assets/svg/illustrations-light/oc-on-the-go.svg" alt="Image Description" data-hs-theme-appearance="dark" style="max-width: 15rem; margin-right: -15rem;" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}