<?php

namespace App\Models\Admin;

use App\Models\Appointment;
use App\Models\ClinicDentist;
use App\Models\ClinicService;
use Carbon\Carbon;
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



    public function getAvailableSlots($date, $doctorId)
    {
        $openingTime = Carbon::parse($this->opening_time);
        $closingTime = Carbon::parse($this->closing_time);
        $slots = [];
        while ($openingTime < $closingTime) {
            $slot = $openingTime->format('H:i');

            // Check if the slot is already booked for the given date and doctor
            $isBooked = Appointment::where('appointment_date', $date)
                ->where('time_slot', $slot)
                ->when($doctorId, function ($query) use ($doctorId) {
                    $query->where('doctor_id', $doctorId);
                }, function ($query) {
                    $query->whereNull('doctor_id'); // If doctor is assigned later
                })
                ->exists();

            if (!$isBooked) {
                $slots[] = $slot;
            }

            $openingTime->addMinutes(30); // Half-hour slots
        }
        return $slots;
    }


    public function users()
    {
        return $this->hasMany(ClinicUser::class, 'branch_id');
    }

    public function dentists()
    {
        return $this->hasMany(ClinicDentist::class);
    }
    public function services()
    {
        return $this->hasMany(ClinicService::class);
    }

    public function dentalservices()
    {
        return $this->hasMany(ClinicDentalService::class);
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
