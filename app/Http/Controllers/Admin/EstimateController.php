<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Estimate;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EstimateController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // dd( Estimate::with('dentalservice')->orderByDesc('created_at')->paginate(25));
        return Inertia::render(
            'Admin/Estimates/Index',
            ['estimates' => Estimate::with('user', 'patient', 'dentalservice')->orderByDesc('created_at')->paginate(25)]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Estimate $estimate)
    {

        // dd($estimate->dentalservice);
        $estimate->load('patient', 'patient.user', 'patient.insurances',  'services.dentalcare');
        
        return Inertia::render(
            'Admin/Estimates/Show',
            [
                'estimate' => $estimate,
                'category' => $estimate->dentalservice,
                'services'=>$estimate->services,
                'patient' => $estimate->patient,
                'user' => $estimate->patient?->user,
                'insurances' => $estimate->patient?->insurances
            ]
        );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
