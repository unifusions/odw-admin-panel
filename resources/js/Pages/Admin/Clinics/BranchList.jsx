export default function BranchList({ branches }) {
    return (
        <>
            {branches.map((branch) => {
                return (
                    <>
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="d-flex mb-3">
                                    <div className="me-2">
                                        <h3 class="mb-0 me-3">{branch.name}</h3>

                                        {console.log(branch)}
                                        {/* 
                                        <div className="avatar-group avatar-group-sm">
                                            <span className="avatar avatar-circle">
                                                <img className="avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description" draggable="false" />
                                            </span>
                                            <span className="avatar avatar-circle">
                                                <img className="avatar-img" src="./assets/img/160x160/img7.jpg" alt="Image Description" draggable="false" />
                                            </span>
                                            <span className="avatar avatar-soft-dark avatar-circle">
                                                <span className="avatar-initials">I</span>
                                            </span>
                                            <span className="fs-6 ms-2">3 Assignees</span>
                                        </div> */}

                                    </div>

                                    <div className="ms-auto">

                                        <div className="dropdown">
                                            <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="kanbanProjectsGridDropdown1" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="bi-three-dots-vertical"></i>
                                            </button>

                                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="kanbanProjectsGridDropdown1" >
                                                <a className="dropdown-item" href="#" draggable="false">
                                                    <i className="bi-pencil dropdown-item-icon"></i> Rename project
                                                </a>
                                                <a className="dropdown-item" href="#" draggable="false">
                                                    <i className="bi-star dropdown-item-icon"></i> Add to favorites
                                                </a>
                                                <a className="dropdown-item" href="#" draggable="false">
                                                    <i className="bi-archive dropdown-item-icon"></i> Archive project
                                                </a>

                                                <div className="dropdown-divider"></div>

                                                <a className="dropdown-item text-danger" href="#" draggable="false">
                                                    <i className="bi-trash dropdown-item-icon text-danger"></i>
                                                    Remove
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="row mb-3 border-bottom border-secondary-subtle">
                                    <div className="col-md-6">
                                        <p className="d-block text-body">
                                            {branch.address_line_1}<br />
                                            {branch.address_line_2}<br />
                                            {branch.zipcode.city.name} - {branch.zipcode.zip_code}<br />
                                            {branch.zipcode.city.state.name}
                                        </p>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="list-group list-group-flush list-group-no-gutters">
                                            <li className="list-group-item">
                                                <ul className="list-unstyled list-py-2 text-body">
                                                    <li><i className="bi-at me-2"></i> {branch.email}</li>
                                                    <li><i className="bi-phone me-2"></i>{branch.phone}</li>
                                                </ul>
                                            </li>
                                        </ul>

                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-4">

                                        <div className="text-center">
                                            <span className="d-block h4 mb-1">
                                                {branch.dentists.length}
                                            </span>
                                            <span className="d-block fs-6">Dentists</span>
                                        </div>

                                    </div>


                                    <div className="col-4">

                                        <div className="text-center">
                                            <span className="d-block h4 mb-1">0</span>
                                            <span className="d-block fs-6">Specialists</span>
                                        </div>

                                    </div>


                                    <div className="col-4">

                                        <div className="text-center">
                                            <span className="d-block h4 mb-1">{branch.services.length}</span>
                                            <span className="d-block fs-6">Services</span>
                                        </div>

                                    </div>

                                </div>





                            </div>
                        </div>

                    </>
                )
            })}
        </>
    )
}