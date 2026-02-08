import { CheckCircle, Clock, Eye, FileText, Shield, XCircle } from "lucide-react";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "../ui/card";
import { LinkButton } from "../ui/link-button";
import DateTimeConverter from "@/Helpers/DateTimeConverter";
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
        label: "Responded",
        icon: CheckCircle,
        class: "bg-success/10 text-success",
    },
    rejected: {
        label: "Rejected",
        icon: XCircle,
        class: "bg-destructive/10 text-destructive",
    },
};

export default function EstimateItem({ estimate }) {
    const StatusIcon = statusConfig[estimate?.status]?.icon;
    return (

        <Card
            key={estimate.id}
            className="shadow-card hover:shadow-card-hover transition-all animate-fade-in cursor-pointer"

        >     <CardContent className="p-6">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">


                    <div className="flex items-start gap-4">


                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                            <FileText className="h-6 w-6 text-primary" />
                        </div>

                        <div className="flex-1">
                            <div className="flex items-center gap-2 flex-wrap">
                                <h3 className="font-semibold">{estimate?.patient?.first_name}</h3>
                                <span className="text-sm text-muted-foreground">
                                    EST-{estimate.id}
                                </span>
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
                            <p className="text-sm text-muted-foreground mt-1">

                                {estimate?.dentalservice?.name} • Requested <DateTimeConverter dateTimeString={estimate.created_at} />
                            </p>
                            <div className="flex flex-wrap gap-1 mt-2">
 
                                {estimate?.dentalcares?.map((procedure, idx) => (
                                    <Badge key={idx} variant="secondary" className="text-xs">
                                        {procedure.name}
                                      
                                    </Badge>
                                ))}
                            </div>

                            <div className="flex items-center gap-2 mt-2">
                                <Shield className="h-4 w-4 text-muted-foreground" />
 
                                <span className="text-sm text-muted-foreground">
                                    {estimate?.insurance ? estimate?.insurance?.insurance_provider : 'No Insurance Attached'}
                                </span>

                            </div>


                        </div>


                    </div>
                    <div className="flex flex-col gap-3 lg:items-end">
                        {/* <div className="text-right">
                            <p className="text-2xl font-bold text-foreground">
                                ${estimate?.estimatedCost?.toLocaleString()}
                            </p>
                            <p className="text-xs text-muted-foreground">
                                Estimated Cost
                            </p>
                        </div> */}
                        <LinkButton
                            size="sm"
                            href={route('estimates.show', {estimate:estimate})}
                            onClick={(e) => {
                                e.stopPropagation();
                                navigate(`/estimates/${estimate.id}`);
                            }}
                        >
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                        </LinkButton>
                    </div>
                </div>

                   {estimate.description && (
                  <div className="mt-4 rounded-lg bg-muted/50 p-3">
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      <span className="font-medium">Patient Notes:</span> {estimate.description}
                    </p>
                  </div>
                )}


            </CardContent>
        </Card>
    )
}