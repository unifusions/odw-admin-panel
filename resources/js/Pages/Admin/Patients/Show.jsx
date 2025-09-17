import Card from "@/Components/Card";
import { Column, Row } from "@/Components/Components";
import PageHeader from "@/Components/PageHeader";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Show({ patient }) {
    return (
        <AuthenticatedLayout
            header="Patients"
            pageTitle={patient.last_name + ', ' + patient.first_name}
        >

            <Row>
                <Column lg={4}>
                    <Card>
                        <div class="d-flex align-items-center">

                            <div class="flex-shrink-0">


                                {patient.avatar_url ?
                                    <div class="avatar avatar-lg avatar-circle"> <img class="avatar-img" src={patient.avatar_url} alt="" />
                                    </div> : <>

                                        <div className="avatar avatar-soft-primary avatar-circle">
                                            <span className="avatar-initials">

                                                {patient.first_name.charAt(0)}
                                            </span>
                                        </div>

                                    </>}

                            </div>

                            <div class="flex-grow-1 mx-3">
                                <div class="d-flex mb-1">
                                    <h3 class="mb-0 me-3">{patient.first_name} {patient.last_name}</h3>



                                </div>

                                <span class="fs-6">User Since {patient.created_at}</span>
                            </div>


                        </div>
                    </Card>

                    <Card title="Contact Info">
                        <ul class="list-unstyled list-py-2 text-body">
                            <li><i class="bi-at me-2"></i>{patient?.user?.email}</li>
                            <li><i class="bi-phone me-2"></i>{patient?.user?.phone}</li>
                            {/* <li><i class="bi-phone me-2"></i>{patient?.user?.phone}</li> */}
                        </ul>
                    </Card>
                </Column>

                <Column lg={8}>



                    <Card title={"Appointments"}
                        callToAction={<ul class="nav nav-segment nav-fill">
                            <li class="nav-item">
                                <a class="nav-link active" href="#all-appointments" data-bs-toggle="tab" data-bs-target="#all-appointments">All</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " data-bs-toggle="tab" data-bs-target="#pending" tabindex="-1" href="#" >Pending</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " data-bs-toggle="tab" data-bs-target="#confirmed" href="#" tabindex="-1" aria-disabled="true">Confirmed</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " data-bs-toggle="tab" data-bs-target="#completed" href="#" tabindex="-1" aria-disabled="true">Completed</a>
                            </li>
                        </ul>}
                    >




                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active" id="all-appointments" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">  <div>
                                {JSON.stringify(patient?.appointments)}
                            </div></div>
                            <div class="tab-pane fade" id="pending" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">pending</div>
                            <div class="tab-pane fade" id="confirmed" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">...</div>
                            <div class="tab-pane fade" id="completed" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">...</div>
                        </div>


                    </Card>

                    <Card title={"Second Opinions"}
                        callToAction={<ul class="nav nav-segment nav-fill">
                            <li class="nav-item">
                                <a class="nav-link active" href="#all-so" data-bs-toggle="tab" data-bs-target="#all-so"> All </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " data-bs-toggle="tab" data-bs-target="#pending-so" tabindex="-1" href="#" >Pending</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " data-bs-toggle="tab" data-bs-target="#confirmed-so" href="#" tabindex="-1" aria-disabled="true">Confirmed</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " data-bs-toggle="tab" data-bs-target="#completed-so" href="#" tabindex="-1" aria-disabled="true">Completed</a>
                            </li>
                        </ul>}
                    >




                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active" id="all-so" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                                {JSON.stringify(patient?.secondopinions)}
                            </div>
                            <div class="tab-pane fade" id="pending-so" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">pending</div>
                            <div class="tab-pane fade" id="confirmed-so" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">...</div>
                            <div class="tab-pane fade" id="completed-so" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">...</div>
                        </div>


                    </Card>
                    <Card title={"Estimates"}
                        callToAction={<ul class="nav nav-segment nav-fill">
                            <li class="nav-item">
                                <a class="nav-link active" href="#all-appointments" data-bs-toggle="tab" data-bs-target="#all-estimates">All</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " data-bs-toggle="tab" data-bs-target="#pending-estimates" tabindex="-1" href="#" >Pending</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " data-bs-toggle="tab" data-bs-target="#confirmed-estimates" href="#" tabindex="-1" aria-disabled="true">Confirmed</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " data-bs-toggle="tab" data-bs-target="#completed-estimates" href="#" tabindex="-1" aria-disabled="true">Completed</a>
                            </li>
                        </ul>}
                    >




                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active" id="all-appointments" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">

                            {JSON.stringify(patient?.estimates)}

                            </div>
                            <div class="tab-pane fade" id="pending" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">pending</div>
                            <div class="tab-pane fade" id="confirmed" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">...</div>
                            <div class="tab-pane fade" id="completed" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">...</div>
                        </div>


                    </Card>

                </Column>


            </Row>



        </AuthenticatedLayout>

    )
}