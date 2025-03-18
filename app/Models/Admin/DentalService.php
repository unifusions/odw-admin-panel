<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Storage;
use Laravel\Sanctum\HasApiTokens;

class DentalService extends Model
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'desc',
        'cost',
        'image_path',
        'avg_cost'

    ];

    public function clinicservices()
    {
        return $this->hasMany(ClinicDentalService::class);
    }
    // public function setImagePathAttribute($value)
    // {
    //     if (is_file($value)) {
    //         $path = $value->store('services', 'public');
    //         $this->attributes['image_path'] = $path;
    //     } else {
    //         $this->attributes['image_path'] = $value;
    //     }
    // }

    // public function getImagePathAttribute($value)
    // {
    //     if ($value) {
    //         return Storage::url($value);
    //     }
    //     return null;
    // }
}
