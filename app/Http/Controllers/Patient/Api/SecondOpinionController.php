<?php

namespace App\Http\Controllers\Patient\Api;

use App\Http\Controllers\Controller;
use App\Models\SecondOpinion;
use App\Models\SoAttachements;
use App\Models\SoDentalCare;
use App\Notifications\SecondOpinionNotification;
use Illuminate\Http\Request;

class SecondOpinionController extends Controller
{
    
    public function index(Request $request)
    {
        $patient = $request->patient_id;
        $secondOpinions = SecondOpinion::with(['attachments','replies'])->where('patient_id', $patient)->orderBy('created_at', 'DESC')->get();
        return response()->json($secondOpinions);
    }

    
    public function create() {}
 
    public function store(Request $request)
    {
      
        try {
            $so = SecondOpinion::create([
                'patient_id' => $request->patient_id,
                'subject' => $request->subject,
                'description' => $request->description,
                'hasEstimate' => $request->hasEstimate ?? false,
                'last_visit' => $request->last_visit,
                'status' => 'pending',
                'is_quick' => (bool) $request->is_quick ?? false,

            ]);

            if (isset($request->dental_cares)) {
                foreach ($request->dental_cares as $d) {
                    SoDentalCare::create([
                        'second_opinion_id' => $so->id,
                        'dental_care_id' => $d
                    ]);
                }
            }

            if ($request->hasFile('attachments')) {

                foreach ($request->file('attachments') as $file) {
                    // $filename =  $file->getClientOriginalName();

                    $path = $file->store("uploads/second_opinions/{$so->id}/attachments");

                    SoAttachements::create([
                        'second_opinion_id' => $so->id,

                        'path' => $path,
                        'file_name' => $file->getClientOriginalName(),
                        'size' => $file->getSize(),
                        'file_type' =>  $file->extension(),
                    ]);
                }
            }
            $so->patient->user->notify(new SecondOpinionNotification($so, 'requested'));
            return response()->json(['success' => 'Weve received your request. we will update is asap'], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e], 422);
        }
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
