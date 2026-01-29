import PageHeader from "@/Components/PageHeader";
import DataPagination from "@/Components/Pagination";
 
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";



export default function Index() {
    const { services } = usePage().props

    return (
        <AuthenticatedLayout header='Treatments' pageTitle="Treatments"
            callToAction={<Link href={route('services.create')} className="btn btn-primary" >Add Treatment</Link>}>



            <div class="data-table">
                <table class="w-full"
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
                                    <td width="10%">  
 
                                        <img class="rounded object-cover h-10 w-10" src={item.image_path} alt="Image Description" height={42} width={42} />
                                        {/* <span className="avatar-initials">
                                                    {dentist.full_name.charAt(0)}
                                                </span> */}
                                     </td>
                                    <td className="text-wrap"  width="30%">
                                        <div className=" flex  items-center  ">

                                            <div className="ms-3">
                                                <span class="font-medium"> {item.name} </span><br/>
                                                <p class="text-xs text-muted-foreground line-clamp-3">{item.desc}</p>
                                            </div>
                                        </div>

                                    </td>
                                    <td width="20%">$ {item.cost} - $ {item.max_cost}</td>
                                    <td width="20%">$ {item.avg_cost} - $ {item.max_avg_cost}</td>
                                    <td width="5%">{item.display_order}</td>
                                    <td width="5%"><Link href={route('services.edit', item)} className="btn btn-white btn-sm">  <i className="bi-pencil-fill me-1"></i>  Edit </Link>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
            <DataPagination links={services.links} />

        </AuthenticatedLayout>
    )
}