<?php

namespace App\Http\Controllers\Patient\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FilesController extends Controller
{
    public function show(Request $request)
    {
     

        $disk = Storage::disk('local');

        if (!$disk->exists($request->path)) {
            abort(404);
        }

        // Return file as download or inline response
        // return response()->file($disk->path($request->path));
        return response()->download($disk->path($request->path));
    }
}
