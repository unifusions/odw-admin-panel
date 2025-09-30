<?php

namespace App\Models\Admin;

use App\Models\Appointment;
use App\Models\SpecialistClinic;
use App\Models\SpecialistService;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Storage;

class Specialist extends Model
{

    use SoftDeletes;
    protected $fillable = [
        'name',
        'practise_from',
        'phone',
        'email',
        'photo',

        'about',
        'no_of_patients',
        'no_of_reviews',
        'rating'
    ];
    public $appends = ['photo_url'];

    public $casts = [
        'created_at' => 'datetime:m/d/Y H:i',
        'updated_at' => 'datetime:m/d/Y H:i',
        'deleted_at' => 'datetime:m/d/Y H:i'
    ];
    public function clinics()
    {
        return $this->belongsToMany(Clinic::class, 'specialist_clinics')->using(SpecialistClinic::class)
            ->withPivot(['id']);
    }

    public function services()
    {
        return $this->belongsToMany(DentalService::class, 'specialist_services')->using(SpecialistService::class)
            ->withPivot(['id'])
        ;
    }

    public function getPhotoUrlAttribute()
    {
        if (!$this->photo) {
            return null;
        }

        return Storage::disk('public')->url($this->photo);
    }

    public function appointments()
    {
        return $this->morphMany(Appointment::class, 'appointable');
    }
}
