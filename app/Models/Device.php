<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Device extends Model
{
    
use Notifiable;
    protected $fillable = [ 
        'user_id',
        'name',
        'fcm_token',
        'apn_token',
        'device_id', 
        'platform',
        'manufacturer',
        'model',
        'last_active_at'
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function routeNotificationForApn()
    { 
        \Log::info('Sending APN to token: ' . $this->apn_token);
        return $this->apn_token; // Or whichever column stores your iOS device token
    }

    public function routeNotificationForFcm()
{
    return $this->fcm_token;
}

}
