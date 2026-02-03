<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class Patient extends Model
{
    use Notifiable;
    protected $fillable = [
        'user_id',
        'avatar',
        'first_name',
        'middle_name',
        'last_name',
        'dob',
        'email',
        'phone_number',
        'sex'
    ];


    public $appends = ['avatar_url', 'phone_formatted'];

    public $casts = [
        'created_at' => 'datetime:m/d/Y H:i',
        'updated_at' => 'datetime:m/d/Y H:i',
        'deleted_at' => 'datetime:m/d/Y H:i'
    ];
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function insurances()
    {
        return $this->hasMany(Insurance::class);
    }

    public function appointments()
    {
        return $this->hasMany(Appointment::class);
    }

    public function emergencies()
    {
        return $this->hasMany(DentalEmergency::class);
    }

    public function secondopinions()
    {
        return $this->hasMany(SecondOpinion::class);
    }

    public function estimates()
    {
        return $this->hasMany(Estimate::class);
    }

    public function getAvatarUrlAttribute()
    {
        if (!$this->avatar) {
            return null;
        }


        return Storage::disk('public')->url($this->avatar);
    }
    public function getPhoneFormattedAttribute()
    {
        $phone = preg_replace('/\D+/', '', $this->phone_number);
        if (strlen($phone) === 10) {
            return '(' . substr($phone, 0, 3) . ') ' . substr($phone, 3, 3) . '-' . substr($phone, 6);
        }
        return $this->phone_number;
    }
    public static function yearlyRegistrationStats()
    {
        $startDate = now()->subMonths(11)->startOfMonth();
        $endDate = now()->endOfMonth();

        // Get counts grouped by year + month
        $data = self::select(
            DB::raw('YEAR(created_at) as year'),
            DB::raw('MONTH(created_at) as month'),
            DB::raw('COUNT(*) as registrations')
        )
            ->whereBetween('created_at', [$startDate, $endDate])
            ->groupBy('year', 'month')
            ->get()
            ->mapWithKeys(function ($item) {
                return [
                    $item->year . '-' . str_pad($item->month, 2, '0', STR_PAD_LEFT)
                    => $item->registrations
                ];
            });

        // Build last 12 months array
        return collect(range(0, 11))->map(function ($i) use ($data) {
            $date = now()->subMonths(11 - $i);

            $key = $date->format('Y-m');

            return [
                'month' => $date->format('M'),
                'registrations' => $data[$key] ?? 0,
            ];
        });
    }

    public function routeNotificationForMail()
    {
        return $this->email;
    }
}
