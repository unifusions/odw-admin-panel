import { Column, Row } from "@/Components/Components";
import PageHeader from "@/Components/PageHeader";
import { ScheduleAppointmentDialog } from "@/Components/patients/schedule-appointment-dialog";
import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { cn } from "@/lib/utils";
import { Building, Calendar, CheckCircle, Clock, CreditCard, FileText, Heart, IdCard, Mail, MapPin, Phone, Plus, Shield, Stethoscope, User } from "lucide-react";
import { useState } from "react";


const calculateAge = (dob) => {
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};



const getStatusBadge = (status) => {
  switch (status) {
    case "completed":
      return <Badge className="badge-status badge-completed">Completed</Badge>;
    case "confirmed":
      return <Badge className="badge-status badge-confirmed">Confirmed</Badge>;
    case "pending":
      return <Badge className="badge-status badge-pending">Pending</Badge>;
    case "cancelled":
      return <Badge className="badge-status badge-cancelled">Cancelled</Badge>;
    case "approved":
      return <Badge className="badge-status badge-confirmed">Approved</Badge>;
    case "under_review":
      return <Badge className="badge-status badge-under-review">Under Review</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

const statusConfig = {
  confirmed: { label: "Confirmed", class: "badge-confirmed" },
  pending: { label: "Pending", class: "badge-pending" },
  cancelled: { label: "Cancelled", class: "badge-cancelled" },
  completed: { label: "Completed", class: "badge-completed" },
};

const Status = ({ status }) => {
  return (
    <span
      className={cn(
        "badge-status",
        statusConfig[status]?.class
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {statusConfig[status]?.label}

    </span>
  )
}

const InsuranceCard = ({ insurance }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Shield className="h-5 w-5 text-primary" />
          {insurance?.insurance_provider ?? 'No provider'}
         
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-primary/10 p-2">
              <User className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="font-medium text-sm">{insurance?.first_name} {insurance?.last_name}</p>
              <p className="text-xs text-muted-foreground"> Insurance for {insurance?.relation}</p>
            </div>
          </div>
           
        </div>

         <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
          <div className="flex items-center gap-3">
             
            <div>
              <p className="font-medium text-sm">Address</p>
              <p className="text-xs text-muted-foreground"> {insurance?.address_line_1} 

<br/>
{insurance?.address_line_2}<br/> {insurance?.address_line_3} <br/>
    {insurance.city} - {insurance.zip_code}, {insurance.state }
 <br/> 
              </p>
            </div>
          </div>
           
        </div>


        <div className="grid grid-cols-2 gap-2">

            <div className="rounded-lg border border-border p-2">
            <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
              <IdCard className="h-3 w-3" />
              Member ID
            </div>
            <p className="text-xs font-medium truncate">{insurance?.member_id}</p>
          </div>

          <div className="rounded-lg border border-border p-2">
            <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
              <CreditCard className="h-3 w-3" />
              Plan #
            </div>
            <p className="text-xs font-medium truncate">{insurance?.plan_no}</p>
          </div>
          <div className="rounded-lg border border-border p-2">
            <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
              <Building className="h-3 w-3" />
              Carrier  
            </div>
            <p className="text-xs font-medium">{insurance?.carrier}</p>
          </div>

            <div className="rounded-lg border border-border p-2">
            <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
              <Building className="h-3 w-3" />
              Mode  
            </div>
            <p className="text-xs font-medium">{insurance?.mode}</p>
          </div>

        </div>

        

        {/* <div className="flex items-center justify-between p-2 rounded-lg border">
          <span className="text-sm">Deductible: {insurance?.deductible}</span>
          {insurance?.deductibleMet ? (
            <div className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-success" />
              <span className="text-xs text-success">Met</span>
            </div>
          ) : (
            <span className="text-xs text-muted-foreground">Not Met</span>
          )}
        </div> */}


      </CardContent>
    </Card>
  )
}

export default function Show({ patient }) {
  const insurance = patient?.insurance;
  const [scheduleDialogOpen, setScheduleDialogOpen] = useState(false);

  return (
    <AuthenticatedLayout
      header="Patients"
      pageTitle={patient?.first_name}
      subTitle={'Patient ID #PT-' + patient?.id}
    >
      {/* <Button onClick={() => setScheduleDialogOpen(true)}>
             <Plus className="mr-2 h-4 w-4" />
            Schedule Appointment
           </Button> */}
      <div className="space-y-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left Column - Profile & Insurance */}
          <div className="space-y-6">
            {/* Profile Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <User className="h-5 w-5 text-primary" />
                  Profile Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>{patient.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{patient.phone_number}</span>
                  </div>

                </div>

                <div className="border-t border-border pt-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-lg bg-muted/50 p-3">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                        <Calendar className="h-3 w-3" />
                        Date of Birth
                      </div>
                      <p className="text-sm font-medium">
                        {patient?.dob ? new Date(patient?.dob).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        }) : 'Not Available'}
                      </p>
                    </div>
                    <div className="rounded-lg bg-muted/50 p-3">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                        <User className="h-3 w-3" />
                        Age
                      </div>
                      <p className="text-sm font-medium">{patient?.dob ? calculateAge(patient.dateOfBirth) : 'Not Available'} years</p>
                    </div>
                  </div>
                </div>



                {patient.upcomingAppointment && (
                  <div className="rounded-lg border border-primary/20 bg-primary/5 p-3">
                    <p className="text-xs text-muted-foreground mb-1">Next Appointment</p>
                    <p className="text-sm font-medium text-primary">{patient.upcomingAppointment}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Insurance Card */}

          </div>

          {/* Right Column - History */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Clock className="h-5 w-5 text-primary" />
                  Patient History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="appointments" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="appointments" className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Appointments
                    </TabsTrigger>
                    <TabsTrigger value="treatments" className="flex items-center gap-2">
                      <Stethoscope className="h-4 w-4" />
                      Second Opinions
                    </TabsTrigger>
                    <TabsTrigger value="estimates" className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Estimates
                    </TabsTrigger>

                    <TabsTrigger value="insurances" className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Insurances
                    </TabsTrigger>

                  </TabsList>

                  <TabsContent value="appointments" className="mt-4">

                    {patient?.appointments.length > 0 ? (
                      <div className="space-y-3">
                        {patient?.appointments.map((apt) => (
                          <div
                            key={apt.id}
                            className="flex items-center justify-between p-4 rounded-lg border border-border"
                          >
                            <div className="flex items-center gap-4">
                              <div className="rounded-full bg-primary/10 p-2">
                                <Calendar className="h-4 w-4 text-primary" />
                              </div>
                              <div>

                                <p className="text-sm text-muted-foreground">
                                  {apt?.appointment_date} • {apt?.appointable?.name}
                                </p>
                              </div>
                            </div>
                            <Status status={apt.status} />

                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8 text-muted-foreground">
                        No appointment history
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="treatments" className="mt-4">
                    {patient?.secondopinions.length > 0 ? (
                      <div className="space-y-3">
                        {patient.secondopinions.map((treatment) => (
                          <div
                            key={treatment.id}
                            className="p-4 rounded-lg border"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-3">
                                <div className="rounded-full bg-primary/10 p-2">
                                  <Stethoscope className="h-4 w-4 text-primary" />
                                </div>
                                <div>
                                  <p className="font-medium">{treatment.procedure}</p>
                                  <p className="text-sm text-muted-foreground">{treatment.date}</p>
                                </div>
                              </div>
                              <div className="text-right">
                                <p className="font-semibold text-primary">{treatment.cost}</p>
                                <p className="text-xs text-muted-foreground">Tooth: {treatment.tooth}</p>
                              </div>
                            </div>
                            {treatment.notes && (
                              <p className="text-sm text-muted-foreground mt-2 pl-11">
                                {treatment.notes}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8 text-muted-foreground">
                        No Second Opinions history
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="estimates" className="mt-4">
                    {patient?.estimates.length > 0 ? (
                      <div className="space-y-3">
                        {patient?.estimates.map((estimate) => (
                          <div
                            key={estimate.id}
                            className="flex items-center justify-between p-4 rounded-lg border"
                          >
                            <div className="flex items-center gap-4">
                              <div className="rounded-full bg-primary/10 p-2">
                                <FileText className="h-4 w-4 text-primary" />
                              </div>
                              <div>
                                <p className="font-medium">{estimate.description}</p>
                                <p className="text-sm text-muted-foreground">{estimate.date}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <p className="font-semibold">{estimate.estimatedCost}</p>
                              {estimate.status}
                              <Status status={estimate.status} />
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8 text-muted-foreground">
                        No estimate history
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="insurances" className="mt-4">
                    {patient?.insurances.length > 0 ? (
                      <div className="space-y-3">
                        {patient?.insurances.map((insurance) => <InsuranceCard key={insurance.id}
                          insurance={insurance} />)}
                      </div>) : (
                      <div className="text-center py-8 text-muted-foreground">
                        No insurance history
                      </div>
                    )}
                  </TabsContent>

                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>


      <ScheduleAppointmentDialog
        patient={patient}
        open={scheduleDialogOpen}
        onOpenChange={setScheduleDialogOpen}
      />

    </AuthenticatedLayout>

  )
}