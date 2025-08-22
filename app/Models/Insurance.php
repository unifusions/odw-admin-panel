<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use PDO;

class Insurance extends Model
{
    use HasFactory;

    protected $fillable = [
        'patient_id',
        'first_name',
        'last_name',
        'relation',
        'address_line_1',
        'address_line_2',
        'address_line_3',
        'state_id',
        'city_id',
        'zip_code_id',
        'mode',
        'state',
        'city',
        'zip_code',
        'member_id',
        'dob',
        'insurance_provider',
        'carrier',
        'plan_no',
        'is_current',
        'status',

    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }

    public function attachments(){
        return $this->hasMany(InsuranceAttachement::class);
    }
}
