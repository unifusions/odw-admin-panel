<?php

namespace App\Http\Controllers\Clinic;

use App\Http\Controllers\Controller;
use App\Models\Admin\Clinic;
use App\Models\Appointment;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
          $previousMonth = Carbon::now()->subMonth();
         $appointments = Appointment::whereYear('appointment_date', Carbon::now()->year)
            ->whereMonth('appointment_date', Carbon::now()->month)->where('is_confirmed', true)
            ->count();
             $previousAppointments = Appointment::whereYear('appointment_date', $previousMonth->year)
            ->whereMonth('appointment_date', $previousMonth->month)
            ->count();
        return Inertia::render(
            'Clinic/Dashboard',
            [  'appointmentcount' => $appointments,
                'previousAppointmentCount' => $previousAppointments,
                'weeklyStats' => Appointment::weeklyStats(),
                ]
        );
    }
}
