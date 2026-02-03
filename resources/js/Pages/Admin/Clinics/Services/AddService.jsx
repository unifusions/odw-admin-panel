import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import SubmitButton from "@/Components/ui-ext/SubmitButton";
import { useForm } from "@inertiajs/react";
import axios from "axios";
import { useRef, useState } from "react";
import ReactSelect from "react-select";

export default function AddService({ clinic }) {

    const [services, setServices] = useState([]);
    const [servicesSelect, setServicesSelect] = useState([]);
    const [loading, setLoading] = useState(false);

    const [branchOptions, setBranchOptions] = useState(
        () => {
            return clinic.branches.map((branch) => ({
                value: branch.id,
                label: branch.name
            }))
        }
    )
    const modalRef = useRef(null);


    const onServiceSelect = (selectedOptions) => {
        setData('services', selectedOptions);
    }

    const onBranchSelect = (selectedOption) => {
        setData('branch_id', selectedOption.value)
    }


    const { data, setData, post, processing, errors, reset } = useForm({

        clinic_branch_id: '',
        services: '',

    });


    const closeModal = () => {

        const modal = bootstrap.Modal.getInstance(modalRef.current)
        reset();
        modal.toggle();

    }

    const fetchServices = async () => {


        setLoading(true);
        try {
            const response = await axios.get("/dental-services");
            setServices(response.data);

            setServicesSelect(() => {
                return response.data.map((item) => ({
                    value: item.id,
                    label: item.name,
                }));
            })

     



        } catch (error) {
            console.error('Error Fetching Data', error)
        }
        finally {
            setLoading(false);
        }
    }

    const onsubmit = (e) => {
        e.preventDefault();

        post(route('clinics.services.store', clinic), {
            onFinish: closeModal,
            onError: (errors) => {
                console.log(errors)
            },
        });
    };

    return (
        <>

            <div className="d-grid mb-3">
                <button className="btn btn-outline-primary  btn-dashed-outline" data-bs-toggle="modal" data-bs-target="#addServiceModal" onClick={fetchServices}>
                    <i className="bi-hospital me-1"></i> Add Service to Clinic/Branch
                </button>
            </div>

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
                                    <label htmlFor="" className="col-sm-3 col-form-label form-label">Branch </label>
                                    <div className="col-sm-9">

                                        <ReactSelect options={branchOptions} onChange={onBranchSelect} />


                                    </div>
                                </div>

                                <div className="row mb-4">
                                    <label htmlFor="" className="col-sm-3 col-form-label form-label">Services </label>
                                    <div className="col-sm-9">

                                        <ReactSelect options={servicesSelect} isMulti onChange={onServiceSelect} />


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