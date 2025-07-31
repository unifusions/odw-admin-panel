<?php

namespace App\Models\Admin;

use App\ClinicScope;
use App\Models\ClinicGallery;
use App\Models\ClinicSchedule;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Clinic extends Model
{

    use ClinicScope, HasFactory;
    protected $fillable = [
        'name',

        'logo',
        'address_line_1',
        'address_line_2',
        'phone',
        'email',
        'zip_code',
        'latitude',
        'longitude',

    ];





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

    public function services()
    {
        return $this->hasMany(ClinicDentalService::class);
    }
}
