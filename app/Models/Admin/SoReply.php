<?php

namespace App\Models\Admin;

use App\Models\SecondOpinion;
use Illuminate\Database\Eloquent\Model;

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

    

    public function secondopinion(){
        return $this->belongsTo(SecondOpinion::class);
    }
}
