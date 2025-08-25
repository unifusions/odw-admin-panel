import { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";

const ServiceImageUploader = ({ onFileSelect, existingImage = null }) => {
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
            <div {...getRootProps()} className="text-center mb-5">
                <input {...getInputProps()} />
                <label class="avatar avatar-xxl avatar-circle avatar-uploader profile-cover-avatar" for="editAvatarUploaderModal">
                    <img id="editAvatarImgModal" class="avatar-img " src={preview} alt="Upload Photo/Icon" />


                    <span class="avatar-uploader-trigger">
                        <i class="bi-pencil-fill avatar-uploader-icon shadow-sm"></i>
                    </span>
                </label>



            </div>


        </>
    );
};

export default ServiceImageUploader;
