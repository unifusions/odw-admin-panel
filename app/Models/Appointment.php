<?php

namespace App\Models;

use App\ClinicScope;
use App\Models\Admin\AppointmentHistory;
use App\Models\Admin\Clinic;
use App\Models\Admin\ClinicBranch;
use App\Models\Admin\DentalService;
use App\Models\Admin\Dentist;
use Illuminate\Database\Eloquent\Factories\HasFactory;

use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Appointment extends Model
{
    use HasApiTokens, ClinicScope, HasFactory;
    protected $fillable = [
        'clinic_id',
        'patient_id',
        'appointment_date',
        'time_slot',
        'status',
        'reschedule_count',
        'dental_service_id',
        'appointable_id',
        'appointable_type',
    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class, 'patient_id');
    }

    public function user() {}

    public function dentalservices()
    {
        return $this->hasMany(AppointmentService::class);
    }

    public function clinic()
    {
        return $this->belongsTo(Clinic::class);
    }

    public function clinicbranch()
    {
        return $this->belongsTo(ClinicBranch::class, 'clinic_branch_id');
    }

    public function dentalservice()
    {
        return $this->belongsTo(DentalService::class, 'dental_service_id', 'id');
    }

    public function dentist()
    {
        // return $this->hasOneThrough(Dentist::class,ClinicDentist::class, 'dentist_id', 'id','clinic_dentist_id', 'dentist_id');
        return $this->hasOneThrough(
            Dentist::class,
            ClinicDentist::class,
            'id',                 // ClinicDentist.id
            'id',                 // Dentist.id
            'clinic_dentist_id',  // Appointment.clinic_dentist_id
            'dentist_id'          // ClinicDentist.dentist_id
        );
    }

    public function appointable()
    {
        return $this->morphTo();
    }

    public function histories()
{
    return $this->hasMany(AppointmentHistory::class);
}


}
