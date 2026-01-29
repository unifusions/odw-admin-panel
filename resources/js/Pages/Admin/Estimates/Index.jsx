import EstimateItem from "@/Components/estimates/estimate-item";
import PageHeader from "@/Components/PageHeader";
import DataPagination from "@/Components/Pagination";
import Pagination from "@/Components/Pagination";
import SOBadge from "@/Components/SOBadge";
import SummaryCard from "@/Components/summary-card";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import { CheckCircle, Clock, NotepadText, Stethoscope } from "lucide-react";

export default function Index() {

    const { estimates, est_pending_count, est_review_count, est_completed_count, est_replied_count } = usePage().props;

    return (
        <AuthenticatedLayout
            header='Estimates'
            pageTitle="All Estimates"
            subTitle="Review patient estimate requests and send detailed responses"
        >

            <div className="grid gap-4 md:grid-cols-4 mb-6">
                <SummaryCard
                    title="Estimate Requests"
                    value={est_pending_count}
                    icon={Clock}
                    iconColor="warning"
                />


                <SummaryCard
                    title="In Review"
                    value={est_review_count}
                    icon={Stethoscope}
                    iconColor="info"
                />

                <SummaryCard
                    title="Estimates Replied"
                    value={est_replied_count}
                    icon={NotepadText}
                    iconColor="primary"
                />

                <SummaryCard
                    title="Estimates Completed"
                    value={est_completed_count}
                    icon={CheckCircle}
                    iconColor="success"
                />

            </div>
            <div className="space-y-4">
                {estimates.data.map((estimate) => <EstimateItem key={estimate.id} estimate={estimate} />)}
            </div>

 
 <DataPagination  links={estimates.links} current_page={estimates.currentPage} last_page={estimates.lastPage} />
        </AuthenticatedLayout>
    )
}