<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ZipCode extends Model
{
    use HasFactory;

    protected $fillable = [
        'city_id',
        'zip_code'
    ];

    public function city(){
        return $this->belongsTo(City::class);
    }
}
