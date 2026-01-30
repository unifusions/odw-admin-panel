<?php

namespace App\Models;

use App\ClinicScope;
use App\Models\Admin\AppointmentHistory;
use App\Models\Admin\Clinic;
use App\Models\Admin\ClinicBranch;
use App\Models\Admin\DentalService;
use App\Models\Admin\Dentist;
use App\Notifications\AppointmentConfirmedNotification;
use App\Notifications\AppointmentConfirmedPushNotification;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Laravel\Sanctum\HasApiTokens;

class Appointment extends Model
{
    use HasApiTokens, ClinicScope, HasFactory;
    protected $fillable = [
        'clinic_id',
        'patient_id',
        'appointment_date',
        'time_slot',
        'status',
        'reschedule_count',
        'dental_service_id',
        'appointable_id',
        'appointable_type',
        'is_confirmed',
        'reschedule_requested_by'
    ];
    protected $appends = ['appointable_label'];

    public function patient()
    {
        return $this->belongsTo(Patient::class, 'patient_id');
    }

    public function dentalservices()
    {
        return $this->hasMany(AppointmentService::class);
    }

    public function clinic()
    {
        return $this->belongsTo(Clinic::class);
    }

    public function clinicbranch()
    {
        return $this->belongsTo(ClinicBranch::class, 'clinic_branch_id');
    }

    public function dentalservice()
    {
        return $this->belongsTo(DentalService::class, 'dental_service_id', 'id');
    }

    public function dentist()
    {
        // return $this->hasOneThrough(Dentist::class,ClinicDentist::class, 'dentist_id', 'id','clinic_dentist_id', 'dentist_id');
        return $this->hasOneThrough(
            Dentist::class,
            ClinicDentist::class,
            'id',                 // ClinicDentist.id
            'id',                 // Dentist.id
            'clinic_dentist_id',  // Appointment.clinic_dentist_id
            'dentist_id'          // ClinicDentist.dentist_id
        );
    }

    public function appointable()
    {
        return $this->morphTo();
    }

    public function histories()
    {
        return $this->hasMany(AppointmentHistory::class);
    }
    public function getAppointableLabelAttribute()
    {
        return class_basename($this->appointable_type);
    }
    public static function weeklyStats()
    {

        $days = collect(range(0, 6))->map(function ($i) {
            $date = Carbon::now()->subDays(6 - $i);

            return [
                'date' => $date->toDateString(),
                'day' => $date->format('D'), // Mon, Tue
                'appointments' => 0,
                'completed' => 0,
            ];
        });

        $data = self::select(
            DB::raw("DATE(created_at) as date"),
            DB::raw("COUNT(*) as appointments"),
            DB::raw("SUM(is_confirmed = 1) as completed")
        )
            ->where('created_at', '>=', Carbon::now()->subDays(6)->startOfDay())
            ->groupBy('date')
            ->get()
            ->keyBy('date');

        // 3️⃣ Merge DB data into day skeleton
        return $days->map(function ($day) use ($data) {
            if ($data->has($day['date'])) {
                $day['appointments'] = (int) $data[$day['date']]->appointments;
                $day['completed'] = (int) $data[$day['date']]->completed;
            }

            unset($day['date']); // remove helper key
            return $day;
        })->values();
    }

    public static function indexMonthlyStats()
    {

        $currentMonth = Carbon::now()->month;
        $currentYear = Carbon::now()->year;
        // self::whereMonth('created_at', $currentMonth)
//                     ->whereYear('created_at', $currentYear)
//                     ->where('status', 'pending')
//                     ->count(),
        return [
            'pending' => self::where('status', 'pending')->count(),
            'confirmed' => self::where('status', 'confirmed')->count(),
            'cancelled' => self::where('status', 'cancelled')->count(),
            'completed' => self::where('status', 'completed')->count()
        ];
    }

    // NOTIFICATIONS

    public function confirm()
    {
        // $this->update(['status' => 'confirmed',
        // 'is_confirmed' => true]);
        $this->notifyPatient();
    }


    protected function notifyPatient()
    {
        $user = $this->patient->user;

        if (!$user) {
            return;
        }



        foreach ($user->devices as $device) {
            $device->notify(new AppointmentConfirmedPushNotification($this));
        }
    }

}
