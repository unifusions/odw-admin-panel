<?php

namespace App\Http\Controllers\Admin\Clinic;

use App\Http\Controllers\Controller;
use App\Models\Admin\Clinic;
use App\Models\Admin\ClinicUser;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class ClinicUserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Clinic $clinic)
    {
        $clinic->load('branches.zipcode.city.state', 'branches.dentists', 'branches.services', 'users.user', 'users.branch');
        return Inertia::render('Admin/Clinics/Users/Index', [
            'clinic' => $clinic,
            'branches' => $clinic->branches,
            'users'=> $clinic->users,
            
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Clinic $clinic)
    {
       
        $clinic->load('branches.zipcode.city.state', 'branches.dentists', 'branches.services', 'users.user', 'users.branch');
        return Inertia::render('Admin/Clinics/Users/Index', [
            'clinic' => $clinic,
            'branches' => $clinic->branches,
            'users'=> $clinic->users
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Clinic $clinic)
    {
        $user = User::create([
            'name' => $request->full_name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => $request->role,
            'status' => 0
        ]);

        $clinicuser = ClinicUser::create([
            'user_id' => $user->id,
            'clinic_id' => $clinic->id,
            'clinic_branch_id' => $request->branch_id,
            'role' => $user->role,
            
        ]);

        $message = $user->name;
        $message .= ' has been added successfully';

        return redirect()->back()->with(['message' => $message]);
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
