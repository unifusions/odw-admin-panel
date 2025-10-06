<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Route;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'flash' => [
                'message' => fn() => $request->session()->get('message'),
                'failed' => fn() => $request->session()->get('failed')
            ],
            'breadcrumbs' => $this->generateBreadcrumbs()
        ];
    }

    private function generateBreadcrumbs()
    {
        $user = auth()->user();
        $role = optional($user)->role;

        $routeName = Route::currentRouteName();

        $clinic = request()->route('clinic');
        $secondopinion = request()->route('second_opinion');
        $service = request()->route('compare_cost');
        $dentist = request()->route('dentist');
        $patient = request()->route('patient');
        $clinicuser = request()->route('clinic-users');
        $dashboardRoutes = [
            'super_admin' => route('admin.dashboard'),
            'clinic_admin' => route('clinic.dashboard'),
            'clinic_user' => route('clinic.dashboard'),
            'patient' => route('patient.dashboard'),
        ];

        $dashboardUrl = $dashboardRoutes[$role] ?? route('home');
        $breadcrumbs = [
            'profile.edit' => [

                [
                    'name' => 'Profile',
                    'url' => route('profile.edit')
                ]
            ],
            'dashboard' => [['name' => 'Dashboard', 'url' => $dashboardUrl]],
            'admin.dashboard' => [['name' => 'Dashboard', 'url' => $dashboardUrl]],
            'clinics.index' => [
                ['name' => 'Dashboard', 'url' => $dashboardUrl],
                ['name' => 'Clinics', 'url' => route('clinics.index')],
            ],
            'clinics.show' => [
                ['name' => 'Dashboard', 'url' => $dashboardUrl],
                ['name' => 'Clinics', 'url' => route('clinics.index')],
                ['name' => optional($clinic)->name ?? 'Clinic', 'url' => $clinic ? route('clinics.show', $clinic) : '#'],

            ],
            'clinics.edit' => [
                ['name' => 'Dashboard', 'url' => $dashboardUrl],
                ['name' => 'Clinics', 'url' => route('clinics.index')],
                ['name' => optional($clinic)->name ?? 'Clinic', 'url' => $clinic ? route('clinics.edit', $clinic) : '#'],

            ],
            'clinics.branches.index' => [
                ['name' => 'Dashboard', 'url' => $dashboardUrl],
                ['name' => 'Clinics', 'url' => route('clinics.index')],
                ['name' => optional($clinic)->name ?? 'Clinic', 'url' => $clinic ? route('clinics.edit', $clinic) : '#'],
                ['name' => optional($clinic)->name ?? 'Branches', 'url' => $clinic ? route('clinics.branches.index', $clinic) : '#'],

            ],

            'clinics.branches.create' => [
                ['name' => 'Dashboard', 'url' => $dashboardUrl],
                ['name' => 'Clinics', 'url' => route('clinics.index')],
                ['name' => optional($clinic)->name ?? 'Clinic', 'url' => $clinic ? route('clinics.edit', $clinic) : '#'],
                ['name' => optional($clinic)->name ?? 'Branches', 'url' => $clinic ? route('clinics.branches.create', $clinic) : '#'],

            ],

            'clinics.users.index' => [
                ['name' => 'Dashboard', 'url' => $dashboardUrl],
                ['name' => 'Clinics', 'url' => route('clinics.index')],
                ['name' => optional($clinic)->name ?? 'Clinic', 'url' => $clinic ? route('clinics.edit', $clinic) : '#'],
                ['name' => optional($clinic)->name ?? 'Users', 'url' => $clinic ? route('clinics.users.index', $clinic) : '#'],

            ],

            'clinics.users.create' => [
                ['name' => 'Dashboard', 'url' => $dashboardUrl],
                ['name' => 'Clinics', 'url' => route('clinics.index')],
                ['name' => optional($clinic)->name ?? 'Clinic', 'url' => $clinic ? route('clinics.edit', $clinic) : '#'],
                ['name' => optional($clinic)->name ?? 'Users', 'url' => $clinic ? route('clinics.users.create', $clinic) : '#'],

            ],



            'clinics.services.index' => [
                ['name' => 'Dashboard', 'url' => $dashboardUrl],
                ['name' => 'Clinics', 'url' => route('clinics.index')],
                ['name' => optional($clinic)->name ?? 'Clinic', 'url' => $clinic ? route('clinics.edit', $clinic) : '#'],
                ['name' => optional($clinic)->name ?? 'Services', 'url' => $clinic ? route('clinics.services.index', $clinic) : '#'],

            ],

            // DENTISTS

            'dentists.index' => [
                ['name' => 'Dashboard', 'url' => $dashboardUrl],
                ['name' => 'Dentists', 'url' => route('dentists.index')]
            ],
            'dentists.create' => [
                ['name' => 'Dashboard', 'url' => $dashboardUrl],
                ['name' => 'Dentists', 'url' => route('dentists.index')],
                ['name' => 'Create', 'url' => route('dentists.create')]
            ],

            'dentists.edit' => [
                ['name' => 'Dashboard', 'url' => $dashboardUrl],
                ['name' => 'Dentists', 'url' => route('dentists.index')],
                ['name' => optional($dentist)->name ?? 'Treatment', 'url' => $dentist ? route('dentists.edit', $dentist) : '#'],
                // ['name' => 'Edit', 'url' => route('dentists.create')]
            ],


            'appointments.index' => [
                ['name' => 'Dashboard', 'url' => $dashboardUrl],
                ['name' => 'Appointments', 'url' => route('appointments.index')],
            ],

            'appointments.pending' => [
                ['name' => 'Dashboard', 'url' => $dashboardUrl],
                ['name' => 'Appointments', 'url' => route('appointments.index')],
                ['name' => 'Pending', 'url' => route('appointments.pending')],
            ],

            'second-opinion.index' => [
                ['name' => 'Dashboard', 'url' => $dashboardUrl],
                ['name' => 'Second Opinions', 'url' => route('second-opinion.index')],
            ],

            'second-opinion.show' => [
                ['name' => 'Dashboard', 'url' => $dashboardUrl],
                ['name' => 'Second Opinions', 'url' => route('second-opinion.index')],
                ['name' => optional($secondopinion)->id ? "SO #{$secondopinion->id}" : "", 'url' => $secondopinion ? route('second-opinion.show', $secondopinion) : '#'],
            ],


            'clinic-users.index' => [
                ['name' => 'Dashboard', 'url' => $dashboardUrl],
                ['name' => 'Users', 'url' => route('clinic-users.index')]
            ],

            'clinic-users.edit' => [
                ['name' => 'Dashboard', 'url' => $dashboardUrl],
                ['name' => 'Users', 'url' => route('clinic-users.index')],
                ['name' => optional($clinicuser)->id ? $clinicuser  :"Edit"  , 'url' => "#"]
            ],


            'compare-costs.index' => [
                ['name' => 'Dashboard', 'url' => $dashboardUrl],
                ['name' => 'Compare Costs', 'url' => route('compare-costs.index')]
            ],

            'compare-costs.edit' => [
                ['name' => 'Dashboard', 'url' => $dashboardUrl],
                ['name' => 'Compare Costs', 'url' => route('compare-costs.index')],
                ['name' => optional($service)->id ?? 'Service', 'url' => $service ? route('compare-costs.show', $service) : '#'],

            ],

            'estimates.index' => [
                ['name' => 'Dashboard', 'url' => $dashboardUrl],
                ['name' => 'Estimates', 'url' => route('estimates.index')],
            ],

            'estimates.show' => [
                ['name' => 'Dashboard', 'url' => $dashboardUrl],
                ['name' => 'Estimates', 'url' => route('estimates.index')],
                ['name' => optional($clinic)->name ?? 'Clinic', 'url' => $clinic ? route('estimates.show', $clinic) : '#'],

            ],

            // Treatments

            'services.index' => [
                ['name' => 'Dashboard', 'url' => $dashboardUrl],
                ['name' => 'Treatments', 'url' => route('services.index')]
            ],
            'services.create' => [
                ['name' => 'Dashboard', 'url' => $dashboardUrl],
                ['name' => 'Treatments', 'url' => route('services.index')],
                ['name' => 'Create', 'url' =>   route('services.create',)],
            ],
            'services.show' => [
                ['name' => 'Dashboard', 'url' => $dashboardUrl],
                ['name' => 'Treatments', 'url' => route('services.index')],
                ['name' => optional($service)->name ?? 'Treatment', 'url' => $service ? route('services.show', $service) : '#'],
            ],

            'services.edit' => [
                ['name' => 'Dashboard', 'url' => $dashboardUrl],
                ['name' => 'Treatments', 'url' => route('services.index')],
                ['name' => optional($service)->name ?? 'Treatment', 'url' => $service ? route('services.show', $service) : '#'],
            ],

            // DEALS

            'deals.index' => [
                ['name' => 'Dashboard', 'url' => $dashboardUrl],
                ['name' => 'Deals', 'url' => route('deals.index')]
            ],

            // PATIENTS

            'patients.index' => [
                ['name' => 'Dashboard', 'url' => $dashboardUrl],
                ['name' => 'Patients',  'url' => route('patients.index')]
            ],
            'patients.create' => [
                ['name' => 'Dashboard', 'url' => $dashboardUrl],
                ['name' => 'Patients', 'url' => route('patients.index')],
                ['name' => 'Create', 'url' => route('patients.create')]
            ],

            'patients.show' => [
                ['name' => 'Dashboard', 'url' => $dashboardUrl],
                ['name' => 'Patients', 'url' => route('patients.index')],
                ['name' => optional($patient)->last_name ?? 'Patient', 'url' => $patient ? route('patients.edit', $patient) : '#'],

            ],
            'patients.edit' => [
                ['name' => 'Dashboard', 'url' => $dashboardUrl],
                ['name' => 'Patients', 'url' => route('patients.index')],
                ['name' => optional($patient)->last_name ?? 'Patient', 'url' => $patient ? route('patients.edit', $patient) : '#'],

            ],
            // SETTINGS

            'admin.settings.index' => [
                ['name' => 'Dashboard', 'url' => $dashboardUrl],
                ['name' => 'Settings',  'url' => '']
            ]
        ];

        return $breadcrumbs[$routeName] ?? [];
    }
}
