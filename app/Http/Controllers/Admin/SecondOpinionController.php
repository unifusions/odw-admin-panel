<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SecondOpinion;
use Illuminate\Http\Request;
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
            ['secondopinions' => SecondOpinion::with('patient.user')->orderBy('status')->paginate(25)]
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
                'secondopinion' => $second_opinion->load('patient.user'),
              
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

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
