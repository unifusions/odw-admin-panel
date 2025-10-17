<?php

namespace App\Http\Controllers\Patient\Api;

use App\Http\Controllers\Controller;
use App\Models\Admin\DentalService;
use App\Models\DentalCare;
use App\Models\Estimate;
use App\Models\EstimateService;
use Illuminate\Http\Request;

class EstimateController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        // $query = DentalCare::query();

        // if ($search = $request->input('search')) {
        //     $query->where('name', 'like', "%{$search}%")
        //           ->orWhere('medical_name', 'like', "%{$search}%");
        // }

        $categories = DentalService::all();
        $DentalCare = DentalCare::with('categories')->get();
        // return $query->paginate(25); 
        return response()->json([
            'dentalCares' => $DentalCare,
            'categories' => $categories
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
    public function store(Request $request)
    {

        $estimation = Estimate::create([
            'patient_id' => $request->patient_id,
            'user_id' => $request->user_id,
            'dental_service_id' => $request->dental_service_id,
            'description' => $request->description,
            'insurance_id' => $request->insurance_id,
            'is_quick' => $request->is_quick ?? false,
            'status' => 'pending'
        ]);

        if (isset($request->dentalcares))
            foreach ($request->dentalcares as $d) {
                EstimateService::create([
                    'estimate_id' => $estimation->id,
                    'dental_care_id' => $d
                ]);
            }
        return response()->json(['success' => 'Estimation Requested']);
        // $category = json_decode( $request->category);
        // $dentalcares = json_decode($request->selectedItems);
        // $problem = $request->userRequest;
        // $insurance = json_decode($request->insurance);
        // dd($dentalcares);
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

    public function myEstimate(Request $request)
    {
        $patient = $request->patient_id;
        $estimates = Estimate::with('replies')->where('patient_id', $patient)->orderBy('created_at', 'DESC')->get();
        return response()->json($estimates);
    }
}
