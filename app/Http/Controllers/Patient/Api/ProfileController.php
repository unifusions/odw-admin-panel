<?php

namespace App\Http\Controllers\Patient\Api;

use App\Http\Controllers\Controller;
use App\Models\Patient;
use Carbon\Carbon;
use Illuminate\Http\Request;

use function PHPUnit\Framework\isNull;

class ProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $patient_id = $request->patient_id;
        $patient = Patient::find($patient_id);
        return response()->json($patient);
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
    public function update(Request $request)
    {
        // return response()->json($request->image);
        $patient_id = $request->patient_id;
       
        $patient = Patient::find($patient_id);
        
        $patient->first_name = $request->first_name ?? $patient->first_name;
         
        $patient->middle_name = $request->middle_name ?? $patient->middle_name;
        
        $patient->last_name = $request->last_name ?? $patient->last_name;
        $patient->phone_number = $request->phone ?? $patient->phone_number;
        $patient->email = $request->email ?? $patient->email;
        // return response()->json($request->dob ? 'value' : 'blank');
        // $patient->dob = $request->dob ? Carbon::createFromFormat('m/d/Y', $request->dob)->format('Y-m-d') : $patient->dob;
       
        if ($request->hasFile('image')) {
          
            $path = $request->file('image')->store('uploads', 'public');
            $patient->avatar = $path;
            // return response()->json($path);
        }
        // return response()->json('ok');
      
        $patient->save();
        return response()->json(['patient' => $patient], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
