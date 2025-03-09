
import Breadcrumbs from "@/Components/Breadcrumbs";
import PageHeader from "@/Components/PageHeader";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { format, parseISO } from 'date-fns';

export default function EditClinic({ clinic }) {
    return (
        <AuthenticatedLayout header='Clinic'>

            <div className="page-header ">
                <div className="row align-items-end">
                    <div className="col-sm mb-2 mb-sm-0">
                        <Breadcrumbs />

                    </div>


                    <div class="col-sm-auto">

                    </div>

                </div>
                <div className="row">
                    <div className="col-lg mb-3 mb-lg-0">
                        <h1 className="page-header-title">{clinic.name}</h1>

                        <div className="row align-items-center">



                            <div className="col-auto">
                                <div className="row align-items-center g-0">
                                    <div className="col-auto me-3">Active From:</div>
                                    <div className="col">
                                        {clinic.created_at && format(parseISO(clinic.created_at), 'dd/MM/yyyy')}
                                    </div>










                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ul class="nav nav-tabs page-header-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Locations</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">Users</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">Dentists/Specialists</a>
                    </li>
                  
                </ul>

            </div>

        </AuthenticatedLayout >
    )
}