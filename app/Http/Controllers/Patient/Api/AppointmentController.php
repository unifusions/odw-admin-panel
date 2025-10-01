<?php

namespace App\Http\Controllers\Patient\Api;

use App\Http\Controllers\Controller;
use App\Models\Appointment;
use Carbon\Carbon;
use Illuminate\Http\Request;

class AppointmentController extends Controller
{

    public function myAppointment(Request $request)
    {
        $patient = $request->patient_id;
        $openBookings = Appointment::where('status', 'confirmed')->where('patient_id', $patient)->whereDate('appointment_date', '>', now())->orderBy('appointment_date', 'asc')->get();
        $pendingBookings = Appointment::where('status', 'pending')->where('patient_id', $patient)->whereDate('appointment_date', '>', now())->orderBy('appointment_date', 'asc')->get();
        return response()->json([
            'open' => $openBookings->map(function ($booking) {
                return [
                    'appointment_id' => $booking->id,
                    'service' => $booking->dentalservice->name ?? '',
                    'clinic' => $booking->clinic->name,
                    // 'branch' => $booking->clinicbranch->name,
                    'appointment_date' => $booking->appointment_date,
                    'appointment_time' =>  Carbon::parse($booking->time_slot)->format('g:i a'),
                    'dentist' => $booking->dentist,
                    'provider' => $booking->appointable ? [
                        'id' => $booking->appointable->id,
                        'type' => class_basename($booking->appointable_type), // Dentist or Specialist
                        'name' => $appointment->appointable->name ?? '',
                    ] : 'no provider',
                ];
            }),
            'pending' =>  $pendingBookings->map(function ($booking) {
                // dd($booking->dentalservice);
                return [
                    'appointment_id' => $booking->id,
                    'service' => $booking->dentalservice,
                    'clinic' => $booking->clinic->name,
                    // 'branch' => $booking->clinicbranch->name,
                    'appointment_date' => $booking->appointment_date,
                    'appointment_time' =>  Carbon::parse($booking->time_slot)->format('g:i a'),
                    'dentist' => $booking->dentist,
                    'provider' => $booking->appointable ? [
                        'id' => $booking->appointable->id,
                        'type' => class_basename($booking->appointable_type), // Dentist or Specialist
                        'name' => $booking->appointable->name ?? '',
                    ] : 'no provider',

                ];
            })
        ]);
    }
    public function bookAppointment(Request $request)
    {

        // // Check if slot is already booked
        // $isBooked = Appointment::where('appointment_date', $request->appointment_date)

        //     ->where('time_slot', $request->time_slot)
        //     ->exists();

        // if ($isBooked) {
        //     return response()->json(['error' => 'This time slot is no longer available.'], 422);
        // }

        // Create Appointment
        $appointment = Appointment::create([
            // 'clinic_id' => $request->clinic_id,

            // 'clinic_dentist_id' => $request->clinic_dentist_id ?? null,
            // 'patient_id' => $request->patient_id,
            // 'appointment_date' => $request->appointment_date,
            // 'time_slot' => $request->time_slot,
            // 'dental_service_id' => $request->dental_service_id,
            // 'status' => 'pending',

            'clinic_id'        => $request->clinic_id,
            'patient_id'       => $request->patient_id,
            'appointment_date' => $request->appointment_date,
            'time_slot'        => $request->time_slot,
            'dental_service_id'=> $request->dental_service_id,
            'status'           => 'pending',
            'appointable_id'   => $request->appointable_id,   // <-- dynamic
            'appointable_type' => "App\Models\Admin\{$request->appointable_type}" , // Dentist::class or Specialist::class

        ]);

        return response()->json(['success' => 'Appointment Booked. Await for confirmation'], 200);
    }
}
