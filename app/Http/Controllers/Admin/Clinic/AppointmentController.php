<?php

namespace App\Http\Controllers\Admin\Clinic;

use App\Http\Controllers\Controller;
use App\Models\Appointment;
use Illuminate\Http\Request;

class AppointmentController extends Controller
{
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
