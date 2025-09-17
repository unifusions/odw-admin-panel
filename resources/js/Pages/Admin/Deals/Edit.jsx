import Card from "@/Components/Card";
import { Column, DisplayFlex, Row } from "@/Components/Components";
import InputLabel from "@/Components/InputLabel";
import PageHeader from "@/Components/PageHeader";
import ServiceImageHeaderUploader from "@/Components/ServiceImageHeaderUploader";
import TextArea from "@/Components/TextArea";
import TextInputWithLabel from "@/Components/TextInputWithLabel";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, usePage } from "@inertiajs/react";
import { useState } from "react";
import Flatpickr from "react-flatpickr";
import 'flatpickr/dist/flatpickr.css';
import DeleteConfirmModal from "@/Components/DeleteConfirmModal";


export default function Edit() {

    const [dateRange, setDateRange] = useState([]);
    const { deal } = usePage().props;

    const { data, setData, processing, post, error, reset } = useForm({
        title: deal.title || '',
        description: deal.description || '',
        start_date: deal.start_date || '',
        end_date: deal.end_date || '',
        image: deal.image || '',
    });

    const formatDate = (date) => date.toISOString().split('T')[0];

    const handleDateChange = (selectedDates) => {
        setDateRange(selectedDates);
        setData('start_date', formatDate(selectedDates[0]));
        setData('end_date', formatDate(selectedDates[1]));

    };

    const onSubmit = (e) => {
        e.preventDefault();


        post(route('deals.store'), {
            forceFormData: true,
            onFinish: closeModal
        });

    }

    return (
        <AuthenticatedLayout header="Deals">
            <Head title="Create Deal" />
            <PageHeader title="Create Deal" />
            <DisplayFlex className="mb-3 justify-content-between">
                <h1 className="page-header-title">Edit Deal</h1>
                <DeleteConfirmModal item={deal} processUrl="deals.destroy" category="Deal" />

            </DisplayFlex>
            <form>

                <Card >

                    <Row>
                        <Column lg={6} className="mb-3">
                            <ServiceImageHeaderUploader onFileSelect={(file) => setData('image', file)} existingImage={deal.image_url} />

                        </Column>
                        <Column lg={6}>
                            <TextInputWithLabel
                                label="Title"
                                id="title"
                                type="text"
                                name="title"
                                value={data.title}
                                className="form-control "
                                placeholder="Title"
                                onChange={(e) => setData('title', e.target.value)}
                                isSingleRow={true}
                            />

                            <div className="row mb-4">
                                <InputLabel htmlFor="" className="form-label col-sm-3 col-form-label" value="Description" />
                                <div className="col-sm-9">
                                    <TextArea
                                        id="description"
                                        type="text"
                                        name="description"
                                        value={data.description}
                                        className="form-control "
                                        placeholder="Description"
                                        onChange={(e) => setData('description', e.target.value)}
                                    />
                                </div>

                            </div>

                            <div className="row mb-4">
                                <InputLabel htmlFor="" className="form-label col-sm-3 col-form-label" value="Duration" />
                                <div className="col-sm-9">
                                    <Flatpickr
                                        value={dateRange}
                                        options={{
                                            mode: 'range',
                                            dateFormat: 'd-m-Y', // Adjust the date format as needed
                                        }}
                                        className="js-flatpickr form-control flatpickr-custom"
                                        onChange={handleDateChange}
                                    />
                                </div>


                            </div>


                        </Column>

                        <Column lg={12}>
                            <div className="text-end">
                                <button type="submit" className="btn btn-primary" disabled={processing}>{processing ? <div className="spinner-border spinner-border-sm" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div> : 'Save Deal'} </button>

                            </div>
                        </Column>
                    </Row>
                </Card>
            </form>
        </AuthenticatedLayout>
    )
}