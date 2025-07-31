import Card from "@/Components/Card";
import { Column, DisplayFlex, PageHeaderTitle, Row, AttachmentView } from "@/Components/Components";
import PageHeader from "@/Components/PageHeader";
import PatientInfo from "@/Components/PatientInfo";
import SOBadge from "@/Components/SOBadge";
import SingleHeader from "@/Components/SingleHeader";
import { InfoRow } from "@/Helpers/Common";
import DateTimeConverter from "@/Helpers/DateTimeConverter";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";

export default function Show() {
    const { secondopinion } = usePage().props;
    const patient = secondopinion.patient;
    const category = secondopinion.category;

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

    return (
        <AuthenticatedLayout header='Second Opinion'>
            <Head title={`Second Opinion : ${secondopinion.id}`} />
            <PageHeader />
            <DisplayFlex className="mb-3 justify-content-between">
                <DisplayFlex className="justify-content-between">
                    <SingleHeader
                        title={`SO #${secondopinion.id} | ${secondopinion.subject}`}
                        status={secondopinion.status}
                        timestamp={secondopinion.created_at}
                    />
                </DisplayFlex>





                <div>
                    <button className="btn btn-outline-success">Mark As Closed</button>

                </div>

            </DisplayFlex>

            <Row>
                <Column lg={8} >
                    <Card title="Second Opinion Info">
                        <InfoRow index="Second Opinion #" value={`# ${secondopinion.id}`} />
                        <InfoRow index="Subject" value={secondopinion.subject} />
                        <InfoRow index="Requested On" value={secondopinion.created_at} />
                        <InfoRow index="Category" value={category && category.name || 'NA'} />
                        <InfoRow index="Insurance" value="Yes" />
                        <InfoRow index="Estimate Required" value="Yes" />
                    </Card>

                    <Card title="Patient Notes/Request">
                        <InfoRow index="Last Dental Visit" value="3 weeks ago" />
                        <InfoRow index="Patient Notes/Request" value={secondopinion.description} />

                    </Card>


                    <Card title="Attachments">
                        <div className="d-flex flex-wrap justify-content-start gap-2">
                            {attachs.map((attach) => <AttachmentView attachment={attach} />)}
                        </div>

                    </Card>


                </Column>

                <Column lg={4}>
                    <PatientInfo patient={patient} />
                </Column>
            </Row>



        </AuthenticatedLayout>
    )
}