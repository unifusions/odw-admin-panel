import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, useForm, usePage } from '@inertiajs/react';
import { useEffect, useState, useRef } from 'react';

import 'bootstrap-icons/font/bootstrap-icons.css';
import Sidebar from '@/Components/Sidebar';
import Notifications from '@/Components/Notifications';

import { ToastContainer, toast } from 'react-toastify';
import GlobalSearchBar from '@/Components/GlobalSearch';
import GlobalSearchs from '@/Components/GlobalSearch';
import GlobalSearch from '@/Components/GlobalSearch';
import useInertiaLoading from '@/Helpers/useInertiaLoading';
import LoadingDots from '@/Components/LoadingDots';

export default function AuthenticatedLayout({ header, children }) {
    const loading = useInertiaLoading();
    const user = usePage().props.auth.user;
    const flash = usePage().props.flash;
    const { post } = useForm();
    const [darkChecked, toggleDarkChecked] = useState(false);

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    const handleLogout = (e) => {
        e.preventDefault();
        post(route('logout'));
    }

    useEffect(() => {

        if (flash.message) {
            toast.success(flash.message);
        }
    }, [flash.message]);
    useEffect(() => {

        if (flash.failed) {
            toast.error(flash.failed);
        }
    }, [flash.failed]);

    const toggleTheme = () => {
        const current = localStorage.getItem('theme') || 'light';
        const next = current === 'light' ? 'dark' : 'light';
        toggleDarkChecked;
        localStorage.setItem('theme', next);

        window.location.reload(); // Force reload to apply dynamic import
    };

    return (
        <>


            <div className="has-navbar-vertical-aside navbar-vertical-aside-show-xl   footer-offset">

                <header id="header" className="navbar navbar-expand-lg navbar-fixed navbar-height navbar-container navbar-bordered bg-white">
                    <div className="navbar-nav-wrap">
                        <Link className="navbar-brand" href="#" aria-label="Front">
                            <img className="navbar-brand-logo" src="/images/odw-brand.png" alt="Logo" height={20} />

                        </Link>

                        <div className="navbar-nav-wrap-content-start">
                            <button type="button" className="js-navbar-vertical-aside-toggle-invoker navbar-aside-toggler">
                                <i className="bi-arrow-bar-left navbar-toggler-short-align" data-bs-template='<div className="tooltip d-none d-md-block" role="tooltip"><div className="arrow"></div><div className="tooltip-inner"></div></div>' data-bs-toggle="tooltip" data-bs-placement="right" title="Collapse"></i>
                                <i className="bi-arrow-bar-right navbar-toggler-full-align" data-bs-template='<div className="tooltip d-none d-md-block" role="tooltip"><div className="arrow"></div><div className="tooltip-inner"></div></div>' data-bs-toggle="tooltip" data-bs-placement="right" title="Expand"></i>
                            </button>

                            {header && (<div
                                className='fs-2 fw-bold text-dark'>{header}</div>)
                            }
                            <GlobalSearch />
                            {/* <div className="dropdown ms-2">
                                <div className="d-none d-lg-block">
                                    <div className="input-group input-group-merge input-group-borderless input-group-hover-light navbar-input-group">
                                        <div className="input-group-prepend input-group-text">
                                            <i className="bi-search"></i>
                                        </div>

                                        <input type="search" className="js-form-search form-control" placeholder="Search " aria-label="Search " />
                                        <a className="input-group-append input-group-text" href="#!">
                                            <i id="clearSearchResultsIcon" className="bi-x-lg" style={{ display: 'none' }}></i>
                                        </a>
                                    </div>
                                </div>

                                <button className="js-form-search js-form-search-mobile-toggle btn btn-ghost-secondary btn-icon rounded-circle d-lg-none" type="button" >
                                    <i className="bi-search"></i>
                                </button>




                            </div> */}

                        </div>

                        <div className="navbar-nav-wrap-content-end">
                            <ul className="navbar-nav">

                                {/* <li>
                                    <div class="form-check form-switch form-switch-dark">
                                        <input class="form-check-input me-0" type="checkbox" id="darkSwitch" onChange={toggleTheme} checked={darkChecked && "checked"} />
                                    </div>
                                </li>
                                <li className="nav-item d-none d-sm-inline-block">
                                    <div className="dropdown">
                                        <button type="button" className="btn btn-ghost-secondary btn-icon rounded-circle" id="navbarNotificationsDropdown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside" data-bs-dropdown-animation>
                                            <i className="bi-bell"></i>
                                             
                                        </button>
                                        <Notifications />
                                    </div>

                                </li> */}



                                <li className="nav-item">

                                    <div className="dropdown">
                                        <a className="navbar-dropdown-account-wrapper" href="#!" id="accountNavbarDropdown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside" data-bs-dropdown-animation>
                                            <div className="avatar avatar-sm avatar-dark avatar-circle" >

                                                <span className="avatar-initials ">{user.name && Array.from(user.name)[0]}</span>



                                            </div>
                                        </a>

                                        <div className="dropdown-menu dropdown-menu-end navbar-dropdown-menu navbar-dropdown-menu-borderless navbar-dropdown-account"
                                            style={{ width: '16rem' }}>
                                            <div className="dropdown-item-text">
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar avatar-sm avatar-dark avatar-circle">
                                                        <span className="avatar-initials ">{Array.from(user.name)[0]}</span>
                                                        {/* <img className="avatar-img" src="assets/img/160x160/img6.jpg" alt="Image Description" /> */}
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h5 className="mb-0">{user.name}</h5>
                                                        <p className="card-text text-body">{user.email}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="dropdown-divider"></div>

                                            <a className="dropdown-item" href="#">Profile &amp; account</a>
                                            {/* <a className="dropdown-item" href="#">Settings</a> */}


                                            <div className="dropdown-divider"></div>

                                            <form onSubmit={handleLogout} >
                                                <button type="submit" className="dropdown-item">Logout</button>
                                            </form>

                                        </div>
                                    </div>

                                </li>
                            </ul>

                        </div>
                    </div>
                </header >





                <Sidebar />












                <main id="content" role="main" className="main">

                    <div className="content container-fluid">

                        {/* <div className="page-header"> */}
                        {/* <div className="row align-items-center"> */}
                        {/* <div className="col-sm mb-2 mb-sm-0">
                                    <h1 className="page-header-title">
                                        {header && (<>{header}</>)
                                        }</h1>
                                </div> */}


                        {/* <div className="col-sm-auto">
                               <a className="btn btn-primary" href="#" data-bs-toggle="modal" data-bs-target="#inviteUserModal">
                                   <i className="bi-person-plus-fill me-1"></i> Invite users
                               </a>
                           </div> */}

                        {/* </div> */}

                        {/* </div> */}
                        {/* <div className="align-self-center align-content-center"><LoadingDots /></div> */}
{loading ? <LoadingDots /> : children}

                        {/* {children} */}

                    </div>




                    <div className="footer">
                        <div className="row justify-content-between align-items-center">
                            <div className="col">
                                <p className="fs-6 mb-0">&copy; 2025. <span className="d-none d-sm-inline-block">OneDentalWorld.</span></p>
                            </div>


                            <div className="col-auto">
                                <div className="d-flex justify-content-end">

                                    <ul className="list-inline list-separator">
                                        <li className="list-inline-item">
                                            V 0.6.91 - Beta
                                           
                                        </li>

                                        {/* <li className="list-inline-item">
                                            <a className="list-separator-link" href="#">License</a>
                                        </li>

                                        <li className="list-inline-item">

                                            <button className="btn btn-ghost-secondary btn btn-icon btn-ghost-secondary rounded-circle" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasKeyboardShortcuts" aria-controls="offcanvasKeyboardShortcuts">
                                                <i className="bi-command"></i>
                                            </button>

                                        </li> */}
                                    </ul>

                                </div>
                            </div>

                        </div>

                    </div>



                </main>
                <ToastContainer />
            </div>

        </>

    );
}
