import React, { useEffect } from "react";

const Lightbox = ({ src, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <>
      <div
        className="modal show fade d-block"
        tabIndex="-1"
        role="dialog"
        onClick={onClose}
        style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
      >
        <div
          className="modal-dialog modal-fullscreen"
          role="document"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-content bg-transparent border-0">
            <div className="modal-body d-flex justify-content-center align-items-center p-0">
              <img
                src={src}
                alt="Lightbox"
                className="img-fluid"
                style={{ maxHeight: "100vh" }}
              />
            </div>
            <button
              type="button"
              className="btn-close position-absolute top-0 end-0 m-3"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
        </div>
      </div>
    </>

  )
}
  

 
  export default Lightbox;