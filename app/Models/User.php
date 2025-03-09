<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use App\ClinicScope;
use App\Models\Admin\Clinic;
use App\Models\Admin\ClinicUser;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Auth;

class User extends Authenticatable
{
    
    use HasFactory, Notifiable, ClinicScope;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'role'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    const ROLE_SUPER_ADMIN = 'super_admin';
    const ROLE_CLINIC_ADMIN = 'clinic_admin';
    const ROLE_CLINIC_USER = 'clinic_user';
    const ROLE_CLINIC_DOCTOR = 'clinic_doctor';
    const ROLE_PATIENT = 'patient';

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */

    protected static function boot()
    {
        parent::boot();
        static::bootClinicScope(); // Load scope from trait
    }

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function isSuperAdmin()
    {
        return $this->role === self::ROLE_SUPER_ADMIN;
    }

    public function isClinicAdmin()
    {
        return $this->role === self::ROLE_CLINIC_ADMIN;
    }

    public function isClinicUser()
    {
        return $this->role === self::ROLE_CLINIC_USER;
    }

    public function isClinicDoctor()
    {
        return $this->role === self::ROLE_CLINIC_DOCTOR;
    }

    public function isPatient()
    {
        return $this->role === self::ROLE_PATIENT;
    }

    public function userclinic(){
        return $this->hasOneThrough(Clinic::class, ClinicUser::class);
    }
    public function clinicUser()
    {
        return $this->hasOne(ClinicUser::class, 'user_id');
    }
}
