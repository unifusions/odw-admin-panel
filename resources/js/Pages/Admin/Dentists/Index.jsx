import PageHeader from "@/Components/PageHeader";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { Head, Link, usePage } from "@inertiajs/react"
import AddDentist from "./AddDentist";
import DentistIcon from "@/Components/Icons/DentistIcon";
import Pagination from "@/Components/Pagination";
import DeleteConfirmModal from "@/Components/DeleteConfirmModal";
import ProviderCard from "@/Components/provider-card";
import DataPagination from "@/Components/Pagination";
import { LinkButton } from "@/Components/ui/link-button";

export default function Index() {

    const { alldentists } = usePage().props;
    const dentists = alldentists.data;
    return (
        < AuthenticatedLayout
            header='Dentists'
            pageTitle={"Dentists"}
           
        >
               <LinkButton className="mb-3" href={route('dentists.create')} >

                    <DentistIcon fill='#FFFFFF' />
                    Add Dentist
                </LinkButton>
 <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{ dentists.map((dentist, index) => <ProviderCard provider={dentist} providerLink={route('dentists.edit', {dentist:dentist})} />)}</div>


         
            <DataPagination links={alldentists.links} />
        </AuthenticatedLayout >
    )
}