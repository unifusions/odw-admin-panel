import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import SubmitButton from "@/Components/ui-ext/SubmitButton";
import { useForm } from "@inertiajs/react";
import axios from "axios";
import { useEffect, useState, useRef } from "react"

export default function AddBranchModal({ clinic }) {

    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState("");
    const [cities, setCities] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cityLoading, setCityLoading] = useState(false);

    const modalRef = useRef(null);
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        address_line_1: '',
        address_line_2: '',
        phone: '',
        logo: '',
        email: '',
        city_id: '',
        zip_code: '',

    });

    const closeModal = () => {

        const modal = bootstrap.Modal.getInstance(modalRef.current)
        setSelectedState('');
        reset();
        modal.toggle();

    }

    const onsubmit = (e) => {
        e.preventDefault();

        post(route('clinics.branches.store', clinic), {
            onFinish: closeModal,
            onError: (errors) => {
                console.log(errors)
            },
        });
    };

    const fetchStates = async () => {
        setLoading(true);
        try {
            const response = await axios.get("/states");
            setStates(response.data);


        } catch (error) {
            console.error('Error Fetching Data', error)
        }
        finally {
            setLoading(false);
        }
    }

    const fetchCity = async (stateId) => {
        setCityLoading(true);
        try {
            const response = await axios.get(`/cities/${stateId}`);
            setCities(response.data); // Update with doctors/services
            setCityLoading(false);
        } catch (error) {
            console.error("Error fetching related data:", error);
            setCityLoading(false);

        }
    }
    const handleOnStateSelect = async (event) => {
        const stateId = event.target.value;
        setSelectedState(stateId);

        if (!stateId) {
            setCities([]); // Reset if no clinic selected
            return;
        }

        fetchCity(stateId);

    }

    const handleCitySelect = (event) => {
        setData('city_id', event.target.value);

    }


    return (
        <>
            <div className="d-grid mb-3">
                <button className="btn btn-outline-primary btn-dashed-outline" data-bs-toggle="modal" onClick={fetchStates} data-bs-target="#addClinicModal"><i class="bi-plus"></i> Add Branch</button>

            </div>

            <div id="addClinicModal" className="modal fade modal-lg" ref={modalRef}>
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenterTitle">Add Clinic</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">


                            <form action="" onSubmit={onsubmit} noValidate>


                                <div className="row mb-4">

                                    <InputLabel htmlFor="email" className="col-sm-3 col-form-label form-label" value="Branch Logo" />
                                    <div className="col-sm-9">
                                        <div className="d-flex align-items-center">

                                            <label className="avatar avatar-xl avatar-circle avatar-uploader me-5" for="avatarUploader">
                                                <img id="avatarImg" className="avatar-img" src="https://placehold.co/160x160" alt="Image Description" />

                                                <input type="file" className="js-file-attach avatar-uploader-input" id="avatarUploader" />

                                                <span className="avatar-uploader-trigger">
                                                    <i className="bi-pencil avatar-uploader-icon shadow-sm"></i>
                                                </span>
                                            </label>


                                            <button type="button" className="js-file-attach-reset-img btn btn-white">Delete</button>
                                        </div>
                                    </div>
                                </div>



                                <div className="row mb-4">


                                    <InputLabel htmlFor="clinic_name" className="col-sm-3 col-form-label form-label" value="Branch Name" />
                                    <div className="col-sm-9">
                                        <TextInput
                                            id="clinic_name"
                                            type="clinic_name"
                                            name="clinic_name"
                                            value={data.name}
                                            className="form-control "
                                            placeholder="Branch Name"
                                            onChange={(e) => setData('name', e.target.value)}
                                        />



                                    </div>
                                </div>

                                <div className="row mb-4">
                                    <label for="emailLabel" className="col-sm-3 col-form-label form-label">Contact Email</label>


                                    <div className="col-sm-9">

                                        <TextInput
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={data.email}
                                            className="form-control "

                                            placeholder="email@address.com"
                                            onChange={(e) => setData('email', e.target.value)}
                                        />


                                    </div>
                                </div>

                                <div className="row mb-4">
                                    <label for="phoneLabel" className="col-sm-3 col-form-label form-label">Phone </label>

                                    <div className="col-sm-9">

                                        <TextInput
                                            name="phone"
                                            value={data.phone}
                                            className="form-control"
                                            placeholder="+x(xxx)xxx-xx-xx"
                                            onChange={(e) => setData('phone', e.target.value)}
                                        />




                                    </div>
                                </div>


                                {/* <div className="row mb-4">
                    <label for="phoneLabel" className="col-sm-3 col-form-label form-label">Fax </label>

                    <div className="col-sm-9">
                        <div className="input-group input-group-sm-vertical">
                            <input type="text" className="js-input-mask form-control" name="fax" id="phoneLabel" placeholder="+x(xxx)xxx-xx-xx" aria-label="+x(xxx)xxx-xx-xx"
                            />




                        </div>


                        {/* <div id="addPhoneFieldContainer"></div>

                            <a className="js-create-field form-link" href="javascript:;">
                                <i className="bi-plus"></i> Add phone
                            </a> */}
                                {/* </div>
                </div> */}



                                <div className="row mb-4">

                                    <label htmlFor="" className="col-sm-3 col-form-label form-label">Clinic Address</label>
                                    <div className="col-sm-9">

                                        <TextInput
                                            name="address_line_1"
                                            value={data.address_line_1}
                                            className="form-control mb-2"
                                            placeholder="Address Line 1"
                                            onChange={(e) => setData('address_line_1', e.target.value)}
                                        />

                                        <TextInput
                                            name="address_line_2"
                                            value={data.address_line_2}
                                            className="form-control"
                                            placeholder="Address Line 2"
                                            onChange={(e) => setData('address_line_2', e.target.value)}
                                        />


                                    </div>
                                </div>

                                <div className="row mb-4">
                                    <label htmlFor="" className="col-sm-3 col-form-label form-label">State</label>
                                    <div className="col-sm-9">
                                        <select name="" id="" className="form-select" onChange={handleOnStateSelect} value={selectedState}>
                                            <option value="">Select State</option>

                                            {states.map((state) => <option key={state.id} value={state.id}

                                            >
                                                {state.name}
                                            </option>)}
                                        </select>

                                    </div>
                                </div>

                                <div className="row mb-4">
                                    <label htmlFor="" className="col-sm-3 col-form-label form-label">City</label>


                                    <div className="col-sm-9">
                                        {cityLoading ? 'Loading' : <select name="" id="" className="form-select" onChange={handleCitySelect} value={data.city_id}>
                                            <option value="">Select City</option>
                                            {cities.map((city) => <option key={city.id} value={city.id}>
                                                {city.name}
                                            </option>)}
                                        </select>}



                                    </div>
                                </div>

                                <div className="row mb-4">
                                    <label htmlFor="" className="col-sm-3 col-form-label form-label">Zip Code</label>
                                    <div className="col-sm-9">


                                        <TextInput
                                            name="zip_code"
                                            value={data.zip_code}
                                            className="form-control"
                                            placeholder=""
                                            onChange={(e) => setData('zip_code', e.target.value)}
                                        />


                                    </div>
                                </div>

                                <div className="text-end">
                                    <button type="button" className="btn btn-white me-3" data-bs-dismiss="modal">Close</button>
                                     <SubmitButton
                                                                processing={processing}
                                                                actionText="Save Clinic"
                                    
                                                            />
                                    


                                </div>

                            </form>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}