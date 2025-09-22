import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import Card from '@/Components/Card';

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            header="Profile & Account"

            pageTitle="Profile"


        >

            <Card>
                <UpdateProfileInformationForm
                    mustVerifyEmail={mustVerifyEmail}
                    status={status}

                />
            </Card>

            <Card>
                <UpdatePasswordForm className="max-w-xl" />
            </Card>



            <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">

                </div>

                <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">

                </div>

                {/* <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                    <DeleteUserForm className="max-w-xl" />
                </div> */}
            </div>

        </AuthenticatedLayout>
    );
}
