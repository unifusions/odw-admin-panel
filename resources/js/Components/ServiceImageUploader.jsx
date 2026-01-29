import { Pencil } from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";

const ServiceImageUploader = ({ onFileSelect, existingImage = null, profileCover = false }) => {
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
                <div className="relative w-full h-48 group">

                    <img id="editAvatarImgModal" className="object-cover w-full h-full rounded-lg" src={preview} />

                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                        <button
                            type="button"
                            class="p-3 text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            aria-label="Edit image"
                            onclick="alert('Edit action triggered!')"
                        >
                            <Pencil />
                        </button>
                    </div>


                </div>




            </div>


        </>
    );
};

export default ServiceImageUploader;
