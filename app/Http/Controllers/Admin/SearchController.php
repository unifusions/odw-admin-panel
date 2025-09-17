<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\Clinic;
use App\Models\Admin\DentalService;
use App\Models\Admin\Dentist;
use App\Models\Admin\Specialist;
use App\Models\DentalCare;
use App\Models\Patient;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class SearchController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {

        $query = $request->input('q');

        $results = collect();

        // Clinics
        $clinics = Clinic::where('name', 'like', "%{$query}%")
            ->limit(5)
            ->get()
            ->map(function ($clinic) {
                return [
                    'id'    => $clinic->id,
                    'name'  => $clinic->name,
                    'type'  => 'Clinic',
                    'route' => route('clinics.edit', $clinic),
                ];
            });

        // Dentists
        $dentists = Dentist::where('name', 'like', "%{$query}%")
            ->limit(5)
            ->get()
            ->map(function ($dentist) {
                return [
                    'id'    => $dentist->id,
                    'name'  => $dentist->name,
                    'photo' => $dentist->photo_url,
                    'type'  => 'Dentists',
                    'route' => route('dentists.edit', $dentist),
                ];
            });

        $specialists = Specialist::where('name', 'like', "%{$query}%")
            ->limit(5)
            ->get()
            ->map(function ($specialist) {
                return [
                    'id'    => $specialist->id,
                    'name'  => $specialist->name,
                    'photo' => $specialist->photo_url,
                    'type'  => 'Dentists',
                    'route' => route('dentists.edit', $specialist),
                ];
            });

        $treatments = DentalService::where('name', 'like', "%{$query}%")->limit(5)->get()
            ->map(function ($service) {
                return [
                    'id' => $service->id,
                    'name' => $service->name,
                    'photo' => $service->image_path_url,
                    'type' => 'Treatments',
                    'route' => route('services.edit', $service)
                ];
            });

        $dentalcares = DentalCare::where('name', 'like', "%{$query}%")->orWhere('code', 'like', "%{$query}%")->limit(5)->get()
            ->map(function ($service) {
                return [
                    'id' => $service->id,
                    'name' => $service->name,
                    'photo' => $service->image_path_url,
                    'type' => 'Services',
                    'route' => route('compare-costs.edit', $service)
                ];
            });

        $patients = Patient::where('first_name', 'like', "%{$query}%")
            ->orWhere('last_name', 'like', "%{$query}%")
            ->orWhere('phone_number', 'like', "%{$query}")->limit(5)->get()->map(function ($patient) {
                return [
                    'id' => $patient->id,
                    'name' => $patient->last_name . ", " . $patient->first_name,
                    'photo' => $patient->avatar_url,
                    'route' => route('patients.show', $patient)

                ];
            });

        $results = [
            'clinics'  => $clinics->values()->toArray(),
            'dentists' => $dentists->values()->toArray(),
            'treatments' => $treatments->values()->toArray(),
            'services' => $dentalcares->values()->toArray(),
            'specialists' => $specialists->values()->toArray(),
            'patients' => $patients->values()->toArray()

        ];



        return response()->json($results);
    }
}
