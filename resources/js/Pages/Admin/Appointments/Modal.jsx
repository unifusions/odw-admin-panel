import { useEffect, useRef } from "react";

export default function Modal({ isOpen, onClose, title, children, onConfirm, confirmText = "Confirm", confirmClass = "btn-primary" }) {
    const modalRef = useRef(null);
    const bsModal = useRef(null);

    useEffect(() => {
        if (modalRef.current) {
            bsModal.current = new bootstrap.Modal(modalRef.current);
        }
    }, []);

    useEffect(() => {
        if (isOpen) {
            bsModal.current?.show();
        } else {
            bsModal.current?.hide();
        }
    }, [isOpen]);

    return (
        <div className="modal fade" tabIndex="-1" ref={modalRef}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">{children}</div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>
                            Close
                        </button>
                        {onConfirm && (
                            <button type="button" className={`btn ${confirmClass}`} onClick={onConfirm}>
                                {confirmText}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}