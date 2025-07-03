import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { useCallback, useEffect, useState } from "react";
import { useRef } from "react"

import { useDropzone } from 'react-dropzone';
import { router } from "@inertiajs/react";
import ServiceModal from "./serviceModal";
import ImageUploader from "@/Components/ImageUploader";
import TextArea from "@/Components/TextArea";

export default function EditService({ service }) {



    const [activeModal, setActiveModal] = useState(null);
    const modalRef = useRef(null);
    // const closeModalRef = useRef(null);
    const { data, setData, processing, post, reset } = useForm({
        name: service.name || '',

        medical_name: service.medical_name || '',
        image_path: service.image_path || '',

        desc: service.desc || '',
        cost: service.cost || '',
        avg_cost: service.avg_cost || '',

        max_cost: service.max_cost || '',
        max_avg_cost: service.max_avg_cost || '',
        display_order: service.display_order || ''
    })


    const closeModal = () => {
        if (modalRef.current) {
            modalRef.current.hideModal(); // Explicitly hide modal
        }
        setActiveModal(null);
    };


    const onsubmit = (e) => {
        e.preventDefault();

        const fmData = new FormData();

        if (data.image_path) {
            fmData.append("image_path", data.image_path);
        }
        fmData.append("_method", "PUT");
        router.post(route('services.update', service), {
            _method: 'put',
            data: data,
            image_path: data.image_path,
            forceFormData: true,
            // onFinish: {() => closeModal}
        });
        if (modalRef.current) {
            modalRef.current.hideModal(); // Explicitly hide modal
        }
        setActiveModal(null);


    }


    return (
        <>
            <button type="button" class="btn btn-white btn-sm"

                onClick={() => setActiveModal(`editServiceModal-${service.id}`)}

            >
                <i class="bi-pencil-fill me-1"></i> Edit
            </button>



            <ServiceModal id={`editServiceModal-${service.id}`} activeModal={activeModal}
                onClose={closeModal}
                title={service.name}
                key={service.id}
                ref={modalRef} // Pass ref to CustomModal
            >


                <form action="" onSubmit={onsubmit} noValidate>


                    <div className="row mb-4">

                        <InputLabel htmlFor="" className="form-label col-sm-3 col-form-label" value="Service Icon" />
                        <div class="col-sm-9">
                            <div class="d-flex align-items-center">
                                <ImageUploader onFileSelect={(file) => setData('image_path', file)} existingImage={data.image_path} />
                            </div>
                        </div>
                    </div>

                    <div className="row mb-4">
                        <InputLabel htmlFor="service_name" className="form-label col-sm-3 col-form-label" value="Service Name" />

                        <div className="col-sm-9">
                            <TextInput
                                id="service_name"
                                type="text"
                                name="service_name"
                                value={data.name}
                                className="form-control "
                                placeholder="Service Name"
                                onChange={(e) => setData('name', e.target.value)}
                            />



                        </div>
                    </div>

                    <div className="row mb-4">
                        <label for="firstNameLabel" className="col-sm-3 col-form-label form-label">Medical Name
                            <i className="bi-question-circle text-body ms-1" data-bs-toggle="tooltip" data-bs-placement="top" ></i></label>

                        <div className="col-sm-9">
                            <TextInput
                                id="category_name"
                                type="text"
                                name="category_name"
                                value={data.medical_name}
                                className="form-control "
                                placeholder="Medical Name"
                                onChange={(e) => setData('medical_name', e.target.value)}
                            />



                        </div>
                    </div>


                    <div className="row mb-4">
                        <label for="desc" className="col-sm-3 col-form-label form-label">Description
                        </label>

                        <div className="col-sm-9">



                            <TextArea
                                name="desc"
                                className="form-control"
                                value={data.desc}
                                onChange={(e) => setData('desc', e.target.value)}
                            />




                        </div>
                    </div>

                    <div className="row mb-4">
                        <label for="serviceCost" className="col-sm-3 col-form-label form-label">ODW Cost</label>


                        <div className="col-sm-4">
                            <TextInput
                                id="serviceCost"
                                type="number"
                                name="cost"
                                value={data.cost}
                                className="form-control "
                                placeholder="Service Name"
                                onChange={(e) => setData('cost', e.target.value)}
                            />



                        </div>

                        <div className="col-sm-4">
                            <TextInput
                                id="serviceMaxCost"
                                type="number"
                                name="max_cost"
                                value={data.max_cost}
                                className="form-control "
                                placeholder="Max"
                                onChange={(e) => setData('max_cost', e.target.value)}
                            />



                        </div>

                    </div>

                    <div className="row mb-4">

                        <InputLabel htmlFor="avgCost" className="form-label col-sm-3 col-form-label" value="Average Cost" />

                        <div className="col-sm-4">
                            <TextInput
                                id="avgCost"
                                type="number"
                                name="cost"
                                value={data.avg_cost}
                                className="form-control "
                                placeholder="Average Cost"
                                onChange={(e) => setData('avg_cost', e.target.value)}
                            />



                        </div>

                        
                        <div className="col-sm-4">
                                        <TextInput
                                            id="avgMaxCost"
                                            type="number"
                                            name="cost"
                                            value={data.max_avg_cost}
                                            className="form-control "
                                            placeholder="Max"
                                            onChange={(e) => setData('max_avg_cost', e.target.value)}
                                        />



                                    </div>

                    </div>


                    <div className="row mb-4">
                        <label for="firstNameLabel" className="col-sm-3 col-form-label form-label">Display Order

                        </label>

                        <div className="col-sm-9">
                            <TextInput
                                id="category_name"
                                type="number"
                                name="category_name"
                                value={data.display_order}
                                className="form-control "
                                placeholder="Display Order"
                                onChange={(e) => setData('display_order', e.target.value)}
                            />



                        </div>

                        
                    </div>






                    <div className="text-end">
                        <button type="button" className="btn btn-white me-3" onClick={closeModal}>Close</button>
                        <button type="submit" className="btn btn-primary">Save Service</button>

                    </div>

                </form>
            </ServiceModal>
            {/* 
            <div id={`editServiceModal-${service.id}`} className="modal fade modal-lg" ref={modalRef}>
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenterTitle">Edit Service</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">


                            <form action="" onSubmit={onsubmit} noValidate>


                                <div className="row mb-4">

                                    <InputLabel htmlFor="full_name" className="form-label col-sm-3 col-form-label" value="Service Icon" />
                                    <div class="col-sm-9">
                                        <div class="d-flex align-items-center">

                                            {preview ?
                                                <>
                                                    <label class="avatar avatar-xxl avatar-circle avatar-delete" for="editAvatarUploaderModal">
                                                        <img src={preview} alt="Preview" className="avatar-img" />
                                                        <span class="avatar-uploader-trigger" onClick={() => setPreview(null)}>
                                                            <i class="bi-x-lg avatar-uploader-icon shadow-sm avatar-delete-icon"></i>
                                                        </span>
                                                    </label>
                                                </> :
                                                <div {...getRootProps()} className="js-dropzone row dz-dropzone dz-dropzone-card">
                                                    <input {...getInputProps()} />
                                                    {isDragActive ? <p>Drop the files here ...</p> : <>

                                                        <h5 className="text-center">Drag and drop your file here</h5>

                                                        <p class="mb-2 text-center" >or</p>
                                                        <span class="btn btn-white btn-sm">Browse files</span></>}
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>

                                <div className="row mb-4">
                                    <InputLabel htmlFor="service_name" className="form-label col-sm-3 col-form-label" value="Service Name" />

                                    <div className="col-sm-9">
                                        <TextInput
                                            id="service_name"
                                            type="text"
                                            name="service_name"
                                            value={data.name}
                                            className="form-control "
                                            placeholder="Service Name"
                                            onChange={(e) => setData('name', e.target.value)}
                                        />



                                    </div>
                                </div>



                                <div className="row mb-4">
                                    <label for="serviceCost" className="col-sm-3 col-form-label form-label">Cost
                                        <i className="bi-question-circle text-body ms-1" data-bs-toggle="tooltip" data-bs-placement="top" ></i></label>

                                    <div className="col-sm-9">
                                        <TextInput
                                            id="serviceCost"
                                            type="number"
                                            name="cost"
                                            value={data.cost}
                                            className="form-control "
                                            placeholder="Service Name"
                                            onChange={(e) => setData('cost', e.target.value)}
                                        />



                                    </div>
                                </div>

                                <div className="row mb-4">

                                    <InputLabel htmlFor="avgCost" className="form-label col-sm-3 col-form-label" value="Average Cost" />

                                    <div className="col-sm-9">
                                        <TextInput
                                            id="avgCost"
                                            type="number"
                                            name="cost"
                                            value={data.avg_cost}
                                            className="form-control "
                                            placeholder="Average Cost"
                                            onChange={(e) => setData('avg_cost', e.target.value)}
                                        />



                                    </div>
                                </div>





                                <div className="text-end">
                                    <button type="button" className="btn btn-white me-3" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary">Save Service</button>

                                </div>

                            </form>



                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}