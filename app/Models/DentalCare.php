<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class DentalCare extends Model
{

    use SoftDeletes;
    protected $fillable = [
        'code', 'name', 'category_id', 'national_cost', 'odw_cost'
    ];

    public function category(){
        return $this->belongsTo(Category::class, 'category_id');
    }
}
