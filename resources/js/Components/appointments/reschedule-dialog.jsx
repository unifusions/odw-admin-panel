import { useState } from "react";
import { format } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarIcon, Clock, User, AlertCircle } from "lucide-react";
 
 

 

const timeSlots = [
    "08:00 AM",
  "08:30 AM",
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "06:30 PM",
  "07:00 PM",
  "07:30 PM",
  "08:00 PM",
  
];

const doctors = [
  "Dr. Sarah Johnson",
  "Dr. Michael Chen",
  "Dr. Lisa Park",
];

export default function RescheduleDialog({
  open,
  onOpenChange,
  appointment,
  onReschedule,
} ) {
  const [selectedDate, setSelectedDate] = useState ();
  const [selectedTime, setSelectedTime] = useState ("");
  const [selectedDoctor, setSelectedDoctor] = useState ("");
  const [reason, setReason] = useState("");
  const [step, setStep] = useState("select");

  const handleClose = () => {
    setSelectedDate(undefined);
    setSelectedTime("");
    setSelectedDoctor("");
    setReason("");
    setStep("select");
    onOpenChange(false);
  };

  const handleNext = () => {
    if (selectedDate && selectedTime) {
      setStep("confirm");
    }
  };

  const handleConfirm = () => {
    if (appointment && selectedDate && selectedTime) {
      onReschedule(
        appointment,
        selectedDate,
        selectedTime,
        reason
      );
      handleClose();
    }
  };

  if (!appointment) return null;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CalendarIcon className="h-5 w-5 text-primary" />
            Reschedule Appointment
          </DialogTitle>
          <DialogDescription>
            Select a new date and time for {appointment?.patient?.first_name}'s{" "}
            {appointment?.type?.toLowerCase()} appointment
          </DialogDescription>
        </DialogHeader>

        {step === "select" ? (
          <div className="space-y-6">
            {/* Current Appointment Info */}
            <div className="p-4 rounded-lg bg-muted/50 border border-border">
              <p className="text-sm font-medium text-muted-foreground mb-2">
                Current Appointment

                
              </p>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                  {appointment?.patient?.first_name?.split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="flex-1">
                  <p className="font-medium">{appointment?.patient?.first_name}</p>
                  <p className="text-sm text-muted-foreground">
                    {appointment?.appointment_date} at {appointment?.time_slot}  
                  </p>
                </div>
                <Badge variant="outline">{appointment?.appointable_label}</Badge>
              </div>
            </div>

            {/* Date and Time Selection */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3">
                <Label>Select New Date</Label>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => date < new Date()}
                  className="rounded-lg border border-border pointer-events-auto"
                />
              </div>

              <div className="space-y-4">
                <div className="space-y-3">
                  <Label>Select Time Slot</Label>
                  <div className="grid grid-cols-4 gap-2">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        type="button"
                        variant={selectedTime === time ? "default" : "outline"}
                        size="sm"
                        className="text-xs"
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* <div className="space-y-3">
                  <Label>Doctor (Optional)</Label>
                  <Select value={selectedDoctor} onValueChange={setSelectedDoctor}>
                    <SelectTrigger>
                      <SelectValue placeholder="Keep current doctor" />
                    </SelectTrigger>
                    <SelectContent>
                      {doctors.map((doctor) => (
                        <SelectItem key={doctor} value={doctor}>
                          {doctor}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div> */}

                {/* <div className="space-y-3">
                  <Label>Reason for Rescheduling (Optional)</Label>
                  <Textarea
                    placeholder="Enter reason for rescheduling..."
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className="resize-none"
                    rows={3}
                  />
                </div> */}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Confirmation Step */}
            <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
              <div className="flex gap-3">
                <AlertCircle className="h-5 w-5 text-amber-500 shrink-0" />
                <div>
                  <p className="font-medium text-amber-600">Confirm Reschedule</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Please verify the new appointment details before confirming.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 rounded-lg border border-border">
                <p className="text-sm font-medium text-muted-foreground mb-2">
                  Original
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                    <span>{appointment?.appointment_date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{appointment.time_slot}</span>
                  </div>
                  {/* <div className="flex items-center gap-2 text-sm">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span>{appointment.doctor}</span>
                  </div> */}
                </div>
              </div>

              <div className="p-4 rounded-lg border-2 border-primary bg-primary/5">
                <p className="text-sm font-medium text-primary mb-2">New</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CalendarIcon className="h-4 w-4 text-primary" />
                    <span className="font-medium">
                      {selectedDate && format(selectedDate, "MMM d, yyyy")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="font-medium">{selectedTime}</span>
                  </div>
                  {/* <div className="flex items-center gap-2 text-sm">
                    <User className="h-4 w-4 text-primary" />
                    <span className="font-medium">
                      {selectedDoctor || appointment.doctor}
                    </span>
                  </div> */}
                </div>
              </div>
            </div>

            {reason && (
              <div className="p-3 rounded-lg bg-muted/50">
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  Reason
                </p>
                <p className="text-sm">{reason}</p>
              </div>
            )}
          </div>
        )}

        <DialogFooter>
          {step === "select" ? (
            <>
              <Button variant="outline" onClick={handleClose}>
                Cancel
              </Button>
              <Button
                onClick={handleNext}
                disabled={!selectedDate || !selectedTime}
              >
                Review Changes
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" onClick={() => setStep("select")}>
                Back
              </Button>
              <Button onClick={handleConfirm}>Confirm Reschedule</Button>
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
