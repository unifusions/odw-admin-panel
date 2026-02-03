import Breadcrumbs from '@/Components/Breadcrumbs';
import { AppointmentChart } from '@/Components/dashboard/charts';
import { StatsCard } from '@/Components/dashboard/stats-card';
import PatientRegistrationChart from '@/Components/PatientRegistrationChart';
import ServicesChart from '@/Components/ServicesChart';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import { Users } from 'lucide-react';

export default function Dashboard() {
  const { appointmentcount, previousAppointmentCount, weeklyStats } = usePage().props;
  return (
    <AuthenticatedLayout

      header='Dashboard'
      pageTitle="Dashboard"
    >

      <StatsCard
        title="New Appointments"
        value={appointmentcount}
        change={{ value: previousAppointmentCount, trend: appointmentcount >= previousAppointmentCount ? "up" : "download" }}
        icon={Users}
        iconColor="success"
      />
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

       
      </div>

    </AuthenticatedLayout>
  );
}
