import { Link } from "@inertiajs/react";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Eye, Mail, MapPin, Phone } from "lucide-react";
import { LinkButton } from "../ui/link-button";

export default function PatientCard({patient}){
    return (
        <Card
            key={patient?.id}
            className="shadow-card hover:shadow-card-hover transition-all animate-fade-in cursor-pointer"
            
          >
 
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-lg font-semibold text-primary">
                    {patient?.first_name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <CardTitle className="text-base">{patient?.first_name}</CardTitle>
                    {/* <Badge
                      className={
                        patient?.status === "active"
                          ? "badge-status badge-confirmed mt-1"
                          : "badge-status badge-cancelled mt-1"
                      }
                    >
                      {patient?.status === "active" ? "Active" : "Inactive"}
                    </Badge> */}
                  </div>
                </div>
                <LinkButton
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  href={route('patients.show', patient)}
                //   onClick={(e) => {
                //     e.stopPropagation();
                //     navigate(`/patients/${patient.id}`);
                //   }}
                >
                  <Eye className="h-4 w-4" />
                </LinkButton>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span className="truncate">{patient?.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>{patient?.phone_number}</span>
              </div>
              
              
            </CardContent>
          </Card>
    )
}