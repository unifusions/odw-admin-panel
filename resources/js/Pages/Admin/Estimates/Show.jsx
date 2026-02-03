
import PatientInfo from "@/Components/PatientInfo";
import SingleHeader from "@/Components/SingleHeader";
import DateTimeConverter from "@/Helpers/DateTimeConverter";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router, usePage } from "@inertiajs/react";
import Respond from "./Respond";
import PageHeader from "@/Components/PageHeader";
import { AttachmentView } from "@/Components/Components";
import GiveEstimate from "./GiveEstimate";
import { Button } from "@/Components/ui/button";
import { ArrowLeft, Calendar, CheckCircle, Clock, DollarSign, FileText, Mail, Receipt, Send, Shield, User, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Textarea } from "@/Components/ui/textarea";
import { Label } from "@/Components/ui/label";
import { Badge } from "@/Components/ui/badge";
import { cn } from "@/lib/utils";
import EstimateReply from "@/Components/estimates/estimate-reply";
import EstimateReplied from "@/Components/estimates/estimate-replied";
import { LinkButton } from "@/Components/ui/link-button";
import EstimateStatusUpdate from "@/Components/estimates/estimate-status-update";

const sumByKey = (array = [], key) => {
    return array.reduce((sum, item) => {
        const value = Number(item?.[key]);
        return sum + (isNaN(value) ? 0 : value);
    }, 0);
};
const statusConfig = {
    pending: {
        label: "Pending Review",
        icon: Clock,
        class: "bg-warning/10 text-warning",
    },

    in_review: {
        label: "Under Review",
        icon: Clock,
        class: "bg-warning/10 text-warning",
    }, 
    insurance_check: {
        label: "Insurance Check",
        icon: Shield,
        class: "bg-info/10 text-info",
    },
    answered: {
        label: "Answered",
        icon: CheckCircle,
        class: "bg-success/10 text-success",
    },
    rejected: {
        label: "Rejected",
        icon: XCircle,
        class: "bg-destructive/10 text-destructive",
    },
};

export default function Show() {
    const { estimate, patient, category, services, replied, urlPrevious } = usePage().props;

    const StatusIcon = statusConfig[estimate?.status]?.icon;

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
        <AuthenticatedLayout
            pageTitle="Dental Estimate Details"
            subTitle={`Estimate : EST-${estimate.id}`}>

            <LinkButton
                variant="ghost"
                className="mb-4"
                href={urlPrevious}
            >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Estimates
            </LinkButton>



            <div className="grid gap-6 lg:grid-cols-3">
                {/* Left Column - Main Info */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Header Card */}
                    <Card className="shadow-card">
                        <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                                        <FileText className="h-7 w-7 text-primary" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold">{estimate?.patient?.first_name}</h2>
                                        <p className="text-sm text-muted-foreground">EST-{estimate.id}</p>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            {estimate?.dentalservice?.name}

                                        </p>
                                    </div>
                                </div>
                                <Badge
                                    className={cn(
                                        "flex items-center gap-1",
                                        statusConfig[estimate?.status]?.class
                                    )}
                                >
                                    {/* <StatusIcon className="h-3 w-3" /> */}
                                    {statusConfig[estimate?.status]?.label}
                                </Badge>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="flex items-center gap-3">
                                    <Mail className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-sm">{estimate?.patient?.email}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Calendar className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-sm"><DateTimeConverter dateTimeString={estimate.created_at} /></span>
                                </div>
                                {estimate.insurance && (
                                    <div className="flex items-center gap-3">
                                        <Shield className="h-4 w-4 text-muted-foreground" />
                                        <span className="text-sm">{estimate.insurance.length}</span>
                                        {/* {estimate.insuranceVerified && (
                      <Badge className="bg-success/10 text-success text-xs">Verified</Badge>
                    )} */}
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Procedures Card */}
                    <Card className="shadow-card">
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                                <Receipt className="h-5 w-5" />
                                Procedures Requested
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {estimate?.dentalcares?.map((procedure, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary">
                                                {idx + 1}
                                            </div>
                                            <span className="font-medium">{procedure.name}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Patient Notes */}
                    {estimate?.description && (
                        <Card className="shadow-card">
                            <CardHeader>
                                <CardTitle className="text-lg flex items-center gap-2">
                                    <User className="h-5 w-5" />
                                    Patient Notes
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="rounded-lg bg-muted/50 p-4">
                                    <p className="text-sm">{estimate.description}</p>
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    {/* Response Section */}
                    {replied ? <EstimateReplied reply={estimate?.replies} /> : <EstimateReply estimate={estimate} />}
                </div>

                {/* Right Column - Cost & Actions */}
                <div className="space-y-6">
                    {/* Cost Card */}
                    <Card className="shadow-card">
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                                <DollarSign className="h-5 w-5" />
                                Estimated Cost
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-center p-4 rounded-lg bg-primary/5">
                                <p className="text-4xl font-bold text-primary">
                                    $ {sumByKey(estimate?.dentalcares, 'national_cost')}
                                </p>
                                <p className="text-sm text-muted-foreground mt-1">Base Estimate on Average National Cost</p>
                            </div>
                        </CardContent>
                    </Card>

                 <EstimateStatusUpdate estimate={estimate} />


                    {/* Insurance Card */}
                    {estimate.insuranceProvider && (
                        <Card className="shadow-card">
                            <CardHeader>
                                <CardTitle className="text-lg flex items-center gap-2">
                                    <Shield className="h-5 w-5" />
                                    Insurance Verification
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="p-3 rounded-lg bg-muted/50">
                                    <p className="font-medium">{estimate.insuranceProvider}</p>
                                    <p className="text-xs text-muted-foreground">Insurance Provider</p>
                                </div>


                            </CardContent>
                        </Card>
                    )}

                    {/* Quick Actions */}

                </div>
            </div>





            {/* ols show */}

           
 
                 
              
                    {/* {estimate?.patient && <PatientInfo patient={patient} />} */}
                 
             
        </AuthenticatedLayout>
    )
}