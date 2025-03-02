import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>

            <header className='navbar navbar-expand-lg navbar-center navbar-light bg-white navbar-absolute-top navbar-show-hide'>
                <div className="container-sm">
                    <nav className="js-mega-menu navbar-nav-wrap">
                        <a class="navbar-brand" href="index.html" aria-label="Front">
                            <img class="" src="/images/odw-logo-h.png" alt="Logo" data-hs-theme-appearance="default" height={70} width='auto' />
                            {/* <img class="navbar-brand-logo"src="/images/odw-logo-h.png" alt="Logo" data-hs-theme-appearance="dark" /> */}
                        </a>

                        <div className="navbar-nav-wrap-secondary-content">
                            <div className="dropdown">

                            </div>
                        </div>
                    </nav>
                </div>
            </header>


            {/*  ========== MAIN CONTENT ========== --> */}
            <main id="content" role="main" class="main">
                {/* <!-- Hero --> */}
                <div class="overflow-hidden gradient-radial-sm-primary">
                    <div class="container-lg content-space-t-3 content-space-t-lg-4 content-space-b-2">
                        <div class="w-lg-75 text-center mx-lg-auto text-center mx-auto">
                            {/* <!-- Heading --> */}
                            <div class="mb-7 animated fadeInUp">
                                <h1 class="display-2 mb-3">Admin &amp; Dashboard theme <span class="text-primary text-highlight-warning">for everyone!</span></h1>
                                <p class="fs-2">Developer friendly and highly customizable Admin &amp; Dashboard theme.</p>
                            </div>
                            {/* <!-- End Heading --> */}
                        </div>

                        {/* <!-- Browser Device --> */}
                        <div class="animated fadeInUp">
                            <figure class="js-img-comp device-browser device-browser-lg">
                                <div class="device-browser-header">
                                    <div class="device-browser-header-btn-list">
                                        <span class="device-browser-header-btn-list-btn"></span>
                                        <span class="device-browser-header-btn-list-btn"></span>
                                        <span class="device-browser-header-btn-list-btn"></span>
                                    </div>
                                    <div class="device-browser-header-browser-bar">www.htmlstream.com/front/</div>
                                </div>

                                <div class="position-relative">
                                    {/* <!-- Loader --> */}
                                    <div class="js-img-comp-loader position-absolute d-flex align-items-center justify-content-center bg-white w-100 h-100 zi-999">
                                        <div class="spinner-border text-primary" role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                                    {/* <!-- End Loader --> */}

                                    <div class="device-browser-frame">
                                        <div class="js-img-comp-container hs-img-comp-container">
                                            <img class="hs-img-comp hs-img-comp-a" src="assets/img/1618x1010/img1.jpg" alt="Image Description" />

                                            <div class="js-img-comp-wrapper hs-img-comp-wrapper">
                                                <img class="hs-img-comp hs-img-comp-b" src="assets/img/1618x1010/img2.jpg" alt="Image Description" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                        </div>
                        {/* <!-- End Browser Device --> */}
                    </div>
                </div>
                {/* <!-- End Hero --> */}

                {/* <!-- Card Grid --> */}
                <div className="container-lg content-space-t-lg-2 content-space-b-2 content-space-b-lg-3">
                    {/* <!-- Heading --> */}
                    <div class="w-lg-75 text-center mx-lg-auto mb-7 mb-md-10">
                        <h2 class="display-4">Creative <span class="text-primary">demos</span></h2>
                        <p class="lead">Hop in and see Front's power in action in these different layout options.</p>
                    </div>
                    {/* <!-- End Heading --> */}

                    <div class="row">
                        <div class="col-md-6 mb-4">
                            {/* <!-- Card --> */}
                            <a class="card card-lg card-transition h-100 bg-light border-0 shadow-none overflow-hidden" href="index.html">
                                <div class="card-body">
                                    <h2 class="card-title h1 text-inherit">Vertical Sidebar</h2>
                                    <p class="card-text lead">Experience a native pilled-styled sidebar that can be minimized on the fly.</p>
                                </div>
                                <div class="card-footer border-0 pt-0 mb-n4 me-n6">
                                    <img class="img-fluid shadow-lg" src="assets/img/900x562/img1.jpg" alt="Image Description" data-hs-theme-appearance="default" />
                                        <img class="img-fluid shadow-lg" src="assets/img/900x562/img1-dark.jpg" alt="Image Description" data-hs-theme-appearance="dark" />
                                        </div>
                                    </a>
                                    {/* <!-- End Card --> */}
                                </div>
                                {/* <!-- End Col --> */}

                                <div class="col-md-6 mb-4">
                                    {/* <!-- Card --> */}
                                    <a class="card card-lg card-transition h-100 bg-light border-0 shadow-none overflow-hidden" href="dashboard-default-dark.html">
                                        <div class="card-body">
                                            <h2 class="card-title h1 text-inherit">Dark</h2>
                                            <p class="card-text lead">Leverage Front's user-friendly and yet powerful dark mode, which adapts to the browser's default mode.</p>
                                        </div>
                                        <div class="card-footer border-0 pt-0 mb-n4 me-n6">
                                            <img class="img-fluid shadow-lg" src="assets/img/900x562/img6.jpg" alt="Image Description" />
                                        </div>
                                    </a>
                                    {/* <!-- End Card --> */}
                                </div>
                                {/* <!-- End Col --> */}

                                <div class="col-md-6 mb-4">
                                    {/* <!-- Card --> */}
                                    <a class="card card-lg card-transition h-100 bg-light border-0 shadow-none overflow-hidden" href="dashboard-default-dark-sidebar.html">
                                        <div class="card-body">
                                            <h2 class="card-title h1 text-inherit">Dark Sidebar</h2>
                                            <p class="card-text lead">Build a better experience - mix and match dark with light.</p>
                                        </div>
                                        <div class="card-footer border-0 pt-0 mb-n4 me-n6">
                                            <img class="img-fluid shadow-lg" src="assets/img/900x562/img12.jpg" alt="Image Description" data-hs-theme-appearance="default" />
                                                <img class="img-fluid shadow-lg" src="assets/img/900x562/img12-dark.jpg" alt="Image Description" data-hs-theme-appearance="dark" />
                                                </div>
                                            </a>
                                            {/* <!-- End Card --> */}
                                        </div>
                                        {/* <!-- End Col --> */}

                                        <div class="col-md-6 mb-4">
                                            {/* <!-- Card --> */}
                                            <a class="card card-lg card-transition h-100 bg-light border-0 shadow-none overflow-hidden" href="dashboard-default-light-sidebar.html">
                                                <div class="card-body">
                                                    <h2 class="card-title h1 text-inherit">Light Sidebar</h2>
                                                    <p class="card-text lead">Link content types with a light gray sidebar color palette.</p>
                                                </div>
                                                <div class="card-footer border-0 pt-0 mb-n4 me-n6">
                                                    <img class="img-fluid shadow-lg" src="assets/img/900x562/img11.jpg" alt="Image Description" data-hs-theme-appearance="default" />
                                                        <img class="img-fluid shadow-lg" src="assets/img/900x562/img11-dark.jpg" alt="Image Description" data-hs-theme-appearance="dark" />
                                                        </div>
                                                    </a>
                                                    {/* <!-- End Card --> */}
                                                </div>
                                                {/* <!-- End Col --> */}

                                                <div class="col-md-6 mb-4">
                                                    {/* <!-- Card --> */}
                                                    <a class="card card-lg card-transition h-100 bg-light border-0 shadow-none overflow-hidden" href="dashboard-default-double-line.html">
                                                        <div class="card-body">
                                                            <h2 class="card-title h1 text-inherit">Double Line</h2>
                                                            <p class="card-text lead">Present web app in full content with a double line collapsible navigation bar.</p>
                                                        </div>
                                                        <div class="card-footer border-0 pt-0 mb-n4 me-n6">
                                                            <img class="img-fluid shadow-lg" src="assets/img/900x562/img3.jpg" alt="Image Description" data-hs-theme-appearance="default" />
                                                                <img class="img-fluid shadow-lg" src="assets/img/900x562/img3-dark.jpg" alt="Image Description" data-hs-theme-appearance="dark" />
                                                                </div>
                                                            </a>
                                                            {/* <!-- End Card --> */}
                                                        </div>
                                                        {/* <!-- End Col --> */}

                                                        <div class="col-md-6 mb-4">
                                                            {/* <!-- Card --> */}
                                                            <a class="card card-lg card-transition h-100 bg-light border-0 shadow-none overflow-hidden" href="dashboard-default-collapsible-layout.html">
                                                                <div class="card-body">
                                                                    <h2 class="card-title h1 text-inherit">Collapsible Navbar</h2>
                                                                    <p class="card-text lead">Present web app in full content with a single collapsible navigation bar.</p>
                                                                </div>
                                                                <div class="card-footer border-0 pt-0 mb-n4 me-n6">
                                                                    <img class="img-fluid shadow-lg" src="assets/img/900x562/img2.jpg" alt="Image Description" data-hs-theme-appearance="default" />
                                                                        <img class="img-fluid shadow-lg" src="assets/img/900x562/img2-dark.jpg" alt="Image Description" data-hs-theme-appearance="dark" />
                                                                        </div>
                                                                    </a>
                                                                    {/* <!-- End Card --> */}
                                                                </div>
                                                                {/* <!-- End Col --> */}

                                                                <div class="col-md-6 mb-4 mb-md-0">
                                                                    {/* <!-- Card --> */}
                                                                    <a class="card card-lg card-transition h-100 bg-light border-0 shadow-none overflow-hidden" href="dashboard-default-sidebar-detached.html">
                                                                        <div class="card-body">
                                                                            <h2 class="card-title h1 text-inherit">Sidebar Detached</h2>
                                                                            <p class="card-text lead">Choose one of two detached sidebar options to create better navigation options and usability.</p>
                                                                        </div>
                                                                        <div class="card-footer border-0 pt-0 mb-n4 me-n6">
                                                                            <img class="img-fluid shadow-lg" src="assets/img/900x562/img13.jpg" alt="Image Description" data-hs-theme-appearance="default" />
                                                                                <img class="img-fluid shadow-lg" src="assets/img/900x562/img13-dark.jpg" alt="Image Description" data-hs-theme-appearance="dark" />
                                                                                </div>
                                                                            </a>
                                                                            {/* <!-- End Card --> */}
                                                                        </div>
                                                                        {/* <!-- End Col --> */}

                                                                        <div class="col-md-6">
                                                                            {/* <!-- Card --> */}
                                                                            <a class="card card-lg card-transition h-100 bg-light border-0 shadow-none overflow-hidden" href="dashboard-default-sidebar-detached-overlay.html">
                                                                                <div class="card-body">
                                                                                    <h2 class="card-title h1 text-inherit">Sidebar Detached Overlay</h2>
                                                                                    <p class="card-text lead">Provide more navigation options and usability on page level with overlay sidebar detached.</p>
                                                                                </div>
                                                                                <div class="card-footer border-0 pt-0 mb-n4 me-n6">
                                                                                    <img class="img-fluid shadow-lg" src="assets/img/900x562/img5.jpg" alt="Image Description" data-hs-theme-appearance="default" />
                                                                                        <img class="img-fluid shadow-lg" src="assets/img/900x562/img5-dark.jpg" alt="Image Description" data-hs-theme-appearance="dark" />
                                                                                        </div>
                                                                                    </a>
                                                                                    {/* <!-- End Card --> */}
                                                                                </div>
                                                                                {/* <!-- End Col --> */}
                                                                        </div>
                                                                        {/* <!-- End Row --> */}
                                                                </div>
                                                                {/* <!-- End Card Grid --> */}

                                                                {/* <!-- Testimonials --> */}
                                                                <div class="container-lg">
                                                                    <div class="bg-light content-space-2 rounded-3 px-5">
                                                                        <div class="w-md-70 text-center mx-md-auto">
                                                                            <div class="mb-4">
                                                                                <img class="img-fluid mx-auto" src="assets/svg/illustrations/oc-review.svg" alt="Image Description" data-hs-theme-appearance="default" style="max-width: 10rem;" />
                                                                                    <img class="img-fluid mx-auto" src="assets/svg/illustrations-light/oc-review.svg" alt="Image Description" data-hs-theme-appearance="dark" style="max-width: 10rem;" />
                                                                                    </div>

                                                                                    <p class="fs-2 text-dark mb-4"><em>This is a perfect theme for a modern web application. <span class="text-highlight-warning">There was clearly a lot of thought that went into designing</span> all of the components to look coherent and work well together in various grid layouts.</em></p>

                                                                                    <h3 class="mb-0">Anton</h3>
                                                                                    <p class="fs-4 mb-0">Happy customer</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {/* <!-- End Testimonials --> */}

                                                                    {/* <!-- Card Grid --> */}
                                                                    <div class="container-lg content-space-2 content-space-lg-3">
                                                                        {/* <!-- Heading --> */}
                                                                        <div class="w-lg-75 text-center mx-lg-auto mb-7 mb-md-10">
                                                                            <h2 class="display-4">Packed with <span class="text-primary">features</span> you already love</h2>
                                                                            <p class="lead">The Front features can be flexed according to your needs with dozens of options available and mix-and-match possibilities.</p>
                                                                        </div>
                                                                        {/* <!-- End Heading --> */}

                                                                        <div class="row">
                                                                            <div class="col-md-7 mb-4">
                                                                                {/* <!-- Card --> */}
                                                                                <div class="card card-lg h-100 bg-light border-0 shadow-none overflow-hidden">
                                                                                    <div class="card-body">
                                                                                        <h2 class="card-title h1 text-inherit">Calendars</h2>
                                                                                        <p class="card-text lead">Front offers all kinds of calendar components for choosing date ranges, dates and times.</p>
                                                                                    </div>
                                                                                    <div class="card-footer border-0 pt-0 mb-n4 me-n6">
                                                                                        <img class="img-fluid" src="assets/img/others/img4.png" alt="Image Description" data-hs-theme-appearance="default" />
                                                                                            <img class="img-fluid" src="assets/img/others/img4-dark.png" alt="Image Description" data-hs-theme-appearance="dark" />
                                                                                            </div>
                                                                                    </div>
                                                                                    {/* <!-- End Card --> */}
                                                                                </div>
                                                                                {/* <!-- End Col --> */}

                                                                                <div class="col-md-5 mb-4">
                                                                                    {/* <!-- Card --> */}
                                                                                    <div class="card card-lg h-100 bg-light border-0 shadow-none overflow-hidden">
                                                                                        <div class="card-body">
                                                                                            <h2 class="card-title h1 text-inherit">2 Sidebar menu options</h2>
                                                                                            <p class="card-text lead">Choose between pill or tab navigation style on the sidebar.</p>
                                                                                        </div>
                                                                                        <div class="card-footer border-0 pt-0 mb-n4 me-n6">
                                                                                            <img class="img-fluid" src="assets/img/others/img3.png" alt="Image Description" data-hs-theme-appearance="default" />
                                                                                                <img class="img-fluid" src="assets/img/others/img3-dark.png" alt="Image Description" data-hs-theme-appearance="dark" />
                                                                                                </div>
                                                                                        </div>
                                                                                        {/* <!-- End Card --> */}
                                                                                    </div>
                                                                                    {/* <!-- End Col --> */}

                                                                                    <div class="col-md-5 mb-4">
                                                                                        {/* <!-- Card --> */}
                                                                                        <div class="card card-lg h-100 bg-light border-0 shadow-none overflow-hidden">
                                                                                            <div class="card-body">
                                                                                                <h2 class="card-title h1 text-inherit">Datatables</h2>
                                                                                                <p class="card-text lead">Showcase your latest work with datatable options that provide a powerful portfolio system, beautiful content designs or any other ordered grid content.</p>
                                                                                            </div>
                                                                                            <div class="card-footer border-0 pt-0 mb-n4 me-n6">
                                                                                                <img class="img-fluid" src="assets/img/others/img6.png" alt="Image Description" data-hs-theme-appearance="default"/>
                                                                                                    <img class="img-fluid" src="assets/img/others/img6-dark.png" alt="Image Description" data-hs-theme-appearance="dark" />
                                                                                                    </div>
                                                                                            </div>
                                                                                            {/* <!-- End Card --> */}
                                                                                        </div>
                                                                                        {/* <!-- End Col --> */}

                                                                                        <div class="col-md-7 mb-4">
                                                                                            {/* <!-- Card --> */}
                                                                                            <div class="card card-lg h-100 bg-light border-0 shadow-none overflow-hidden">
                                                                                                <div class="card-body">
                                                                                                    <h2 class="card-title h1 text-inherit">Chart.js</h2>
                                                                                                    <p class="card-text lead">Allow cross-functional charts to deliver stunning content, data and all kinds of information faster no matter use cases and devices.</p>
                                                                                                </div>
                                                                                                <div class="card-footer border-0 pt-0 mb-n4 me-n6">
                                                                                                    <img class="img-fluid" src="assets/img/others/img5.png" alt="Image Description" data-hs-theme-appearance="default" />
                                                                                                        <img class="img-fluid" src="assets/img/others/img5-dark.png" alt="Image Description" data-hs-theme-appearance="dark" />
                                                                                                        </div>
                                                                                                </div>
                                                                                                {/* <!-- End Card --> */}
                                                                                            </div>
                                                                                            {/* <!-- End Col --> */}

                                                                                            <div class="col-md-7 mb-4 mb-md-0">
                                                                                                {/* <!-- Card --> */}
                                                                                                <div class="card card-lg h-100 bg-light border-0 shadow-none overflow-hidden">
                                                                                                    <div class="card-body">
                                                                                                        <h2 class="card-title h1 text-inherit">Advanced Forms</h2>
                                                                                                        <p class="card-text lead">Upload images, videos or any files, copy to clipboard, toggle passwords, search, add fields, count characters and discover more customizable and feature-rich plugins.</p>
                                                                                                    </div>
                                                                                                    <div class="card-footer border-0 pt-0 mb-n4 me-n6">
                                                                                                        <img class="img-fluid" src="assets/img/others/img8.png" alt="Image Description" data-hs-theme-appearance="default" />
                                                                                                            <img class="img-fluid" src="assets/img/others/img8-dark.png" alt="Image Description" data-hs-theme-appearance="dark" />
                                                                                                            </div>
                                                                                                    </div>
                                                                                                    {/* <!-- End Card --> */}
                                                                                                </div>
                                                                                                {/* <!-- End Col --> */}

                                                                                                <div class="col-md-5">
                                                                                                    {/* <!-- Card --> */}
                                                                                                    <div class="card card-lg h-100 bg-light border-0 shadow-none overflow-hidden">
                                                                                                        <div class="card-body">
                                                                                                            <h2 class="card-title h1 text-inherit">Step Forms (Wizards)</h2>
                                                                                                            <p class="card-text lead">Create multi-step forms, validate and navigate through steps to get more leads and increase engagement.</p>
                                                                                                        </div>
                                                                                                        <div class="card-footer border-0 pt-0 mb-n4 me-n6">
                                                                                                            <img class="img-fluid" src="assets/img/others/img7.png" alt="Image Description" data-hs-theme-appearance="default" />
                                                                                                                <img class="img-fluid" src="assets/img/others/img7-dark.png" alt="Image Description" data-hs-theme-appearance="dark" />
                                                                                                                </div>
                                                                                                        </div>
                                                                                                        {/* <!-- End Card --> */}
                                                                                                    </div>
                                                                                                    {/* <!-- End Col --> */}
                                                                                                </div>
                                                                                                {/* <!-- End Row --> */}
                                                                                            </div>
                                                                                            {/* <!-- End Card Grid --> */}

                                                                                            {/* <!-- Features --> */}
                                                                                            <div class="container-lg content-space-b-2 content-space-b-lg-3">
                                                                                                <ul class="list-inline list-py-2 list-px-1 text-center mb-0">
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Bootstrap Icons</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Illustrations</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Accordion</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Alerts</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Avatars</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Badge</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Breadcrumb</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Buttons</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Cards</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Collapse</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Column Divider</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Divider</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Dropdowns</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Icons</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">List Group</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Lists</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Legend Indicator</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Modal</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Offcanvas</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Page Header</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Pagination</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Popovers</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Progress</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Profile</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Shapes</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Spinners</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Steps</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Tab</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Toasts</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Tooltips</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Typography</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Navbar</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Navs</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Mega Menu</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Navbar Vertical Aside</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Scrollspy</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Tables</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Sticky Header</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Basic Forms</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Checks &amp; Switches</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Input Group</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Advanced Select</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">File Attachments</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Drag' n' Drop File Uploads</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">WYSIWYG Editor</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Quantity Counter</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Copy to Clipboard</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Input Mask</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Step Forms (Wizards)</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Add Field</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Toggle Password</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Count Characters</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Form Search</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Toggle Switch</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Google reCAPTCHA</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Counter</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Circles.js (Pie Chart)</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Fullscreen Lightbox</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Leaflet</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">JSVectorMap</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Sticky Block</span>
                                                                                                    </li>
                                                                                                    <li class="list-inline-item">
                                                                                                        <span class="badge bg-soft-secondary text-dark fs-4 py-2 px-3">Go To</span>
                                                                                                    </li>
                                                                                                </ul>
                                                                                            </div>
                                                                                            {/* <!-- End Features --> */}

                                                                                            {/* <!-- Sliding Image --> */}
                                                                                            <div class="content-space-b-2">
                                                                                                {/* <!-- Heading --> */}
                                                                                                <div class="container-lg">
                                                                                                    <div class="w-lg-75 text-center mx-lg-auto mb-7 mb-md-10">
                                                                                                        <h2 class="display-4">Design solutions for any use cases</h2>
                                                                                                        <p class="lead">Whether you're creating a web application, dashboard, admin panels, or SASS based interface — Front Dashboard helps you create the best possible web application projects.</p>
                                                                                                    </div>
                                                                                                </div>
                                                                                                {/* <!-- End Heading --> */}

                                                                                                <div class="sliding-img mb-5">
                                                                                                    <div class="sliding-img-frame-to-start" style="background-image: url(assets/img/others/img1.png);" data-hs-theme-appearance="default"></div>
                                                                                                    <div class="sliding-img-frame-to-start" style="background-image: url(assets/img/others/img1-dark.png);" data-hs-theme-appearance="dark"></div>
                                                                                                </div>

                                                                                                <div class="sliding-img">
                                                                                                    <div class="sliding-img-frame-to-end" style="background-image: url(assets/img/others/img2.png);" data-hs-theme-appearance="default"></div>
                                                                                                    <div class="sliding-img-frame-to-end" style="background-image: url(assets/img/others/img2-dark.png);" data-hs-theme-appearance="dark"></div>
                                                                                                </div>
                                                                                            </div>
                                                                                            {/* <!-- End Sliding Image --> */}

                                                                                            {/* <!-- Stats --> */}
                                                                                            <div class="container-lg content-space-b-2 content-space-b-lg-3">
                                                                                                <div class="row">
                                                                                                    <div class="col-sm-6 col-lg-3 mb-5 mb-lg-0">
                                                                                                        <div class="text-center">
                                                                                                            <span class="display-3 fw-normal text-dark">60+</span>
                                                                                                            <p class="fs-3 mb-0">Components</p>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    {/* <!-- End Col --> */}

                                                                                                    <div class="col-sm-6 col-lg-3 mb-5 mb-lg-0">
                                                                                                        <div class="text-center">
                                                                                                            <span class="display-3 fw-normal text-dark">50+</span>
                                                                                                            <p class="fs-3 mb-0">Plugins</p>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    {/* <!-- End Col --> */}

                                                                                                    <div class="col-sm-6 col-lg-3 mb-5 mb-sm-0">
                                                                                                        <div class="text-center">
                                                                                                            <span class="display-3 fw-normal text-dark">450+</span>
                                                                                                            <p class="fs-3 mb-0">Combinations</p>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    {/* <!-- End Col --> */}

                                                                                                    <div class="col-sm-6 col-lg-3">
                                                                                                        <div class="text-center">
                                                                                                            <span class="display-3 fw-normal text-dark">47k+</span>
                                                                                                            <p class="fs-3 mb-0">Happy customers</p>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    {/* <!-- End Col --> */}
                                                                                                </div>
                                                                                                {/* <!-- End Row --> */}
                                                                                            </div>
                                                                                            {/* <!-- End Stats --> */}

                                                                                            {/* <!-- Testimonials --> */}
                                                                                            <div class="container-lg">
                                                                                                <div class="bg-light content-space-2 rounded-3 px-5">
                                                                                                    <div class="w-md-70 text-center mx-md-auto">
                                                                                                        <div class="mb-4">
                                                                                                            <img class="img-fluid mx-auto" src="assets/svg/illustrations/oc-review.svg" alt="Image Description" data-hs-theme-appearance="default" style="max-width: 10rem;" />
                                                                                                                <img class="img-fluid mx-auto" src="assets/svg/illustrations-light/oc-review.svg" alt="Image Description" data-hs-theme-appearance="dark" style="max-width: 10rem;" />
                                                                                                                </div>

                                                                                                                <p class="fs-2 text-dark mb-4"><em>The theme has a very professional look, bringing a more modern and clean style to the application. <span class="text-highlight-warning">The documentation is extraordinarily rich and complete</span>, helping implementation.</em></p>

                                                                                                                <h3 class="mb-0">Marcos</h3>
                                                                                                                <p class="fs-4 mb-0">Happy customer</p>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                {/* <!-- End Testimonials --> */}

                                                                                                {/* <!-- Features --> */}
                                                                                                <div class="container-lg content-space-2 content-space-lg-4">
                                                                                                    {/* <!-- Heading --> */}
                                                                                                    <div class="w-lg-75 text-center mx-lg-auto mb-7 mb-md-10">
                                                                                                        <h2 class="display-4">Applications</h2>
                                                                                                        <p class="lead">Made for everyone, build anything with multiple pre-built applications.</p>
                                                                                                    </div>
                                                                                                    {/* <!-- End Heading --> */}

                                                                                                    {/* <!-- Card Grid --> */}
                                                                                                    <div class="row align-items-md-center content-space-b-1 content-space-b-lg-2">
                                                                                                        <div class="col-md-6 order-md-2 mb-10 mb-md-0">
                                                                                                            {/* <!-- Browser Device --> */}
                                                                                                            <figure class="device-browser">
                                                                                                                <div class="device-browser-header">
                                                                                                                    <div class="device-browser-header-btn-list">
                                                                                                                        <span class="device-browser-header-btn-list-btn"></span>
                                                                                                                        <span class="device-browser-header-btn-list-btn"></span>
                                                                                                                        <span class="device-browser-header-btn-list-btn"></span>
                                                                                                                    </div>
                                                                                                                    <div class="device-browser-header-browser-bar">www.htmlstream.com/front/</div>
                                                                                                                </div>

                                                                                                                <div class="device-browser-frame">
                                                                                                                    <img class="img-fluid shadow-lg" src="assets/img/900x562/img7.jpg" alt="Image Description" data-hs-theme-appearance="default" />
                                                                                                                        <img class="img-fluid shadow-lg" src="assets/img/900x562/img7-dark.jpg" alt="Image Description" data-hs-theme-appearance="dark" />
                                                                                                                        </div>

                                                                                                                        <div class="position-absolute bottom-0 start-0 w-100 h-100 bg-soft-primary zi-n1 mb-n6 ms-n6"></div>
                                                                                                                    </figure>
                                                                                                                    {/* <!-- End Browser Device --> */}
                                                                                                                </div>
                                                                                                                {/* <!-- End Col --> */}

                                                                                                                <div class="col-md-6">
                                                                                                                    <div class="pe-md-7">
                                                                                                                        <div class="mb-5">
                                                                                                                            <div class="mb-5">
                                                                                                                                <span class="badge border border-dark text-dark">Application</span>
                                                                                                                            </div>

                                                                                                                            <h2 class="mb-3">Kanban</h2>
                                                                                                                            <p class="fs-4">A board that visually depicts work at various stages of a process using cards to represent work items and columns to represent each stage of the process.</p>
                                                                                                                        </div>
                                                                                                                        <a class="btn btn-primary" target="_blank" href="apps-kanban.html">Preview Kanban <i class="bi-box-arrow-up-right ms-2"></i></a>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                {/* <!-- End Col --> */}
                                                                                                        </div>
                                                                                                        {/* <!-- End Card Grid --> */}

                                                                                                        {/* <!-- Card Grid --> */}
                                                                                                        <div class="row align-items-md-center content-space-1 content-space-b-lg-2">
                                                                                                            <div class="col-md-6 order-md-2 mb-10 mb-md-0">
                                                                                                                {/* <!-- Browser Device --> */}
                                                                                                                <figure class="device-browser">
                                                                                                                    <div class="device-browser-header">
                                                                                                                        <div class="device-browser-header-btn-list">
                                                                                                                            <span class="device-browser-header-btn-list-btn"></span>
                                                                                                                            <span class="device-browser-header-btn-list-btn"></span>
                                                                                                                            <span class="device-browser-header-btn-list-btn"></span>
                                                                                                                        </div>
                                                                                                                        <div class="device-browser-header-browser-bar">www.htmlstream.com/front/</div>
                                                                                                                    </div>

                                                                                                                    <div class="device-browser-frame">
                                                                                                                        <img class="img-fluid shadow-lg" src="assets/img/900x562/img8.jpg" alt="Image Description" data-hs-theme-appearance="default" />
                                                                                                                            <img class="img-fluid shadow-lg" src="assets/img/900x562/img8-dark.jpg" alt="Image Description" data-hs-theme-appearance="dark" />
                                                                                                                            </div>

                                                                                                                            <div class="position-absolute bottom-0 start-0 w-100 h-100 bg-soft-danger zi-n1 mb-n6 ms-n6"></div>
                                                                                                                        </figure>
                                                                                                                        {/* <!-- End Browser Device --> */}
                                                                                                                    </div>
                                                                                                                    {/* <!-- End Col --> */}

                                                                                                                    <div class="col-md-6">
                                                                                                                        <div class="pe-md-7">
                                                                                                                            <div class="mb-5">
                                                                                                                                <div class="mb-5">
                                                                                                                                    <span class="badge border border-dark text-dark">Application</span>
                                                                                                                                </div>

                                                                                                                                <h2 class="mb-3">Calendar</h2>
                                                                                                                                <p class="fs-4">Multiple views of your day, week and month, guest invites, calendar on the web and more. It allows users to create, edit events, fill in quickly and easily.</p>
                                                                                                                            </div>
                                                                                                                            <a class="btn btn-primary" target="_blank" href="apps-calendar.html">Preview Calendar <i class="bi-box-arrow-up-right ms-2"></i></a>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                    {/* <!-- End Col --> */}
                                                                                                            </div>
                                                                                                            {/* <!-- End Card Grid --> */}

                                                                                                            {/* <!-- Card Grid --> */}
                                                                                                            <div class="row align-items-md-center content-space-1 content-space-b-lg-2">
                                                                                                                <div class="col-md-6 order-md-2 mb-10 mb-md-0">
                                                                                                                    {/* <!-- Browser Device --> */}
                                                                                                                    <figure class="device-browser">
                                                                                                                        <div class="device-browser-header">
                                                                                                                            <div class="device-browser-header-btn-list">
                                                                                                                                <span class="device-browser-header-btn-list-btn"></span>
                                                                                                                                <span class="device-browser-header-btn-list-btn"></span>
                                                                                                                                <span class="device-browser-header-btn-list-btn"></span>
                                                                                                                            </div>
                                                                                                                            <div class="device-browser-header-browser-bar">www.htmlstream.com/front/</div>
                                                                                                                        </div>

                                                                                                                        <div class="device-browser-frame">
                                                                                                                            <img class="img-fluid shadow-lg" src="assets/img/900x562/img9.jpg" alt="Image Description" data-hs-theme-appearance="default" />
                                                                                                                                <img class="img-fluid shadow-lg" src="assets/img/900x562/img9-dark.jpg" alt="Image Description" data-hs-theme-appearance="dark" />
                                                                                                                                </div>

                                                                                                                                <div class="position-absolute bottom-0 start-0 w-100 h-100 bg-soft-warning zi-n1 mb-n6 ms-n6"></div>
                                                                                                                            </figure>
                                                                                                                            {/* <!-- End Browser Device --> */}
                                                                                                                        </div>
                                                                                                                        {/* <!-- End Col --> */}

                                                                                                                        <div class="col-md-6">
                                                                                                                            <div class="pe-md-7">
                                                                                                                                <div class="mb-5">
                                                                                                                                    <div class="mb-5">
                                                                                                                                        <span class="badge border border-dark text-dark">Application</span>
                                                                                                                                    </div>

                                                                                                                                    <h2 class="mb-3">Invoice Generator</h2>
                                                                                                                                    <p class="fs-4">Quickly make invoices with Front's attractive invoice template straight from your web browser.</p>
                                                                                                                                </div>
                                                                                                                                <a class="btn btn-primary" target="_blank" href="apps-invoice-generator.html">Preview Invoice Generator <i class="bi-box-arrow-up-right ms-2"></i></a>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                        {/* <!-- End Col --> */}
                                                                                                                </div>
                                                                                                                {/* <!-- End Card Grid --> */}

                                                                                                                {/* <!-- Card Grid --> */}
                                                                                                                <div class="row align-items-md-center content-space-t-1">
                                                                                                                    <div class="col-md-6 order-md-2 mb-10 mb-md-0">
                                                                                                                        {/* <!-- Browser Device --> */}
                                                                                                                        <figure class="device-browser">
                                                                                                                            <div class="device-browser-header">
                                                                                                                                <div class="device-browser-header-btn-list">
                                                                                                                                    <span class="device-browser-header-btn-list-btn"></span>
                                                                                                                                    <span class="device-browser-header-btn-list-btn"></span>
                                                                                                                                    <span class="device-browser-header-btn-list-btn"></span>
                                                                                                                                </div>
                                                                                                                                <div class="device-browser-header-browser-bar">www.htmlstream.com/front/</div>
                                                                                                                            </div>

                                                                                                                            <div class="device-browser-frame">
                                                                                                                                <img class="img-fluid shadow-lg" src="assets/img/900x562/img10.jpg" alt="Image Description" data-hs-theme-appearance="default" />
                                                                                                                                    <img class="img-fluid shadow-lg" src="assets/img/900x562/img10-dark.jpg" alt="Image Description" data-hs-theme-appearance="dark" />
                                                                                                                                    </div>

                                                                                                                                    <div class="position-absolute bottom-0 start-0 w-100 h-100 bg-soft-success zi-n1 mb-n6 ms-n6"></div>
                                                                                                                                </figure>
                                                                                                                                {/* <!-- End Browser Device --> */}
                                                                                                                            </div>
                                                                                                                            {/* <!-- End Col --> */}

                                                                                                                            <div class="col-md-6">
                                                                                                                                <div class="pe-md-7">
                                                                                                                                    <div class="mb-5">
                                                                                                                                        <div class="mb-5">
                                                                                                                                            <span class="badge border border-dark text-dark">Application</span>
                                                                                                                                        </div>

                                                                                                                                        <h2 class="mb-3">File Manager</h2>
                                                                                                                                        <p class="fs-4">Please your visitors with eye-catching and exciting file manager. Different options and settings to manage your site.</p>
                                                                                                                                    </div>
                                                                                                                                    <a class="btn btn-primary" target="_blank" href="apps-file-manager.html">Preview File Manager <i class="bi-box-arrow-up-right ms-2"></i></a>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                            {/* <!-- End Col --> */}
                                                                                                                    </div>
                                                                                                                    {/* <!-- End Card Grid --> */}
                                                                                                                </div>
                                                                                                                {/* <!-- End Features --> */}

                                                                                                                {/* <!-- Documentation --> */}
                                                                                                                <div class="container-lg">
                                                                                                                    <div class="bg-dark position-relative rounded overflow-hidden pt-4 px-4 pt-sm-10 px-sm-10">
                                                                                                                        {/* <!-- Heading --> */}
                                                                                                                        <div class="w-lg-75 text-center mx-lg-auto mb-7 mb-md-10">
                                                                                                                            <h2 class="display-4 text-white">Documentation</h2>
                                                                                                                            <p class="lead text-white-70">Get started with Front - Multipurpose Responsive Template for building responsive, mobile-first sites, with Bootstrap and a template starter page.</p>
                                                                                                                        </div>
                                                                                                                        {/* <!-- End Heading --> */}

                                                                                                                        <img class="img-fluid" src="assets/svg/illustrations/docs-main-page.svg" alt="Image Description" data-hs-theme-appearance="default" />
                                                                                                                            <img class="img-fluid" src="assets/svg/illustrations/docs-main-page-dark.svg" alt="Image Description" data-hs-theme-appearance="dark" />

                                                                                                                                <div class="gradient-y-lg-dark position-absolute bottom-0 start-0 end-0 w-100 d-flex justify-content-center zi-1 pb-8" style="padding-top: 13rem;">
                                                                                                                                    <a class="btn btn-primary btn-lg" href="documentation/index.html">Browse Documentation</a>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                    </div>
                                                                                                                    {/* <!-- End Documentation --> */}

                                                                                                                    {/* <!-- Tools --> */}
                                                                                                                    <div class="container-lg content-space-2 content-space-lg-3">
                                                                                                                        {/* <!-- Heading --> */}
                                                                                                                        <div class="w-lg-75 text-center mx-lg-auto mb-7 mb-md-10">
                                                                                                                            <h2 class="display-4">Build <span class="text-primary">tools</span> and full <span class="text-primary">documention</span></h2>
                                                                                                                            <p class="lead">Components, plugins, and build tools are all thoroughly documented with live examples and markup for easier use and customization.</p>
                                                                                                                        </div>
                                                                                                                        {/* <!-- End Heading --> */}

                                                                                                                        <div class="w-md-75 w-lg-50 mx-md-auto mb-5 mb-md-9">
                                                                                                                            {/* <!-- Code Sample --> */}
                                                                                                                            <div class="card bg-dark mb-5">
                                                                                                                                <div class="card-body font-monospace">
                                                                                                                                    <div class="d-grid gap-6">
                                                                                                                                        <span class="d-grid gap-1">
                                                                                                                                            <span class="d-block text-white-70">&gt; $ npm install</span>
                                                                                                                                            <span class="d-block text-success">Everything installed!</span>
                                                                                                                                        </span>
                                                                                                                                        <span class="d-grid gap-1">
                                                                                                                                            <span class="d-block text-white-70">&gt; $ gulp</span>
                                                                                                                                            <span class="d-block text-success">scss watching</span>
                                                                                                                                            <span class="d-block text-success">LiveReload started</span>
                                                                                                                                            <span class="d-block text-success">Opening localhost:3000</span>
                                                                                                                                        </span>
                                                                                                                                        <span class="d-grid gap-1">
                                                                                                                                            <span class="d-block text-white-70">&gt; $ that's it?!</span>
                                                                                                                                            <span class="d-block text-success">Yup, that's it.</span>
                                                                                                                                        </span>
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                            {/* <!-- End Code Sample --> */}

                                                                                                                            <div class="text-center mb-7">
                                                                                                                                <p>Not comfortable diving that deep? No worries, you just use the compiled CSS and examples pages! <a class="link" href="documentation/gulp.html">Learn more <i class="bi-chevron-right small"></i></a></p>
                                                                                                                            </div>

                                                                                                                            <div class="row justify-content-center">
                                                                                                                                <div class="col-auto col-sm-3 col-sm py-3">
                                                                                                                                    <img class="avatar avatar-xl avatar-4x3" src="assets/svg/brands/bootstrap-gray.svg" alt="Logo" />
                                                                                                                                </div>
                                                                                                                                {/* <!-- End Col --> */}

                                                                                                                                <div class="col-auto col-sm-3 col-sm py-3">
                                                                                                                                    <img class="avatar avatar-xl avatar-4x3" src="assets/svg/brands/sass-gray.svg" alt="Logo" />
                                                                                                                                </div>
                                                                                                                                {/* <!-- End Col --> */}

                                                                                                                                <div class="col-auto col-sm-3 col-sm py-3">
                                                                                                                                    <img class="avatar avatar-xl avatar-4x3" src="assets/svg/brands/gulp-gray.svg" alt="Logo" />
                                                                                                                                </div>
                                                                                                                                {/* <!-- End Col --> */}

                                                                                                                                <div class="col-auto col-sm-3 col-sm py-3">
                                                                                                                                    <img class="avatar avatar-xl avatar-4x3" src="assets/svg/brands/npm-gray.svg" alt="Logo" />
                                                                                                                                </div>
                                                                                                                                {/* <!-- End Col --> */}
                                                                                                                            </div>
                                                                                                                            {/* <!-- End Row --> */}
                                                                                                                        </div>

                                                                                                                        <div class="d-grid mx-auto" style="max-width: 15rem;">
                                                                                                                            <a class="btn btn-primary btn-lg" href="documentation/gulp.html">Learn more</a>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                    {/* <!-- End Tools --> */}

                                                                                                                    {/* <!-- Testimonials --> */}
                                                                                                                    <div class="container-lg">
                                                                                                                        <div class="bg-light content-space-2 rounded-3 px-5">
                                                                                                                            <div class="w-md-70 text-center mx-md-auto">
                                                                                                                                <div class="mb-4">
                                                                                                                                    <img class="img-fluid mx-auto" src="assets/svg/illustrations/oc-review.svg" alt="Image Description" data-hs-theme-appearance="default" style="max-width: 10rem;" />
                                                                                                                                        <img class="img-fluid mx-auto" src="assets/svg/illustrations-light/oc-review.svg" alt="Image Description" data-hs-theme-appearance="dark" style="max-width: 10rem;" />
                                                                                                                                        </div>

                                                                                                                                        <p class="fs-2 text-dark mb-4"><em>This theme is really great, as back end developer <span class="text-highlight-warning">I was able to build an impressive front end using this theme in plain JavaScript vanilla. The source code is clear and the documentation as well, for me it's the best purchase I made with this team and I am watching evolution.</span> Thank you so much for such quality and price. Keep going!</em></p>

                                                                                                                                        <h3 class="mb-0">David</h3>
                                                                                                                                        <p class="fs-4 mb-0">Happy customer</p>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                        {/* <!-- End Testimonials --> */}

                                                                                                                        {/* <!-- Pricing --> */}
                                                                                                                        <div class="overflow-hidden">
                                                                                                                            <div class="container-lg content-space-t-2 content-space-t-lg-3">
                                                                                                                                {/* <!-- Heading --> */}
                                                                                                                                <div class="w-lg-75 text-center mx-lg-auto mb-7 mb-md-10">
                                                                                                                                    <h2 class="display-4">Pricing</h2>
                                                                                                                                    <p class="lead">Whatever your status, our offers evolve according to your needs.</p>
                                                                                                                                </div>
                                                                                                                                {/* <!-- End Heading --> */}

                                                                                                                                <div class="w-md-75 mx-md-auto">
                                                                                                                                    <div class="position-relative">
                                                                                                                                        <div class="bg-dark rounded-2 p-5">
                                                                                                                                            <div class="row align-items-sm-center">
                                                                                                                                                <div class="col">
                                                                                                                                                    <h3 class="text-white mb-1">Single</h3>
                                                                                                                                                    <span class="d-block text-white-70">Single site</span>
                                                                                                                                                </div>
                                                                                                                                                {/* <!-- End Col --> */}

                                                                                                                                                <div class="col-sm-7 col-md-5">
                                                                                                                                                    <p class="text-white-70 mb-0">Ideal for corporate, portfolio, blog, shop and many more.</p>
                                                                                                                                                </div>
                                                                                                                                                {/* <!-- End Col --> */}

                                                                                                                                                <div class="col-12 col-md col-lg-4 text-lg-end mt-3 mt-lg-0">
                                                                                                                                                    <div class="d-grid">
                                                                                                                                                        <a class="btn btn-primary" href="https://themes.getbootstrap.com/product/front-admin-dashboard-template/" target="_blank">Buy for $49</a>
                                                                                                                                                    </div>
                                                                                                                                                </div>
                                                                                                                                                {/* <!-- End Col --> */}
                                                                                                                                            </div>
                                                                                                                                            {/* <!-- End Row --> */}

                                                                                                                                            <hr class="bg-soft-light opacity-50" />

                                                                                                                                                <div class="row align-items-sm-center">
                                                                                                                                                    <div class="col">
                                                                                                                                                        <h3 class="text-white mb-1">Multisite</h3>
                                                                                                                                                        <span class="d-block text-white-70">Unlimited sites</span>
                                                                                                                                                    </div>
                                                                                                                                                    {/* <!-- End Col --> */}

                                                                                                                                                    <div class="col-sm-7 col-md-5">
                                                                                                                                                        <p class="text-white-70 mb-0">All the same examples as the Standard License, but you could build all of them with a single Multisite license.</p>
                                                                                                                                                    </div>
                                                                                                                                                    {/* <!-- End Col --> */}

                                                                                                                                                    <div class="col-12 col-md col-lg-4 text-lg-end mt-3 mt-lg-0">
                                                                                                                                                        <div class="d-grid">
                                                                                                                                                            <a class="btn btn-primary" href="https://themes.getbootstrap.com/product/front-admin-dashboard-template/" target="_blank">Buy for $149</a>
                                                                                                                                                        </div>
                                                                                                                                                    </div>
                                                                                                                                                    {/* <!-- End Col --> */}
                                                                                                                                                </div>
                                                                                                                                                {/* <!-- End Row --> */}

                                                                                                                                                <hr class="bg-soft-light opacity-50" />

                                                                                                                                                    <div class="row align-items-sm-center">
                                                                                                                                                        <div class="col">
                                                                                                                                                            <h3 class="text-white mb-1">Extended</h3>
                                                                                                                                                            <span class="d-block text-white-70">For paying users</span>
                                                                                                                                                        </div>
                                                                                                                                                        {/* <!-- End Col --> */}

                                                                                                                                                        <div class="col-sm-7 col-md-5">
                                                                                                                                                            <p class="text-white-70 mb-0">Best suited for "paid subscribers" and SaaS analytics applications.</p>
                                                                                                                                                        </div>
                                                                                                                                                        {/* <!-- End Col --> */}

                                                                                                                                                        <div class="col-12 col-md col-lg-4 text-lg-end mt-3 mt-lg-0">
                                                                                                                                                            <div class="d-grid">
                                                                                                                                                                <a class="btn btn-primary" href="https://themes.getbootstrap.com/product/front-admin-dashboard-template/" target="_blank">Buy for $599</a>
                                                                                                                                                            </div>
                                                                                                                                                        </div>
                                                                                                                                                        {/* <!-- End Col --> */}
                                                                                                                                                    </div>
                                                                                                                                                    {/* <!-- End Row --> */}
                                                                                                                                                </div>

                                                                                                                                                <div class="d-none d-md-block position-absolute bottom-0 start-0">
                                                                                                                                                    <img class="img-fluid" src="assets/svg/illustrations/oc-peeking.svg" alt="Image Description" data-hs-theme-appearance="default" style="max-width: 8rem; margin-left: -7.8125rem;" />
                                                                                                                                                        <img class="img-fluid" src="assets/svg/illustrations-light/oc-peeking.svg" alt="Image Description" data-hs-theme-appearance="dark" style="max-width: 8rem; margin-left: -7.8125rem;" />
                                                                                                                                                        </div>

                                                                                                                                                        <div class="d-none d-md-block position-absolute top-50 end-0 translate-middle-y">
                                                                                                                                                            <img class="img-fluid" src="assets/svg/illustrations/oc-on-the-go.svg" alt="Image Description" data-hs-theme-appearance="default" style="max-width: 15rem; margin-right: -15rem;" />
                                                                                                                                                                <img class="img-fluid" src="assets/svg/illustrations-light/oc-on-the-go.svg" alt="Image Description" data-hs-theme-appearance="dark" style="max-width: 15rem; margin-right: -15rem;" />
                                                                                                                                                                </div>
                                                                                                                                                        </div>
                                                                                                                                                </div>
                                                                                                                                        </div>
                                                                                                                                    </div>
                                                                                                                                    {/* <!-- End Pricing --> */}

                                                                                                                                    {/* <!-- FAQ --> */}
                                                                                                                                    <div class="container-lg content-space-t-2 content-space-t-lg-3">
                                                                                                                                        {/* <!-- Heading --> */}
                                                                                                                                        <div class="w-lg-75 text-center mx-lg-auto mb-7 mb-md-10">
                                                                                                                                            <h2 class="display-4">Frequently Asked <span class="text-primary">Questions</span></h2>
                                                                                                                                        </div>
                                                                                                                                        {/* <!-- End Heading --> */}

                                                                                                                                        <div class="w-md-75 mx-md-auto">
                                                                                                                                            {/* <!-- List --> */}
                                                                                                                                            <ul class="list-unstyled list-py-3 mb-0">
                                                                                                                                                <li>
                                                                                                                                                    <h2 class="h1">How can I get a refund?</h2>
                                                                                                                                                    <p class="fs-4">If you'd like a refund please reach out to us at <a class="link" href="mailto:themes@getbootstrap.com">themes@getbootstrap.com</a>. If you need technical help with the theme before a refund please reach out to us first.</p>
                                                                                                                                                </li>

                                                                                                                                                <li>
                                                                                                                                                    <h2 class="h1">How do I get access to a theme I purchased?</h2>
                                                                                                                                                    <p class="fs-4">If you lose the link for a theme you purchased, don't panic! We've got you covered. You can login to your account, tap your avatar in the upper right corner, and tap Purchases. If you didn't create a <a class="link" href="https://marketplace.getbootstrap.com/signin/" target="_blank">login</a> or can't remember the information, you can use our handy <a class="link" href="https://themes.getbootstrap.com/redownload/" target="_blank">Redownload page</a>, just remember to use the same email you originally made your purchases with.</p>
                                                                                                                                                </li>

                                                                                                                                                <li>
                                                                                                                                                    <h2 class="h1">How do I get help with the theme I purchased?</h2>
                                                                                                                                                    <p class="fs-4">Technical support for each theme is given directly by the creator of the theme. You can contact us <a class="link" href="https://htmlstream.com/contact-us" target="_blank">here</a></p>
                                                                                                                                                </li>

                                                                                                                                                <li>
                                                                                                                                                    <h2 class="h1">Is Front Admin available on other web application platforms?</h2>
                                                                                                                                                    <p class="fs-4">Since the theme is a static HTML template, we do not offer any tutorials or any other materials on how to integrate our templates with any CMS, Web Application framework, or any other similar technology. However, since our templates are static HTML/CSS and JS templates, then they should be compatible with any backend technology.</p>
                                                                                                                                                </li>

                                                                                                                                                <li>
                                                                                                                                                    <h2 class="h1">How can I access a Figma or Sketch file?</h2>
                                                                                                                                                    <p class="fs-4">Unfortunately, the design files are not available. We will consider the possibility of adding this option in the near future. However, we cannot provide any ETA regarding the release.</p>
                                                                                                                                                </li>
                                                                                                                                            </ul>
                                                                                                                                            {/* <!-- End List --> */}

                                                                                                                                            <hr class="my-7" />

                                                                                                                                                <div class="text-center">
                                                                                                                                                    <h3>Haven't found an answer to your question?</h3>
                                                                                                                                                    <p><a class="link" href="https://htmlstream.com/contact-us" target="_blank">Send us a message</a> and we'll get back to you.</p>
                                                                                                                                                </div>
                                                                                                                                        </div>
                                                                                                                                    </div>
                                                                                                                                    {/* <!-- End FAQ --> */}
                                                                                                                                </main>
                                                                                                                                {/* <!-- ========== END MAIN CONTENT ========== --> */}
                                                                                                                            
                                                                                                                            <Head title="Welcome" />
                                                                                                                            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                                                                                                                                asdas
                                                                                                                                <img
                                                                                                                                    id="background"
                                                                                                                                    className="absolute -left-20 top-0 max-w-[877px]"
                                                                                                                                    src="https://laravel.com/assets/img/welcome/background.svg"
                                                                                                                                />
                                                                                                                                <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                                                                                                                                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                                                                                                                                        <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
                                                                                                                                            <div className="flex lg:col-start-2 lg:justify-center">


                                                                                                                                                <svg
                                                                                                                                                    className="h-12 w-auto text-white lg:h-16 lg:text-[#FF2D20]"
                                                                                                                                                    viewBox="0 0 62 65"
                                                                                                                                                    fill="none"
                                                                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                                                                >
                                                                                                                                                    <path
                                                                                                                                                        d="M61.8548 14.6253C61.8778 14.7102 61.8895 14.7978 61.8897 14.8858V28.5615C61.8898 28.737 61.8434 28.9095 61.7554 29.0614C61.6675 29.2132 61.5409 29.3392 61.3887 29.4265L49.9104 36.0351V49.1337C49.9104 49.4902 49.7209 49.8192 49.4118 49.9987L25.4519 63.7916C25.3971 63.8227 25.3372 63.8427 25.2774 63.8639C25.255 63.8714 25.2338 63.8851 25.2101 63.8913C25.0426 63.9354 24.8666 63.9354 24.6991 63.8913C24.6716 63.8838 24.6467 63.8689 24.6205 63.8589C24.5657 63.8389 24.5084 63.8215 24.456 63.7916L0.501061 49.9987C0.348882 49.9113 0.222437 49.7853 0.134469 49.6334C0.0465019 49.4816 0.000120578 49.3092 0 49.1337L0 8.10652C0 8.01678 0.0124642 7.92953 0.0348998 7.84477C0.0423783 7.8161 0.0598282 7.78993 0.0697995 7.76126C0.0884958 7.70891 0.105946 7.65531 0.133367 7.6067C0.152063 7.5743 0.179485 7.54812 0.20192 7.51821C0.230588 7.47832 0.256763 7.43719 0.290416 7.40229C0.319084 7.37362 0.356476 7.35243 0.388883 7.32751C0.425029 7.29759 0.457436 7.26518 0.498568 7.2415L12.4779 0.345059C12.6296 0.257786 12.8015 0.211853 12.9765 0.211853C13.1515 0.211853 13.3234 0.257786 13.475 0.345059L25.4531 7.2415H25.4556C25.4955 7.26643 25.5292 7.29759 25.5653 7.32626C25.5977 7.35119 25.6339 7.37362 25.6625 7.40104C25.6974 7.43719 25.7224 7.47832 25.7523 7.51821C25.7735 7.54812 25.8021 7.5743 25.8196 7.6067C25.8483 7.65656 25.8645 7.70891 25.8844 7.76126C25.8944 7.78993 25.9118 7.8161 25.9193 7.84602C25.9423 7.93096 25.954 8.01853 25.9542 8.10652V33.7317L35.9355 27.9844V14.8846C35.9355 14.7973 35.948 14.7088 35.9704 14.6253C35.9792 14.5954 35.9954 14.5692 36.0053 14.5405C36.0253 14.4882 36.0427 14.4346 36.0702 14.386C36.0888 14.3536 36.1163 14.3274 36.1375 14.2975C36.1674 14.2576 36.1923 14.2165 36.2272 14.1816C36.2559 14.1529 36.292 14.1317 36.3244 14.1068C36.3618 14.0769 36.3942 14.0445 36.4341 14.0208L48.4147 7.12434C48.5663 7.03694 48.7383 6.99094 48.9133 6.99094C49.0883 6.99094 49.2602 7.03694 49.4118 7.12434L61.3899 14.0208C61.4323 14.0457 61.4647 14.0769 61.5021 14.1055C61.5333 14.1305 61.5694 14.1529 61.5981 14.1803C61.633 14.2165 61.6579 14.2576 61.6878 14.2975C61.7103 14.3274 61.7377 14.3536 61.7551 14.386C61.7838 14.4346 61.8 14.4882 61.8199 14.5405C61.8312 14.5692 61.8474 14.5954 61.8548 14.6253ZM59.893 27.9844V16.6121L55.7013 19.0252L49.9104 22.3593V33.7317L59.8942 27.9844H59.893ZM47.9149 48.5566V37.1768L42.2187 40.4299L25.953 49.7133V61.2003L47.9149 48.5566ZM1.99677 9.83281V48.5566L23.9562 61.199V49.7145L12.4841 43.2219L12.4804 43.2194L12.4754 43.2169C12.4368 43.1945 12.4044 43.1621 12.3682 43.1347C12.3371 43.1097 12.3009 43.0898 12.2735 43.0624L12.271 43.0586C12.2386 43.0275 12.2162 42.9888 12.1887 42.9539C12.1638 42.9203 12.1339 42.8916 12.114 42.8567L12.1127 42.853C12.0903 42.8156 12.0766 42.7707 12.0604 42.7283C12.0442 42.6909 12.023 42.656 12.013 42.6161C12.0005 42.5688 11.998 42.5177 11.9931 42.4691C11.9881 42.4317 11.9781 42.3943 11.9781 42.3569V15.5801L6.18848 12.2446L1.99677 9.83281ZM12.9777 2.36177L2.99764 8.10652L12.9752 13.8513L22.9541 8.10527L12.9752 2.36177H12.9777ZM18.1678 38.2138L23.9574 34.8809V9.83281L19.7657 12.2459L13.9749 15.5801V40.6281L18.1678 38.2138ZM48.9133 9.14105L38.9344 14.8858L48.9133 20.6305L58.8909 14.8846L48.9133 9.14105ZM47.9149 22.3593L42.124 19.0252L37.9323 16.6121V27.9844L43.7219 31.3174L47.9149 33.7317V22.3593ZM24.9533 47.987L39.59 39.631L46.9065 35.4555L36.9352 29.7145L25.4544 36.3242L14.9907 42.3482L24.9533 47.987Z"
                                                                                                                                                        fill="currentColor"
                                                                                                                                                    />
                                                                                                                                                </svg>
                                                                                                                                            </div>
                                                                                                                                            <nav className="-mx-3 flex flex-1 justify-end">
                                                                                                                                                {auth.user ? (
                                                                                                                                                    <Link
                                                                                                                                                        href={route('admin.dashboard')}
                                                                                                                                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                                                                                                                                    >
                                                                                                                                                        Dashboard
                                                                                                                                                    </Link>
                                                                                                                                                ) : (
                                                                                                                                                    <>
                                                                                                                                                        <Link
                                                                                                                                                            href={route('login')}
                                                                                                                                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                                                                                                                                        >
                                                                                                                                                            Log in
                                                                                                                                                        </Link>
                                                                                                                                                        <Link
                                                                                                                                                            href={route('register')}
                                                                                                                                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                                                                                                                                        >
                                                                                                                                                            Register
                                                                                                                                                        </Link>
                                                                                                                                                    </>
                                                                                                                                                )}
                                                                                                                                            </nav>
                                                                                                                                        </header>

                                                                                                                                        <main className="mt-6">
                                                                                                                                            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                                                                                                                                                <a
                                                                                                                                                    href="https://laravel.com/docs"
                                                                                                                                                    id="docs-card"
                                                                                                                                                    className="flex flex-col items-start gap-6 overflow-hidden rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] md:row-span-3 lg:p-10 lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                                                                                                                                                >
                                                                                                                                                    <div
                                                                                                                                                        id="screenshot-container"
                                                                                                                                                        className="relative flex w-full flex-1 items-stretch"
                                                                                                                                                    >
                                                                                                                                                        <img
                                                                                                                                                            src="https://laravel.com/assets/img/welcome/docs-light.svg"
                                                                                                                                                            alt="Laravel documentation screenshot"
                                                                                                                                                            className="aspect-video h-full w-full flex-1 rounded-[10px] object-cover object-top drop-shadow-[0px_4px_34px_rgba(0,0,0,0.06)] dark:hidden"
                                                                                                                                                            onError={handleImageError}
                                                                                                                                                        />
                                                                                                                                                        <img
                                                                                                                                                            src="https://laravel.com/assets/img/welcome/docs-dark.svg"
                                                                                                                                                            alt="Laravel documentation screenshot"
                                                                                                                                                            className="hidden aspect-video h-full w-full flex-1 rounded-[10px] object-cover object-top drop-shadow-[0px_4px_34px_rgba(0,0,0,0.25)] dark:block"
                                                                                                                                                        />
                                                                                                                                                        <div className="absolute -bottom-16 -left-16 h-40 w-[calc(100%+8rem)] bg-gradient-to-b from-transparent via-white to-white dark:via-zinc-900 dark:to-zinc-900"></div>
                                                                                                                                                    </div>

                                                                                                                                                    <div className="relative flex items-center gap-6 lg:items-end">
                                                                                                                                                        <div
                                                                                                                                                            id="docs-card-content"
                                                                                                                                                            className="flex items-start gap-6 lg:flex-col"
                                                                                                                                                        >
                                                                                                                                                            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                                                                                                                                                                <svg
                                                                                                                                                                    className="size-5 sm:size-6"
                                                                                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                                                                                    fill="none"
                                                                                                                                                                    viewBox="0 0 24 24"
                                                                                                                                                                >
                                                                                                                                                                    <path
                                                                                                                                                                        fill="#FF2D20"
                                                                                                                                                                        d="M23 4a1 1 0 0 0-1.447-.894L12.224 7.77a.5.5 0 0 1-.448 0L2.447 3.106A1 1 0 0 0 1 4v13.382a1.99 1.99 0 0 0 1.105 1.79l9.448 4.728c.14.065.293.1.447.1.154-.005.306-.04.447-.105l9.453-4.724a1.99 1.99 0 0 0 1.1-1.789V4ZM3 6.023a.25.25 0 0 1 .362-.223l7.5 3.75a.251.251 0 0 1 .138.223v11.2a.25.25 0 0 1-.362.224l-7.5-3.75a.25.25 0 0 1-.138-.22V6.023Zm18 11.2a.25.25 0 0 1-.138.224l-7.5 3.75a.249.249 0 0 1-.329-.099.249.249 0 0 1-.033-.12V9.772a.251.251 0 0 1 .138-.224l7.5-3.75a.25.25 0 0 1 .362.224v11.2Z"
                                                                                                                                                                    />
                                                                                                                                                                    <path
                                                                                                                                                                        fill="#FF2D20"
                                                                                                                                                                        d="m3.55 1.893 8 4.048a1.008 1.008 0 0 0 .9 0l8-4.048a1 1 0 0 0-.9-1.785l-7.322 3.706a.506.506 0 0 1-.452 0L4.454.108a1 1 0 0 0-.9 1.785H3.55Z"
                                                                                                                                                                    />
                                                                                                                                                                </svg>
                                                                                                                                                            </div>

                                                                                                                                                            <div className="pt-3 sm:pt-5 lg:pt-0">
                                                                                                                                                                <h2 className="text-xl font-semibold text-black dark:text-white">
                                                                                                                                                                    Documentation
                                                                                                                                                                </h2>

                                                                                                                                                                <p className="mt-4 text-sm/relaxed">
                                                                                                                                                                    Laravel has wonderful
                                                                                                                                                                    documentation covering every
                                                                                                                                                                    aspect of the framework.
                                                                                                                                                                    Whether you are a newcomer
                                                                                                                                                                    or have prior experience
                                                                                                                                                                    with Laravel, we recommend
                                                                                                                                                                    reading our documentation
                                                                                                                                                                    from beginning to end.
                                                                                                                                                                </p>
                                                                                                                                                            </div>
                                                                                                                                                        </div>

                                                                                                                                                        <svg
                                                                                                                                                            className="size-6 shrink-0 stroke-[#FF2D20]"
                                                                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                                                                            fill="none"
                                                                                                                                                            viewBox="0 0 24 24"
                                                                                                                                                            strokeWidth="1.5"
                                                                                                                                                        >
                                                                                                                                                            <path
                                                                                                                                                                strokeLinecap="round"
                                                                                                                                                                strokeLinejoin="round"
                                                                                                                                                                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                                                                                                                                                            />
                                                                                                                                                        </svg>
                                                                                                                                                    </div>
                                                                                                                                                </a>

                                                                                                                                                <a
                                                                                                                                                    href="https://laracasts.com"
                                                                                                                                                    className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                                                                                                                                                >
                                                                                                                                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                                                                                                                                                        <svg
                                                                                                                                                            className="size-5 sm:size-6"
                                                                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                                                                            fill="none"
                                                                                                                                                            viewBox="0 0 24 24"
                                                                                                                                                        >
                                                                                                                                                            <g fill="#FF2D20">
                                                                                                                                                                <path d="M24 8.25a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0-.5.5v12a2.5 2.5 0 0 0 2.5 2.5h19a2.5 2.5 0 0 0 2.5-2.5v-12Zm-7.765 5.868a1.221 1.221 0 0 1 0 2.264l-6.626 2.776A1.153 1.153 0 0 1 8 18.123v-5.746a1.151 1.151 0 0 1 1.609-1.035l6.626 2.776ZM19.564 1.677a.25.25 0 0 0-.177-.427H15.6a.106.106 0 0 0-.072.03l-4.54 4.543a.25.25 0 0 0 .177.427h3.783c.027 0 .054-.01.073-.03l4.543-4.543ZM22.071 1.318a.047.047 0 0 0-.045.013l-4.492 4.492a.249.249 0 0 0 .038.385.25.25 0 0 0 .14.042h5.784a.5.5 0 0 0 .5-.5v-2a2.5 2.5 0 0 0-1.925-2.432ZM13.014 1.677a.25.25 0 0 0-.178-.427H9.101a.106.106 0 0 0-.073.03l-4.54 4.543a.25.25 0 0 0 .177.427H8.4a.106.106 0 0 0 .073-.03l4.54-4.543ZM6.513 1.677a.25.25 0 0 0-.177-.427H2.5A2.5 2.5 0 0 0 0 3.75v2a.5.5 0 0 0 .5.5h1.4a.106.106 0 0 0 .073-.03l4.54-4.543Z" />
                                                                                                                                                            </g>
                                                                                                                                                        </svg>
                                                                                                                                                    </div>

                                                                                                                                                    <div className="pt-3 sm:pt-5">
                                                                                                                                                        <h2 className="text-xl font-semibold text-black dark:text-white">
                                                                                                                                                            Laracasts
                                                                                                                                                        </h2>

                                                                                                                                                        <p className="mt-4 text-sm/relaxed">
                                                                                                                                                            Laracasts offers thousands of video
                                                                                                                                                            tutorials on Laravel, PHP, and
                                                                                                                                                            JavaScript development. Check them
                                                                                                                                                            out, see for yourself, and massively
                                                                                                                                                            level up your development skills in
                                                                                                                                                            the process.
                                                                                                                                                        </p>
                                                                                                                                                    </div>

                                                                                                                                                    <svg
                                                                                                                                                        className="size-6 shrink-0 self-center stroke-[#FF2D20]"
                                                                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                                                                        fill="none"
                                                                                                                                                        viewBox="0 0 24 24"
                                                                                                                                                        strokeWidth="1.5"
                                                                                                                                                    >
                                                                                                                                                        <path
                                                                                                                                                            strokeLinecap="round"
                                                                                                                                                            strokeLinejoin="round"
                                                                                                                                                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                                                                                                                                                        />
                                                                                                                                                    </svg>
                                                                                                                                                </a>

                                                                                                                                                <a
                                                                                                                                                    href="https://laravel-news.com"
                                                                                                                                                    className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                                                                                                                                                >
                                                                                                                                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                                                                                                                                                        <svg
                                                                                                                                                            className="size-5 sm:size-6"
                                                                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                                                                            fill="none"
                                                                                                                                                            viewBox="0 0 24 24"
                                                                                                                                                        >
                                                                                                                                                            <g fill="#FF2D20">
                                                                                                                                                                <path d="M8.75 4.5H5.5c-.69 0-1.25.56-1.25 1.25v4.75c0 .69.56 1.25 1.25 1.25h3.25c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25Z" />
                                                                                                                                                                <path d="M24 10a3 3 0 0 0-3-3h-2V2.5a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2V20a3.5 3.5 0 0 0 3.5 3.5h17A3.5 3.5 0 0 0 24 20V10ZM3.5 21.5A1.5 1.5 0 0 1 2 20V3a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 .5.5v17c0 .295.037.588.11.874a.5.5 0 0 1-.484.625L3.5 21.5ZM22 20a1.5 1.5 0 1 1-3 0V9.5a.5.5 0 0 1 .5-.5H21a1 1 0 0 1 1 1v10Z" />
                                                                                                                                                                <path d="M12.751 6.047h2a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-2A.75.75 0 0 1 12 7.3v-.5a.75.75 0 0 1 .751-.753ZM12.751 10.047h2a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-2A.75.75 0 0 1 12 11.3v-.5a.75.75 0 0 1 .751-.753ZM4.751 14.047h10a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-10A.75.75 0 0 1 4 15.3v-.5a.75.75 0 0 1 .751-.753ZM4.75 18.047h7.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-7.5A.75.75 0 0 1 4 19.3v-.5a.75.75 0 0 1 .75-.753Z" />
                                                                                                                                                            </g>
                                                                                                                                                        </svg>
                                                                                                                                                    </div>

                                                                                                                                                    <div className="pt-3 sm:pt-5">
                                                                                                                                                        <h2 className="text-xl font-semibold text-black dark:text-white">
                                                                                                                                                            Laravel News
                                                                                                                                                        </h2>

                                                                                                                                                        <p className="mt-4 text-sm/relaxed">
                                                                                                                                                            Laravel News is a community driven
                                                                                                                                                            portal and newsletter aggregating
                                                                                                                                                            all of the latest and most important
                                                                                                                                                            news in the Laravel ecosystem,
                                                                                                                                                            including new package releases and
                                                                                                                                                            tutorials.
                                                                                                                                                        </p>
                                                                                                                                                    </div>

                                                                                                                                                    <svg
                                                                                                                                                        className="size-6 shrink-0 self-center stroke-[#FF2D20]"
                                                                                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                                                                                        fill="none"
                                                                                                                                                        viewBox="0 0 24 24"
                                                                                                                                                        strokeWidth="1.5"
                                                                                                                                                    >
                                                                                                                                                        <path
                                                                                                                                                            strokeLinecap="round"
                                                                                                                                                            strokeLinejoin="round"
                                                                                                                                                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                                                                                                                                                        />
                                                                                                                                                    </svg>
                                                                                                                                                </a>

                                                                                                                                                <div className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800">
                                                                                                                                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                                                                                                                                                        <svg
                                                                                                                                                            className="size-5 sm:size-6"
                                                                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                                                                            fill="none"
                                                                                                                                                            viewBox="0 0 24 24"
                                                                                                                                                        >
                                                                                                                                                            <g fill="#FF2D20">
                                                                                                                                                                <path d="M16.597 12.635a.247.247 0 0 0-.08-.237 2.234 2.234 0 0 1-.769-1.68c.001-.195.03-.39.084-.578a.25.25 0 0 0-.09-.267 8.8 8.8 0 0 0-4.826-1.66.25.25 0 0 0-.268.181 2.5 2.5 0 0 1-2.4 1.824.045.045 0 0 0-.045.037 12.255 12.255 0 0 0-.093 3.86.251.251 0 0 0 .208.214c2.22.366 4.367 1.08 6.362 2.118a.252.252 0 0 0 .32-.079 10.09 10.09 0 0 0 1.597-3.733ZM13.616 17.968a.25.25 0 0 0-.063-.407A19.697 19.697 0 0 0 8.91 15.98a.25.25 0 0 0-.287.325c.151.455.334.898.548 1.328.437.827.981 1.594 1.619 2.28a.249.249 0 0 0 .32.044 29.13 29.13 0 0 0 2.506-1.99ZM6.303 14.105a.25.25 0 0 0 .265-.274 13.048 13.048 0 0 1 .205-4.045.062.062 0 0 0-.022-.07 2.5 2.5 0 0 1-.777-.982.25.25 0 0 0-.271-.149 11 11 0 0 0-5.6 2.815.255.255 0 0 0-.075.163c-.008.135-.02.27-.02.406.002.8.084 1.598.246 2.381a.25.25 0 0 0 .303.193 19.924 19.924 0 0 1 5.746-.438ZM9.228 20.914a.25.25 0 0 0 .1-.393 11.53 11.53 0 0 1-1.5-2.22 12.238 12.238 0 0 1-.91-2.465.248.248 0 0 0-.22-.187 18.876 18.876 0 0 0-5.69.33.249.249 0 0 0-.179.336c.838 2.142 2.272 4 4.132 5.353a.254.254 0 0 0 .15.048c1.41-.01 2.807-.282 4.117-.802ZM18.93 12.957l-.005-.008a.25.25 0 0 0-.268-.082 2.21 2.21 0 0 1-.41.081.25.25 0 0 0-.217.2c-.582 2.66-2.127 5.35-5.75 7.843a.248.248 0 0 0-.09.299.25.25 0 0 0 .065.091 28.703 28.703 0 0 0 2.662 2.12.246.246 0 0 0 .209.037c2.579-.701 4.85-2.242 6.456-4.378a.25.25 0 0 0 .048-.189 13.51 13.51 0 0 0-2.7-6.014ZM5.702 7.058a.254.254 0 0 0 .2-.165A2.488 2.488 0 0 1 7.98 5.245a.093.093 0 0 0 .078-.062 19.734 19.734 0 0 1 3.055-4.74.25.25 0 0 0-.21-.41 12.009 12.009 0 0 0-10.4 8.558.25.25 0 0 0 .373.281 12.912 12.912 0 0 1 4.826-1.814ZM10.773 22.052a.25.25 0 0 0-.28-.046c-.758.356-1.55.635-2.365.833a.25.25 0 0 0-.022.48c1.252.43 2.568.65 3.893.65.1 0 .2 0 .3-.008a.25.25 0 0 0 .147-.444c-.526-.424-1.1-.917-1.673-1.465ZM18.744 8.436a.249.249 0 0 0 .15.228 2.246 2.246 0 0 1 1.352 2.054c0 .337-.08.67-.23.972a.25.25 0 0 0 .042.28l.007.009a15.016 15.016 0 0 1 2.52 4.6.25.25 0 0 0 .37.132.25.25 0 0 0 .096-.114c.623-1.464.944-3.039.945-4.63a12.005 12.005 0 0 0-5.78-10.258.25.25 0 0 0-.373.274c.547 2.109.85 4.274.901 6.453ZM9.61 5.38a.25.25 0 0 0 .08.31c.34.24.616.561.8.935a.25.25 0 0 0 .3.127.631.631 0 0 1 .206-.034c2.054.078 4.036.772 5.69 1.991a.251.251 0 0 0 .267.024c.046-.024.093-.047.141-.067a.25.25 0 0 0 .151-.23A29.98 29.98 0 0 0 15.957.764a.25.25 0 0 0-.16-.164 11.924 11.924 0 0 0-2.21-.518.252.252 0 0 0-.215.076A22.456 22.456 0 0 0 9.61 5.38Z" />
                                                                                                                                                            </g>
                                                                                                                                                        </svg>
                                                                                                                                                    </div>

                                                                                                                                                    <div className="pt-3 sm:pt-5">
                                                                                                                                                        <h2 className="text-xl font-semibold text-black dark:text-white">
                                                                                                                                                            Vibrant Ecosystem
                                                                                                                                                        </h2>

                                                                                                                                                        <p className="mt-4 text-sm/relaxed">
                                                                                                                                                            Laravel's robust library of
                                                                                                                                                            first-party tools and libraries,
                                                                                                                                                            such as{' '}
                                                                                                                                                            <a
                                                                                                                                                                href="https://forge.laravel.com"
                                                                                                                                                                className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white dark:focus-visible:ring-[#FF2D20]"
                                                                                                                                                            >
                                                                                                                                                                Forge
                                                                                                                                                            </a>
                                                                                                                                                            ,{' '}
                                                                                                                                                            <a
                                                                                                                                                                href="https://vapor.laravel.com"
                                                                                                                                                                className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white"
                                                                                                                                                            >
                                                                                                                                                                Vapor
                                                                                                                                                            </a>
                                                                                                                                                            ,{' '}
                                                                                                                                                            <a
                                                                                                                                                                href="https://nova.laravel.com"
                                                                                                                                                                className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white"
                                                                                                                                                            >
                                                                                                                                                                Nova
                                                                                                                                                            </a>
                                                                                                                                                            ,{' '}
                                                                                                                                                            <a
                                                                                                                                                                href="https://envoyer.io"
                                                                                                                                                                className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white"
                                                                                                                                                            >
                                                                                                                                                                Envoyer
                                                                                                                                                            </a>
                                                                                                                                                            , and{' '}
                                                                                                                                                            <a
                                                                                                                                                                href="https://herd.laravel.com"
                                                                                                                                                                className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white"
                                                                                                                                                            >
                                                                                                                                                                Herd
                                                                                                                                                            </a>{' '}
                                                                                                                                                            help you take your projects to the
                                                                                                                                                            next level. Pair them with powerful
                                                                                                                                                            open source libraries like{' '}
                                                                                                                                                            <a
                                                                                                                                                                href="https://laravel.com/docs/billing"
                                                                                                                                                                className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white"
                                                                                                                                                            >
                                                                                                                                                                Cashier
                                                                                                                                                            </a>
                                                                                                                                                            ,{' '}
                                                                                                                                                            <a
                                                                                                                                                                href="https://laravel.com/docs/dusk"
                                                                                                                                                                className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white"
                                                                                                                                                            >
                                                                                                                                                                Dusk
                                                                                                                                                            </a>
                                                                                                                                                            ,{' '}
                                                                                                                                                            <a
                                                                                                                                                                href="https://laravel.com/docs/broadcasting"
                                                                                                                                                                className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white"
                                                                                                                                                            >
                                                                                                                                                                Echo
                                                                                                                                                            </a>
                                                                                                                                                            ,{' '}
                                                                                                                                                            <a
                                                                                                                                                                href="https://laravel.com/docs/horizon"
                                                                                                                                                                className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white"
                                                                                                                                                            >
                                                                                                                                                                Horizon
                                                                                                                                                            </a>
                                                                                                                                                            ,{' '}
                                                                                                                                                            <a
                                                                                                                                                                href="https://laravel.com/docs/sanctum"
                                                                                                                                                                className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white"
                                                                                                                                                            >
                                                                                                                                                                Sanctum
                                                                                                                                                            </a>
                                                                                                                                                            ,{' '}
                                                                                                                                                            <a
                                                                                                                                                                href="https://laravel.com/docs/telescope"
                                                                                                                                                                className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white"
                                                                                                                                                            >
                                                                                                                                                                Telescope
                                                                                                                                                            </a>
                                                                                                                                                            , and more.
                                                                                                                                                        </p>
                                                                                                                                                    </div>
                                                                                                                                                </div>
                                                                                                                                            </div>
                                                                                                                                        </main>

                                                                                                                                        <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                                                                                                                                            Laravel v{laravelVersion} (PHP v{phpVersion})
                                                                                                                                        </footer>
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </div>
                                                                                                                        </>
                                                                                                                        );
}
