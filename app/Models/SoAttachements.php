<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\URL;

class SoAttachements extends Model
{
    protected $fillable = [
        'second_opinion_id',
        'path',
        'file_name',
        'type',
        'file_type',
        'size',
    ];

    protected $appends = ['temporary_url'];
    // public function getTemporaryUrlAttribute()
    // {
    //     if (!$this->path) {
    //         return null;
    //     }

    //     // Example: Generate signed temporary URL for 1 hour
    //     return Storage::disk('local')->url($this->path);
    // }

    public function getTemporaryUrlAttribute()
    {
        return URL::temporarySignedRoute(
        'secure.file',                 // route name
        now()->addMinutes(10),         // link expiry
        ['path' => $this->path]   // stored path like invoices/a.pdf
    );

        // return route('files.show', ['path' => $this->path]);
    }
}
