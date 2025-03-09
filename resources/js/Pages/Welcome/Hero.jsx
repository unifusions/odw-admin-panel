export default function 
Hero() {
    return(
        <>
         <div className="overflow-hidden gradient-radial-sm-primary">
                    <div className="container-lg content-space-t-3 content-space-t-lg-4 content-space-b-2">
                        <div className="w-lg-75 text-center mx-lg-auto text-center mx-auto">
                            {/* <!-- Heading --> */}
                            <div className="mb-7 animated fadeInUp">
                                <h1 className="display-2 mb-3">Your Dental Care, <span className="text-primary text-highlight-warning"> Simplified!</span></h1>
                                <p className="fs-2">Book appointments, compare costs, and get expert advice—all in one app.</p>
                            </div>
                            {/* <!-- End Heading --> */}
                        </div>

                        {/* <!-- Browser Device --> */}
                        <div className="animated fadeInUp">
                            {/* <figure className="js-img-comp device-browser device-browser-lg">
                                <div className="device-browser-header">
                                    <div className="device-browser-header-btn-list">
                                        <span className="device-browser-header-btn-list-btn"></span>
                                        <span className="device-browser-header-btn-list-btn"></span>
                                        <span className="device-browser-header-btn-list-btn"></span>
                                    </div> */}
                                    {/* <div className="device-browser-header-browser-bar"></div> */}
                                {/* </div> */}

                                {/* <div className="position-relative"> */}
                                    {/* <!-- Loader --> */}
                                    {/* <div className="js-img-comp-loader position-absolute d-flex align-items-center justify-content-center bg-white w-100 h-100 zi-999">
                                        <div className="spinner-border text-primary" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    </div> */}
                                    {/* <!-- End Loader --> */}
{/* 
                                    <div className="device-browser-frame">
                                        <div className="js-img-comp-container hs-img-comp-container">
                                            <img className="hs-img-comp hs-img-comp-a" src="" alt="Image Description" />

                                            <div className="js-img-comp-wrapper hs-img-comp-wrapper">
                                                <img className="hs-img-comp hs-img-comp-b" src="" alt="Image Description" />
                                            </div>
                                        </div>
                                    </div> */}
                                {/* </div> */}
                            {/* </figure> */}
                            <img src="/images/hero-option2.jpeg" alt="" className=" js-img-comp device-browser device-browser-lg" />
                        </div>
                        {/* <!-- End Browser Device --> */}
                    </div>
                </div>
        </>
    );
}