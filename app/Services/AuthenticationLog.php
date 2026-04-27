<?php

namespace App\Services;

use App\Models\Log;
use App\Models\User;
 

class AuthenticationLog  {
     
      public function logSuccessfulLogin(User $user, $input)
    {
        $locations = request()->input('location');
        $location = $locations[0];

        $street = $location['street'] . ', ' . $location['region']; 
        Log::create([
            'user_id' => $user->id,
            'email' => $user->email,
            
            'login_input' => $input,
            'ip' => request()->ip(),
            'device' => request()->input('device'),
            'location' => $street,
            
        ]);
    
    }
}