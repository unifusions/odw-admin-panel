import React, { Fragment } from 'react';
import { Link, usePage } from '@inertiajs/react';
import DentistIcon from './Icons/DentistIcon';
import SpecialistIcon from './Icons/SpecialistIcon';

const Sidebar = () => {
    const { auth } = usePage().props;
    const url = usePage().url;
    const role = auth.user.role;

    // Define common menu items
    const commonMenuItems = [
        { name: 'Profile', path: '/profile' },
        { name: 'Settings', path: '/settings' }
    ];

    // Define role-specific menu items
    const roleMenuItems = {
        super_admin: [
            {
                section: false,
                links:
                    [
                        { name: 'Dashboard', path: '/admin/dashboard', icon: 'bi-house-door' },
                        { name: 'Appointments', path: '/admin/appointments', icon: 'bi-calendar2-week' },
                        { name: 'Second Opinion', path: '/admin/second-opinion', icon: 'bi-clipboard2-pulse ' },
                        { name: 'Estimates', path: '/admin/estimates', icon: 'bi-calculator ' },
                        { name: 'Compare Costs', path: '/admin/compare-costs', icon: 'bi-calculator' },
                        { name: 'Patients', path: '/admin/patients', icon: 'bi-people' }
                    ]
            },
            {
                section: 'Clinic Management',
                links:
                    [
                        { name: 'Clinics', path: '/admin/clinics', icon: 'bi-hospital', svgIcon: '' },
                        { name: 'Dentists', path: '/admin/dentists', icon: '', svgIcon: <DentistIcon /> },
                        { name: 'Specialists', path: '/admin/specialists', icon: '', svgIcon: <SpecialistIcon /> },
                        { name: 'Users', path: '/admin/clinic-users', icon: 'bi-person-plus', svgIcon: '' },
                        { name: 'Services', path: '/admin/services', icon: 'bi-journal-medical', svgIcon: '' },
                    ]
            },

            {
                section: 'Offers',
                links:
                    [
                        { name: 'Deals', path: '/admin/deals', icon: 'bi-tag nav-icon', svgIcon: '' },
                        // { name: 'Specialists', path: '/admin/dashboard', icon: '', svgIcon : '' },
                    ]
            }

        ],
        clinic_admin: [
            {
                section: false,
                links:
                    [
                        { name: 'Dashboard', path: '/clinic/admin/dashboard', icon: 'bi-house-door' },
                        {
                            name: 'Appointments', path: '/clinic/admin/appointments', icon: 'bi-calendar2-week'

                        },
                        { name: 'Manage Staff', path: '/clinic/admin/manage-staffs', icon: 'bi-person-bounding-box' },


                        { name: 'Patients', path: '/clinic/patients', icon: 'bi-people' }
                    ]
            },

        ],
        clinic_user: [{
            section: false,
            links: [
                { name: 'Dashboard', path: '/clinic/user/dashboard' },
                { name: 'Appointments', path: '/clinic/user/appointments' }
            ]
        }

        ],
        clinic_doctor: [
            {
                section: false,
                links: [
                    { name: 'Dashboard', path: '/doctor/dashboard' },
                    { name: 'My Patients', path: '/doctor/patients' },
                    { name: 'Schedule', path: '/doctor/schedule' }

                ]
            }
        ],
        patient: [
            {
                section: false,
                links: [
                    { name: 'Dashboard', path: '/patient/dashboard',  icon: 'bi-house-door'  },
                    { name: 'Appointments', path: '/patient/appointments', icon: 'bi-calendar2-week' }
                ]
            }
        ]
    };

    // Combine common and role-specific items
    const menuItems = [...roleMenuItems[role]];

    return (
        <aside className="js-navbar-vertical-aside navbar navbar-vertical-aside navbar-vertical navbar-vertical-fixed navbar-expand-xl navbar-light bg-light">
            <div className="navbar-vertical-container">
                <div className="navbar-vertical-footer-offset">

                    <a className="navbar-brand" href="#" aria-label="Front">
                        <img className="" src="/images/odw-logo-h.png" alt="Logo" width='175' />

                    </a>


                    <button type="button" className="js-navbar-vertical-aside-toggle-invoker navbar-aside-toggler">
                        <i className="bi-arrow-bar-left navbar-toggler-short-align" data-bs-template='<div className="tooltip d-none d-md-block" role="tooltip"><div className="arrow"></div><div className="tooltip-inner"></div></div>' data-bs-toggle="tooltip" data-bs-placement="right" title="Collapse"></i>
                        <i className="bi-arrow-bar-right navbar-toggler-full-align" data-bs-template='<div className="tooltip d-none d-md-block" role="tooltip"><div className="arrow"></div><div className="tooltip-inner"></div></div>' data-bs-toggle="tooltip" data-bs-placement="right" title="Expand"></i>
                    </button>

                    <div className="navbar-vertical-content">
                        <div id="navbarVerticalMenu" className="nav nav-pills nav-vertical card-navbar-nav">


                            {menuItems.map((item, index) => (
                                <Fragment key={`section-${index}`}>
                                    {item.section && <>
                                        <span className="dropdown-header mt-4">{item.section}</span>
                                    </>}


                                    {item.links.map((link, linkIndex) => <>
                                        <div className="nav-item" key={linkIndex}>


                                            <Link href={link.path} className={`nav-link ${url === link.path ? 'active' : ''}`} >
                                                {link.icon && <i className={`nav-icon ${link.icon ?? ''}`}></i>}
                                                {link.svgIcon && link.svgIcon}
                                                <span className="nav-link-title">{link.name}</span>
                                            </Link>

                                        </div>

                                    </>)}
                                </Fragment >


                            ))}
                            {/* <div class="nav-item">
                                <a class="nav-link dropdown-toggle active" href="#navbarVerticalMenuPagesEcommerceMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuPagesEcommerceMenu" aria-expanded="true" aria-controls="navbarVerticalMenuPagesEcommerceMenu">
                                    <i class="bi-basket nav-icon"></i>
                                    <span class="nav-link-title">E-commerce</span>
                                </a>

                                <div id="navbarVerticalMenuPagesEcommerceMenu" class="nav-collapse collapse show" data-bs-parent="#navbarVerticalMenuPagesMenu" hs-parent-area="#navbarVerticalMenu" >
                                    <a class="nav-link " href="./ecommerce.html">Overview</a>

                                    <div id="navbarVerticalMenuPagesMenuEcommerce">

                                        <div class="nav-item">
                                            <a class="nav-link dropdown-toggle collapsed" href="#navbarVerticalMenuPagesEcommerceProductsMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuPagesEcommerceProductsMenu" aria-expanded="false" aria-controls="navbarVerticalMenuPagesEcommerceProductsMenu">
                                                Products
                                            </a>

                                            <div id="navbarVerticalMenuPagesEcommerceProductsMenu" class="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuPagesMenuEcommerce" hs-parent-area="#navbarVerticalMenuPagesEcommerceMenu">
                                                <a class="nav-link " href="./ecommerce-products.html">Products</a>
                                                <a class="nav-link " href="./ecommerce-product-details.html">Product Details</a>
                                                <a class="nav-link " href="./ecommerce-add-product.html">Add Product</a>
                                            </div>
                                        </div>



                                        <div class="nav-item">
                                            <a class="nav-link dropdown-toggle collapsed" href="#navbarVerticalMenuPagesEcommerceOrdersMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuPagesEcommerceOrdersMenu" aria-expanded="false" aria-controls="navbarVerticalMenuPagesEcommerceOrdersMenu">
                                                Orders
                                            </a>

                                            <div id="navbarVerticalMenuPagesEcommerceOrdersMenu" class="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuPagesMenuEcommerce" hs-parent-area="#navbarVerticalMenuPagesEcommerceMenu">
                                                <a class="nav-link " href="./ecommerce-orders.html">Orders</a>
                                                <a class="nav-link " href="./ecommerce-order-details.html">Order Details</a>
                                            </div>
                                        </div>



                                        <div class="nav-item">
                                            <a class="nav-link dropdown-toggle collapsed" href="#navbarVerticalMenuPagesEcommerceCustomersMenu" role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuPagesEcommerceCustomersMenu" aria-expanded="false" aria-controls="navbarVerticalMenuPagesEcommerceCustomersMenu">
                                                Customers
                                            </a>

                                            <div id="navbarVerticalMenuPagesEcommerceCustomersMenu" class="nav-collapse collapse " data-bs-parent="#navbarVerticalMenuPagesMenuEcommerce" hs-parent-area="#navbarVerticalMenuPagesEcommerceMenu">
                                                <a class="nav-link " href="./ecommerce-customers.html">Customers</a>
                                                <a class="nav-link " href="./ecommerce-customer-details.html">Customer Details</a>
                                                <a class="nav-link " href="./ecommerce-add-customers.html">Add Customers</a>
                                            </div>
                                        </div>

                                    </div>

                                    <a class="nav-link " href="./ecommerce-referrals.html">Referrals</a>
                                    <a class="nav-link " href="./ecommerce-manage-reviews.html">Manage Reviews</a>
                                    <a class="nav-link active" href="./ecommerce-checkout.html">Checkout</a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

        </aside >
    );
};

export default Sidebar;