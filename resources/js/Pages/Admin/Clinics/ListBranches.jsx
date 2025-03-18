export default function ListBranches() {
    return (

        <ul className="list-comment">

            <li className="list-comment-item">

                <div className="d-flex align-items-center mb-3">
                    <div className="flex-shrink-0">
                        <div class="avatar avatar-soft-primary avatar-circle">
                            <span class="avatar-initials">A</span>
                        </div>
                    </div>

                    <div className="flex-grow-1 ms-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <h6>Dave Austin</h6>
                            <span className="d-block">1 day ago</span>
                        </div>
                    </div>
                </div>


                <p>As a Special Education teacher this resonates so well with me. Fighting with gen ed teachers to flatten for the students with learning disabilities. It also confirms some things for me in my writing.</p>

                <a className="link" href="#">Reply <i className="bi-chevron-right small ms-1 small ms-1"></i></a>


                <ul className="list-comment">

                    <li className="list-comment-item">

                        <div className="d-flex align-items-center mb-3">
                            <div className="flex-shrink-0">
                                <img className="avatar avatar-circle" src="../assets/img/160x160/img9.jpg" alt="Image Description" />
                            </div>

                            <div className="flex-grow-1 ms-3">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h6>Christina Kray</h6>
                                    <span className="d-block">1 day ago</span>
                                </div>
                            </div>
                        </div>


                        <p>Love it Dave! We're all about keeping it up.</p>

                        <a className="link" href="#">Reply <i className="bi-chevron-right small ms-1 small ms-1"></i></a>
                    </li>

                </ul>

            </li>



            <li className="list-comment-item">

                <div className="d-flex align-items-center mb-3">
                    <div className="flex-shrink-0">
                        <img className="avatar avatar-circle" src="../assets/img/160x160/img8.jpg" alt="Image Description" />
                    </div>

                    <div className="flex-grow-1 ms-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <h6>Hanna Wolfe</h6>
                            <span className="d-block">2 days ago</span>
                        </div>
                    </div>
                </div>


                <p>Since our attention spans seem to be shrinking by the day — keeping it simple is more important than ever.</p>

                <a className="link" href="#">Reply <i className="bi-chevron-right small ms-1 small ms-1"></i></a>
            </li>

        </ul>

    )
}