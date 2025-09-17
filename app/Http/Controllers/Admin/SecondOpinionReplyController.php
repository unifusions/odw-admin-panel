<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\SoReply;
use App\Models\SecondOpinion;
use Illuminate\Http\Request;

class SecondOpinionReplyController extends Controller
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
    public function store(Request $request, SecondOpinion $second_opinion)
    {

        if ($request->hasFile('opinion')) {
            $file = $request->file('opinion');
            $path = $file->store("uploads/second_opinions/{$second_opinion->id}/opinions");
            $soreply = SoReply::create([
                'second_opinion_id' => $second_opinion->id,
                'user_id' => auth()->user()->id,
                'reply_message' => $request->message,
                'path' => $path,
                'file_name' => $file->getClientOriginalName(),
                'size' => $file->getSize(),
                'file_type' =>  $file->extension(),
            ]);
            if ($soreply) {
                $second_opinion->status = "answered";
                $second_opinion->save();
            }
        }


        return redirect()->route('second-opinion.show', $second_opinion)->with(['message' => 'Opinion has been sent to the patient']);
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
