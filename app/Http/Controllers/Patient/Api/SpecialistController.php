<?php

namespace App\Http\Controllers\Patient\Api;

use App\Http\Controllers\Controller;
use App\Models\Admin\Specialist;
use Illuminate\Http\Request;

class SpecialistController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return Specialist::with('clinics', 'services')->get();
    }
}
