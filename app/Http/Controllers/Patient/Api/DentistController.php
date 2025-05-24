<?php

namespace App\Http\Controllers\Patient\Api;

use App\Http\Controllers\Controller;
use App\Models\ClinicDentist;
use Illuminate\Http\Request;

class DentistController extends Controller
{
    public function dentistsByClinicBranch(Request $request)
    {
        // $clinicId = $request->clinic_id;
        $branchId = $request->clinic_branch_id;

        $ClinicDentists = ClinicDentist::with('dentist')->where('clinic_branch_id', $branchId)->get();
        return $ClinicDentists->map(function ($ClinicDentist) {
            return $ClinicDentist->dentist;
        });
    }
}
