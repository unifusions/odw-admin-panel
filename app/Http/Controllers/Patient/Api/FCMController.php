<?php

namespace App\Http\Controllers\Patient\Api;

use App\Http\Controllers\Controller;
use App\Models\Device;
use App\Models\User;
use Illuminate\Http\Request;

class FCMController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {



        $user = User::find($request->userId);
        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }
        Device::updateOrCreate([
            'user_id' => $user->id,
            'device_id' => $request->device_id,
        ], [
            'fcm_token' => $request->pushToken['token'],
            'platform' => $request->platform,
            'manufacturer' => $request->device_manufacturer,
            'last_active_at' => now()

        ]);



        return response()->json(['message' => 'Token saved successfully'], 200);
    }
}
