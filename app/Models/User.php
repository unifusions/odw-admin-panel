<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use App\ClinicScope;
use App\Models\Admin\Clinic;
use App\Models\Admin\ClinicBranch;
use App\Models\Admin\ClinicUser;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Auth;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{

    use HasFactory, Notifiable, ClinicScope, HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
        'status',
        'phone',
        'expo_token',
        'fcm_token',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
        'expo_token'
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

    public function userclinic()
    {
        return $this->hasOneThrough(Clinic::class, ClinicUser::class);
    }
    public function clinicUsers()
    {
        return $this->hasMany(ClinicUser::class, 'user_id');
    }

    public function branch()
    {
        return $this->hasOneThrough(ClinicBranch::class, ClinicUser::class, 'user_id', 'id', 'id', 'clinic_branch_id');
    }

    public function patient()
    {
        return $this->hasOne(Patient::class);
    }

    public function clinic()
    {
        return $this->hasOneThrough(
            Clinic::class,
            ClinicUser::class,
            'user_id',  // Foreign key on ClinicUser table
            'id',       // Local key on Clinic table
            'id',       // Local key on User table
            'clinic_id' // Foreign key on ClinicUser table
        )->select('clinics.*');
    }

    public function devices()
    {
        return $this->hasMany(Device::class);
    }

    public static function currentMonthRegistration()
    {
        // Define the date range you want
        $startDate = Carbon::now()->startOfMonth();
        $endDate = Carbon::now()->endOfMonth();
        // Get user counts grouped by date

        $users = User::selectRaw('DATE(created_at) as date, COUNT(*) as total')
            ->whereBetween('created_at', [$startDate, $endDate])->where('role', 'patient')
            ->groupByRaw('DATE(created_at)')
            ->orderBy('date')
            ->get()
            ->keyBy('date');

        $labels = [];
        $data = [];

        $period = new \DatePeriod(
            $startDate,
            new \DateInterval('P1D'),
            $endDate->copy()->addDay()
        );

        foreach ($period as $date) {
            $label = $date->format('M j'); // eg: "Apr 1"
            $labels[] = $label;

            $dateKey = $date->format('Y-m-d');
            $data[] = $users[$dateKey]->total ?? 0;
        }

        return [
            'labels' => $labels,
            'data' => $data,
        ];
    }

    public static function monthlyRegistration()
    {
        // Define the date range you want
        $startDate = Carbon::now()->subMonth()->startOfMonth();
        $endDate = Carbon::now()->subMonth()->endOfMonth();
        // Get user counts grouped by date

        $users = User::whereBetween('created_at', [$startDate, $endDate])->where('role', 'patient')

            ->get()->count();



        return [
            'current' => User::whereBetween('created_at', [Carbon::now()->startOfMonth(), Carbon::now()->endOfMonth()])->where('role', 'patient')

                ->get()->count(),
            'previous' => $users,
        ];
    }

    public function routeNotificationForMail()
    {
      
        return $this->email;
    }

    public function routeNotificationForTwilio()
{
    return $this->phone;
}
    
    // public function routeNotificationForFcm()
    // {
        
    //     $tokens = $this->devices()
    //     ->whereNotNull('fcm_token')
    //     ->where('fcm_token', '!=', '')
    //     ->pluck('fcm_token')
    //     ->toArray();
 
    //         return $tokens;
    // }

    // public function routeNotificationForApn()
    // {
    //   $tokens = $this->devices()
    //     ->whereNotNull('apn_token')
    //     ->where('apn_token', '!=', '')
    //     ->pluck('apn_token')
    //     ->toArray();

    // return $tokens;
    // }

}
