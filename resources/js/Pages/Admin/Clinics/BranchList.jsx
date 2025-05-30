import { Link } from "@inertiajs/react"

export default function BranchList({ branches, clinic }) {
    return (
        <>
            {branches.map((branch, index) => {
                return (
                    <>
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="d-flex mb-3 align-items-start">
                                    <div className="me-2">
                                        <h3 class="mb-0 me-3">{branch.name} </h3>{index === 0 && <span class="badge bg-info">Main Branch</span>}




                                    </div>

                                    <div className="ms-auto">

                                        <div className="dropdown">
                                            <button type="button" className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle" id="kanbanProjectsGridDropdown1" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="bi-three-dots-vertical"></i>
                                            </button>

                                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="kanbanProjectsGridDropdown1" >
                                                <Link href={route('clinics.branches.edit', { clinic, branch })} className="dropdown-item">
                                                    <i className="bi-pencil dropdown-item-icon"></i> Edit Branch Details</Link>


                                                <div className="dropdown-divider"></div>

                                                <a className="dropdown-item text-danger" href="#" draggable="false">
                                                    <i className="bi-trash dropdown-item-icon text-danger"></i>
                                                    Delete Branch
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="row mb-3 border-bottom border-secondary-subtle">
                                    <div className="col-md-3">
                                        <p className="d-block text-body">
                                            {branch.address_line_1}<br />
                                            {branch.address_line_2}<br />
                                            {branch.zipcode.city.name} - {branch.zipcode.zip_code}<br />
                                            {branch.zipcode.city.state.name}
                                        </p>
                                    </div>
                                    <div className="col-md-3">
                                        <ul className="list-group list-group-flush list-group-no-gutters">
                                            <li className="list-group-item">
                                                <h5> Working Hours</h5>
                                                <ul className="list-unstyled list-py-2 text-body">
                                                    <li><i className="bi-at me-2"></i> {branch.email}</li>
                                                    <li><i className="bi-phone me-2"></i>{branch.phone}</li>
                                                </ul>
                                            </li>
                                        </ul>

                                    </div>
                                    <div className="col-md-3">

                                        <ul className="list-group list-group-flush list-group-no-gutters">
                                            <li className="list-group-item">
                                                <h5> Contact</h5>
                                                <ul className="list-unstyled list-py-2 text-body">
                                                    <li><i className="bi-at me-2"></i> {branch.email}</li>
                                                    <li><i className="bi-phone me-2"></i>{branch.phone}</li>
                                                </ul>
                                            </li>
                                        </ul>

                                    </div>

                                    <div className="col-md-3">


                                        {branch.dentalservices.map((service) =>
                                            <span class="badge bg-soft-dark text-dark me-2 mb-2">{service.dentalservice.name}</span>
                                        )}

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
                                            <span className="d-block h4 mb-1">{branch.dentalservices.length}</span>
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