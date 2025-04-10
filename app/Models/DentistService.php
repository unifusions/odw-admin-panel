<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DentistService extends Model
{
    use HasFactory;

    protected $fillable = [
        'dentist_id', 'dental_service_id'
    ];
}
