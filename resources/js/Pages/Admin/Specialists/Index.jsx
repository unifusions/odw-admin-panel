import PageHeader from "@/Components/PageHeader";
import Table from "@/Components/Table";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import AddSpecialist from "./AddSpecialist";
import SpecialistIcon from "@/Components/Icons/SpecialistIcon";
import DeleteConfirmModal from "@/Components/DeleteConfirmModal";
import ProviderCard from "@/Components/provider-card";
import DataPagination from "@/Components/Pagination";
import DentistIcon from "@/Components/Icons/DentistIcon";
import { LinkButton } from "@/Components/ui/link-button";

export default function Index() {

    const { specialists } = usePage().props;

    return (

        <AuthenticatedLayout header='Specialists'
            pageTitle={"All Specialists"}
            callToAction={<Link href={route('specialists.create')} className="btn btn-primary" >
                <SpecialistIcon />   Add Specialist
            </Link>}
        >

              <LinkButton className="mb-3" href={route('specialists.create')} >
            
                                <DentistIcon fill='#FFFFFF' />
                                Add Specialists
                            </LinkButton>

 <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{ specialists.data.map((dentist, index) => <ProviderCard provider={dentist} providerLink={route('specialists.edit', {specialist:dentist})} />)}</div>

         <DataPagination links={specialists.links} />
        </AuthenticatedLayout>

    )
}