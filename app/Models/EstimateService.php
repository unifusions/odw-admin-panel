<?php

namespace App\Models;

use App\Models\Admin\DentalService;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class EstimateService extends Model
{
    use HasFactory, HasApiTokens;

    protected $fillable = ['dental_care_id', 'estimate_id'];

    public function dentalcare(){
        return $this->belongsTo(DentalCare::class, 'dental_care_id');
    }
}
