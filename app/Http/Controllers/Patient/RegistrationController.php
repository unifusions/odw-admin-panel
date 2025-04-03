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
    public function login(Request $request)
    {
        $input = $request->input('identifier'); // 'identifier' is either email or phone

        if (filter_var($input, FILTER_VALIDATE_EMAIL)) {
            // It's an email
            $user = User::where('email', $input)->first();
        } elseif (preg_match('/^\+?[0-9]{7,15}$/', $input)) {
            // It's a phone number (7-15 digits, allowing optional + at the start)
            $user = User::where('phone', $input)->first();
        } else {
            return response()->json(['error' => 'Invalid email or phone number'], 400);
        }

        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        // Continue with authentication (e.g., send OTP or verify password)
        return response()->json(['message' => 'User found', 'user' => $user]);
    }
    public function register(Request $request)
    {
        // Check if user exists
        $user = User::where('email', $request->email)
            ->first();

        if ($user) {
            $status = true;
            return response()->json(['error' => 'Already registered. Login using Phone or Email'], 409);
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
