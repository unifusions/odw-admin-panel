import PageHeader from "@/Components/PageHeader";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link,   usePage } from "@inertiajs/react";
 
 

export default function Index() {
    const { services } = usePage().props

    return (
        <AuthenticatedLayout header='Treatments'>

            <Head title="Treatments" />
            <PageHeader>
                <Link href = {route('services.create')}  className="btn btn-primary" >Add Treatment</Link>

            </PageHeader>

            <div class="table-responsive datatable-custom">
                <table class="js-datatable table table-borderless table-thead-bordered table-nowrap table-align-middle card-table"
                >
                    <thead class="thead-light">
                        <tr>
                            <th colSpan={2}>Services</th>
                            <th>ODW Cost</th>
                            <th>Average National Cost</th>
                            <th>Display Order</th>
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
                                    <td>$ {item.cost} - $ {item.max_cost}</td>
                                    <td>$ {item.avg_cost} - $ {item.max_avg_cost}</td>
                                    <td>{item.display_order}</td>
                                    <td><Link href={route('services.edit', item)} className="btn btn-white btn-sm">  <i className="bi-pencil-fill me-1"></i>  Edit </Link>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>

        </AuthenticatedLayout>
    )
}