import Breadcrumbs from "@/Components/Breadcrumbs";
import SOBadge from "@/Components/SOBadge";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { format, parse, parseISO } from "date-fns";
import { useRef, useState } from "react";
import Modal from "./Modal";

export default function PendingList({ appointments }) {

    const [selectedAppointment, setSelectedAppointment] = useState(null);
    const confirmModalRef = useRef(null);
    const rescheduleModalRef = useRef(null);
    const cancelModalRef = useRef(null);
    const { data, put, processing, errors, reset } = useForm();
    const [modalType, setModalType] = useState(null);


    const { auth } = usePage().props;
    const role = auth.user.role;

    const openConfirmModal = (item) => {
        setSelectedAppointment(item);
        const modal = new bootstrap.Modal(confirmModalRef.current);
        modal.show();
    };

    const openCancelModal = (item) => {
        setSelectedAppointment(item);
        const modal = new bootstrap.Modal(cancelModalRef.current);
        modal.show();
    }

    const openRescheduleModal = (item) => {
        setSelectedAppointment(item);
        const modal = new bootstrap.Modal(rescheduleModalRef.current);
        modal.show();
    };

    const closeConfirmModal = () => {
        const modal = bootstrap.Modal.getInstance(confirmModalRef.current);
        modal?.hide();
    }

    const handleCancel = () => {
        if (!selectedAppointment) return;
        if (role === 'clinic_admin') routeName = 'clinic.appointments.cancel';
        if (role === 'clinic_user') routeName = 'clinic.user.appointments.cancel';
        put(
            route(routeName, { appointment: selectedAppointment }),

            {
                onFinish: () => { closeConfirmModal() },
            }
        );
    };

    const handleConfirm = () => {
        if (!selectedAppointment) return;

        let routeName = 'appointments.confirm';

        if (role === 'clinic_admin') routeName = 'clinic.appointments.confirm';
        if (role === 'clinic_user') routeName = 'clinic.user.appointments.confirm';
        put(
            route(routeName, { appointment: selectedAppointment }),

            {
                onFinish: () => { closeConfirmModal() },
            }
        );
    };

    const renderItem = (item) => {
        return (
            <>

                <div className="card mb-3">
                    <div class="card-header card-header-content-between border-bottom">
                        <h4 class="card-header-title">
                            Appointment #<span className="text-body me-3">{item.id}</span>
                            <span class={`badge ${item?.provider?.type === 'Dentist' ? 'bg-soft-primary text-primary' :
                                'bg-soft-info text-info'}`}>{item?.provider?.type}</span>

                        </h4>

                    </div>


                    <div class="card-body">
                        <div class="row">
                            <div class="col-md mb-4 mb-md-0">
                                <div class="mb-4">
                                    <span class="card-subtitle text-lowercase"></span>
                                    <h3>{item.patient && (<>{item.patient?.last_name}, {item.patient?.first_name} </>)}</h3>
                                </div>

                                <div>
                                    <span class="card-subtitle">Request Date/Time</span>
                                    <h1 class="text-primary"> {format(new Date(item?.appointment_date), 'dd-MMM-yyyy')} | {format(parse(item?.time_slot, 'HH:mm', new Date()), 'h:mm a')}</h1>
                                    {/* <h1 class="text-primary"> {format(parse(item?.appointment_date), 'dd-MMM-yyyy')} | {format(parse(item?.time_slot, 'HH:mm:ss', new Date()), 'h:mm a')}</h1> */}


                                </div>
                            </div>


                            <div class="col-md-auto">
                                <div class="d-grid d-sm-flex gap-3">
                                    {/* <a class="btn btn-white" href="#" onClick={() => openCancelModal(item)}>Cancel Appointment</a> */}

                                    <button className="btn btn-white" onClick={() => { setSelectedAppointment(item); setModalType("cancel"); }}>
                                        Cancel Appointment
                                    </button>

                                    {/* <button type="button" class="btn btn-primary w-100 w-sm-auto" data-bs-toggle="modal" data-bs-target="#" onClick={() => openConfirmModal(item)}>Confirm Appointment</button> */}


                                    <button className="btn btn-primary" onClick={() => { setSelectedAppointment(item); setModalType("confirm"); }}>
                                        Confirm Appointment
                                    </button>

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





                <div className="container">
                    {appointments.map((item) => renderItem(item))}

                </div>



                <Modal
                    isOpen={modalType === "confirm"}
                    onClose={() => setModalType(null)}
                    title="Confirm Appointment"
                    onConfirm={handleConfirm}
                    confirmText="Confirm"
                    confirmClass="btn-success"
                >
                    Are you sure you want to confirm appointment #{selectedAppointment?.id} for{" "}
                    {selectedAppointment?.patient?.first_name} {selectedAppointment?.patient?.last_name}?
                </Modal>

                <Modal
                    isOpen={modalType === "cancel"}
                    onClose={() => setModalType(null)}
                    title="Cancel Appointment"
                    onConfirm={handleCancel}
                    confirmText="Cancel Appointment"
                    confirmClass="btn-danger"
                >
                    Are you sure you want to cancel appointment #{selectedAppointment?.id} for{" "}
                    {selectedAppointment?.patient?.first_name} {selectedAppointment?.patient?.last_name}?
                </Modal>

                {/* Confirm Modal */}
                <div
                    className="modal fade"
                    id="confirmModal"
                    tabIndex="-1"
                    aria-labelledby="confirmModalLabel"
                    aria-hidden="true"
                    ref={confirmModalRef}
                >
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="confirmModalLabel">Confirm Appointment</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div className="modal-body">
                                Are you sure you want to confirm appointment #
                                {selectedAppointment?.id} for{" "}
                                {selectedAppointment?.patient?.first_name}{" "}
                                {selectedAppointment?.patient?.last_name}?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                    Close
                                </button>
                                <button type="button" className="btn btn-success" onClick={handleConfirm}>
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Cancel Modal */}
                <div
                    className="modal fade"
                    id="confirmModal"
                    tabIndex="-1"
                    aria-labelledby="confirmModalLabel"
                    aria-hidden="true"
                    ref={cancelModalRef}
                >
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="confirmModalLabel">Cancel Appointment</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div className="modal-body">
                                Are you sure you want to cancel appointment #
                                {selectedAppointment?.id} for{" "}
                                {selectedAppointment?.patient?.first_name}{" "}
                                {selectedAppointment?.patient?.last_name}?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                    Close
                                </button>
                                <button type="button" className="btn btn-danger" onClick={handleCancel}>
                                    Cancel Appointment
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Reschedule Modal */}
                <div
                    className="modal fade"
                    id="rescheduleModal"
                    tabIndex="-1"
                    aria-labelledby="rescheduleModalLabel"
                    aria-hidden="true"
                    ref={rescheduleModalRef}

                >
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="rescheduleModalLabel">Reschedule Appointment</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div className="modal-body">
                                <p>
                                    Select a new date and time for appointment #
                                    {selectedAppointment?.id} with{" "}
                                    {selectedAppointment?.patient?.first_name}{" "}
                                    {selectedAppointment?.patient?.last_name}.
                                </p>
                                {/* Example input (can be enhanced with a datetime picker) */}
                                <input type="date" className="form-control mb-2" />
                                <input type="time" className="form-control" />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                    Cancel
                                </button>
                                <button type="button" className="btn btn-primary">
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </AuthenticatedLayout >


        </>
    )
}