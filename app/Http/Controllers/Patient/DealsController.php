<?php

namespace App\Http\Controllers\Patient;

use App\Http\Controllers\Controller;
use App\Models\Admin\Deal;
use Illuminate\Http\Request;

class DealsController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $deals = Deal::where('is_active', 1)->get();
        return response()->json($deals);
    }
}
