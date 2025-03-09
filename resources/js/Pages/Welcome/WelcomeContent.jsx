import CardGrid from "./CardGrid";
import Documentation from "./Documentation";
import Faqs from "./Faqs";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Testimonial from "./Testimonial";
import Tools from "./Tools";

export default function WelcomeContent() {
    return (
        <>
            {/*  ========== MAIN CONTENT ========== --> */}
            <main id="content" role="main" className="main">

                <Hero />
                <CardGrid />

                <Testimonial />

                {/* <!-- Testimonials --> */}
                {/* <div className="container-lg">
                    <div className="bg-light content-space-2 rounded-3 px-5">
                        <div className="w-md-70 text-center mx-md-auto">
                            <div className="mb-4">
                                <img className="img-fluid mx-auto" src="assets/svg/illustrations/oc-review.svg" alt="Image Description" data-hs-theme-appearance="default" style="max-width: 10rem;" />
                                <img className="img-fluid mx-auto" src="assets/svg/illustrations-light/oc-review.svg" alt="Image Description" data-hs-theme-appearance="dark" style="max-width: 10rem;" />
                            </div>

                            <p className="fs-2 text-dark mb-4"><em>This is a perfect theme for a modern web application. <span className="text-highlight-warning">There was clearly a lot of thought that went into designing</span> all of the components to look coherent and work well together in various grid layouts.</em></p>

                            <h3 className="mb-0">Anton</h3>
                            <p className="fs-4 mb-0">Happy customer</p>
                        </div>
                    </div>
                </div> */}
                {/* <!-- End Testimonials --> */}

                {/* <!-- Card Grid --> */}
                {/* <div className="container-lg content-space-2 content-space-lg-3"> */}
                {/* <!-- Heading --> */}
                {/* <div className="w-lg-75 text-center mx-lg-auto mb-7 mb-md-10">
                        <h2 className="display-4">Packed with <span className="text-primary">features</span> you already love</h2>
                        <p className="lead">The Front features can be flexed according to your needs with dozens of options available and mix-and-match possibilities.</p>
                    </div> */}
                {/* <!-- End Heading --> */}

                {/* <div className="row"> */}
                {/* <div className="col-md-7 mb-4"> */}
                {/* <!-- Card --> */}
                {/* <div className="card card-lg h-100 bg-light border-0 shadow-none overflow-hidden">
                                <div className="card-body">
                                    <h2 className="card-title h1 text-inherit">Calendars</h2>
                                    <p className="card-text lead">Front offers all kinds of calendar components for choosing date ranges, dates and times.</p>
                                </div>
                                <div className="card-footer border-0 pt-0 mb-n4 me-n6">
                                    <img className="img-fluid" src="assets/img/others/img4.png" alt="Image Description" data-hs-theme-appearance="default" />
                                    <img className="img-fluid" src="assets/img/others/img4-dark.png" alt="Image Description" data-hs-theme-appearance="dark" />
                                </div>
                            </div> */}
                {/* <!-- End Card --> */}
                {/* </div> */}
                {/* <!-- End Col --> */}

                {/* <div className="col-md-5 mb-4"> */}
                {/* <!-- Card --> */}
                {/* <div className="card card-lg h-100 bg-light border-0 shadow-none overflow-hidden">
                                <div className="card-body">
                                    <h2 className="card-title h1 text-inherit">2 Sidebar menu options</h2>
                                    <p className="card-text lead">Choose between pill or tab navigation style on the sidebar.</p>
                                </div>
                                <div className="card-footer border-0 pt-0 mb-n4 me-n6">
                                    <img className="img-fluid" src="assets/img/others/img3.png" alt="Image Description" data-hs-theme-appearance="default" />
                                    <img className="img-fluid" src="assets/img/others/img3-dark.png" alt="Image Description" data-hs-theme-appearance="dark" />
                                </div>
                            </div> */}
                {/* <!-- End Card --> */}
                {/* </div> */}
                {/* <!-- End Col --> */}

                {/* <div className="col-md-5 mb-4"> */}
                {/* <!-- Card --> */}
                {/* <div className="card card-lg h-100 bg-light border-0 shadow-none overflow-hidden">
                                <div className="card-body">
                                    <h2 className="card-title h1 text-inherit">Datatables</h2>
                                    <p className="card-text lead">Showcase your latest work with datatable options that provide a powerful portfolio system, beautiful content designs or any other ordered grid content.</p>
                                </div>
                                <div className="card-footer border-0 pt-0 mb-n4 me-n6">
                                    <img className="img-fluid" src="assets/img/others/img6.png" alt="Image Description" data-hs-theme-appearance="default" />
                                    <img className="img-fluid" src="assets/img/others/img6-dark.png" alt="Image Description" data-hs-theme-appearance="dark" />
                                </div>
                            </div> */}
                {/* <!-- End Card --> */}
                {/* </div> */}
                {/* <!-- End Col --> */}

                {/* <div className="col-md-7 mb-4"> */}
                {/* <!-- Card --> */}
                {/* <div className="card card-lg h-100 bg-light border-0 shadow-none overflow-hidden">
                                <div className="card-body">
                                    <h2 className="card-title h1 text-inherit">Chart.js</h2>
                                    <p className="card-text lead">Allow cross-functional charts to deliver stunning content, data and all kinds of information faster no matter use cases and devices.</p>
                                </div>
                                <div className="card-footer border-0 pt-0 mb-n4 me-n6">
                                    <img className="img-fluid" src="assets/img/others/img5.png" alt="Image Description" data-hs-theme-appearance="default" />
                                    <img className="img-fluid" src="assets/img/others/img5-dark.png" alt="Image Description" data-hs-theme-appearance="dark" />
                                </div>
                            </div> */}
                {/* <!-- End Card --> */}
                {/* </div> */}
                {/* <!-- End Col --> */}

                {/* <div className="col-md-7 mb-4 mb-md-0"> */}
                {/* <!-- Card --> */}
                {/* <div className="card card-lg h-100 bg-light border-0 shadow-none overflow-hidden">
                                <div className="card-body">
                                    <h2 className="card-title h1 text-inherit">Advanced Forms</h2>
                                    <p className="card-text lead">Upload images, videos or any files, copy to clipboard, toggle passwords, search, add fields, count characters and discover more customizable and feature-rich plugins.</p>
                                </div>
                                <div className="card-footer border-0 pt-0 mb-n4 me-n6">
                                    <img className="img-fluid" src="assets/img/others/img8.png" alt="Image Description" data-hs-theme-appearance="default" />
                                    <img className="img-fluid" src="assets/img/others/img8-dark.png" alt="Image Description" data-hs-theme-appearance="dark" />
                                </div>
                            </div> */}
                {/* <!-- End Card --> */}
                {/* </div> */}
                {/* <!-- End Col --> */}

                {/* <div className="col-md-5"> */}
                {/* <!-- Card --> */}
                {/* <div className="card card-lg h-100 bg-light border-0 shadow-none overflow-hidden">
                                <div className="card-body">
                                    <h2 className="card-title h1 text-inherit">Step Forms (Wizards)</h2>
                                    <p className="card-text lead">Create multi-step forms, validate and navigate through steps to get more leads and increase engagement.</p>
                                </div>
                                <div className="card-footer border-0 pt-0 mb-n4 me-n6">
                                    <img className="img-fluid" src="assets/img/others/img7.png" alt="Image Description" data-hs-theme-appearance="default" />
                                    <img className="img-fluid" src="assets/img/others/img7-dark.png" alt="Image Description" data-hs-theme-appearance="dark" />
                                </div>
                            </div> */}
                {/* <!-- End Card --> */}
                {/* </div> */}
                {/* <!-- End Col --> */}
                {/* </div> */}
                {/* <!-- End Row --> */}
                {/* </div> */}
                {/* <!-- End Card Grid --> */}

                {/* <!-- Features --> */}
                {/* <div className="container-lg content-space-b-2 content-space-b-lg-3">
                    <ul className="list-inline list-py-2 list-px-1 text-center mb-0">
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Bootstrap Icons</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Illustrations</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Accordion</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Alerts</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Avatars</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Badge</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Breadcrumb</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Buttons</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Cards</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Collapse</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Column Divider</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Divider</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Dropdowns</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Icons</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">List Group</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Lists</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Legend Indicator</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Modal</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Offcanvas</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Page Header</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Pagination</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Popovers</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Progress</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Profile</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Shapes</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Spinners</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Steps</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Tab</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Toasts</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Tooltips</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Typography</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Navbar</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Navs</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Mega Menu</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Navbar Vertical Aside</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Scrollspy</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Tables</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Sticky Header</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Basic Forms</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Checks &amp; Switches</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Input Group</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Advanced Select</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">File Attachments</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Drag' n' Drop File Uploads</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">WYSIWYG Editor</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Quantity Counter</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Copy to Clipboard</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Input Mask</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Step Forms (Wizards)</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Add Field</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Toggle Password</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Count Characters</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Form Search</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Toggle Switch</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Google reCAPTCHA</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Counter</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Circles.js (Pie Chart)</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Fullscreen Lightbox</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Leaflet</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">JSVectorMap</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Sticky Block</span>
                        </li>
                        <li className="list-inline-item">
                            <span className="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Go To</span>
                        </li>
                    </ul>
                </div> */}
                {/* <!-- End Features --> */}

                {/* <!-- Sliding Image --> */}
                {/* <div className="content-space-b-2"> */}
                {/* <!-- Heading --> */}
                {/* <div className="container-lg">
                        <div className="w-lg-75 text-center mx-lg-auto mb-7 mb-md-10">
                            <h2 className="display-4">Design solutions for any use cases</h2>
                            <p className="lead">Whether you're creating a web application, dashboard, admin panels, or SASS based interface — Front Dashboard helps you create the best possible web application projects.</p>
                        </div>
                    </div> */}
                {/* <!-- End Heading --> */}

                {/* <div className="sliding-img mb-5"> */}
                {/* <div className="sliding-img-frame-to-start" style="background-image: url(assets/img/others/img1.png);" data-hs-theme-appearance="default"></div>
                                                                                                    <div className="sliding-img-frame-to-start" style="background-image: url(assets/img/others/img1-dark.png);" data-hs-theme-appearance="dark"></div> */}
                {/* </div> */}

                {/* <div className="sliding-img">
                        <div className="sliding-img-frame-to-end" style="background-image: url(assets/img/others/img2.png);" data-hs-theme-appearance="default"></div>
                        <div className="sliding-img-frame-to-end" style="background-image: url(assets/img/others/img2-dark.png);" data-hs-theme-appearance="dark"></div>
                    </div>
                </div> */}
                {/* <!-- End Sliding Image --> */}

                {/* <!-- Stats --> */}
                {/* <div className="container-lg content-space-b-2 content-space-b-lg-3"> */}
             
                {/* <!-- End Row --> */}
                {/* </div> */}
                {/* <!-- End Stats --> */}

                {/* <!-- Testimonials --> */}
                {/* <div className="container-lg">
                    <div className="bg-light content-space-2 rounded-3 px-5">
                        <div className="w-md-70 text-center mx-md-auto">
                            <div className="mb-4">
                                <img className="img-fluid mx-auto" src="assets/svg/illustrations/oc-review.svg" alt="Image Description" data-hs-theme-appearance="default" style="max-width: 10rem;" />
                                <img className="img-fluid mx-auto" src="assets/svg/illustrations-light/oc-review.svg" alt="Image Description" data-hs-theme-appearance="dark" style="max-width: 10rem;" />
                            </div>

                            <p className="fs-2 text-dark mb-4"><em>The theme has a very professional look, bringing a more modern and clean style to the application. <span className="text-highlight-warning">The documentation is extraordinarily rich and complete</span>, helping implementation.</em></p>

                            <h3 className="mb-0">Marcos</h3>
                            <p className="fs-4 mb-0">Happy customer</p>
                        </div>
                    </div>
                </div> */}
                {/* <!-- End Testimonials --> */}

             

             

                {/* <Documentation /> */}

                {/* <Tools /> */}

                {/* <Testimonials /> */}
                {/* <Pricing /> */}
                <Faqs />
            </main>
            {/* <!-- ========== END MAIN CONTENT ========== --> */}
        </>
    )
}