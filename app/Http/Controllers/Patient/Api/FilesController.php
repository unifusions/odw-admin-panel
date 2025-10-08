<?php

namespace App\Http\Controllers\Patient\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FilesController extends Controller
{
    public function show(Request $request)
    {
        dd($request->path);
        // Check if user is logged in and has permission
        if (!auth()->check()) {
            abort(403, 'Unauthorized');
        }

        $disk = Storage::disk('local');

        if (!$disk->exists($path)) {
            abort(404);
        }

        // Return file as download or inline response
        return response()->file($disk->path($path));
        // or ->download($disk->path($path));
    }
}
