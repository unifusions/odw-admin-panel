<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Appointment;
use App\Models\SecondOpinion;
use App\Models\User;
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

        $secondopinions = SecondOpinion::whereYear('created_at', Carbon::now()->year)
            ->whereMonth('created_at', Carbon::now()->month)->count();

        $previousSecondopinions = SecondOpinion::whereYear('created_at', $previousMonth->year)
            ->whereMonth('created_at', $previousMonth->month)->count();

            $patientRegistrationData = User::currentMonthRegistration();
           
        return Inertia::render(
            'Dashboard',
            [
                'appointmentcount' => $appointments,
                'previousAppointmentCount' => $previousAppointments,
                'socount' => $secondopinions,
                'previousSoCount' => $previousSecondopinions,
                'patient_labels' => $patientRegistrationData['labels'],
                'patient_datas' => $patientRegistrationData['data']
            ]
        );
    }
}
