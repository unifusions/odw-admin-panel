export default function Tools() {
    return (
        <> <div className="container-lg content-space-2 content-space-lg-3">
            {/* <!-- Heading --> */}
            <div className="w-lg-75 text-center mx-lg-auto mb-7 mb-md-10">
                <h2 className="display-4">Build <span className="text-primary">tools</span> and full <span className="text-primary">documention</span></h2>
                <p className="lead">Components, plugins, and build tools are all thoroughly documented with live examples and markup for easier use and customization.</p>
            </div>
            {/* <!-- End Heading --> */}

            <div className="w-md-75 w-lg-50 mx-md-auto mb-5 mb-md-9">
                {/* <!-- Code Sample --> */}
                <div className="card bg-dark mb-5">
                    <div className="card-body font-monospace">
                        <div className="d-grid gap-6">
                            <span className="d-grid gap-1">
                                <span className="d-block text-white-70">&gt; $ npm install</span>
                                <span className="d-block text-success">Everything installed!</span>
                            </span>
                            <span className="d-grid gap-1">
                                <span className="d-block text-white-70">&gt; $ gulp</span>
                                <span className="d-block text-success">scss watching</span>
                                <span className="d-block text-success">LiveReload started</span>
                                <span className="d-block text-success">Opening localhost:3000</span>
                            </span>
                            <span className="d-grid gap-1">
                                <span className="d-block text-white-70">&gt; $ that's it?!</span>
                                <span className="d-block text-success">Yup, that's it.</span>
                            </span>
                        </div>
                    </div>
                </div>
                {/* <!-- End Code Sample --> */}

                <div className="text-center mb-7">
                    <p>Not comfortable diving that deep? No worries, you just use the compiled CSS and examples pages! <a className="link" href="#">Learn more <i className="bi-chevron-right small"></i></a></p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-auto col-sm-3 col-sm py-3">
                        <img className="avatar avatar-xl avatar-4x3" src="assets/svg/brands/bootstrap-gray.svg" alt="Logo" />
                    </div>
                    {/* <!-- End Col --> */}

                    <div className="col-auto col-sm-3 col-sm py-3">
                        <img className="avatar avatar-xl avatar-4x3" src="assets/svg/brands/sass-gray.svg" alt="Logo" />
                    </div>
                    {/* <!-- End Col --> */}

                    <div className="col-auto col-sm-3 col-sm py-3">
                        <img className="avatar avatar-xl avatar-4x3" src="assets/svg/brands/gulp-gray.svg" alt="Logo" />
                    </div>
                    {/* <!-- End Col --> */}

                    <div className="col-auto col-sm-3 col-sm py-3">
                        <img className="avatar avatar-xl avatar-4x3" src="assets/svg/brands/npm-gray.svg" alt="Logo" />
                    </div>
                    {/* <!-- End Col --> */}
                </div>
                {/* <!-- End Row --> */}
            </div>

            <div className="d-grid mx-auto" style="max-width: 15rem;">
                <a className="btn btn-primary btn-lg" href="#">Learn more</a>
            </div>
        </div>

        </>
    );
}