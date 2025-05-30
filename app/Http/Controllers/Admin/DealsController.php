<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\Deal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class DealsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

      

        return Inertia::render(
            'Admin/Deals/Index',
            ['deals' => Deal::orderBy('end_date')->paginate(25)->through(function ($deal) {
                    if ($deal->image)
                        $deal->image = Storage::disk('public')->url($deal->image);
                    return $deal;
                })]
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
        // dd($request->alls());
        $image_path = '';
        if ($request->hasFile('image'))
            $image_path = $request->file('image')->store('uploads/deals', 'public');
        $deal = Deal::create([
            'title' => $request->title,
            'description' => $request->description,
            'image' =>  $image_path,
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
            'is_active' => true

        ]);
        return redirect()->back()->with(['message' => 'Deal was added']);
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
