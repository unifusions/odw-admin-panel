<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Pivot;

class SpecialistService extends Pivot
{
    protected $fillable = [
        'specialist_id',
        'dental_service_id'
    ];
}
