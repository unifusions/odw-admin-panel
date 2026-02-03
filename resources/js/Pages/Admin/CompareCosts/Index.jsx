import Breadcrumbs from "@/Components/Breadcrumbs";
import PageHeader from "@/Components/PageHeader";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { Head, Link, router, usePage } from "@inertiajs/react"
import AddDentalCare from "./AddDentalCare";
import DeleteDentalCare from "./DeleteDentalCare";
import Pagination from "@/Components/Pagination";
import { useState } from "react";
 
import { Button } from "@/Components/ui/button";
import { Pencil, PencilIcon, Plus, Search, Trash } from "lucide-react";
 
 import { LinkButton } from "@/Components/ui/link-button";
import { Card, CardContent, CardFooter } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import useDeleteModal from "@/hooks/useDeleteModal";
import DeleteConfirmModal from "@/Components/DeleteConfirmModal";

  const getSavingsPercentage = (nationalCost , ourCost ) => {
    return Math.round(((nationalCost - ourCost) / nationalCost) * 100);
  };


export default function Index() {

    const { dentalCare, categories } = usePage().props;
    const [selectedService, setSelectedService] = useState(null);
    const [dialogOpen, setDialogOpen] = useState(false);
  
    const [services, setServices] = useState(dentalCare.data);

        const deleteModal = useDeleteModal()
    

    const toggleFeatured = async (id) => {
        try {
            await router.patch(
                route("compare-costs.toggle-featured", id),
                {},
                {
                    preserveScroll: true,
                    preserveState: true,
                    only: [], // prevent full reload
                    // onSuccess: (page) => {
                    //     setServices((prev) =>
                    //         prev.map((service) =>
                    //             service.id === id
                    //                 ? { ...service, featured: !service.featured }
                    //                 : service
                    //         )
                    //     );
                    // },
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
                            dentalCare.data.map((item, index) => (
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

                                        
<div className="flex items-center gap-1">
<LinkButton variant="outline" size="sm" href={route('compare-costs.edit', item)}  > <PencilIcon className="h-2 w-2" />  Edit </LinkButton>
                                        

                                                <Button
                                                    variant="destructive" size='sm'  
                                                    onClick={() =>
                                                        deleteModal.confirm(item, "compare-costs.destroy")
                                                    }
                                                ><Trash /> Delete</Button>
</div>
                                        

                                      
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

  <DeleteConfirmModal dialogOpen={deleteModal.open}
                     onConfirm={deleteModal.destroy}
                     setDialogOpen={deleteModal.setOpen}
                     category="Dental Care" processUrl="compare-costs.destroy"
                     loading={deleteModal.loading} itemName={deleteModal?.item?.name} />
 

    </CardFooter>
</Card>
           
        </AuthenticatedLayout >
    )
}