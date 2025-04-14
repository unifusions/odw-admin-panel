<?php

namespace App\Http\Controllers\Admin\Clinic;

use App\Http\Controllers\Controller;
use App\Models\Appointment;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AppointmentController extends Controller
{
    public function index(Request $request)
    {
        $appointments = Appointment::when(
            $request->year && $request->month,
            fn($query) => $query->whereYear('appointment_date', $request->year)
                ->whereMonth('appointment_date', $request->month)
                ->where(function ($query) {
                    $query->where('status', 'confirmed')
                        ->orWhere('status', 'rescheduled');
                })
        )->get()->map(fn($appointment) => [
            'id' => $appointment->id,
            'title' => $appointment->patient_id,
            'start' => "{$appointment->appointment_date}T{$appointment->time_slot}",
            'end' => Carbon::parse("{$appointment->appointment_date} {$appointment->time_slot}")
                ->addMinutes(30)->format('Y-m-d\TH:i:s'),
            'extendedProps' => [
                'full_name' => '',  // Uncomment if patient data is available
                'age' => '',
                'gender' => '',
                'location' => '',
                'services' => [],
            ]
        ]);

        $pendingAppointments = Appointment::where('status', 'pending')->count();

        return Inertia::render('Admin/Appointments/Index', [
            'appointments' => $appointments,
            'pendingAppointments' => $pendingAppointments
        ]);
    }

    public function pendingAppointment()
    {

        $appointments = Appointment::with('patient.user')->where('status', 'pending')->get();

        return Inertia::render('Admin/Appointments/PendingList', [
            'appointments' => $appointments
        ]);
    }

    public function confirmAppointment(Appointment $appointment)
    {
        $appointment->status = 'confirmed';
        $appointment->is_confirmed = true;
        $appointment->save();

        return redirect()->back()->with(['success' => 'Appointmnet has been confirmed']);
    }

    public function cancelAppointment(Appointment $appointment)
    {
        $appointment->status = 'cancelled';
        $appointment->is_confirmed = true;
        $appointment->save();

        return redirect()->back()->with(['success' => 'Appointmet has been cancelled']);
    }
    public function updateAppointment(Request $request, Appointment $appointment)
    {
        $request->validate([
            'status' => 'required|in:confirmed,rescheduled,canceled',
            'new_time_slot' => 'nullable|required_if:status,rescheduled'
        ]);

        if ($request->status === 'rescheduled') {
            $appointment->update([
                'time_slot' => $request->new_time_slot,
                'status' => 'rescheduled'
            ]);
        } else {
            $appointment->update(['status' => $request->status]);
        }

        return response()->json(['message' => 'Appointment updated successfully!']);
    }
}
