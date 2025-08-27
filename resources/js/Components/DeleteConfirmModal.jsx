import { router, useForm } from "@inertiajs/react"
import { useEffect, useRef, useState } from "react";

export default function DeleteConfirmModal(
    { item, category, processUrl }
) {
    const modalRef = useRef(null);
    const modalInstance = useRef(null);
    const [processing, setProcessing] = useState(false);
    const toggleModal = () => {
        setProcessing(false);
        if (modalInstance.current) {
            if (modalRef.current.classList.contains("show")) {
                modalInstance.current.hide(); // Properly closes & cleans up backdrop
            } else {
                modalInstance.current.show(); // Opens
            }
        }
    }

    const cleanupBackdrop = () => {
        // Remove any leftover backdrops and restore body styles
        document.querySelectorAll('.modal-backdrop').forEach(el => el.remove());
        document.body.classList.remove('modal-open');
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
    };
    // const handleDelete = (e) => {
    //     e.preventDefault();
    //     setProcessing(true);
    //     router.delete(route(processUrl, item), {
    //         onSuccess: () => {
    //             modalInstance.current?.hide(); // ensure it closes
    //             setProcessing(false);
    //         }
    //     },
    //     )
    // }

    // useEffect(() => {
    //     // Initialize the Bootstrap modal when the component mounts
    //     if (modalRef.current) {
    //         modalInstance.current = new bootstrap.Modal(modalRef.current);
    //     }

    //     // Cleanup function to destroy the modal instance when the component unmounts
    //     return () => {
    //         if (modalInstance.current) {
    //             modalInstance.current.dispose();
    //         }
    //     };
    // }, []); // Empty dependency array ensures this runs only once after the initial render
    useEffect(() => {
        if (modalRef.current) {
            modalInstance.current = new bootstrap.Modal(modalRef.current, {
                backdrop: true,
                keyboard: true,
            });
        }

        return () => {
            try {
                modalInstance.current?.dispose();
            } catch (e) { /* ignore */ }
            cleanupBackdrop();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const openModal = () => {
        modalInstance.current?.show();
    };

    const closeModal = () => {
        modalInstance.current?.hide();
        cleanupBackdrop();
    };

    const handleDelete = (e) => {
        e.preventDefault();
        setProcessing(true);

        // Hide modal first to make sure backdrop & body class are removed
        try {
            modalInstance.current?.hide();
        } catch (err) {
            // ignore
        }
        cleanupBackdrop();

        // Then call Inertia delete
        router.delete(route(processUrl, item), {
            onSuccess: () => {
                setProcessing(false);
                cleanupBackdrop();
            },
            onError: () => {
                setProcessing(false);
                // optionally reopen or show an error toast
            },
        });
    };


    return (
        <>
            <button className="btn btn-outline-danger btn-sm" onClick={openModal}>
                <i className="bi-trash"></i> Delete
            </button>

            <div className="modal fade modal-lg"  id={`deleteModal-${item.id}`}

                ref={modalRef}
                tabIndex="-1"
                aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                Delete {category} ?
                            </h5>
                        </div>
                        <div className="modal-body">
                            Are you sure, you want to delete <b> {item.name} </b>?



                        </div>
                        <div className="modal-footer">
                            <div className="text-end">
                                <button type="button" className="btn btn-white me-3" onClick={closeModal}>Close</button>
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