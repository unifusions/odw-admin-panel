import Card from "@/Components/Card";
import { Column, DisplayFlex, Row } from "@/Components/Components";
import DeleteConfirmModal from "@/Components/DeleteConfirmModal";
import InputLabel from "@/Components/InputLabel";
import PageHeader from "@/Components/PageHeader";
import ServiceImageHeaderUploader from "@/Components/ServiceImageHeaderUploader";
import ServiceImageUploader from "@/Components/ServiceImageUploader";
import SingleHeader from "@/Components/SingleHeader";
import TextArea from "@/Components/TextArea";
import TextInput from "@/Components/TextInput";
import TextInputWithLabel from "@/Components/TextInputWithLabel";
import SubmitButton from "@/Components/ui-ext/SubmitButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router, useForm, usePage } from "@inertiajs/react";

export default function Create() {

    const { service } = usePage().props;
    const { data, setData, processing, post, reset } = useForm({
        name: '',

        medical_name: '',
        image_path: '',

        desc: '',
        cost: '',
        avg_cost: '',

        max_cost: '',
        max_avg_cost: '',
        display_order: '',

        header_image_path: ''
    })


    const onsubmit = (e) => {
        e.preventDefault();

        post(route('services.store'), {
            forceFormData: true,
         
        });


    }




    return (
        <AuthenticatedLayout header="Edit Treatment ">
            <Head title="Treatments" />
            <PageHeader />
            <DisplayFlex className="mb-3 justify-content-between">
                <h1 className="page-header-title">Add New Treatment</h1>

            </DisplayFlex>
            <form onSubmit={onsubmit} >
                <Row>

                    <Column lg={4}>
                        <Card title="Treatment">
                            <ul className="list-group list-group-flush list-group-no-gutters">
                                <li className="list-group-item">

                                    <ServiceImageHeaderUploader onFileSelect={(file) => setData('header_image_file', file)} />

                                    <ServiceImageUploader onFileSelect={(file) => setData('image_file', file)} />

                                </li>



                            </ul>

                        </Card>
                    </Column>

                    <Column lg={8}>
                        <Card>

                            <Row>

                            </Row>
                            <TextInputWithLabel
                                id="service_name"
                                type="text"
                                value={data.name}
                                placeholder="Treatment Name"
                                onChange={(e) => setData('name', e.target.value)}
                                label="Name"
                                className=" mb-4"
                                isSingleRow={true}
                            />

                            <TextInputWithLabel
                                isSingleRow={true}
                                id="category_name"
                                type="text"
                                name="category_name"
                                value={data.medical_name}
                                className="form-control "
                                placeholder="Medical Name"
                                label="Medical Name"
                                onChange={(e) => setData('medical_name', e.target.value)}
                            />

                            <div className="row mb-4">
                                <label for="desc" className="col-sm-3 col-form-label form-label">Description
                                </label>

                                <div className="col-sm-9">



                                    <TextArea
                                        name="desc"
                                        className="form-control"
                                        value={data.desc}
                                        onChange={(e) => setData('desc', e.target.value)}
                                    />




                                </div>
                            </div>

                            <div className="row mb-4">
                                <label for="serviceCost" className="col-sm-3 col-form-label form-label">ODW Cost</label>


                                <div className="col-sm-4">
                                    <TextInput
                                        id="serviceCost"
                                        type="number"
                                        name="cost"
                                        value={data.cost}
                                        className="form-control "
                                        placeholder="Service Name"
                                        onChange={(e) => setData('cost', e.target.value)}
                                    />



                                </div>

                                <div className="col-sm-4">
                                    <TextInput
                                        id="serviceMaxCost"
                                        type="number"
                                        name="max_cost"
                                        value={data.max_cost}
                                        className="form-control "
                                        placeholder="Max"
                                        onChange={(e) => setData('max_cost', e.target.value)}
                                    />



                                </div>

                            </div>

                            <div className="row mb-4">

                                <InputLabel htmlFor="avgCost" className="form-label col-sm-3 col-form-label" value="Average Cost" />

                                <div className="col-sm-4">
                                    <TextInput
                                        id="avgCost"
                                        type="number"
                                        name="cost"
                                        value={data.avg_cost}
                                        className="form-control "
                                        placeholder="Average Cost"
                                        onChange={(e) => setData('avg_cost', e.target.value)}
                                    />



                                </div>


                                <div className="col-sm-4">
                                    <TextInput
                                        id="avgMaxCost"
                                        type="number"
                                        name="cost"
                                        value={data.max_avg_cost}
                                        className="form-control "
                                        placeholder="Max"
                                        onChange={(e) => setData('max_avg_cost', e.target.value)}
                                    />



                                </div>

                            </div>


                            <div className="row mb-4">
                                <label for="firstNameLabel" className="col-sm-3 col-form-label form-label">Display Order

                                </label>

                                <div className="col-sm-9">
                                    <TextInput
                                        id="category_name"
                                        type="number"
                                        name="category_name"
                                        value={data.display_order}
                                        className="form-control "
                                        placeholder="Display Order"
                                        onChange={(e) => setData('display_order', e.target.value)}
                                    />



                                </div>


                            </div>






                            <div className="text-end">
                                {/* <button type="button" className="btn btn-white me-3" onClick={closeModal}>Close</button> */}
                               
 <SubmitButton
                            processing={processing}
                            actionText="Save Treatment User"

                        />

                            </div>


                        </Card>
                    </Column>
                </Row>
            </form>
        </AuthenticatedLayout>
    )
}