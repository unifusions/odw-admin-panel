<?php

namespace App\Models\Admin;

use App\Models\Appointment;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;

class AppointmentHistory extends Model
{

    public $timestamps = false; // we already track performed_at
    protected $fillable = ['appointment_id', 'user_id', 'action', 'actor_type', 'remarks', 'performed_at'];

    public function appointment()
    {
        return $this->belongsTo(Appointment::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
