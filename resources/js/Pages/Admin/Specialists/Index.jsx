import PageHeader from "@/Components/PageHeader";
import Table from "@/Components/Table";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import AddSpecialist from "./AddSpecialist";
import SpecialistIcon from "@/Components/Icons/SpecialistIcon";
import DeleteConfirmModal from "@/Components/DeleteConfirmModal";

export default function Index() {

    const { specialists } = usePage().props;

    return (

        <AuthenticatedLayout header='Specialists'
            pageTitle={"All Specialists"}
            callToAction={<Link href={route('specialists.create')} className="btn btn-primary" >
                <SpecialistIcon />   Add Specialist
            </Link>}
        >

            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Specialist In</th>
                        <th>Clinic</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        specialists.data.map((specialist, index) => (
                            <tr key={specialist.id}>

                                <td>#{specialist.id}</td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <div className="avatar avatar-soft-primary avatar-circle">
                                            {console.log(specialist.photo)}
                                            {(specialist.photo !== '0' && specialist.photo !== '') ? <img class="avatar-img" src={specialist.photo_url} alt="Image Description" height={42} width={42} /> : <span className="avatar-initials">
                                                {specialist.name.charAt(0)}
                                            </span>}

                                        </div>
                                        <div className="ms-3">

                                            <span class="d-block h5 text-inherit mb-0">{specialist.name}</span>
                                            <span class="d-block fs-5 text-body">{specialist.practise_from}</span>
                                        </div>
                                    </div>


                                </td>
                                <td>
                                    <span class="d-block h5 mb-0">{specialist.phone}</span>
                                    <span class="d-block fs-5">{specialist.email}</span>
                                </td>
                                <td width="30%" className="text-wrap">{specialist.services.map((service) => <> <span class="badge bg-soft-dark text-dark me-2 mb-2">{service.name}</span> </>)}</td>
                                <td>

                                    {specialist.clinics.map((clinic) => (clinic.name))}
                                </td>

                                <td>
                                    <Link href={route('specialists.edit', specialist)} className="btn btn-white btn-sm me-2">  <i className="bi-pencil-fill me-1"></i>  Edit </Link>
                                    <DeleteConfirmModal category="Specialists" processUrl="specialists.destroy" item={specialist} />

                                </td>

                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </AuthenticatedLayout>

    )
}