<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Note extends Model
{
   protected $fillable = [
     'type',
        'title',
        'content',
       
        'user_id',
   ];

   protected $casts = [
        'meta' => 'array',
    ];

    public function noteable()
    {
        return $this->morphTo();
    }
}
