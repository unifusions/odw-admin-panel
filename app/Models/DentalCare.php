<?php

namespace App\Models;

use App\Models\Admin\DentalService;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class DentalCare extends Model
{

    use SoftDeletes;
    protected $fillable = [
        'code', 'name', 'dental_service_id', 'national_cost', 'odw_cost'
    ];

    public function category(){
        return $this->belongsTo(Category::class, 'category_id');
    }

    public function dentalservice(){
        return $this->belongsTo(DentalService::class, 'dental_service_id');
    }
}
