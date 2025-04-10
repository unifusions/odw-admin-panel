import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import AddDeal from "./AddDeal";

export default function Index() {

  const EditButtonGroup = () => {
    return (
      <div class="btn-group" role="group">
        <a class="btn btn-white btn-sm" href="#!">
          <i class="bi-pencil-fill me-1"></i> Edit
        </a>


        <div class="btn-group">
          <button type="button" class="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="productsEditDropdown1" data-bs-toggle="dropdown" aria-expanded="false"></button>

          <div class="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="productsEditDropdown1">
            <a class="dropdown-item" href="#">
              <i class="bi-trash dropdown-item-icon"></i> Delete
            </a>

          </div>
        </div>

      </div>
    )
  }
  const { deals } = usePage().props;
  return (
    <AuthenticatedLayout header='Deals'>
      <Head title="Deals" />

      <div className="page-header">
        <div className="row align-items-center mb-3">
          <div className="col-sm mb-2 mb-sm-0">
            <h1 className="page-header-title">Deals </h1>


          </div>


          <AddDeal />

        </div>ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss



        <div className="js-nav-scroller hs-nav-scroller-horizontal">



          <ul className="nav nav-tabs page-header-tabs" id="pageHeaderTab" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" href="#">All Deals</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Past Deals</a>
            </li>


          </ul>

        </div>

      </div>

      <div class="card">

        <div class="card-header card-header-content-md-between">
          <div class="mb-2 mb-md-0">
            <form>

              <div class="input-group input-group-merge input-group-flush">
                <div class="input-group-prepend input-group-text">
                  <i class="bi-search"></i>
                </div>
                <input id="datatableSearch" type="search" class="form-control" placeholder="Search users" aria-label="Search Deals" />
              </div>

            </form>
          </div>


        </div>

        <div class="table-responsive">



          <table id="datatable" class="table  ">
            <thead class="thead-light">
              <tr role="row">

                <th class="" tabindex="0" aria-controls="datatable" rowspan="1" colspan="1" aria-label="Product: activate to sort column ascending">Title</th>
                <th class="sorting" tabindex="0" aria-controls="datatable" rowspan="1" colspan="1" aria-label="Type: activate to sort column ascending">Description</th>
                <th class="sorting_disabled" rowspan="1" colspan="1" aria-label="Stocks" >Start Date</th>
                <th rowspan="1" colspan="1" aria-label="SKU: activate to sort column ascending">End Date</th>
                <th class="sorting" tabindex="0" aria-controls="datatable" rowspan="1" colspan="1" aria-label="Price: activate to sort column ascending" >Status</th>
                <th class="sorting_disabled" rowspan="1" colspan="1" aria-label="Actions" >Actions</th></tr>
            </thead>

            <tbody>

              {deals && deals.data.map((deal) =>
                <tr>
                  <td>{deal.title}</td>
                  <td>{deal.description}</td>
                  <td>{deal.start_date}</td>
                  <td>{deal.end_date}</td>
                  <td>{deal.is_active}</td>
                  <td><EditButtonGroup /></td>
                </tr>
              )}





            </tbody>
          </table>
        </div>
      </div>

      <div class="card-footer">


      </div>



    </AuthenticatedLayout>
  )
}