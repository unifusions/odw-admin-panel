<?php

namespace App\Http\Controllers\Patient;

use App\Http\Controllers\Controller;
use App\Models\Admin\DentalService;
use Illuminate\Http\Request;

class DentalServiceController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return response()->json(DentalService::orderBy('display_order', 'ASC')->get());
        
    }
}
