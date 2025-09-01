<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\Clinic;
use App\Models\Admin\ClinicBranch;
use App\Models\Admin\DentalService;
use App\Models\Admin\Dentist;
use App\Models\Admin\ZipCode;
use App\Models\Admin\ZipCodes;
use App\Models\ClinicDentist;
use App\Models\ClinicGallery;
use App\Models\ClinicSchedule;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Random\Randomizer;

class ClinicsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        return Inertia::render(
            'Admin/Clinics/Index',
            [
                'clinics' => Clinic::with('schedules')->paginate(10)
                // 'clinics' => Clinic::with('branches.zipCode.city.state', 'branches.dentists')->paginate(10)
            ]
        );
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render(
            'Admin/Clinics/Create',
            ['categories' => DentalService::all(),]
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $transaction = DB::transaction(function () use ($request) {
            $logo_path = '';
            if ($request->hasFile('image_file')) {
                $logo_path = $request->image_file->store('clinics/gallery', 'public');
            }
            $clinic = Clinic::create(
                [
                    'name' => $request->clinic_name,
                    'logo' => $logo_path,
                    'address_line_1' => $request->address_line_1,
                    'address_line_2' => $request->address_line_2,
                    'phone' => $request->phone,
                    'email' => $request->email,
                    'city' => $request->city,
                    'state' => $request->state,
                    'zip_code' => $request->zip_code,
                    'latitude' => $request->latitude,
                    'longitude' => $request->longitude,
                    'desc' => $request->desc

                ]
            );


            if ($request->has('categories')) {
                foreach ($request->categories as $categoryId) {
                    $clinic->services()->create([
                        'clinic_id' => $clinic->id,
                        'dental_service_id' => $categoryId
                    ]);
                }
            }

            foreach ($request->schedule as $day => $details) {
                ClinicSchedule::updateOrCreate(
                    ['clinic_id' => $clinic->id, 'day_of_week' => $day],
                    [
                        'is_open'   => $details['isOpen'],
                        'open_time' => $details['isOpen'] ? $details['open'] : null,
                        'close_time' => $details['isOpen'] ? $details['close'] : null,
                    ]
                );
            }

            if ($request->hasFile('images')) {
                foreach ($request->file('images') as $image) {
                    $path = $image->store('clinics/gallery', 'public');

                    $clinic->galleries()->create([
                        'clinic_id' => $clinic->id,
                        'file_name' => basename($path),
                        'file_path' => $path
                    ]);
                }
            }

            return $clinic;
        });
        return redirect()->back()->with(['message' => $transaction->name . ' has been added successfully']);
    }

    public function storeDentist(Request $request)
    {


        return redirect()->back()->with([
            'message' => 'Dentist was added',
            'dentist' => 'dentist'
        ]);
    }




    public function show(string $id) {}


    public function edit(Clinic $clinic)
    {


        return Inertia::render(
            'Admin/Clinics/EditClinic',
            [
                'clinic' => $clinic,
                'schedules' => $clinic->schedules()->get()->keyBy('day_of_week')->map(function ($item) {
                    return $item;
                }),
                'users' => $clinic->users,
                'services' => $clinic->services()->pluck('dental_services.id'),
                'galleries' => $clinic->galleries,
               

                'allservices' => DentalService::all()
            ]
        );
    }



    public function update(Request $request, Clinic $clinic)
    {

        // dd($clinic->isDirty('city'));
        $clinic->update([
            'name' => $request->clinic_name,
            'address_line_1' => $request->address_line_1,
            'address_line_2' => $request->address_line_2,
            'phone' => $request->phone,
            'email' => $request->email,
            'zip_code' => $request->zip_code,
            'latitude' => $request->latitude,
            'longitude' => $request->longitude,
            'desc' => $request->desc

        ]);
        $clinic->save();
        return redirect()->back()->with([
            'message' => "{$clinic->name} was updated successfuly",
            'dentist' => 'dentist'
        ]);
    }


    public function updateSchedule(Request $request, Clinic $clinic)
    {
        $schedule = $request->input('schedule');
        // dd($schedule);
        foreach ($schedule as $day => $details) {

            ClinicSchedule::updateOrCreate(
                ['clinic_id' => $clinic->id, 'day_of_week' => $day],
                [
                    'is_open'   => $details['is_open'],
                    'open_time' => $details['open_time'] ??  null,
                    'close_time' => $details['close_time'] ?? null,
                ]
            );
        }
        return redirect()->back()->with([
            'message' => "Clinic Schedule was updated successfuly",

        ]);
    }

    public function updateServices(Request $request, Clinic $clinic)
    {
      
        $serviceIds = collect($request->categories)->map(function ($item) {
            return is_array($item) ? $item['id'] : $item;
        })->filter()->unique()->toArray();
      
        $clinic->services()->sync($serviceIds);
        return redirect()->back()->with(['message' => "Clinic Servicess updated successfuly",]);
    }

    public function destroy(Clinic $clinic)
    {
        $clinic->delete();
        return redirect()->back()->with([
            'message' => "{$clinic->name} was deleted successfuly",
            'dentist' => 'dentist'
        ]);
    }

    public function destroyGallery(Clinic $clinic, ClinicGallery $gallery)
    {
        $gallery->delete();
        return redirect()->back()->with([
            'message' => "Image was removed successfuly",
            
        ]);
    }
}
