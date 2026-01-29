<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Estimate;
use App\Models\SecondOpinion;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EstimateController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // dd( Estimate::with('dentalservice')->orderByDesc('created_at')->paginate(25));
        return Inertia::render(
            'Admin/Estimates/Index',
            [
                'estimates' => Estimate::with('user', 'patient', 'dentalservice','services','dentalcares', 'replies')->orderByDesc('created_at')->paginate(25),
                         'est_pending_count'=> Estimate::where('status', 'pending')->count(),
                  'est_review_count'=> Estimate::where('status', 'in_review')->count(),
                  'est_replied_count'=> Estimate::where('status', 'answered')->count(),
                                  'est_completed_count'=> Estimate::where('status', 'completed')->count(),

                ],

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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Estimate $estimate)
    {

        // dd($estimate->dentalservice);
        $estimate->load('patient', 'patient.user',
        'dentalservice', 'replies',
        'patient.insurances',  'services.dentalcare', 'dentalcares');
        
        return Inertia::render(
            'Admin/Estimates/Show',
            [
                'estimate' => $estimate,
                'category' => $estimate->dentalservice,
                'services'=>$estimate->services,
                'patient' => $estimate->patient,
                'user' => $estimate->patient?->user,
                'insurances' => $estimate->patient?->insurances,
                'dentalcares' => $estimate->dentalcares,
                'replied' => $estimate->replies ? true : false

            ]
        );
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

    public function updateStatus(Request $request, Estimate $estimate){
          $estimate->status = $request->status;
        $estimate->save();

        if ($request->status == "closed")
            // Mail::to($second_opinion->patient->user->email)->send(new SecondOpinionClosed($second_opinion->patient->first_name));
        $estimate->save();
        return redirect()->back()->with(['message' => 'Successfully updated the status']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
