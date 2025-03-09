
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { Head } from "@inertiajs/react"

export default function SecondOpinion(second) {
    return (
        < AuthenticatedLayout
            header='Second Opinion'

        >
            <Head title="2nd Opinion" />

            <div class="table-responsive datatable-custom">
                <table class="js-datatable table table-borderless table-thead-bordered table-nowrap table-align-middle card-table"
                    data-hs-datatables-options='{
                 "order": []
               }'>
                    <thead class="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Location</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <a class="d-flex align-items-center" href="../user-profile.html">
                                    <div class="avatar avatar-soft-primary avatar-circle">
                                        <span class="avatar-initials">A</span>
                                    </div>
                                    <div class="ms-3">
                                        <span class="d-block h5 text-inherit mb-0">Amanda Harvey 
                                        {/* <i class="bi-patch-check-fill text-primary" data-toggle="tooltip" data-bs-placement="top" title="Top endorsed"></i> */}
                                        </span>
                                        <span class="d-block fs-5 text-body">amanda@example.com</span>
                                    </div>
                                </a>
                            </td>
                            <td>
                                <span class="d-block h5 mb-0">Dental Implants</span>
                                {/* <span class="d-block fs-5">Human resources</span> */}
                            </td>
                            <td>United Kingdom</td>
                            <td>
                                <span class="legend-indicator bg-success"></span>In Progress
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <a class="d-flex align-items-center" href="../user-profile.html">
                                    <div class="avatar avatar-soft-primary avatar-circle">
                                        <span class="avatar-initials">A</span>
                                    </div>
                                    <div class="ms-3">
                                        <span class="d-block h5 text-inherit mb-0">Anne Richard</span>
                                        <span class="d-block fs-5 text-body">anne@example.com</span>
                                    </div>
                                </a>
                            </td>
                            <td>
                                <span class="d-block h5 mb-0">Invisalign</span>
                                {/* <span class="d-block fs-5">Branding products</span> */}
                            </td>
                            <td>United States</td>
                            <td>
                                <span class="legend-indicator bg-warning"></span>Pending
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <a class="d-flex align-items-center" href="../user-profile.html">
                                    <div class="avatar avatar-soft-primary avatar-circle">
                                        <span class="avatar-initials">A</span>
                                    </div>
                                    <div class="ms-3">
                                        <span class="d-block h5 text-inherit mb-0">David Harrison</span>
                                        <span class="d-block fs-5 text-body">david@example.com</span>
                                    </div>
                                </a>
                            </td>
                            <td>
                                <span class="d-block h5 mb-0">Dentures</span>
                                {/* <span class="d-block fs-5">Unknown</span> */}
                            </td>
                            <td>United States</td>
                            <td>
                                <span class="legend-indicator bg-success"></span>Active
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <a class="d-flex align-items-center" href="../user-profile.html">
                                    <div class="avatar avatar-soft-primary avatar-circle">
                                        <span class="avatar-initials">A</span>
                                    </div>
                                    <div class="ms-3">
                                        <span class="d-block h5 text-inherit mb-0">Finch Hoot</span>
                                        <span class="d-block fs-5 text-body">finch@example.com</span>
                                    </div>
                                </a>
                            </td>
                            <td>
                                <span class="d-block h5 mb-0">Root Canal</span>
                                {/* <span class="d-block fs-5">IT department</span> */}
                            </td>
                            <td>Argentina</td>
                            <td>
                                <span class="legend-indicator bg-danger"></span>Completed
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <a class="d-flex align-items-center" href="../user-profile.html">
                                    <div class="avatar avatar-soft-primary avatar-circle">
                                        <span class="avatar-initials">B</span>
                                    </div>
                                    <div class="ms-3">
                                        <span class="d-block h5 text-inherit mb-0">Bob Dean</span>
                                        <span class="d-block fs-5 text-body">bob@example.com</span>
                                    </div>
                                </a>
                            </td>
                            <td>
                                <span class="d-block h5 mb-0">Adult Braces</span>
                                {/* <span class="d-block fs-5">Marketing</span> */}
                            </td>
                            <td>Austria</td>
                            <td>
                                <span class="legend-indicator bg-success"></span>Active
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </AuthenticatedLayout >
    )
}