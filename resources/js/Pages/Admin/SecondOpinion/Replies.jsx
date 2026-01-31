import { Card } from "@/Components/ui/card";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Replies({ replies }) {
    return (
        <AuthenticatedLayout>

            {replies.map((reply) => (<Card key={reply.id}> {
                JSON.stringify(reply.secondopinion?.patient?.user, null, 4) }
             </Card>))}
        </AuthenticatedLayout>

    )
}