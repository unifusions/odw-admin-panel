<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\URL;

class InsuranceAttachement extends Model
{
    protected $fillable = [
        'insurance_id', 'file_name', 'path', 'size','ext'
    ];
  protected $appends = ['temporary_url'];
    public function insurance(){
        return $this->belongsTo(Insurance::class);
    }

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

