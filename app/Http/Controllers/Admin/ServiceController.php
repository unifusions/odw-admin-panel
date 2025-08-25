<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\DentalService;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // dd(DentalService::paginate(25))
        $services = DentalService::orderBy('display_order', 'ASC')->paginate(25)->through(function ($service) {

            if ($service->image_path)
                $service->image_path = Storage::disk('public')->url($service->image_path);
            if ($service->header_image_path)
                $service->header_image_path =  Storage::disk('public')->url($service->header_image_path);
            return $service;
        });


        return Inertia::render(
            'Admin/Services/Index',
            [
                'services' => $services
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Services/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $image_path = '';
        $header_image_path = '';
        if ($request->hasFile('image_file'))
            $image_path = $request->file('image_file')->store('uploads/services', 'public');
        if ($request->hasFile('header_image_file'))
            $header_image_path = $request->file('header_image_file')->store('uploads/services', 'public');
        $dentalService = DentalService::create([
            'name' =>  $request->name,
            'desc' => $request->desc,
            'cost' => $request->cost,
            'image_path' => $image_path,
            'avg_cost' => $request->avg_cost,
            'medical_name' => $request->medical_name,
            'max_cost' => $request->max_cost,
            'max_avg_cost' => $request->max_avg_cost,
            'display_order' => $request->display_order,
            'header_image_path' => $header_image_path
        ]);
        $message = "{$dentalService->name} has been created successfully";
        return redirect()->route('services.index')->with(['message' => $message]);
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
    public function edit(DentalService $service)
    {
        return Inertia::render(
            'Admin/Services/Edit',
            ['service' => $service]
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, DentalService $service)
    {

        $inputs = $request->input('data');
        // dd();
        $service->name = $inputs['name'] ?? $service->name;
        $service->desc = $inputs['desc'] ?? $service->desc;
        $service->cost = $inputs['cost'] ?? $service->cost;

        $service->medical_name = $inputs['medical_name'] ?? $request->medical_name;
        $service->max_cost = $inputs['max_cost']  ?? $request->max_cost;
        $service->max_avg_cost = $inputs['max_avg_cost']  ?? $request->max_avg_cost;
        $service->display_order = $inputs['display_order']  ?? $request->display_order;

        $service->avg_cost = $inputs['avg_cost'] ?? $service->avg_cost;
        if ($request->hasFile('image_path'))
            $service->image_path = $request->file('image_path')->store('uploads/services', 'public');
        $service->save();
        $message = $service->name . ' has been updated successfully';
        return redirect()->route('services.index')->with(['message' => $message]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DentalService $service)
    {
        $service->delete();
        $message = "Deleted successfully";
        return redirect()->route('services.index')->with(['message' => $message]);
    }
}
