import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {  Link, usePage } from "@inertiajs/react";
 
import { useState } from "react";
 
import Pagination from "@/Components/Pagination";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card";
import { LinkButton } from "@/Components/ui/link-button";
import DataPagination from "@/Components/Pagination";

export default function Index() {

  const [lightboxSrc, setLightboxSrc] = useState(null);

  const EditButtonGroup = ({ deal }) => {
    return (


      <Link href={route('deals.edit', deal)} className="btn btn-white btn-sm">
        <i class="bi-pencil-fill me-1"></i> Edit
      </Link>

      //   <div class="btn-group">
      //     <button type="button" class="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="productsEditDropdown1" data-bs-toggle="dropdown" aria-expanded="false"></button>

      //     <div class="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="productsEditDropdown1">
      //       <a class="dropdown-item" href="#">
      //         <i class="bi-trash dropdown-item-icon"></i> Delete
      //       </a>

      //     </div>
      //   </div>

      // </div>
    )
  }
  const { deals } = usePage().props;
  return (
    <AuthenticatedLayout header='Deals' pageTitle="All Deals"

    >




      {/* 
      <div className="js-nav-scroller hs-nav-scroller-horizontal">



        <ul className="nav nav-tabs page-header-tabs" id="pageHeaderTab" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" href="#">All Deals</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Past Deals</a>
          </li>


        </ul>

      </div> */}

<div className="flex items-center justify-between">
   <Pagination links={deals.links} />
<LinkButton href={route('deals.create')} className="mb-3" >Add Deal</LinkButton>

</div>
      

      <div className="grid grid-cols-3 gap-6">
        {deals && deals.data.map((deal) => <>
          <Card   className="shadow-card hover:shadow-card-hover transition-all animate-fade-in cursor-pointer">
            <CardHeader>
              <img className="w-full h-25 object-cover rounded-lg" src={deal.image_url} onClick={() => setLightboxSrc(deal.image_url)} />
              <CardTitle>{deal.title}</CardTitle>
              <CardDescription>{deal.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center border-t border-border py-2 justify-between">
                <div>
                  From : {deal.start_date} <br/>
                  To : {deal.end_date}
                </div>

                <LinkButton href={route('deals.edit', deal)} variant="outline" size='sm'>
                  <i class="bi-pencil-fill me-1"></i> Edit
                </LinkButton>
              </div>
            </CardContent>
 
          </Card>
        </>)}

        <DataPagination links={deals.links} />
      </div>
 
      

    </AuthenticatedLayout>
  )
}