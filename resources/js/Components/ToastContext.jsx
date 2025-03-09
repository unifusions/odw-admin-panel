import { Link, useForm, usePage } from '@inertiajs/react';
import React, { createContext, useState, useContext, useRef, useEffect } from 'react';


const ToastContext = createContext();


export const ToastProvider = ({ children }) => {

      const [toastMessage, setToastMessage] = useState(null);
    const toastRef = useRef(null);
    const toastInstanceRef = useRef(null);

    useEffect(() => {
        if (toastMessage) {
            const toastElement = toastRef.current;

            if (toastInstanceRef.current) {
                toastInstanceRef.current.dispose();
                toastInstanceRef.current = null;
            }

            const newToast = new bootstrap.Toast(toastElement);
            toastInstanceRef.current = newToast;

            newToast.show();
            setToastMessage(null); // Reset message after showing
        }
    }, [toastMessage]);

    const showToast = (message) => {
        setToastMessage(message);
    };

    return (
        <ToastContext.Provider value={showToast}>
            {children}

            <div id="liveToast" ref={toastRef} class="position-fixed toast hide" role="alert" aria-live="assertive" aria-atomic="true"
                style={{
                    top: '20px',
                    right: '20px', zIndex: 1000
                }}>
                <div class="toast-header">
                    <div class="d-flex align-items-center flex-grow-1">
                        <div class="flex-shrink-0">
                            <img class="avatar avatar-sm avatar-circle" src="../assets/img/160x160/img4.jpg" alt="Image description" />
                        </div>
                        <div class="flex-grow-1 ms-3">
                            <h5 class="mb-0">Bob Dean</h5>
                            <small class="ms-auto">11 mins ago</small>
                        </div>
                        <div class="text-end">
                            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                    </div>
                </div>
                <div class="toast-body">
                    Hello, world! This is a toast message.
                </div>
            </div>

          
        </ToastContext.Provider>
    );
};




export const useToast = () => useContext(ToastContext);
