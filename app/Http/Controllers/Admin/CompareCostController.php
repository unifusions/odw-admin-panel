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
                'categories' => DentalService::all()->map(function ($item) {
                    return [
                        'value' => $item->id,
                        'label' => $item->name . " [" . $item->medical_name . "]"
                    ];
                })
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/CompareCosts/Create', [
            'categories' => DentalService::all()->map(function ($item) {
                return [
                    'value' => $item->id,
                    'label' => $item->name
                ];
            })
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $dentalCare = DentalCare::create([
            'code' => $request->code,
            'name' => $request->name,
            'medical_name' => $request->medical_name,
            'national_cost' => $request->national_cost,
            'odw_cost' => $request->odw_cost
        ]);
        if ($request->categories) {
            $serviceIds = collect($request->categories)->map(function ($item) {
                return is_array($item) ? $item['value'] : $item;
            })->filter()->unique()->toArray();

            $dentalCare->categories()->sync($serviceIds);
        }

        return redirect()->route('compare-costs.index')->with(['message' => 'Service has been added successfully']);
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
    public function edit(DentalCare $compare_cost)
    {
        return Inertia::render('Admin/CompareCosts/Edit', [
            'care' => $compare_cost,
            'selectedCategories' => $compare_cost->categories->map(function ($item) {
                return [
                    'value' => $item->id,
                    'label' => $item->name
                ];
            }),
            'categories' => DentalService::all()->map(function ($item) {
                return [
                    'value' => $item->id,
                    'label' => $item->name
                ];
            })
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, DentalCare $compare_cost)
    {
        // dd($request->input());

        $serviceIds = collect($request->categories)->map(function ($item) {
            return is_array($item) ? $item['value'] : $item;
        })->filter()->unique()->toArray();

        $compare_cost->categories()->sync($serviceIds);

        return redirect()->route('compare-costs.index')->with(['message' => 'Data updated successfully']);
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
