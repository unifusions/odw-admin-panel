<?php

namespace App\Http\Controllers\Patient\Api;

use App\Http\Controllers\Controller;
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

        $user->fcm_token = $request->fcm_token;
        $user->save();

        return response()->json(['message' => 'Token saved successfully']);
    }
}
