<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    protected $fillable =[];

    public function user(){
        return $this->belongsTo(User::class, 'user_id');
    }
    public function insurances(){
        return $this->hasMany(Insurance::class);
    }

    public function appointments(){
        return $this->hasMany(Appointment::class);
    }

    public function emergencies(){
        return $this->hasMany(DentalEmergency::class);
    }

    public function secondopinions(){
        return $this->hasMany(SecondOpinion::class);
    }
}
