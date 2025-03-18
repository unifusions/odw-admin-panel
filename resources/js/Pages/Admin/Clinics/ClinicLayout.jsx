import { format, parseISO } from 'date-fns';

import Breadcrumbs from "@/Components/Breadcrumbs";
import PageHeader from "@/Components/PageHeader";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, usePage } from '@inertiajs/react';
export default function ClinicLayout({ children, clinic, breadcrumb }) {



    return (
        <>
            <AuthenticatedLayout header='Clinic'>


                <div class="page-header mb-2">
                    <div class="row align-items-center">
                        <div class="col-sm mb-2 mb-sm-0">
                            <Breadcrumbs />
                            <h2 class="page-header-title">{clinic.name}</h2>
                            Active From:  {clinic.created_at && format(parseISO(clinic.created_at), 'dd/MM/yyyy')}
                        </div>

                        <div class="col-sm-auto">

                        </div>
                    </div>


                    <ul class="nav nav-tabs page-header-tabs">
                        <li class="nav-item">
                            <Link href={route('clinics.branches.index', clinic)} className={`nav-link ${route().current('clinics.branches.index') && 'active'}`}>
                                Branches
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link href={route('clinics.users.index', clinic)} className={`nav-link ${route().current('clinics.users.index') && 'active'}`}>
                                Users
                            </Link>
                        </li>
                        <li class="nav-item">

                            <Link href={route('clinics.services.index', clinic)} className={`nav-link ${route().current('clinics.services.index') && 'active'}`}>
                                Services
                            </Link>

                        </li>
                    </ul>

                </div>





                {children}

            </AuthenticatedLayout >
        </>
    )
}
