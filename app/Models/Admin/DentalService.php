<?php

namespace App\Models\Admin;

use App\Models\Appointment;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Storage;
use Laravel\Sanctum\HasApiTokens;

class DentalService extends Model
{
    use HasApiTokens, HasFactory, Notifiable, SoftDeletes;

    protected $fillable = [
        'name',
        'desc',
        'cost',
        'image_path',
        'header_image_path',
        'avg_cost',
        'medical_name',
        'max_cost',
        'max_avg_cost',
        'display_order'

    ];

    public $appends = ['header_image_url', 'image_path_url'];
    public $casts = [
        'created_at' => 'datetime:m/d/Y H:i',
        'updated_at' => 'datetime:m/d/Y H:i',
        'deleted_at' => 'datetime:m/d/Y H:i'
    ];
    public function clinicservices()
    {
        return $this->hasMany(ClinicDentalService::class);
    }

    public function appointments()
    {
        return $this->hasMany(Appointment::class);
    }

    public function getHeaderImageUrlAttribute()
    {
        if (!$this->header_image_path) {
            return null;
        }

        // if using storage disk
        return Storage::disk('public')->url($this->header_image_path);

        // OR if directly stored in /uploads
        // return url($this->header_image);
    }

    public function getImagePathUrlAttribute()
    {
        if (!$this->image_path) {
            return null;
        }

        // if using storage disk
        return Storage::disk('public')->url($this->image_path);

        // OR if directly stored in /uploads
        // return url($this->header_image);
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
