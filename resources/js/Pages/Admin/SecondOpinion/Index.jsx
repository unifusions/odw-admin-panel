
import PageHeader from "@/Components/PageHeader";
import DataPagination from "@/Components/Pagination";
import Pagination from "@/Components/Pagination";
import Sofilter from "@/Components/secondopinions/so-filter";
import SoItem from "@/Components/secondopinions/so-item";
import SOStatus from "@/Components/SOStatus";
import SummaryCard from "@/Components/summary-card";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { Head, Link, usePage } from "@inertiajs/react"
import { Clock, NotepadText, Stethoscope } from "lucide-react";

export default function SecondOpinion() {

    const { so_pending_count, so_review_count, so_completed_count, secondopinions } = usePage().props;
    return (
        < AuthenticatedLayout
            header='Second Opinion'
            pageTitle="All Second Opinions"

        >

            <div className="grid gap-4 md:grid-cols-3 mb-6">
                <SummaryCard
                    title="Opinion Requests"
                    value={so_pending_count}
                    icon={Clock}
                    iconColor="warning"
                />

                <SummaryCard
                    title="In Review"
                    value={so_review_count}
                    icon={Stethoscope}
                    iconColor="info"
                />

                <SummaryCard
                    title="Completed Opinions"
                    value={so_completed_count}
                    icon={NotepadText}
                    iconColor="primary"
                />


            </div>
            {/* <Sofilter /> */}
            {secondopinions.data.map(
                (secondopinion) =>
                    <SoItem key={secondopinion.id} opinion={secondopinion}
                        
                />
            )}
            {/* {JSON.stringify(secondopinions)} */}
<DataPagination links={secondopinions.links} />

        </AuthenticatedLayout >
    )
}