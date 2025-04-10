<?php

namespace App\Models\Admin;

use App\ClinicScope;
use App\Models\ClinicDentist;
use App\Models\DentistService;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Laravel\Sanctum\HasApiTokens;

class Dentist extends Model
{
    use HasApiTokens, SoftDeletes, ClinicScope;
    protected $fillable = [
        'name',
        'practise_from',
        'phone',
        'email',
        'photo'
    ];

    public function clinicdentist()
    {
        return $this->hasMany(ClinicDentist::class);
    }

    public function clinic()
    {
        return $this->hasOneThrough(
            Clinic::class,          // Final model
            ClinicDentist::class,   // Intermediate model
            'dentist_id',           // FK on ClinicDentist pointing to Dentist
            'id',                   // FK on Clinic pointing to ClinicDentist (matches ClinicDentist->clinic_id)
            'id',                   // Local key on Dentist
            'clinic_id'             // Local key on ClinicDentist
        );
    }

    public function branch()
    {
        return $this->hasOneThrough(
            ClinicBranch::class,          // Final model
            ClinicDentist::class,   // Intermediate model
            'dentist_id',           // FK on ClinicDentist pointing to Dentist
            'id',                   // FK on Clinic pointing to ClinicDentist (matches ClinicDentist->clinic_id)
            'id',                   // Local key on Dentist
            'clinic_branch_id'             // Local key on ClinicDentist
        );
    }

    public function services()
    {
        return $this->hasManyThrough(
            DentalService::class,
            DentistService::class,
            'dentist_id',
            'id',
            'id',
            'dental_service_id'
        );
    }
}
