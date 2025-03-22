<?php

namespace App\Http\Controllers\Patient;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegistrationController extends Controller
{
    public function register(Request $request)
    {
        // Check if user exists
        $user = User::where('email', $request->email)
            ->first();

        if ($user) {
            $status = true;
            $message = 'OTP sent for login verification';
        } else {
            $status = false;
            $message = 'OTP sent for new registration';
        }

        $otp = rand(100000, 999999);
        // $key = $request->email ? 'otp_'.$request->email : 'otp_'.$request->phone;
        $key = 'otp_' . $request->email;
        Cache::put($key, $otp, now()->addMinutes(10));

        // TODO: Implement actual OTP sending via SMS or email
        // Mail::to($request->email)->send(new OtpMail($otp));
        // or send via Twilio

        return response()->json(['status' => $status, 'message' => $message, 'otp' => $otp]);
    }

    public function verifyOtp(Request $request)
    {
        // $validator = Validator::make($request->all(), [
        //     'email' => 'nullable|email',
        //     'phone' => 'nullable|digits:10',
        //     'otp' => 'required|digits:6',
        // ]);

        // if ($validator->fails()) {
        //     return response()->json(['message' => 'Invalid input', 'errors' => $validator->errors()], 422);
        // }

        $otpDigits = implode("", $request->otp);
        $key =  'otp_' . $request->email;
        if (Cache::get($key) != $otpDigits) {
            return response()->json(['message' => $otpDigits], 400);
        }

        // Register or authenticate user
        $user = User::updateOrCreate(
            ['email' => $request->email],
            ['password' => Hash::make(uniqid())]
        );

        Cache::forget($key);
        $token = $user->createToken('authToken')->plainTextToken;

        return response()->json(['message' => 'OTP verified', 'token' => $token]);
    }
}
