<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserRequest;
use App\Models\Admin\Clinic;
use App\Models\Admin\ClinicUser;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        // dd(ClinicUser::with('user', 'branch.clinic')->paginate(5));
        $user = auth()->user();

        if ($user->role === 'super_admin') {
            $users = User::with('clinic')->where('role', 'clinic_admin')->orWhere('role', 'clinic_user')->paginate(15);
        } else {

            $clinicUser = $user->clinicUsers()->first();
            if (!$clinicUser) {
                return response()->json([], 403); // No clinic assigned
            }

            $clinicId = $clinicUser->clinic_id;

            $users = User::with('clinic')
                ->whereHas('clinicUsers', function ($query) use ($clinicId) {
                    $query->where('clinic_id', $clinicId);
                })
                ->paginate(15);
        }



        return Inertia::render(
            'Admin/Users/Index',
            [
                'users' => $users,
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render(
            'Admin/Users/Create',
            [
                'clinics' => Clinic::all()->map(function ($item) {
                    return [
                        'value' => $item->id,
                        'label' => $item->name
                    ];
                }),
                'roles' => [
                    ['value' => 'clinic_admin', 'label' => 'Clinic Admin'],
                    ['value' => 'clinic_user', 'label' => 'Clinic user']

                ]

            ]
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request)
    {
        // dd( $request->all());

        // if ($request->validator()->fails()) {
        //     return redirect('/post/create')
        //         ->withErrors($validator)
        //         ->withInput();
        // }

        if ($request->validated()) {
            $user = User::create([
                'name' => $request->full_name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'role' => $request->role['value'],
                'status' => 0
            ]);

            $clinicuser = ClinicUser::create([
                'user_id' => $user->id,
                'clinic_id' => $request->clinic['value'],
                // 'clinic_branch_id' => $request->branch_id,
                'role' => $user->role,
            ]);

            $message = $user->name;
            $message .= ' has been added successfully';

            return redirect()->route('clinic-users.index')->with(['message' => $message]);
        }

        return redirect()->back()->with([
            'error' => 'something went wrongs'
        ]);
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
    public function edit(User $clinic_user)
    {

        return Inertia::render('Admin/Users/Edit', [
            'user' => $clinic_user,
            'selectedClinic' => [
                'value' => $clinic_user->clinic->id,
                'label' => $clinic_user->clinic->name
            ],
            'clinics' => Clinic::all()->map(function ($item) {
                return [
                    'value' => $item->id,
                    'label' => $item->name
                ];
            }),
            'selectedRole' => ['value' => $clinic_user->role, 'label' => $clinic_user->role === 'clinic_admin' ? 'Clinic Admin' : 'Clinic User'],
            'roles' => [
                ['value' => 'clinic_admin', 'label' => 'Clinic Admin'],
                ['value' => 'clinic_user', 'label' => 'Clinic user']

            ]

        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $clinic_user)
    {
        $clinic_user->name = $request->full_name;
        $clinic_user->email = $request->email;
        $clinic_user->role = $request->role['value'];


        $clinicUser = ClinicUser::where('user_id', $clinic_user->id)->first();

        $clinicUser->clinic_id = $request->clinic['value'];
        $clinicUser->save();
        $clinic_user->save();
        return redirect()->route('clinic-users.index')->with(['message' => 'User was updated successfully']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $clinic_user)
    {
        $clinic_user->delete();
        return redirect()->route('clinic-users.index')->with(['message' => 'User was deleted successfully']);
    }
}
