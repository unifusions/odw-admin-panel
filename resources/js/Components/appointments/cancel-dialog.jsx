import { XCircle } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

 
 export default function CancelDialog({open, onOpenChange, appointment, onCancel}){
return (
     <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Cancel Appointment</DialogTitle>
            <DialogDescription>
              Are you sure you want to cancel this appointment?
            </DialogDescription>
          </DialogHeader>

          {appointment && (
            <div className="space-y-4 py-4">
              <div className="rounded-lg bg-muted/50 p-3">
                <p className="font-medium">{appointment?.patient?.first_name}</p>
                <p className="text-sm text-muted-foreground">
                   {appointment?.appointment_date} at {appointment.time_slot}
                </p>
                <p className="text-sm text-muted-foreground">{appointment?.appointable?.name}</p>
              </div>

              {/* <div className="space-y-2">
                <Label htmlFor="cancel-reason">Cancellation Reason (Optional)</Label>
                <Textarea
                  id="cancel-reason"
                  placeholder="Enter reason for cancellation..."
                //   value={cancelReason}
                //   onChange={(e) => setCancelReason(e.target.value)}
                  rows={3}
                />
              </div> */}
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Keep Appointment
            </Button>
            <Button variant="destructive" onClick={onCancel}>
              <XCircle className="h-4 w-4 mr-2" />
              Cancel Appointment
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

)
 }
 
