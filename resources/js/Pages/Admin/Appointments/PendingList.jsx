import Breadcrumbs from "@/Components/Breadcrumbs";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function PendingList({ appointments }) {

    const renderItem = (item) => {
        return (
            <>
            {console.log(item)}
                <div className="card mb-3">
                    <div class="card-header card-header-content-between border-bottom">
                        <h4 class="card-header-title">Appointment #<span className="text-body">334</span> </h4>


                    </div>


                    <div class="card-body">
                        <div class="row">
                            <div class="col-md mb-4 mb-md-0">
                                <div class="mb-4">
                                    <span class="card-subtitle text-lowercase">{item.patient.email}</span>
                                    <h3>{item.patient.last_name},{item.patient.first_name}</h3>
                                </div>

                                <div>
                                    <span class="card-subtitle">Total per year</span>
                                    <h1 class="text-primary">$264 USD</h1>
                                </div>
                            </div>


                            <div class="col-md-auto">
                                <div class="d-grid d-sm-flex gap-3">
                                    <a class="btn btn-white" href="#">Cancel Appointment</a>
                                    <button type="button" class="btn btn-primary w-100 w-sm-auto" data-bs-toggle="modal" data-bs-target="#accountUpdatePlanModal">Confirm Appointment</button>
                                </div>
                            </div>

                        </div>

                    </div>


                </div>
            </>
        )
    }
    return (
        <>
            <AuthenticatedLayout
                header='Pending Appointments'>

                <Head title="Appointments" />
                <Breadcrumbs />




                <div className="container">
                    {appointments.map((item) => renderItem(item))}

                </div>
            </AuthenticatedLayout >


        </>
    )
}