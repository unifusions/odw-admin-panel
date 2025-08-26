import Card from "@/Components/Card";
import { Column, DisplayFlex, Row } from "@/Components/Components";
import InputLabel from "@/Components/InputLabel";
import PageHeader from "@/Components/PageHeader";
import ServiceImageUploader from "@/Components/ServiceImageUploader";
import TextInputWithLabel from "@/Components/TextInputWithLabel";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router, useForm, usePage } from "@inertiajs/react";
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
        photo : specialist.photo || ''

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
            >   <Head title="Specialists" />
                <PageHeader />
                <DisplayFlex className="mb-3 justify-content-between">
                    <h1 className="page-header-title">Edit Specialists</h1>

                </DisplayFlex>

                <form onSubmit={onsubmit}>
                    <Row>
                        <Column lg={4}>
                            <Card title="Profile">
                                <ul className="list-group list-group-flush list-group-no-gutters">
                                    <li className="list-group-item">



                                        <ServiceImageUploader onFileSelect={(file) => setData('photo', file)} existingImage={specialist.photo_url}/>

                                    </li>



                                </ul>

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




                            </Card>
                        </Column>

                        <Column lg={8}>
                            <Card title="Contact Information">

                                <TextInputWithLabel
                                    id="practise_from"
                                    type="text"
                                    value={data.phone}
                                    placeholder=""
                                    onChange={(e) => setData('phone', e.target.value)}
                                    label="Phone"
                                    isSingleRow={true}
                                />

                                <TextInputWithLabel
                                    id="email"
                                    type="email"
                                    value={data.email}
                                    placeholder=""
                                    isSingleRow={true}
                                    onChange={(e) => setData('email', e.target.value)}
                                    label="Email"
                                />

                            </Card>                            <Card title="Clinic & Services">

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

                                        <ReactSelect options={services} isMulti
                                            value={data.services}
                                            onChange={onServiceSelect} />

                                    </div>
                                </div>
                            </Card>
                        </Column>

                        <Column lg={12}>
                            <button className="btn btn-primary">Save Specialist</button>
                        </Column>
                    </Row>


                </form >
            </AuthenticatedLayout >
        </>
    )
}