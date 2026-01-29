
import { Column, DisplayFlex, Row } from "@/Components/Components";
import InputLabel from "@/Components/InputLabel";
import PageHeader from "@/Components/PageHeader";
import ServiceImageUploader from "@/Components/ServiceImageUploader";
import TextArea from "@/Components/TextArea";
import TextInputWithLabel from "@/Components/TextInputWithLabel";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Textarea } from "@/Components/ui/textarea";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, usePage } from "@inertiajs/react";
import ReactSelect from "react-select";

export default function Create() {
    const { clinics, services } = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        practise_from: '',
        phone: '',
        email: '',
        clinics: [],

        services: [],
        about: '',
        no_of_patients: '',
        no_of_reviews: '',
        rating: ''
    });

    const onClinicSelect = (selectedOptions) => {
        setData('clinics', selectedOptions);
    }

    const onServiceSelect = (selectedOptions) => {
        setData('services', selectedOptions);
    }

    const onsubmit = (e) => {
        e.preventDefault();

        post(route('dentists.store'), {
            forceFormData: true,

        });

    }


    return (
        <AuthenticatedLayout
            header="Dentists"
            pageTitle="Add New Dentist">


            <form onSubmit={onsubmit} >

                <div className="grid grid-cols-3 gap-4">

                    <div  >
                        <Card title="Dentists">
                            <CardHeader>
                                <CardTitle>
                                    Dentists Image
                                </CardTitle>
                            </CardHeader>
                            <CardContent>



                                <ServiceImageUploader onFileSelect={(file) => setData('photo', file)} />

                            </CardContent>


                        </Card>
                    </div>

                    <div className="col-span-2">
                        <Card>
                            <CardContent className="space-y-2">
                                <div className="space-y-2">
                                    <Label>Dentist Name</Label>
                                    <Input
                                        id="dentist_name"
                                        type="text"
                                        value={data.name}
                                        placeholder="Dentist Name"
                                        onChange={(e) => setData('name', e.target.value)}
                                        label="Name"
                                        className=" mb-4"
                                        isSingleRow={true}
                                    />

                                </div>
                                <div className="space-y-2">
                                    <Label>Practising From</Label>

                                    <Input
                                        id="practise_from"
                                        type="date"
                                        value={data.practise_from}

                                        onChange={(e) => setData('practise_from', e.target.value)}
                                        label="Practise From"
                                        className=" mb-4"
                                        isSingleRow={true}
                                    />

                                </div>
                                <div className="space-y-2">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">   
                                            <Label>Phone Number</Label>
                                             <Input
                                            id="phone"
                                            type="text"
                                            value={data.phone}
                                            placeholder="Phone"
                                            onChange={(e) => setData('phone', e.target.value)}
                                            label="Phone"
                                            className=" mb-4"
                                            isSingleRow={true}
                                        />

                                        </div>
                                        <div className="space-y-2">
                                             <Label>Email</Label>
                                            <Input
                                                id="phone"
                                                type="email"
                                                value={data.email}
                                                placeholder="Email"
                                                onChange={(e) => setData('email', e.target.value)}
                                                label="Email"
                                                className=" mb-4"
                                                isSingleRow={true}
                                            />
                                        </div>
                                    </div>

                                </div>
                                <div className="space-y-2 mb-5">
                                    <Label>Clinics</Label>
                                    <ReactSelect options={clinics} isMulti onChange={onClinicSelect} />
                                </div>
                                <div className="space-y-2 mb-5"> <Label>Services</Label>
                                    <ReactSelect options={services} isMulti onChange={onServiceSelect} />
                                </div>

                                <div className="space-y-2">
                                    <Label>About Dentist</Label>
                                    <Textarea
                                        name="about"
                                        style={{ fieldSizing: 'content' }}
                                        value={data.about}
                                        onChange={(e) => setData('about', e.target.value)}
                                    />
                                </div>

                                <div className="space-y-4">
                                    <p className="font-medium">Additional Information (optional)</p>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="space-y-2">
                                            <Label>Patients Attended</Label>
                                            <Input
                                                id="no_of_patients"
                                                type="number"
                                                value={data.no_of_patients}
                                                placeholder="eg., 5000"
                                                onChange={(e) => setData('no_of_patients', e.target.value)}
                                                label="Patients Attended"
                                                className=" mb-4"
                                                isSingleRow={true}
                                            />

                                        </div>
                                        <div className="space-y-2">
                                            <Label>Reviews</Label>
                                            <Input
                                                id="no_of_reviews"
                                                type="number"
                                                value={data.no_of_reviews}
                                                placeholder="eg., 5000"
                                                onChange={(e) => setData('no_of_reviews', e.target.value)}
                                                label="Reviews"
                                                className=" mb-4"
                                                isSingleRow={true}
                                            /></div>
                                        <div className="space-y-2">
                                            <Label>Rating</Label>
                                            <Input
                                                id="rating"
                                                type="number"
                                                value={data.rating}
                                                placeholder="eg., 1 - 5"
                                                onChange={(e) => setData('rating', e.target.value)}
                                                label=""
                                                className=" mb-4"
                                                isSingleRow={true}
                                            />

                                        </div>
                                    </div>
                                </div>
                            </CardContent>




                            <CardFooter className="border-t border-border">
                                <Button type="submit" className="btn btn-primary">Save Dentist</Button>
                            </CardFooter>




                        </Card>

















                    </div>
                </div>
            </form>

        </AuthenticatedLayout>
    )
}