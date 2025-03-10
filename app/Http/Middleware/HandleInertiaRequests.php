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
                'message' => fn() => $request->session()->get('message')
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
        $dashboardRoutes = [
            'super_admin' => route('admin.dashboard'),
            'clinic_admin' => route('clinic.dashboard')
        ];

        $dashboardUrl = $dashboardRoutes[$role]?? route('home');
        $breadcrumbs = [
            'dashboard' => [['name' => 'Dashboard', 'url' => $dashboardUrl]],
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
            'appointments.index' => [
                ['name' => 'Dashboard', 'url' => $dashboardUrl],
                ['name' => 'Appointments', 'url' => route('appointments.index')],
            ],
            'clinic-users.index' => [
                ['name' => 'Dashboard', 'url' => $dashboardUrl ],
                ['name'=>'Users', 'url' => route('clinic-users.index')]
            ]
        ];

        return $breadcrumbs[$routeName] ?? [];
    }
}
