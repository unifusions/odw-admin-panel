import { Mail, MapPin, Phone } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Link } from "@inertiajs/react";

export default function ProviderCard({ provider, providerLink }) {
    return (
        
          <Card className="shadow-card hover:shadow-card-hover transition-all animate-fade-in cursor-pointer">

<Link href={providerLink} > 
            <CardHeader>
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">

                        {provider.photo ? <img src={provider.photo_url}
                            className="w-12 h-12 rounded-full"
                        /> : <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-lg font-semibold text-primary">
                            {patient.first_name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}  </div>
                        }



                        <div>
                            <CardTitle className="text-base">{provider?.name}</CardTitle>
                            <p>{provider?.practise_from}</p>
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
                    {/* <Link
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
                </Link> */}
                </div>
            </CardHeader>
            <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span className="truncate">{provider?.email}</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span>{provider.phone}</span>


                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span className="truncate">{provider.clinics.map((clinic, index) => (
                        <>{index ? ', ' : ''} {clinic.name}</>
                    ))}</span>
                </div>

                <div className="border-t border-border pt-3 mt-3">
               
                <div className="">
                {provider?.services && provider?.services.map((service) => 
                <Badge key={service.id} variant="outline" className="space-x-2">
{service.name}
                </Badge>
                )}</div>
              </div>


            </CardContent>
                </Link>
        </Card>
    
      
    )
}