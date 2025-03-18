<?php

namespace App\Models\Admin;

use App\ClinicScope;
use Illuminate\Database\Eloquent\Model;

class Clinic extends Model
{
    
    use ClinicScope;
    protected $fillable = [
        'name',
       
        'logo'
    ];

   
    


    public function branches()
    {
        return $this->hasMany(ClinicBranch::class);
    }

    
    


    public function users()
    {
        return $this->hasMany(ClinicUser::class);
    }
}
