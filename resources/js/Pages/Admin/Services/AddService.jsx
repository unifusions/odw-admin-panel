import ImageUploader from "@/Components/ImageUploader";
import InputLabel from "@/Components/InputLabel";
import TextArea from "@/Components/TextArea";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { useRef, useState, useCallback } from "react"
import { useDropzone } from 'react-dropzone';
export default function AddService() {

    const modalRef = useRef(null);
    const [preview, setPreview] = useState('');
    const [image, setImage] = useState('');
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        desc: '',
        cost: '',
        image_path: '',
        image_file: null,
        avg_cost: ''
    })
    const [loading, setLoading] = useState(false);

    const closeModal = () => {

        const modal = bootstrap.Modal.getInstance(modalRef.current)
        reset();
        modal.toggle();

    }

    const onsubmit = (e) => {
        e.preventDefault();

        post(route('services.store'), {
            forceFormData: true,
            onFinish: closeModal

        });
    };

    return (
        <>

            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addServiceModal" disabled={loading}>


                <i className="bi-hospital me-1"></i> Add Service
            </button>

            <div id="addServiceModal" className="modal fade modal-lg" ref={modalRef}>
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenterTitle">Add Clinic</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">


                            <form action="" onSubmit={onsubmit} noValidate>


                                <div className="row mb-4">

                                    <InputLabel htmlFor="" className="form-label col-sm-3 col-form-label" value="Service Icon" />
                                    <div class="col-sm-9">
                                        <ImageUploader onFileSelect={(file) => setData('image_file', file)} />
                                    </div>
                                </div>


                                <div className="row mb-4">
                                    <label for="firstNameLabel" className="col-sm-3 col-form-label form-label">Service Name
                                        <i className="bi-question-circle text-body ms-1" data-bs-toggle="tooltip" data-bs-placement="top" ></i></label>

                                    <div className="col-sm-9">
                                        <TextInput
                                            id="service_name"
                                            type="clinic_name"
                                            name="clinic_name"
                                            value={data.clinic_name}
                                            className="form-control "
                                            placeholder="Service Name"
                                            onChange={(e) => setData('name', e.target.value)}
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
            </div>
        </>

    )
}