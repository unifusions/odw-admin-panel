import Card from "@/Components/Card";
import { Row } from "@/Components/Components";
import ServiceImageHeaderUploader from "@/Components/ServiceImageHeaderUploader";
import { useForm } from "@inertiajs/react";

export default function BookSpecialist() {

    const { data, setData, processing, post, error, reset } = useForm({

        image: '',
    });

    return (
        <Card title="Book A Specialist Image">
            <form>
                <ServiceImageHeaderUploader onFileSelect={(file) => setData('image', file)} />

            </form>
        </Card>
    )
}