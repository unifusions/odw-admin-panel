<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Patient extends Model
{
    protected $fillable = [
        'user_id',
        'avatar',
        'first_name',
        'middle_name',
        'last_name',
        'dob',
        'email',
        'phone_number',
        'sex'
    ];


    public $appends = ['avatar_url'];

    public $casts = [
        'created_at' => 'datetime:m/d/Y H:i',
        'updated_at' => 'datetime:m/d/Y H:i',
        'deleted_at' => 'datetime:m/d/Y H:i'
    ];
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function insurances()
    {
        return $this->hasMany(Insurance::class);
    }

    public function appointments()
    {
        return $this->hasMany(Appointment::class);
    }

    public function emergencies()
    {
        return $this->hasMany(DentalEmergency::class);
    }

    public function secondopinions()
    {
        return $this->hasMany(SecondOpinion::class);
    }

    public function estimates()
    {
        return $this->hasMany(Estimate::class);
    }

    public function getAvatarUrlAttribute()
    {
        if (!$this->avatar) {
            return null;
        }


        return Storage::disk('public')->url($this->avatar);
    }
}
