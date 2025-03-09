<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\ClinicBranch;
use Illuminate\Http\Request;

class ClinicsBranchesListController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, $clinic)
    {
        // dd($clinic);
        return response()->json(
            ClinicBranch::where('clinic_id', $clinic)->get()
        );
    }
}
