import { CheckCircle, Mail, Phone } from "lucide-react";
import { Badge } from "../ui/badge";

export default function ConfirmedAppointment({appointment, sendEmail, sendSMS}){
    return (
        <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Appointment Confirmed!
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {appointment?.patient?.first_name}'s appointment has been confirmed for{" "}
                {appointment?.appointment_date} at {appointment?.time_slot}.
              </p>
              {(sendEmail || sendSMS) && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>Notifications sent via:</span>
                  {sendEmail && (
                    <Badge variant="secondary" className="gap-1">
                      <Mail className="h-3 w-3" />
                      Email
                    </Badge>
                  )}
                  {sendSMS && (
                    <Badge variant="secondary" className="gap-1">
                      <Phone className="h-3 w-3" />
                      SMS
                    </Badge>
                  )}
                </div>
              )}
            </div>
    )
}