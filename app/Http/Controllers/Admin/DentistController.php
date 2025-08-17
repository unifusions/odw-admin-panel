<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\Clinic;
use App\Models\Admin\DentalService;
use App\Models\Admin\Dentist;
use App\Models\ClinicDentist;
use App\Models\DentistService;
use Illuminate\Http\Request;
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
            ['alldentists' => Dentist::with('clinic',  'services')->paginate(25)]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        $data = [
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


        $dentist = Dentist::create([
            'name' => $request->name,
            'practise_from' => $request->practise_from,
            'phone' => $request->phone,
            'email' => $request->email,
            'photo' => $request->photo ?? ''
        ]);
        if ($request->clinic_id) {
            $clinicDentist = ClinicDentist::create([
                'dentist_id' => $dentist->id,
                'clinic_id' => $request->clinic_id,
                'clinic_branch_id' => $request->clinic_branch_id,
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
