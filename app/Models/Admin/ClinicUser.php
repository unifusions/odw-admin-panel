<?php

namespace App\Models\Admin;

use App\ClinicScope;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClinicUser extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'clinic_id', 'clinic_branch_id', 'role'];

    // protected static function booted()
    // {
    //     if(auth()->check()){
    //         static::addGlobalScope('clinic', function (Builder $builder) {
               
    //             $user = auth()->user();
    //             // // dd($user);
    //             $mainuser = User::with('clinicuser')->find('user_id', $user->id);
    //             dd($mainuser);
    //             if ($user && !in_array($user->role, ['super_admin', 'patient'])) {
    //                 $clinicId = ClinicUser::where('user_id', $user->id)->value('clinic_id');
                   
    //                 if ($clinicId) {
    //                     $builder->where('clinic_id', $clinicId);
    //                 }
    //             }
    //         });
    //     }
        
    // }

    public function clinic()
    {
        return $this->belongsTo(Clinic::class, 'clinic_id');
    }

    public function branch()
    {
        return $this->belongsTo(ClinicBranch::class, 'clinic_branch_id', 'id');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
