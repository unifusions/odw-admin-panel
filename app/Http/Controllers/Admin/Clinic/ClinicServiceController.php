<?php

namespace App\Http\Controllers\Admin\Clinic;

use App\Http\Controllers\Controller;
use App\Models\Admin\Clinic;
use App\Models\Admin\ClinicDentalService;
use App\Models\Admin\DentalService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClinicServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Clinic $clinic)
    {

        $clinic->load('branches.dentalservices');
        $services = ClinicDentalService::whereHas('branches', function ($query) use ($clinic) {
            $query->where('clinic_id', $clinic->id);
        })
            ->with(['dentalservice', 'branches'])
            ->get()
            ->groupBy('dental_service_id') // Group by unique service ID
            ->map(function ($serviceGroup) {
                // dd($serviceGroup->pluck('branches.name'));
                return [
                    'service' => $serviceGroup->first()->dentalservice->name, 
                    'image_path' =>  $serviceGroup->first()->dentalservice->image_path, 
                    // Get service name
                    'branches' => $serviceGroup->pluck('branches.name')->unique()->toArray() // Get unique branch names
                ];
            });
            // dd($services);
        // $services->load('dentalservice', 'branches');
        return Inertia::render('Admin/Clinics/ServiceList', [
            'clinic' => $clinic,
            'dentalservices' => $services
        ]);
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
    public function store(Request $request, Clinic $clinic)
    {
        foreach ($request->services as $service) {
            ClinicDentalService::create([
                'clinic_id' => $clinic->id,
                'clinic_branch_id' => $request->branch_id,
                'dental_service_id' => $service['value']
            ]);
        }
        return redirect()->back()->with(['message' => 'Services added successfully']);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
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
