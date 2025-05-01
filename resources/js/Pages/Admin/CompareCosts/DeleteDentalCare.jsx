import { router, useForm } from "@inertiajs/react"
import { useEffect, useRef, useState } from "react";

export default function DeleteDentalCare({ dentalcare }) {

    const modalRef = useRef(null);
    const modalInstance = useRef(null);
    const [processing, setProcessing] = useState(false);
    const toggleModal = () => {
        // const modal = bootstrap.Modal.getInstance(modalRef.current)
        setProcessing(false);
        modalInstance.current.toggle()
    }


    const handleDelete = (e) => {
        e.preventDefault();
        setProcessing(true);
        router.delete(route('compare-costs.destroy', dentalcare), {
            onSuccess: toggleModal // Close the modal
        },
        )
    }

    useEffect(() => {
        // Initialize the Bootstrap modal when the component mounts
        if (modalRef.current) {
            modalInstance.current = new bootstrap.Modal(modalRef.current);
        }

        // Cleanup function to destroy the modal instance when the component unmounts
        return () => {
            if (modalInstance.current) {
                modalInstance.current.dispose();
            }
        };
    }, []); // Empty dependency array ensures this runs only once after the initial render


    return (
        <>
            <button className="btn btn-outline-danger btn-sm" onClick={toggleModal}>
                <i className="bi-trash"></i> Delete
            </button>

            <div className="modal fade modal-lg" ref={modalRef}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                Add Dental Care
                            </h5>
                        </div>
                        <div className="modal-body">
                            Are you sure, you want to delete <b> {dentalcare.code} </b>?



                        </div>
                        <div className="modal-footer">
                            <div className="text-end">
                                <button type="button" className="btn btn-white me-3" onClick={toggleModal}>Close</button>
                                <button type="button" className="btn btn-danger" onClick={handleDelete} disabled={processing}>{processing ? <div className="spinner-border spinner-border-sm" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div> : 'Delete'} </button>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}