<?php

namespace App\Models\Admin;

use App\Models\SpecialistClinic;
use App\Models\SpecialistService;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Storage;

class Specialist extends Model
{

    use SoftDeletes;
    protected $fillable = ['name', 'practise_from', 'phone', 'email', 'photo'];
    public $appends = ['photo_url'];
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
}
