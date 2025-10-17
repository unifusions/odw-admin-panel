<?php

namespace App\Http\Controllers\Patient\Api;

use App\Http\Controllers\Controller;
use App\Models\Admin\DentalService;
use App\Models\CareCategory;
use App\Models\DentalCare;
use Illuminate\Http\Request;

class DentalCareController extends Controller
{
    public function getCategories()
    {
        return response()->json(DentalService::orderBy('display_order')->get());
    }

    public function getAllServices(Request $request )
    {   
       
        return response()->json(DentalCare::all());
    }
    public function getServices(Request $request)
    {

        $serviceId = $request->dental_service_id;
        dd($request->input());
        $dentalCares = DentalCare::whereHas('categories', function ($query) use ($serviceId) {
            $query->where('dental_service_id', $serviceId);
        })->get();


        return response()->json($dentalCares);
    }
}
