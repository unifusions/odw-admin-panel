<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class DentalService extends Model
{
    use HasApiTokens, HasFactory,Notifiable;
    
    protected $fillable = [
        'name',
        'desc',
        'cost'
    ];
}
