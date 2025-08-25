<?php

namespace App\Models;

use App\ClinicScope;
use App\Models\Admin\Clinic;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ClinicGallery extends Model
{
    use ClinicScope, HasFactory, SoftDeletes;
    protected $fillable = [
        'clinic_id',
        'file_name',
        'file_path',
    ];

    public function clinic()
    {
        return $this->belongsTo(Clinic::class);
    }
}
