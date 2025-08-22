<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InsuranceAttachement extends Model
{
    protected $fillable = [
        'insurance_id', 'file_name', 'path', 'size','ext'
    ];

    public function insurance(){
        return $this->belongsTo(Insurance::class);
    }
}

