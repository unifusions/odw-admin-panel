<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Appointment;
use App\Models\AppointmentReschedule;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AppointmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        // $appointments = Appointment::when(
        //     $request->year && $request->month,
        //     fn($query) => $query->whereYear('appointment_date', $request->year)
        //         ->whereMonth('appointment_date', $request->month)
        //         // ->where(function ($query) {
        //         //     $query->where('status', 'confirmed')
        //         //         ->orWhere('status', 'rescheduled');
        //         // })

        // )->get()->map(fn($appointment) => [
        //     'id' => $appointment->id,
        //     'title' => $appointment->patient->first_name ?? '',
        //     'start' => "{$appointment->appointment_date}T{$appointment->time_slot}",
        //     // 'end' => Carbon::parse("{$appointment->appointment_date} {$appointment->time_slot}")
        //     //     ->addMinutes(30)->format('Y-m-d\TH:i:s'),
        //     'extendedProps' => [
        //         'full_name' => '',  // Uncomment if patient data is available
        //         'age' => '',
        //         'gender' => '',
        //         'location' => '',
        //         'services' => $appointment->dentalservices,
        //     ]
        // ]);



        // return Inertia::render('Admin/Appointments/Index', [
        //     'appointments' => $appointments,
        //     // 'pendingAppointments' => $pendingAppointments
        // ]);

        $year = $request->year ?? now()->year;
        $month = $request->month ?? now()->month;

        $appointments = Appointment::when(
            $request->year && $request->month,
            fn($query) => $query->whereYear('appointment_date', $year)
                ->whereMonth('appointment_date', $month)
        )->get()->map(fn($appointment) => [
                'id' => $appointment->id,
                'title' => $appointment->patient->first_name ?? '',
                'start' => "{$appointment->appointment_date}T{$appointment->time_slot}",

                'extendedProps' => [
                    'services' => $appointment->dentalservice,
                    'status' => $appointment->status,
                    'appointment_date' => $appointment->appointment_date,
                    'clinic' => $appointment->clinic,
                    'dentist' => $appointment->dentist,
                    'provider' => $appointment->appointable ? [
                        'id' => $appointment->appointable->id,
                        'type' => class_basename($appointment->appointable_type), // Dentist or Specialist
                        'name' => $appointment->appointable->name ?? '',
                    ] : 'no provider',
                ],
            ]);

        $pendingAppointments = Appointment::where('status', 'pending')->count();

        return Inertia::render('Admin/Appointments/Index', [
            'appointments' => Appointment::with(['patient', 'appointable', 'clinic', 'dentalservice'])->get(),
            'pendingAppointments' => $pendingAppointments,
            'activeYear' => $year,
            'activeMonth' => $month,
        ]);
    }

    public function pendingAppointment()
    {

        $appointments = Appointment::with('patient.user')->where('status', 'pending')->get()->map(fn($appointment) => [
            'id' => $appointment->id,
            'title' => $appointment->patient->first_name ?? '',
            'start' => "{$appointment->appointment_date}T{$appointment->time_slot}",
            'time_slot' => $appointment->time_slot,

            'services' => $appointment->dentalservice,
            'status' => $appointment->status,
            'appointment_date' => $appointment->appointment_date,
            'clinic' => $appointment->clinic,
            'dentist' => $appointment->dentist,
            'provider' => $appointment->appointable ? [
                'id' => $appointment->appointable->id,
                'type' => class_basename($appointment->appointable_type), // Dentist or Specialist
                'name' => $appointment->appointable->name ?? '',
            ] : 'no provider',
            'patient' => $appointment->patient
        ]);

        return Inertia::render('Admin/Appointments/PendingList', [
            'appointments' => $appointments
        ]);
    }

    public function confirmAppointment(Appointment $appointment)
    {
        // $appointment->status = 'confirmed';
        // $appointment->is_confirmed = true;
        // $appointment->save();
$appointment->confirm();
        return redirect()->back()->with(['success' => 'Appointment has been confirmed']);
    }

    public function cancelAppointment(Appointment $appointment)
    {
        $appointment->status = 'cancelled';
        $appointment->is_confirmed = true;
        $appointment->save();

        return redirect()->back()->with(['success' => 'Appointment has been cancelled']);
    }

    public function rescheduleAppointment(Request $request, Appointment $appointment)
    {

  
        AppointmentReschedule::create([
            'appointment_id' => $appointment->id,
            'appointment_date' => $appointment->appointment_date,
            'time_slot' => $appointment->time_slot,
            'rescheduled_by' => 'clinic',
            'user_id' => auth()->user()->id
        ]);
        $appointment->status = 'confirmed';
        $appointment->is_confirmed = true;
        $appointment->reschedule_count = $appointment->reschedule_count + 1;
        $appointment->appointment_date = $request->new_dt;
        $appointment->time_slot = $request->new_slot;
        $appointment->reschedule_requested_by = 'clinic';
$appointment->save();
                return redirect()->back()->with(['success' => 'Appointment has been rescheduled']);

    }
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}


// future funcitons

// $appointment->histories()->create([
//     'user_id' => auth()->id(),
//     'action' => 'created',
//     'actor_type' => auth()->user()->role, // or "patient" if patient self-booked
// ]);

// $appointment->update(['status' => 'confirmed']);

// $appointment->histories()->create([
//     'user_id' => auth()->id(),
//     'action' => 'confirmed',
//     'actor_type' => auth()->user()->role,
// ]);

// $appointment->update(['status' => 'cancelled']);

// $appointment->histories()->create([
//     'user_id' => auth()->id(),
//     'action' => 'cancelled',
//     'actor_type' => auth()->user()->role,
//     'remarks' => $request->remarks,
// ]);