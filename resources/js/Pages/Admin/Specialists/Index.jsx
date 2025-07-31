import PageHeader from "@/Components/PageHeader";
import Table from "@/Components/Table";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import AddSpecialist from "./AddSpecialist";
import SpecialistIcon from "@/Components/Icons/SpecialistIcon";

export default function Index() {

    const { specialists } = usePage().props;
    
    return (

        <AuthenticatedLayout header='Specialists'>
            <PageHeader>
            <Link href={route('specialists.create')} className="btn btn-primary" >
             <SpecialistIcon/>   Add Specialist
            </Link>
            </PageHeader>
            <Head title="Specialists" />
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Specialist In</th>
                        <th>Clinic</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        specialists.data.map((specialist, index) => {
                            <tr key={specialist.id}>
                                <td>#{specialist.id}</td>
                                <td>

                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
        </AuthenticatedLayout>

    )
}