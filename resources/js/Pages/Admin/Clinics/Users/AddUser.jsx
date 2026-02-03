import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import SubmitButton from "@/Components/ui-ext/SubmitButton";
import { useForm } from "@inertiajs/react";
import axios from "axios";
import { useEffect, useState, useRef } from "react"

export default function AddUser({ clinic }) {

    const modalRef = useRef(null);
    const { data, setData, post, processing, errors, reset } = useForm({
        full_name: '',
        email: '',
        phone: '',
        password: '',
        password_confirmation: '',
        branch_id: '',

        role: '',

    });

    const closeModal = () => {

        const modal = bootstrap.Modal.getInstance(modalRef.current)

        reset();
        modal.toggle();

    }

    const onsubmit = (e) => {
        e.preventDefault();

        post(route('clinics.users.store', clinic), {
            onFinish: closeModal,
            onError: (errors) => {
                console.log(errors)
            },
        });
    };






    return (
        <>
            <div className="d-grid mb-3">

                <button className="btn  btn-outline-primary  btn-dashed-outline" data-bs-toggle="modal" data-bs-target="#addClinicModal"><i class="bi-plus"></i> Add User</button>

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
                                    <InputLabel htmlFor="full_name" className="form-label col-sm-3 col-form-label" value="Full Name" />
                                    <div class="col-sm-9">

                                        <TextInput
                                            type="text"
                                            id="full_name"
                                            name="full_name"
                                            className="form-control"
                                            placeholder="Full Name"
                                            onChange={(e) => setData('full_name', e.target.value)}
                                        />

                                    </div>

                                </div>

                                <div className="row mb-4">

                                    <InputLabel htmlFor="email" className="form-label col-sm-3 col-form-label" value="Email" />

                                    <div className="col-sm-9">

                                        <TextInput
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="email@domain.com"
                                            onChange={(e) => setData('email', e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="row mb-4">
                                    <InputLabel htmlFor="email" className="form-label col-sm-3 col-form-label" value="Phone" />

                                    <div className="col-sm-9">

                                        <TextInput
                                            type="text"
                                            id="phone"
                                            name="phone"
                                            className="form-control"
                                            placeholder="+x(xxx)xxx-xx-xx"
                                            onChange={(e) => setData('phone', e.target.value)}
                                        />

                                        <InputError message={errors.phone} className="mt-2" />
                                    </div>
                                </div>

                                <div class="row mb-4">

                                    <InputLabel className="form-label col-sm-3 col-form-label" htmlFor="password" value="Password" />
                                    <div className="col-sm-9">
                                        <TextInput
                                            id="password"
                                            type="password"
                                            name="password"
                                            value={data.password}
                                            className="form-control form-control-lg"
                                            placeholder="8+ characters required"
                                            onChange={(e) => setData('password', e.target.value)}
                                            required
                                        />

                                        <InputError message={errors.password} className="invalid-feedback" />
                                    </div>

                                </div>
                                <div class="row mb-4">
                                    <InputLabel
                                        htmlFor="password_confirmation"
                                        value="Confirm Password"
                                        className="form-label col-sm-3 col-form-label"
                                    />




                                    <div class="col-sm-9">
                                        <TextInput
                                            id="password_confirmation"
                                            type="password"
                                            name="password_confirmation"
                                            value={data.password_confirmation}
                                            className="form-control form-control-lg mb-3"
                                            placeholder="8+ characters required"
                                            onChange={(e) =>
                                                setData('password_confirmation', e.target.value)
                                            }
                                            required
                                        />

                                        <InputError
                                            message={errors.password_confirmation}
                                            className="invalid-feedback"
                                        />

                                        <h5>Password requirements:</h5>

                                        <p class="fs-6 mb-2">Ensure that these requirements are met:</p>

                                        <ul class="fs-6">
                                            <li>Minimum 8 characters long - the more, the better</li>
                                            <li>At least one lowercase character</li>
                                            <li>At least one uppercase character</li>
                                            <li>At least one number, symbol, or whitespace character</li>
                                        </ul>
                                    </div>
                                </div>




                                <div className="row mb-4">
                                    <label htmlFor="clinic_branch" className="col-sm-3 col-form-label form-label">Branch </label>

                                    <div className="col-sm-9">
                                        <select name="" id="clinic_branch" className="form-select"
                                            onChange={(e) =>
                                                setData('branch_id', e.target.value)
                                            } value={data.branch_id}>
                                            <option value="">Select Clinic Branch</option>
                                            {clinic.branches.map((branch) =>
                                                <option key={branch.id} value={branch.id}>
                                                    {branch.name}
                                                </option>
                                            )}
                                        </select>


                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <label for="phoneLabel" className="col-sm-3 col-form-label form-label">Role </label>

                                    <div className="col-sm-9">
                                        <select name="" id="" className="form-select"  onChange={(e) =>
                                                setData('role', e.target.value)
                                            } value={data.role}>
                                            <option value="">Select User Role</option>
                                            <option value="clinic_admin">Clinic Admin</option>
                                            <option value="clinic_user">Clinic User</option>

                                        </select>


                                    </div>
                                </div>




                                <div className="text-end">
                                    <button type="button" className="btn btn-white me-3" data-bs-dismiss="modal">Close</button>
                                    <SubmitButton
                                                               processing={processing}
                                                               actionText="Add User"
                                   
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