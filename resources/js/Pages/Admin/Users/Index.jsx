
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";

import Pagination from "@/Components/Pagination";
import DeleteConfirmModal from "@/Components/DeleteConfirmModal";
import { Button } from "@/Components/ui/button";

import useDeleteModal from "@/hooks/useDeleteModal";
import Avatar from "@/Components/ui/avatar";
import { LinkButton } from "@/Components/ui/link-button";
import { User } from "lucide-react";

export default function Index({ users }) {

const roleLabels = {
    super_admin: "Administrator",
    moderator: "Moderator",
    clinic_user: "Clinic Staff",
    clinic_admin: "Clinic Admin"
};


    const deleteModal = useDeleteModal()

    return (
        <>
            <AuthenticatedLayout header='Users' pageTitle={"All Users"}
                 >


<LinkButton href={route('clinic-users.create')} >
<User />Add User
</LinkButton>


                <div class="data-table mt-3">
                    <table class="w-full">
                        <thead class="thead-light">
                            <tr>
                                <th>Full Name</th>
                                <th>Contact </th>
                                <th>Clinic</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>

                            {users.data.map((userdata, index) => {
                                const user = userdata.user ? userdata.user : userdata;

                                return (
                                    <tr key={index}>

                                        <td>
                                            <Avatar text={user.name} />

                                        </td>

                                        <td>
                                            <span class="d-block h5 mb-0"><i class="bi bi-telephone me-3"></i>
                                                {user.phone}</span>
                                            <span class="d-block fs-5">
                                                <i class="bi bi-envelope me-3"></i>
                                                {user.email}</span>
                                        </td>
                                        <td>
                                            <span className="d-block h5 text-inherit mb-0">
                                                {user?.clinic?.name}

                                            </span>
                                        </td>
                                        <td>
                                            <span className="d-block h5 text-inherit mb-0">
                                                {roleLabels[user.role]}
                                            </span>


                                        </td>
                                        <td>
                                            <div className="flex items-center gap-2">
                                                <Link href={route('clinic-users.edit', user)} className="">   <i class="bi-pencil-fill me-1"></i> Edit</Link>



                                                <Button
                                                    variant="outline" size='sm' o
                                                    onClick={() =>
                                                        deleteModal.confirm(user, "clinic-users.destroy")
                                                    }
                                                > Delete</Button>
                                            </div>


                                        </td>
                                    </tr>

                                )
                            })}







                        </tbody>
                    </table>
                </div>

                <Pagination links={users.links} />
                <DeleteConfirmModal dialogOpen={deleteModal.open}
                    onConfirm={deleteModal.destroy}
                    setDialogOpen={deleteModal.setOpen}
                    category="Users" processUrl="clinic-users.destroy"
                    loading={deleteModal.loading} itemName={deleteModal?.item?.name} />

            </AuthenticatedLayout>
        </>
    )
}