<?php

namespace App\Http\Controllers\Patient\Api;

use App\Http\Controllers\Controller;
use App\Models\Appointment;
use Illuminate\Http\Request;

class AppointmentController extends Controller
{

    public function myAppointment(Request $request){
       $patient = $request->patient_id;
       $openBookings = Appointment::where('status', 'confirmed')->where('patient_id', $patient)->get();
       $pendingBookings = Appointment::where('status','pending')->where('patient_id', $patient)->get();
       return response()->json([
        'open'=>$openBookings,
        'pending' =>  $pendingBookings]);
            
    }
    public function bookAppointment(Request $request)
    {

        // Check if slot is already booked
        $isBooked = Appointment::where('appointment_date', $request->appointment_date)
            ->where('clinic_branch_id', $request->clinic_branch_id)
            ->where('time_slot', $request->time_slot)
            ->exists();

        if ($isBooked) {
            return response()->json(['error' => 'This time slot is no longer available.'], 422);
        }

        // Create Appointment
        $appointment = Appointment::create([
            'clinic_id' => $request->clinic_id,
            'clinic_branch_id' => $request->clinic_branch_id,
            'clinic_dentist_id' => $request->doctor_id ?? null,
            'patient_id' => $request->patient_id,
            'appointment_date' => $request->appointment_date,
            'time_slot' => $request->time_slot,
            'status' => 'pending',
        ]);

        return response()->json(['success' => 'Appointment Book. Await for confirmation'], 200);
    }
}
