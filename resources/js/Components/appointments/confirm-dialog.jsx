import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  MessageSquare,
  Mail,
  Phone,
} from "lucide-react";
import ConfirmedAppointment from "./confirmed";
 

 
export function ConfirmDialog({
  open,
  onOpenChange,
  appointment,
  onConfirm,
  processing,
  isConfirmed  
} ) {
  const [notes, setNotes] = useState("");
  const [sendEmail, setSendEmail] = useState(true);
  const [sendSMS, setSendSMS] = useState(true);
  const [step, setStep] = useState("details");

  const handleClose = () => {
    setNotes("");
    setSendEmail(true);
    setSendSMS(true);
    setStep("details");
    onOpenChange(false);
  };

  useEffect(() => {
  if (isConfirmed) {
    setStep("success");
  }
}, [isConfirmed]);

  const handleConfirm = () => {
    if (appointment) {
      const notifications  = [];
      if (sendEmail) notifications.push("email");
      if (sendSMS) notifications.push("sms");
      
      onConfirm(appointment, notes, notifications);
      
    }
  };

  if (!appointment) return null;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-md">
        {step === "details" ? (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                Confirm Appointment
              </DialogTitle>
              <DialogDescription>
                Confirm this appointment and optionally notify the patient
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
              {/* Appointment Details */}
              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <div className="flex items-start gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                    {appointment?.patient?.first_name?.split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">
                      {appointment?.patient?.first_name}
                    </p>
                   {appointment?.dentalservice?.name && <Badge variant="outline" className="mt-1">
                      {appointment?.dentalservice?.name}  
                    </Badge>} 
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-border space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{appointment?.appointment_date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{appointment?.time_slot}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="h-4 w-4" />
                    <span>{appointment?.appointable?.name}</span>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-3">
                <Label className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Confirmation Notes (Optional)
                </Label>
                <Textarea
                  placeholder="Add any notes or instructions for the patient..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="resize-none"
                  rows={3}
                />
                
              </div>

              {/* Notification Options */}
              <div className="space-y-3">
                <Label>Send Confirmation To Patient</Label>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg border border-border">
                    <Checkbox
                      id="email"
                      checked={sendEmail}
                      onCheckedChange={(checked) => setSendEmail(!!checked)}
                    />
                    <label
                      htmlFor="email"
                      className="flex items-center gap-2 flex-1 cursor-pointer"
                    >
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Email Notification</p>
                        <p className="text-xs text-muted-foreground">
                          Send confirmation email to patient
                        </p>
                      </div>
                    </label>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg border border-border">
                    <Checkbox
                      id="sms"
                      checked={sendSMS}
                      onCheckedChange={(checked) => setSendSMS(!!checked)}
                    />
                    <label
                      htmlFor="sms"
                      className="flex items-center gap-2 flex-1 cursor-pointer"
                    >
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">SMS Notification</p>
                        <p className="text-xs text-muted-foreground">
                          Send confirmation SMS to patient
                        </p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={handleClose}>
                Cancel
              </Button>
              <Button onClick={handleConfirm}  disabled = {processing}>Confirm Appointment {processing && 'Processing'}</Button>
            </DialogFooter>
          </>
        ) : (
          <>
            <ConfirmedAppointment appointment={appointment} sendEmail={sendEmail} sendSMS={sendSMS} />

            <DialogFooter>
              <Button onClick={handleClose} className="w-full">
                Done
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
