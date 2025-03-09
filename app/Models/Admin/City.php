<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    protected $fillable = ['name', 'state_id'];

    public function state()
    {
        return $this->belongsTo(State::class);
    }

    public function zipCodes()
    {
        return $this->hasMany(ZipCode::class);
    }
}
