import { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";

const FileUploader = ({ onFileSelect, selectedFile }) => {

    const [error, setError] = useState("");

    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        if (file) {
            // setPreview(URL.createObjectURL(file));
            onFileSelect(file); // Pass the file object, but don't render it directly in JSX
        }
    }, [onFileSelect]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: { "application/pdf": [".pdf"] }, // only pdf
        maxFiles: 1,
        disabled: !!selectedFile,
        multiple: false,
        onDrop: (acceptedFiles) => {
            if (acceptedFiles.length === 0) {
                setError("Please upload  PDF file only.");
                onFileSelect(null);
                return;
            }
            onFileSelect(acceptedFiles[0])
            setError(""); // clear error
        },
    });

    const handleDelete = () => {
        onFileSelect(null);
        setError("");
    };
    return (
        <>

            {!selectedFile &&
                <div {...getRootProps()} className="js-dropzone row dz-dropzone dz-dropzone-card mx-0">

                    <input {...getInputProps()} />
                    {isDragActive ? (
                        <p>Drop the files here ...</p>
                    ) : (
                        <>
                            {error && <div className="text-danger text-center">{error}</div>}
                            <h5 className="text-center">Drag and drop your file here</h5>
                            <p className="mb-2 text-center">or</p>
                            <span className="btn btn-white btn-sm">Browse files</span>
                        </>
                    )}
                </div>



            }

            {selectedFile && (
                <div>


                    <strong className="me-3">{selectedFile?.name}</strong>

                    <button
                        type="button"
                        onClick={handleDelete}
                        className="btn btn-sm btn-outline-danger"
                    >
                        Delete
                    </button>
                </div>
            )}


        </>
    );
};

export default FileUploader;
