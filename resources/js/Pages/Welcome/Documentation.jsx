export default function Documentation
() {
    return(
        <>
         <div className="container-lg">
                    <div className="bg-dark position-relative rounded overflow-hidden pt-4 px-4 pt-sm-10 px-sm-10">
                        {/* <!-- Heading --> */}
                        <div className="w-lg-75 text-center mx-lg-auto mb-7 mb-md-10">
                            <h2 className="display-4 text-white">Documentation</h2>
                            <p className="lead text-white-70">Get started with Front - Multipurpose Responsive Template for building responsive, mobile-first sites, with Bootstrap and a template starter page.</p>
                        </div>
                        {/* <!-- End Heading --> */}

                        <img className="img-fluid" src="assets/svg/illustrations/docs-main-page.svg" alt="Image Description" data-hs-theme-appearance="default" />
                        <img className="img-fluid" src="assets/svg/illustrations/docs-main-page-dark.svg" alt="Image Description" data-hs-theme-appearance="dark" />

                        <div className="gradient-y-lg-dark position-absolute bottom-0 start-0 end-0 w-100 d-flex justify-content-center zi-1 pb-8" style="padding-top: 13rem;">
                            <a className="btn btn-primary btn-lg" href="documentation/index.html">Browse Documentation</a>
                        </div>
                    </div>
                </div>
                </>
    )
}