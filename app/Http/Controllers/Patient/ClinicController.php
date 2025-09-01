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
        // $clinics = Clinic::latest()->map(fn($clinic) => [
        //     'id' => $clinic->id,
        //     "name" => $clinic->name,
        //     "logo" => $clinic->logo,

        // ]);

        
        $clinics = Clinic::latest()->get()->map(
            fn($clinic) =>
            [
                'id' => $clinic->id,
                'name' => $clinic->name,
                'logo' => $clinic->logo,
                'desc' => $clinic->desc,
                'logo_url' => $clinic->logo_url,
                'address_line_1' => $clinic->address_line_1,
                'address_line_2' => $clinic->address_line_2,
                'zip_code' => $clinic->zip_code,
                'latitude' => $clinic->latitude,
                'longitude' => $clinic->longitude,
                'services' => $clinic->services,
                'schedules' => $clinic->schedules,
                'galleries' => $clinic->galleries,
                'dentists' => $clinic->dentists
            ]
        );
        // dd($clinics);
        return response()->json($clinics);
    }
}
