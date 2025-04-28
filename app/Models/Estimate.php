<?php

namespace App\Models;

use App\Models\Admin\DentalService;
use Illuminate\Database\Eloquent\Model;

class Estimate extends Model
{

    protected $fillable = [];

    protected $appends = ['status'];

    public function getStatusAttribute()
    {
        return $this->is_closed ? 'Closed' : 'New';
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }

    public function dentalservice()
    {
        return $this->belongsTo(DentalService::class, 'dental_service_id');
    }
}
