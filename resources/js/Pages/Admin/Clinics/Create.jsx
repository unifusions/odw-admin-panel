
import ImageUploader from "@/Components/ImageUploader";
import ServiceImageUploader from "@/Components/ServiceImageUploader";
import TextArea from "@/Components/TextArea";
import TextInput from "@/Components/TextInput";
import TextInputWithLabel from "@/Components/TextInputWithLabel";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Switch } from "@/Components/ui/switch";
import { Textarea } from "@/Components/ui/textarea";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, usePage } from "@inertiajs/react";
import { Building2, Clock, Globe, Image, Mail, MapPin, Phone, Trash } from "lucide-react";
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
        console.log(data.categories)
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
        const { getRootProps, getInputProps, isDragActive } = useDropzone({
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
            <div {...getRootProps()} className={`
        p-10 border-4 rounded-lg text-center cursor-pointer transition-colors
        ${isDragActive ? 'border-blue-500 bg-blue-100' : 'border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100'}
      `}>

                <label class="profile-cover-uploader-label btn btn-sm btn-white" for="profileCoverUplaoder">
                    <i class="bi-camera-fill"></i>
                    <input {...getInputProps()} />
                    {
                        isDragActive ?
                            <p className="text-blue-600">Drop the files here ...</p> :
                            <p className="text-gray-500">Drag 'n' drop some files here, or click to select files</p>
                    }
                </label>
            </div>
        );
    }


    return (
        <AuthenticatedLayout header="Add Clinic">
            <Head title="Add Clinic" />
 <form   onSubmit={onsubmit} noValidate >
            <div className="grid gap-6 lg:grid-cols-1">
               
                    <Card className="shadow-card">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Building2 className="h-5 w-5 text-primary" />
                                Clinic Information
                            </CardTitle>
                            <CardDescription>
                                Update your clinic's basic information
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="clinicName">Clinic Name</Label>
                                <Input id="clinicName"
                                    placeholder="Clinic Name" value={data.clinic_name}
                                    onChange={(e) => setData('clinic_name', e.target.value)} />
                            </div>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                        <Input
                                            id="email"
                                            type="email"
                                            value={data.email}
                                            placeholder="email@address.com"
                                            onChange={(e) => setData('email', e.target.value)}
                                            className="pl-9"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Phone</Label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                        <Input
                                            id="phone"
                                            value={data.phone}
                                            placeholder="+x(xxx)xxx-xx-xx"
                                            onChange={(e) => setData('phone', e.target.value)}
                                            className="pl-9"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="address">Address</Label>
                                <div className="relative">
                                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <Input
                                            id="address"
                                            defaultValue="123 Medical Center Dr, New York, NY 10001"
                                            value={data.address_line_1}
                                            placeholder="Address Line 1"
                                            onChange={(e) => setData('address_line_1', e.target.value)}
                                            className="pl-9 mb-3"
                                        />

                                        <Input
                                            id="address"
                                            value={data.address_line_2}
                                            placeholder="Address Line 2"
                                            onChange={(e) => setData('address_line_2', e.target.value)}

                                        />

                                    </div>









                                </div>
                            </div>

                            <div className="space-y-2 grid grid-cols-3 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="city">City</Label>
                                    <Input
                                        id="city"
                                        value={data.city}
                                        onChange={(e) => setData('city', e.target.value)}

                                        placeholder="City"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="state">State</Label>
                                    <Input
                                        id="state"

                                        value={data.state}

                                        onChange={(e) => setData('state', e.target.value)}

                                        placeholder="State"

                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="zip_code">Zip Code</Label>
                                    <Input
                                        id="zip_code"

                                        value={data.zip_code}

                                        onChange={(e) => setData('zip_code', e.target.value)}
                                        placeholder="Zip Code"

                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">   <Label htmlFor="zip_code">Latitude</Label>
                                    <Input
                                        id="latitude"
                                        value={data.latitude}
                                        onChange={(e) => setData('latitude', e.target.value)}
                                        className="pl-9"
                                    /></div>
                                <div className="space-y-2"><Label htmlFor="longitude">Longitude</Label>
                                    <Input
                                        id="longitude"
                                        value={data.longitude}
                                        onChange={(e) => setData('longitude', e.target.value)}
                                        className="pl-9"
                                    />
                                </div>


                            </div>


                            <div className="space-y-2">
                                <Label htmlFor="website">Description</Label>
                                <div className="relative">
                                    <Textarea value={data.desc}
                                        placeholder="General Info"
                                        onChange={(e) => setData('desc', e.target.value)} />
                                </div>
                            </div>

                            {/* <div className="space-y-2">
                            <Label htmlFor="website">Website</Label>
                            <div className="relative">
                                <Globe className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                <Input
                                    id="website"
                                    defaultValue="https://dentalcare.com"
                                    className="pl-9"
                                />
                            </div>
                        </div> */}
                             
                        </CardContent>
                    </Card>

                    <Card className="shadow-card">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Clock className="h-5 w-5 text-primary" />
                                Business Hours
                            </CardTitle>
                            <CardDescription>
                                Set your clinic's operating hours
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">

                            {daysOfWeek.map((day) => (
                                <div key={day} className="flex items-center justify-between">
                                    <div className="flex items-center gap-3 ">
                                        <Switch
                                            checked={data.schedule[day].isOpen}
                                            onCheckedChange={(e) => {

                                                setData("schedule", {
                                                    ...data.schedule,
                                                    [day]: {
                                                        ...data.schedule[day],
                                                        isOpen: e,
                                                    },
                                                })
                                            }}
                                        />
                                        <span className="w-24 font-medium">{day}</span>

                                    </div>
                                    {data.schedule[day] && (
                                        <div className="flex items-center gap-2 text-sm">

                                            <Input
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
                                            <span className="text-muted-foreground">to</span>
                                            <Input
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

                                    )}
                                </div>
                            ))}



                        </CardContent>
                    </Card>
                    <Card className="shadow-card">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Clock className="h-5 w-5 text-primary" />
                                Available Treatments
                            </CardTitle>
                            <CardDescription>
                                Set your clinic's treatment services
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-4 gap-6">
                                {categories.map((category) => {
                                    const isSelected = data.categories.includes(category.id);
                                    return (


                                        <div key={category.id} className="flex items-center gap-2">




                                            <Switch

                                                checked={isSelected}
                                                onCheckedChange={() => handleCategorySelect(category.id)}
                                            />  {category.name}

                                        </div>
                                    )
                                })}
                            </div>

                        </CardContent>
                    </Card>


                    <Card  >
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Image className="h-5 w-5 text-primary" />
                                Image Gallery
                            </CardTitle>
                            <CardDescription>
                                Update your clinic's logo/featured image and image gallery
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-2">
                            <div className="space-y-2 ">
                                <Label>Logo / Featured Image</Label>
                                <ImageUploader onFileSelect={(file) => setData('image_file', file)} existingImage={data.logo} deleteFile={() => setData('image_file', null)} />

                            </div>

                            <div className="space-y-2">
                                <Label>Galleries</Label>


                                {data.images.length > 0 && (
                                    <div className="grid grid-cols-6">
                                        {data.images.map((file, index) => (
                                            <div key={index} className=" ">

                                                <div class="card card-sm">
                                                    <img class="block h-20 w-full rounded-lg object-cover object-center" src={URL.createObjectURL(file)} alt={`Preview ${index}`} />

                                                    <div class="card-body">
                                                        <div class="row col-divider text-center">


                                                            <div class="col">
                                                                <Button variant="ghost" type="button" className="" onClick={() => {
                                                                    const updatedImages = [...data.images];
                                                                    updatedImages.splice(index, 1);
                                                                    setData("images", updatedImages);
                                                                }}
                                                                >
                                                                    <Trash className="h-5" />
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        ))}
                                    </div>
                                )}

                                <div className="dropzone-container">
                                    <DropzoneArea />
                                </div>

                            </div>

                        </CardContent>

                        <CardFooter className="border-t border-border">

                            <Button type="submit" >
                                Publish
                            </Button>

                        </CardFooter>

                    </Card>
                
            </div>

</form>


        </AuthenticatedLayout>
    )
}