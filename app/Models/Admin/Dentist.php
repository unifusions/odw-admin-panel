<?php

namespace App\Models\Admin;

use App\ClinicScope;
use App\Models\ClinicDentist;
use App\Models\ClinicService;
use App\Models\DentistService;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Storage;
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
    public $appends = ['photo_url'];

    public $casts = [
        'created_at' => 'datetime:m/d/Y H:i',
        'updated_at' => 'datetime:m/d/Y H:i',
        'deleted_at' => 'datetime:m/d/Y H:i'
    ];
    public function clinicdentist()
    {
        return $this->hasMany(ClinicDentist::class,);
    }

    public function clinics()
    {
        return $this->belongsToMany(Clinic::class, 'clinic_dentists')
            ->using(ClinicDentist::class)->withPivot('id')
            ->withTimestamps();
    }

    public function services()
    {
        return $this->belongsToMany(DentalService::class, 'dentist_services')
            ->using(DentistService::class)->withPivot('id')
            ->withTimestamps();
    }

    public function getPhotoUrlAttribute()
    {
        if (!$this->photo) {
            return null;
        }

        return Storage::disk('public')->url($this->photo);
    }
}
