<?php

namespace App\Http\Controllers;

use App\Models\Admin\City;
use Illuminate\Http\Request;

class CitiesController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, $state)
    {
        return response()->json(City::where('state_id', $state)->get());
        
    }
}
