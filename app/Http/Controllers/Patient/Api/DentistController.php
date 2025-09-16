<?php

namespace App\Http\Controllers\Patient\Api;

use App\Http\Controllers\Controller;
use App\Models\Admin\Clinic;
use App\Models\Admin\Dentist;
use App\Models\ClinicDentist;
use Illuminate\Http\Request;

class DentistController extends Controller
{
    public function dentistsByClinic(Request $request)
    {
        // $clinicId = $request->clinic_id;
        $clinicId = $request->clinic_id;

        // $ClinicDentists = ClinicDentist::with('dentists')->where('clinic_id', $clinicId)->get();
        
        $clinic = Clinic::find($clinicId);
        // dd($clinic->dentists);
        return $clinic->dentists->map(function ($ClinicDentist) {

            // dd($ClinicDentist->name);
            return [
                'id' => $ClinicDentist->pivot->id,
                'dentist' => $ClinicDentist
            ];  
        });
    }

    public function alldentists(){
        return Dentist::with('clinics')->get();
    }
}
