import Breadcrumbs from "@/Components/Breadcrumbs";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import AddClinic from "./AddClinic";
import PageHeader from "@/Components/PageHeader";
import { useToast } from "@/Components/ToastContext";
import Pagination from "@/Components/Pagination";

export default function Index() {

    const { flash, clinics } = usePage().props;
    const showToast = useToast();


    const { delete: destroy } = useForm();

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
                                    <td>
                                        <a class="d-flex align-items-center" href="#">
                                            <div class="avatar avatar-soft-primary avatar-circle">
                                                <span class="avatar-initials">{Array.from(clinic.name)[0]}</span>
                                            </div>
                                            <div class="ms-3">
                                                <span class="d-block h5 text-inherit mb-0">{clinic.name}
                                                    {/* <i class="bi-patch-check-fill text-primary" data-toggle="tooltip" data-bs-placement="top" title="Top endorsed"></i> */}
                                                </span>
                                                <span class="d-block fs-5 text-body"> {clinic.zip_code} </span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>{clinic.address_line_1} <br />{clinic.address_line_2}</td>
                                    <td>
                                        <span class="d-block h5 mb-0"><i class="bi bi-telephone me-3"></i>
                                            {clinic.phone}</span>
                                        <span class="d-block fs-5"><i class="bi bi-envelope me-3"></i>  {clinic.email}</span>
                                        {console.log(clinic.schedules)}
                                    </td>



                                    <td>

                             

                                        <Link href={route('clinics.edit', clinic)} className="btn btn-outline-info btn-sm btn-sm me-3">   <i class="bi-pencil-fill me-1"></i> Edit</Link>
                                        <button onClick={() => destroy(route('clinics.destroy', clinic), { preserveScroll: true })} className="btn btn-outline-danger btn-sm ">   <i class="bi-pencil-fill me-1"></i> Delete</button></td>
                                </tr>

                            )}






                    </tbody>
                    <tfoot>
                        <Pagination links={clinics.links} /></tfoot>
                </table>
            </div >
        </AuthenticatedLayout >
    )
}