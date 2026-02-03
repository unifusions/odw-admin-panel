import SubmitButton from "@/Components/ui-ext/SubmitButton";

export default function Information() {
    return (
        <div className="content container-fluid">
            <div className="page-header">
                <div className="row align-items-end">
                    <div className="col-sm mb-2 mb-sm-0">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb breadcrumb-no-gutter">
                                <li className="breadcrumb-item"><a className="breadcrumb-link" href="javascript:;">Pages</a></li>
                                <li className="breadcrumb-item"><a className="breadcrumb-link" href="javascript:;">Account</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Settings</li>
                            </ol>
                        </nav>

                        <h1 className="page-header-title">Settings</h1>
                    </div>


                    <div className="col-sm-auto">
                        <a className="btn btn-primary" href="./user-profile-my-profile.html">
                            <i className="bi-person-fill me-1"></i> My profile
                        </a>
                    </div>

                </div>

            </div>

            <div className="row">
                <div className="col-lg-3">
                    <div className="navbar-expand-lg navbar-vertical mb-3 mb-lg-5">
                        <div className="d-grid">
                            <button type="button" className="navbar-toggler btn btn-white mb-3" data-bs-toggle="collapse" data-bs-target="#navbarVerticalNavMenu" aria-label="Toggle navigation" aria-expanded="false" aria-controls="navbarVerticalNavMenu">
                                <span className="d-flex justify-content-between align-items-center">
                                    <span className="text-dark">Menu</span>

                                    <span className="navbar-toggler-default">
                                        <i className="bi-list"></i>
                                    </span>

                                    <span className="navbar-toggler-toggled">
                                        <i className="bi-x"></i>
                                    </span>
                                </span>
                            </button>
                        </div>

                        <div id="navbarVerticalNavMenu" className="collapse navbar-collapse" >
                            <ul id="navbarSettings" className="js-sticky-block js-scrollspy card card-navbar-nav nav nav-tabs nav-lg nav-vertical" >
                                <li className="nav-item">
                                    <a className="nav-link" href="#content">
                                        <i className="bi-person nav-icon"></i> Basic information
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#emailSection">
                                        <i className="bi-at nav-icon"></i> Email
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#passwordSection">
                                        <i className="bi-key nav-icon"></i> Password
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#preferencesSection">
                                        <i className="bi-gear nav-icon"></i> Preferences
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#twoStepVerificationSection">
                                        <i className="bi-shield-lock nav-icon"></i> Two-step verification
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#recentDevicesSection">
                                        <i className="bi-phone nav-icon"></i> Recent devices
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#notificationsSection">
                                        <i className="bi-bell nav-icon"></i> Notifications
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#connectedAccountsSection">
                                        <i className="bi-diagram-3 nav-icon"></i> Connected accounts
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#socialAccountsSection">
                                        <i className="bi-instagram nav-icon"></i> Social accounts
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#deleteAccountSection">
                                        <i className="bi-trash nav-icon"></i> Delete account
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-lg-9">
                    <div className="d-grid gap-3 gap-lg-5">

                        <div className="card">
                            <div className="profile-cover">
                                <div className="profile-cover-img-wrapper">
                                    <img id="profileCoverImg" className="profile-cover-img" src="./assets/img/1920x400/img2.jpg" alt="Image Description" />

                                    <div className="profile-cover-content profile-cover-uploader p-3">
                                        <input type="file" className="js-file-attach profile-cover-uploader-input" id="profileCoverUplaoder" data-hs-file-attach-options="{
                                &quot;textTarget&quot;: &quot;#profileCoverImg&quot;,
                                &quot;mode&quot;: &quot;image&quot;,
                                &quot;targetAttr&quot;: &quot;src&quot;,
                                &quot;allowTypes&quot;: [&quot;.png&quot;, &quot;.jpeg&quot;, &quot;.jpg&quot;]
                             }"/>
                                        <label className="profile-cover-uploader-label btn btn-sm btn-white" for="profileCoverUplaoder">
                                            <i className="bi-camera-fill"></i>
                                            <span className="d-none d-sm-inline-block ms-1">Upload header</span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <label className="avatar avatar-xxl avatar-circle avatar-uploader profile-cover-avatar" for="editAvatarUploaderModal" >
                                <img id="editAvatarImgModal" className="avatar-img" src="./assets/img/160x160/img6.jpg" alt="Image Description" />

                                <input type="file" className="js-file-attach avatar-uploader-input" id="editAvatarUploaderModal" data-hs-file-attach-options="{
                            &quot;textTarget&quot;: &quot;#editAvatarImgModal&quot;,
                            &quot;mode&quot;: &quot;image&quot;,
                            &quot;targetAttr&quot;: &quot;src&quot;,
                            &quot;allowTypes&quot;: [&quot;.png&quot;, &quot;.jpeg&quot;, &quot;.jpg&quot;]
                         }" />

                                <span className="avatar-uploader-trigger">
                                    <i className="bi-pencil-fill avatar-uploader-icon shadow-sm"></i>
                                </span>
                            </label>


                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-5">
                                        <span className="d-block fs-5 mb-2">Who can see your profile photo? <i className="bi-question-circle" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Your visibility setting only applies to your profile photo. Your header image is always visible to anyone." data-bs-original-title="Your visibility setting only applies to your profile photo. Your header image is always visible to anyone."></i></span>

                                        <div className="tom-select-custom">
                                            <select className="js-select form-select tomselected ts-hidden-accessible" data-hs-tom-select-options="{
                                &quot;searchInDropdown&quot;: false,
                                &quot;dropdownWidth&quot;: &quot;auto&quot;
                              }" id="tomselect-1" tabindex="-1">

                                                <option value="privacy2" >Only you</option>
                                                <option value="privacy1">Anyone</option></select>
                                            <div className="ts-wrapper js-select form-select single plugin-change_listener plugin-hs_smart_position input-hidden full has-items"><div className="ts-control"><div className="d-flex align-items-start item" data-value="privacy1" data-ts-item=""><div className="flex-shrink-0"><i className="bi-globe"></i></div><div className="flex-grow-1 ms-2"><span className="d-block fw-semibold">Anyone</span><span className="tom-select-custom-hide small">Visible to anyone who can view your content. Accessible by installed apps.</span></div></div>
                                                <input type="select-one" autocomplete="off" size="1" tabindex="0" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="tomselect-1-ts-dropdown" id="tomselect-1-ts-control" />
                                            </div>
                                                <div className="tom-select-custom">
                                                    <div className="ts-dropdown single plugin-change_listener plugin-hs_smart_position" >
                                                        <div role="listbox" tabindex="-1" className="ts-dropdown-content" id="tomselect-1-ts-dropdown"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>



                        <div className="card">
                            <div className="card-header">
                                <h2 className="card-title h4">Basic information</h2>
                            </div>


                            <div className="card-body">

                                <form>

                                    <div className="row mb-4">
                                        <label for="firstNameLabel" className="col-sm-3 col-form-label form-label">Full name <i className="bi-question-circle text-body ms-1" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Displayed on public forums, such as Front." data-bs-original-title="Displayed on public forums, such as Front."></i></label>

                                        <div className="col-sm-9">
                                            <div className="input-group input-group-sm-vertical">
                                                <input type="text" className="form-control" name="firstName" id="firstNameLabel" placeholder="Your first name" aria-label="Your first name" value="Mark" />
                                                <input type="text" className="form-control" name="lastName" id="lastNameLabel" placeholder="Your last name" aria-label="Your last name" value="Williams" />
                                            </div>
                                        </div>
                                    </div>



                                    <div className="row mb-4">
                                        <label for="emailLabel" className="col-sm-3 col-form-label form-label">Email</label>

                                        <div className="col-sm-9">
                                            <input type="email" className="form-control" name="email" id="emailLabel" placeholder="Email" aria-label="Email" value="mark@site.com" />
                                        </div>
                                    </div>



                                    <div className="row mb-4">
                                        <label for="phoneLabel" className="col-sm-3 col-form-label form-label">Phone <span className="form-label-secondary">(Optional)</span></label>

                                        <div className="col-sm-9">
                                            <input type="text" className="js-input-mask form-control" name="phone" id="phoneLabel" placeholder="+x(xxx)xxx-xx-xx" aria-label="+x(xxx)xxx-xx-xx" value="+1 (609) 972-22-22" data-hs-mask-options="{
                               &quot;mask&quot;: &quot;+0(000)000-00-00&quot;
                             }" />
                                        </div>
                                    </div>



                                    <div className="row mb-4">
                                        <label for="organizationLabel" className="col-sm-3 col-form-label form-label">Organization</label>

                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" name="organization" id="organizationLabel" placeholder="Your organization" aria-label="Your organization" value="Htmlstream" />
                                        </div>
                                    </div>



                                    <div className="row mb-4">
                                        <label for="departmentLabel" className="col-sm-3 col-form-label form-label">Department</label>

                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" name="department" id="departmentLabel" placeholder="Your department" aria-label="Your department" />
                                        </div>
                                    </div>



                                    <div id="accountType" className="row mb-4">
                                        <label className="col-sm-3 col-form-label form-label">Account type</label>

                                        <div className="col-sm-9">
                                            <div className="input-group input-group-sm-vertical">

                                                <label className="form-control" for="userAccountTypeRadio1">
                                                    <span className="form-check">
                                                        <input type="radio" className="form-check-input" name="userAccountTypeRadio" id="userAccountTypeRadio1" checked="" />
                                                        <span className="form-check-label">Individual</span>
                                                    </span>
                                                </label>



                                                <label className="form-control" for="userAccountTypeRadio2">
                                                    <span className="form-check">
                                                        <input type="radio" className="form-check-input" name="userAccountTypeRadio" id="userAccountTypeRadio2" />
                                                        <span className="form-check-label">Company</span>
                                                    </span>
                                                </label>

                                            </div>
                                        </div>
                                    </div>



                                    <div className="row mb-4">
                                        <label for="locationLabel-ts-control" className="col-sm-3 col-form-label form-label" id="locationLabel-ts-label">Location</label>

                                        <div className="col-sm-9">

                                            <div className="tom-select-custom mb-4">
                                                <select className="js-select form-select tomselected ts-hidden-accessible" id="locationLabel" tabindex="-1">
                                                    <option value="AF" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/af.svg&quot; alt=&quot;Afghanistan Flag&quot; /><span className=&quot;text-truncate&quot;>Afghanistan</span></span>">Afghanistan</option>
                                                    <option value="AX" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ax.svg&quot; alt=&quot;Aland Islands Flag&quot; /><span className=&quot;text-truncate&quot;>Aland Islands</span></span>">Aland Islands</option>
                                                    <option value="AL" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/al.svg&quot; alt=&quot;Albania Flag&quot; /><span className=&quot;text-truncate&quot;>Albania</span></span>">Albania</option>
                                                    <option value="DZ" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/dz.svg&quot; alt=&quot;Algeria Flag&quot; /><span className=&quot;text-truncate&quot;>Algeria</span></span>">Algeria</option>
                                                    <option value="AS" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/as.svg&quot; alt=&quot;American Samoa Flag&quot; /><span className=&quot;text-truncate&quot;>American Samoa</span></span>">American Samoa</option>
                                                    <option value="AD" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ad.svg&quot; alt=&quot;Andorra Flag&quot; /><span className=&quot;text-truncate&quot;>Andorra</span></span>">Andorra</option>
                                                    <option value="AO" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ao.svg&quot; alt=&quot;Angola Flag&quot; /><span className=&quot;text-truncate&quot;>Angola</span></span>">Angola</option>
                                                    <option value="AI" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ai.svg&quot; alt=&quot;Anguilla Flag&quot; /><span className=&quot;text-truncate&quot;>Anguilla</span></span>">Anguilla</option>
                                                    <option value="AG" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ag.svg&quot; alt=&quot;Antigua and Barbuda Flag&quot; /><span className=&quot;text-truncate&quot;>Antigua and Barbuda</span></span>">Antigua and Barbuda</option>
                                                    <option value="AR" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ar.svg&quot; alt=&quot;Argentina Flag&quot; /><span className=&quot;text-truncate&quot;>Argentina</span></span>">Argentina</option>
                                                    <option value="AM" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/am.svg&quot; alt=&quot;Armenia Flag&quot; /><span className=&quot;text-truncate&quot;>Armenia</span></span>">Armenia</option>
                                                    <option value="AW" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/aw.svg&quot; alt=&quot;Aruba Flag&quot; /><span className=&quot;text-truncate&quot;>Aruba</span></span>">Aruba</option>
                                                    <option value="AU" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/au.svg&quot; alt=&quot;Australia Flag&quot; /><span className=&quot;text-truncate&quot;>Australia</span></span>">Australia</option>
                                                    <option value="AT" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/at.svg&quot; alt=&quot;Austria Flag&quot; /><span className=&quot;text-truncate&quot;>Austria</span></span>">Austria</option>
                                                    <option value="AZ" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/az.svg&quot; alt=&quot;Azerbaijan Flag&quot; /><span className=&quot;text-truncate&quot;>Azerbaijan</span></span>">Azerbaijan</option>
                                                    <option value="BS" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bs.svg&quot; alt=&quot;Bahamas Flag&quot; /><span className=&quot;text-truncate&quot;>Bahamas</span></span>">Bahamas</option>
                                                    <option value="BH" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bh.svg&quot; alt=&quot;Bahrain Flag&quot; /><span className=&quot;text-truncate&quot;>Bahrain</span></span>">Bahrain</option>
                                                    <option value="BD" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bd.svg&quot; alt=&quot;Bangladesh Flag&quot; /><span className=&quot;text-truncate&quot;>Bangladesh</span></span>">Bangladesh</option>
                                                    <option value="BB" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bb.svg&quot; alt=&quot;Barbados Flag&quot; /><span className=&quot;text-truncate&quot;>Barbados</span></span>">Barbados</option>
                                                    <option value="BY" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/by.svg&quot; alt=&quot;Belarus Flag&quot; /><span className=&quot;text-truncate&quot;>Belarus</span></span>">Belarus</option>
                                                    <option value="BE" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/be.svg&quot; alt=&quot;Belgium Flag&quot; /><span className=&quot;text-truncate&quot;>Belgium</span></span>">Belgium</option>
                                                    <option value="BZ" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bz.svg&quot; alt=&quot;Belize Flag&quot; /><span className=&quot;text-truncate&quot;>Belize</span></span>">Belize</option>
                                                    <option value="BJ" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bj.svg&quot; alt=&quot;Benin Flag&quot; /><span className=&quot;text-truncate&quot;>Benin</span></span>">Benin</option>
                                                    <option value="BM" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bm.svg&quot; alt=&quot;Bermuda Flag&quot; /><span className=&quot;text-truncate&quot;>Bermuda</span></span>">Bermuda</option>
                                                    <option value="BT" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bt.svg&quot; alt=&quot;Bhutan Flag&quot; /><span className=&quot;text-truncate&quot;>Bhutan</span></span>">Bhutan</option>
                                                    <option value="BO" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bo.svg&quot; alt=&quot;Bolivia (Plurinational State of) Flag&quot; /><span className=&quot;text-truncate&quot;>Bolivia (Plurinational State of)</span></span>">Bolivia (Plurinational State of)</option>
                                                    <option value="BQ" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bq.svg&quot; alt=&quot;Bonaire, Sint Eustatius and Saba Flag&quot; /><span className=&quot;text-truncate&quot;>Bonaire, Sint Eustatius and Saba</span></span>">Bonaire, Sint Eustatius and Saba</option>
                                                    <option value="BA" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ba.svg&quot; alt=&quot;Bosnia and Herzegovina Flag&quot; /><span className=&quot;text-truncate&quot;>Bosnia and Herzegovina</span></span>">Bosnia and Herzegovina</option>
                                                    <option value="BW" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bw.svg&quot; alt=&quot;Botswana Flag&quot; /><span className=&quot;text-truncate&quot;>Botswana</span></span>">Botswana</option>
                                                    <option value="BR" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/br.svg&quot; alt=&quot;Brazil Flag&quot; /><span className=&quot;text-truncate&quot;>Brazil</span></span>">Brazil</option>
                                                    <option value="IO" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/io.svg&quot; alt=&quot;British Indian Ocean Territory Flag&quot; /><span className=&quot;text-truncate&quot;>British Indian Ocean Territory</span></span>">British Indian Ocean Territory</option>
                                                    <option value="BN" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bn.svg&quot; alt=&quot;Brunei Darussalam Flag&quot; /><span className=&quot;text-truncate&quot;>Brunei Darussalam</span></span>">Brunei Darussalam</option>
                                                    <option value="BG" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bg.svg&quot; alt=&quot;Bulgaria Flag&quot; /><span className=&quot;text-truncate&quot;>Bulgaria</span></span>">Bulgaria</option>
                                                    <option value="BF" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bf.svg&quot; alt=&quot;Burkina Faso Flag&quot; /><span className=&quot;text-truncate&quot;>Burkina Faso</span></span>">Burkina Faso</option>
                                                    <option value="BI" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bi.svg&quot; alt=&quot;Burundi Flag&quot; /><span className=&quot;text-truncate&quot;>Burundi</span></span>">Burundi</option>
                                                    <option value="CV" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cv.svg&quot; alt=&quot;Cabo Verde Flag&quot; /><span className=&quot;text-truncate&quot;>Cabo Verde</span></span>">Cabo Verde</option>
                                                    <option value="KH" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/kh.svg&quot; alt=&quot;Cambodia Flag&quot; /><span className=&quot;text-truncate&quot;>Cambodia</span></span>">Cambodia</option>
                                                    <option value="CM" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cm.svg&quot; alt=&quot;Cameroon Flag&quot; /><span className=&quot;text-truncate&quot;>Cameroon</span></span>">Cameroon</option>
                                                    <option value="CA" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ca.svg&quot; alt=&quot;Canada Flag&quot; /><span className=&quot;text-truncate&quot;>Canada</span></span>">Canada</option>
                                                    <option value="KY" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ky.svg&quot; alt=&quot;Cayman Islands Flag&quot; /><span className=&quot;text-truncate&quot;>Cayman Islands</span></span>">Cayman Islands</option>
                                                    <option value="CF" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cf.svg&quot; alt=&quot;Central African Republic Flag&quot; /><span className=&quot;text-truncate&quot;>Central African Republic</span></span>">Central African Republic</option>
                                                    <option value="TD" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/td.svg&quot; alt=&quot;Chad Flag&quot; /><span className=&quot;text-truncate&quot;>Chad</span></span>">Chad</option>
                                                    <option value="CL" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cl.svg&quot; alt=&quot;Chile Flag&quot; /><span className=&quot;text-truncate&quot;>Chile</span></span>">Chile</option>
                                                    <option value="CN" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cn.svg&quot; alt=&quot;China Flag&quot; /><span className=&quot;text-truncate&quot;>China</span></span>">China</option>
                                                    <option value="CX" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cx.svg&quot; alt=&quot;Christmas Island Flag&quot; /><span className=&quot;text-truncate&quot;>Christmas Island</span></span>">Christmas Island</option>
                                                    <option value="CC" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cc.svg&quot; alt=&quot;Cocos (Keeling) Islands Flag&quot; /><span className=&quot;text-truncate&quot;>Cocos (Keeling) Islands</span></span>">Cocos (Keeling) Islands</option>
                                                    <option value="CO" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/co.svg&quot; alt=&quot;Colombia Flag&quot; /><span className=&quot;text-truncate&quot;>Colombia</span></span>">Colombia</option>
                                                    <option value="KM" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/km.svg&quot; alt=&quot;Comoros Flag&quot; /><span className=&quot;text-truncate&quot;>Comoros</span></span>">Comoros</option>
                                                    <option value="CK" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ck.svg&quot; alt=&quot;Cook Islands Flag&quot; /><span className=&quot;text-truncate&quot;>Cook Islands</span></span>">Cook Islands</option>
                                                    <option value="CR" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cr.svg&quot; alt=&quot;Costa Rica Flag&quot; /><span className=&quot;text-truncate&quot;>Costa Rica</span></span>">Costa Rica</option>
                                                    <option value="HR" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/hr.svg&quot; alt=&quot;Croatia Flag&quot; /><span className=&quot;text-truncate&quot;>Croatia</span></span>">Croatia</option>
                                                    <option value="CU" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cu.svg&quot; alt=&quot;Cuba Flag&quot; /><span className=&quot;text-truncate&quot;>Cuba</span></span>">Cuba</option>
                                                    <option value="CW" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cw.svg&quot; alt=&quot;Curaçao Flag&quot; /><span className=&quot;text-truncate&quot;>Curaçao</span></span>">Curaçao</option>
                                                    <option value="CY" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cy.svg&quot; alt=&quot;Cyprus Flag&quot; /><span className=&quot;text-truncate&quot;>Cyprus</span></span>">Cyprus</option>
                                                    <option value="CZ" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cz.svg&quot; alt=&quot;Czech Republic Flag&quot; /><span className=&quot;text-truncate&quot;>Czech Republic</span></span>">Czech Republic</option>
                                                    <option value="CI" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ci.svg&quot; alt=Côte d'Ivoire Flag&quot; /><span className=&quot;text-truncate&quot;>Côte d'Ivoire</span></span>">Côte d'Ivoire</option>
                                                    <option value="CD" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cd.svg&quot; alt=&quot;Democratic Republic of the Congo Flag&quot; /><span className=&quot;text-truncate&quot;>Democratic Republic of the Congo</span></span>">Democratic Republic of the Congo</option>
                                                    <option value="DK" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/dk.svg&quot; alt=&quot;Denmark Flag&quot; /><span className=&quot;text-truncate&quot;>Denmark</span></span>">Denmark</option>
                                                    <option value="DJ" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/dj.svg&quot; alt=&quot;Djibouti Flag&quot; /><span className=&quot;text-truncate&quot;>Djibouti</span></span>">Djibouti</option>
                                                    <option value="DM" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/dm.svg&quot; alt=&quot;Dominica Flag&quot; /><span className=&quot;text-truncate&quot;>Dominica</span></span>">Dominica</option>
                                                    <option value="DO" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/do.svg&quot; alt=&quot;Dominican Republic Flag&quot; /><span className=&quot;text-truncate&quot;>Dominican Republic</span></span>">Dominican Republic</option>
                                                    <option value="EC" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ec.svg&quot; alt=&quot;Ecuador Flag&quot; /><span className=&quot;text-truncate&quot;>Ecuador</span></span>">Ecuador</option>
                                                    <option value="EG" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/eg.svg&quot; alt=&quot;Egypt Flag&quot; /><span className=&quot;text-truncate&quot;>Egypt</span></span>">Egypt</option>
                                                    <option value="SV" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sv.svg&quot; alt=&quot;El Salvador Flag&quot; /><span className=&quot;text-truncate&quot;>El Salvador</span></span>">El Salvador</option>
                                                    <option value="GB-ENG" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gb-eng.svg&quot; alt=&quot;England Flag&quot; /><span className=&quot;text-truncate&quot;>England</span></span>">England</option>
                                                    <option value="GQ" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gq.svg&quot; alt=&quot;Equatorial Guinea Flag&quot; /><span className=&quot;text-truncate&quot;>Equatorial Guinea</span></span>">Equatorial Guinea</option>
                                                    <option value="ER" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/er.svg&quot; alt=&quot;Eritrea Flag&quot; /><span className=&quot;text-truncate&quot;>Eritrea</span></span>">Eritrea</option>
                                                    <option value="EE" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ee.svg&quot; alt=&quot;Estonia Flag&quot; /><span className=&quot;text-truncate&quot;>Estonia</span></span>">Estonia</option>
                                                    <option value="ET" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/et.svg&quot; alt=&quot;Ethiopia Flag&quot; /><span className=&quot;text-truncate&quot;>Ethiopia</span></span>">Ethiopia</option>
                                                    <option value="FK" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/fk.svg&quot; alt=&quot;Falkland Islands Flag&quot; /><span className=&quot;text-truncate&quot;>Falkland Islands</span></span>">Falkland Islands</option>
                                                    <option value="FO" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/fo.svg&quot; alt=&quot;Faroe Islands Flag&quot; /><span className=&quot;text-truncate&quot;>Faroe Islands</span></span>">Faroe Islands</option>
                                                    <option value="FM" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/fm.svg&quot; alt=&quot;Federated States of Micronesia Flag&quot; /><span className=&quot;text-truncate&quot;>Federated States of Micronesia</span></span>">Federated States of Micronesia</option>
                                                    <option value="FJ" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/fj.svg&quot; alt=&quot;Fiji Flag&quot; /><span className=&quot;text-truncate&quot;>Fiji</span></span>">Fiji</option>
                                                    <option value="FI" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/fi.svg&quot; alt=&quot;Finland Flag&quot; /><span className=&quot;text-truncate&quot;>Finland</span></span>">Finland</option>
                                                    <option value="FR" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/fr.svg&quot; alt=&quot;France Flag&quot; /><span className=&quot;text-truncate&quot;>France</span></span>">France</option>
                                                    <option value="GF" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gf.svg&quot; alt=&quot;French Guiana Flag&quot; /><span className=&quot;text-truncate&quot;>French Guiana</span></span>">French Guiana</option>
                                                    <option value="PF" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/pf.svg&quot; alt=&quot;French Polynesia Flag&quot; /><span className=&quot;text-truncate&quot;>French Polynesia</span></span>">French Polynesia</option>
                                                    <option value="TF" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tf.svg&quot; alt=&quot;French Southern Territories Flag&quot; /><span className=&quot;text-truncate&quot;>French Southern Territories</span></span>">French Southern Territories</option>
                                                    <option value="GA" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ga.svg&quot; alt=&quot;Gabon Flag&quot; /><span className=&quot;text-truncate&quot;>Gabon</span></span>">Gabon</option>
                                                    <option value="GM" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gm.svg&quot; alt=&quot;Gambia Flag&quot; /><span className=&quot;text-truncate&quot;>Gambia</span></span>">Gambia</option>
                                                    <option value="GE" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ge.svg&quot; alt=&quot;Georgia Flag&quot; /><span className=&quot;text-truncate&quot;>Georgia</span></span>">Georgia</option>
                                                    <option value="DE" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/de.svg&quot; alt=&quot;Germany Flag&quot; /><span className=&quot;text-truncate&quot;>Germany</span></span>">Germany</option>
                                                    <option value="GH" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gh.svg&quot; alt=&quot;Ghana Flag&quot; /><span className=&quot;text-truncate&quot;>Ghana</span></span>">Ghana</option>
                                                    <option value="GI" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gi.svg&quot; alt=&quot;Gibraltar Flag&quot; /><span className=&quot;text-truncate&quot;>Gibraltar</span></span>">Gibraltar</option>
                                                    <option value="GR" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gr.svg&quot; alt=&quot;Greece Flag&quot; /><span className=&quot;text-truncate&quot;>Greece</span></span>">Greece</option>
                                                    <option value="GL" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gl.svg&quot; alt=&quot;Greenland Flag&quot; /><span className=&quot;text-truncate&quot;>Greenland</span></span>">Greenland</option>
                                                    <option value="GD" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gd.svg&quot; alt=&quot;Grenada Flag&quot; /><span className=&quot;text-truncate&quot;>Grenada</span></span>">Grenada</option>
                                                    <option value="GP" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gp.svg&quot; alt=&quot;Guadeloupe Flag&quot; /><span className=&quot;text-truncate&quot;>Guadeloupe</span></span>">Guadeloupe</option>
                                                    <option value="GU" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gu.svg&quot; alt=&quot;Guam Flag&quot; /><span className=&quot;text-truncate&quot;>Guam</span></span>">Guam</option>
                                                    <option value="GT" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gt.svg&quot; alt=&quot;Guatemala Flag&quot; /><span className=&quot;text-truncate&quot;>Guatemala</span></span>">Guatemala</option>
                                                    <option value="GG" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gg.svg&quot; alt=&quot;Guernsey Flag&quot; /><span className=&quot;text-truncate&quot;>Guernsey</span></span>">Guernsey</option>
                                                    <option value="GN" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gn.svg&quot; alt=&quot;Guinea Flag&quot; /><span className=&quot;text-truncate&quot;>Guinea</span></span>">Guinea</option>
                                                    <option value="GW" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gw.svg&quot; alt=&quot;Guinea-Bissau Flag&quot; /><span className=&quot;text-truncate&quot;>Guinea-Bissau</span></span>">Guinea-Bissau</option>
                                                    <option value="GY" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gy.svg&quot; alt=&quot;Guyana Flag&quot; /><span className=&quot;text-truncate&quot;>Guyana</span></span>">Guyana</option>
                                                    <option value="HT" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ht.svg&quot; alt=&quot;Haiti Flag&quot; /><span className=&quot;text-truncate&quot;>Haiti</span></span>">Haiti</option>
                                                    <option value="VA" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/va.svg&quot; alt=&quot;Holy See Flag&quot; /><span className=&quot;text-truncate&quot;>Holy See</span></span>">Holy See</option>
                                                    <option value="HN" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/hn.svg&quot; alt=&quot;Honduras Flag&quot; /><span className=&quot;text-truncate&quot;>Honduras</span></span>">Honduras</option>
                                                    <option value="HK" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/hk.svg&quot; alt=&quot;Hong Kong Flag&quot; /><span className=&quot;text-truncate&quot;>Hong Kong</span></span>">Hong Kong</option>
                                                    <option value="HU" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/hu.svg&quot; alt=&quot;Hungary Flag&quot; /><span className=&quot;text-truncate&quot;>Hungary</span></span>">Hungary</option>
                                                    <option value="IS" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/is.svg&quot; alt=&quot;Iceland Flag&quot; /><span className=&quot;text-truncate&quot;>Iceland</span></span>">Iceland</option>
                                                    <option value="IN" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/in.svg&quot; alt=&quot;India Flag&quot; /><span className=&quot;text-truncate&quot;>India</span></span>">India</option>
                                                    <option value="ID" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/id.svg&quot; alt=&quot;Indonesia Flag&quot; /><span className=&quot;text-truncate&quot;>Indonesia</span></span>">Indonesia</option>
                                                    <option value="IR" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ir.svg&quot; alt=&quot;Iran (Islamic Republic of) Flag&quot; /><span className=&quot;text-truncate&quot;>Iran (Islamic Republic of)</span></span>">Iran (Islamic Republic of)</option>
                                                    <option value="IQ" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/iq.svg&quot; alt=&quot;Iraq Flag&quot; /><span className=&quot;text-truncate&quot;>Iraq</span></span>">Iraq</option>
                                                    <option value="IE" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ie.svg&quot; alt=&quot;Ireland Flag&quot; /><span className=&quot;text-truncate&quot;>Ireland</span></span>">Ireland</option>
                                                    <option value="IM" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/im.svg&quot; alt=&quot;Isle of Man Flag&quot; /><span className=&quot;text-truncate&quot;>Isle of Man</span></span>">Isle of Man</option>
                                                    <option value="IL" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/il.svg&quot; alt=&quot;Israel Flag&quot; /><span className=&quot;text-truncate&quot;>Israel</span></span>">Israel</option>
                                                    <option value="IT" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/it.svg&quot; alt=&quot;Italy Flag&quot; /><span className=&quot;text-truncate&quot;>Italy</span></span>">Italy</option>
                                                    <option value="JM" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/jm.svg&quot; alt=&quot;Jamaica Flag&quot; /><span className=&quot;text-truncate&quot;>Jamaica</span></span>">Jamaica</option>
                                                    <option value="JP" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/jp.svg&quot; alt=&quot;Japan Flag&quot; /><span className=&quot;text-truncate&quot;>Japan</span></span>">Japan</option>
                                                    <option value="JE" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/je.svg&quot; alt=&quot;Jersey Flag&quot; /><span className=&quot;text-truncate&quot;>Jersey</span></span>">Jersey</option>
                                                    <option value="JO" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/jo.svg&quot; alt=&quot;Jordan Flag&quot; /><span className=&quot;text-truncate&quot;>Jordan</span></span>">Jordan</option>
                                                    <option value="KZ" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/kz.svg&quot; alt=&quot;Kazakhstan Flag&quot; /><span className=&quot;text-truncate&quot;>Kazakhstan</span></span>">Kazakhstan</option>
                                                    <option value="KE" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ke.svg&quot; alt=&quot;Kenya Flag&quot; /><span className=&quot;text-truncate&quot;>Kenya</span></span>">Kenya</option>
                                                    <option value="KI" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ki.svg&quot; alt=&quot;Kiribati Flag&quot; /><span className=&quot;text-truncate&quot;>Kiribati</span></span>">Kiribati</option>
                                                    <option value="KW" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/kw.svg&quot; alt=&quot;Kuwait Flag&quot; /><span className=&quot;text-truncate&quot;>Kuwait</span></span>">Kuwait</option>
                                                    <option value="KG" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/kg.svg&quot; alt=&quot;Kyrgyzstan Flag&quot; /><span className=&quot;text-truncate&quot;>Kyrgyzstan</span></span>">Kyrgyzstan</option>
                                                    <option value="LA" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/la.svg&quot; alt=&quot;Laos Flag&quot; /><span className=&quot;text-truncate&quot;>Laos</span></span>">Laos</option>
                                                    <option value="LV" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/lv.svg&quot; alt=&quot;Latvia Flag&quot; /><span className=&quot;text-truncate&quot;>Latvia</span></span>">Latvia</option>
                                                    <option value="LB" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/lb.svg&quot; alt=&quot;Lebanon Flag&quot; /><span className=&quot;text-truncate&quot;>Lebanon</span></span>">Lebanon</option>
                                                    <option value="LS" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ls.svg&quot; alt=&quot;Lesotho Flag&quot; /><span className=&quot;text-truncate&quot;>Lesotho</span></span>">Lesotho</option>
                                                    <option value="LR" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/lr.svg&quot; alt=&quot;Liberia Flag&quot; /><span className=&quot;text-truncate&quot;>Liberia</span></span>">Liberia</option>
                                                    <option value="LY" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ly.svg&quot; alt=&quot;Libya Flag&quot; /><span className=&quot;text-truncate&quot;>Libya</span></span>">Libya</option>
                                                    <option value="LI" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/li.svg&quot; alt=&quot;Liechtenstein Flag&quot; /><span className=&quot;text-truncate&quot;>Liechtenstein</span></span>">Liechtenstein</option>
                                                    <option value="LT" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/lt.svg&quot; alt=&quot;Lithuania Flag&quot; /><span className=&quot;text-truncate&quot;>Lithuania</span></span>">Lithuania</option>
                                                    <option value="LU" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/lu.svg&quot; alt=&quot;Luxembourg Flag&quot; /><span className=&quot;text-truncate&quot;>Luxembourg</span></span>">Luxembourg</option>
                                                    <option value="MO" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mo.svg&quot; alt=&quot;Macau Flag&quot; /><span className=&quot;text-truncate&quot;>Macau</span></span>">Macau</option>
                                                    <option value="MG" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mg.svg&quot; alt=&quot;Madagascar Flag&quot; /><span className=&quot;text-truncate&quot;>Madagascar</span></span>">Madagascar</option>
                                                    <option value="MW" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mw.svg&quot; alt=&quot;Malawi Flag&quot; /><span className=&quot;text-truncate&quot;>Malawi</span></span>">Malawi</option>
                                                    <option value="MY" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/my.svg&quot; alt=&quot;Malaysia Flag&quot; /><span className=&quot;text-truncate&quot;>Malaysia</span></span>">Malaysia</option>
                                                    <option value="MV" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mv.svg&quot; alt=&quot;Maldives Flag&quot; /><span className=&quot;text-truncate&quot;>Maldives</span></span>">Maldives</option>
                                                    <option value="ML" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ml.svg&quot; alt=&quot;Mali Flag&quot; /><span className=&quot;text-truncate&quot;>Mali</span></span>">Mali</option>
                                                    <option value="MT" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mt.svg&quot; alt=&quot;Malta Flag&quot; /><span className=&quot;text-truncate&quot;>Malta</span></span>">Malta</option>
                                                    <option value="MH" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mh.svg&quot; alt=&quot;Marshall Islands Flag&quot; /><span className=&quot;text-truncate&quot;>Marshall Islands</span></span>">Marshall Islands</option>
                                                    <option value="MQ" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mq.svg&quot; alt=&quot;Martinique Flag&quot; /><span className=&quot;text-truncate&quot;>Martinique</span></span>">Martinique</option>
                                                    <option value="MR" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mr.svg&quot; alt=&quot;Mauritania Flag&quot; /><span className=&quot;text-truncate&quot;>Mauritania</span></span>">Mauritania</option>
                                                    <option value="MU" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mu.svg&quot; alt=&quot;Mauritius Flag&quot; /><span className=&quot;text-truncate&quot;>Mauritius</span></span>">Mauritius</option>
                                                    <option value="YT" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/yt.svg&quot; alt=&quot;Mayotte Flag&quot; /><span className=&quot;text-truncate&quot;>Mayotte</span></span>">Mayotte</option>
                                                    <option value="MX" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mx.svg&quot; alt=&quot;Mexico Flag&quot; /><span className=&quot;text-truncate&quot;>Mexico</span></span>">Mexico</option>
                                                    <option value="MD" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/md.svg&quot; alt=&quot;Moldova Flag&quot; /><span className=&quot;text-truncate&quot;>Moldova</span></span>">Moldova</option>
                                                    <option value="MC" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mc.svg&quot; alt=&quot;Monaco Flag&quot; /><span className=&quot;text-truncate&quot;>Monaco</span></span>">Monaco</option>
                                                    <option value="MN" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mn.svg&quot; alt=&quot;Mongolia Flag&quot; /><span className=&quot;text-truncate&quot;>Mongolia</span></span>">Mongolia</option>
                                                    <option value="ME" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/me.svg&quot; alt=&quot;Montenegro Flag&quot; /><span className=&quot;text-truncate&quot;>Montenegro</span></span>">Montenegro</option>
                                                    <option value="MS" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ms.svg&quot; alt=&quot;Montserrat Flag&quot; /><span className=&quot;text-truncate&quot;>Montserrat</span></span>">Montserrat</option>
                                                    <option value="MA" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ma.svg&quot; alt=&quot;Morocco Flag&quot; /><span className=&quot;text-truncate&quot;>Morocco</span></span>">Morocco</option>
                                                    <option value="MZ" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mz.svg&quot; alt=&quot;Mozambique Flag&quot; /><span className=&quot;text-truncate&quot;>Mozambique</span></span>">Mozambique</option>
                                                    <option value="MM" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mm.svg&quot; alt=&quot;Myanmar Flag&quot; /><span className=&quot;text-truncate&quot;>Myanmar</span></span>">Myanmar</option>
                                                    <option value="NA" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/na.svg&quot; alt=&quot;Namibia Flag&quot; /><span className=&quot;text-truncate&quot;>Namibia</span></span>">Namibia</option>
                                                    <option value="NR" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/nr.svg&quot; alt=&quot;Nauru Flag&quot; /><span className=&quot;text-truncate&quot;>Nauru</span></span>">Nauru</option>
                                                    <option value="NP" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/np.svg&quot; alt=&quot;Nepal Flag&quot; /><span className=&quot;text-truncate&quot;>Nepal</span></span>">Nepal</option>
                                                    <option value="NL" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/nl.svg&quot; alt=&quot;Netherlands Flag&quot; /><span className=&quot;text-truncate&quot;>Netherlands</span></span>">Netherlands</option>
                                                    <option value="NC" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/nc.svg&quot; &quot;alt=&quot;New Caledonia Flag&quot; /><span className=&quot;text-truncate&quot;>New Caledonia</span></span>">New Caledonia</option>
                                                    <option value="NZ" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/nz.svg&quot; alt=&quot;New Zealand Flag&quot; /><span className=&quot;text-truncate&quot;>New Zealand</span></span>">New Zealand</option>
                                                    <option value="NI" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ni.svg&quot; alt=&quot;Nicaragua Flag&quot; /><span className=&quot;text-truncate&quot;>Nicaragua</span></span>">Nicaragua</option>
                                                    <option value="NE" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ne.svg&quot; alt=&quot;Niger Flag&quot; /><span className=&quot;text-truncate&quot;>Niger</span></span>">Niger</option>
                                                    <option value="NG" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ng.svg&quot; alt=&quot;Nigeria Flag&quot; /><span className=&quot;text-truncate&quot;>Nigeria</span></span>">Nigeria</option>
                                                    <option value="NU" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/nu.svg&quot; alt=&quot;Niue Flag&quot; /><span className=&quot;text-truncate&quot;>Niue</span></span>">Niue</option>
                                                    <option value="NF" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/nf.svg&quot; alt=&quot;Norfolk Island Flag&quot; /><span className=&quot;text-truncate&quot;>Norfolk Island</span></span>">Norfolk Island</option>
                                                    <option value="KP" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/kp.svg&quot; alt=&quot;North Korea Flag&quot; /><span className=&quot;text-truncate&quot;>North Korea</span></span>">North Korea</option>
                                                    <option value="MK" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mk.svg&quot; alt=&quot;North Macedonia Flag&quot; /><span className=&quot;text-truncate&quot;>North Macedonia</span></span>">North Macedonia</option>
                                                    <option value="GB-NIR" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gb-nir.svg&quot; alt=&quot;Northern Ireland Flag&quot; /><span className=&quot;text-truncate&quot;>Northern Ireland</span></span>">Northern Ireland</option>
                                                    <option value="MP" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mp.svg&quot; alt=&quot;Northern Mariana Islands Flag&quot; /><span className=&quot;text-truncate&quot;>Northern Mariana Islands</span></span>">Northern Mariana Islands</option>
                                                    <option value="NO" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/no.svg&quot; alt=&quot;Norway Flag&quot; /><span className=&quot;text-truncate&quot;>Norway</span></span>">Norway</option>
                                                    <option value="OM" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/om.svg&quot; alt=&quot;Oman Flag&quot; /><span className=&quot;text-truncate&quot;>Oman</span></span>">Oman</option>
                                                    <option value="PK" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/pk.svg&quot; alt=&quot;Pakistan Flag&quot; /><span className=&quot;text-truncate&quot;>Pakistan</span></span>">Pakistan</option>
                                                    <option value="PW" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/pw.svg&quot; alt=&quot;Palau Flag&quot; /><span className=&quot;text-truncate&quot;>Palau</span></span>">Palau</option>
                                                    <option value="PA" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/pa.svg&quot; alt=&quot;Panama Flag&quot; /><span className=&quot;text-truncate&quot;>Panama</span></span>">Panama</option>
                                                    <option value="PG" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/pg.svg&quot; alt=&quot;Papua New Guinea Flag&quot; /><span className=&quot;text-truncate&quot;>Papua New Guinea</span></span>">Papua New Guinea</option>
                                                    <option value="PY" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/py.svg&quot; alt=&quot;Paraguay Flag&quot; /><span className=&quot;text-truncate&quot;>Paraguay</span></span>">Paraguay</option>
                                                    <option value="PE" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/pe.svg&quot; alt=&quot;Peru Flag&quot; /><span className=&quot;text-truncate&quot;>Peru</span></span>">Peru</option>
                                                    <option value="PH" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ph.svg&quot; alt=&quot;Philippines Flag&quot; /><span className=&quot;text-truncate&quot;>Philippines</span></span>">Philippines</option>
                                                    <option value="PN" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/pn.svg&quot; alt=&quot;Pitcairn Flag&quot; /><span className=&quot;text-truncate&quot;>Pitcairn</span></span>">Pitcairn</option>
                                                    <option value="PL" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/pl.svg&quot; alt=&quot;Poland Flag&quot; /><span className=&quot;text-truncate&quot;>Poland</span></span>">Poland</option>
                                                    <option value="PT" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/pt.svg&quot; alt=&quot;Portugal Flag&quot; /><span className=&quot;text-truncate&quot;>Portugal</span></span>">Portugal</option>
                                                    <option value="PR" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/pr.svg&quot; alt=&quot;Puerto Rico Flag&quot; /><span className=&quot;text-truncate&quot;>Puerto Rico</span></span>">Puerto Rico</option>
                                                    <option value="QA" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/qa.svg&quot; alt=&quot;Qatar Flag&quot; /><span className=&quot;text-truncate&quot;>Qatar</span></span>">Qatar</option>
                                                    <option value="CG" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cg.svg&quot; alt=&quot;Republic of the Congo Flag&quot; /><span className=&quot;text-truncate&quot;>Republic of the Congo</span></span>">Republic of the Congo</option>
                                                    <option value="RO" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ro.svg&quot; alt=&quot;Romania Flag&quot; /><span className=&quot;text-truncate&quot;>Romania</span></span>">Romania</option>
                                                    <option value="RU" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ru.svg&quot; alt=&quot;Russia Flag&quot; /><span className=&quot;text-truncate&quot;>Russia</span></span>">Russia</option>
                                                    <option value="RW" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/rw.svg&quot; alt=&quot;Rwanda Flag&quot; /><span className=&quot;text-truncate&quot;>Rwanda</span></span>">Rwanda</option>
                                                    <option value="RE" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/re.svg&quot; alt=&quot;Réunion Flag&quot; /><span className=&quot;text-truncate&quot;>Réunion</span></span>">Réunion</option>
                                                    <option value="BL" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/bl.svg&quot; alt=&quot;Saint Barthélemy Flag&quot; /><span className=&quot;text-truncate&quot;>Saint Barthélemy</span></span>">Saint Barthélemy</option>
                                                    <option value="SH" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sh.svg&quot; alt=&quot;Saint Helena, Ascension and Tristan da Cunha Flag&quot; /><span className=&quot;text-truncate&quot;>Saint Helena, Ascension and Tristan da Cunha</span></span>">Saint Helena, Ascension and Tristan da Cunha</option>
                                                    <option value="KN" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/kn.svg&quot; alt=&quot;Saint Kitts and Nevis Flag&quot; /><span className=&quot;text-truncate&quot;>Saint Kitts and Nevis</span></span>">Saint Kitts and Nevis</option>
                                                    <option value="LC" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/lc.svg&quot; alt=&quot;Saint Lucia Flag&quot; /><span className=&quot;text-truncate&quot;>Saint Lucia</span></span>">Saint Lucia</option>
                                                    <option value="MF" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/mf.svg&quot; alt=&quot;Saint Martin Flag&quot; /><span className=&quot;text-truncate&quot;>Saint Martin</span></span>">Saint Martin</option>
                                                    <option value="PM" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/pm.svg&quot; alt=&quot;Saint Pierre and Miquelon Flag&quot; /><span className=&quot;text-truncate&quot;>Saint Pierre and Miquelon</span></span>">Saint Pierre and Miquelon</option>
                                                    <option value="VC" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/vc.svg&quot; alt=&quot;Saint Vincent and the Grenadines Flag&quot; /><span className=&quot;text-truncate&quot;>Saint Vincent and the Grenadines</span></span>">Saint Vincent and the Grenadines</option>
                                                    <option value="WS" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ws.svg&quot; alt=&quot;Samoa Flag&quot; /><span className=&quot;text-truncate&quot;>Samoa</span></span>">Samoa</option>
                                                    <option value="SM" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sm.svg&quot; &quot;alt=&quot;San Marino Flag&quot; /><span className=&quot;text-truncate&quot;>San Marino</span></span>">San Marino</option>
                                                    <option value="ST" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/st.svg&quot; &quot;alt=&quot;Sao Tome and Principe Flag&quot; /><span className=&quot;text-truncate&quot;>Sao Tome and Principe</span></span>">Sao Tome and Principe</option>
                                                    <option value="SA" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sa.svg&quot; alt=&quot;Saudi Arabia Flag&quot; /><span className=&quot;text-truncate&quot;>Saudi Arabia</span></span>">Saudi Arabia</option>
                                                    <option value="GB-SCT" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gb-sct.svg&quot; alt=&quot;Scotland Flag&quot; /><span className=&quot;text-truncate&quot;>Scotland</span></span>">Scotland</option>
                                                    <option value="SN" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sn.svg&quot; alt=&quot;Senegal Flag&quot; /><span className=&quot;text-truncate&quot;>Senegal</span></span>">Senegal</option>
                                                    <option value="RS" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/rs.svg&quot; alt=&quot;Serbia Flag&quot; /><span className=&quot;text-truncate&quot;>Serbia</span></span>">Serbia</option>
                                                    <option value="SC" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sc.svg&quot; alt=&quot;Seychelles Flag&quot; /><span className=&quot;text-truncate&quot;>Seychelles</span></span>">Seychelles</option>
                                                    <option value="SL" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sl.svg&quot; alt=&quot;Sierra Leone Flag&quot; /><span className=&quot;text-truncate&quot;>Sierra Leone</span></span>">Sierra Leone</option>
                                                    <option value="SG" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sg.svg&quot; alt=&quot;Singapore Flag&quot; /><span className=&quot;text-truncate&quot;>Singapore</span></span>">Singapore</option>
                                                    <option value="SX" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sx.svg&quot; alt=&quot;Sint Maarten Flag&quot; /><span className=&quot;text-truncate&quot;>Sint Maarten</span></span>">Sint Maarten</option>
                                                    <option value="SK" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sk.svg&quot; alt=&quot;Slovakia Flag&quot; /><span className=&quot;text-truncate&quot;>Slovakia</span></span>">Slovakia</option>
                                                    <option value="SI" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/si.svg&quot; alt=&quot;Slovenia Flag&quot; /><span className=&quot;text-truncate&quot;>Slovenia</span></span>">Slovenia</option>
                                                    <option value="SB" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sb.svg&quot; alt=&quot;Solomon Islands Flag&quot; /><span className=&quot;text-truncate&quot;>Solomon Islands</span></span>">Solomon Islands</option>
                                                    <option value="SO" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/so.svg&quot; alt=&quot;Somalia Flag&quot; /><span className=&quot;text-truncate&quot;>Somalia</span></span>">Somalia</option>
                                                    <option value="ZA" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/za.svg&quot; alt=&quot;South Africa Flag&quot; /><span className=&quot;text-truncate&quot;>South Africa</span></span>">South Africa</option>
                                                    <option value="GS" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gs.svg&quot; alt=&quot;South Georgia and the South Sandwich Islands Flag&quot; /><span className=&quot;text-truncate&quot;>South Georgia and the South Sandwich Islands</span></span>">South Georgia and the South Sandwich Islands</option>
                                                    <option value="KR" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/kr.svg&quot; alt=&quot;South Korea Flag&quot; /><span className=&quot;text-truncate&quot;>South Korea</span></span>">South Korea</option>
                                                    <option value="SS" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ss.svg&quot; alt=&quot;South Sudan Flag&quot; /><span className=&quot;text-truncate&quot;>South Sudan</span></span>">South Sudan</option>
                                                    <option value="ES" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/es.svg&quot; alt=&quot;Spain Flag&quot; /><span className=&quot;text-truncate&quot;>Spain</span></span>">Spain</option>
                                                    <option value="LK" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/lk.svg&quot; &quot;alt=&quot;Sri Lanka Flag&quot; /><span className=&quot;text-truncate&quot;>Sri Lanka</span></span>">Sri Lanka</option>
                                                    <option value="PS" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ps.svg&quot; alt=&quot;State of Palestine Flag&quot; /><span className=&quot;text-truncate&quot;>State of Palestine</span></span>">State of Palestine</option>
                                                    <option value="SD" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sd.svg&quot; alt=&quot;Sudan Flag&quot; /><span className=&quot;text-truncate&quot;>Sudan</span></span>">Sudan</option>
                                                    <option value="SR" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sr.svg&quot; alt=&quot;Suriname Flag&quot; /><span className=&quot;text-truncate&quot;>Suriname</span></span>">Suriname</option>
                                                    <option value="SJ" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sj.svg&quot; alt=&quot;Svalbard and Jan Mayen Flag&quot; /><span className=&quot;text-truncate&quot;>Svalbard and Jan Mayen</span></span>">Svalbard and Jan Mayen</option>
                                                    <option value="SZ" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sz.svg&quot; alt=&quot;Swaziland Flag&quot; /><span className=&quot;text-truncate&quot;>Swaziland</span></span>">Swaziland</option>
                                                    <option value="SE" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/se.svg&quot; alt=&quot;Sweden Flag&quot; /><span className=&quot;text-truncate&quot;>Sweden</span></span>">Sweden</option>
                                                    <option value="CH" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ch.svg&quot; alt=&quot;Switzerland Flag&quot; /><span className=&quot;text-truncate&quot;>Switzerland</span></span>">Switzerland</option>
                                                    <option value="SY" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/sy.svg&quot; alt=&quot;Syrian Arab Republic Flag&quot; /><span className=&quot;text-truncate&quot;>Syrian Arab Republic</span></span>">Syrian Arab Republic</option>
                                                    <option value="TW" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tw.svg&quot; alt=&quot;Taiwan Flag&quot; /><span className=&quot;text-truncate&quot;>Taiwan</span></span>">Taiwan</option>
                                                    <option value="TJ" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tj.svg&quot; alt=&quot;Tajikistan Flag&quot; /><span className=&quot;text-truncate&quot;>Tajikistan</span></span>">Tajikistan</option>
                                                    <option value="TZ" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tz.svg&quot; alt=&quot;Tanzania Flag&quot; /><span className=&quot;text-truncate&quot;>Tanzania</span></span>">Tanzania</option>
                                                    <option value="TH" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/th.svg&quot; alt=&quot;Thailand Flag&quot; /><span className=&quot;text-truncate&quot;>Thailand</span></span>">Thailand</option>
                                                    <option value="TL" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tl.svg&quot; alt=&quot;Timor-Leste Flag&quot; /><span className=&quot;text-truncate&quot;>Timor-Leste</span></span>">Timor-Leste</option>
                                                    <option value="TG" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tg.svg&quot; alt=&quot;Togo Flag&quot; /><span className=&quot;text-truncate&quot;>Togo</span></span>">Togo</option>
                                                    <option value="TK" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tk.svg&quot; alt=&quot;Tokelau Flag&quot; /><span className=&quot;text-truncate&quot;>Tokelau</span></span>">Tokelau</option>
                                                    <option value="TO" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/to.svg&quot; alt=&quot;Tonga Flag&quot; /><span className=&quot;text-truncate&quot;>Tonga</span></span>">Tonga</option>
                                                    <option value="TT" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tt.svg&quot; alt=&quot;Trinidad and Tobago Flag&quot; /><span className=&quot;text-truncate&quot;>Trinidad and Tobago</span></span>">Trinidad and Tobago</option>
                                                    <option value="TN" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tn.svg&quot; alt=&quot;Tunisia Flag&quot; /><span className=&quot;text-truncate&quot;>Tunisia</span></span>">Tunisia</option>
                                                    <option value="TR" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tr.svg&quot; alt=&quot;Turkey Flag&quot; /><span className=&quot;text-truncate&quot;>Turkey</span></span>">Turkey</option>
                                                    <option value="TM" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tm.svg&quot; alt=&quot;Turkmenistan Flag&quot; /><span className=&quot;text-truncate&quot;>Turkmenistan</span></span>">Turkmenistan</option>
                                                    <option value="TC" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tc.svg&quot; alt=&quot;Turks and Caicos Islands Flag&quot; /><span className=&quot;text-truncate&quot;>Turks and Caicos Islands</span></span>">Turks and Caicos Islands</option>
                                                    <option value="TV" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/tv.svg&quot; alt=&quot;Tuvalu Flag&quot; /><span className=&quot;text-truncate&quot;>Tuvalu</span></span>">Tuvalu</option>
                                                    <option value="UG" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ug.svg&quot; alt=&quot;Uganda Flag&quot; /><span className=&quot;text-truncate&quot;>Uganda</span></span>">Uganda</option>
                                                    <option value="UA" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ua.svg&quot; alt=&quot;Ukraine Flag&quot; /><span className=&quot;text-truncate&quot;>Ukraine</span></span>">Ukraine</option>
                                                    <option value="AE" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ae.svg&quot; alt=&quot;United Arab Emirates Flag&quot; /><span className=&quot;text-truncate&quot;>United Arab Emirates</span></span>">United Arab Emirates</option>

                                                    <option value="UM" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/um.svg&quot; alt=&quot;United States Minor Outlying Islands Flag&quot; /><span className=&quot;text-truncate&quot;>United States Minor Outlying Islands</span></span>">United States Minor Outlying Islands</option>
                                                    <option value="US" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/us.svg&quot; alt=&quot;United States of America Flag&quot; /><span className=&quot;text-truncate&quot;>United States of America</span></span>">United States of America</option>
                                                    <option value="UY" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/uy.svg&quot; alt=&quot;Uruguay Flag&quot; /><span className=&quot;text-truncate&quot;>Uruguay</span></span>">Uruguay</option>
                                                    <option value="UZ" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/uz.svg&quot; alt=&quot;Uzbekistan Flag&quot; /><span className=&quot;text-truncate&quot;>Uzbekistan</span></span>">Uzbekistan</option>
                                                    <option value="VU" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/vu.svg&quot; alt=&quot;Vanuatu Flag&quot; /><span className=&quot;text-truncate&quot;>Vanuatu</span></span>">Vanuatu</option>
                                                    <option value="VE" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ve.svg&quot; alt=&quot;Venezuela (Bolivarian Republic of) Flag&quot; /><span className=&quot;text-truncate&quot;>Venezuela (Bolivarian Republic of)</span></span>">Venezuela (Bolivarian Republic of)</option>
                                                    <option value="VN" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/vn.svg&quot; alt=&quot;Vietnam Flag&quot; /><span className=&quot;text-truncate&quot;>Vietnam</span></span>">Vietnam</option>
                                                    <option value="VG" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/vg.svg&quot; alt=&quot;Virgin Islands (British) Flag&quot; /><span className=&quot;text-truncate&quot;>Virgin Islands (British)</span></span>">Virgin Islands (British)</option>
                                                    <option value="VI" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/vi.svg&quot; alt=&quot;Virgin Islands (U.S.) Flag&quot; /><span className=&quot;text-truncate&quot;>Virgin Islands (U.S.)</span></span>">Virgin Islands (U.S.)</option>
                                                    <option value="GB-WLS" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/gb-wls.svg&quot; alt=&quot;Wales Flag&quot; /><span className=&quot;text-truncate&quot;>Wales</span></span>">Wales</option>
                                                    <option value="WF" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/wf.svg&quot; alt=&quot;Wallis and Futuna Flag&quot; /><span className=&quot;text-truncate&quot;>Wallis and Futuna</span></span>">Wallis and Futuna</option>
                                                    <option value="EH" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/eh.svg&quot; alt=&quot;Western Sahara Flag&quot; /><span className=&quot;text-truncate&quot;>Western Sahara</span></span>">Western Sahara</option>
                                                    <option value="YE" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/ye.svg&quot; alt=&quot;Yemen Flag&quot; /><span className=&quot;text-truncate&quot;>Yemen</span></span>">Yemen</option>
                                                    <option value="ZM" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/zm.svg&quot; alt=&quot;Zambia Flag&quot; /><span className=&quot;text-truncate&quot;>Zambia</span></span>">Zambia</option>
                                                    <option value="ZW" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/zw.svg&quot; alt=&quot;Zimbabwe Flag&quot; /><span className=&quot;text-truncate&quot;>Zimbabwe</span></span>">Zimbabwe</option>
                                                    <option value="GB" selected=""
                                                    >United Kingdom</option></select>
                                                <div className="ts-wrapper js-select form-select single plugin-change_listener plugin-hs_smart_position plugin-dropdown_input full has-items">
                                                    <div className="ts-control" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="locationLabel-ts-dropdown" id="locationLabel-ts-control" aria-labelledby="locationLabel-ts-label"
                                                        tabindex="0"><span className="d-flex align-items-center item" data-value="GB" data-ts-item="">
                                                            <img className="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/gb.svg" alt="United Kingdom Flag" />
                                                            <span className="text-truncate">United Kingdom</span></span><input className="items-placeholder" tabindex="-1" placeholder="" />
                                                    </div>

                                                </div>
                                            </div>


                                            <div className="mb-3">
                                                <input type="text" className="form-control" name="city" id="cityLabel" placeholder="City" aria-label="City" value="London" />
                                            </div>

                                            <input type="text" className="form-control" name="state" id="stateLabel" placeholder="State" aria-label="State" />
                                        </div>
                                    </div>



                                    <div className="row mb-4">
                                        <label for="addressLine1Label" className="col-sm-3 col-form-label form-label">Address line 1</label>

                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" name="addressLine1" id="addressLine1Label" placeholder="Your address" aria-label="Your address" value="45 Roker Terrace, Latheronwheel" />
                                        </div>
                                    </div>



                                    <div className="row mb-4">
                                        <label for="addressLine2Label" className="col-sm-3 col-form-label form-label">Address line 2 <span className="form-label-secondary">(Optional)</span></label>

                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" name="addressLine2" id="addressLine2Label" placeholder="Your address" aria-label="Your address" />
                                        </div>
                                    </div>



                                    <div className="row mb-4">
                                        <label for="zipCodeLabel" className="col-sm-3 col-form-label form-label">Zip code <i className="bi-question-circle text-body ms-1" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="You can find your code in a postal address." data-bs-original-title="You can find your code in a postal address."></i></label>

                                        <div className="col-sm-9">
                                            <input type="text" className="js-input-mask form-control" name="zipCode" id="zipCodeLabel" placeholder="Your zip code" aria-label="Your zip code" value="KW5 8NW" data-hs-mask-options="{
                               &quot;mask&quot;: &quot;AA0 0AA&quot;
                             }" />
                                        </div>
                                    </div>



                                    <div className="row align-items-center mb-4">
                                        <label className="col-sm-3 col-form-label form-label">Disable ads <span className="badge bg-primary text-uppercase ms-1">PRO</span></label>

                                        <div className="col-sm-9">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label" for="flexCheckDefault">
                                                    With your Pro account, you can disable ads across the site.
                                                </label>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="d-flex justify-content-end">
                                        <button type="submit" className="btn btn-primary">Save changes</button>
                                    </div>
                                </form>

                            </div>

                        </div>



                        <div id="emailSection" className="card">
                            <div className="card-header">
                                <h4 className="card-title">Email</h4>
                            </div>


                            <div className="card-body">
                                <p>Your current email address is <span className="fw-semibold">mark@site.com</span></p>


                                <form>

                                    <div className="row mb-4">
                                        <label for="newEmailLabel" className="col-sm-3 col-form-label form-label">New email address</label>

                                        <div className="col-sm-9">
                                            <input type="email" className="form-control" name="newEmail" id="newEmailLabel" placeholder="Enter new email address" aria-label="Enter new email address" />
                                        </div>
                                    </div>


                                    <div className="d-flex justify-content-end">
                                        <button type="submit" className="btn btn-primary">Save changes</button>
                                    </div>
                                </form>

                            </div>

                        </div>



                        <div id="passwordSection" className="card">
                            <div className="card-header">
                                <h4 className="card-title">Change your password</h4>
                            </div>


                            <div className="card-body">

                                <form id="changePasswordForm">

                                    <div className="row mb-4">
                                        <label for="currentPasswordLabel" className="col-sm-3 col-form-label form-label">Current password</label>

                                        <div className="col-sm-9">
                                            <input type="password" className="form-control" name="currentPassword" id="currentPasswordLabel" placeholder="Enter current password" aria-label="Enter current password" />
                                        </div>
                                    </div>



                                    <div className="row mb-4">
                                        <label for="newPassword" className="col-sm-3 col-form-label form-label">New password</label>

                                        <div className="col-sm-9">
                                            <input type="password" className="form-control" name="newPassword" id="newPassword" placeholder="Enter new password" aria-label="Enter new password" />
                                        </div>
                                    </div>



                                    <div className="row mb-4">
                                        <label for="confirmNewPasswordLabel" className="col-sm-3 col-form-label form-label">Confirm new password</label>

                                        <div className="col-sm-9">
                                            <div className="mb-3">
                                                <input type="password" className="form-control" name="confirmNewPassword" id="confirmNewPasswordLabel" placeholder="Confirm your new password" aria-label="Confirm your new password" />
                                            </div>

                                            <h5>Password requirements:</h5>

                                            <p className="fs-6 mb-2">Ensure that these requirements are met:</p>

                                            <ul className="fs-6">
                                                <li>Minimum 8 characters long - the more, the better</li>
                                                <li>At least one lowercase character</li>
                                                <li>At least one uppercase character</li>
                                                <li>At least one number, symbol, or whitespace character</li>
                                            </ul>
                                        </div>
                                    </div>


                                    <div className="d-flex justify-content-end">
                                        <button type="submit" className="btn btn-primary">Save Changes</button>
                                    </div>
                                </form>

                            </div>

                        </div>



                        <div id="preferencesSection" className="card">
                            <div className="card-header">
                                <h4 className="card-title">Preferences</h4>
                            </div>


                            <div className="card-body">

                                <form>

                                    <div className="row mb-4">
                                        <label for="languageLabel-ts-control" className="col-sm-3 col-form-label form-label" id="languageLabel-ts-label">Language</label>

                                        <div className="col-sm-9">
                                            <div className="tom-select-custom">
                                                <select className="js-select form-select tomselected ts-hidden-accessible" id="languageLabel" data-hs-tom-select-options="{
                                  &quot;searchInDropdown&quot;: false
                                }" tabindex="-1">
                                                    <option label="empty"></option>
                                                    <option value="language1" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/us.svg&quot; alt=&quot;Image description&quot; width=&quot;16&quot;/><span>English (US)</span></span>">English (US)</option>

                                                    <option value="language3" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/de.svg&quot; alt=&quot;Image description&quot; width=&quot;16&quot;/><span>Deutsch</span></span>">Deutsch</option>
                                                    <option value="language4" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/dk.svg&quot; alt=&quot;Image description&quot; width=&quot;16&quot;/><span>Dansk</span></span>">Dansk</option>
                                                    <option value="language5" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/es.svg&quot; alt=&quot;Image description&quot; width=&quot;16&quot;/><span>Español</span></span>">Español</option>
                                                    <option value="language6" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/nl.svg&quot; alt=&quot;Image description&quot; width=&quot;16&quot;/><span>Nederlands</span></span>">Nederlands</option>
                                                    <option value="language7" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/it.svg&quot; alt=&quot;Image description&quot; width=&quot;16&quot;/><span>Italiano</span></span>">Italiano</option>
                                                    <option value="language8" data-option-template="<span className=&quot;d-flex align-items-center&quot;><img className=&quot;avatar avatar-xss avatar-circle me-2&quot; src=&quot;./assets/vendor/flag-icon-css/flags/1x1/cn.svg&quot; alt=&quot;Image description&quot; width=&quot;16&quot;/><span>中文 (繁體)</span></span>">中文 (繁體)</option>
                                                    <option value="language2" selected=""
                                                    >English (UK)</option></select>
                                                <div className="ts-wrapper js-select form-select single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
                                                    <div className="ts-control"><span className="d-flex align-items-center item" data-value="language2" data-ts-item="">
                                                        <img className="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/gb.svg" alt="Image description" width="16" />
                                                        <span>English (UK)</span></span>
                                                        <input type="select-one" autocomplete="off" size="1" tabindex="0" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="languageLabel-ts-dropdown"
                                                            id="languageLabel-ts-control" aria-labelledby="languageLabel-ts-label" /></div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>



                                    <div className="row mb-4">
                                        <label for="timeZoneLabel" className="col-sm-3 col-form-label form-label">Time zone</label>

                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" name="currentPassword" id="timeZoneLabel" placeholder="Your time zone" aria-label="Your time zone" value="GMT+01:00" readonly="" />
                                        </div>
                                    </div>


                                    <label className="row form-check form-switch mb-4" for="accounrSettingsPreferencesSwitch1">
                                        <span className="col-8 col-sm-9 ms-0">
                                            <span className="d-block text-dark">Early release</span>
                                            <span className="d-block fs-5">Get included on early releases for new Front features.</span>
                                        </span>
                                        <span className="col-4 col-sm-3 text-end">
                                            <input type="checkbox" className="form-check-input" id="accounrSettingsPreferencesSwitch1" />
                                        </span>
                                    </label>

                                    <label className="row form-check form-switch mb-4" for="accounrSettingsPreferencesSwitch2">
                                        <span className="col-8 col-sm-9 ms-0">
                                            <span className="d-block text-dark mb-1">See info about people who view my profile</span>
                                            <span className="d-block fs-5 text-muted"><a className="link" href="#">More about viewer info</a>.</span>
                                        </span>
                                        <span className="col-4 col-sm-3 text-end">
                                            <input type="checkbox" className="form-check-input" id="accounrSettingsPreferencesSwitch2" checked="" />
                                        </span>
                                    </label>

                                    <div className="d-flex justify-content-end">
                                        <button type="submit" className="btn btn-primary">Save Changes</button>
                                    </div>
                                </form>

                            </div>

                        </div>



                        <div id="twoStepVerificationSection" className="card">
                            <div className="card-header">
                                <div className="d-flex align-items-center">
                                    <h4 className="mb-0">Two-step verification</h4>
                                    <span className="badge bg-soft-danger text-danger ms-2">Disabled</span>
                                </div>
                            </div>


                            <div className="card-body">
                                <p className="card-text">Start by entering your password so that we know it's you. Then we'll walk you through two more simple steps.</p>

                                <form>

                                    <div className="row mb-4">
                                        <label for="accountPasswordLabel" className="col-sm-3 col-form-label form-label">Account password</label>

                                        <div className="col-sm-9">
                                            <input type="password" className="form-control" name="currentPassword" id="accountPasswordLabel" placeholder="Enter current password" aria-label="Enter current password" />
                                            <small className="form-text">This is the password you use to log in to your Front account.</small>
                                        </div>
                                    </div>


                                    <div className="d-flex justify-content-end">
                                        <button type="submit" className="btn btn-primary">Set up</button>
                                    </div>
                                </form>
                            </div>

                        </div>



                        <div id="recentDevicesSection" className="card">
                            <div className="card-header">
                                <h4 className="card-title">Recent devices</h4>
                            </div>


                            <div className="card-body">
                                <p className="card-text">View and manage devices where you're currently logged in.</p>
                            </div>


                            <div className="table-responsive">
                                <table className="table table-thead-bordered table-nowrap table-align-middle card-table">
                                    <thead className="thead-light">
                                        <tr>
                                            <th>Browser</th>
                                            <th>Device</th>
                                            <th>Location</th>
                                            <th>Most recent activity</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td className="align-items-center">
                                                <img className="avatar avatar-xss me-2" src="./assets/svg/brands/chrome-icon.svg" alt="Image Description" /> Chrome on Windows
                                            </td>
                                            <td><i className="bi-laptop fs-3 me-2"></i> Dell XPS 15 <span className="badge bg-soft-success text-success ms-1">Current</span></td>
                                            <td>London, UK</td>
                                            <td>Now</td>
                                        </tr>

                                        <tr>
                                            <td className="align-items-center">
                                                <img className="avatar avatar-xss me-2" src="./assets/svg/brands/chrome-icon.svg" alt="Image Description" /> Chrome on Android
                                            </td>
                                            <td><i className="bi-phone fs-3 me-2"></i> Google Pixel 3a</td>
                                            <td>London, UK</td>
                                            <td>15, August 2020 15:08</td>
                                        </tr>

                                        <tr>
                                            <td className="align-items-center">
                                                <img className="avatar avatar-xss me-2" src="./assets/svg/brands/chrome-icon.svg" alt="Image Description" /> Chrome on Windows
                                            </td>
                                            <td><i className="bi-display fs-3 me-2"></i> Microsoft Studio 2</td>
                                            <td>London, UK</td>
                                            <td>12, August 2020 20:07</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>



                        <div id="notificationsSection" className="card">
                            <div className="card-header">
                                <h4 className="card-title">Notifications</h4>
                            </div>

                            <div className="alert alert-soft-dark card-alert text-center" role="alert">
                                We need permission from your browser to show notifications. <a className="alert-link" href="#">Request permission</a>
                            </div>

                            <form>
                                <div className="table-responsive datatable-custom">
                                    <table className="table table-thead-bordered table-nowrap table-align-middle table-first-col-px-0">
                                        <thead className="thead-light">
                                            <tr>
                                                <th>Type</th>
                                                <th className="text-center">
                                                    <div className="mb-1">
                                                        <img className="avatar avatar-xs" src="./assets/svg/illustrations/oc-email-at.svg" alt="Image Description" data-hs-theme-appearance="default" />
                                                        <img className="avatar avatar-xs" src="./assets/svg/illustrations-light/oc-email-at.svg" alt="Image Description" data-hs-theme-appearance="dark" />
                                                    </div>
                                                    Email
                                                </th>
                                                <th className="text-center">
                                                    <div className="mb-1">
                                                        <img className="avatar avatar-xs" src="./assets/svg/illustrations/oc-globe.svg" alt="Image Description" data-hs-theme-appearance="default" />
                                                        <img className="avatar avatar-xs" src="./assets/svg/illustrations-light/oc-globe.svg" alt="Image Description" data-hs-theme-appearance="dark" />
                                                    </div>
                                                    Browser
                                                </th>
                                                <th className="text-center">
                                                    <div className="mb-1">
                                                        <img className="avatar avatar-xs" src="./assets/svg/illustrations/oc-phone.svg" alt="Image Description" data-hs-theme-appearance="default" />
                                                        <img className="avatar avatar-xs" src="./assets/svg/illustrations-light/oc-phone.svg" alt="Image Description" data-hs-theme-appearance="dark" />
                                                    </div>
                                                    App
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>New for you</td>
                                                <td className="text-center">
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="checkbox" value="" id="editUserModalAlertsCheckbox1" />
                                                        <label className="form-check-label" for="editUserModalAlertsCheckbox1"></label>
                                                    </div>
                                                </td>
                                                <td className="text-center">
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="checkbox" value="" id="editUserModalAlertsCheckbox2" />
                                                        <label className="form-check-label" for="editUserModalAlertsCheckbox2"></label>
                                                    </div>
                                                </td>
                                                <td className="text-center">
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="checkbox" value="" id="editUserModalAlertsCheckbox3" />
                                                        <label className="form-check-label" for="editUserModalAlertsCheckbox3"></label>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>Account activity <i className="bi-question-circle text-body ms-1" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Get important notifications about you or activity you've missed" data-bs-original-title="Get important notifications about you or activity you've missed"></i></td>
                                                <td className="text-center">
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="checkbox" value="" id="editUserModalAlertsCheckbox4" />
                                                        <label className="form-check-label" for="editUserModalAlertsCheckbox4"></label>
                                                    </div>
                                                </td>
                                                <td className="text-center">
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="checkbox" value="" id="editUserModalAlertsCheckbox5" checked="" />
                                                        <label className="form-check-label" for="editUserModalAlertsCheckbox5"></label>
                                                    </div>
                                                </td>
                                                <td className="text-center">
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="checkbox" value="" id="editUserModalAlertsCheckbox6" checked="" />
                                                        <label className="form-check-label" for="editUserModalAlertsCheckbox6"></label>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>A new browser used to sign in</td>
                                                <td className="text-center">
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="checkbox" value="" id="editUserModalAlertsCheckbox7" checked="" />
                                                        <label className="form-check-label" for="editUserModalAlertsCheckbox7"></label>
                                                    </div>
                                                </td>
                                                <td className="text-center">
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="checkbox" value="" id="editUserModalAlertsCheckbox8" checked="" />
                                                        <label className="form-check-label" for="editUserModalAlertsCheckbox8"></label>
                                                    </div>
                                                </td>
                                                <td className="text-center">
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="checkbox" value="" id="editUserModalAlertsCheckbox9" checked="" />
                                                        <label className="form-check-label" for="editUserModalAlertsCheckbox9"></label>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>A new device is linked</td>
                                                <td className="text-center">
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="checkbox" value="" id="editUserModalAlertsCheckbox10" />
                                                        <label className="form-check-label" for="editUserModalAlertsCheckbox10"></label>
                                                    </div>
                                                </td>
                                                <td className="text-center">
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="checkbox" value="" id="editUserModalAlertsCheckbox11" checked="" />
                                                        <label className="form-check-label" for="editUserModalAlertsCheckbox11"></label>
                                                    </div>
                                                </td>
                                                <td className="text-center">
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="checkbox" value="" id="editUserModalAlertsCheckbox12" />
                                                        <label className="form-check-label" for="editUserModalAlertsCheckbox12"></label>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>A new device connected <i className="bi-question-circle text-body ms-1" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Email me when a new device connected" data-bs-original-title="Email me when a new device connected"></i></td>
                                                <td className="text-center">
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="checkbox" value="" id="editUserModalAlertsCheckbox13" />
                                                        <label className="form-check-label" for="editUserModalAlertsCheckbox13"></label>
                                                    </div>
                                                </td>
                                                <td className="text-center">
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="checkbox" value="" id="editUserModalAlertsCheckbox14" checked="" />
                                                        <label className="form-check-label" for="editUserModalAlertsCheckbox14"></label>
                                                    </div>
                                                </td>
                                                <td className="text-center">
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="checkbox" value="" id="editUserModalAlertsCheckbox15" checked="" />
                                                        <label className="form-check-label" for="editUserModalAlertsCheckbox15"></label>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </form>

                            <hr />


                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm">

                                        <div className="mb-4">
                                            <p className="card-text">When should we send you notifications?</p>

                                            <div className="tom-select-custom">
                                                <select className="js-select form-select tomselected ts-hidden-accessible" autocomplete="off" data-hs-tom-select-options="{
                                    &quot;searchInDropdown&quot;: false,
                                    &quot;width&quot;: &quot;15rem&quot;,
                                    &quot;hideSearch&quot;: true
                                  }" id="tomselect-4" tabindex="-1">

                                                    <option value="whenToSendNotification2">Only when I'm online</option>
                                                    <option value="whenToSendNotification1">Always</option></select>
                                            </div>

                                        </div>

                                    </div>


                                    <div className="col-sm">

                                        <div className="mb-4">
                                            <p className="card-text">Send me a daily summary ("Daily Digest") of task activity.</p>

                                            <div className="row">
                                                <div className="col-auto mb-2">
                                                    <div className="tom-select-custom">
                                                        <select className="js-select form-select tomselected ts-hidden-accessible" autocomplete="off" data-hs-tom-select-options="{
                                      &quot;searchInDropdown&quot;: false,
                                      &quot;hideSearch&quot;: true,
                                      &quot;dropdownWidth&quot;: &quot;10rem&quot;
                                    }" id="tomselect-5" tabindex="-1">
                                                            <option value="EveryDay">Every day</option>

                                                            <option value="Never">Never</option>
                                                            <option value="weekdays" selected="">Weekdays</option></select>
                                                      
                                                    </div>

                                                </div>


                                                <div className="col-auto mb-2">

                                                    <div className="tom-select-custom">
                                                        <select className="js-select form-select tomselected ts-hidden-accessible" autocomplete="off" data-hs-tom-select-options="{
                                      &quot;searchInDropdown&quot;: false,
                                      &quot;hideSearch&quot;: true,
                                      &quot;dropdownWidth&quot;: &quot;10rem&quot;
                                    }" id="tomselect-6" tabindex="-1">
                                                            <option value="0">at 12 AM</option>
                                                            <option value="1">at 1 AM</option>
                                                            <option value="2">at 2 AM</option>
                                                            <option value="3">at 3 AM</option>
                                                            <option value="4">at 4 AM</option>
                                                            <option value="5">at 5 AM</option>
                                                            <option value="6">at 6 AM</option>
                                                            <option value="7">at 7 AM</option>
                                                            <option value="8">at 8 AM</option>

                                                            <option value="10">at 10 AM</option>
                                                            <option value="11">at 11 AM</option>
                                                            <option value="12">at 12 PM</option>
                                                            <option value="13">at 1 PM</option>
                                                            <option value="14">at 2 PM</option>
                                                            <option value="15">at 3 PM</option>
                                                            <option value="16">at 4 PM</option>
                                                            <option value="17">at 5 PM</option>
                                                            <option value="18">at 6 PM</option>
                                                            <option value="19">at 7 PM</option>
                                                            <option value="20">at 8 PM</option>
                                                            <option value="21">at 9 PM</option>
                                                            <option value="22">at 10 PM</option>
                                                            <option value="23">at 11 PM</option>
                                                            <option value="9" selected="">at 9 AM</option></select>
                                                        <div className="ts-wrapper js-select form-select single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
                                                            <div className="ts-control"><div data-value="9" className="item" data-ts-item="">at 9 AM</div></div>
                                                            <div className="tom-select-custom"><div className="ts-dropdown single plugin-change_listener plugin-hs_smart_position" >
                                                                <div role="listbox" tabindex="-1" className="ts-dropdown-content" id="tomselect-6-ts-dropdown"></div></div></div></div>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>


                                <p className="card-text">In order to cut back on noise, email notifications are grouped together and only sent when you're idle or offline.</p>

                                <div className="d-flex justify-content-end">
                                    <button type="submit" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>

                        </div>



                        <div id="connectedAccountsSection" className="card">
                            <div className="card-header">
                                <h4 className="card-title">Connected accounts</h4>
                            </div>


                            <div className="card-body">
                                <p className="card-text">Integrated features from these accounts make it easier to collaborate with people you know on Front Dashboard.</p>


                                <form>
                                    <div className="list-group list-group-lg list-group-flush list-group-no-gutters">
                                        <div className="list-group-item">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0">
                                                    <img className="avatar avatar-xs" src="./assets/svg/brands/google-icon.svg" alt="Image Description" />
                                                </div>

                                                <div className="flex-grow-1 ms-3">
                                                    <div className="row align-items-center">
                                                        <div className="col">
                                                            <h4 className="mb-0">Google</h4>
                                                            <p className="fs-5 text-body mb-0">Calendar and contacts</p>
                                                        </div>


                                                        <div className="col-auto">
                                                            <div className="form-check form-switch">
                                                                <input className="form-check-input" type="checkbox" id="connectedAccounts1" />
                                                                <label className="form-check-label" for="connectedAccounts1"></label>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="list-group-item">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0">
                                                    <img className="avatar avatar-xs" src="./assets/svg/brands/spec-icon.svg" alt="Image Description" />
                                                </div>

                                                <div className="flex-grow-1 ms-3">
                                                    <div className="row align-items-center">
                                                        <div className="col">
                                                            <h4 className="mb-0">Spec</h4>
                                                            <p className="fs-5 text-body mb-0">Project management</p>
                                                        </div>


                                                        <div className="col-auto">
                                                            <div className="form-check form-switch">
                                                                <input className="form-check-input" type="checkbox" id="connectedAccounts2" />
                                                                <label className="form-check-label" for="connectedAccounts2"></label>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="list-group-item">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0">
                                                    <img className="avatar avatar-xs" src="./assets/svg/brands/slack-icon.svg" alt="Image Description" />
                                                </div>

                                                <div className="flex-grow-1 ms-3">
                                                    <div className="row align-items-center">
                                                        <div className="col">
                                                            <h4 className="mb-0">Slack</h4>
                                                            <p className="fs-5 text-body mb-0">Communication <a className="link" href="#">Learn more</a></p>
                                                        </div>


                                                        <div className="col-auto">
                                                            <div className="form-check form-switch">
                                                                <input className="form-check-input" type="checkbox" id="connectedAccounts3" checked="" />
                                                                <label className="form-check-label" for="connectedAccounts3"></label>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="list-group-item">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0">
                                                    <img className="avatar avatar-xs" src="./assets/svg/brands/mailchimp-icon.svg" alt="Image Description" />
                                                </div>

                                                <div className="flex-grow-1 ms-3">
                                                    <div className="row align-items-center">
                                                        <div className="col">
                                                            <h4 className="mb-0">Mailchimp</h4>
                                                            <p className="fs-5 text-body mb-0">Email marketing service</p>
                                                        </div>


                                                        <div className="col-auto">
                                                            <div className="form-check form-switch">
                                                                <input className="form-check-input" type="checkbox" id="connectedAccounts4" checked="" />
                                                                <label className="form-check-label" for="connectedAccounts4"></label>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="list-group-item">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0">
                                                    <img className="avatar avatar-xs" src="./assets/svg/brands/google-webdev-icon.svg" alt="Image Description" />
                                                </div>

                                                <div className="flex-grow-1 ms-3">
                                                    <div className="row align-items-center">
                                                        <div className="col">
                                                            <h4 className="mb-0">Google Webdev</h4>
                                                            <p className="fs-5 text-body mb-0">Tools for Web Developers <a className="link" href="#">Learn more</a></p>
                                                        </div>


                                                        <div className="col-auto">
                                                            <div className="form-check form-switch">
                                                                <input className="form-check-input" type="checkbox" id="connectedAccounts5" />
                                                                <label className="form-check-label" for="connectedAccounts5"></label>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                            </div>

                        </div>



                        <div id="socialAccountsSection" className="card">
                            <div className="card-header">
                                <h4 className="card-title">Social accounts</h4>
                            </div>


                            <div className="card-body">
                                <form>
                                    <div className="list-group list-group-lg list-group-flush list-group-no-gutters">

                                        <div className="list-group-item">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0">
                                                    <i className="bi-twitter list-group-icon"></i>
                                                </div>

                                                <div className="flex-grow-1">
                                                    <div className="row align-items-center">
                                                        <div className="col-sm mb-2 mb-sm-0">
                                                            <h4 className="mb-0">Twitter</h4>
                                                            <a className="fs-5" href="#">www.twitter.com/htmlstream</a>
                                                        </div>


                                                        <div className="col-sm-auto">
                                                            <a className="btn btn-white btn-sm" href="javascript:;">Disconnect</a>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>


                                        <div className="list-group-item">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0">
                                                    <i className="bi-facebook list-group-icon"></i>
                                                </div>

                                                <div className="flex-grow-1">
                                                    <div className="row align-items-center">
                                                        <div className="col-sm mb-2 mb-sm-0">
                                                            <h4 className="mb-0">Facebook</h4>
                                                            <a className="fs-5" href="#">www.facebook.com/htmlstream</a>
                                                        </div>


                                                        <div className="col-sm-auto">
                                                            <a className="btn btn-white btn-sm" href="javascript:;">Disconnect</a>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>


                                        <div className="list-group-item">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0">
                                                    <i className="bi-slack list-group-icon"></i>
                                                </div>

                                                <div className="flex-grow-1">
                                                    <div className="row align-items-center">
                                                        <div className="col-sm mb-2 mb-sm-0">
                                                            <h4 className="mb-0">Slack</h4>
                                                            <p className="fs-5 text-body mb-0">Not connected</p>
                                                        </div>


                                                        <div className="col-sm-auto">
                                                            <a className="btn btn-white btn-sm" href="javascript:;">Connect</a>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>


                                        <div className="list-group-item">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0">
                                                    <i className="bi-linkedin list-group-icon"></i>
                                                </div>

                                                <div className="flex-grow-1">
                                                    <div className="row align-items-center">
                                                        <div className="col-sm mb-2 mb-sm-0">
                                                            <h4 className="mb-0">Linkedin</h4>
                                                            <a className="fs-5" href="#">www.linkedin.com/htmlstream</a>
                                                        </div>


                                                        <div className="col-sm-auto">
                                                            <a className="btn btn-white btn-sm" href="javascript:;">Disconnect</a>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="list-group-item">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0">
                                                    <i className="bi-google list-group-icon"></i>
                                                </div>

                                                <div className="flex-grow-1">
                                                    <div className="row align-items-center">
                                                        <div className="col-sm mb-2 mb-sm-0">
                                                            <h4 className="mb-0">Google</h4>
                                                            <p className="fs-5 text-body mb-0">Not connected</p>
                                                        </div>

                                                        <div className="col-sm-auto">
                                                            <a className="btn btn-white btn-sm" href="javascript:;">Connect</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div id="deleteAccountSection" className="card">
                            <div className="card-header">
                                <h4 className="card-title">Delete your account</h4>
                            </div>

                            <div className="card-body">
                                <p className="card-text">When you delete your account, you lose access to Front account services, and we permanently delete your personal data. You can cancel the deletion for 14 days.</p>

                                <div className="mb-4">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="deleteAccountCheckbox" />
                                        <label className="form-check-label" for="deleteAccountCheckbox">
                                            Confirm that I want to delete my account.
                                        </label>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-end gap-3">
                                    <a className="btn btn-white" href="#">Learn more</a>
                                     <SubmitButton variant="destructive"
                                                                                    processing={processing}
                                                                                    actionText=" Delete"
                                                                                   
                                                                                />
                                   
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="stickyBlockEndPoint"></div>
                </div>
            </div>
        </div>
    )
}