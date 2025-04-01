<?php

namespace App\Models;

use App\ClinicScope;
use Illuminate\Database\Eloquent\Factories\HasFactory;

use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Appointment extends Model
{
    use HasApiTokens, ClinicScope, HasFactory;
    protected $fillable = [
        'clinic_id',
        'clinic_branch_id',
        'clinic_dentist_id',
        'patient_id',
        'appointment_date',
        'time_slot',
        'status',
        'reschedule_count'
    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class, 'patient_id');
    }

    public function dentalservices(){
        return $this->hasMany(AppointmentService::class);
    }
}
