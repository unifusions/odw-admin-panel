import Card from "@/Components/Card";
import ImageUploader from "@/Components/ImageUploader";
import ServiceImageUploader from "@/Components/ServiceImageUploader";
import TextArea from "@/Components/TextArea";
import TextInput from "@/Components/TextInput";
import TextInputWithLabel from "@/Components/TextInputWithLabel";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, usePage } from "@inertiajs/react";
import { useState } from "react";
import { useDropzone } from 'react-dropzone';

export default function Create() {
    const { categories } = usePage().props;

    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
    ];

    // const [schedule, setSchedule] = useState(daysOfWeek.reduce((acc, day) => {
    //     acc[day] = { open: "", close: "", isOpen: false };
    //     return acc;
    // }, {}));

    const initialSchedule = daysOfWeek.reduce((acc, day) => {
        acc[day] = { isOpen: false, open: "", close: "" };
        return acc;
    }, {});

    const [selectedCategory, setSelectedCategory] = useState([]);

    const { data, setData, post, processing, errors, reset } = useForm({
        clinic_name: '',
        address_line_1: '',
        address_line_2: '',
        phone: '',
        logo: '',
        email: '',
        state: '',
        city: '',
        zip_code: '',
        latitude: '',
        longitude: '',
        desc: '',
        schedule: initialSchedule,
        categories: [],
        images: [],
        logo_file: ''

    });


    const handleCategorySelect = (itemId) => {

        let updatedItems;

        if (data.categories.includes(itemId)) {
            updatedItems = data.categories.filter(id => id !== itemId);
        } else {
            updatedItems = [...data.categories, itemId];
        }

        setData('categories', updatedItems);

    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setData("images", [...data.images, ...files]); // append if needed
    }

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {

            const elementRect = element.getBoundingClientRect();
            const targetScrollY = window.scrollY + elementRect.top - 50;

            element.scrollIntoView({
                behavior: 'smooth',

                top: 0,

            });
        }
    };



    const onsubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();

        // Append fields
        formData.append('clinic_name', data.clinic_name);
        formData.append('email', data.email);
        formData.append('phone', data.phone);
        formData.append('address_line_1', data.address_line_1);
        formData.append('address_line_2', data.address_line_2);
        formData.append('city', data.city);
        formData.append('state', data.state);
        formData.append('zip_code', data.zip_code);
        formData.append('latitude', data.latitude);
        formData.append('longitude', data.longitude);
        formData.append('desc', data.desc);

        // Append categories
        data.categories.forEach((category, index) => {
            formData.append(`categories[${index}]`, category);
        });

        // Append schedule as JSON
        formData.append('schedule', JSON.stringify(data.schedule));

        // Append images
        data.images.forEach((image, index) => {
            formData.append(`images[]`, image);
        });

        // Post via Inertia
        post(route('clinics.store'), formData, {
            forceFormData: true,
        });
    };

    function DropzoneArea() {
        const { getRootProps, getInputProps } = useDropzone({
            accept: {
                'image/*': []
            },
            multiple: true,
            onDrop: (acceptedFiles) => {
                // Append new files to existing state
                setData("images", [...data.images, ...acceptedFiles]);
            }
        });

        return (
            <div
                {...getRootProps({
                    className: "dz-dropzone dz-clickable border rounded p-4 text-center",
                    style: { cursor: 'pointer', backgroundColor: '#fafafa' },
                })}
            >
                <input {...getInputProps()} />
                <p className="mb-0">Drag & drop images here, or click to select files</p>
            </div>
        );
    }


    return (
        <AuthenticatedLayout header="Add Clinic">
            <Head title="Add Clinic" />




            <div className="row " style={{ flexGrow: 1 }}>
                <div className="col-lg-3 mb-3 mb-lg-0 " style={{ position: "sticky", top: "80px", alignSelf: "flex-start", height: "calc(100vh - 180px)" }}>
                    <div className="">
                        <div id="navbarVerticalNavMenu" className=" navbar-collapse" >
                            <ul id="navbarSettings" className="  card card-navbar-nav nav nav-tabs nav-lg nav-vertical "   >
                                <li className="nav-item">
                                    <button className="nav-link" onClick={() => scrollToSection('information')}>
                                        <i class="bi-info-circle nav-icon"></i>

                                        Clinic Information
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link" href="#emailSection" onClick={() => scrollToSection('working-hours')}>
                                        <i className="bi-alarm nav-icon"></i> Working Hours
                                    </button>
                                </li>

                                <li className="nav-item">
                                    <button className="nav-link" onClick={() => scrollToSection('gallery')}>
                                        <i className="bi-images nav-icon"></i> Images
                                    </button>
                                </li>

                                <li className="nav-item">
                                    <button className="nav-link" onClick={() => scrollToSection('treatments')}>
                                        <i className="bi-capsule nav-icon"></i> Treatments
                                    </button>
                                </li>

                                <li className="nav-item">
                                    <button className="nav-link" href="#twoStepVerificationSection" onClick={() => scrollToSection('publish')}>
                                        <i className="bi-plus-circle nav-icon"></i> Publish
                                    </button>
                                </li>

                            </ul>
                        </div>
                    </div>

                </div>
                <div className="col-lg-9 mb-3 mb-lg-0">

                    <form action="" onSubmit={onsubmit} noValidate >

                        <Card id="information" title="Clinic Information">

                            <TextInputWithLabel
                                id="clinic_name"
                                type="text"
                                value={data.clinic_name}
                                placeholder="Clinic Name"
                                onChange={(e) => setData('clinic_name', e.target.value)}
                                label="Name"
                                className=" mb-4"
                            />

                            <div className="row">
                                <div className="col-sm-6">

                                    <TextInputWithLabel
                                        id="email"
                                        type="email"
                                        value={data.email}
                                        placeholder="email@address.com"
                                        onChange={(e) => setData('email', e.target.value)}
                                        label="Contact Email"
                                    />


                                </div>


                                <div className="col-sm-6">

                                    <div className="mb-4">


                                        <TextInputWithLabel
                                            id="phone"
                                            label="Phone Number"
                                            value={data.phone}
                                            className="form-control"
                                            placeholder="+x(xxx)xxx-xx-xx"
                                            onChange={(e) => setData('phone', e.target.value)}
                                        />




                                    </div>

                                </div>


                                <div className="col-sm-6">

                                    <TextInputWithLabel
                                        id="address_line_1"
                                        type="text"
                                        value={data.address_line_1}
                                        placeholder=""
                                        onChange={(e) => setData('address_line_1', e.target.value)}
                                        label="Address Line 1"
                                    />


                                </div>


                                <div className="col-sm-6 mb-3">


                                    <TextInputWithLabel
                                        id="address_line_2"
                                        type="text"
                                        value={data.address_line_2}
                                        placeholder=""
                                        onChange={(e) => setData('address_line_2', e.target.value)}
                                        label="Address Line 2"
                                    />


                                </div>

                                <div className="col-sm-6 mb-3">


                                    <TextInputWithLabel
                                        id="city"
                                        type="text"
                                        value={data.city}
                                        placeholder=""
                                        onChange={(e) => setData('city', e.target.value)}
                                        label="City"
                                    />


                                </div>

                                <div className="col-sm-6 mb-3">


                                    <TextInputWithLabel
                                        id="city"
                                        type="text"
                                        value={data.state}
                                        placeholder=""
                                        onChange={(e) => setData('state', e.target.value)}
                                        label="State"
                                    />


                                </div>


                                <div className="col-sm-6 mb-3">


                                    <TextInputWithLabel
                                        id="zip_code"
                                        type="text"
                                        value={data.zip_code}
                                        placeholder="20001"
                                        onChange={(e) => setData('zip_code', e.target.value)}
                                        label="ZIP Code"
                                    />


                                </div>






                            </div>

                            <hr />

                            <div className="row">
                                <div className="col-sm-6 mb-3">


                                    <TextInputWithLabel
                                        id="latitude"
                                        type="text"
                                        value={data.latitude}
                                        placeholder="38.9072"
                                        onChange={(e) => setData('latitude', e.target.value)}
                                        label="Latitude"
                                    />


                                </div>

                                <div className="col-sm-6 mb-3">


                                    <TextInputWithLabel
                                        id="longitude"
                                        type="text"
                                        value={data.longitude}
                                        placeholder="77.0369"
                                        onChange={(e) => setData('longitude', e.target.value)}
                                        label="Longitude"
                                    />


                                </div>
                            </div>

                            <label className="form-label">General Info </label>

                            <TextArea name="desc"
                                className="form-control"
                                value={data.desc}
                                placeholder="General Info"
                                onChange={(e) => setData('desc', e.target.value)} />





                        </Card>


                        <Card id="working-hours" styles={{ scrollMarginTop: '80px' }} title="Working Hours">
                            {daysOfWeek.map((day) => (
                                <div key={day} className="row px-3 align-items-center">
                                    <label className="col-lg-3 form-check form-switch mb-3 ">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            checked={data.schedule[day].isOpen}
                                            onChange={(e) =>
                                                setData("schedule", {
                                                    ...data.schedule,
                                                    [day]: {
                                                        ...data.schedule[day],
                                                        isOpen: e.target.checked,
                                                    },
                                                })}

                                        />
                                        {" "}{day}
                                    </label>
                                    {data.schedule[day] && (
                                        <div className="col-lg-6 mb-3 align-items-center">
                                            <div className="input-group input-group-md-vertical align-items-center">
                                                <input
                                                    className="form-control"
                                                    type="time"
                                                    disabled={!data.schedule[day].isOpen}
                                                    value={data.schedule[day].open}
                                                    onChange={(e) =>
                                                        setData("schedule", {
                                                            ...data.schedule,
                                                            [day]: {
                                                                ...data.schedule[day],
                                                                open: e.target.value,
                                                            },
                                                        })
                                                    }
                                                />
                                                <div className="mx-3"> TO </div>
                                                <input
                                                    className="form-control"
                                                    type="time"
                                                    value={data.schedule[day].close}
                                                    disabled={!data.schedule[day].isOpen}

                                                    onChange={(e) =>
                                                        setData("schedule", {
                                                            ...data.schedule,
                                                            [day]: {
                                                                ...data.schedule[day],
                                                                close: e.target.value,
                                                            },
                                                        })
                                                    }
                                                />
                                            </div>

                                        </div>

                                    )}
                                </div>
                            ))}

                        </Card>

                        <Card id="treatments" styles={{ scrollMarginTop: '80px' }} title="Treatment">
                            <div className="row" >


                                {categories.map((category) => {
                                    const isSelected = data.categories.includes(category.id);
                                    return (


                                        <div key={category.id} className="col-lg-4 mb-3">

                                            <label className="form-check form-switch mb-3 ">
                                                {category.name}

                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    checked={isSelected}
                                                    onChange={() => handleCategorySelect(category.id)}
                                                />
                                            </label>
                                        </div>
                                    )
                                })}
                            </div>
                        </Card>



                        <Card id="gallery" styles={{ scrollMarginTop: '80px' }} title="Images">

                            <h4>Logo</h4>
                            <ImageUploader onFileSelect={(file) => setData('image_file', file)} />

                            <h4 className="mt-3 mb-3">Gallery</h4>

                            <div className="dropzone-container">
                                <DropzoneArea />
                            </div>

                            {data.images.length > 0 && (
                                <div className="row mt-3">
                                    {data.images.map((file, index) => (
                                        <div key={index} className="col-3 mb-3">

                                            <div class="card card-sm">
                                                <img class="card-img-top" src={URL.createObjectURL(file)} alt={`Preview ${index}`} />

                                                <div class="card-body">
                                                    <div class="row col-divider text-center">


                                                        <div class="col">
                                                            <a class="text-danger" onClick={() => {
                                                                const updatedImages = [...data.images];
                                                                updatedImages.splice(index, 1);
                                                                setData("images", updatedImages);
                                                            }}
                                                            >
                                                                <i class="bi-trash"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    ))}
                                </div>
                            )}
                        </Card>




                        <Card id="publish"
                            title="Publish">
                            <button type="submit" className="btn btn-lg btn-primary " >
                                Publish
                            </button>
                        </Card>

                    </form>
                </div>

                <div className="col-lg-4">




                </div>

            </div>


        </AuthenticatedLayout>
    )
}