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
                'id' => $branch->id, // Assuming your Branch model has an 'id'
                'name' => $branch->name, // Assuming your Branch model has a 'name'
                'services' => $branch->services,
            ]),
        ]);

        return response()->json($clinics);
    }
}
