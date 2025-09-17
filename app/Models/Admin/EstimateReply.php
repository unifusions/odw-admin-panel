<?php

namespace App\Models\Admin;

use App\Models\Estimate;
use Illuminate\Database\Eloquent\Model;

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

    public function estimate()
    {
        return $this->belongsTo(Estimate::class);
    }
}
