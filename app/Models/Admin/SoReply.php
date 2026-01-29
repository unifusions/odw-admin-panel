<?php

namespace App\Models\Admin;

use App\Models\SecondOpinion;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\URL;

class SoReply extends Model
{
    protected $fillable = [
        'second_opinion_id',
        'user_id',
        'reply_message',
        'path',
        'file_name',
        'type',
        'file_type',
        'size',
    ];
    public $appends = ['file_url', 'static_url'];
    public function getFileUrlAttribute()
    {
        return URL::signedRoute(
        'secure.file',                 
               // link expiry
        ['path' => $this->path]);    

        // return route('files.show', ['path' => $this->path]);
    }

    public function getStaticUrlAttribute()
    {
        if (!$this->path) {
            return null;
        }
        return Storage::disk('local')->url($this->path);
    }




    public function secondopinion()
    {
        return $this->belongsTo(SecondOpinion::class);
    }
}
