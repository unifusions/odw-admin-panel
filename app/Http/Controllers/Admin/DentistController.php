<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\Clinic;
use App\Models\Admin\DentalService;
use App\Models\Admin\Dentist;
use App\Models\ClinicDentist;
use App\Models\DentistService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class DentistController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // dd(Dentist::with('clinic')->paginate(25));
        return Inertia::render(
            'Admin/Dentists/Index',
            ['alldentists' => Dentist::with('clinics',  'services')->paginate(25)]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        return Inertia::render(
            'Admin/Dentists/Create',
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
            $photo = $request->file('photo')->store('uploads/dentists', 'public');

        $dentist = Dentist::create([
            'name' => $request->name,
            'practise_from' => $request->practise_from,
            'phone' => $request->phone,
            'email' => $request->email,
            'photo' => $photo ?? ''
        ]);

        $clinicIds = collect($request->clinics)->map(function ($item) {
            return is_array($item) ? $item['value'] : $item;
        })->filter()->unique()->toArray();

        $dentist->clinics()->sync($clinicIds);



        $serviceIds = collect($request->services)->map(function ($item) {
            return is_array($item) ? $item['value'] : $item;
        })->filter()->unique()->toArray();

        $dentist->services()->sync($serviceIds);



        return redirect()->route('dentists.index')->with(['message' => 'Dentist was added']);
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
    public function edit(Dentist $dentist)
    {



        return Inertia::render(
            'Admin/Dentists/Edit',
            [
                'dentist' => $dentist,
                'selectedClinics' => $dentist->clinics->map(function ($item) {
                    return [
                        'value' => $item->id,
                        'label' => $item->name
                    ];
                }),
                'selectedServices' => $dentist->services->map(function ($item) {
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
    public function update(Request $request, Dentist $dentist)
    {

        $inputs = $request->input('data');

        $dentist->name =  $inputs['name'] ?? $dentist->name;
        $dentist->practise_from =  $inputs['practise_from'] ?? $dentist->practise_from;
        $dentist->phone =  $inputs['phone'] ?? $dentist->phone;
        $dentist->email =  $inputs['email'] ?? $dentist->email;
        $dentist->photo =  $inputs['photo'] ?? $dentist->photo;

        if ($request->hasFile('photo'))
            $dentist->photo = $request->file('photo')->store('uploads/dentists', 'public');

        $clinicIds = collect($inputs['clinics'])->map(function ($item) {
            return is_array($item) ? $item['value'] : $item;
        })->filter()->unique()->toArray();

        $dentist->clinics()->sync($clinicIds);

        $serviceIds = collect($inputs['services'])->map(function ($item) {
            return is_array($item) ? $item['value'] : $item;
        })->filter()->unique()->toArray();

        $dentist->services()->sync($serviceIds);

        $dentist->save();
        return redirect()->route('dentists.index')->with(['message' => 'Dentist updated successfully']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return redirect()->route('dentists.index')->with(['message' => 'Dentist was deleted successfully']);
    }
}
