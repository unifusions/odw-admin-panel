<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Device;
use App\Models\Patient;
use App\Notifications\TestPushNotification;
use Illuminate\Http\Request;
use Inertia\Inertia;
use NotificationChannels\Apn\ApnMessage;

class PatientsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render(
            'Admin/Patients/Index',
            ['patients' => Patient::paginate(25)]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Patients/PatientProfile');
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
    public function show(Patient $patient)
    {
        $patient->load('user', 'appointments.appointable', 'estimates', 'secondopinions','insurances');
        return Inertia::render('Admin/Patients/Show', ['patient' => $patient]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return Inertia::render('Admin/Patients/PatientProfile');
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

    public function getDevices(Patient $patient){
        return Inertia::render('Admin/Patients/PushDevices', ['patient'=> $patient, 'devices' => $patient->user->devices ]);
    }

    public function pushNotifications(Request $request, Patient $patient, Device $device){
        // dd($device);
       try {
        // This triggers the toApn() method in your Notification class
        $device->notify(new TestPushNotification());
        
        return back()->with('message', 'Notification sent successfully!');
    } catch (\Exception $e) {
        return back()->with('error', 'Failed to send: ' . $e->getMessage());
    }
    }
}
