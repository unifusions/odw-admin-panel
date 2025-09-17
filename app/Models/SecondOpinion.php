<?php

namespace App\Models;

use App\Models\Admin\SoReply;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SecondOpinion extends Model
{
   use HasFactory;
   protected $fillable = [
      'patient_id',
      'subject',
      'description',
      'hasEstimate',
      'is_quick',
      'last_visit',
      'status'
   ];


   protected $casts = [
      'is_quick' => 'boolean',
      'hasEstimate' => 'boolean'
   ];

   public function patient()
   {
      return $this->belongsTo(Patient::class, 'patient_id');
   }

   public function dentalcares()
   {
      return $this->hasMany(SoDentalCare::class);
   }



   public function attachments()
   {
      return $this->hasMany(SoAttachements::class);
   }

   public function replies()
   {
      return $this->hasOne(SoReply::class);
   }
}
