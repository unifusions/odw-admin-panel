import PageHeader from "@/Components/PageHeader";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import AddService from "./AddService";
import EditService from "./EditService";

export default function Index() {
    const { services } = usePage().props
   
    return (
        <AuthenticatedLayout header='Services'>
        
            <Head title="Services" />
            <PageHeader>
                <AddService />

            </PageHeader>

            <div class="table-responsive datatable-custom">
                <table class="js-datatable table table-borderless table-thead-bordered table-nowrap table-align-middle card-table"
                >
                    <thead class="thead-light">
                        <tr>
                            <th colSpan={2}>Services</th>
                            <th>ODW Cost</th>
                            <th>Average National Cost</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            services.data.map((item, index) => (
                                <tr key={index} className="text-dark text-500">
                                    <td> <div className="avatar ">
                                                <img class="avatar-img" src={item.image_path} alt="Image Description" height={42} width={42} />
                                                {/* <span className="avatar-initials">
                                                    {dentist.full_name.charAt(0)}
                                                </span> */}
                                            </div></td>
                                    <td className="text-wrap">
                                        <div className="d-flex align-items-center">
                                           
                                            <div className="ms-3">
                                                <span class="d-block h5 text-inherit mb-0"> {item.name} </span>
                                                <span class="d-block fs-5 text-body">{item.desc}</span>
                                            </div>
                                        </div>

                                    </td>
                                    <td>$ {item.cost}</td>
                                    <td>$ {item.avg_cost}</td>
                                    <td><EditService service= {item} /></td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>

        </AuthenticatedLayout>
    )
}