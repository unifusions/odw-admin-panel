
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { Head } from "@inertiajs/react"

export default function Index({ patients }) {
    const calculateAge = (dateString) => {
        if (!dateString) {
            return 0; // Or any other appropriate default value or error handling
        }
        const today = new Date();
        const birthDate = new Date(dateString);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    return (

        < AuthenticatedLayout
            header='Patients'

        >
            <Head title="Registered Patients" />

            {console.log(patients)}
            <div class="table-responsive datatable-custom">
                <table class="js-datatable table table-borderless table-thead-bordered table-nowrap table-align-middle card-table"
                    data-hs-datatables-options='{
                 "order": []
               }'>
                    <thead class="thead-light">
                        <tr>
                            <th>ID</th>
                            <th>Registration Date</th>
                            <th>Name</th>
                            <th>Contact</th>
                            <th>Services Availed</th>
                            <th>Clinic</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            patients.data.map((patient, index) => (
                                <tr>
                                    <td>#{patient.id}</td>
                                    <td>{patient.created_at}</td>
                                    <td>
                                        <a href="#!" className="d-flex align-items-center">
                                            <div className="avatar avatar-soft-primary avatar-circle">
                                                <span className="avatar-initials">
                                                    {patient.first_name.charAt(0)}
                                                </span>
                                            </div>
                                            <div className="ms-3">
                                                <span class="d-block h5 text-inherit mb-0">{patient.first_name}</span>
                                                <span class="d-block fs-5 text-body">{calculateAge(patient.dob)} / {patient.sex}</span>
                                            </div>
                                        </a>

                                    </td>
                                    <td>
                                        <span class="d-block h5 mb-0">{patient.phone}</span>
                                        <span class="d-block fs-5">{patient.email}</span>
                                    </td>
                                    <td>{patient.services}</td>
                                    <td>{patient.clinic}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>

        </AuthenticatedLayout >
    )
}