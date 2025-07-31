import Card from "@/Components/Card";
import PatientInfo from "@/Components/PatientInfo";
import SingleHeader from "@/Components/SingleHeader";
import DateTimeConverter from "@/Helpers/DateTimeConverter";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import Respond from "./Respond";
import PageHeader from "@/Components/PageHeader";
import { AttachmentView } from "@/Components/Components";

export default function Show() {
    const { estimate, patient, category, services } = usePage().props;
    // const patient = estimate.patient;

    const attachs = [
        {
            id: '1',
            file_name: 'adfadf'
        },
        {
            id: '2',
            file_name: 'deqw'
        }
    ];
    const RenderServices = ({ service }) => {
        return (
            <>
                <div className="row mb-3 ">
                    <div className="col-md-2">{service.code}</div>
                    <div className="col-md-6">{service.name}</div>
                    <div className="col-md-4 text-end">$ {service.odw_cost}</div>
                </div>

            </>
        )
    }
    const InfoRow = ({ index, value }) => {
        return (
            <div className="row mb-3">
                <div className="col-md-6">
                    {index}
                </div>

                <div className="col-md-6 ">
                    {value}
                </div>
            </div>
        )
    }

     
    return (
        <AuthenticatedLayout header={`Estimate : ${estimate.id}`}>
            <Head title={`Estimate : ${estimate.id}`} />
            <div className="d-flex justify-content-between mb-3 align-items-center">

                <div className="d-flex justify-content-between">
                    <SingleHeader
                        title={`EST #${estimate.id}`}
                        status={estimate.status}
                        timestamp={estimate.created_at}
                    />

                </div>

                <div>
                    <button className="btn btn-outline-success">Mark As Closed</button>

                </div>

                {/* <Respond estimate={estimate} /> */}
            </div>


            <div className="row">
                <div className="col-lg-8">
                    <Card title="Estimate Info">
                        <InfoRow index="Estimate #" value={`# ${estimate.id}`} />
                        <InfoRow index="Requested On" value={estimate.created_at} />
                        <InfoRow index="Category" value={category.name} />
                        <InfoRow index="Insurance" value="Yes" />
                    </Card>

                    <Card title="Requested Services">
                        <div className="border-bottom mb-3">
                            {services.length > 1 &&
                                services.map((service) => <RenderServices key={service.id} service={service.dentalcare} />)
                            }
                        </div>

                        <h6>Patient Notes/Request</h6>
                        <p>{estimate.description}</p>


                    </Card>

                    <Card title="Attachments">
                        <div className="d-flex flex-wrap justify-content-start gap-2">
                            {attachs.map((attach) => <AttachmentView attachment={attach} />)}
                        </div>

                    </Card>

                </div>
                <div className="col-lg-4">
                    {patient && <PatientInfo patient={patient} />}
                </div>
            </div>
        </AuthenticatedLayout>
    )
}