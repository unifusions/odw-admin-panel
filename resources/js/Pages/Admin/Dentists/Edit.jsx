import Card from "@/Components/Card";
import { Column, DisplayFlex, Row } from "@/Components/Components";
import InputLabel from "@/Components/InputLabel";
import PageHeader from "@/Components/PageHeader";
import ServiceImageUploader from "@/Components/ServiceImageUploader";
import TextArea from "@/Components/TextArea";
import TextInputWithLabel from "@/Components/TextInputWithLabel";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router, useForm, usePage } from "@inertiajs/react";
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





            <form onSubmit={onsubmit} >
                <Row>

                    <Column lg={4}>
                        <Card title="Dentists">
                            <ul className="list-group list-group-flush list-group-no-gutters">
                                <li className="list-group-item">



                                    <ServiceImageUploader onFileSelect={(file) => setData('photo', file)} existingImage={dentist.photo_url} />
                                    <h5 className="text-center">
                                        {dentist.name}
                                    </h5>
                                </li>

                                <li class="list-group-item">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <h5>Status</h5>

                                    </div>

                                    <ul class="list-unstyled list-py-2 text-body">

                                        <li><i class="bi-phone me-2"></i> {dentist.phone} </li>
                                        <li><i class="bi-envelope-at me-2"></i> {dentist.email} </li>
                                        <li><i class="bi-calendar-event me-2"></i>Active from <span className="text-dark"> {dentist.created_at} </span></li>
                                    </ul>
                                </li>

                            </ul>

                        </Card>
                    </Column>

                    <Column lg={8}>
                        <Card>


                            <TextInputWithLabel
                                id="dentist_name"
                                type="text"
                                value={data.name}
                                placeholder="Dentist Name"
                                onChange={(e) => setData('name', e.target.value)}
                                label="Name"
                                className=" mb-4"
                                isSingleRow={true}
                            />


                            <TextInputWithLabel
                                id="practise_from"
                                type="date"
                                value={data.practise_from}
                                placeholder="Dentist Name"
                                onChange={(e) => setData('practise_from', e.target.value)}
                                label="Practise From"
                                className=" mb-4"
                                isSingleRow={true}
                            />


                            <TextInputWithLabel
                                id="phone"
                                type="text"
                                value={data.phone}
                                placeholder="Phone"
                                onChange={(e) => setData('phone', e.target.value)}
                                label="Phone"
                                className=" mb-4"
                                isSingleRow={true}
                            />


                            <TextInputWithLabel
                                id="phone"
                                type="email"
                                value={data.email}
                                placeholder="Email"
                                onChange={(e) => setData('email', e.target.value)}
                                label="Email"
                                className=" mb-4"
                                isSingleRow={true}
                            />

                            <div className="row mb-4">
                                <InputLabel htmlFor="clinicSelect" className="col-sm-3 col-form-label form-label" value="Clinic" />
                                <div className="col-sm-9">
                                    <ReactSelect options={clinics} isMulti onChange={onClinicSelect}
                                        value={data.clinics}
                                    />


                                </div>
                            </div>


                            <div className="row mb-4">
                                <InputLabel htmlFor="branchSelect" className="col-sm-3 col-form-label form-label" value="Services" />
                                <div className="col-sm-9">

                                    <ReactSelect options={services} isMulti onChange={onServiceSelect}
                                        value={data.services}

                                    />

                                </div>
                            </div>






                        </Card>


                        <Card>
                            <div className="row mb-4">
                                <label for="desc" className="col-sm-3 col-form-label form-label">About
                                </label>

                                <div className="col-sm-9">


                                    <TextArea
                                        name="about"
                                        style={{ fieldSizing: 'content' }}
                                        value={data.about}
                                        onChange={(e) => setData('about', e.target.value)}
                                    />



                                </div>
                            </div>




                            <TextInputWithLabel
                                id="no_of_patients"
                                type="number"
                                value={data.no_of_patients}
                                placeholder="eg., 5000"
                                onChange={(e) => setData('no_of_patients', e.target.value)}
                                label="Patients Attended"
                                className=" mb-4"
                                isSingleRow={true}
                            />



                            <TextInputWithLabel
                                id="no_of_reviews"
                                type="number"
                                value={data.no_of_reviews}
                                placeholder="eg., 5000"
                                onChange={(e) => setData('no_of_reviews', e.target.value)}
                                label="Reviews"
                                className=" mb-4"
                                isSingleRow={true}
                            />



                            <TextInputWithLabel
                                id="rating"
                                type="number"
                                value={data.rating}
                                placeholder="eg., 1 - 5"
                                onChange={(e) => setData('rating', e.target.value)}
                                label="Rating"
                                className=" mb-4"
                                isSingleRow={true}
                            />







                            <div className="text-end">

                                <button type="submit" className="btn btn-primary">Save Dentist</button>

                            </div>


                        </Card>

                    </Column>
                </Row>
            </form>

        </AuthenticatedLayout>
    )
}