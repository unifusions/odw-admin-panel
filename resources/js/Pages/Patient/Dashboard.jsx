import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PatientAuthenticatedLayout from "@/Layouts/PatientAuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Information from "./Profile/Information";

export default function Dashboard() {

    return (
        <>
            <PatientAuthenticatedLayout header='Dashboard'>

                <Head title='Welcome' />  Patient Dashboard
                <Information />
            </PatientAuthenticatedLayout>
        </>
    )
}