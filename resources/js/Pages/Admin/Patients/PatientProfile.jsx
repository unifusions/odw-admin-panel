import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import InsuranceDetails from "./InsuranceDetails";

export default function PatientProfile() {
    return (

        < AuthenticatedLayout
            header='Patients'

        >
            <Head title="Registered Patients" />

            <div class="row">
                <div class="col-lg-3">

                    <div class="navbar-expand-lg navbar-vertical mb-3 mb-lg-5">


                        <div class="d-grid">
                            <button type="button" class="navbar-toggler btn btn-white mb-3" data-bs-toggle="collapse" data-bs-target="#navbarVerticalNavMenu" aria-label="Toggle navigation" aria-expanded="false" aria-controls="navbarVerticalNavMenu">
                                <span class="d-flex justify-content-between align-items-center">
                                    <span class="text-dark">Menu</span>

                                    <span class="navbar-toggler-default">
                                        <i class="bi-list"></i>
                                    </span>

                                    <span class="navbar-toggler-toggled">
                                        <i class="bi-x"></i>
                                    </span>
                                </span>
                            </button>
                        </div>


                        <div>

                            <div className="">
                                <label class="avatar avatar-xxl avatar-circle avatar-uploader profile-cover-avatar" for="editAvatarUploaderModal">
                                    <img id="editAvatarImgModal" class="avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description" />

                                    <input type="file" class="js-file-attach avatar-uploader-input" id="editAvatarUploaderModal" />

                                    <span class="avatar-uploader-trigger">
                                        <i class="bi-pencil-fill avatar-uploader-icon shadow-sm"></i>
                                    </span>
                                </label>

                            </div>

                            <div id="navbarVerticalNavMenu" className="collapse navbar-collapse sticky-top" style={{ top: '5rem', zIndex: '1000' }}>



                                <ul id="navbarSettings" class="js-sticky-block js-scrollspy card card-navbar-nav nav nav-tabs nav-lg nav-vertical"  >
                                    <li class="nav-item">
                                        <a class="nav-link active" href="#content">
                                            <i class="bi-person nav-icon"></i> Basic information
                                        </a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link" href="#passwordSection">
                                            <i class="bi-key nav-icon"></i> Password
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#insuranceSection">
                                            <i class="bi-gear nav-icon"></i> Insurance Details
                                        </a>
                                    </li>

                                </ul>
                            </div>


                        </div>



                    </div>

                </div>

                <div class="col-lg-9">
                    <div class="d-grid gap-3 gap-lg-5">



                        <div class="card">
                            <div class="card-header">
                                <h2 class="card-title h4">Basic information</h2>
                            </div>


                            <div class="card-body">

                                <form>

                                    <div class="row mb-4">
                                        <label for="firstNameLabel" class="col-sm-3 col-form-label form-label">Full name <i class="bi-question-circle text-body ms-1">
                                        </i></label>

                                        <div class="col-sm-9">
                                            <div class="input-group input-group-sm-vertical">
                                                <input type="text" class="form-control" name="firstName" id="firstNameLabel" placeholder="Your first name" aria-label="Your first name" value="Mark" />
                                                <input type="text" class="form-control" name="lastName" id="lastNameLabel" placeholder="Your last name" aria-label="Your last name" value="Williams" />
                                            </div>
                                        </div>
                                    </div>



                                    <div class="row mb-4">
                                        <label for="emailLabel" class="col-sm-3 col-form-label form-label">Email</label>

                                        <div class="col-sm-9">
                                            <input type="email" class="form-control" name="email" id="emailLabel" placeholder="Email" aria-label="Email" value="mark@site.com" />
                                        </div>
                                    </div>



                                    <div class="row mb-4">
                                        <label for="phoneLabel" class="col-sm-3 col-form-label form-label">Phone </label>

                                        <div class="col-sm-9">
                                            <input type="text" class="js-input-mask form-control" name="phone" id="phoneLabel" placeholder="+x(xxx)xxx-xx-xx"
                                                aria-label="+x(xxx)xxx-xx-xx" value="+1 (609) 972-22-22" />
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
                                        <label for="zipCodeLabel" class="col-sm-3 col-form-label form-label">Zip code <i class="bi-question-circle text-body ms-1" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="You can find your code in a postal address." data-bs-original-title="You can find your code in a postal address."></i></label>

                                        <div class="col-sm-9">
                                            <input type="text" class="js-input-mask form-control" name="zipCode" id="zipCodeLabel" placeholder="Your zip code" aria-label="Your zip code" value="KW5 8NW" />
                                        </div>
                                    </div>





                                    <div class="d-flex justify-content-end">
                                        <button type="submit" class="btn btn-primary">Save changes</button>
                                    </div>
                                </form>

                            </div>

                        </div>





                        <div id="passwordSection" class="card">
                            <div class="card-header">
                                <h4 class="card-title">Change your password</h4>
                            </div>


                            <div class="card-body">

                                <form id="changePasswordForm">





                                    <div class="row mb-4">
                                        <label for="newPassword" class="col-sm-3 col-form-label form-label">New password</label>

                                        <div class="col-sm-9">
                                            <input type="password" class="form-control" name="newPassword" id="newPassword" placeholder="Enter new password" aria-label="Enter new password" />
                                        </div>
                                    </div>



                                    <div class="row mb-4">
                                        <label for="confirmNewPasswordLabel" class="col-sm-3 col-form-label form-label">Confirm new password</label>

                                        <div class="col-sm-9">
                                            <div class="mb-3">
                                                <input type="password" class="form-control" name="confirmNewPassword" id="confirmNewPasswordLabel" placeholder="Confirm your new password" aria-label="Confirm your new password" />
                                            </div>

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


                                    <div class="d-flex justify-content-end">
                                        <button type="submit" class="btn btn-primary">Save Changes</button>
                                    </div>
                                </form>

                            </div>

                        </div>


                        <div id="insuranceSection" className="card">
                            <div class="card-header">
                                <div class="d-flex align-items-center">
                                    <h4 class="mb-0">Insurance Details</h4>

                                </div>
                            </div>
                            <div className="card-body">
                                <InsuranceDetails />
                            </div>
                        </div>











                    </div>


                    <div id="stickyBlockEndPoint"></div>
                </div>
            </div>

        </AuthenticatedLayout>

    )

}