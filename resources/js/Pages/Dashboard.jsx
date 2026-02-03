import Breadcrumbs from '@/Components/Breadcrumbs';
import { AppointmentsTable } from '@/Components/dashboard/appointments-table';
import { AppointmentChart, RevenueChart } from '@/Components/dashboard/charts';
import { StatsCard } from '@/Components/dashboard/stats-card';
import PatientRegistrationChart from '@/Components/PatientRegistrationChart';
import ServicesChart from '@/Components/ServicesChart';
import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import { Calendar, Clock, FileText, MessageSquare, TrendingUp, Users } from 'lucide-react';

export default function Dashboard() {

  const { appointmentcount, socount, previousSoCount, previousAppointmentCount,
    estimatesCount, previousEstimatesCount, patients_count, patient_registration,
    patient_labels, patient_datas, todays_appointment, patientStats,
    weeklyStats
  } = usePage().props;


  return (
    <AuthenticatedLayout
      header='Dashboard'
      pageTitle="Dashboard"
    >

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        <StatsCard
          title="Patient Registrations"
          value={patients_count?.current}
          change={{ value: 12, trend: "up" }}
          icon={Users}
          iconColor="success"
        />

        <StatsCard
          title="Appointments"
          value={appointmentcount}
          change={{ value: previousAppointmentCount, trend: appointmentcount > previousAppointmentCount ? "up" : "down" }}
          icon={Calendar}
          iconColor="primary"
        />

        <StatsCard
          title="Second Opinions"
          value={socount}
          change={{ value: previousSoCount, trend: socount > previousSoCount ? "up" : "down" }}
          icon={MessageSquare}
          iconColor="info"
        />

        <StatsCard
          title="Estimates"
          value={estimatesCount}
          change={{ value: previousEstimatesCount, trend: estimatesCount > previousEstimatesCount ? "up" : "down" }}
          icon={FileText}
          iconColor="warning"
        />

      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-base font-semibold">
              Weekly Appointments
            </CardTitle>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-primary" />
                <span className="text-muted-foreground">Total</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-success" />
                <span className="text-muted-foreground">Confirmed</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>

            <AppointmentChart stats={weeklyStats} />
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-base font-semibold">
              Registrations Overview
            </CardTitle>
            {/* <div className="flex items-center gap-1 text-sm text-success">
              <TrendingUp className="h-4 w-4" />
              <span>+15.3%</span>
            </div> */}
          </CardHeader>
          <CardContent>
            {/* {JSON.stringify( patient_registration)} */}
            <RevenueChart stats={patientStats} />
          </CardContent>
        </Card>
      </div>

      {/* Appointments and Activity Row */}
      {/* <div className="mt-6 grid gap-6 lg:grid-cols-3"> */}
      {/*    
        <div className="lg:col-span-2">
          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <div>
                <CardTitle className="text-base font-semibold">
                  Today's Appointments
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {todays_appointment.length} scheduled for today
                </p>
              </div>
              <Button variant="outline" size="sm" className="gap-2">
                <Clock className="h-4 w-4" />
                View All
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              <AppointmentsTable appointments={todays_appointment} />
            </CardContent>
          </Card>
        </div> */}

      {/* Recent Activity */}
      {/* <div>
          <Card className="shadow-card">
            <CardHeader className="pb-4">
              <CardTitle className="text-base font-semibold">
                Recent Activity
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Latest updates from your clinic
              </p>
            </CardHeader>
            <CardContent>
              <RecentActivity />
            </CardContent>
          </Card>
        </div> */}
      {/* </div> */}


    </AuthenticatedLayout>
  );
}
