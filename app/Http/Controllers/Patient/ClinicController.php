<?php

namespace App\Http\Controllers\Patient;

use App\Http\Controllers\Controller;
use App\Models\Admin\Clinic;
use Illuminate\Http\Request;

class ClinicController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $clinics = Clinic::all()->map(fn($clinic) => [
            'id' => $clinic->id,
            "name" => $clinic->name,
            "logo"=> $clinic->logo,
            'branches'=> $clinic->branches,
        ]);

        return response()->json($clinics);
    }
}
