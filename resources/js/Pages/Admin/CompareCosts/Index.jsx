import Breadcrumbs from "@/Components/Breadcrumbs";
import PageHeader from "@/Components/PageHeader";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { Head, Link, router, usePage } from "@inertiajs/react"
import AddDentalCare from "./AddDentalCare";
import DeleteDentalCare from "./DeleteDentalCare";
import Pagination from "@/Components/Pagination";
import { useState } from "react";
import DeleteConfirmModal from "@/Components/DeleteConfirmModal";
import { Button } from "@/Components/ui/button";
import { Pencil, Plus, Search } from "lucide-react";
import { Input } from "@/Components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select";
import { LinkButton } from "@/Components/ui/link-button";
import { Card, CardContent, CardFooter } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";

  const getSavingsPercentage = (nationalCost , ourCost ) => {
    return Math.round(((nationalCost - ourCost) / nationalCost) * 100);
  };


export default function Index() {

    const { dentalCare, categories } = usePage().props;
    const [selectedService, setSelectedService] = useState(null);
    const [dialogOpen, setDialogOpen] = useState(false);
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


    const handleEdit = (service) => {
        setSelectedService(service);
        setDialogOpen(true);
    };


    return (
        < AuthenticatedLayout

            pageTitle="Compare Costs"
            subTitle="Manage Your Dental Services"
            callToAction={<Link href={route('compare-costs.create')}
                className="btn btn-primary"   >


                <i className="bi-plus me-1"></i> Add Dental Care
            </Link>}

        >



            <div className="flex flex-col gap-4 sm:flex-row mb-3">
                {/* <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        placeholder="Search by code, service name, or medical name..."

                        className="pl-9"
                    />
                </div>
                <Select>
                    <SelectTrigger className="w-full sm:w-[180px]">
                        <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem> */}
                {/* {categories.map((cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      ))} */}
                {/* </SelectContent>
                </Select> */}
                {/* <Select  >
                    <SelectTrigger className="w-full sm:w-[140px]">
                        <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
                    </SelectContent>
                </Select> */}

                <LinkButton
                    href={route('compare-costs.create')}
                >
                    <Plus className="h-4 w-4" />
                    Add Service
                </LinkButton>
            </div>
<Card>
    <CardContent>
 <div className="data-table">
                <table className="w-full"

                >
                    <thead  >
                        <tr className="align-top">
                            <th className="w-1/12" >Code</th>
                            <th   className="w-1/2"  >Name</th>
                     
                            <th   >Category</th>
                            <th   >National Cost</th>
                            <th   >ODW Cost</th>
                            <th  >Featured</th>
                            <th className="text-end">Actions</th>

                        </tr>
                    </thead>

                    <tbody>
                        {
                            services.map((item, index) => (
                                <tr key={index} className="align-top">
                                    <td >{item.code}</td>
                                    <td  >   <div >
                                        <p className="font-medium">{item.name}</p>
                                        <p className="text-xs text-muted-foreground  ">
                                            {item.medical_name}
                                        </p>
                                    </div>
                                    </td>

                                   
                                    <td>{item.categories && item.categories.length > 0 && item.categories.map(
                                        category =>  <Badge variant="outline" className="me-2 my-1">{category.name}</Badge>)}

                                        
                                    </td>
                                    <td>$ {item.national_cost}</td>
                                    <td  >$ {item.odw_cost} <br/><Badge variant="secondary" className="bg-success/10 text-success">
                        {getSavingsPercentage(item.national_cost, item.odw_cost)}% off
                      </Badge></td>
 
                                    <td className="text-center">

                                        <input
                                            type="checkbox"
                                            checked={item.featured}
                                            onChange={() => toggleFeatured(item.id)}
                                            className="form-check-input"
                                        />
                                    </td>

                                    <td className="text-end col-2">

                                        {/* <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => handleEdit(item)}
                                        >
                                            <Pencil className="h-4 w-4" />
                                        </Button> */}

                                        <LinkButton variant="outline" href={route('compare-costs.edit', item)} className="btn btn-white btn-sm me-2">  <i className="bi-pencil-fill me-1"></i>  Edit </LinkButton>
                                        {/* <DeleteConfirmModal 
                                          onDeleted={(id) => {
                                            setServices((prev) => prev.filter((s) => s.id !== id));
                                        }}
                                        category="Dental Care" processUrl="compare-costs.destroy" item={item} /> */}
                                        {/* <DeleteDentalCare dentalcare={item} /> */}
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                   
                </table>
            </div>
    </CardContent>
    <CardFooter>
 <Pagination links={dentalCare.links} />
    </CardFooter>
</Card>
           
        </AuthenticatedLayout >
    )
}