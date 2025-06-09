<?php

namespace App\Http\Controllers\Patient\Api;

use App\Http\Controllers\Controller;
use App\Models\Appointment;
use Carbon\Carbon;
use Illuminate\Http\Request;

class AppointmentController extends Controller
{

    public function myAppointment(Request $request){
       $patient = $request->patient_id;
       $openBookings = Appointment::where('status', 'confirmed')->where('patient_id', $patient)->whereDate('appointment_date', '=>', now())->get();
       $pendingBookings = Appointment::where('status','pending')->where('patient_id', $patient)->get();
       return response()->json([
        'open'=>$openBookings,
        'pending' =>  $pendingBookings->map(function ($booking){
            return [
                'appointment_id' => $booking->id,
                'service' => $booking->dentalservice->name ?? '',
                'clinic'=> $booking->clinic->name,
                'branch' => $booking->clinicbranch->name,
                'appointment_date' => $booking->appointment_date,
                'appointment_time'=>  Carbon::parse($booking->time_slot)->format('g:i a'),
                'dentist' => $booking->dentist->name ?? '',
                 
            ];
        })
    ]);
            
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
            'dental_service_id'=> $request->dental_service_id,
            'status' => 'pending',
        ]);

        return response()->json(['success' => 'Appointment Booked. Await for confirmation'], 200);
    }
}
