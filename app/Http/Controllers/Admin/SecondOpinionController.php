<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Mail\SecondOpinionClosed;
use App\Models\SecondOpinion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class SecondOpinionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        return Inertia::render(
            'Admin/SecondOpinion/Index',
            [
                  'so_pending_count'=> SecondOpinion::where('status', 'pending')->count(),
                  'so_review_count'=> SecondOpinion::where('status', 'in_review')->count(),
                  'so_completed_count'=> SecondOpinion::where('status', 'completed')->count(),
                'secondopinions' => SecondOpinion::with('patient.user', 'dentalcares', 'replies')->orderBy('status')->paginate(25)]
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
    public function show(SecondOpinion $second_opinion)
    {

        // dd($second_opinion->patient()->with('user'));
        return Inertia::render(
            'Admin/SecondOpinion/Show',
            [
              
                'opinion' => $second_opinion->load(['patient', 'attachments','replies', 'dentalcares' ]),
                'replied' => $second_opinion->replies ? true : false

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

        return response()->json(['success']);
    }

    public function updateStatus(Request $request, SecondOpinion $second_opinion)
    {

        $second_opinion->status = $request->status;
        $second_opinion->save();

        if ($request->status == "closed")
            // Mail::to($second_opinion->patient->user->email)->send(new SecondOpinionClosed($second_opinion->patient->first_name));
        $second_opinion->save();
        return redirect()->back()->with(['message' => 'Successfully updated the status']);
    }

    public function markAsClosed(Request $request, SecondOpinion $second_opinion)
    {

        $second_opinion->status = "closed";
        $second_opinion->save();
        return redirect()->back()->with(['message' => 'Successfully marked as closed']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
