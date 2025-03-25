<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Appointment;
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
        $appointments = Appointment::when(
            $request->year && $request->month,
            fn($query) => $query->whereYear('appointment_date', $request->year)
                ->whereMonth('appointment_date', $request->month)
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

        return Inertia::render('Admin/Appointments/Index', [
            'appointments' => $appointments,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
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
