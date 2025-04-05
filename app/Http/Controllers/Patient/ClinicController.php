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
            "logo" => $clinic->logo,
            'branches' => $clinic->branches->map(fn($branch) => [
                'id' => $branch->id, 
                'name' => $branch->name, 
                'address_line_1' => $branch->address_line_1,
                'address_line_2' => $branch->address_line_2,
                
                'services' => $branch->services,
            ]),
        ]);

        return response()->json($clinics);
    }
}
