import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import ClinicCard from "./ClinicCard";

export default function Index({ branches }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Appointments
                </h2>
            }>
         
            <div className="row g4">
                {
                    branches.data.map((branch) => (
                        <ClinicCard clinicbranch={branch} />)
                    )
                }

            </div>


        </AuthenticatedLayout>
    )

}