import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Index() {
  return (
    <AuthenticatedLayout header='Deals'>
      <Head title="Deals" />

      <div className="page-header">
        <div className="row align-items-center mb-3">
          <div className="col-sm mb-2 mb-sm-0">
            <h1 className="page-header-title">Deals </h1>

            <div className="mt-2">
              <a className="text-body me-3" href="javascript:;" data-bs-toggle="modal" data-bs-target="#exportProductsModal">
                <i className="bi-download me-1"></i> Export
              </a>
              <a className="text-body" href="javascript:;" data-bs-toggle="modal" data-bs-target="#importProductsModal">
                <i className="bi-upload me-1"></i> Import
              </a>
            </div>
          </div>


          <div className="col-sm-auto">
            <a className="btn btn-primary" href="#!">Add Deal</a>
          </div>

        </div>



        <div className="js-nav-scroller hs-nav-scroller-horizontal">



          <ul className="nav nav-tabs page-header-tabs" id="pageHeaderTab" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" href="#">All Deals</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Expired</a>
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
                <input id="datatableSearch" type="search" class="form-control" placeholder="Search users" aria-label="Search users" />
              </div>

            </form>
          </div>

          <div class="d-grid d-sm-flex gap-2">
            <button class="btn btn-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasEcommerceProductFilter" aria-controls="offcanvasEcommerceProductFilter">
              <i class="bi-filter me-1"></i> Filters
            </button>


            <div class="dropdown">
              <button type="button" class="btn btn-white w-100" id="showHideDropdown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                <i class="bi-table me-1"></i> Columns <span class="badge bg-soft-dark text-dark rounded-circle ms-1">6</span>
              </button>

              <div class="dropdown-menu dropdown-menu-end dropdown-card" aria-labelledby="showHideDropdown">
                <div class="card card-sm">
                  <div class="card-body">
                    <div class="d-grid gap-3">

                      <label class="row form-check form-switch" for="toggleColumn_product">
                        <span class="col-8 col-sm-9 ms-0">
                          <span class="me-2">Product</span>
                        </span>
                        <span class="col-4 col-sm-3 text-end">
                          <input type="checkbox" class="form-check-input" id="toggleColumn_product" checked="" />
                        </span>
                      </label>

                      <label class="row form-check form-switch" for="toggleColumn_type">
                        <span class="col-8 col-sm-9 ms-0">
                          <span class="me-2">Type</span>
                        </span>
                        <span class="col-4 col-sm-3 text-end">
                          <input type="checkbox" class="form-check-input" id="toggleColumn_type" checked="" />
                        </span>
                      </label>

                      <label class="row form-check form-switch" for="toggleColumn_vendor">
                        <span class="col-8 col-sm-9 ms-0">
                          <span class="me-2">Vendor</span>
                        </span>
                        <span class="col-4 col-sm-3 text-end">
                          <input type="checkbox" class="form-check-input" id="toggleColumn_vendor" />
                        </span>
                      </label>

                      <label class="row form-check form-switch" for="toggleColumn_stocks">
                        <span class="col-8 col-sm-9 ms-0">
                          <span class="me-2">Stocks</span>
                        </span>
                        <span class="col-4 col-sm-3 text-end">
                          <input type="checkbox" class="form-check-input" id="toggleColumn_stocks" checked="" />
                        </span>
                      </label>

                      <label class="row form-check form-switch" for="toggleColumn_sku">
                        <span class="col-8 col-sm-9 ms-0">
                          <span class="me-2">SKU</span>
                        </span>
                        <span class="col-4 col-sm-3 text-end">
                          <input type="checkbox" class="form-check-input" id="toggleColumn_sku" checked="" />
                        </span>
                      </label>

                      <label class="row form-check form-switch" for="toggleColumn_price">
                        <span class="col-8 col-sm-9 ms-0">
                          <span class="me-2">Price</span>
                        </span>
                        <span class="col-4 col-sm-3 text-end">
                          <input type="checkbox" class="form-check-input" id="toggleColumn_price" checked="" />
                        </span>
                      </label>

                      <label class="row form-check form-switch" for="toggleColumn_quantity">
                        <span class="col-8 col-sm-9 ms-0">
                          <span class="me-2">Quantity</span>
                        </span>
                        <span class="col-4 col-sm-3 text-end">
                          <input type="checkbox" class="form-check-input" id="toggleColumn_quantity" />
                        </span>
                      </label>

                      <label class="row form-check form-switch" for="toggleColumn_variants">
                        <span class="col-8 col-sm-9 ms-0">
                          <span class="me-2">Variants</span>
                        </span>
                        <span class="col-4 col-sm-3 text-end">
                          <input type="checkbox" class="form-check-input" id="toggleColumn_variants" checked="" />
                        </span>
                      </label>

                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div class="table-responsive datatable-custom">
          <div id="datatable_wrapper" class="dataTables_wrapper no-footer">
            <div class="dataTables_length" id="datatable_length"><label>Show
              <select name="datatable_length" aria-controls="datatable" class=""><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries</label></div><div id="datatable_filter" class="dataTables_filter"><label>Search:
                <input type="search" class="" placeholder="" aria-controls="datatable" /></label></div>
            <table id="datatable" class="table table-borderless table-thead-bordered table-nowrap table-align-middle card-table dataTable no-footer">
              <thead class="thead-light">
                <tr role="row"><th scope="col" class="table-column-pe-0 sorting_disabled" rowspan="1" colspan="1">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="datatableCheckAll" />
                    <label class="form-check-label">
                    </label>
                  </div>
                </th><th class="table-column-ps-0 sorting" tabindex="0" aria-controls="datatable" rowspan="1" colspan="1" aria-label="Product: activate to sort column ascending">Product</th><th class="sorting" tabindex="0" aria-controls="datatable" rowspan="1" colspan="1" aria-label="Type: activate to sort column ascending"
                >Type</th><th class="sorting_disabled" rowspan="1" colspan="1" aria-label="Stocks" >Stocks</th><th class="sorting" tabindex="0" aria-controls="datatable" rowspan="1" colspan="1" aria-label="SKU: activate to sort column ascending">SKU</th><th class="sorting" tabindex="0" aria-controls="datatable" rowspan="1" colspan="1" aria-label="Price: activate to sort column ascending" >Price</th><th class="sorting" tabindex="0" aria-controls="datatable" rowspan="1" colspan="1" aria-label="Variants: activate to sort column ascending" >Variants</th><th class="sorting_disabled" rowspan="1" colspan="1" aria-label="Actions" >Actions</th></tr>
              </thead>

              <tbody>
                <tr role="row" class="odd">
                  <td class="table-column-pe-0">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="datatableCheckAll1" />
                      <label class="form-check-label" for="datatableCheckAll1"></label>
                    </div>
                  </td>
                  <td class="table-column-ps-0">
                    <a class="d-flex align-items-center" href="./ecommerce-product-details.html">
                      <div class="flex-shrink-0">
                        <img class="avatar avatar-lg" src="./assets/img/400x400/img4.jpg" alt="Image Description" />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h5 class="text-inherit mb-0">Photive wireless speakers</h5>
                      </div>
                    </a>
                  </td>
                  <td>Electronics</td>

                  <td>
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" id="stocksCheckbox1" checked="" />
                      <label class="form-check-label" for="stocksCheckbox1"></label>
                    </div>
                  </td>
                  <td>2384741241</td>
                  <td>$65</td>

                  <td>2</td>
                  <td>
                    <div class="btn-group" role="group">
                      <a class="btn btn-white btn-sm" href="./ecommerce-product-details.html">
                        <i class="bi-pencil-fill me-1"></i> Edit
                      </a>


                      <div class="btn-group">
                        <button type="button" class="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="productsEditDropdown1" data-bs-toggle="dropdown" aria-expanded="false"></button>

                        <div class="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="productsEditDropdown1">
                          <a class="dropdown-item" href="#">
                            <i class="bi-trash dropdown-item-icon"></i> Delete
                          </a>
                          <a class="dropdown-item" href="#">
                            <i class="bi-archive dropdown-item-icon"></i> Archive
                          </a>
                          <a class="dropdown-item" href="#">
                            <i class="bi-upload dropdown-item-icon"></i> Publish
                          </a>
                          <a class="dropdown-item" href="#">
                            <i class="bi-x-lg dropdown-item-icon"></i> Unpublish
                          </a>
                        </div>
                      </div>

                    </div>
                  </td>
                </tr><tr role="row" class="even">
                  <td class="table-column-pe-0">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="productsCheck2" />
                      <label class="form-check-label" for="productsCheck2">
                      </label>
                    </div>
                  </td>
                  <td class="table-column-ps-0">
                    <a class="d-flex align-items-center" href="./ecommerce-product-details.html">
                      <div class="flex-shrink-0">
                        <img class="avatar avatar-lg" src="./assets/img/400x400/img26.jpg" alt="Image Description" />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h5 class="text-inherit mb-0">Topman shoe</h5>
                      </div>
                    </a>
                  </td>
                  <td>Shoes</td>

                  <td>
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" id="stocksCheckbox2" checked="" />
                      <label class="form-check-label" for="stocksCheckbox2"></label>
                    </div>
                  </td>
                  <td>4124123847</td>
                  <td>$21</td>

                  <td>4</td>
                  <td>
                    <div class="btn-group" role="group">
                      <a class="btn btn-white btn-sm" href="./ecommerce-product-details.html">
                        <i class="bi-pencil-fill me-1"></i> Edit
                      </a>


                      <div class="btn-group">
                        <button type="button" class="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="productsEditDropdown2" data-bs-toggle="dropdown" aria-expanded="false"></button>

                        <div class="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="productsEditDropdown2">
                          <a class="dropdown-item" href="#">
                            <i class="bi-trash dropdown-item-icon"></i> Delete
                          </a>
                          <a class="dropdown-item" href="#">
                            <i class="bi-archive dropdown-item-icon"></i> Archive
                          </a>
                          <a class="dropdown-item" href="#">
                            <i class="bi-upload dropdown-item-icon"></i> Publish
                          </a>
                          <a class="dropdown-item" href="#">
                            <i class="bi-x-lg dropdown-item-icon"></i> Unpublish
                          </a>
                        </div>
                      </div>

                    </div>
                  </td>
                </tr><tr role="row" class="odd">
                  <td class="table-column-pe-0">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="productsCheck3" />
                      <label class="form-check-label" for="productsCheck3">
                      </label>
                    </div>
                  </td>
                  <td class="table-column-ps-0">
                    <a class="d-flex align-items-center" href="./ecommerce-product-details.html">
                      <div class="flex-shrink-0">
                        <img class="avatar avatar-lg" src="./assets/img/400x400/img25.jpg" alt="Image Description" />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h5 class="text-inherit mb-0">RayBan black sunglasses</h5>
                      </div>
                    </a>
                  </td>
                  <td>Accessories</td>

                  <td>
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" id="stocksCheckbox3" />
                      <label class="form-check-label" for="stocksCheckbox3"></label>
                    </div>
                  </td>
                  <td>8472341241</td>
                  <td>$37</td>

                  <td>1</td>
                  <td>
                    <div class="btn-group" role="group">
                      <a class="btn btn-white btn-sm" href="./ecommerce-product-details.html">
                        <i class="bi-pencil-fill me-1"></i> Edit
                      </a>


                      <div class="btn-group">
                        <button type="button" class="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="productsEditDropdown3" data-bs-toggle="dropdown" aria-expanded="false"></button>

                        <div class="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="productsEditDropdown3">
                          <a class="dropdown-item" href="#">
                            <i class="bi-trash dropdown-item-icon"></i> Delete
                          </a>
                          <a class="dropdown-item" href="#">
                            <i class="bi-archive dropdown-item-icon"></i> Archive
                          </a>
                          <a class="dropdown-item" href="#">
                            <i class="bi-upload dropdown-item-icon"></i> Publish
                          </a>
                          <a class="dropdown-item" href="#">
                            <i class="bi-x-lg dropdown-item-icon"></i> Unpublish
                          </a>
                        </div>
                      </div>

                    </div>
                  </td>
                </tr><tr role="row" class="even">
                  <td class="table-column-pe-0">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="productsCheck4" />
                      <label class="form-check-label" for="productsCheck4">
                      </label>
                    </div>
                  </td>
                  <td class="table-column-ps-0">
                    <a class="d-flex align-items-center" href="./ecommerce-product-details.html">
                      <div class="flex-shrink-0">
                        <img class="avatar avatar-lg" src="./assets/img/400x400/img6.jpg" alt="Image Description" />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h5 class="text-inherit mb-0">Mango Women's shoe</h5>
                      </div>
                    </a>
                  </td>
                  <td>Shoes</td>

                  <td>
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" id="stocksCheckbox4" checked="" />
                      <label class="form-check-label" for="stocksCheckbox4"></label>
                    </div>
                  </td>
                  <td>2412384741</td>
                  <td>$65</td>

                  <td>3</td>
                  <td>
                    <div class="btn-group" role="group">
                      <a class="btn btn-white btn-sm" href="./ecommerce-product-details.html">
                        <i class="bi-pencil-fill me-1"></i> Edit
                      </a>

                      <div class="btn-group">
                        <button type="button" class="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="productsEditDropdown4" data-bs-toggle="dropdown" aria-expanded="false"></button>

                        <div class="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="productsEditDropdown4">
                          <a class="dropdown-item" href="#">
                            <i class="bi-trash dropdown-item-icon"></i> Delete
                          </a>
                          <a class="dropdown-item" href="#">
                            <i class="bi-archive dropdown-item-icon"></i> Archive
                          </a>
                          <a class="dropdown-item" href="#">
                            <i class="bi-upload dropdown-item-icon"></i> Publish
                          </a>
                          <a class="dropdown-item" href="#">
                            <i class="bi-x-lg dropdown-item-icon"></i> Unpublish
                          </a>
                        </div>
                      </div>

                    </div>
                  </td>
                </tr><tr role="row" class="odd">
                  <td class="table-column-pe-0">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="productsCheck5" />
                      <label class="form-check-label" for="productsCheck5">
                      </label>
                    </div>
                  </td>
                  <td class="table-column-ps-0">
                    <a class="d-flex align-items-center" href="./ecommerce-product-details.html">
                      <div class="flex-shrink-0">
                        <img class="avatar avatar-lg" src="./assets/img/400x400/img3.jpg" alt="Image Description" />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h5 class="text-inherit mb-0">Calvin Klein t-shirts</h5>
                      </div>
                    </a>
                  </td>
                  <td>Clothing</td>

                  <td>
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" id="stocksCheckbox5" />
                      <label class="form-check-label" for="stocksCheckbox5"></label>
                    </div>
                  </td>
                  <td>8234741241</td>
                  <td>$89</td>

                  <td>7</td>
                  <td>
                    <div class="btn-group" role="group">
                      <a class="btn btn-white btn-sm" href="./ecommerce-product-details.html">
                        <i class="bi-pencil-fill me-1"></i> Edit
                      </a>


                      <div class="btn-group">
                        <button type="button" class="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="productsEditDropdown5" data-bs-toggle="dropdown" aria-expanded="false"></button>

                        <div class="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="productsEditDropdown5">
                          <a class="dropdown-item" href="#">
                            <i class="bi-trash dropdown-item-icon"></i> Delete
                          </a>
                          <a class="dropdown-item" href="#">
                            <i class="bi-archive dropdown-item-icon"></i> Archive
                          </a>
                          <a class="dropdown-item" href="#">
                            <i class="bi-upload dropdown-item-icon"></i> Publish
                          </a>
                          <a class="dropdown-item" href="#">
                            <i class="bi-x-lg dropdown-item-icon"></i> Unpublish
                          </a>
                        </div>
                      </div>

                    </div>
                  </td>
                </tr><tr role="row" class="even">
                  <td class="table-column-pe-0">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="productsCheck6" />
                      <label class="form-check-label" for="productsCheck6">
                      </label>
                    </div>
                  </td>
                  <td class="table-column-ps-0">
                    <a class="d-flex align-items-center" href="./ecommerce-product-details.html">
                      <div class="flex-shrink-0">
                        <img class="avatar avatar-lg" src="./assets/img/400x400/img5.jpg" alt="Image Description" />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h5 class="text-inherit mb-0">Givenchy perfume</h5>
                      </div>
                    </a>
                  </td>
                  <td>Clothing</td>

                  <td>
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" id="stocksCheckbox6" checked="" />
                      <label class="form-check-label" for="stocksCheckbox6"></label>
                    </div>
                  </td>
                  <td>9984741241</td>
                  <td>$99</td>

                  <td>1</td>
                  <td>
                    <div class="btn-group" role="group">
                      <a class="btn btn-white btn-sm" href="./ecommerce-product-details.html">
                        <i class="bi-pencil-fill me-1"></i> Edit
                      </a>

                      <div class="btn-group">
                        <button type="button" class="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="productsEditDropdown6" data-bs-toggle="dropdown" aria-expanded="false"></button>

                        <div class="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="productsEditDropdown6">
                          <a class="dropdown-item" href="#">
                            <i class="bi-trash dropdown-item-icon"></i> Delete
                          </a>
                          <a class="dropdown-item" href="#">
                            <i class="bi-archive dropdown-item-icon"></i> Archive
                          </a>
                          <a class="dropdown-item" href="#">
                            <i class="bi-upload dropdown-item-icon"></i> Publish
                          </a>
                          <a class="dropdown-item" href="#">
                            <i class="bi-x-lg dropdown-item-icon"></i> Unpublish
                          </a>
                        </div>
                      </div>

                    </div>
                  </td>
                </tr><tr role="row" class="odd">
                  <td class="table-column-pe-0">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="productsCheck7" />
                      <label class="form-check-label" for="productsCheck7">
                      </label>
                    </div>
                  </td>
                  <td class="table-column-ps-0">
                    <a class="d-flex align-items-center" href="./ecommerce-product-details.html">
                      <div class="flex-shrink-0">
                        <img class="avatar avatar-lg" src="./assets/img/400x400/img11.jpg" alt="Image Description" />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h5 class="text-inherit mb-0">Asos t-shirts</h5>
                      </div>
                    </a>
                  </td>
                  <td>Clothing</td>

                  <td>
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" id="stocksCheckbox7" />
                      <label class="form-check-label" for="stocksCheckbox7"></label>
                    </div>
                  </td>
                  <td>7184741241</td>
                  <td>$17</td>

                  <td>4</td>
                  <td>
                    <div class="btn-group" role="group">
                      <a class="btn btn-white btn-sm" href="./ecommerce-product-details.html">
                        <i class="bi-pencil-fill me-1"></i> Edit
                      </a>


                      <div class="btn-group">
                        <button type="button" class="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="productsEditDropdown7" data-bs-toggle="dropdown" aria-expanded="false"></button>

                        <div class="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="productsEditDropdown7">
                          <a class="dropdown-item" href="#">
                            <i class="bi-trash dropdown-item-icon"></i> Delete
                          </a>
                          <a class="dropdown-item" href="#">
                            <i class="bi-archive dropdown-item-icon"></i> Archive
                          </a>
                          <a class="dropdown-item" href="#">
                            <i class="bi-upload dropdown-item-icon"></i> Publish
                          </a>
                          <a class="dropdown-item" href="#">
                            <i class="bi-x-lg dropdown-item-icon"></i> Unpublish
                          </a>
                        </div>
                      </div>

                    </div>
                  </td>
                </tr><tr role="row" class="even">
                  <td class="table-column-pe-0">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="productsCheck8" />
                      <label class="form-check-label" for="productsCheck8">
                      </label>
                    </div>
                  </td>
                  <td class="table-column-ps-0">
                    <a class="d-flex align-items-center" href="./ecommerce-product-details.html">
                      <div class="flex-shrink-0">
                        <img class="avatar avatar-lg" src="./assets/img/400x400/img12.jpg" alt="Image Description" />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h5 class="text-inherit mb-0">Apple AirPods 2</h5>
                      </div>
                    </a>
                  </td>
                  <td>Electronics</td>

                  <td>
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" id="stocksCheckbox8" />
                      <label class="form-check-label" for="stocksCheckbox8"></label>
                    </div>
                  </td>
                  <td>1084741241</td>
                  <td>$249</td>

                  <td>1</td>
                  <td>
                    <div class="btn-group" role="group">
                      <a class="btn btn-white btn-sm" href="./ecommerce-product-details.html">
                        <i class="bi-pencil-fill me-1"></i> Edit
                      </a>


                      <div class="btn-group">
                        <button type="button" class="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="productsEditDropdown8" data-bs-toggle="dropdown" aria-expanded="false"></button>

                        <div class="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="productsEditDropdown8">
                          <a class="dropdown-item" href="#">
                            <i class="bi-trash dropdown-item-icon"></i> Delete
                          </a>
                          <a class="dropdown-item" href="#">
                            <i class="bi-archive dropdown-item-icon"></i> Archive
                          </a>
                          <a class="dropdown-item" href="#">
                            <i class="bi-upload dropdown-item-icon"></i> Publish
                          </a>
                          <a class="dropdown-item" href="#">
                            <i class="bi-x-lg dropdown-item-icon"></i> Unpublish
                          </a>
                        </div>
                      </div>

                    </div>
                  </td>
                </tr><tr role="row" class="odd">
                  <td class="table-column-pe-0">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="productsCheck9" />
                      <label class="form-check-label" for="productsCheck9">
                      </label>
                    </div>
                  </td>
                  <td class="table-column-ps-0">
                    <a class="d-flex align-items-center" href="./ecommerce-product-details.html">
                      <div class="flex-shrink-0">
                        <img class="avatar avatar-lg" src="./assets/img/400x400/img13.jpg" alt="Image Description" />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h5 class="text-inherit mb-0">Timex Watch</h5>
                      </div>
                    </a>
                  </td>
                  <td>Accessories</td>

                  <td>
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" id="stocksCheckbox9" />
                      <label class="form-check-label" for="stocksCheckbox9"></label>
                    </div>
                  </td>
                  <td>4831441241</td>
                  <td>$68</td>

                  <td>2</td>
                  <td>
                    <div class="btn-group" role="group">
                      <a class="btn btn-white btn-sm" href="./ecommerce-product-details.html">
                        <i class="bi-pencil-fill me-1"></i> Edit
                      </a>


                      <div class="btn-group">
                        <button type="button" class="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="productsEditDropdown9" data-bs-toggle="dropdown" aria-expanded="false"></button>

                        <div class="dropdown-menu dropdown-menu-end mt-1" aria-labelledby="productsEditDropdown9">
                          <a class="dropdown-item" href="#">
                            <i class="bi-trash dropdown-item-icon"></i> Delete
                          </a>
                          <a class="dropdown-item" href="#">
                            <i class="bi-archive dropdown-item-icon"></i> Archive
                          </a>
                          <a class="dropdown-item" href="#">
                            <i class="bi-upload dropdown-item-icon"></i> Publish
                          </a>
                          <a class="dropdown-item" href="#">
                            <i class="bi-x-lg dropdown-item-icon"></i> Unpublish
                          </a>
                        </div>
                      </div>

                    </div>
                  </td>
                </tr><tr role="row" class="even">
                  <td class="table-column-pe-0">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="productsCheck10" />
                      <label class="form-check-label" for="productsCheck10">
                      </label>
                    </div>
                  </td>
                  <td class="table-column-ps-0">
                    <a class="d-flex align-items-center" href="./ecommerce-product-details.html">
                      <div class="flex-shrink-0">
                        <img class="avatar avatar-lg" src="./assets/img/400x400/img14.jpg" alt="Image Description" />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h5 class="text-inherit mb-0">Air Jordan 1</h5>
                      </div>
                    </a>
                  </td>
                  <td>Shoes</td>

                  <td>
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" id="stocksCheckbox10" checked="" />
                      <label class="form-check-label" for="stocksCheckbox10"></label>
                    </div>
                  </td>
                  <td>1223847441</td>
                  <td>$139</td>

                  <td>9</td>
                  <td>
                    <div class="btn-group" role="group">
                      <a class="btn btn-white btn-sm" href="./ecommerce-product-details.html">
                        <i class="bi-pencil-fill me-1"></i> Edit
                      </a>


                      <div class="btn-group">
                        <button type="button" class="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="productsEditDropdown10" data-bs-toggle="dropdown" aria-expanded="false"></button>

                        <div class="dropdown-menu dropdown-end-end mt-1" aria-labelledby="productsEditDropdown10">
                          <a class="dropdown-item" href="#">
                            <i class="bi-trash dropdown-item-icon"></i> Delete
                          </a>
                          <a class="dropdown-item" href="#">
                            <i class="bi-archive dropdown-item-icon"></i> Archive
                          </a>
                          <a class="dropdown-item" href="#">
                            <i class="bi-upload dropdown-item-icon"></i> Publish
                          </a>
                          <a class="dropdown-item" href="#">
                            <i class="bi-x-lg dropdown-item-icon"></i> Unpublish
                          </a>
                        </div>
                      </div>

                    </div>
                  </td>
                </tr><tr role="row" class="odd">
                  <td class="table-column-pe-0">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="productsCheck11" />
                      <label class="form-check-label" for="productsCheck11">
                      </label>
                    </div>
                  </td>
                  <td class="table-column-ps-0">
                    <a class="d-flex align-items-center" href="./ecommerce-product-details.html">
                      <div class="flex-shrink-0">
                        <img class="avatar avatar-lg" src="./assets/img/400x400/img15.jpg" alt="Image Description" />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h5 class="text-inherit mb-0">RayBan sunglasses</h5>
                      </div>
                    </a>
                  </td>
                  <td>Accessories</td>

                  <td>
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" id="stocksCheckbox11" />
                      <label class="form-check-label" for="stocksCheckbox11"></label>
                    </div>
                  </td>
                  <td>1242384741</td>
                  <td>$14</td>

                  <td>1</td>
                  <td>
                    <div class="btn-group" role="group">
                      <a class="btn btn-white btn-sm" href="./ecommerce-product-details.html">
                        <i class="bi-pencil-fill me-1"></i> Edit
                      </a>


                      <div class="btn-group">
                        <button type="button" class="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="productsEditDropdown11" data-bs-toggle="dropdown" aria-expanded="false"></button>

                        <div class="dropdown-menu dropdown-end-end mt-1" aria-labelledby="productsEditDropdown11">
                          <a class="dropdown-item" href="#">
                            <i class="bi-trash dropdown-item-icon"></i> Delete
                          </a>
                          <a class="dropdown-item" href="#">
                            <i class="bi-archive dropdown-item-icon"></i> Archive
                          </a>
                          <a class="dropdown-item" href="#">
                            <i class="bi-upload dropdown-item-icon"></i> Publish
                          </a>
                          <a class="dropdown-item" href="#">
                            <i class="bi-x-lg dropdown-item-icon"></i> Unpublish
                          </a>
                        </div>
                      </div>

                    </div>
                  </td>
                </tr><tr role="row" class="even">
                  <td class="table-column-pe-0">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="productsCheck12" />
                      <label class="form-check-label" for="productsCheck12">
                      </label>
                    </div>
                  </td>
                  <td class="table-column-ps-0">
                    <a class="d-flex align-items-center" href="./ecommerce-product-details.html">
                      <div class="flex-shrink-0">
                        <img class="avatar avatar-lg" src="./assets/img/400x400/img17.jpg" alt="Image Description" />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h5 class="text-inherit mb-0">Gray and yellow cap</h5>
                      </div>
                    </a>
                  </td>
                  <td>Accessories</td>

                  <td>
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" id="stocksCheckbox12" />
                      <label class="form-check-label" for="stocksCheckbox12"></label>
                    </div>
                  </td>
                  <td>8311741241</td>
                  <td>$9</td>

                  <td>1</td>
                  <td>
                    <div class="btn-group" role="group">
                      <a class="btn btn-white btn-sm" href="./ecommerce-product-details.html">
                        <i class="bi-pencil-fill me-1"></i> Edit
                      </a>

                      <div class="btn-group">
                        <button type="button" class="btn btn-white btn-icon btn-sm dropdown-toggle dropdown-toggle-empty" id="productsEditDropdown12" data-bs-toggle="dropdown" aria-expanded="false"></button>

                        <div class="dropdown-menu dropdown-end-end mt-1" aria-labelledby="productsEditDropdown12">
                          <a class="dropdown-item" href="#">
                            <i class="bi-trash dropdown-item-icon"></i> Delete
                          </a>
                          <a class="dropdown-item" href="#">
                            <i class="bi-archive dropdown-item-icon"></i> Archive
                          </a>
                          <a class="dropdown-item" href="#">
                            <i class="bi-upload dropdown-item-icon"></i> Publish
                          </a>
                          <a class="dropdown-item" href="#">
                            <i class="bi-x-lg dropdown-item-icon"></i> Unpublish
                          </a>
                        </div>
                      </div>

                    </div>
                  </td>
                </tr></tbody>
            </table><div class="dataTables_info" id="datatable_info" role="status" aria-live="polite">Showing 1 to 12 of 20 entries</div></div>
        </div>

        <div class="card-footer">
          <div class="row justify-content-center justify-content-sm-between align-items-sm-center">
            <div class="col-sm mb-2 mb-sm-0">
              <div class="d-flex justify-content-center justify-content-sm-start align-items-center">
                <span class="me-2">Showing:</span>


                <div class="tom-select-custom">
                  <select id="datatableEntries" class="js-select form-select form-select-borderless w-auto tomselected ts-hidden-accessible" autocomplete="off" data-hs-tom-select-options="{
                            &quot;searchInDropdown&quot;: false,
                            &quot;hideSearch&quot;: true
                          }" tabindex="-1">
                    <option value="12">12</option>

                    <option value="16">16</option>
                    <option value="18">18</option>
                    <option value="14" selected="">14</option></select><div class="ts-wrapper js-select form-select form-select-borderless w-auto single plugin-change_listener plugin-hs_smart_position input-hidden full has-items"><div class="ts-control"><div data-value="14" class="item" data-ts-item="">14</div></div><div class="tom-select-custom"><div class="ts-dropdown single plugin-change_listener plugin-hs_smart_position"
                    ><div role="listbox" tabindex="-1" class="ts-dropdown-content" id="datatableEntries-ts-dropdown"></div></div></div></div>
                </div>


                <span class="text-secondary me-2">of</span>


                <span id="datatableWithPaginationInfoTotalQty">20</span>
              </div>
            </div>


            <div class="col-sm-auto">
              <div class="d-flex justify-content-center justify-content-sm-end">

                <nav id="datatablePagination" aria-label="Activity pagination">
                  <div class="dataTables_paginate paging_simple_numbers" id="datatable_paginate"><ul id="datatable_pagination" class="pagination datatable-custom-pagination">
                    <li class="paginate_item page-item disabled">
                      <a class="paginate_button previous page-link" aria-controls="datatable" data-dt-idx="0" tabindex="0" id="datatable_previous">
                        <span aria-hidden="true">Prev</span></a></li><li class="paginate_item page-item active">
                      <a class="paginate_button page-link" aria-controls="datatable" data-dt-idx="1" tabindex="0">1</a></li><li class="paginate_item page-item"><a class="paginate_button page-link" aria-controls="datatable" data-dt-idx="2" tabindex="0">2</a></li><li class="paginate_item page-item"><a class="paginate_button next page-link" aria-controls="datatable" data-dt-idx="3" tabindex="0" id="datatable_next"><span aria-hidden="true">Next</span></a></li></ul></div></nav>
              </div>
            </div>

          </div>

        </div>

      </div>


    </AuthenticatedLayout>
  )
}