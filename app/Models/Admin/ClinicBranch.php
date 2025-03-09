<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClinicBranch extends Model
{
    use HasFactory;

    protected $fillable = [
        'clinic_id',
        'name',
        'address_line_1',
        'address_line_2',
        'phone',
        'email',
        'zip_code_id'
    ];

    public function clinic()
    {
        return $this->belongsTo(Clinic::class);
    }




    public function users()
    {
        return $this->hasMany(ClinicUser::class, 'branch_id');
    }

    public function zipCode()
    {
        return $this->belongsTo(ZipCode::class);
    }

    public function city()
    {
        return $this->hasOneThrough(City::class, ZipCode::class, 'id', 'id', 'zip_code_id', 'city_id');
    }

    public function state()
    {
        return $this->hasOneThrough(State::class, City::class, 'id', 'id', 'city_id', 'state_id');
    }
    
}
