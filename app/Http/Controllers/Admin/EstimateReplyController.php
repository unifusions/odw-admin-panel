<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\EstimateReply;
use App\Models\Estimate;
use Illuminate\Http\Request;

class EstimateReplyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function store(Request $request, Estimate $estimate)
    {

        if ($request->hasFile('estimation')) {
            $file = $request->file('estimation');
            $path = $file->store("uploads/estimates/{$estimate->id}/estimations");
            $soreply = EstimateReply::create([
                'estimate_id' => $estimate->id,
                'user_id' => auth()->user()->id,
                'reply_message' => $request->message,
                'path' => $path,
                'file_name' => $file->getClientOriginalName(),
                'size' => $file->getSize(),
                'file_type' =>  $file->extension(),
            ]);
            if ($soreply) {
                $estimate->status = "answered";
                $estimate->save();
            }
        }

        return redirect()->route('estimates.show', parameters: $estimate)->with(["message" => "Estimate has been sent to Patient"]);
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
