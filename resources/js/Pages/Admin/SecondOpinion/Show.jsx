import SOBadge from "@/Components/SOBadge";
import DateTimeConverter from "@/Helpers/DateTimeConverter";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";

export default function Show() {
    const { secondopinion } = usePage().props;
    const patient = secondopinion.patient;

    return (
        <AuthenticatedLayout header='Second Opinion'>
            <Head title="2nd Opinion" />

            <div className="d-sm-flex align-items-sm-center mb-3">
                <h1 className="page-header-title">SO #32543</h1>
                <SOBadge status={secondopinion.status} />

                <span className="ms-2 ms-sm-3">
                    <i className="bi-calendar-week"></i> <DateTimeConverter dateTimeString={secondopinion.created_at} />
                </span>
            </div>

            <div className="row">
                <div className="col-lg-8">
                    <div className="card mb-3">
                        <div className="card-body">


                            <h3 className="h3 text-dark">{secondopinion.subject}</h3>
                            <p className="lead" style={{ textAlign: 'justify' }}>
                                {secondopinion.description}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">

                    <div className="card">
                        <div className="card-header"><h4 class="card-header-title">Patient</h4>

                        </div>
                        <div className="card-body">
                            <ul className="list-group list-group-flush list-group-no-gutters">
                                <li className="list-group-item">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="avatar avatar-soft-primary avatar-circle">
                                            <span className="avatar-initials">

                                                {patient.first_name.charAt(0)}
                                            </span>
                                        </div>
                                        <div className="ms-3">
                                            <span class="d-block h5 text-inherit mb-0">{patient.first_name} {patient.last_name}</span>
                                            <span class="d-block fs-5 text-body">User Since</span>
                                        </div>
                                    </div>
                                </li>

                                <li class="list-group-item">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <h5>Contact info</h5>

                                    </div>

                                    <ul class="list-unstyled list-py-2 text-body">
                                        <li><i class="bi-at me-2"></i>{patient.user.email}</li>
                                        <li><i class="bi-phone me-2"></i>{patient.user.phone}</li>
                                    </ul>
                                </li>

                                <li class="list-group-item">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <h5>Address</h5>
                                        <a class="link" href="javascript:;">Edit</a>
                                    </div>

                                    <span class="d-block text-body">
                                        {patient.address_line_1}<br />
                                        {patient.address_line_2}<br />
                                        KW5 8NW, London<br />
                                        UK
                                    </span>

                                </li>

                            </ul>

                        </div>
                    </div>


                </div>

            </div>

        </AuthenticatedLayout>
    )
}