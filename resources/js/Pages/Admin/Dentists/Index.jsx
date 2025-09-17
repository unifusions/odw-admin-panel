import PageHeader from "@/Components/PageHeader";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { Head, Link, usePage } from "@inertiajs/react"
import AddDentist from "./AddDentist";
import DentistIcon from "@/Components/Icons/DentistIcon";
import Pagination from "@/Components/Pagination";
import DeleteConfirmModal from "@/Components/DeleteConfirmModal";

export default function Index() {

    const { alldentists } = usePage().props;
    const dentists = alldentists.data;
    return (
        < AuthenticatedLayout
            header='Dentists'
            callToAction={
                <Link className="btn btn-primary" href={route('dentists.create')} >

                    <DentistIcon />
                    Add Dentist
                </Link>
            }
        >
            
            <Head title="Dentists" />

            <div class="table-responsive datatable-custom">
                <table class="table table-borderless table-thead-bordered table-nowrap table-align-middle "
                >
                    <thead class="thead-light">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Contact</th>
                            <th>Services Offered</th>
                            <th>Clinic</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            dentists.map((dentist, index) => (
                                <tr key={index}>
                                    <td>#{dentist.id}</td>

                                    <td>
                                        <div className="d-flex align-items-center">
                                            <div className="avatar avatar-soft-primary avatar-circle">
                                                {dentist.photo !== '' ? <img class="avatar-img" src={dentist.photo_url} alt="Image Description" height={42} width={42} /> : <span className="avatar-initials">
                                                    {dentist.name.charAt(0)}
                                                </span>}

                                            </div>
                                            <div className="ms-3">
                                                <span class="d-block h5 text-inherit mb-0">{dentist.name}</span>
                                                <span class="d-block fs-5 text-body">{dentist.practise_from}</span>
                                            </div>
                                        </div>

                                    </td>
                                    <td>
                                        <span class="d-block h5 mb-0">{dentist.phone}</span>
                                        <span class="d-block fs-5">{dentist.email}</span>
                                    </td>
                                    <td width="30%" className="text-wrap">{dentist.services.map((service) => <> <span class="badge bg-soft-dark text-dark me-2 mb-2">{service.name}</span> </>)}</td>
                                    <td>
                                        {dentist.clinics.map((clinic) => clinic.name)}
                                    </td>
                                    <td>
                                        <Link href={route('dentists.edit', dentist)} className="btn btn-white btn-sm me-2">  <i className="bi-pencil-fill me-1"></i>  Edit </Link>
                                        <DeleteConfirmModal category="Dentists" processUrl="dentists.destroy" item={dentist} />
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
            <Pagination links={alldentists.links} />
        </AuthenticatedLayout >
    )
}