<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    protected $fillable =[];
    public function insurances(){
        return $this->hasMany(Insurance::class);
    }

    public function appointments(){
        return $this->hasMany(Appoinment::class);
    }

    public function emergencies(){
        return $this->hasMany(DentalEmergency::class);
    }

    // public function secondopinions(){
    //     return $this->hasMany();
    // }
}
