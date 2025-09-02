<?php

namespace App\Models;
 
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

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
    public function getTemporaryUrlAttribute()
    {
        if (!$this->path) {
            return null;
        }

        // Example: Generate signed temporary URL for 1 hour
        return Storage::disk('local')->url($this->path );
    }
}
