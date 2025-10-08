<?php

namespace App\Models\Admin;

use App\Models\SecondOpinion;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

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
    public $appends = ['file_url'];
    public function getFileUrlAttribute()
    {
        if (!$this->path) {
            return null;
        }
        return Storage::url($this->path);
    }


    public function secondopinion()
    {
        return $this->belongsTo(SecondOpinion::class);
    }
}
