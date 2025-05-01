import Breadcrumbs from "@/Components/Breadcrumbs";
import PageHeader from "@/Components/PageHeader";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { Head, usePage } from "@inertiajs/react"
import AddDentalCare from "./AddDentalCare";
import DeleteDentalCare from "./DeleteDentalCare";
import Pagination from "@/Components/Pagination"; 
export default function Index() {

    const { dentalCare, categories } = usePage().props;

    const SERVICES = dentalCare.data;
    return (
        < AuthenticatedLayout
            header='Compare Costs'

        >
            <Head title="Compare Costs" />
            <PageHeader>
                <AddDentalCare categories={categories} />
            </PageHeader>
            <div className="table-responsive datatable-custom">
                <table className="table table-borderless table-thead-bordered  table-hover  table-sm"
                >
                    <thead class="thead-light">
                        <tr>
                            <th>Code</th>
                            <th>Service</th>
                            <th>Category</th>
                            <th>National Cost</th>
                            <th>ODW Cost</th>

                            <th className="text-end">Actions</th>

                        </tr>
                    </thead>

                    <tbody>
                        {
                            SERVICES.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.code}</td>
                                    <td>{item.name}</td>
                                    <td>{item.category.name}</td>
                                    <td>$ {item.national_cost}</td>
                                    <td>$ {item.odw_cost}</td>
                                    <td className="text-end">
                                       
                                     <DeleteDentalCare dentalcare={item} />
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                    <tfoot>
                        <Pagination links={dentalCare.links} />
                    </tfoot>
                </table>
            </div>
        </AuthenticatedLayout >
    )
}