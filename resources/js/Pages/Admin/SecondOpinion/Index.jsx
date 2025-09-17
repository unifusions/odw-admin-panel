
import PageHeader from "@/Components/PageHeader";
import Pagination from "@/Components/Pagination";
import SOStatus from "@/Components/SOStatus";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { Head, Link, usePage } from "@inertiajs/react"

export default function SecondOpinion() {

    const { secondopinions } = usePage().props;
    return (
        < AuthenticatedLayout
            header='Second Opinion'
            pageTitle="All Second Opinions"

        > 
          
            <div className="table-responsive datatable-custom">
                <table className="js-datatable table table-borderless table-thead-bordered table-nowrap table-align-middle card-table">
                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Status</th>
                            <th>Action</th>

                        </tr>
                    </thead>

                    <tbody>
                        {
                            secondopinions.data.map((secondopinion) =>
                                <tr key={secondopinion.id}>
                                    <td>
                                        <a className="d-flex align-items-center" href="#!">
                                            <div className="avatar avatar-soft-primary avatar-circle">
                                                <span className="avatar-initials">A</span>
                                            </div>
                                            <div className="ms-3">
                                                <span className="d-block h5 text-inherit mb-0">{secondopinion.patient.first_name}

                                                    {/* <i className="bi-patch-check-fill text-primary" data-toggle="tooltip" data-bs-placement="top" title="Top endorsed"></i> */}
                                                </span>
                                                <span className="d-block fs-5 text-body">{secondopinion.patient.user.email}</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td classNameName="text-dark ">{secondopinion.subject}</td>
                                    <td> <SOStatus status={secondopinion.status} /> </td>

                                    <td>

                                        <div className="btn-group" role="group">
                                            <Link className="btn btn-white btn-sm" href={route('second-opinion.show', secondopinion)} >
                                                <i className="bi-eye"></i> View
                                            </Link>


                                            <div className="btn-group">
                                                <button type="button" className="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty " id="ordersExportDropdown1" data-bs-toggle="dropdown" aria-expanded="true"></button>

                                                <div className="dropdown-menu dropdown-menu-end mt-1 " aria-labelledby="ordersExportDropdown1" data-popper-placement="bottom-end">
                                                    <span className="dropdown-header">Options</span>
                                                    <a className="js-export-copy dropdown-item" >
                                                        <i className="bi-reply dropdown-item-icon"></i> Reply

                                                    </a>

                                                    <a className="js-export-copy dropdown-item" >
                                                        <i className=" bi-file-earmark-check  dropdown-item-icon"></i>  Review

                                                    </a>



                                                    <div className="dropdown-divider"></div>
                                                    <a className="dropdown-item" >
                                                        <i className="bi-trash dropdown-item-icon"></i> Mark as Closed
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                            )}





                    </tbody>
                    <tfoot>
                        <Pagination links={secondopinions.links} />
                    </tfoot>
                </table>
            </div>
        </AuthenticatedLayout >
    )
}