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
                style={{ tableLayout: 'fixed', width: '100%' }}
                >
                    <thead class="thead-light">
                        <tr>
                            <th style={{ width:"5%" }}>Code</th>
                            <th style={{ width:"25%" }}  >Service</th>
                            <th style={{ width:"20%" }} >Medical Name</th>
                            <th  style={{ width:"20%" }} >Category</th>
                            <th  style={{ width:"10%" }} >National Cost</th>
                            <th style={{ width:"10%" }}>ODW Cost</th>

                            <th style={{ width:"10%" }} className="text-end">Actions</th>

                        </tr>
                    </thead>

                    <tbody>
                        {
                            SERVICES.map((item, index) => (
                                <tr key={index}>
                                    <td  style={{ width:"5%" }}>{item.code}</td>
                                    <td  >{item.name}</td>

                                    <td style={{ width:"20%" }} >{item.medical_name}</td>
                                    <td>{item.categories && item.categories.length > 0 && item.categories.map(category => category.name).join(", ")}</td>
                                    <td>$ {item.national_cost}</td>
                                    <td  >$ {item.odw_cost}</td>
                                    <td  className="text-end">

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