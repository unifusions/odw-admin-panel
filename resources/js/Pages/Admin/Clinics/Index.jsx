import Breadcrumbs from "@/Components/Breadcrumbs";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import AddClinic from "./AddClinic";
import PageHeader from "@/Components/PageHeader";
import { useToast } from "@/Components/ToastContext";
import Pagination from "@/Components/Pagination";

export default function Index() {

    const { flash, clinics } = usePage().props;
    const showToast = useToast();



    return (
        <AuthenticatedLayout header='Clinics'>
            <Head title="Clinics" />
            <PageHeader>
                <AddClinic />
            </PageHeader>

            <div class="table-responsive datatable-custom">
                <table class="js-datatable table table-borderless table-thead-bordered table-nowrap table-align-middle card-table">
                    <thead class="thead-light">
                        <tr>
                            <th>Clinic Name</th>
                            <th>Address</th>
                            <th>Contact</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            clinics.data.map((clinic) =>
                                <tr key={clinic.id}>
                                    {clinic.branches.length > 1 ?
                                        <>
                                            ok
                                        </>
                                        : <>
                                            <td>
                                                <a class="d-flex align-items-center" href="#">
                                                    <div class="avatar avatar-soft-primary avatar-circle">
                                                        <span class="avatar-initials">{Array.from(clinic.name)[0]}</span>
                                                    </div>
                                                    <div class="ms-3">
                                                        <span class="d-block h5 text-inherit mb-0">{clinic.name}
                                                            {/* <i class="bi-patch-check-fill text-primary" data-toggle="tooltip" data-bs-placement="top" title="Top endorsed"></i> */}
                                                        </span>
                                                        <span class="d-block fs-5 text-body"> {clinic.branches[0].zip_code.city.name}, {clinic.branches[0].zip_code.city.state.short_name} </span>
                                                    </div>
                                                </a>
                                            </td>
                                            <td>{clinic.branches[0].address_line_1} <br />{clinic.branches[0].address_line_2}</td>
                                            <td>
                                                <span class="d-block h5 mb-0"><i class="bi bi-telephone me-3"></i>
                                                    {clinic.branches[0].phone}</span>
                                                <span class="d-block fs-5"><i class="bi bi-envelope me-3"></i>  {clinic.branches[0].email}</span>

                                            </td>
                                        </>
                                    }

                                    <td>
                                        <Link href={route('clinics.edit', clinic)} className="btn btn-white btn-sm fw-bold">   <i class="bi-pencil-fill me-1"></i> Edit</Link></td>
                                </tr>
                            )
                        }
                        <tr>
                            <td>
                                <a class="d-flex align-items-center" href="../user-profile.html">
                                    <div class="avatar avatar-soft-primary avatar-circle">
                                        <span class="avatar-initials">H</span>
                                    </div>
                                    <div class="ms-3">
                                        <span class="d-block h5 text-inherit mb-0">Heavenly Smiles
                                            {/* <i class="bi-patch-check-fill text-primary" data-toggle="tooltip" data-bs-placement="top" title="Top endorsed"></i> */}
                                        </span>
                                        <span class="d-block fs-5 text-body">Henderson Location</span>
                                    </div>
                                </a>
                            </td>
                            <td>
                                <span class="d-block mb-0">2642 W Horizon Ridge Pkwy,<br />
                                    Suite #4A, Henderson, NV 89052</span>
                                {/* <span class="d-block fs-5">Human resources</span> */}
                            </td>
                            <td>
                                <span class="d-block h5 mb-0"><i class="bi bi-telephone me-3"></i>
                                    (702) 997-5057</span>
                                <span class="d-block fs-5">Fax: (702) 997-1765</span>

                            </td>

                        </tr>



                        <tr>
                            <td>
                                <a class="d-flex align-items-center" href="">
                                    <div class="avatar avatar-soft-primary avatar-circle">
                                        <span class="avatar-initials">H</span>
                                    </div>
                                    <div class="ms-3">
                                        <span class="d-block h5 text-inherit mb-0">High End Dental
                                            {/* <i class="bi-patch-check-fill text-primary" data-toggle="tooltip" data-bs-placement="top" title="Top endorsed"></i> */}
                                        </span>
                                        <span class="d-block fs-5 text-body">Henderson Location</span>
                                    </div>
                                </a>
                            </td>
                            <td>
                                <span class="d-block mb-0">5475 S Fort Apache Rd,<br />
                                    Suite #100, Las Vegas, NV 89148</span>
                                {/* <span class="d-block fs-5">Human resources</span> */}
                            </td>
                            <td>
                                <span class="d-block h5 mb-0"><i class="bi bi-telephone me-3"></i>
                                    (702) 702-1609</span>
                                <span class="d-block fs-5">Fax: (725) 525-7641</span>

                            </td>
                            <td>
                                <button type="button" class="btn btn-white btn-sm fw-bold" data-bs-toggle="modal" data-bs-target="#editUserModal">
                                    <i class="bi-pencil-fill me-1"></i> Edit
                                </button>
                            </td>
                        </tr>



                    </tbody>
                    <tfoot>
                        <Pagination links={clinics.links} /></tfoot>
                </table>
            </div>
        </AuthenticatedLayout>
    )
}