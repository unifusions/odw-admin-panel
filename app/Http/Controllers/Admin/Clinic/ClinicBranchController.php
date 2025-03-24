<?php

namespace App\Http\Controllers\Admin\Clinic;

use App\Http\Controllers\Controller;
use App\Models\Admin\Clinic;
use App\Models\Admin\ClinicBranch;
use App\Models\Admin\ZipCode;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClinicBranchController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Clinic $clinic)
    {
        $clinic->load('branches.zipcode.city.state', 'branches.dentists', 'branches.dentalservices.dentalservice');
        return Inertia::render('Admin/Clinics/AddBranch', [
            'clinic' => $clinic,
            'branches' => $clinic->branches
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Clinic $clinic)
    {
      
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Clinic $clinic)
    {
        
        $zipcode = ZipCode::firstOrCreate(
            ['zip_code' => $request->zip_code],
            ['city_id' => $request->city_id]
        );

        $branch = ClinicBranch::create([
            'clinic_id' => $clinic->id,
            'name' => $request->name,
            'address_line_1' => $request->address_line_1,
            'address_line_2' => $request->address_line_2,
            'phone' => $request->phone,
            'zip_code_id' => $zipcode->id,
        ]);
        return redirect()->back()->with(['message' => $branch->name . ' created successfully']);

        // try {
        //     $zipcode = ZipCode::firstOrCreate(
        //         ['zip_code' => $request->zip_code],
        //         [
        //             'city_id' => $request->city_id,
        //             'zip_code' => $request->zip_code
        //         ]
        //     );
        // } catch (QueryException $e) {
        //     return redirect()->back()->with(['failed' => $e->getMessage()]);
        //     // if (strpos($e->getMessage(), 'UNIQUE constraint failed') !== false) {
        //     //     return redirect()->back()->with(['failed' => 'The value already exists.']); // 409 Conflict
        //     // } else {
        //     //     // Log::error('Database error: ' . $e->getMessage());
        //     //     return redirect()->back()->with(['failed' => 'An error occurred.'], 500); // 500 Internal Server Error
        //     // }
        // } catch (\Exception $e) {
        //     // Log::error('General error: ' . $e->getMessage());
        //     return  redirect()->back()->with(['failed' => 'An unexpected error occurred.'], 500);
        // }



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
    public function edit(Request $request, Clinic $clinic, ClinicBranch $branch)
    {
        dd($branch);
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
