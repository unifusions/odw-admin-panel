<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\Clinic;
use App\Models\Admin\DentalService;
use App\Models\Admin\Dentist;
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
                    'photo' => $dentist->photo ? Storage::disk('public')->url($dentist->photo) : false,
                    'type'  => 'Dentists',
                    'route' => route('dentists.edit', $dentist),
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
        $results = [
            'clinics'  => $clinics->values()->toArray(),
            'dentists' => $dentists->values()->toArray(),
            'treatments' => $treatments->values()->toArray(),
        ];

        return response()->json($results);
    }
}
