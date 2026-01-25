import Card from "@/Components/Card";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import ClinicInformation from "./Partials/ClinicInformation";
import WorkingHours from "./Partials/WorkingHours";
import ClinicImages from "./Partials/ClinicImages";
import ClinicServices from "./Partials/ClinicServices";
import PageHeader from "@/Components/PageHeader";
import { DisplayFlex } from "@/Components/Components";
import DeleteConfirmModal from "@/Components/DeleteConfirmModal";

export default function EditClinic() {

    const { clinic, schedules, services, users, allservices, galleries } = usePage().props;
    return (
        <>
            <AuthenticatedLayout header="Edit Clinic"
            >
                
                <Head title="Edit Clinic" />

                <DisplayFlex className="mb-3 justify-content-between">
                    <h1 className="page-header-title">{clinic.name}</h1>
                    {/* <DeleteConfirmModal item={service} processUrl="services.destroy" category="Treatment" /> */}

                </DisplayFlex>

                <div className="row">
                    <div className="col-lg-3 mb-3 mb-lg-0 " style={{ position: "sticky", top: "80px", alignSelf: "flex-start", height: "calc(100vh - 180px)" }}>


                    </div>

                    <div className="col-lg-9 mb-3" >
                        <Card id="content" title="Clinic Information">
                            <ClinicInformation clinic={clinic} />

                        </Card>

                        <WorkingHours clinic={clinic} clinicschedule={schedules} />
                         <ClinicImages clinic = {clinic} galleryImages={galleries} featuredImage={clinic.logo} />
                        <ClinicServices clinic = {clinic} services = {allservices} selectedservices = {services}/>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    )
}