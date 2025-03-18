
import { useEffect, useRef, forwardRef, useImperativeHandle } from "react";

const ServiceModal = forwardRef(({ id, activeModal, onClose, title, children }, ref) => {
    const modalRef = useRef(null);
    const modalInstance = useRef(null); // Store Bootstrap modal instance

    

    useEffect(() => {
        if (modalRef.current) {
            modalInstance.current = new bootstrap.Modal(modalRef.current, { keyboard: false });
        }
    }, []);

    useEffect(() => {
        if (modalInstance.current) {
            if (activeModal === id) {
                modalInstance.current.show();
            } else {
                modalInstance.current.hide();
            }
        }
    }, [activeModal]);

    useEffect(() => {
        const handleHide = () => onClose();
        const modalElement = modalRef.current;
        if (modalElement) {
            modalElement.addEventListener("hidden.bs.modal", handleHide);
        }
        return () => {
            if (modalElement) {
                modalElement.removeEventListener("hidden.bs.modal", handleHide);
                modalInstance.current?.dispose(); // Clean up Bootstrap modal
            }
        };
    }, []);


    useImperativeHandle(ref, () => ({
        hideModal: () => {
            if (modalInstance.current) {
                modalInstance.current.hide();
            }
        },
    }));

    return (
        <div className="modal fade" ref={modalRef} tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        {children}
                     
                    </div>
                </div>
            </div>
        </div>
    );
});

export default ServiceModal;