<?php

namespace App\Http\Controllers\Patient;

use App\Http\Controllers\Controller;
use App\Models\Admin\Clinic;
use App\Models\Admin\ClinicBranch;
use App\Models\Appointment;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AppointmentController extends Controller
{
    public function index()
    {



        return Inertia::render('Patient/Appointment/Index', [
            'branches' => ClinicBranch::with('clinic')->paginate(9)
        ]);
    }

    public function clinicView(Request $request, ClinicBranch $branch)
    {

     
        return Inertia::render('Patient/Appointment/BookAppointment', [
            'branch' => $branch,
            'slots' => $this->getAvailableSlots($request->appointment_date, $branch)
        ]);
    }

    public function getAvailableSlots($appointment_date, ClinicBranch $branch)
    {
        
       
        $date = $appointment_date;
        $clinicId = $branch->clinic_id;
        $doctorId = $doctor_id ?? ''; // Can be null

        // Get clinic branch timings
       

        $openingTime = Carbon::parse($branch->opening_time);
        $closingTime = Carbon::parse($branch->closing_time);
        $slots = [];

        while ($openingTime < $closingTime) {
            $slot = $openingTime->format('H:i');

            // Check if slot is booked for a doctor, or if the appointment is without a doctor assigned
            $isBooked = Appointment::where('appointment_date', $date)
                ->where('time_slot', $slot)
                ->when($doctorId, function ($query) use ($doctorId) {
                    $query->where('clinic_dentist_id', $doctorId);
                }, function ($query) {
                    $query->whereNull('clinic_dentist_id'); // Check for unassigned slots
                })
                ->exists();

            if (!$isBooked) {
                $slots[] = $slot;
            }

            $openingTime->addMinutes(30);
        }

        return $slots;
    }

    public function bookAppointment(Request $request, ClinicBranch $branch)
    {
      
        // Check if slot is already booked
        $isBooked = Appointment::where('appointment_date', $request->appointment_date)
            ->where('clinic_dentist_id', $request->doctor_id)
            ->where('time_slot', $request->time_slot)
            ->exists();

        if ($isBooked) {
            return response()->json(['error' => 'This time slot is no longer available.'], 422);
        }

        // Create Appointment
        $appointment = Appointment::create([
            'clinic_id' => $branch->clinic_id,
            'clinic_branch_id' => $branch->id,
            'clinic_dentist_id' => $request->doctor_id ?? null,
            'patient_id' => $request->user_id,
            'appointment_date' => $request->appointment_date,
            'time_slot' => $request->selectedSlot,
            'status' => 'pending',
        ]);

        return redirect()->route('patient.appointments.index')->with([
            'message' => 'Appointment has bee booked. Wait for confirmation'
        ]);
        // return response()->json(['message' => 'Appointment booked successfully!', 'appointment' => $appointment]);
    }
}
