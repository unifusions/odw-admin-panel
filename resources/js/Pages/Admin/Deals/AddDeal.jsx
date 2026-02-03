import ImageUploader from "@/Components/ImageUploader";
import InputLabel from "@/Components/InputLabel";
import TextArea from "@/Components/TextArea";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react"
import Flatpickr from "react-flatpickr";
import 'flatpickr/dist/flatpickr.css';
import SubmitButton from "@/Components/ui-ext/SubmitButton";
export default function AddDeal() {

    const modalRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [dateRange, setDateRange] = useState([]);



    const { data, setData, processing, post, error, reset } = useForm({
        title: '',
        description: '',
        start_date: '',
        end_date: '',
        image: '',
    })
    const formatDate = (date) => date.toISOString().split('T')[0];

    const handleDateChange = (selectedDates) => {
        setDateRange(selectedDates);
        setData('start_date',formatDate( selectedDates[0]));
        setData('end_date', formatDate(selectedDates[1]));

    };
    const closeModal = () => {

        const modal = bootstrap.Modal.getInstance(modalRef.current)
        reset();
        modal.toggle();

    }
    const onSubmit = (e) => {
        e.preventDefault();
        // setData('start_date', dateRange[0]);
        // setData('end_date', dateRange[1]);

        post(route('deals.store'), {
            forceFormData: true,
            onFinish: closeModal
        });

    }


    return (
        <div className="col-sm-auto">
            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addDealModal" disabled={loading}>


                <i className="bi-tag  me-1"></i> Add Deal
            </button>

            <div id="addDealModal" className="modal fade modal-lg" ref={modalRef}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add Deal</h5>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={onSubmit} noValidate>
                                <div className="row mb-4">
                                    <InputLabel htmlFor="" className="form-label col-sm-3 col-form-label" value="Deal Image" />
                                    <div className="col-sm-9">
                                        <ImageUploader onFileSelect={(file) => setData('image', file)} />                                    </div>
                                </div>

                                <div className="row mb-4">
                                    <InputLabel htmlFor="" className="form-label col-sm-3 col-form-label" value="Title" />
                                    <div className="col-sm-9">
                                        <TextInput
                                            id="title"
                                            type="text"
                                            name="title"
                                            value={data.title}
                                            className="form-control "
                                            placeholder="Title"
                                            onChange={(e) => setData('title', e.target.value)}
                                        />
                                    </div>

                                </div>

                                <div className="row mb-4">
                                    <InputLabel htmlFor="" className="form-label col-sm-3 col-form-label" value="Description" />
                                    <div className="col-sm-9">
                                        <TextArea
                                            id="description"
                                            type="text"
                                            name="description"
                                            value={data.description}
                                            className="form-control "
                                            placeholder="Title"
                                            onChange={(e) => setData('description', e.target.value)}
                                        />
                                    </div>

                                </div>

                                <div className="row mb-4">
                                    <InputLabel htmlFor="" className="form-label col-sm-3 col-form-label" value="Duration" />
                                    <div className="col-sm-9">
                                        <Flatpickr
                                            value={dateRange}
                                            options={{
                                                mode: 'range',
                                                dateFormat: 'd-m-Y', // Adjust the date format as needed
                                            }}
                                            className="js-flatpickr form-control flatpickr-custom"
                                            onChange={handleDateChange}
                                        />
                                    </div>


                                </div>


                                <div className="text-end">
                                    <button type="button" className="btn btn-white me-3" data-bs-dismiss="modal">Close</button>
                                <SubmitButton
                                                           processing={processing}
                                                           actionText="Add Deal"
                               
                                                       />
                               
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}