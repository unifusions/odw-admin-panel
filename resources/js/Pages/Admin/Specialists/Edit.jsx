
import { Column, DisplayFlex, Row } from "@/Components/Components";
import InputLabel from "@/Components/InputLabel";
import PageHeader from "@/Components/PageHeader";
import ServiceImageUploader from "@/Components/ServiceImageUploader";
import TextArea from "@/Components/TextArea";
import TextInputWithLabel from "@/Components/TextInputWithLabel";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardFooter } from "@/Components/ui/card";
import { Label } from "@/Components/ui/label";
import { Textarea } from "@/Components/ui/textarea";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import { ArrowLeft } from "lucide-react";
import ReactSelect from "react-select";

export default function Edit() {
    const { specialist, selectedClinic, selectedServices, clinics, services } = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        name: specialist.name || '',
        practise_from: specialist.practise_from || '',
        phone: specialist.phone || '',
        email: specialist.email || '',
        clinics: selectedClinic || [],
        services: selectedServices || [],
        photo: specialist.photo || '',

        about: specialist.about || '',
        no_of_patients: specialist.no_of_patients || '',
        no_of_reviews: specialist.no_of_reviews || '',
        rating: specialist.rating || ''


    });

    const onServiceSelect = (selectedOptions) => {
        setData('services', selectedOptions);
    }

    const onClinicSelect = (selectedOption) => {
        // alert(JSON.stringify(selectedOptions.value));
        setData('clinics', selectedOption)
    }

    const onsubmit = (e) => {

        e.preventDefault();

        const fmData = new FormData();

        if (data.photo) {
            fmData.append("photo", data.photo);
        }
        fmData.append("_method", "PUT");
        router.post(route('specialists.update', specialist), {
            _method: 'put',
            data: data,
            image_path: data.photo,
            forceFormData: true,
            // onFinish: {() => closeModal}
        });

    }
    return (
        <>
            <AuthenticatedLayout
                header="Specialists"
            >
                <Button
                    variant="ghost"
                    className="mb-4"
                    onClick={() => router.get(route('specialists.index'))}
                >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Specialists
                </Button>


                <form onSubmit={onsubmit}>
                    <div className="grid grid-cols-3 gap-4">
                        <Card className="h-fit">

                            <CardContent className="space-y-4">
                                <ServiceImageUploader onFileSelect={(file) => setData('photo', file)} existingImage={specialist.photo_url} />

                                <TextInputWithLabel
                                    id="speicalist_name"
                                    type="text"
                                    value={data.name}
                                    placeholder=""
                                    onChange={(e) => setData('name', e.target.value)}
                                    label="Specialist Full Name"
                                />

                                <TextInputWithLabel
                                    id="practise_from"
                                    type="date"
                                    value={data.practise_from}
                                    placeholder=""
                                    onChange={(e) => setData('practise_from', e.target.value)}
                                    label="Practise From"
                                />

                                <TextInputWithLabel
                                    id="practise_from"
                                    type="text"
                                    value={data.phone}
                                    placeholder=""
                                    onChange={(e) => setData('phone', e.target.value)}
                                    label="Phone"

                                />

                                <TextInputWithLabel
                                    id="email"
                                    type="email"
                                    value={data.email}
                                    placeholder=""

                                    onChange={(e) => setData('email', e.target.value)}
                                    label="Email"
                                />

                            </CardContent>







                        </Card>
                        <div className="col-span-2">


                            <Card title="Clinic & Services">
                                <CardContent className="space-y-4">
                                    <div className="space-y-2"><Label>Clinic
                                    </Label>
                                        <ReactSelect options={clinics} isMulti onChange={onClinicSelect}
                                            value={data.clinics}
                                        /></div>

                                    <div className="space-y-2"><Label>Services
                                    </Label>
                                        <ReactSelect options={services} isMulti
                                            value={data.services}
                                            onChange={onServiceSelect} /></div>

                                </CardContent>


                            </Card>

                            <Card>
                                <CardContent className="space-y-4">
                                    <div><Label>About {specialist.name}</Label>
                                        <Textarea
                                            name="about"
                                            style={{ fieldSizing: 'content' }}
                                            value={data.about}
                                            onChange={(e) => setData('about', e.target.value)}
                                        />
                                    </div>

                                    <div className="grid grid-cols-3 gap-4">

                                        <TextInputWithLabel
                                            id="no_of_patients"
                                            type="number"
                                            value={data.no_of_patients}
                                            placeholder="eg., 5000"
                                            onChange={(e) => setData('no_of_patients', e.target.value)}
                                            label="Patients Attended"
                                            className=" mb-4"

                                        />



                                        <TextInputWithLabel
                                            id="no_of_reviews"
                                            type="number"
                                            value={data.no_of_reviews}
                                            placeholder="eg., 5000"
                                            onChange={(e) => setData('no_of_reviews', e.target.value)}
                                            label="Reviews"
                                            className=" mb-4"

                                        />



                                        <TextInputWithLabel
                                            id="rating"
                                            type="number"
                                            value={data.rating}
                                            placeholder="eg., 1 - 5"
                                            onChange={(e) => setData('rating', e.target.value)}
                                            label="Rating"
                                            className=" mb-4"

                                        />

                                    </div>
                                </CardContent>
                                <CardFooter className="border-t border-border">
                                    <Button type="submit">Save Specialist</Button>
                                </CardFooter>











                            </Card>

                        </div>
                    </div>


                </form >
            </AuthenticatedLayout >
        </>
    )
}