<?php

namespace App\Models\Admin;

use App\ClinicScope;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Laravel\Sanctum\HasApiTokens;

class Dentist extends Model
{
    use HasApiTokens, SoftDeletes, ClinicScope;
    protected $fillable = [
        'name',
        'practise_from',
        'phone',
        'email',
        'photo'
    ];
}
