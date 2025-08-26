<?php

namespace App\Models;

use App\Models\Admin\Clinic;
use App\Models\Admin\Dentist;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Pivot;

class ClinicDentist extends Pivot
{
    use HasFactory;

    protected $fillable = [
        'dentist_id', 'clinic_id', 'clinic_branch_id'
    ];

    // public function clinic(){
    //     return $this->hasOne(Clinic::class);
    // }

    // public function dentist(){
    //     return $this->belongsTo(Dentist::class);
    // }
    
}
