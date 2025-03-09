import { Head, Link } from '@inertiajs/react';
import WelcomeContent from './Welcome/WelcomeContent';

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
                        <a className="navbar-brand" href="index.html" aria-label="Front">
                            <img className="" src="/images/odw-logo-h.png" alt="Logo" data-hs-theme-appearance="default" height={70} width='auto' />
                            {/* <img className="navbar-brand-logo"src="/images/odw-logo-h.png" alt="Logo" data-hs-theme-appearance="dark" /> */}
                        </a>

                        <div className="navbar-nav-wrap-secondary-content">
                            <div className="dropdown">

                            </div>
                        </div>
                    </nav>
                </div>
            </header>


            <WelcomeContent />

            <div class="container">
                <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
                    <div class="col mb-3">
                        <img src="/images/odw-logo-h.png" alt="" height={75} className='mb-3' />
                        <p>Our offices are open all 7 days,
                            24 x 7 for emergencies available on call</p>
                        <p class="text-body-secondary">© 2025. OneDentalWorld.com - All Rights Reserved</p>
                    </div>

                    <div class="col mb-3">

                    </div>

                    <div class="col mb-3">

                    </div>

                    <div class="col mb-3">
                        <h5>For Partners</h5>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Partners & Affiliations</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Our Offices</a></li>
                        </ul>
                    </div>

                    <div class="col mb-3">
                        <h5>Company</h5>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About Us</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Services</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Contact</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Career</a></li>
                        </ul>
                    </div>
                </footer>
            </div>


        </>
    );
}
