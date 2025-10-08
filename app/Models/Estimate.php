<?php

namespace App\Models;

use App\Models\Admin\DentalService;
use App\Models\Admin\EstimateReply;
use Illuminate\Database\Eloquent\Model;

class Estimate extends Model
{

    protected $fillable = [
        'patient_id',
        'user_id',
        'dental_service_id',
        'description',
        'insurance_id',
        'is_quick',
    ];

    protected $appends = ['statuse'];
    public $casts = [
        'created_at' => 'datetime:m/d/Y H:i',
        'updated_at' => 'datetime:m/d/Y H:i',
        'deleted_at' => 'datetime:m/d/Y H:i'
    ];
    public function getStatuseAttribute()
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

    public function services()
    {
        return $this->hasMany(EstimateService::class);
    }
    public function dentalservice()
    {
        return $this->belongsTo(DentalService::class, 'dental_service_id');
    }

    public function attachments()
    {
        return $this->hasMany(EstimateAttachment::class);
    }

    public function replies()
    {
        return $this->hasOne(EstimateReply::class);
    }
}
