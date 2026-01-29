import { Calendar, Clock, User, MoreHorizontal, CheckCircle, CalendarClock, XCircle, MapIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import Avatar from "../ui/avatar";

// export interface Appointment {
//   id: string;
//   patientName: string;
//   patientAvatar?: string;
//   type: string;
//   date: string;
//   time: string;
//   status: "confirmed" | "pending" | "cancelled" | "completed";
//   doctor: string;
// }

// interface AppointmentsTableProps {
//   appointments: Appointment[];
//   showActions?: boolean;
//   onReschedule?: (appointment: Appointment) => void;
//   onConfirm?: (appointment: Appointment) => void;
//   onCancel?: (appointment: Appointment) => void;
// }

const statusConfig = {
  confirmed: { label: "Confirmed", class: "badge-confirmed" },
  pending: { label: "Pending", class: "badge-pending" },
  cancelled: { label: "Cancelled", class: "badge-cancelled" },
  completed: { label: "Completed", class: "badge-completed" },
};

export function AppointmentsTable({
  appointments,
  showActions = true,
  onReschedule,
  onConfirm,
  onCancel,
}) {
  return (
    <div className="data-table ">
         
      <table className="w-full  ">
        <thead>
          <tr>
            <th width="20%">Patient</th>
            
            <th width="25%">Date & Time</th>
            <th width="20%">Dentist</th>
            <th width="20%">Clinic</th>
            <th width="5%">Status</th>
            {showActions && <th width="5%" className="text-right">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id} className="hover:bg-muted/30 transition-colors  ">
              <td>
                <Avatar text={appointment?.patient?.first_name} />
                {/* <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                   
                    {appointment?.patient?.first_name?.split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <span className="font-medium">{appointment?.patient?.first_name}</span>
                </div> */}
              </td>
              
              <td>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{appointment?.appointment_date}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{appointment?.time_slot}</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex items-center gap-1.5">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span>{appointment?.appointable?.name ?? 'Not assigned'}</span>
                </div>
              </td>
              <td>
                 <div className="flex items-center gap-1.5">
                  <MapIcon className="h-4 w-4 text-muted-foreground" />
                  <span>{appointment?.clinic?.name?? 'Not assigned'}</span>
                </div>
                
                
              </td>
              <td>
                <span
                  className={cn(
                    "badge-status",
                    statusConfig[appointment?.status].class
                  )}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  {statusConfig[appointment.status].label}
                  
                </span>
              </td>
              {showActions && (
                <td className="text-right">
                  <div className="flex items-center justify-end gap-1">
                    {appointment.status === "pending" && onConfirm && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="gap-1.5 text-primary hover:text-primary"
                        onClick={() => onConfirm(appointment)}
                      >
                        <CheckCircle className="h-4 w-4" />
                        Confirm
                      </Button>
                    )}
                    {(appointment.status === "pending" || appointment.status === "confirmed") && onReschedule && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="gap-1.5"
                        onClick={() => onReschedule(appointment)}
                      >
                        <CalendarClock className="h-4 w-4" />
                        Reschedule
                      </Button>
                    )}
                    {(appointment.status === "pending" || appointment.status === "confirmed") && onCancel && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="gap-1.5 text-destructive hover:text-destructive"
                        onClick={() => onCancel(appointment)}
                      >
                        <XCircle className="h-4 w-4" />
                        Cancel
                      </Button>
                    )}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit Notes</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
