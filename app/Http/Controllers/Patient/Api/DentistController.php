<?php

namespace App\Http\Controllers\Patient\Api;

use App\Http\Controllers\Controller;
use App\Models\ClinicDentist;
use Illuminate\Http\Request;

class DentistController extends Controller
{
    public function dentistsByClinic(Request $request)
    {
        // $clinicId = $request->clinic_id;
        $clinicId = $request->clinic_id;

        $ClinicDentists = ClinicDentist::with('dentist')->where('clinic_id', $clinicId)->get();
        return $ClinicDentists->map(function ($ClinicDentist) {

            return [
                'id' => $ClinicDentist->id,
                'dentist' => $ClinicDentist->dentist
            ];  
        });
    }
}
