import PageHeader from "@/Components/PageHeader";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import AddUser from "./AddUser";
import Pagination from "@/Components/Pagination";
import DeleteConfirmModal from "@/Components/DeleteConfirmModal";

export default function Index({ users }) {

    
    return (
        <>
            <AuthenticatedLayout header='Users' pageTitle={"All Users"}
                callToAction={<Link href={route('clinic-users.create')} className="btn btn-primary"> <i className="bi-hospital me-1"></i> Add User</Link>}>





                <div class="table-responsive datatable-custom">
                    <table class="js-datatable table table-borderless table-thead-bordered table-nowrap table-align-middle card-table">
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

                                            <div className="d-flex align-items-center">
                                                <div className="avatar avatar-soft-primary avatar-circle">
                                                    <span className="avatar-initials">{user.name && Array.from(user.name)[0]}</span>
                                                </div>
                                                <div className="ms-3">
                                                    <span className="d-block h5 text-inherit mb-0">
                                                        {user.name}
                                                    </span>
                                                    <span class="d-block fs-5 text-body">{user.role}</span>

                                                </div>
                                            </div>
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
                                                {user.role}
                                            </span>


                                        </td>
                                        <td>
                                            <Link href={route('clinic-users.edit', user)} className="btn btn-white btn-sm fw-bold">   <i class="bi-pencil-fill me-1"></i> Edit</Link>
                                            <DeleteConfirmModal category="Users" processUrl="clinic-users.destroy" item={user} />
                                        </td>
                                    </tr>

                                )
                            })}







                        </tbody>
                    </table>
                </div>

                <Pagination links={users.links} />
            </AuthenticatedLayout>
        </>
    )
}