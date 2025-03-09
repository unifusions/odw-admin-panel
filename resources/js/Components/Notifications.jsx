export default function Notifications({notifications}) {
    return(
        <>
           
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
        </>
    )
}