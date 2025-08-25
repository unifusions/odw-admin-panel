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
            ['alldentists' => Dentist::with('clinic',  'services')->paginate(25)->through(function ($dentist){
                if($dentist->photo)
                    $dentist->photo = Storage::disk('public')->url($dentist->photo);
                return $dentist;
            })]
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
        if ($request->clinic_id) {
            $clinicDentist = ClinicDentist::create([
                'dentist_id' => $dentist->id,
                'clinic_id' => $request->clinic_id,

            ]);
        }

        if ($request->services) {
            foreach ($request->services as $service) {
                DentistService::create([
                    'dentist_id' => $dentist->id,
                    'dental_service_id' => $service['value']
                ]);
            }
        }


        return redirect()->back()->with(['message' => 'Dentist was added']);
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
