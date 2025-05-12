<?php

namespace App\Http\Controllers\Patient\Api;

use App\Http\Controllers\Controller;
use App\Models\SecondOpinion;
use Illuminate\Http\Request;

class SecondOpinionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $patient = $request->patient_id;
        $secondOpinions = SecondOpinion::where('patient_id', $patient)->orderBy('created_at', 'DESC')->get();
        return response()->json($secondOpinions);
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
        $data = [
            'patient_id' => $request->patient_id,
            'subject' => $request->subject, 
            'description' => $request->description, 
            'hasEstimate' => $request->hasEstimate,
            'status' => 'pending'
        ];

        if (SecondOpinion::create($data))

            return response()->json(['success' => 'We ve received your request. we will update is asap'], 200);
        return response()->json(['error' => 'Something went wrong'], 422);
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
