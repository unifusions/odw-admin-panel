import { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";

const ServiceImageHeaderUploader = ({ onFileSelect, existingImage = null }) => {
    const [preview, setPreview] = useState(existingImage);

    useEffect(() => {
        if (existingImage) {
            setPreview(existingImage);
        }
    }, [existingImage]);

    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        if (file) {
            setPreview(URL.createObjectURL(file));
            onFileSelect(file); // Pass the file object, but don't render it directly in JSX
        }
    }, [onFileSelect]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <>

            <div className="profile-cover">
                <div className="profile-cover-img-wrapper">
                    {preview && (
                        <img src={preview} className="profile-cover-img" />
                    )}
                </div>

                <div {...getRootProps()} class="profile-cover-content profile-cover-uploader p-3">
                  
                    <label class="profile-cover-uploader-label btn btn-sm btn-white" for="profileCoverUplaoder">
                        <i class="bi-camera-fill"></i>
                        <input {...getInputProps()} />
                        <span class="d-none d-sm-inline-block ms-1">Upload header</span>
                    </label>
                </div>

            </div>

        </>
    );
};

export default ServiceImageHeaderUploader;
