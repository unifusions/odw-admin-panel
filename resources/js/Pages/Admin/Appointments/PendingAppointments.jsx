import { Link } from "@inertiajs/react";

export default function PendingAppointments({ pendingEvents }) {
   
    return (
        <>
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                Awaiting Confirmation for<span class="">
                    <Link href={route('appointments.pending')}  className="fw-semibold link link-dark" >
                        {pendingEvents}    Pending Appointments
                    </Link></span>

            </div>

        </>
    )
}