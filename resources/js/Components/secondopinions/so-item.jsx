import { AlertCircle, CheckCircle, CircleCheckBig, Clock, Eye, FileExclamationPoint, MessageSquare, NotepadText, Paperclip, Send, Shield, Stethoscope, User, XCircle } from "lucide-react";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { LinkButton } from "../ui/link-button";

const priorityConfig = {
  high: { label: "High", class: "bg-destructive/10 text-destructive" },
  medium: { label: "Medium", class: "bg-warning/10 text-warning" },
  low: { label: "Low", class: "bg-muted text-muted-foreground" },

};
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
export default function SoItem({ opinion }) {
  const StatusIcon = statusConfig[opinion?.status]?.icon;
  return (
    <Card
      key={opinion.id}
      className=" 
                     shadow-card hover:shadow-card-hover transition-all animate-fade-in mb-5"
    >
      
      <CardContent className="p-6 pb-0">

        <div className="flex flex-col gap-4">
          {/* Header */}
          <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-semibold">{opinion?.patient?.first_name}</h3>
                  <span className="text-sm text-muted-foreground">
                    SO-{opinion.id}
                  </span>
                  {opinion.is_quick && <Badge>
                    Quick</Badge>}
                  {/* <Badge className={cn(priorityConfig[opinion?.priority]?.class)}>
                                   {priorityConfig[opinion?.priority]?.label} Priority
                                 </Badge> */}
                </div>
                <div className="flex items-center gap-2 mt-1 flex-wrap">
                  {opinion.category && <Badge variant="secondary">{opinion.category}</Badge>}
                  <span className="text-sm text-muted-foreground">
                    Requested {opinion?.created_at}
                  </span>
                </div>
                {/* {opinion.insuranceProvider && (
                                 <div className="flex items-center gap-2 mt-2">
                                   <Shield className="h-4 w-4 text-muted-foreground" />
                                   <span className="text-sm text-muted-foreground">
                                     {opinion.insuranceProvider}
                                   </span>
                                   {opinion.insuranceVerified && (
                                     <Badge className="bg-success/10 text-success text-xs">
                                       Verified
                                     </Badge>
                                   )}
                                 </div>
                               )} */}
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

          {/* Content */}
          <div className="space-y-3">
            <div className="rounded-lg bg-muted/50 p-4">
              <p className="text-sm font-medium text-foreground mb-1">
                {opinion?.subject}
              </p>
               
            </div>
            <p className="text-sm text-muted-foreground">
              {opinion?.description}
            </p>
          </div>

          

          {/* Response */}
          {opinion?.replies && (
            <div className={cn(
              "rounded-lg border p-4",
              opinion?.status === "rejected"
                ? "border-destructive/30 bg-destructive/5"
                : "border-success/30 bg-success/5"
            )}>
              
              <p className={cn(
                "text-sm font-medium mb-1 text-success",
               
              )}>
                {opinion?.status === "rejected" ? "Rejection Response" : "Expert Response"}
              </p>
              <p className="text-sm text-foreground">{opinion?.replies?.reply_message}</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Paperclip className="h-4 w-4" />
            <span>{opinion.replies?.file_name}</span>
          </div>
            </div>
          )}

          
        </div>
      </CardContent>

      <CardFooter className="mt-0">
        
        <div className="w-full flex items-center justify-between border-t border-border pt-4 mt-0 ">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Paperclip className="h-4 w-4" />
            <span>{opinion.attachments} attachments</span>
          </div>
          <LinkButton
            size="sm"
            href={route('second-opinion.show', opinion)}

          >
            <Eye className="h-4 w-4 mr-2" />
            View Details
          </LinkButton>
        </div>

      </CardFooter>
    </Card >
  )
}