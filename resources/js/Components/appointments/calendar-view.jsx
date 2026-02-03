import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, User, ChevronLeft, ChevronRight, Phone, Mail, Calendar as CalendarIcon, Building } from "lucide-react";
import {
  format,
  isSameDay,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  subMonths,
  addWeeks,
  subWeeks,
  isSameMonth,
} from "date-fns";
import { cn } from "@/lib/utils";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";


// type CalendarView = "month" | "week" | "day";

const statusConfig = {
  confirmed: { label: "Confirmed", class: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" },
  pending: { label: "Pending", class: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" },
  cancelled: { label: "Cancelled", class: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" },
  completed: { label: "Completed", class: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" },
};

const parseDateString = (dateStr) => {
  return new Date(dateStr);
};

const timeSlots = [
  "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
];

export function AppointmentCalendar({
  appointments,
  onReschedule,
  onConfirm,
  onCancel,
}) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendarView, setCalendarView] = useState("month");
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [detailDialogOpen, setDetailDialogOpen] = useState(false);

  const getAppointmentsForDay = (date) => {
    return appointments?.filter((apt) => isSameDay(parseDateString(apt?.appointment_date), date))
      .sort((a, b) => a?.time_slot.localeCompare(b?.time_slot));
  };

  const handleAppointmentClick = (appointment, e) => {
    e.stopPropagation();
    setSelectedAppointment(appointment);
    setDetailDialogOpen(true);
  };

  const handlePrev = () => {
    if (calendarView === "month") {
      setCurrentDate(subMonths(currentDate, 1));
    } else if (calendarView === "week") {
      setCurrentDate(subWeeks(currentDate, 1));
    } else {
      setCurrentDate(addDays(currentDate, -1));
    }
  };

  const handleNext = () => {
    if (calendarView === "month") {
      setCurrentDate(addMonths(currentDate, 1));
    } else if (calendarView === "week") {
      setCurrentDate(addWeeks(currentDate, 1));
    } else {
      setCurrentDate(addDays(currentDate, 1));
    }
  };

  const getHeaderTitle = () => {
    if (calendarView === "month") {
      return format(currentDate, "MMMM yyyy");
    } else if (calendarView === "week") {
      const weekStart = startOfWeek(currentDate);
      const weekEnd = endOfWeek(currentDate);
      return `${format(weekStart, "MMM d")} - ${format(weekEnd, "MMM d, yyyy")}`;
    } else {
      return format(currentDate, "EEEE, MMMM d, yyyy");
    }
  };

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Month View
  const renderMonthView = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const calendarStart = startOfWeek(monthStart);
    const calendarEnd = endOfWeek(monthEnd);

    const calendarDays = [];
    let day = calendarStart;
    while (day <= calendarEnd) {
      calendarDays.push(day);
      day = addDays(day, 1);
    }

    return (
      <>

        <div className="grid grid-cols-7 gap-1 mb-2">
          {weekDays.map((weekDay) => (
            <div
              key={weekDay}
              className="text-center text-sm font-medium text-muted-foreground py-2"
            >
              {weekDay}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {calendarDays.map((date, index) => {
            const dayAppointments = getAppointmentsForDay(date);
            const isCurrentMonth = isSameMonth(date, currentDate);
            const isToday = isSameDay(date, new Date());

            return (
              <div
                key={index}
                className={cn(
                  "min-h-[120px] p-2 border border-border rounded-lg transition-colors",
                  !isCurrentMonth && "bg-muted/30 opacity-50",
                  isToday && "bg-primary/5 border-primary"
                )}
              >

                <div
                  className={cn(
                    "text-sm font-medium mb-2",
                    isToday && "text-primary",
                    !isCurrentMonth && "text-muted-foreground"
                  )}
                >
                  {format(date, "d")}
                </div>
                <div className="space-y-1">
                  {dayAppointments.slice(0, 3).map((apt) => (
                    <button
                      key={apt.id}
                      onClick={(e) => handleAppointmentClick(apt, e)}
                      className={cn(
                        "w-full text-left px-2 py-1 rounded text-xs truncate transition-all hover:scale-[1.02]",
                        statusConfig[apt.status].class
                      )}
                    >

                      <span className="font-medium">{apt.time_slot}</span> - {apt?.patient?.first_name.split(" ")[0]}
                    </button>
                  ))}
                  {dayAppointments?.length > 3 && (
                    <div className="text-xs text-muted-foreground pl-2">
                      +{dayAppointments.length - 3} more
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  // Week View
  const renderWeekView = () => {
    const weekStart = startOfWeek(currentDate);
    const weekDays = [];
    for (let i = 0; i < 7; i++) {
      weekDays.push(addDays(weekStart, i));
    }



    return (
      <div className="flex flex-col">
        {/* Week Days Header */}
        <div className="grid grid-cols-8 gap-1 mb-2">
          <div className="w-20 shrink-0" /> {/* Time column spacer */}
          {weekDays.map((date) => {
            const isToday = isSameDay(date, new Date());
            return (
              <div
                key={date.toISOString()}
                className={cn(
                  "text-center py-2 rounded-lg",
                  isToday && "bg-primary/10"
                )}
              >
                <div className="text-xs text-muted-foreground">
                  {format(date, "EEE")}
                </div>
                <div
                  className={cn(
                    "text-lg font-semibold",
                    isToday && "text-primary"
                  )}
                >
                  {format(date, "d")}
                </div>
              </div>
            );
          })}
        </div>

        {/* Time Grid */}
        <ScrollArea className="h-[500px]">
          <div className="grid grid-cols-8 gap-1">
            {timeSlots.map((time) => (
              <>
                <div
                  key={time}
                  className="w-20 shrink-0 text-xs text-muted-foreground py-3 text-right pr-2"
                >
                  {time}
                </div>
                {weekDays.map((date) => {
                  const dayAppointments = getAppointmentsForDay(date);
                  const slotAppointments = dayAppointments.filter(
                    (apt) => apt.time === time
                  );
                  const isToday = isSameDay(date, new Date());

                  return (
                    <div
                      key={`${date.toISOString()}-${time}`}
                      className={cn(
                        "min-h-[60px] p-1 border border-border rounded transition-colors",
                        isToday && "bg-primary/5"
                      )}
                    >
                      {slotAppointments.map((apt) => (
                        <button
                          key={apt.id}
                          onClick={(e) => handleAppointmentClick(apt, e)}
                          className={cn(
                            "w-full text-left px-2 py-1.5 rounded text-xs transition-all hover:scale-[1.02]",
                            statusConfig[apt.status].class
                          )}
                        >
                          <div className="font-medium truncate">{apt.patientName}</div>
                          <div className="truncate opacity-80">{apt.type}</div>
                        </button>
                      ))}
                    </div>
                  );
                })}
              </>
            ))}
          </div>
        </ScrollArea>
      </div>
    );
  };

  // Day View
  const renderDayView = () => {
    const dayAppointments = getAppointmentsForDay(currentDate);
    const isToday = isSameDay(currentDate, new Date());

    return (
      <div className="flex flex-col">
        {/* Day Header */}
        <div
          className={cn(
            "text-center py-4 rounded-lg mb-4",
            isToday && "bg-primary/10"
          )}
        >
          <div className="text-sm text-muted-foreground">
            {format(currentDate, "EEEE")}
          </div>
          <div
            className={cn(
              "text-3xl font-bold",
              isToday && "text-primary"
            )}
          >
            {format(currentDate, "d")}
          </div>
          <div className="text-sm text-muted-foreground">
            {format(currentDate, "MMMM yyyy")}
          </div>
        </div>

        {/* Time Slots */}
        <ScrollArea className="h-[500px]">
          <div className="space-y-1">
            {timeSlots.map((time) => {
              const slotAppointments = dayAppointments.filter(
                (apt) => apt.time === time
              );

              return (
                <div
                  key={time}
                  className="flex gap-4 items-start"
                >
                  <div className="w-20 shrink-0 text-sm text-muted-foreground py-3 text-right">
                    {time}
                  </div>
                  <div className="flex-1 min-h-[70px] p-2 border border-border rounded-lg">
                    {slotAppointments.length === 0 ? (
                      <div className="text-sm text-muted-foreground/50 py-2">
                        No appointments
                      </div>
                    ) : (
                      <div className="space-y-2">
                        {slotAppointments.map((apt) => (
                          <button
                            key={apt.id}
                            onClick={(e) => handleAppointmentClick(apt, e)}
                            className={cn(
                              "w-full text-left p-3 rounded-lg transition-all hover:scale-[1.01]",
                              statusConfig[apt.status].class
                            )}
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-semibold">{apt.patientName}</div>
                                <div className="text-sm opacity-80">{apt.type}</div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm font-medium">{apt.doctor}</div>
                                <Badge variant="outline" className="mt-1">
                                  {statusConfig[apt.status].label}
                                </Badge>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </div>
    );
  };

  return (
    <>
      <Card className="shadow-card w-full">
        <CardContent className="p-4">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-foreground">
              {getHeaderTitle()}
            </h3>

            <div className="flex items-center gap-4">
              <div className="  flex flex-wrap gap-4">
                {Object.entries(statusConfig).map(([status, config]) => (
                  <div key={status} className="flex items-center gap-2 text-sm">
                    <span className={cn("px-2 py-0.5 rounded text-xs", config.class)}>
                      {config.label}
                    </span>
                  </div>
                ))}
              </div>
              {/* View Switcher */}
              <Tabs value={calendarView} onValueChange={(v) => setCalendarView(v)}>
                <TabsList className="h-9">
                  <TabsTrigger value="month" className="px-3">Month</TabsTrigger>
                  <TabsTrigger value="week" className="px-3">Week</TabsTrigger>
                  <TabsTrigger value="day" className="px-3">Day</TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handlePrev}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setCurrentDate(new Date())}
                >
                  Today
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleNext}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Calendar Content */}
          {calendarView === "month" && renderMonthView()}
          {calendarView === "week" && renderWeekView()}
          {calendarView === "day" && renderDayView()}

          {/* Legend */}

        </CardContent>
      </Card>

      {/* Appointment Detail Dialog */}
      <Dialog open={detailDialogOpen} onOpenChange={setDetailDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          {selectedAppointment && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                    {selectedAppointment?.patient?.first_name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div>{selectedAppointment?.patient?.first_name}</div>
                    <Badge
                      className={cn(
                        "mt-1",
                        statusConfig[selectedAppointment.status].class
                      )}
                    >
                      {statusConfig[selectedAppointment.status].label}
                    </Badge>
                  </div>
                </DialogTitle>
                <DialogDescription>
                  Appointment Details
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 mt-4">
                {/* Appointment Info */}
                <div className="grid gap-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <CalendarIcon className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Date</p>
                      <p className="font-medium">{selectedAppointment.appointment_date}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Time</p>
                      <p className="font-medium">{selectedAppointment.time_slot}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <Building className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Clinic</p>
                      <p className="font-medium">{selectedAppointment?.clinic?.name ?? 'NA'} </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <User className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Provider  </p>
                     
                      <p className="font-medium">{selectedAppointment?.appointable?.name ?? 'Next Available Provider'} </p>
                      {selectedAppointment?.appointable && <Badge variant="outline">{selectedAppointment?.appointable_label}</Badge>}
                    </div>
                  </div>
                </div>

                

                {/* Contact Info (mock data) */}
                <div className="p-3 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground mb-2">Contact Information</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>{selectedAppointment?.patient?.phone_number}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span>{selectedAppointment?.patient?.email?.toLowerCase()}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-4 border-t border-border">
                  {selectedAppointment.status === "pending" && (
                    <Button
                      className="flex-1"
                      onClick={() => {
                        onConfirm(selectedAppointment);
                        setDetailDialogOpen(false);
                      }}
                    >
                      Confirm
                    </Button>
                  )}
                  {(selectedAppointment.status === "pending" ||
                    selectedAppointment.status === "confirmed") && (
                      <>
                        <Button
                          variant="outline"
                          className="flex-1"
                          onClick={() => {
                            onReschedule(selectedAppointment);
                            setDetailDialogOpen(false);
                          }}
                        >
                          Reschedule
                        </Button>
                        <Button
                          variant="outline"
                          className="text-destructive hover:bg-destructive/10"
                          onClick={() => {
                            onCancel(selectedAppointment);
                            setDetailDialogOpen(false);
                          }}
                        >
                          Cancel Appointment
                        </Button>
                      </>
                    )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
