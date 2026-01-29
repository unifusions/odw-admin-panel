<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AppointmentReschedule extends Model
{
   protected $fillable= ["appointment_id","appointment_date","time_slot","rescheduled_by","user_id"];
}
