import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function BookAppointment({ clinicId, branchId, doctorId }) {
    <AuthenticatedLayout
        header={
            <h2 className="text-xl font-semibold leading-tight text-gray-800">
                Book Appointment
            </h2>
        }>

    </AuthenticatedLayout>
}