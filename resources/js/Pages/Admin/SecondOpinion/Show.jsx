import Card from "@/Components/Card";
import { Column, DisplayFlex, PageHeaderTitle, Row, AttachmentView } from "@/Components/Components";
import PageHeader from "@/Components/PageHeader";
import PatientInfo from "@/Components/PatientInfo";
 
import SingleHeader from "@/Components/SingleHeader";
import { InfoRow } from "@/Helpers/Common";
 
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import MarkAsReview from "./MarkAsReview";
import MarkAsClosed from "./MarkAsClosed";

export default function Show() {
    const { secondopinion } = usePage().props;
    const patient = secondopinion.patient;
    const category = secondopinion.category;

    const attachs = secondopinion.attachments || [];

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
                    <MarkAsReview so={secondopinion} isDisabled={(secondopinion.status == "in_review" || secondopinion.status == "closed") && true} />


                    <MarkAsClosed so={secondopinion} isDisabled={secondopinion.status == "closed" && true} />

                </div>

            </DisplayFlex>

            <Row>
                <Column lg={8} >
                    <Card title="Second Opinion Info">
                        <InfoRow index="Second Opinion #" value={`# ${secondopinion.id}`} />
                        <InfoRow index="Subject" value={secondopinion.subject} />
                        <InfoRow index="Requested On" value={secondopinion.created_at} />
                        {!secondopinion.is_quick &&
                            <>
                                <InfoRow index="Category" value={category && category.name || 'NA'} />
                                <InfoRow index="Insurance" value="Yes" />
                                <InfoRow index="Estimate Required" value="Yes" />
                            </>
                        }




                    </Card>

                    <Card title="Patient Notes/Request">
                        <InfoRow index="Last Dental Visit" value="3 weeks ago" />
                        <InfoRow index="Patient Notes/Request" value={secondopinion.description} />

                    </Card>


                    <Card title="Attachments">
                        <div className="d-flex flex-wrap justify-content-start gap-2">

                            {attachs.length > 0 ? attachs.map((attach) => <AttachmentView attachment={attach} />) :
                                "No attachments Found"
                            }
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