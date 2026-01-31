<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Mail\SecondOpinionReplied;
use App\Models\Admin\SoReply;
use App\Models\SecondOpinion;
use App\Services\FcmNotificationService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class SecondOpinionReplyController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    // public function __construct(private FcmNotificationService $fcm)
    // {
    // }

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
                'file_type' => $file->extension(),
            ]);
            if ($soreply) {
                $second_opinion->status = "answered";
                 $soreply->isReplied();

                $second_opinion->save();
            }
        }

        if (!empty($second_opinion->patient?->email)) {
            Mail::to($second_opinion->patient->email)->send(new SecondOpinionReplied($second_opinion->patient->first_name));
        }
       
        // $ok = $this->fcm->send(
        //     $second_opinion->patient->user->fcm_token,
        //     'Your Second Opinion is Ready',
        //     'Review your personalized feedback from our dental team.',
        //     ['type' => 'so-alert']
        // );


        return redirect()->route('second-opinion.show', $second_opinion)->with(['message' => 'Opinion has been sent to the patient']);
    }

    
    public function show(string $id)
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

     
    public function update(Request $request, string $id)
    {
        
    }

     
    public function destroy(string $id)
    {
        
    }
}
