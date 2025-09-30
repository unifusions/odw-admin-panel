import Breadcrumbs from "@/Components/Breadcrumbs";
import PageHeader from "@/Components/PageHeader";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { Head, Link, router, usePage } from "@inertiajs/react"
import AddDentalCare from "./AddDentalCare";
import DeleteDentalCare from "./DeleteDentalCare";
import Pagination from "@/Components/Pagination";
import { useState } from "react";
import DeleteConfirmModal from "@/Components/DeleteConfirmModal";
export default function Index() {

    const { dentalCare, categories } = usePage().props;

    // const SERVICES = dentalCare.data;
    const [services, setServices] = useState(dentalCare.data);
    const toggleFeatured = async (id) => {
        try {
            await router.patch(
                route("compare-costs.toggle-featured", id),
                {},
                {
                    preserveScroll: true,
                    preserveState: true,
                    only: [], // prevent full reload
                    onSuccess: (page) => {
                        setServices((prev) =>
                            prev.map((service) =>
                                service.id === id
                                    ? { ...service, featured: !service.featured }
                                    : service
                            )
                        );
                    },
                }
            );
        } catch (error) {
            console.error("Error updating featured:", error);
        }
    };

    return (
        < AuthenticatedLayout
            header='Compare Costs'
            pageTitle="Compare Costs"
            callToAction={<Link href={route('compare-costs.create')}
                className="btn btn-primary"   >


                <i className="bi-plus me-1"></i> Add Dental Care
            </Link>}

        >


            <div className="table-responsive datatable-custom">
                <table className="table table-borderless table-thead-bordered  table-hover  table-sm"
                    style={{ tableLayout: 'fixed', width: '100%' }}
                >
                    <thead class="thead-light">
                        <tr>
                            <th className="col-1" >Code</th>
                            <th className= "col-2"   >Service</th>
                            <th style={{ width: "20%" }} >Medical Name</th>
                            <th style={{ width: "20%" }} >Category</th>
                            <th style={{ width: "10%" }} >National Cost</th>
                            <th style={{ width: "10%" }}>ODW Cost</th>
                            <th style={{ width: "5%" }}>Featured</th>
                            <th style={{ width: "15%" }} className="text-end">Actions</th>

                        </tr>
                    </thead>

                    <tbody>
                        {
                            services.map((item, index) => (
                                <tr key={index}>
                                    <td  className="col-1">{item.code}</td>
                                    <td  >{item.name}</td>

                                    <td style={{ width: "20%" }} >{item.medical_name}</td>
                                    <td>{item.categories && item.categories.length > 0 && item.categories.map(category => category.name).join(", ")}</td>
                                    <td>$ {item.national_cost}</td>
                                    <td  >$ {item.odw_cost}</td>

                                    <td className="text-center">
                                        <input
                                            type="checkbox"
                                            checked={item.featured}
                                            onChange={() => toggleFeatured(item.id)}
                                            className="form-check-input"
                                        />
                                    </td>

                                    <td className="text-end col-2">

                                        <Link href={route('compare-costs.edit', item)} className="btn btn-white btn-sm me-2">  <i className="bi-pencil-fill me-1"></i>  Edit </Link>
                                        <DeleteConfirmModal 
                                          onDeleted={(id) => {
                                            setServices((prev) => prev.filter((s) => s.id !== id));
                                        }}
                                        category="Dental Care" processUrl="compare-costs.destroy" item={item} />
                                        {/* <DeleteDentalCare dentalcare={item} /> */}
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