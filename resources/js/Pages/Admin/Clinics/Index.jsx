import Breadcrumbs from "@/Components/Breadcrumbs";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import AddClinic from "./AddClinic";
import PageHeader from "@/Components/PageHeader";
import { useToast } from "@/Components/ToastContext";
import Pagination from "@/Components/Pagination";
import ListBranches from "./ListBranches";

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
                            <th>Branches</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            clinics.data.map((clinic) =>
                                <tr key={clinic.id}>
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

                                <td>{clinic.branches.length}</td>

                                    <td>
                                        <Link href={route('clinics.edit', clinic)} className="btn btn-white btn-sm fw-bold">   <i class="bi-pencil-fill me-1"></i> Edit</Link></td>
                                </tr>
                            )}
                     





                    </tbody>
                    <tfoot>
                        <Pagination links={clinics.links} /></tfoot>
                </table>
            </div>
        </AuthenticatedLayout >
    )
}