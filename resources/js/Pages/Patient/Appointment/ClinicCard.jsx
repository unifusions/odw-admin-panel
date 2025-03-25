import { Link } from "@inertiajs/react";

export default function ClinicCard({clinicbranch}) {
    return (
        <>
            {/* <div class="col-lg-4 col-sm-6 aos-init aos-animate" data-aos="fade-up">
            <div class="product-default border radius-md p-15 mb-25">
                <figure class="product-img mb-15">
                    <a href="service-details.html" title="Image" target="_self" class="lazy-container radius-sm ratio ratio-2-3 lazy-active">
                        <img class=" ls-is-cached lazyloaded" src="assets/images/services/service-5.png" data-src="assets/images/services/service-5.png" alt="Product" />
                    </a>
                </figure>
                <div class="product-details">
                    <div class="d-flex align-items-center justify-content-between gap-2">
                        <span class="tag font-sm">Barber Shop</span>
                        <a href="wishlist.html" class="btn btn-icon border radius-sm" title="Save to Wishlist">
                            <i class="fal fa-heart"></i>
                        </a>
                    </div>
                    <h6 class="product-title mb-0">
                        <a href="service-details.html" target="_self" title="City Tower Barber Shop">City Tower Barber Shop</a>
                    </h6>
                    <div class="author mb-10 mt-10">
                        <img class="blur-up ls-is-cached lazyloaded" src="assets/images/avatar-1.jpg" data-src="assets/images/avatar-1.jpg" alt="Image" />
                            <span class="font-sm">
                                By <a href="javaScript:void(0)" target="_self" title="John Doe">John
                                    Doe</a>
                            </span>
                    </div>
                    <span class="font-sm icon-start"><i class="fal fa-map-marker-alt"></i>City
                        tower, Road : 1285, Usa</span>
                    <div class="d-flex align-items-center justify-content-between gap-2 mt-10">
                        <div class="product-price">
                            <span class="h6 new-price">$350.00</span>
                            <span class="prev-price font-sm">$400.00</span>
                        </div>
                        <a href="javaScript:void(0)" class="btn btn-sm btn-outline-2" data-bs-toggle="modal" data-bs-target="#makeBooking" title="Book Now" target="_self">Book Now</a>
                    </div>
                </div>
            </div>
    </div> */}
            <div className="col-md-6 col-xl-4 mb-3">
                <Link href={route('patient.appointments.clinic', clinicbranch)} >
              
                <div class="card card-hover-shadow pb-0 h-100">

                    <div class="position-relative">

                        <img src="https://placehold.co/600x450.png" class="card-img-top" alt="Card image" />

                        <div class="card-img-overlay d-flex flex-column p-4 z-index-1">

                            <div> <span class="badge text-bg-dark">Adventure</span> </div>

                            <div class="w-100 mt-auto">

                                <span class="badge text-bg-white fs-6">5 days / 4 nights</span>
                            </div>
                        </div>
                    </div>



                    <div class="card-body px-3">

                        <h5 class="card-title  mb-0" style={{ fontSize: '1.3rem' }}>
                            <a href="#" class="stretched-link">{clinicbranch.name}</a></h5>
                        <span class="small">
                            <i class="far fa-calendar-alt me-2"></i>{console.log(clinicbranch)}</span>


                        <ul class="nav nav-divider mt-3 mb-0">
                            <li class="nav-item h6 fw-normal mb-0">
                                <i class="fa-solid fa-plane text-orange me-2"></i>1 Flight
                            </li>
                            <li class="nav-item h6 fw-normal mb-0">
                                <i class="fa-solid fa-hotel text-info me-2"></i>1 Hotel
                            </li>
                            <li class="nav-item h6 fw-normal mb-0">
                                <i class="fa-solid fa-person-skating text-danger me-2"></i>2 Activities
                            </li>
                        </ul>
                    </div>



                    <div class="card-footer pt-0">

                        <div class="d-sm-flex justify-content-sm-between align-items-center flex-wrap">

                            <div class="hstack gap-2">
                                <h5 class="fw-normal text-success mb-0">$845</h5>
                                <small>/per person</small>
                            </div>

                            <div class="mt-2 mt-sm-0">
                                <a href="#" class="btn btn-sm btn-primary mb-0">View Details</a>
                            </div>
                        </div>
                    </div>

                </div>
                </Link>
            </div>

        </>
    )
}