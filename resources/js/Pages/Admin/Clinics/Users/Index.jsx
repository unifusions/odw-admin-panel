import { usePage } from "@inertiajs/react";
import ClinicLayout from "../ClinicLayout";
import Breadcrumbs from "@/Components/Breadcrumbs";
import UserList from "./UserList";
import AddUser from "./AddUser";


export default function Index({ clinic, users }) {

    const { breadcrumbs } = usePage().props;
    return (
        <>
            <ClinicLayout clinic={clinic} breadcrumb={<Breadcrumbs />} >
                <AddUser clinic = {clinic}  />
                <UserList users={users} />
            </ClinicLayout>
        </>
    )
}