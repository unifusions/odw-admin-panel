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

    public function getAllServices()
    {
        return response()->json(DentalCare::all());
    }
    public function getServices(Request $request)
    {

        $category = DentalService::find($request->dental_service_id);
        if ($category->services)
            return response()->json($category->services);
        return response()->json([]);
    }
}
