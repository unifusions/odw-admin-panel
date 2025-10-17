<?php

namespace App\Http\Controllers\Patient\Api;

use App\Http\Controllers\Controller;
use App\Models\Insurance;
use App\Models\InsuranceAttachement;
use Carbon\Carbon;
use Illuminate\Http\Request;

class InsuranceController extends Controller
{

    public function index(Request $request)
    {
        $patient_id = $request->patient_id;
        $insurance = Insurance::where('patient_id', $patient_id)->with('attachments')->get();
        return response()->json(['insurances' => $insurance]);
    }
    public function create() {}

    public function store(Request $request)
    {   
        // // return response()->json(['error', $request->mode]);

        // if ($request->hasFile('front_image')) {
        //     $frontPath = $request->file('front_image')->store('insurances', 'public');
        // }
    
        // if ($request->hasFile('back_image')) {
        //     $backPath = $request->file('back_image')->store('insurances', 'public');
        // }
    
        // return response()->json([
        //     'data' => $request->all(),
        //     // 'front_uploaded' => $request->hasFile('front_image'),
        //     // 'back_uploaded' => $request->hasFile('back_image'),
        // ]);
        
        
        try{
            $insurance = Insurance::create([
                'patient_id' => $request->patient_id,
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'relation' => $request->relation ,
                'address_line_1' => $request->address_line_1,
                'address_line_2' => $request->address_line_2,
                'address_line_3' => $request->address_line_3,
                // 'state_id' => $request->state_id,
                // 'city_id' => $request->city_id,
                // 'zip_code_id' => $request->zip_code_id,
                'mode' => $request->mode ,
                'insurance_provider' => $request->insurance_provider,
                'carrier' => $request->carrier,
                'plan_no' => $request->plan_no,
                'is_current' => $request->is_current,
                'status' => 'active',
                'state' => $request->state,
                'city' => $request->city,
                'zip_code' => $request->zip_code,
                'member_id' => $request->member_id,
                'dob' => $request->dob  
            ]);

            if($request->hasFile('front_image')){
                $path = $request->file('front_image')->store('uploads');
                InsuranceAttachement::create([
                    'insurance_id' => $insurance->id,
                    'path' => $path,
                    'file_name' => $request->file('front_image')->getClientOriginalName(),
                    'size' => $request->file('front_image')->getSize(),
                    'ext' =>  $request->file('front_image')->extension(),
                ]);
            }

            if ($request->hasFile('back_image')) {
                $path = $request->file('back_image')->store('uploads');
                InsuranceAttachement::create([
                    'insurance_id' => $insurance->id,
                    'path' => $path,
                    'file_name' => $request->file('back_image')->getClientOriginalName(),
                    'size' => $request->file('back_image')->getSize(),
                    'ext' =>  $request->file('back_image')->extension(),
                ]);
            }
    
            
        }
        catch (\Exception $e){
            return response()->json(['error', $e], 434);

        }
        

        if ($insurance) return response()->json(['success' => 'Insurance Added.'], 200);
        return response()->json(['error', "Something went wrong"], 433);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        
    }

    
    public function edit(string $id)
    {
    }

    public function update(Request $request, string $id)
    {
    
    }

    public function destroy(Request $request)
    {   
        $insurance = Insurance::find($request->insurance_id);
        $insurance->delete();
        return response()->json(['success' => 'Insurance has been deleted successfully']);
    }
}
