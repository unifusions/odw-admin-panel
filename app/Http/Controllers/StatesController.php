<?php

namespace App\Http\Controllers;

use App\Models\Admin\State;
use Illuminate\Http\Request;

class StatesController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return response()->json(State::all()) ;
    }
}
