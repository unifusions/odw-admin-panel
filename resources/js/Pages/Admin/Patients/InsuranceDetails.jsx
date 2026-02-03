
import SubmitButton from "@/Components/ui-ext/SubmitButton";
import "flatpickr/dist/flatpickr.css";
import Flatpickr from "react-flatpickr/"

export default function InsuranceDetails(second) {
    return (
        <>

            <form>

                <div class="row mb-4">
                    <label for="firstNameLabel" class="col-sm-3 col-form-label form-label">Subscriber Full Name <i class="bi-question-circle text-body ms-1">
                    </i></label>

                    <div class="col-sm-9">
                        <div class="input-group input-group-sm-vertical">
                            <input type="text" class="form-control" name="firstName" id="firstNameLabel" placeholder="Your first name" aria-label="Your first name" value="" />
                            <input type="text" class="form-control" name="lastName" id="lastNameLabel" placeholder="Your last name" aria-label="Your last name" value="" />
                        </div>
                    </div>
                </div>



                <div class="row mb-4">
                    <label for="emailLabel" class="col-sm-3 col-form-label form-label">Relationship to subscriber</label>

                    <div class="col-sm-9">
                        <select name="" id="" className="form-select">
                            <option value="">Self</option>
                            <option value="">Spouse</option>
                            <option value="">Parent</option>
                            <option value="">Child</option>
                        </select>
                    </div>
                </div>



                <div class="row mb-4">
                    <label for="emailLabel" class="col-sm-3 col-form-label form-label">Subscriber Date of Birth</label>

                    <div class="col-sm-9">
                        <Flatpickr className="form-control flatpickr-custom flatpickr-input" />
                    </div>
                </div>


                <div class="row mb-4">
                    <label for="addressLine1Label" class="col-sm-3 col-form-label form-label">Address line 1</label>

                    <div class="col-sm-9">
                        <input type="text" class="form-control" name="addressLine1" id="addressLine1Label" placeholder="Your address" aria-label="Your address" value="45 Roker Terrace, Latheronwheel" />
                    </div>
                </div>



                <div class="row mb-4">
                    <label for="addressLine2Label" class="col-sm-3 col-form-label form-label">Address line 2 <span class="form-label-secondary">(Optional)</span></label>

                    <div class="col-sm-9">
                        <input type="text" class="form-control" name="addressLine2" id="addressLine2Label" placeholder="Your address" aria-label="Your address" />
                    </div>
                </div>

                <div class="row mb-4">
                    <label for="locationLabel-ts-control" class="col-sm-3 col-form-label form-label" id="locationLabel-ts-label">Location</label>

                    <div class="col-sm-9">




                        <div class="mb-3">
                            <input type="text" class="form-control" name="city" id="cityLabel" placeholder="City" aria-label="City" value="London" />
                        </div>

                        <input type="text" class="form-control" name="state" id="stateLabel" placeholder="State" aria-label="State" />
                    </div>
                </div>







                <div class="row mb-4">
                    <label for="zipCodeLabel" class="col-sm-3 col-form-label form-label">Zip code <i class="bi-question-circle text-body ms-1" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="You can find your code in a postal address." data-bs-original-title="You can find your code in a postal address."></i></label>

                    <div class="col-sm-9">
                        <input type="text" class="js-input-mask form-control" name="zipCode" id="zipCodeLabel" placeholder="Your zip code" aria-label="Your zip code" value="KW5 8NW" />
                    </div>
                </div>

                <div class="row mb-4">
                    <label for="phoneLabel" class="col-sm-3 col-form-label form-label">Member Id </label>

                    <div class="col-sm-9">
                        <input type="text" name="Member ID" className="form-control" />
                    </div>
                </div>





                <div class="row mb-4">
                    <label for="emailLabel" class="col-sm-3 col-form-label form-label">   How did you get insurance? </label>

                    <div class="col-sm-9">
                        <select name="" id="" className="form-select">
                            <option value="">Self</option>
                            <option value="">employer</option>
                            <option value="">medicaid</option>
                            <option value="">open enrollment</option>
                            <option value="">Insurance provider</option>
                        </select>
                    </div>
                </div>

                <div className="row mb-4">
                    <label for="emailLabel" class="col-sm-3 col-form-label form-label">Insurance provider</label>

                    <div class="col-sm-9">
                       <input type="text" className="form-control" />
                    </div>
                </div>

                <div className="row mb-4">
                    <label for="emailLabel" class="col-sm-3 col-form-label form-label">Carrier</label>

                    <div class="col-sm-9">
                       <input type="text" className="form-control" />
                    </div>
                </div>

                <div className="row mb-4">
                    <label for="emailLabel" class="col-sm-3 col-form-label form-label">Group/Plan Number</label>

                    <div class="col-sm-9">
                       <input type="text" className="form-control" />
                    </div>
                </div>












                <div class="d-flex justify-content-end">
                     {/* <SubmitButton
                                                processing={processing}
                                                actionText="Save Changes"
                    
                                            /> */}
                    
                   
                </div>
            </form>

        </>
    )
}