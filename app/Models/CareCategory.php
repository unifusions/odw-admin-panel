<?php

namespace App\Models;

use App\Models\Admin\DentalService;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Pivot;

class CareCategory extends Pivot
{
    //
    public $table='care_categories';

    public function cares(){
        return $this->belongsTo(DentalCare::class);
    }

    public function categories(){
        return $this->belongsTo(DentalService::class);
    }
}
