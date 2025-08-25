<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\DentalService;
use App\Models\Category;
use App\Models\DentalCare;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CompareCostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $dentalCare = DentalCare::with('dentalservice', 'categories')->paginate(25);
       
         
        return Inertia::render(
            'Admin/CompareCosts/Index',
            [
                'dentalCare' => $dentalCare,
                // 'categories' => DentalService::all()->map(function ($item) {
                //     return [
                //         'value' => $item->id,
                //         'label' => $item->name . " [" . $item->medical_name."]" 
                //     ];
                // })
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
        
        $dentalCare = DentalCare::create([
            'code' => $request->code,
            'name' => $request->name,
            'dental_service_id' => $request->category_id,
            'national_cost' => $request->national_cost,
            'odw_cost' => $request->odw_cost
        ]);

        return redirect()->back()->with(['message' => 'Service has been added successfully']);
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
    public function destroy(DentalCare $compare_cost)
    {
        $compare_cost->delete();
        return redirect()->back()->with(['message' => 'Service has been deleted successfully']);
    }
}
