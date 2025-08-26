import Card from "@/Components/Card";
import { Column, DisplayFlex, Row } from "@/Components/Components";
import InputLabel from "@/Components/InputLabel";
import PageHeader from "@/Components/PageHeader";
import ServiceImageUploader from "@/Components/ServiceImageUploader";
import TextInputWithLabel from "@/Components/TextInputWithLabel";
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
        <AuthenticatedLayout>
            <Head title="Dentists" />
            <PageHeader />
            <DisplayFlex className="mb-3 justify-content-between">
                <h1 className="page-header-title">Add New Dentists</h1>

            </DisplayFlex>

            <form onSubmit={onsubmit} >
                <Row>

                    <Column lg={4}>
                        <Card title="Dentists">
                            <ul className="list-group list-group-flush list-group-no-gutters">
                                <li className="list-group-item">



                                    <ServiceImageUploader onFileSelect={(file) => setData('photo', file)} />

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
                                    <ReactSelect options={clinics} isMulti onChange={onClinicSelect} />


                                </div>
                            </div>


                            <div className="row mb-4">
                                <InputLabel htmlFor="branchSelect" className="col-sm-3 col-form-label form-label" value="Services" />
                                <div className="col-sm-9">

                                    <ReactSelect options={services} isMulti onChange={onServiceSelect} />

                                </div>
                            </div>



                            <div className="text-end">
                                {/* <button type="button" className="btn btn-white me-3" onClick={closeModal}>Close</button> */}
                                <button type="submit" className="btn btn-primary">Save Dentist</button>

                            </div>


                        </Card>
                    </Column>
                </Row>
            </form>

        </AuthenticatedLayout>
    )
}