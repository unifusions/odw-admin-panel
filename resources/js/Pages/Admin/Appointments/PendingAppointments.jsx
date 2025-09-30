import { Link, usePage } from "@inertiajs/react";

export default function PendingAppointments({ pendingEvents }) {
    const { auth } = usePage().props;
    const role = auth.user.role; // super_admin, clinic_admin, clinic_user

    let routeName = 'appointments.pending';
    if (role === 'clinic_admin') routeName = 'clinic.appointments.pending';
    if (role === 'clinic_user') routeName = 'clinic.user.appointments.pending';
    return (
        <>
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                Awaiting Confirmation for<span class="">
                    <Link href={route(routeName)} className="fw-semibold link link-dark" >
                        {pendingEvents}    Pending Appointments
                    </Link></span>

            </div>

        </>
    )
}