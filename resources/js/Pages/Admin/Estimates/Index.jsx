import PageHeader from "@/Components/PageHeader";
import Pagination from "@/Components/Pagination";
import SOBadge from "@/Components/SOBadge";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";

export default function Index() {

    const { estimates } = usePage().props;

    return (
        <AuthenticatedLayout
            header='Estimates'
            pageTitle="All Estimates"
        >

            <div class="table-responsive  ">
                <table class="  table table-borderless table-thead-bordered table-nowrap table-align-middle card-table"
                >

                    <thead class="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Location</th>

                            <th>Status</th>
                            <th className="text-end">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {estimates.data.map((estimate) => <tr >
                            <td>
                                <div className="d-flex  align-items-center">
                                    <div class="avatar avatar-soft-primary avatar-circle">
                                        <span class="avatar-initials">{estimate.patient.first_name.charAt(0)}</span>
                                    </div>
                                    <div class="ms-3">
                                        <span class="d-block h5 text-inherit mb-0">{estimate.patient.first_name}
                                            {/* <i class="bi-patch-check-fill text-primary" data-toggle="tooltip" data-bs-placement="top" title="Top endorsed"></i> */}
                                        </span>
                                        <span class="d-block fs-5 text-body">{estimate.user.email}</span>
                                    </div>
                                </div>
                            </td>
                            <td>  <span class="d-block h5 mb-0">{estimate.dentalservice?.name}</span></td>
                            <td>{estimate.description ?? ''}</td>
                            <td> <SOBadge status={estimate.status} /> </td>
                            <td className="text-end">
                                <Link className="btn btn-outline-primary btn-sm " href={route('estimates.show', estimate)} >
                                    <i className="bi-eye"></i> View
                                </Link>

                                {/* <button className="btn btn-outline-danger btn-sm"
                                > <i className="bi-trash"></i> Mark as Closed

                                </button> */}

                                <div className="btn-group" role="group">

                                    {/* <div className="btn-group">
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
                                    </div> */}
                                </div>

                            </td>
                        </tr>)}








                    </tbody>
                    <tfoot>
                        <Pagination links={estimates.links} />
                    </tfoot>
                </table>
            </div>

        </AuthenticatedLayout>
    )
}