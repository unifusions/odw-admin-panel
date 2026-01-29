
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { Head, Link } from "@inertiajs/react"
import { Eye, Mail, MapPin, Phone } from "lucide-react";
import DataPagination from "@/Components/Pagination";

export default function Index({ patients }) {
    const calculateAge = (dateString) => {
        if (!dateString) {
            return 0; // Or any other appropriate default value or error handling
        }
        const today = new Date();
        const birthDate = new Date(dateString);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    return (

        < AuthenticatedLayout
            header='Patients'
            pageTitle={"Registered Patients"}


        >



      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {patients.data.map((patient) => (
          <Card
            key={patient.id}
            className="shadow-card hover:shadow-card-hover transition-all animate-fade-in cursor-pointer"
            onClick={() => navigate(`/patients/${patient.id}`)}
          >

            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-lg font-semibold text-primary">
                    {patient.first_name
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
                <Link
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  href={route('patients.show', {patient:patient})}
                //   onClick={(e) => {
                //     e.stopPropagation();
                //     navigate(`/patients/${patient.id}`);
                //   }}
                >
                  <Eye className="h-4 w-4" />
                </Link>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span className="truncate">{patient.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>{patient.phone_number}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span className="truncate">{patient?.address}</span>
              </div>
              <div className="border-t border-border pt-3 mt-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Last Visit</span>
                  <span className="font-medium">{patient?.lastVisit}</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-1">
                  <span className="text-muted-foreground">Total Visits</span>
                  <span className="font-medium">{patient?.totalVisits}</span>
                </div>
                {patient?.upcomingAppointment && (
                  <div className="flex items-center justify-between text-sm mt-1">
                    <span className="text-muted-foreground">Next Appointment</span>
                    <span className="font-medium text-primary">
                      {patient.upcomingAppointment}
                    </span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}

        <DataPagination links={patients.links} />
      </div>


            

        </AuthenticatedLayout >
    )
}