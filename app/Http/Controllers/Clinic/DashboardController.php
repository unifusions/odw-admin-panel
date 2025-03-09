<?php

namespace App\Http\Controllers\Clinic;

use App\Http\Controllers\Controller;
use App\Models\Admin\Clinic;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        
        // return Clinic::all();
        return Inertia::render(
            'Clinic/Dashboard',
            ['clinic' => Clinic::all()]
        );
    }
}
