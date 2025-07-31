import PageHeader from "@/Components/PageHeader";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { Head, usePage } from "@inertiajs/react"
import AddDentist from "./AddDentist";

export default function Index() {

    const { alldentists } = usePage().props;
    const dentists = alldentists.data;
    return (
        < AuthenticatedLayout
            header='Dentists'

        >
            <PageHeader>
                <AddDentist />
            </PageHeader>
            <Head title="Dentists" />

            <div class="table-responsive datatable-custom">
                <table class="js-datatable table table-borderless table-thead-bordered table-nowrap table-align-middle card-table"
                >
                    <thead class="thead-light">
                        <tr>
                            <th>ID</th>

                            <th>Name</th>
                            <th>Contact</th>
                            <th>Services Offered</th>
                            <th>Clinic/Branch</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            dentists.map((dentist, index) => (
                                <tr key={index}>
                                    <td>#{dentist.id}</td>

                                    <td>
                                        <a href="#!" className="d-flex align-items-center">
                                            <div className="avatar avatar-soft-primary avatar-circle">
                                                <span className="avatar-initials">
                                                    {dentist.name.charAt(0)}
                                                </span>
                                            </div>
                                            <div className="ms-3">
                                                <span class="d-block h5 text-inherit mb-0">{dentist.name}</span>
                                                <span class="d-block fs-5 text-body">{dentist.practise_from}</span>
                                            </div>
                                        </a>

                                    </td>
                                    <td>
                                        <span class="d-block h5 mb-0">{dentist.phone}</span>
                                        <span class="d-block fs-5">{dentist.email}</span>
                                    </td>
                                    <td width="30%" className="text-wrap">{dentist.services.map((service) => <> <span class="badge bg-soft-dark text-dark me-2 mb-2">{service.name}</span> </>)}</td>
                                    <td></td>

                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>

        </AuthenticatedLayout >
    )
}