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
        return Inertia::render(
            'Admin/Services/Index',
            [
                'services' => DentalService::paginate(25)->through(function ($service) {
                    if ($service->image_path)
                        $service->image_path = Storage::disk('public')->url($service->image_path);
                    return $service;
                }),
            ]
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
        $image_path = '';
        if ($request->hasFile('image_file'))
            $image_path = $request->file('image_file')->store('uploads/services', 'public');
        $dentalService = DentalService::create([
            'name' =>  $request->name,
            'desc' => $request->desc,
            'cost' => $request->cost,
            'image_path' => $image_path,
            'avg_cost' => $request->avg_cost
        ]);

        return redirect()->back()->with(['message' => $dentalService->name . ' has been added successfully']);
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
        //
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
        $service->avg_cost = $inputs['avg_cost'] ?? $service->avg_cost;
        if ($request->hasFile('image_path'))
            $service->image_path = $request->file('image_path')->store('uploads/services', 'public');
        $service->save();
        $message = $service->name . ' has been updated successfully';
        return redirect()->back()->with(['message' => $message]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
