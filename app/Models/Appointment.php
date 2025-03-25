<?php

namespace App\Models;

use App\ClinicScope;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Appointment extends Model
{
    use HasApiTokens, ClinicScope;
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
}
