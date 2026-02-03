
import { Column, DisplayFlex, Row } from "@/Components/Components";
import IconList from "@/Components/icon-list";
import InputLabel from "@/Components/InputLabel";
import PageHeader from "@/Components/PageHeader";
import ServiceImageUploader from "@/Components/ServiceImageUploader";
import TextArea from "@/Components/TextArea";
import TextInputWithLabel from "@/Components/TextInputWithLabel";
import SubmitButton from "@/Components/ui-ext/SubmitButton";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardFooter } from "@/Components/ui/card";
import { Label } from "@/Components/ui/label";
import { Textarea } from "@/Components/ui/textarea";
import DateTimeConverter from "@/Helpers/DateTimeConverter";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import { ArrowLeft, Calendar, Mail, Phone } from "lucide-react";
import ReactSelect from "react-select";


export default function Edit() {

    const { dentist, clinics, services, selectedClinics, selectedServices } = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        name: dentist.name || '',
        practise_from: dentist.practise_from || '',
        phone: dentist.phone || '',
        email: dentist.email || '',
        clinics: selectedClinics || [],

        services: selectedServices || [],
        photo: dentist.photo || '',
        about: dentist.about || '',
        no_of_patients: dentist.no_of_patients || '',
        no_of_reviews: dentist.no_of_reviews || '',
        rating: dentist.rating || ''

    });

    const onClinicSelect = (selectedOptions) => {
        setData('clinics', selectedOptions);
    }

    const onServiceSelect = (selectedOptions) => {
        setData('services', selectedOptions);
    }

    const onsubmit = (e) => {
        e.preventDefault();

        const fmData = new FormData();

        if (data.photo) {
            fmData.append("photo", data.photo);
        }
        fmData.append("_method", "PUT");
        router.post(route('dentists.update', dentist), {
            _method: 'put',
            data: data,
            image_path: data.photo,
            forceFormData: true,
            // onFinish: {() => closeModal}
        });

    }


    return (
        <AuthenticatedLayout
            header="Dentists"
            pageTitle={dentist.name}
        >

   <Button
                variant="ghost"
                className="mb-4"
                onClick={() => router.get(route('dentists.index'))}
            >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dentists
            </Button>



            <form onSubmit={onsubmit} >


                <div className="grid grid-cols-3 gap-4">
                    <Card className="h-fit shadow-card hover:shadow-card-hover transition-all animate-fade-in mb-5" >

                        <CardContent>
                            <ServiceImageUploader onFileSelect={(file) => setData('photo', file)} existingImage={dentist.photo_url} />
                              <h3 className="font-semibold mb-5"> {dentist.name} </h3>

                              <div className="border-t border-border space-y-2 py-2">
<IconList label={dentist?.email } icon={Mail}/>
<IconList label={dentist?.phone } icon={Phone}/>
<IconList label={<DateTimeConverter dateTimeString = {dentist?.created_at} /> } icon={Calendar}/>
                              </div>

                                

                           

                        </CardContent>

                    </Card>

                    <div className="col-span-2 space-y-4">
                        <Card  >

                            <CardContent>
                                <TextInputWithLabel
                                    id="dentist_name"
                                    type="text"
                                    value={data.name}
                                    placeholder="Dentist Name"
                                    onChange={(e) => setData('name', e.target.value)}
                                    label="Name"
                                    className=" mb-4"

                                />


                                <TextInputWithLabel
                                    id="practise_from"
                                    type="date"
                                    value={data.practise_from}
                                    placeholder="Dentist Name"
                                    onChange={(e) => setData('practise_from', e.target.value)}
                                    label="Practise From"
                                    className=" mb-4"

                                />

                                <div className="grid grid-cols-2 gap-4 mb-5">
                                    <TextInputWithLabel
                                        id="phone"
                                        type="text"
                                        value={data.phone}
                                        placeholder="Phone"
                                        onChange={(e) => setData('phone', e.target.value)}
                                        label="Phone"


                                    />


                                    <TextInputWithLabel
                                        id="email"
                                        type="email"
                                        value={data.email}
                                        placeholder="Email"
                                        onChange={(e) => setData('email', e.target.value)}
                                        label="Email"


                                    />

                                </div>

                                <div className="space-y-2 mb-5">
                                    <Label>Clinics</Label>
                                    <ReactSelect options={clinics} isMulti onChange={onClinicSelect}
                                        value={data.clinics}
                                    />
                                </div>


                                <div className="space-y-2 mb-5">
                                    <Label>Services</Label>
                                    <ReactSelect options={services} isMulti onChange={onServiceSelect}
                                        value={data.services}

                                    />
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label>About</Label>
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


                                    />


                                    <TextInputWithLabel
                                        id="no_of_reviews"
                                        type="number"
                                        value={data.no_of_reviews}
                                        placeholder="eg., 5000"
                                        onChange={(e) => setData('no_of_reviews', e.target.value)}
                                        label="Reviews"


                                    />


                                    <TextInputWithLabel
                                        id="rating"
                                        type="number"
                                        value={data.rating}
                                        placeholder="eg., 1 - 5"
                                        onChange={(e) => setData('rating', e.target.value)}
                                        label="Rating"

                                    />
                                </div>
                            </CardContent>  <CardFooter className="border-t border-border">
 <SubmitButton
                            processing={processing}
                            actionText="Save Dentist"

                        />

                             

                            </CardFooter>


                        </Card>


                    </div>



                </div>

            </form>

        </AuthenticatedLayout>
    )
}