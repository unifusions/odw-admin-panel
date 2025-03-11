export default function UserList({ users }) {
    return (
        <>
            <table className="table table-responsive">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Status</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => {
                        const user_data = user.user;
                        const branch = user.branch;
                        return (
                            <>
                                <tr role="row">

                                    <td className="table-column-ps-0">
                                        <a className="d-flex align-items-center" href="./user-profile.html">
                                            <div className="avatar avatar-soft-primary avatar-circle">
                                                <span className="avatar-initials">
                                                    {user_data.name.charAt(0)}

                                                </span>
                                            </div>
                                            <div className="ms-3">
                                                <span className="d-block h5 text-inherit mb-0">{user_data.name}</span>
                                                <span className="d-block fs-5 text-body">{user_data.email}</span>
                                            </div>
                                        </a>
                                    </td>
                                    <td>
                                        <span className="d-block h5 mb-0">Receptionist</span>
                                        <span className="d-block fs-5">{branch.name}</span>
                                    </td>

                                    <td>
                                        <span className="legend-indicator bg-success"></span>Active
                                    </td>
                                    <td>
                                        <span className="d-block h5 mb-0">
                                            {user_data.role}
                                        </span>
                                    </td>

                                    <td>
                                        <button type="button" className="btn btn-white btn-sm" data-bs-toggle="modal" data-bs-target="#editUserModal">
                                            <i className="bi-pencil-fill me-1"></i> Edit
                                        </button>
                                    </td>
                                </tr>
                            </>)
                    }
                    )}

                </tbody>
            </table>
        </>
    )

}