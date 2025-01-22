import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, useForm, usePage } from '@inertiajs/react';
import { useState } from 'react';

import 'bootstrap-icons/font/bootstrap-icons.css';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;
    const {post} = useForm();

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    const handleLogout = (e) => {
        e.preventDefault();
        post(route('logout'));
    }
    return (
        <div className="has-navbar-vertical-aside navbar-vertical-aside-show-xl   footer-offset">

            <header id="header" className="navbar navbar-expand-lg navbar-fixed navbar-height navbar-container navbar-bordered bg-white">
                <div className="navbar-nav-wrap">
                    <Link className="navbar-brand" href="#" aria-label="Front">
                        <img className="navbar-brand-logo" src="images/odw-brand.png" alt="Logo" />

                    </Link>

                    <div className="navbar-nav-wrap-content-start">
                        <button type="button" className="js-navbar-vertical-aside-toggle-invoker navbar-aside-toggler">
                            <i className="bi-arrow-bar-left navbar-toggler-short-align" data-bs-template='<div className="tooltip d-none d-md-block" role="tooltip"><div className="arrow"></div><div className="tooltip-inner"></div></div>' data-bs-toggle="tooltip" data-bs-placement="right" title="Collapse"></i>
                            <i className="bi-arrow-bar-right navbar-toggler-full-align" data-bs-template='<div className="tooltip d-none d-md-block" role="tooltip"><div className="arrow"></div><div className="tooltip-inner"></div></div>' data-bs-toggle="tooltip" data-bs-placement="right" title="Expand"></i>
                        </button>


                        <div className="dropdown ms-2">
                            <div className="d-none d-lg-block">
                                <div className="input-group input-group-merge input-group-borderless input-group-hover-light navbar-input-group">
                                    <div className="input-group-prepend input-group-text">
                                        <i className="bi-search"></i>
                                    </div>

                                    <input type="search" className="js-form-search form-control" placeholder="Search in front" aria-label="Search in front" />
                                    <a className="input-group-append input-group-text" href="#!">
                                        <i id="clearSearchResultsIcon" className="bi-x-lg" style={{ display: 'none' }}></i>
                                    </a>
                                </div>
                            </div>

                            <button className="js-form-search js-form-search-mobile-toggle btn btn-ghost-secondary btn-icon rounded-circle d-lg-none" type="button" >
                                <i className="bi-search"></i>
                            </button>



                            <div id="searchDropdownMenu" className="hs-form-search-menu-content dropdown-menu dropdown-menu-form-search navbar-dropdown-menu-borderless">
                                <div className="card">

                                    <div className="card-body-height">
                                        <div className="d-lg-none">
                                            <div className="input-group input-group-merge navbar-input-group mb-5">
                                                <div className="input-group-prepend input-group-text">
                                                    <i className="bi-search"></i>
                                                </div>

                                                <input type="search" className="form-control" placeholder="Search in front" aria-label="Search in front" />
                                                <a className="input-group-append input-group-text" href="#!">
                                                    <i className="bi-x-lg"></i>
                                                </a>
                                            </div>
                                        </div>

                                        <span className="dropdown-header">Recent searches</span>

                                        <div className="dropdown-item bg-transparent text-wrap">
                                            <a className="btn btn-soft-dark btn-xs rounded-pill" href="index.html">
                                                Gulp <i className="bi-search ms-1"></i>
                                            </a>
                                            <a className="btn btn-soft-dark btn-xs rounded-pill" href="index.html">
                                                Notification panel <i className="bi-search ms-1"></i>
                                            </a>
                                        </div>

                                        <div className="dropdown-divider"></div>

                                        <span className="dropdown-header">Tutorials</span>

                                        <a className="dropdown-item" href="index.html">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0">
                                                    <span className="icon icon-soft-dark icon-xs icon-circle">
                                                        <i className="bi-sliders"></i>
                                                    </span>
                                                </div>

                                                <div className="flex-grow-1 text-truncate ms-2">
                                                    <span>How to set up Gulp?</span>
                                                </div>
                                            </div>
                                        </a>

                                        <a className="dropdown-item" href="index.html">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0">
                                                    <span className="icon icon-soft-dark icon-xs icon-circle">
                                                        <i className="bi-paint-bucket"></i>
                                                    </span>
                                                </div>

                                                <div className="flex-grow-1 text-truncate ms-2">
                                                    <span>How to change theme color?</span>
                                                </div>
                                            </div>
                                        </a>

                                        <div className="dropdown-divider"></div>

                                        <span className="dropdown-header">Members</span>

                                        <a className="dropdown-item" href="index.html">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0">
                                                    <img className="avatar avatar-xs avatar-circle" src="assets/img/160x160/img10.jpg" alt="Image Description" />
                                                </div>
                                                <div className="flex-grow-1 text-truncate ms-2">
                                                    <span>Amanda Harvey <i className="tio-verified text-primary" data-toggle="tooltip" data-placement="top" title="Top endorsed"></i></span>
                                                </div>
                                            </div>
                                        </a>

                                        <a className="dropdown-item" href="index.html">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0">
                                                    <img className="avatar avatar-xs avatar-circle" src="assets/img/160x160/img3.jpg" alt="Image Description" />
                                                </div>
                                                <div className="flex-grow-1 text-truncate ms-2">
                                                    <span>David Harrison</span>
                                                </div>
                                            </div>
                                        </a>

                                        <a className="dropdown-item" href="index.html">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0">
                                                    <div className="avatar avatar-xs avatar-soft-info avatar-circle">
                                                        <span className="avatar-initials">A</span>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 text-truncate ms-2">
                                                    <span>Anne Richard</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <a className="card-footer text-center" href="index.html">
                                        See all results <i className="bi-chevron-right small"></i>
                                    </a>

                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="navbar-nav-wrap-content-end">
                        <ul className="navbar-nav">
                            <li className="nav-item d-none d-sm-inline-block">
                                <div className="dropdown">
                                    <button type="button" className="btn btn-ghost-secondary btn-icon rounded-circle" id="navbarNotificationsDropdown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside" data-bs-dropdown-animation>
                                        <i className="bi-bell"></i>
                                        <span className="btn-status btn-sm-status btn-status-danger"></span>
                                    </button>

                                    <div className="dropdown-menu dropdown-menu-end dropdown-card navbar-dropdown-menu navbar-dropdown-menu-borderless" aria-labelledby="navbarNotificationsDropdown" style={{ width: '25rem' }}>
                                        <div className="card">
                                            <div className="card-header card-header-content-between">
                                                <h4 className="card-title mb-0">Notifications</h4>

                                                <div className="dropdown">
                                                    <button type="button" className="btn btn-icon btn-sm btn-ghost-secondary rounded-circle" id="navbarNotificationsDropdownSettings" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="bi-three-dots-vertical"></i>
                                                    </button>

                                                    <div className="dropdown-menu dropdown-menu-end navbar-dropdown-menu navbar-dropdown-menu-borderless" aria-labelledby="navbarNotificationsDropdownSettings">
                                                        <span className="dropdown-header">Settings</span>
                                                        <a className="dropdown-item" href="#">
                                                            <i className="bi-archive dropdown-item-icon"></i> Archive all
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            <i className="bi-check2-all dropdown-item-icon"></i> Mark all as read
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            <i className="bi-toggle-off dropdown-item-icon"></i> Disable notifications
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            <i className="bi-gift dropdown-item-icon"></i> What's new?
                                                        </a>
                                                        <div className="dropdown-divider"></div>
                                                        <span className="dropdown-header">Feedback</span>
                                                        <a className="dropdown-item" href="#">
                                                            <i className="bi-chat-left-dots dropdown-item-icon"></i> Report
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                            <ul className="nav nav-tabs nav-justified" id="notificationTab" role="tablist">
                                                <li className="nav-item">
                                                    <a className="nav-link active" href="#notificationNavOne" id="notificationNavOne-tab" data-bs-toggle="tab" data-bs-target="#notificationNavOne" role="tab" aria-controls="notificationNavOne" aria-selected="true">Messages (3)</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#notificationNavTwo" id="notificationNavTwo-tab" data-bs-toggle="tab" data-bs-target="#notificationNavTwo" role="tab" aria-controls="notificationNavTwo" aria-selected="false">Archived</a>
                                                </li>
                                            </ul>

                                            <div className="card-body-height">
                                                <div className="tab-content" id="notificationTabContent">
                                                    <div className="tab-pane fade show active" id="notificationNavOne" role="tabpanel" aria-labelledby="notificationNavOne-tab">
                                                        <ul className="list-group list-group-flush navbar-card-list-group">
                                                            <li className="list-group-item form-check-select">
                                                                <div className="row">
                                                                    <div className="col-auto">
                                                                        <div className="d-flex align-items-center">
                                                                            <div className="form-check">
                                                                                <input className="form-check-input" type="checkbox" value="" id="notificationCheck1" />
                                                                                <label className="form-check-label" htmlFor="notificationCheck1"></label>
                                                                                <span className="form-check-stretched-bg"></span>
                                                                            </div>
                                                                            <img className="avatar avatar-sm avatar-circle" src="assets/img/160x160/img3.jpg" alt="Image Description" />
                                                                        </div>
                                                                    </div>

                                                                    <div className="col ms-n2">
                                                                        <h5 className="mb-1">Brian Warner</h5>
                                                                        <p className="text-body fs-5">changed an issue from "In Progress" to <span className="badge bg-success">Review</span></p>
                                                                    </div>

                                                                    <small className="col-auto text-muted text-cap">2hr</small>
                                                                </div>

                                                                <a className="stretched-link" href="#"></a>
                                                            </li>

                                                            <li className="list-group-item form-check-select">
                                                                <div className="row">
                                                                    <div className="col-auto">
                                                                        <div className="d-flex align-items-center">
                                                                            <div className="form-check">
                                                                                <input className="form-check-input" type="checkbox" value="" id="notificationCheck2" />
                                                                                <label className="form-check-label" htmlFor="notificationCheck2"></label>
                                                                                <span className="form-check-stretched-bg"></span>
                                                                            </div>
                                                                            <div className="avatar avatar-sm avatar-soft-dark avatar-circle">
                                                                                <span className="avatar-initials">K</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>


                                                                    <div className="col ms-n2">
                                                                        <h5 className="mb-1">Klara Hampton</h5>
                                                                        <p className="text-body fs-5">mentioned you in a comment</p>
                                                                        <blockquote className="blockquote blockquote-sm">
                                                                            Nice work, love! You really nailed it. Keep it up!
                                                                        </blockquote>
                                                                    </div>


                                                                    <small className="col-auto text-muted text-cap">10hr</small>

                                                                </div>


                                                                <a className="stretched-link" href="#"></a>
                                                            </li>



                                                            <li className="list-group-item form-check-select">
                                                                <div className="row">
                                                                    <div className="col-auto">
                                                                        <div className="d-flex align-items-center">
                                                                            <div className="form-check">
                                                                                <input className="form-check-input" type="checkbox" value="" id="notificationCheck3" />
                                                                                <label className="form-check-label" htmlFor="notificationCheck3"></label>
                                                                                <span className="form-check-stretched-bg"></span>
                                                                            </div>
                                                                            <div className="avatar avatar-sm avatar-circle">
                                                                                <img className="avatar-img" src="assets/img/160x160/img10.jpg" alt="Image Description" />
                                                                            </div>
                                                                        </div>
                                                                    </div>


                                                                    <div className="col ms-n2">
                                                                        <h5 className="mb-1">Ruby Walter</h5>
                                                                        <p className="text-body fs-5">joined the Slack group HS Team</p>
                                                                    </div>


                                                                    <small className="col-auto text-muted text-cap">3dy</small>

                                                                </div>


                                                                <a className="stretched-link" href="#"></a>
                                                            </li>



                                                            <li className="list-group-item form-check-select">
                                                                <div className="row">
                                                                    <div className="col-auto">
                                                                        <div className="d-flex align-items-center">
                                                                            <div className="form-check">
                                                                                <input className="form-check-input" type="checkbox" value="" id="notificationCheck4" />
                                                                                <label className="form-check-label" htmlFor="notificationCheck4"></label>
                                                                                <span className="form-check-stretched-bg"></span>
                                                                            </div>
                                                                            <div className="avatar avatar-sm avatar-circle">
                                                                                <img className="avatar-img" src="assets/svg/brands/google-icon.svg" alt="Image Description" />
                                                                            </div>
                                                                        </div>
                                                                    </div>


                                                                    <div className="col ms-n2">
                                                                        <h5 className="mb-1">from Google</h5>
                                                                        <p className="text-body fs-5">Start using forms to capture the information of prospects visiting your Google website</p>
                                                                    </div>


                                                                    <small className="col-auto text-muted text-cap">17dy</small>

                                                                </div>


                                                                <a className="stretched-link" href="#"></a>
                                                            </li>



                                                            <li className="list-group-item form-check-select">
                                                                <div className="row">
                                                                    <div className="col-auto">
                                                                        <div className="d-flex align-items-center">
                                                                            <div className="form-check">
                                                                                <input className="form-check-input" type="checkbox" value="" id="notificationCheck5" />
                                                                                <label className="form-check-label" htmlFor="notificationCheck5"></label>
                                                                                <span className="form-check-stretched-bg"></span>
                                                                            </div>
                                                                            <div className="avatar avatar-sm avatar-circle">
                                                                                <img className="avatar-img" src="assets/img/160x160/img7.jpg" alt="Image Description" />
                                                                            </div>
                                                                        </div>
                                                                    </div>


                                                                    <div className="col ms-n2">
                                                                        <h5 className="mb-1">Sara Villar</h5>
                                                                        <p className="text-body fs-5">completed <i className="bi-journal-bookmark-fill text-primary"></i> FD-7 task</p>
                                                                    </div>


                                                                    <small className="col-auto text-muted text-cap">2mn</small>

                                                                </div>


                                                                <a className="stretched-link" href="#"></a>
                                                            </li>

                                                        </ul>

                                                    </div>

                                                    <div className="tab-pane fade" id="notificationNavTwo" role="tabpanel" aria-labelledby="notificationNavTwo-tab">
                                                        <ul className="list-group list-group-flush navbar-card-list-group">
                                                            <li className="list-group-item form-check-select">
                                                                <div className="row">
                                                                    <div className="col-auto">
                                                                        <div className="d-flex align-items-center">
                                                                            <div className="form-check">
                                                                                <input className="form-check-input" type="checkbox" value="" id="notificationCheck6" />
                                                                                <label className="form-check-label" htmlFor="notificationCheck6"></label>
                                                                                <span className="form-check-stretched-bg"></span>
                                                                            </div>
                                                                            <div className="avatar avatar-sm avatar-soft-dark avatar-circle">
                                                                                <span className="avatar-initials">A</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>


                                                                    <div className="col ms-n2">
                                                                        <h5 className="mb-1">Anne Richard</h5>
                                                                        <p className="text-body fs-5">accepted your invitation to join Notion</p>
                                                                    </div>


                                                                    <small className="col-auto text-muted text-cap">1dy</small>

                                                                </div>


                                                                <a className="stretched-link" href="#"></a>
                                                            </li>



                                                            <li className="list-group-item form-check-select">
                                                                <div className="row">
                                                                    <div className="col-auto">
                                                                        <div className="d-flex align-items-center">
                                                                            <div className="form-check">
                                                                                <input className="form-check-input" type="checkbox" value="" id="notificationCheck7" />
                                                                                <label className="form-check-label" htmlFor="notificationCheck7"></label>
                                                                                <span className="form-check-stretched-bg"></span>
                                                                            </div>
                                                                            <div className="avatar avatar-sm avatar-circle">
                                                                                <img className="avatar-img" src="assets/img/160x160/img5.jpg" alt="Image Description" />
                                                                            </div>
                                                                        </div>
                                                                    </div>


                                                                    <div className="col ms-n2">
                                                                        <h5 className="mb-1">Finch Hoot</h5>
                                                                        <p className="text-body fs-5">left Slack group HS projects</p>
                                                                    </div>


                                                                    <small className="col-auto text-muted text-cap">1dy</small>

                                                                </div>


                                                                <a className="stretched-link" href="#"></a>
                                                            </li>



                                                            <li className="list-group-item form-check-select">
                                                                <div className="row">
                                                                    <div className="col-auto">
                                                                        <div className="d-flex align-items-center">
                                                                            <div className="form-check">
                                                                                <input className="form-check-input" type="checkbox" value="" id="notificationCheck8" />
                                                                                <label className="form-check-label" htmlFor="notificationCheck8"></label>
                                                                                <span className="form-check-stretched-bg"></span>
                                                                            </div>
                                                                            <div className="avatar avatar-sm avatar-dark avatar-circle">
                                                                                <span className="avatar-initials">HS</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>


                                                                    <div className="col ms-n2">
                                                                        <h5 className="mb-1">Htmlstream</h5>
                                                                        <p className="text-body fs-5">you earned a "Top endorsed" <i className="bi-patch-check-fill text-primary"></i> badge</p>
                                                                    </div>

                                                                    <small className="col-auto text-muted text-cap">6dy</small>

                                                                </div>

                                                                <a className="stretched-link" href="#"></a>
                                                            </li>
                                                            <li className="list-group-item form-check-select">
                                                                <div className="row">
                                                                    <div className="col-auto">
                                                                        <div className="d-flex align-items-center">
                                                                            <div className="form-check">
                                                                                <input className="form-check-input" type="checkbox" value="" id="notificationCheck9" />
                                                                                <label className="form-check-label" htmlFor="notificationCheck9"></label>
                                                                                <span className="form-check-stretched-bg"></span>
                                                                            </div>
                                                                            <div className="avatar avatar-sm avatar-circle">
                                                                                <img className="avatar-img" src="assets/img/160x160/img8.jpg" alt="Image Description" />
                                                                            </div>
                                                                        </div>
                                                                    </div>


                                                                    <div className="col ms-n2">
                                                                        <h5 className="mb-1">Linda Bates</h5>
                                                                        <p className="text-body fs-5">Accepted your connection</p>
                                                                    </div>


                                                                    <small className="col-auto text-muted text-cap">17dy</small>

                                                                </div>


                                                                <a className="stretched-link" href="#"></a>
                                                            </li>




                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>



                                            <a className="card-footer text-center" href="#">
                                                View all notifications <i className="bi-chevron-right"></i>
                                            </a>

                                        </div>
                                    </div>
                                </div>

                            </li>

                            <li className="nav-item d-none d-sm-inline-block">

                                <div className="dropdown">
                                    <button type="button" className="btn btn-icon btn-ghost-secondary rounded-circle" id="navbarAppsDropdown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-dropdown-animation>
                                        <i className="bi-app-indicator"></i>
                                    </button>

                                    <div className="dropdown-menu dropdown-menu-end dropdown-card navbar-dropdown-menu navbar-dropdown-menu-borderless" aria-labelledby="navbarAppsDropdown" style={{ width: '25rem' }}>
                                        <div className="card">
                                            <div className="card-header">
                                                <h4 className="card-title">Web apps &amp; services</h4>
                                            </div>
                                            <div className="card-body card-body-height">
                                                <a className="dropdown-item" href="#">
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-shrink-0">
                                                            <img className="avatar avatar-xs avatar-4x3" src="assets/svg/brands/atlassian-icon.svg" alt="Image Description" />
                                                        </div>
                                                        <div className="flex-grow-1 text-truncate ms-3">
                                                            <h5 className="mb-0">Atlassian</h5>
                                                            <p className="card-text text-body">Security and control across Cloud</p>
                                                        </div>
                                                    </div>
                                                </a>




                                                <a className="dropdown-item" href="#">
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-shrink-0">
                                                            <div className="avatar avatar-sm avatar-soft-dark">
                                                                <span className="avatar-initials"><i className="bi-grid"></i></span>
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow-1 text-truncate ms-3">
                                                            <h5 className="mb-0">More Front products</h5>
                                                            <p className="card-text text-body">Check out more HS products</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <a className="card-footer text-center" href="#">
                                                View all apps <i className="bi-chevron-right"></i>
                                            </a>

                                        </div>
                                    </div>
                                </div>

                            </li>

                            <li className="nav-item d-none d-sm-inline-block">

                                <button className="btn btn-ghost-secondary btn-icon rounded-circle" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasActivityStream" aria-controls="offcanvasActivityStream">
                                    <i className="bi-x-diamond"></i>
                                </button>

                            </li>

                            <li className="nav-item">

                                <div className="dropdown">
                                    <a className="navbar-dropdown-account-wrapper" href="#!" id="accountNavbarDropdown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside" data-bs-dropdown-animation>
                                        <div className="avatar avatar-sm avatar-circle">
                                            <img className="avatar-img" src="assets/img/160x160/img6.jpg" alt="Image Description" />
                                            <span className="avatar-status avatar-sm-status avatar-status-success"></span>
                                        </div>
                                    </a>

                                    <div className="dropdown-menu dropdown-menu-end navbar-dropdown-menu navbar-dropdown-menu-borderless navbar-dropdown-account" aria-labelledby="accountNavbarDropdown" style={{ width: '16rem' }}>
                                        <div className="dropdown-item-text">
                                            <div className="d-flex align-items-center">
                                                <div className="avatar avatar-sm avatar-circle">
                                                    <img className="avatar-img" src="assets/img/160x160/img6.jpg" alt="Image Description" />
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <h5 className="mb-0">Mark Williams</h5>
                                                    <p className="card-text text-body">mark@site.com</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="dropdown-divider"></div>


                                        <div className="dropdown">
                                            <a className="navbar-dropdown-submenu-item dropdown-item dropdown-toggle" href="#!" id="navSubmenuPagesAccountDropdown1" data-bs-toggle="dropdown" aria-expanded="false">Set status</a>

                                            <div className="dropdown-menu dropdown-menu-end navbar-dropdown-menu navbar-dropdown-menu-borderless navbar-dropdown-sub-menu" aria-labelledby="navSubmenuPagesAccountDropdown1">
                                                <a className="dropdown-item" href="#">
                                                    <span className="legend-indicator bg-success me-1"></span> Available
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <span className="legend-indicator bg-danger me-1"></span> Busy
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    <span className="legend-indicator bg-warning me-1"></span> Away
                                                </a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="#"> Reset status
                                                </a>
                                            </div>
                                        </div>


                                        <a className="dropdown-item" href="#">Profile &amp; account</a>
                                        <a className="dropdown-item" href="#">Settings</a>

                                        <div className="dropdown-divider"></div>

                                        <a className="dropdown-item" href="#">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0">
                                                    <div className="avatar avatar-sm avatar-dark avatar-circle">
                                                        <span className="avatar-initials">HS</span>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 ms-2">
                                                    <h5 className="mb-0">Htmlstream <span className="badge bg-primary rounded-pill text-uppercase ms-1">PRO</span></h5>
                                                    <span className="card-text">hs.example.com</span>
                                                </div>
                                            </div>
                                        </a>

                                        <div className="dropdown-divider"></div>


                                        <div className="dropdown">
                                            <a className="navbar-dropdown-submenu-item dropdown-item dropdown-toggle" href="#!" id="navSubmenuPagesAccountDropdown2" data-bs-toggle="dropdown" aria-expanded="false">Customization</a>

                                            <div className="dropdown-menu dropdown-menu-end navbar-dropdown-menu navbar-dropdown-menu-borderless navbar-dropdown-sub-menu" aria-labelledby="navSubmenuPagesAccountDropdown2">
                                                <a className="dropdown-item" href="#">
                                                    Invite people
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    Analytics
                                                    <i className="bi-box-arrow-in-up-right"></i>
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    Customize Front
                                                    <i className="bi-box-arrow-in-up-right"></i>
                                                </a>
                                            </div>
                                        </div>


                                        <a className="dropdown-item" href="#">Manage team</a>

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

            <aside className="js-navbar-vertical-aside navbar navbar-vertical-aside navbar-vertical navbar-vertical-fixed navbar-expand-xl navbar-light bg-light">
                <div className="navbar-vertical-container">
                    <div className="navbar-vertical-footer-offset">

                        <a className="navbar-brand" href="#" aria-label="Front">
                            <img className="navbar-brand-logo" src="images/odw-logo-h.png" alt="Logo" maxWidth='auto' />

                        </a>


                        <button type="button" className="js-navbar-vertical-aside-toggle-invoker navbar-aside-toggler">
                            <i className="bi-arrow-bar-left navbar-toggler-short-align" data-bs-template='<div className="tooltip d-none d-md-block" role="tooltip"><div className="arrow"></div><div className="tooltip-inner"></div></div>' data-bs-toggle="tooltip" data-bs-placement="right" title="Collapse"></i>
                            <i className="bi-arrow-bar-right navbar-toggler-full-align" data-bs-template='<div className="tooltip d-none d-md-block" role="tooltip"><div className="arrow"></div><div className="tooltip-inner"></div></div>' data-bs-toggle="tooltip" data-bs-placement="right" title="Expand"></i>
                        </button>


                        <div className="navbar-vertical-content">
                            <div id="navbarVerticalMenu" className="nav nav-pills nav-vertical card-navbar-nav">
                                <div className="nav-item">
                                    <Link className="nav-link active" href={route('dashboard')} >
                                        <i className="bi-house-door nav-icon"></i>
                                        <span className="nav-link-title">Dashboard</span>
                                    </Link>


                                </div>

                                <div className="nav-item">
                                    <Link className="nav-link" href={route('dashboard')} >
                                        <i class=" bi-calendar2-week nav-icon"></i>
                                        <span className="nav-link-title">Appointments</span>
                                    </Link>


                                </div>


                                <div className="nav-item">
                                    <Link className="nav-link" href={route('dashboard')} >
                                        <i class=" bi-clipboard2-pulse nav-icon"></i>
                                        <span className="nav-link-title">Second Opinion</span>
                                    </Link>


                                </div>

                                <div className="nav-item">
                                    <Link className="nav-link" href={route('dashboard')} >
                                        <i class="  bi-calculator nav-icon"></i>
                                        <span className="nav-link-title">Estimates</span>
                                    </Link>


                                </div>
                                <div className="nav-item">
                                    <Link className="nav-link" href={route('dashboard')} >
                                        <i class=" bi-cash-stack  nav-icon"></i>
                                        <span className="nav-link-title">Compare Costs</span>
                                    </Link>


                                </div>


                                <span className="dropdown-header mt-4">Clinic Management</span>
                                <small className="bi-three-dots nav-subtitle-replacer"></small>

                                <div className="nav-item ">
                                    <Link className="nav-link align-items-center" href={route('dashboard')} >
                                        <svg className='me-3'
                                            fill="#000000" height="16px" width="16px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                            viewBox="0 0 512.00 512.00" xml:space="preserve" stroke="#000000" stroke-width="0.00512">

                                            <g id="SVGRepo_iconCarrier">
                                                <g>
                                                    <g>
                                                        <path d="M481.265,153.787c9.312-15.682,14.224-33.562,14.224-51.928C495.489,45.694,449.795,0,393.629,0 c-36.226,0-69.482,19.128-87.779,50.183c-26.609,4.863-47.625,12.31-55.354,15.257c-8.313-3.171-31.992-11.551-61.47-16.311 c-48.618-7.851-89.621-1.774-118.585,17.571c-35.785,23.901-53.93,67.219-53.93,128.746c0,49.923,7.976,97.54,23.707,141.528 c12.601,35.238,30.175,68.223,52.232,98.042c37.652,50.899,74.99,74.722,76.562,75.711l2.021,1.272h2.388 c22.229,0,30.299-18.113,30.299-30.288V344.083c0-19.238,7.568-32.877,22.492-40.536c11.866-6.089,24.189-6.241,24.285-6.241 c1.909,0,46.777,0.532,46.777,46.777v137.629c0,12.175,8.066,30.288,30.288,30.288h2.387l2.021-1.272 c1.571-0.988,38.912-24.811,76.567-75.711c22.058-29.818,39.634-62.804,52.236-98.042c15.733-43.989,23.709-91.605,23.709-141.528 c0-14.193-0.981-27.594-2.914-39.828C481.47,154.996,481.367,154.393,481.265,153.787z M445.361,330.936 c-11.982,33.645-28.697,65.149-49.68,93.638c-27.153,36.866-56.688,61.514-70.392,70.756c-10.393-1.2-11.417-10.65-11.47-13.617 V344.083c0-32.662-17.455-48.246-32.098-55.567c-15.332-7.667-30.583-7.755-31.224-7.755c-0.641,0-15.892,0.088-31.224,7.755 c-14.643,7.322-32.098,22.904-32.098,55.567v137.629c0,0.035-0.11,3.771-1.879,7.307c-1.234,2.466-3.546,5.659-9.548,6.316 c-8.172-5.63-39.113-28.408-69.995-70.156c-21.093-28.514-37.9-60.065-49.956-93.775c-15.09-42.196-22.741-87.939-22.741-135.958 c0-55.637,15.658-94.317,46.539-114.964c62.005-41.455,166.687,1.056,167.732,1.489l3.168,1.31l3.164-1.309 c0.213-0.088,18.258-7.479,43.62-13.164c-3.622,10.589-5.512,21.785-5.512,33.051c0,56.166,45.695,101.859,101.861,101.859 c28.087,0,54.332-11.378,73.336-31.15c0.641,7.296,0.972,14.941,0.972,22.878C467.936,243.287,460.341,288.872,445.361,330.936z M465.596,147.694c-15.779,24.722-42.683,39.481-71.967,39.481c-47.043,0-85.316-38.272-85.316-85.315 c0-14.05,3.485-27.968,10.08-40.251l0.001-0.003c14.903-27.795,43.732-45.061,75.235-45.061c47.042,0,85.315,38.272,85.315,85.315 C478.944,118.169,474.328,134.018,465.596,147.694z"></path> </g> </g> <g> <g> <path d="M138.381,93.834c-0.746,0.186-18.448,4.721-36.158,18.742c-16.498,13.063-36.166,37.087-36.166,77.367h16.545 c0-64.029,57.37-79.438,59.813-80.064L138.381,93.834z"></path> </g> </g> <g> <g> <path d="M423.918,71.572v-27.53h-60.586v27.53h-27.519v60.575h27.519v27.53h60.586v-27.53h27.53V71.572H423.918z M434.902,115.603 h-27.53v27.53h-27.497v-27.53h-27.519V88.117h27.519v-27.53h27.497v27.53h27.53V115.603z"></path> </g> </g> </g></svg>
                                        <span className="nav-link-title">Dentists</span>
                                    </Link>


                                </div>


                                <div className="nav-item ">
                                    <Link className="nav-link align-items-center" href={route('dashboard')} >

                                        <svg className='me-3'
                                            fill="#000000" height="16px" width="16px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 231.172 231.172" xml:space="preserve" stroke="#000000" stroke-width="0.00231172"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M171.313,145.723l-50.014-50.012c-1.578-1.578-4.135-1.578-5.714,0l-8.571,8.571L95.586,92.854l1.419-1.419 c6.485-6.483,10.058-15.108,10.061-24.282c0.004-9.182-3.565-17.811-10.052-24.294c-0.481-0.481-0.996-0.912-1.5-1.361 l35.784-35.784L125.586,0L88.803,36.782c-4.888-2.593-10.368-3.974-16.065-3.974c-0.004,0-0.006,0-0.008,0 c-9.182,0-17.809,3.571-24.294,10.058L18.448,72.853c-0.758,0.758-1.184,1.784-1.184,2.857c0,1.073,0.426,2.099,1.184,2.857 l42.856,42.858c0.758,0.758,1.785,1.184,2.857,1.184c1.071,0,2.099-0.426,2.857-1.184l8.571-8.573l11.427,11.428l-8.571,8.571 c-0.758,0.758-1.184,1.783-1.184,2.857c0,1.073,0.426,2.099,1.184,2.857l50.014,50.012c5.707,5.71,13.309,8.85,21.404,8.854 c0.002,0,0.004,0,0.006,0c8.101,0,15.712-3.149,21.429-8.87C183.112,176.748,183.12,157.529,171.313,145.723z M72.73,104.282 c-0.002,0.002-0.003,0.006-0.005,0.008l-8.565,8.565L27.018,75.71l27.133-27.131c4.96-4.96,11.557-7.69,18.58-7.69 c0.002,0,0.004,0,0.006,0c7.019,0,13.613,2.731,18.564,7.682c4.958,4.96,7.688,11.553,7.684,18.577 c-0.004,7.019-2.736,13.613-7.694,18.573l-9.04,9.042L72.73,104.282z M81.302,107.139l5.712-5.712l2.86-2.859l11.429,11.427 l-8.573,8.573L81.302,107.139z M149.867,189.351c-0.002,0-0.004,0-0.004,0c-5.938,0-11.51-2.304-15.692-6.487l-47.157-47.155 l8.566-8.566c0,0,0.004-0.002,0.006-0.004l14.285-14.287l8.57-8.57l47.157,47.155c8.655,8.657,8.649,22.747-0.016,31.412 C161.391,187.042,155.81,189.351,149.867,189.351z"></path> <path d="M212.724,209.991l-25.714-25.714c-1.515-1.515-4.198-1.515-5.714,0l-14.285,14.287c-0.758,0.758-1.184,1.783-1.184,2.857 c0,1.073,0.426,2.099,1.184,2.857l25.714,25.71c0.789,0.789,1.823,1.184,2.857,1.184s2.067-0.395,2.857-1.184l14.285-14.284 c0.758-0.758,1.184-1.783,1.184-2.857C213.909,211.774,213.482,210.748,212.724,209.991z M195.583,221.417l-20.001-19.997 l8.572-8.574l20.001,20.001L195.583,221.417z"></path> </g> </g> </g> </g></svg>

                                        <span className="nav-link-title">Sepcialists</span>
                                    </Link>


                                </div>

                                <span className="dropdown-header mt-4">Offers</span>
                                <small className="bi-three-dots nav-subtitle-replacer"></small>

                                <div className="nav-item ">
                                    <Link className="nav-link align-items-center" href={route('dashboard')} >
                                        <i class=" bi-tag nav-icon"></i>   <span className="nav-link-title">Deals</span>
                                    </Link>


                                </div>















                            </div>

                        </div>


                    </div>
                </div>
            </aside>





            <main id="content" role="main" className="main">

                <div className="content container">

                    <div className="page-header">
                        <div className="row align-items-center">
                            <div className="col-sm mb-2 mb-sm-0">
                                <h1 className="page-header-title">
                                    {header && (<>{header}</>)
                                    }</h1>
                            </div>


                            {/* <div class="col-sm-auto">
                                <a class="btn btn-primary" href="#" data-bs-toggle="modal" data-bs-target="#inviteUserModal">
                                    <i class="bi-person-plus-fill me-1"></i> Invite users
                                </a>
                            </div> */}

                        </div>

                    </div>


                    {children}

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
                                        <a className="list-separator-link" href="#">FAQ</a>
                                    </li>

                                    <li className="list-inline-item">
                                        <a className="list-separator-link" href="#">License</a>
                                    </li>

                                    <li className="list-inline-item">

                                        <button className="btn btn-ghost-secondary btn btn-icon btn-ghost-secondary rounded-circle" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasKeyboardShortcuts" aria-controls="offcanvasKeyboardShortcuts">
                                            <i className="bi-command"></i>
                                        </button>

                                    </li>
                                </ul>

                            </div>
                        </div>

                    </div>

                </div>



            </main>
        </div >
    );
}
