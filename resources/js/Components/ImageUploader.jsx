import { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";

const ImageUploader = ({ onFileSelect, existingImage = null, deleteFile }) => {
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
 const handleDelete = () => {
setPreview(null);deleteFile
 }
    return (
        <>
            {preview ? (
                <>
                <img src={preview} className="h-30 w-30 object-cover rounded mb-3 shadow-sm" />
                <Button variant="ghost" type="button" onClick={handleDelete}><Trash height={5}  /></Button>
</>
            ) : (
                <div {...getRootProps()} className={`
        p-10 border-4 rounded-lg text-center cursor-pointer transition-colors
        ${isDragActive ? 'border-blue-500 bg-blue-100' : 'border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100'}
      `}>

                    <label class="profile-cover-uploader-label btn btn-sm btn-white" for="profileCoverUplaoder">
                        <i class="bi-camera-fill"></i>
                        <input {...getInputProps()} />
                        {
                            isDragActive ?
                                <p className="text-blue-600">Drop the files here ...</p> :
                                <p className="text-gray-500">Drag 'n' drop some files here, or click to select files</p>
                        }
                    </label>
                </div>


            )}
        </>
    );
};

export default ImageUploader;
