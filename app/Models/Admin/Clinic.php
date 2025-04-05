<?php

namespace App\Models\Admin;

use App\ClinicScope;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Clinic extends Model
{
    
    use ClinicScope, HasFactory;
    protected $fillable = [
        'name',
       
        'logo'
    ];

   
    


    public function branches()
    {
        return $this->hasMany(ClinicBranch::class,'clinic_id', 'id');
    }

    
    


    public function users()
    {
        return $this->hasMany(ClinicUser::class);
    }
}
