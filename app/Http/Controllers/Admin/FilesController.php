<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FilesController extends Controller
{
    public function show(Request $request, $path)
    {
        // // Check if user is logged in and has permission
        // if (!auth()->check() ) {
        //     abort(403, 'Unauthorized');
        // }

        // $disk = Storage::disk('local');

        // if (!$disk->exists($path)) {
        //     abort(404);
        // }

        // // Return file as download or inline response
        // return response()->file($disk->path($path));
        // // or ->download($disk->path($path));

        if (!$request->hasValidSignature()) {
            abort(401);
        }

        $disk = Storage::disk('local');

        if (!$disk->exists($path)) {
            abort(404);
        }

        return response()->file($disk->path($path));
    }

    public function appShow(Request $request, $path)
    {

    }
}
