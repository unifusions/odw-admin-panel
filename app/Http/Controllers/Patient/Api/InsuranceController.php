<?php

namespace App\Http\Controllers\Patient\Api;

use App\Http\Controllers\Controller;
use App\Models\Insurance;
use Illuminate\Http\Request;

class InsuranceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $patient_id = $request->patient_id;
        $insurance = Insurance::find($patient_id);
        return response()->json($insurance);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create() {}

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $insurance = Insurance::create([
            'patient_id' => $request->patient_id,
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'relation' => $request->relation,
            'address_line_1' => $request->address_line_1,
            'address_line_2' => $request->address_line_2,
            'address_line_3' => $request->address_line_3,
            'state_id' => $request->state_id,
            'city_id' => $request->city_id,
            'zip_code_id' => $request->zip_code_id,
            'mode' => $request->mode,
            'insurance_provider' => $request->insurance_provider,
            'carrier' => $request->carrier,
            'plan_no' => $request->plan_no,
            'is_current' => $request->is_current,
            'status' => 'active'
        ]);

        if ($insurance) return response()->json(['success' => 'Insurance Added.'], 200);
        else return response()->json(['error', "Something went wrong"], 433);
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
