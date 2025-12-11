export default function PatientInfo({ patient }) {
    return (
        <>
            <div className="card">
                <div className="card-header"><h4 class="card-header-title">Patient</h4>

                </div>
                <div className="card-body">
                    <ul className="list-group list-group-flush list-group-no-gutters">
                        <li className="list-group-item">
                            <div className="d-flex align-items-center mb-3">
                                <div className="avatar avatar-soft-primary avatar-circle">
                                    <span className="avatar-initials">

                                        {patient?.first_name.charAt(0)}
                                    </span>
                                </div>
                                <div className="ms-3">
                                    <span class="d-block h5 text-inherit mb-0">{patient?.first_name || ''} {patient?.last_name || ''}</span>
                                    <span class="d-block fs-5 text-body">User Since</span>
                                </div>
                            </div>
                        </li>

                        <li class="list-group-item">
                            <div class="d-flex justify-content-between align-items-center">
                                <h5>Contact info</h5>

                            </div>

                            <ul class="list-unstyled list-py-2 text-body">
                                <li><i class="bi-at me-2"></i>{patient?.user?.email}</li>
                                <li><i class="bi-phone me-2"></i>{patient?.user?.phone}</li>
                            </ul>
                        </li>

                        {/* <li class="list-group-item">
                            <div class="d-flex justify-content-between align-items-center">
                                <h5>Address</h5>

                            </div>

                            <span class="d-block text-body">
                                {patient.address_line_1}<br />
                                {patient.address_line_2}<br />

                            </span>

                        </li> */}

                    </ul>

                </div>
            </div>

        </>
    )
}