import Card from "@/Components/Card";
import { Column, DisplayFlex, Row } from "@/Components/Components";
import InputLabel from "@/Components/InputLabel";
import PageHeader from "@/Components/PageHeader";
import TextInputWithLabel from "@/Components/TextInputWithLabel";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, usePage } from "@inertiajs/react";
import ReactSelect from "react-select";

export default function Edit() {
    const { care, selectedCategories, categories } = usePage().props;
    const { data, setData, patch, processing, errors } = useForm({
        code: care.code || '',
        name: care.name || '',
        medical_name: care.medical_name || '',
        categories: selectedCategories || [],
        national_cost: care.national_cost || '',
        odw_cost: care.odw_cost || ''

    })

    const onServiceSelect = (selectedOptions) => {
        setData('categories', selectedOptions);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        patch(route('compare-costs.update', care));

    }

    return (
        <AuthenticatedLayout header="Compare Cost">
            <Head title="Compare Costs" />
            <PageHeader ></PageHeader>
            <DisplayFlex className="mb-3 justify-content-between">
                <h1 className="page-header-title">Edit Service</h1>

            </DisplayFlex>

            <form onSubmit={onSubmit} >
                <Row>
                    <Column lg={8}>
                        <Card>
                            <TextInputWithLabel
                                id="code"
                                type="text"
                                value={data.code}
                                placeholder="Dentist Name"
                                onChange={(e) => setData('code', e.target.value)}
                                label="Code"
                                className=" mb-4"
                                isSingleRow={true}
                            />

                            <TextInputWithLabel
                                id="code"
                                type="text"
                                value={data.name}
                                placeholder="Name"
                                onChange={(e) => setData('name', e.target.value)}
                                label="Common Name"
                                className=" mb-4"
                                isSingleRow={true}
                            />

                            <TextInputWithLabel
                                id="code"
                                type="text"
                                value={data.medical_name}
                                placeholder="Name"
                                onChange={(e) => setData('medical_name', e.target.value)}
                                label="Medical Name"
                                className=" mb-4"
                                isSingleRow={true}
                            />

                            <TextInputWithLabel
                                id="odw_cost"
                                type="number"
                                value={data.odw_cost}
                                placeholder=""
                                onChange={(e) => setData('odw_cost', e.target.value)}
                                label="ODW Cost"
                                className=" mb-4"
                                isSingleRow={true}
                            />


                            <TextInputWithLabel
                                id="odw_cost"
                                type="number"
                                value={data.national_cost}
                                placeholder=""
                                onChange={(e) => setData('national_cost', e.target.value)}
                                label="National Cost"
                                className=" mb-4"
                                isSingleRow={true}
                            />




                            <div className="row mb-4">
                                <InputLabel htmlFor="categories" className="col-sm-3 col-form-label form-label" value="Treatments" />
                                <div className="col-sm-9">

                                    <ReactSelect options={categories} isMulti onChange={onServiceSelect} value={data.categories} />

                                </div>
                            </div>

                        </Card>

<button className="btn btn-primary" type="submit" >Update</button>


                    </Column>
                </Row>

            </form>
        </AuthenticatedLayout>
    )
}