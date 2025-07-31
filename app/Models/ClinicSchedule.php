<?php

namespace App\Models;

use App\Models\Admin\Clinic;
use Illuminate\Database\Eloquent\Model;

class ClinicSchedule extends Model
{
    protected $fillable = [
        'clinic_id',
        'day_of_week',
        'open_time',
        'close_time',
        'is_open'
    ];

    public function clinic()
    {
        return $this->belongsTo(Clinic::class);
    }
}
