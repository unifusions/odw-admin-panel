<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\Clinic;
use App\Models\Admin\DentalService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DentistController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/Dentists/Index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        $data = [
            'clinics' => Clinic::all()->map(function ($item){
                return [
                    'value' => $item->id,
                    'label' => $item->name
                ];
            }),
            'services' => DentalService::all()->map(function($item){
                return [
                    'value' => $item->id,
                    'label' => $item->name
                ];
            })
        ];
        
        return response()->json($data);

        // return inertia('',$data) ;
        // return redirect()->back()->with($data);
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
