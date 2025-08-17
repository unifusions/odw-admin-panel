import Card from "@/Components/Card";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import ClinicInformation from "./Partials/ClinicInformation";
import WorkingHours from "./Partials/WorkingHours";
import ClinicImages from "./Partials/ClinicImages";
import ClinicServices from "./Partials/ClinicServices";

export default function EditClinic() {

    const { clinic, schedules, services, users, galleries } = usePage().props;
    return (
        <>
            <AuthenticatedLayout header="Edit Clinic"
            >

                <Head title="Edit Clinic" />
                <div className="row">
                    <div className="col-lg-3 mb-3 mb-lg-0 " style={{ position: "sticky", top: "80px", alignSelf: "flex-start", height: "calc(100vh - 180px)" }}>
                    </div>

                    <div className="col-lg-9 mb-3" >
                        <Card id="content" title="Clinic Information">
                            <ClinicInformation clinic={clinic} />
                           
                        </Card>

                        <WorkingHours clinicschedule={schedules} />

                        <ClinicImages galleryImages={galleries} featuredImage={clinic.logo}/>
                        <ClinicServices /> 
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    )
}