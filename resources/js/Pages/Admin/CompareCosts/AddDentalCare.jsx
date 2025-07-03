import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { useEffect, useRef } from "react";
import ReactSelect from "react-select";

export default function AddDentalCare({ categories }) {


    const modalRef = useRef(null);
    const modalInstance = useRef(null);
    const selectRef = useRef(null);

    const { data, setData, post, processing, errors, reset } = useForm({
        code: '',
        name: '',
        category_id: '',
        national_cost: '',
        odw_cost: '',
        medical_name: ''
    });

    useEffect(() => {
        // Initialize the Bootstrap modal when the component mounts
        if (modalRef.current) {
            modalInstance.current = new bootstrap.Modal(modalRef.current);
        }

        // Cleanup function to destroy the modal instance when the component unmounts
        return () => {
            if (modalInstance.current) {
                modalInstance.current.dispose();
            }
        };
    }, []); // Empty dependency array ensures this runs only once after the initial render


    const toggleModal = () => {
        // const modal = bootstrap.Modal.getInstance(modalRef.current)

        if (selectRef.current) {
            selectRef.current.setValue(null);
        }
        reset()
        modalInstance.current.toggle()

    }
    const formSubmit = (e) => {
        e.preventDefault();
        post(route('compare-costs.store'), {
            onFinish: toggleModal
        })

    }
    return (
        <>

            <button className="btn btn-primary" onClick={toggleModal}  >


                <i className="bi-plus me-1"></i> Add Dental Care
            </button>

            <div className="modal fade modal-lg" ref={modalRef}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                Add Dental Care
                            </h5>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={formSubmit} >
                                <div className="row mb-4">
                                    <InputLabel className="col-sm-3 col-form-label" value="Code" />
                                    <div className="col-sm-9">
                                        <TextInput name="code"
                                            value={data.code}
                                            onChange={(e) => setData('code', e.target.value)}
                                        />
                                    </div>

                                </div>

                                <div className="row mb-4">
                                    <InputLabel className="col-sm-3 col-form-label" value="Common Name" />
                                    <div className="col-sm-9">
                                        <TextInput
                                            name="name"

                                            value={data.name}
                                            onChange={(e) => setData('name', e.target.value)}
                                        />
                                    </div>

                                </div>

                                <div className="row mb-4">
                                    <InputLabel className="col-sm-3 col-form-label" value="Medical Name" />
                                    <div className="col-sm-9">
                                        <TextInput


                                            value={data.medical_name}
                                            onChange={(e) => setData('medical_name', e.target.value)}
                                        />
                                    </div>

                                </div>
                                <div className="row mb-4">
                                    <InputLabel className="col-sm-3 col-form-label" value="Cateogry" />
                                    <div className="col-sm-9">
                                        <ReactSelect options={categories} ref={selectRef}

                                            onChange={(selectedOption) => setData('category_id', selectedOption ? selectedOption.value : '')} />
                                    </div>

                                </div>
                                <div className="row mb-4">
                                    <InputLabel className="col-sm-3 col-form-label" value="National Cost" />
                                    <div className="col-sm-9">
                                        <TextInput
                                            name="name"
                                            type="number"
                                            value={data.national_cost}
                                            onChange={(e) => setData('national_cost', e.target.value)}
                                        />
                                    </div>

                                </div>

                                <div className="row mb-4">
                                    <InputLabel className="col-sm-3 col-form-label" value="ODW Cost" />
                                    <div className="col-sm-9">
                                        <TextInput
                                            name="name"
                                            type="number"
                                            value={data.odw_cost}
                                            onChange={(e) => setData('odw_cost', e.target.value)}
                                        />
                                    </div>

                                </div>

                                <div className="text-end">
                                    <button type="button" className="btn btn-white me-3" onClick={toggleModal}>Close</button>
                                    <button type="submit" className="btn btn-primary" disabled={processing}>{processing ? <div className="spinner-border spinner-border-sm" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div> : 'Save'} </button>

                                </div>


                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}