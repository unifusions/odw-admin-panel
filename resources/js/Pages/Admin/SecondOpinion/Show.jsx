import { useState } from "react";


import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    ArrowLeft,
    MessageSquare,
    Clock,
    CheckCircle,
    AlertCircle,
    Send,
    Paperclip,
    User,
    Stethoscope,
    Shield,
    Mail,
    Calendar,
    FileText,
    XCircle,
    CalendarX,
    FileExclamationPoint,
} from "lucide-react";
import { cn } from "@/lib/utils";
// import { toast } from "@/hooks/use-toast";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Checkbox } from "@/Components/ui/checkbox";
import { router, usePage } from "@inertiajs/react";
import QuickActions from "@/Components/secondopinions/quick-actions";
import PatientCard from "@/Components/patients/patient-card";
import SoReplyCard from "@/Components/secondopinions/so-reply-card";
import SoReply from "@/Components/secondopinions/so-reply";
import SoAttachments from "@/Components/secondopinions/so-attachments";
import UpdateStatusAction from "@/Components/secondopinions/update-actions";

const statusConfig = {
  in_review: {
    label: "In Review",
    icon: Clock,
    class: "bg-warning/10 text-warning",
  },
  insurance_review: {
    label: "Insurance Review",
    icon: Shield,
    class: "bg-info/10 text-info",
  },
 
  answered: {
    label: "Answered",
    icon: CheckCircle,
    class: "bg-success/10 text-success",
  },
  closed: {
    label: "Closed",
    icon: CheckCircle,
    class: "bg-success/10 text-success",
  },
  pending: {
    label: "Pending",
    icon: FileExclamationPoint,
    class: "bg-destructive/10 text-destructive",
  },
};

const priorityConfig = {
    high: { label: "High", class: "bg-destructive/10 text-destructive" },
    medium: { label: "Medium", class: "bg-warning/10 text-warning" },
    low: { label: "Low", class: "bg-muted text-muted-foreground" },
};

const SecondOpinionView = () => {

    const { opinion, replied } = usePage().props;


    const [responseText, setResponseText] = useState(opinion?.response || "");
    const [selectedDoctor, setSelectedDoctor] = useState(opinion?.assignedDoctor || "");
    const [insuranceVerified, setInsuranceVerified] = useState(opinion?.insuranceVerified || false);

    if (!opinion) {
        return (
            <AuthenticatedLayout title="Second Opinion" subtitle="Request not found">
                <div className="flex flex-col items-center justify-center py-12">
                    <p className="text-muted-foreground">Second opinion request not found.</p>
                    <Button variant="outline" className="mt-4" onClick={() => navigate("/second-opinion")}>
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Second Opinions
                    </Button>
                </div>
            </AuthenticatedLayout>
        );
    }

    const StatusIcon = statusConfig[opinion?.status]?.icon;

    const handleMarkInsuranceReview = () => {
        setOpinion({ ...opinion, status: "insurance_review" });
        toast({
            title: "Status Updated",
            description: "Marked for insurance review",
        });
    };

    const handleAssignDoctor = () => {
        if (!selectedDoctor) return;
        setOpinion({
            ...opinion,
            status: "in_review",
            assignedDoctor: selectedDoctor,
            insuranceVerified,
        });
        toast({
            title: "Doctor Assigned",
            description: `Case assigned to ${selectedDoctor}`,
        });
    };

    const handleSendResponse = () => {
        if (!responseText.trim()) return;
        setOpinion({
            ...opinion,
            status: "completed",
            response: responseText,
        });
        toast({
            title: "Response Sent",
            description: `Second opinion sent to ${opinion.patientEmail}`,
        });
    };

    const handleReject = () => {
        setOpinion({
            ...opinion,
            status: "rejected",
            response: responseText || "We are unable to provide a second opinion for this case.",
        });
        toast({
            title: "Request Rejected",
            description: "Patient has been notified",
            variant: "destructive",
        });
    };

    return (
        <AuthenticatedLayout
            pageTitle="Second Opinion Details"
            subTitle={`Review request SO-${opinion.id}`}
        >
            {/* Back Button */}
            <Button
                variant="ghost"
                className="mb-4"
                onClick={() => router.get(route('second-opinion.index'))}
            >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Second Opinions
            </Button>

            <div className="grid gap-6 lg:grid-cols-3">
                {/* Left Column - Main Info */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Header Card */}
                    <Card className="shadow-card">
                        <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                                        <MessageSquare className="h-7 w-7 text-primary" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold">{opinion?.patient?.first_name}</h2>
                                        <p className="text-sm text-muted-foreground">SO-{opinion.id}</p>
                                        <div className="flex items-center gap-2 mt-2 flex-wrap">
                                           {/* <Badge className={cn(priorityConfig[opinion?.priority]?.class)}>
                        {priorityConfig[opinion?.priority]?.label} Priority
                      </Badge>  */}
 
                                            {opinion.is_quick && <Badge> Quick Opinion </Badge>}
                                            {/* <Badge variant="secondary">{opinion.category}</Badge> */}
                                        </div>
                                    </div>
                                </div>
                                <Badge
                                    className={cn(
                                        "flex items-center gap-1",
                                        statusConfig[opinion?.status]?.class
                                    )}
                                >
                                    <StatusIcon className="h-3 w-3" />
                                    {statusConfig[opinion?.status]?.label}
                                </Badge>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="flex items-center gap-3">
                                    <Mail className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-sm">{opinion?.patient?.email ?? 'No Email Found'}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Calendar className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-sm">Requested {opinion?.created_at}</span>
                                </div>

                                {opinion?.last_visit &&
                                    <div className="flex items-center gap-3">
                                        <CalendarX className="h-4 w-4 text-muted-foreground" />
                                        <span className="text-sm">Last visited {opinion?.last_visit  }</span>
                                    </div>
                                }

 
                                <div className="flex items-center gap-3">
                                    <Paperclip className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-sm">{ opinion?.attachments.length } attachment{ opinion?.attachments.length >1 ? 's':'' }</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Diagnosis Card */}
                    <Card className="shadow-card">
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                                <FileText className="h-5 w-5" />
                                Original Diagnosis
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="rounded-lg bg-muted/50 p-4 mb-4">
                                <p className="text-sm font-medium">{opinion?.subject}</p>
                            </div>
                            <p className="text-sm text-muted-foreground">{opinion.description}</p>
                        </CardContent>
                    </Card>
                    <SoAttachments attachments={opinion?.attachments} />

                     
                    {/* Response Section */}
                    {replied ? <SoReplyCard opinion={opinion}/> :  
                        <SoReply so={opinion} />
                     }
                </div>

                {/* Right Column - Actions */}
                <div className="space-y-6">
                 <UpdateStatusAction opinion={opinion} />

                   {opinion.patient && <PatientCard patient={opinion.patient} />}  

                    {/* Insurance Card */}
                    {opinion.insuranceProvider && (
                        <Card className="shadow-card">
                            <CardHeader>
                                <CardTitle className="text-lg flex items-center gap-2">
                                    <Shield className="h-5 w-5" />
                                    Insurance Verification
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="p-3 rounded-lg bg-muted/50">
                                    <p className="font-medium">{opinion.insuranceProvider}</p>
                                    <p className="text-xs text-muted-foreground">Insurance Provider</p>
                                </div>
                                {!opinion.insuranceVerified && opinion.status === "pending" && (
                                    <>
                                        <div className="flex items-center gap-2">
                                            <Checkbox
                                                id="insurance-verified"
                                                checked={insuranceVerified}
                                                onCheckedChange={(checked) => setInsuranceVerified(checked)}
                                            />
                                            <Label htmlFor="insurance-verified" className="text-sm">
                                                Coverage Verified
                                            </Label>
                                        </div>
                                        <Button
                                            variant="outline"
                                            className="w-full"
                                            onClick={handleMarkInsuranceReview}
                                        >
                                            <Shield className="h-4 w-4 mr-2" />
                                            Mark for Insurance Review
                                        </Button>
                                    </>
                                )}
                                {opinion.insuranceVerified && (
                                    <Badge className="bg-success/10 text-success w-full justify-center py-2">
                                        <CheckCircle className="h-4 w-4 mr-2" />
                                        Insurance Verified
                                    </Badge>
                                )}
                            </CardContent>
                        </Card>
                    )}

                    {/* Quick Actions */}
                    {/* <QuickActions /> */}
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default SecondOpinionView;
