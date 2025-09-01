<?php

namespace App\Models\Admin;

use App\ClinicScope;
use App\Models\ClinicDentist;
use App\Models\ClinicGallery;
use App\Models\ClinicSchedule;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Clinic extends Model
{

    use ClinicScope, HasFactory;
    protected $fillable = [
        'name',

        'logo',
        'address_line_1',
        'address_line_2',
        'city',
        'state',
        'phone',
        'email',
        'zip_code',
        'latitude',
        'longitude',
        'desc'

    ];


    public $appends = ['logo_url'];



    // public function branches()
    // {
    //     return $this->hasMany(ClinicBranch::class, 'clinic_id', 'id');
    // }




    public function schedules()
    {
        return $this->hasMany(ClinicSchedule::class);
    }

    public function galleries()
    {
        return $this->hasMany(ClinicGallery::class);
    }

    public function users()
    {
        return $this->hasMany(ClinicUser::class);
    }

    public function dentalservices()
    {
        return $this->hasManyThrough(
            DentalService::class,       // Final model
            ClinicDentalService::class,       // Intermediate model
            'clinic_id',                // Foreign key on ClinicService table
            'id',                       // Foreign key on DentalService table (assumes ClinicService has dental_service_id)
            'id',                       // Local key on Clinic model
            'dental_service_id'         // Local key on ClinicService that points to DentalService
        );
    }

    public function services()
    {
        return $this->belongsToMany(DentalService::class, 'clinic_dental_services')
            ->using(ClinicDentalService::class) // tell Laravel about your custom pivot
            ->withPivot('clinic_id')     // if you also need that
            ->withTimestamps();
    }

    public function dentists()
    {

        return $this->belongsToMany(Dentist::class, 'clinic_dentists')
            ->using(ClinicDentist::class)   // custom pivot model
            ->withPivot(['id', 'created_at']); // add extra pivot fields if needed

    }

    public function getLogoUrlAttribute()
    {
        if (!$this->logo) {
            return null;
        }
 
        return Storage::disk('public')->url($this->logo);
 
    }   

}
