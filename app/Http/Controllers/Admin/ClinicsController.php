<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\Clinic;
use App\Models\Admin\ClinicBranch;
use App\Models\Admin\ZipCode;
use App\Models\Admin\ZipCodes;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Random\Randomizer;

class ClinicsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/Clinics/Index',
        [
            // 'clinics' =>Clinic::with([
            //     'branches' => function ($query) {
            //         $query->with([
            //             'zipCode' => function ($query) {
            //                 $query->with('city.state');
            //             },
            //         ]);
            //     },
            // ])->paginate(10)

            'clinics' =>Clinic::with('branches.zipCode.city.state')->paginate(10)
          

        ]
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


        $zipcode = ZipCode::firstOrCreate(
            ['zip_code' => $request->zip_code],
            [
                'city_id' => $request->city_id,
                'zip_code' => $request->zip_code
            ]
        );



        $clinic = Clinic::create(
            [
                'name' => $request->clinic_name,
                'logo' => 'test'
            ]
        );

        $branch = ClinicBranch::create(
            [
                'clinic_id' =>  $clinic->id,
                'name' => $clinic->name,
                'address_line_1' => $request->address_line_1,
                'address_line_2' => $request->address_line_2,
                'phone' => $request->phone,
                'email' => $request->email,
                'zip_code_id' => $zipcode->id
            ]
        );

        return redirect()->back()->with(['message' => $clinic->name . ' has been added successfully']);
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
    public function edit(Clinic $clinic)
    {
        return Inertia::render('Admin/Clinics/EditClinic', 
        ['clinic' => $clinic]);
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
