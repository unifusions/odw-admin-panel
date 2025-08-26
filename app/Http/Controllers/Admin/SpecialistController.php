<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\Clinic;
use App\Models\Admin\DentalService;
use App\Models\Admin\Specialist;
use App\Models\SpecialistClinic;
use App\Models\SpecialistService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SpecialistController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render(
            'Admin/Specialists/Index',
            [
                'specialists' => Specialist::with('clinics', 'services')->paginate(25)
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render(
            'Admin/Specialists/Create',
            [
                'clinics' => Clinic::all()->map(function ($item) {
                    return [
                        'value' => $item->id,
                        'label' => $item->name
                    ];
                }),
                'services' => DentalService::all()->map(function ($item) {
                    return [
                        'value' => $item->id,
                        'label' => $item->name
                    ];
                })
            ]
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $photo = false;
       
        if ($request->hasFile('photo'))
            $photo = $request->file('photo')->store('uploads/specialists', 'public');

        $specialist = Specialist::create([
            'name' => $request->name,
            'practise_from' => $request->practise_from,
            'phone' => $request->phone,
            'email' => $request->email,
            'photo' => $photo ?? ''
        ]);

        $clinicIds = collect($request->clinics)->map(function ($item) {
            return is_array($item) ? $item['value'] : $item;
        })->filter()->unique()->toArray();

        $specialist->clinics()->sync($clinicIds);



        $serviceIds = collect($request->services)->map(function ($item) {
            return is_array($item) ? $item['value'] : $item;
        })->filter()->unique()->toArray();

        $specialist->services()->sync($serviceIds);



        return redirect()->route('specialists.index')->with(['message' => 'Specialists created successfully']);
       
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
    public function edit(Specialist $specialist)
    {
       

        return Inertia::render(
            'Admin/Specialists/Edit',
            [
                'specialist' => $specialist,
                'selectedClinic' => $specialist->clinics->map(function ($item) {
                    return [
                        'value' => $item->id,
                        'label' => $item->name
                    ];
                }),
                'selectedServices' => $specialist->services->map(function ($item) {
                    return [
                        'value' => $item->id,
                        'label' => $item->name
                    ];
                }),
                'clinics' => Clinic::all()->map(function ($item) {
                    return [
                        'value' => $item->id,
                        'label' => $item->name
                    ];
                }),
                'services' => DentalService::all()->map(function ($item) {
                    return [
                        'value' => $item->id,
                        'label' => $item->name
                    ];
                })

            ]
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Specialist $specialist)
    {
        $inputs = $request->input('data');
 
        $specialist->name =  $inputs['name'] ?? $specialist->name;
        $specialist->practise_from =  $inputs['practise_from'] ?? $specialist->practise_from;
        $specialist->phone =  $inputs['phone'] ?? $specialist->phone;
        $specialist->email =  $inputs['email'] ?? $specialist->email;
        $specialist->photo =  $inputs['photo'] ?? $specialist->photo;

        if ($request->hasFile('photo'))
            $specialist->photo = $request->file('photo')->store('uploads/specialists', 'public');

        $clinicIds = collect($inputs['clinics'])->map(function ($item) {
            return is_array($item) ? $item['value'] : $item;
        })->filter()->unique()->toArray();

        $specialist->clinics()->sync($clinicIds);

        $serviceIds = collect($inputs['services'])->map(function ($item) {
            return is_array($item) ? $item['value'] : $item;
        })->filter()->unique()->toArray();

        $specialist->services()->sync($serviceIds);

        $specialist->save();
        return redirect()->route('specialists.index')->with(['message' => 'Specialists updated successfully']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
