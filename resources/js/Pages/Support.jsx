import GuestLayout from "@/Layouts/GuestLayout";
import { Link } from "@inertiajs/react";

export default function Support() {
 
    return (
        <GuestLayout header="Privacy Policy">
            <div className="row container-sm content-space-t-1 mt-5 content-space-t-lg-2 content-space-b-2 " style={{ padding: '20px', lineHeight: '1.6' }}>
                {/* <div className="col-sm-2">
                    {/* <ul class="nav flex-column">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Active</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li>
                    </ul> */}
                {/* </div> */}
                <div className="col-sm-12">
                    <div  >
                        <h1 class="text-primary"><strong>Support</strong> One Dental World</h1>


                        <p>OneDentalWorld is a dental appointment booking and clinic management application designed for patients, dental clinics, and dentists.
                            The app helps patients schedule dental appointments and allows clinics to manage dentists, schedules, and patient appointments efficiently.</p>

                        <h2>Contact Support</h2>
                        <p>If you need help or have questions, reach out to us:</p>
                        <div className="row">
                            <div className="col-md-4">Email Support</div>
                            <div className="col-md-4">Phone Support</div>
                            <div className="col-md-4">Support Hours</div>
                        </div>
                        <p>We usually respond within 24–48 business hours.</p>



                    </div>

                    <section>
                        <h2>Data Collection & Privacy</h2>

                        <p>
                            We respect your privacy.

                            OneDentalWorld collects only the information necessary to provide dental appointment and clinic management services, such as:
                            <ul>
                                <li>Name</li>

                                <li>Phone number</li>

                                <li>Appointment details</li>

                                <li>Clinic and dentist information</li>
                            </ul>

                            <strong>We do not sell or share user data with third parties.</strong>
                            All data is securely stored and used only for app functionality. For more details, please review our <Link href="/privacy-policy">Privacy Policy</Link>.
                        </p>
                    </section>


                    <section>
                        <h2>Account & Data Deletion</h2>
                        <p>Users have full control over their data. To request deletion of your account and associated data, please contact our support team at support@onedentalworld.com from your registered email address with the subject line:
                            “Account Deletion Request”</p>
                        <p>Requests are processed within 7 working days, in accordance with legal and medical record retention requirements.</p>
                    </section>

                    <section>
                        <h2>Medical Disclaimer</h2>
                        <p>The One Dental World app facilitates access to dental care services provided by OneDentalWorld and its licensed dental practitioners.
                            <ul>
                                <li>Information shared via the app, including second opinions, is <strong>not intended for emergency use.</strong></li>
                                <li>Clinical decisions should be confirmed through <strong>in-person dental evaluation where required.</strong></li>
                                <li>In case of dental emergencies, patients should visit the nearest dental clinic or hospital immediately.</li>
                            </ul>
                        </p>
                    </section>

<section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">App Information</h2>
            {/* <p className="text-muted-foreground leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at:
            </p> */}
            <div className="mt-4 rounded-lg bg-muted/50 p-4">
              <p className="text-foreground font-medium">App Name : OneDentalWorld</p>
              <p className="text-muted-foreground">iOS & Android</p>
              <p className="text-muted-foreground">Current Version : 1.0.6</p>
              <p className="text-muted-foreground">Last Update : 31, January 2026</p>
            </div>
          </section>

                 
                </div>
            </div>

        </GuestLayout>
    )
}