<?php

namespace App\Models\Admin;

use App\ClinicScope;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class ClinicDentalService extends Model
{
    use ClinicScope, HasApiTokens, HasFactory;

    protected $fillable = [
        'clinic_id',
        'clinic_branch_id',
        'dental_service_id'
    ];

    public function dentalservice(){
        return $this->belongsTo(DentalService::class, 'dental_service_id');
    }
    public function branches(){
        return $this->belongsTo(ClinicBranch::class, 'clinic_branch_id');
    }

}
