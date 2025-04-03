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

        return response()->json(Clinic::with('branches')->get()->toArray());
    }
}
