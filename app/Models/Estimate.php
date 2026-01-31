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
        'status',
        'is_closed'
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
        return $this->belongsTo(Patient::class, 'patient_id', 'id');
    }

    public function insurance(){
        return $this->belongsTo(Insurance::class);
    }

    public function services()
    {
        return $this->hasMany(EstimateService::class);
    }

     public function dentalcares()
    {
        return $this->hasManyThrough(
            DentalCare::class,
            EstimateService::class,
            'estimate_id',      // Foreign key on EstimateService
            'id',               // Foreign key on DentalCare
            'id',               // Local key on Estimate
            'dental_care_id'    // Local key on EstimateService
        );
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
