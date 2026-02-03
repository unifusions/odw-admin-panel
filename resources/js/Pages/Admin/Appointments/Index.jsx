import AppointmentFilter from "@/Components/appointments/apt-filter";
import AppointmentSummaryCard from "@/Components/appointments/apt-summary-card";
import { AppointmentCalendar } from "@/Components/appointments/calendar-view";
import CancelDialog from "@/Components/appointments/cancel-dialog";
import { ConfirmDialog } from "@/Components/appointments/confirm-dialog";
import RescheduleDialog from "@/Components/appointments/reschedule-dialog";
import { AppointmentsTable } from "@/Components/dashboard/appointments-table";
import SummaryCard from "@/Components/summary-card";

import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { router, useForm, usePage } from "@inertiajs/react";
import { format, parse } from "date-fns";
import { Calendar } from "lucide-react";
import { useState } from "react";


const statusLabel =
{
  pending: 'Pending',
  confirmed: 'Confirmed',
  completed: 'Completed',
  cancelled: 'Cancelled'
}

export default function Index({ appointments, statusFilter, monthlyStats }) {
  const { auth } = usePage().props;
  const role = auth.user.role;


  const [viewMode, setViewMode] = useState("calendar");

  const [rescheduleDialogOpen, setRescheduleDialogOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [cancelDialogOpen, setCancelDialogOpen] = useState(false);

  const [confirmProcessing, setConfirmProcessing] = useState(false);
  const [appointmentConfirmed, setAppointmentConfirmed] = useState(false);
  const handleOpenReschedule = (appointment) => {
    setSelectedAppointment(appointment);
    setRescheduleDialogOpen(true);
  };


  const handleOpenConfirm = (appointment) => {
    setAppointmentConfirmed(false);
    setSelectedAppointment(appointment);
    setConfirmDialogOpen(true);
  };


  const { data, put, processing } = useForm({

  });
  const convertTo24Hour = (time12h) => {

    const clean = time12h.replace(/\s+/g, ' ').replace(/\u202F/g, ' ');
    const [time, modifier] = clean.split(" ");
    let [hours, minutes] = time.split(":");

    if (hours === '12') {
      hours = '00';
    }

    if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }

    return `${hours}:${minutes}`;
  };

  const handleReschedule = (
    appointment,
    newDate,
    newTime,
    reason) => {


    let routeName = 'appointments.reschedule';

    if (role === 'clinic_admin') routeName = 'clinic.appointments.reschedule';
    if (role === 'clinic_user') routeName = 'clinic.user.appointments.reschedule';
    const time_slot = convertTo24Hour(newTime);


    const parsedDate = format(newDate, "yyyy-MM-dd");
    router.put(route(routeName, { appointment: appointment.id }), {
      new_slot: time_slot,
      new_dt: parsedDate,
    });


  };

  const handleConfirm = (
    appointment,
    notes,
    notifications
  ) => {
    let routeName = 'appointments.confirm';

    if (role === 'clinic_admin') routeName = 'clinic.appointments.confirm';
    if (role === 'clinic_user') routeName = 'clinic.user.appointments.confirm';

    setConfirmProcessing(true);

    put(
      route(routeName, { appointment: selectedAppointment }),
      {
        content: notes,
        notifications: notifications,
        onFinish: () => {
          setConfirmProcessing(false);
          setAppointmentConfirmed(true);
        }
      }


    );

  };

  const handleOpenCancel = (appointment) => {
    setSelectedAppointment(appointment);
    // setCancelReason("");
    setCancelDialogOpen(true);
  };
  const handleCancel = () => {
    let routeName = 'appointments.cancel';
    if (!selectedAppointment) return;
    if (role === 'clinic_admin') routeName = 'clinic.appointments.cancel';
    if (role === 'clinic_user') routeName = 'clinic.user.appointments.cancel';

    router.put(
      route(routeName, { appointment: selectedAppointment }),

      {
        onFinish: () => {

          setCancelDialogOpen(false);
        },
        onSuccess: () => {
           
          setCancelDialogOpen(false);
        },
      }
    );
 setCancelDialogOpen(false);

    // toast({
    //   title: "Appointment Cancelled",
    //   description: `Appointment for ${selectedAppointment.patientName} has been cancelled`,
    //   variant: "destructive",
    // });



  };



  const handleApplyFilter = (e) => {

    router.get(route('appointments.index', {
      // search,
      status: e,
      // date,
    }, {
      preserveState: true,
      replace: true,
    }))
  }


  return (
    <AuthenticatedLayout pageTitle="Appointments" subTitle="Review and manage patient appointment requests">

      {/* Status Summary */}
      <div className="grid gap-4 md:grid-cols-4 mb-6">
        {Object.entries(monthlyStats).map(([key, value]) => <AppointmentSummaryCard
          key={key}
          title={statusLabel[key] ?? key}
          value={value}

        />


        )}



      </div>

      <AppointmentFilter

        viewMode={viewMode}
        setViewMode={(v) => setViewMode(v)}
        statusFilter={statusFilter}
        setStatusFilter={(e) => handleApplyFilter(e)}


      />

      {viewMode === "list" ? (
        <Card className="shadow-card">
          <CardHeader className="pb-0">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-semibold flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                All Appointments
              </CardTitle>
              {/* <p className="text-sm text-muted-foreground">
                Showing {filteredAppointments.length} of {appointments.length}{" "}
                appointments
              </p> */}
            </div>
          </CardHeader>
          <CardContent className="p-0 pt-4">
            <AppointmentsTable
              appointments={appointments}
              onReschedule={handleOpenReschedule}
            //   onConfirm={handleOpenConfirm}
            //   onCancel={handleOpenCancel}
            />
          </CardContent>
        </Card>
      ) : (
        <AppointmentCalendar
          appointments={appointments}
          //   onSelectAppointment={handleSelectAppointment}
          onReschedule={handleOpenReschedule}
          onConfirm={handleOpenConfirm}
          onCancel={handleOpenCancel}
        />
      )}

      <RescheduleDialog
        open={rescheduleDialogOpen}
        onOpenChange={setRescheduleDialogOpen}
        appointment={selectedAppointment}
        onReschedule={handleReschedule}
      />

      <ConfirmDialog
        open={confirmDialogOpen}
        onOpenChange={setConfirmDialogOpen}
        appointment={selectedAppointment}
        onConfirm={handleConfirm}
        processing={confirmProcessing}
        isConfirmed={appointmentConfirmed}
      />

      <CancelDialog
        open={cancelDialogOpen}
        onOpenChange={setCancelDialogOpen}
        appointment={selectedAppointment}
        onCancel={handleCancel}
      />

    </AuthenticatedLayout>
  )
}