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
                <div {...getRootProps()}
                 className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition
            ${
              isDragActive
                ? "border-blue-500 bg-blue-50"
                : "border-gray-300 hover:border-blue-400"
            }`}
                 >

                    <input {...getInputProps()} />
                    {isDragActive ? (
                     <p className="text-blue-600 font-medium">
              Drop the file here...
            </p>
                    ) : (
                        <>
                            {error && (
                <div className="text-red-500 text-sm mb-2">
                  {error}
                </div>
              )}

              <h5 className="text-gray-800 font-semibold">
                Drag and drop your file here
              </h5>

              <p className="my-2 text-gray-500">or</p>

              <span className="inline-block px-4 py-2 text-sm font-medium border rounded-md bg-white text-gray-700 hover:bg-gray-100">
                Browse files
              </span>
                        </>
                    )}
                </div>



            }

            {selectedFile && (
                <div className="flex items-center justify-between mt-4 p-3 border rounded-md">
          <strong className="text-gray-800 truncate">
            {selectedFile?.name}
          </strong>

          <button
            type="button"
            onClick={handleDelete}
            className="ml-4 px-3 py-1 text-sm font-medium text-red-600 border border-red-500 rounded hover:bg-red-50"
          >
            Delete
          </button>
        </div>
            )}


        </>
    );
};

export default FileUploader;
