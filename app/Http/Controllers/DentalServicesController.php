<?php

namespace App\Http\Controllers;

use App\Models\Admin\DentalService;
use Illuminate\Http\Request;

class DentalServicesController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return response()->json(DentalService::all()) ;
    }
}
