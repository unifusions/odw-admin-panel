import DentistIcon from "@/Components/Icons/DentistIcon";
import InputLabel from "@/Components/InputLabel";
import TextArea from "@/Components/TextArea";
import TextInput from "@/Components/TextInput";
import { useForm, router } from "@inertiajs/react";
import axios from "axios";
import { useRef, useState } from "react"
import ReactSelect from "react-select";


export default function AddDentist() {

    const modalRef = useRef(null);
    const [clinics, setClinics] = useState([]);
    const [services, setServices] = useState([]);
    const [branches, setBranches] = useState([]);
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        phone: '',
        email: '',
        services:[],    

    });

    const fetchClinicServices = async () => {

        const response = await axios.get(route('dentists.create'));
        setClinics(response.data.clinics);
        setServices(response.data.services);
        // response.data.services.map((item) => setServices([{ 'value': item.id, 'label': item.name }]))
        
    }

    const onClinicSelect = async (selectedOption) => {
        const response = await axios.get(`/admin/clinicbranches/${selectedOption.value}`)
        setBranches(response.data);
    }

    const onServiceSelect = (selectedOptions) =>{
        setData('services', selectedOptions);
    }


    return (
        <>
            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addDentistModal" onClick={fetchClinicServices} >

                <DentistIcon />
                Add Dentist
            </button>


            <div id="addDentistModal" className="modal fade modal-lg" aria-hidden = "false" ref={modalRef}>
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header ">
                            <h5 className="modal-title" >Add Dentist</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" ></button>
                        </div>
                        <div className="modal-body">


                            <form action="" onSubmit={onsubmit} noValidate>





                                <div className="row mb-4">

                                    <InputLabel htmlFor="dentistName" className="col-sm-3 col-form-label form-label" value="Dentist Name" />
                                    <div className="col-sm-9">
                                        <TextInput
                                            id="dentistName"
                                            type="text"
                                            name="dentist_name"
                                            value={data.name}
                                            className="form-control "
                                            placeholder="Dentist Name"
                                            onChange={(e) => setData('name', e.target.value)}
                                        />
                                    </div>
                                </div>



                                <div className="row mb-4">
                                    <InputLabel htmlFor="dentistName" className="col-sm-3 col-form-label form-label" value="Practise From" />

                                    <div className="col-sm-9">


                                        <TextInput
                                            id="dentistName"
                                            type="date"
                                            name="dentist_name"
                                            value={data.name}
                                            className="form-control "
                                            placeholder=""
                                            onChange={(e) => setData('practise_from', e.target.value)}
                                        />



                                    </div>
                                </div>




                                <div className="row mb-4">
                                    <InputLabel htmlFor="clinicSelect" className="col-sm-3 col-form-label form-label" value="Clinic" />
                                    <div className="col-sm-9">
                                    <ReactSelect options={clinics} onChange={onClinicSelect} />
                                        

                                    </div>
                                </div>


                                <div className="row mb-4">
                                    <InputLabel htmlFor="branchSelect" className="col-sm-3 col-form-label form-label" value="Branch" />
                                    <div className="col-sm-9">
                                        <select name="" id="branchSelect" className="form-select">
                                            <option value="">Select Branch</option>
                                            {branches.map((branch) => <option value={branch.id}>
                                                {branch.name}
                                            </option>)}
                                        </select>

                                    </div>
                                </div>

                                <div className="row mb-4">
                                    <InputLabel htmlFor="branchSelect" className="col-sm-3 col-form-label form-label" value="Services" />
                                    <div className="col-sm-9">
                                       
                                      <ReactSelect options={services} isMulti onChange={onServiceSelect}/>

                                    </div>
                                </div>


                                <div className="text-end">
                                    <button type="button" className="btn btn-white me-3" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary">Save Dentist</button>

                                </div>

                            </form>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}