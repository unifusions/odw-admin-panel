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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { Bell, Building2, Clock, Clock10, GalleryThumbnails, Shield, Stethoscope, Users } from "lucide-react";

export default function EditClinic() {

    const { clinic, schedules, services, users, allservices, galleries } = usePage().props;
    return (
        <>
            <AuthenticatedLayout pageTitle="Edit Clinic" subTitle="Manage your clinic's preferences"
            >


                <Tabs defaultValue="clinic" className="space-y-6">
                    <TabsList className="grid w-full w-8/12 grid-cols-4">
                        <TabsTrigger value="clinic" className="gap-2">
                            <Building2 className="h-4 w-4" />
                            <span className="hidden sm:inline">Clinic</span>
                        </TabsTrigger>
                        <TabsTrigger value="business-hours" className="gap-2">
                            <Clock10 className="h-4 w-4" />
                            <span className="hidden sm:inline">Business Hours</span>
                        </TabsTrigger>
                        <TabsTrigger value="treatments" className="gap-2">
                            <Stethoscope className="h-4 w-4" />
                            <span className="hidden sm:inline">Treatments</span>
                        </TabsTrigger>

                        <TabsTrigger value="gallery" className="gap-2">
                            <GalleryThumbnails className="h-4 w-4" />
                            <span className="hidden sm:inline">Gallery</span>
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="clinic">  <ClinicInformation clinic={clinic} /></TabsContent>
                    <TabsContent value="business-hours">  <WorkingHours clinic={clinic} clinicschedule={schedules} /></TabsContent>
                    <TabsContent value="treatments"> <ClinicServices clinic={clinic} services={allservices} selectedservices={services} /></TabsContent>
                    <TabsContent value="gallery"> <ClinicImages clinic={clinic} galleryImages={galleries} featuredImage={clinic.logo_url} /></TabsContent>
                
                </Tabs>


            </AuthenticatedLayout>
        </>
    )
}