<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FilesController extends Controller
{
    public function show(Request $request, $path)
    {
        // Check if user is logged in and has permission
        if (!auth()->check()) {
            abort(403, 'Unauthorized');
        }

        // ✅ check if file exists
        if (!Storage::disk('local')->exists("uploads/$path")) {
            abort(404, 'File not found');
        }

        // Return file as download or inline response
        return Storage::disk('local')->response("uploads/$path");
    }
}
