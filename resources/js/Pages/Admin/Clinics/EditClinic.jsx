

import { Head, usePage } from "@inertiajs/react";
import ClinicLayout from "./ClinicLayout";

export default function EditClinic() {

    const { clinic, branches, users, services } = usePage().props;
    return (

        <ClinicLayout clinic={clinic}>
            <Head title={`Edit ${clinic.name}`} />
            <div class="row col-lg-divider">
                <div class="col-lg-4">

                    <div class="text-center">
                        <img class="avatar avatar-xl avatar-4x3 mb-4" src="/images/clinic/branches.png" />
                        <span class="text-cap text-body">Number of Branches</span>
                        <span class="d-block display-4 text-dark mb-2">{branches}</span>

                        {/* <div class="row col-divider">
                            <div class="col text-end">
                                <span class="d-block fw-semibold text-success">
                                    <i class="bi-graph-up"></i> 12%
                                </span>
                                <span class="d-block">change</span>
                            </div>


                            <div class="col text-start">
                                <span class="d-block fw-semibold text-dark">25</span>
                                <span class="d-block">last week</span>
                            </div>

                        </div> */}

                    </div>

                </div>

                <div class="col-lg-4">

                    <div class="text-center">
                        <img class="avatar avatar-xl avatar-4x3 mb-4" src="/images/clinic/users.png" />
                        <span class="text-cap text-body">Users</span>
                        <span class="d-block display-4 text-dark mb-2">{users}</span>

                        {/* <div class="row col-divider">
                            <div class="col text-end">
                                <span class="d-block fw-semibold text-success">
                                    <i class="bi-graph-up"></i> 5.6%
                                </span>
                                <span class="d-block">change</span>
                            </div>


                            <div class="col text-start">
                                <span class="d-block fw-semibold text-dark">$582.00</span>
                                <span class="d-block">last week</span>
                            </div>

                        </div> */}

                    </div>

                </div>

                <div class="col-lg-4">

                    <div class="text-center">
                        <img class="avatar avatar-xl avatar-4x3 mb-4" src="/images/clinic/services.png" />
                        <span class="text-cap text-body">Available Services</span>
                        <span class="d-block display-4 text-dark mb-2">{services}</span>

                        {/* <div class="row col-divider">
                            <div class="col text-end">
                                <span class="d-block fw-semibold text-danger">
                                    <i class="bi-graph-down"></i> 2.3%
                                </span>
                                <span class="d-block">change</span>
                            </div>


                            <div class="col text-start">
                                <span class="d-block fw-semibold text-dark">7</span>
                                <span class="d-block">last week</span>
                            </div>

                        </div> */}

                    </div>

                </div>
            </div>

        </ClinicLayout>







    )
}