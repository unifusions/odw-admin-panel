<?php

namespace App\Models\Admin;

use App\Models\Estimate;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\URL;

class EstimateReply extends Model
{
    protected $fillable = [
        'estimate_id',
        'user_id',
        'reply_message',
        'path',
        'file_name',

        'file_type',
        'size',
    ];
    public $appends = ['file_url'];



    public function estimate()
    {
        return $this->belongsTo(Estimate::class);
    }

    public function getFileUrlAttribute()
    {
        return URL::signedRoute(
        'secure.file',                 
               // link expiry
        ['path' => $this->path]);    
    }
}
