import { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";

const ImageUploader = ({ onFileSelect, existingImage = null }) => {
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
            {preview ? (
                <label className="avatar avatar-xxl avatar-circle avatar-delete">
                    <img src={preview} alt="Preview" className="avatar-img" />
                    <span className="avatar-uploader-trigger" onClick={() => setPreview(null)}>
                        <i className="bi-x-lg avatar-uploader-icon shadow-sm avatar-delete-icon"></i>
                    </span>
                </label>
            ) : (
                <div {...getRootProps()} className="js-dropzone row dz-dropzone dz-dropzone-card">
                    <input {...getInputProps()} />
                    {isDragActive ? (
                        <p>Drop the files here ...</p>
                    ) : (
                        <>
                            <h5 className="text-center">Drag and drop your file here</h5>
                            <p className="mb-2 text-center">or</p>
                            <span className="btn btn-white btn-sm">Browse files</span>
                        </>
                    )}
                </div>
            )}
        </>
    );
};

export default ImageUploader;
