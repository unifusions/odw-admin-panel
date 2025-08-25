import ImageUploader from "@/Components/ImageUploader";
import { useForm } from "@inertiajs/react";
import { useDropzone } from 'react-dropzone';
export default function AddClinicImages(clinic) {
    
    
    const { data, setData, post, processing, errors, reset } = useForm({
      
        images: [],
        logo_file: ''

    });

    function DropzoneArea() {
        const { getRootProps, getInputProps } = useDropzone({
            accept: {
                'image/*': []
            },
            multiple: true,
            onDrop: (acceptedFiles) => {
                // Append new files to existing state
                setData("images", [...data.images, ...acceptedFiles]);
            }
        });

        return (
            <div
                {...getRootProps({
                    className: "dz-dropzone dz-clickable border rounded p-4 text-center",
                    style: { cursor: 'pointer', backgroundColor: '#fafafa' },
                })}
            >
                <input {...getInputProps()} />
                <p className="mb-0">Drag & drop more gallery images here, or click to select files</p>
            </div>
        );
    }

    return(

        <>
        {/* <h4>Logo</h4> */}
            {/* <ImageUploader onFileSelect={(file) => setData('image_file', file)} /> */}
 

            <div className="dropzone-container">
                <DropzoneArea />
            </div>

            {
                data.images.length > 0 && (
                    <div className="row mt-3">
                        {data.images.map((file, index) => (
                            <div key={index} className="col-3 mb-3">

                                <div class="card card-sm">
                                    <img class="card-img-top" src={URL.createObjectURL(file)} alt={`Preview ${index}`} />

                                    <div class="card-body">
                                        <div class="row col-divider text-center">


                                            <div class="col">
                                                <a class="text-danger" onClick={() => {
                                                    const updatedImages = [...data.images];
                                                    updatedImages.splice(index, 1);
                                                    setData("images", updatedImages);
                                                }}
                                                >
                                                    <i class="bi-trash"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                )
            }</>)
}
