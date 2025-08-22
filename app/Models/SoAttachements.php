<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

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
}
