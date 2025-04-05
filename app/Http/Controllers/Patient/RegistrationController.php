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
        $input = $request->input('email'); // 'identifier' is either email or phone

        if (filter_var($input, FILTER_VALIDATE_EMAIL)) {
            // It's an email
            $status = true;
            $user = User::where('email', operator: $input)->first();
        } elseif (preg_match('/^\+?[0-9]{7,15}$/', $input)) {
            // It's a phone number (7-15 digits, allowing optional + at the start)
            $user = User::where('phone', $input)->first();
        } else {
            return response()->json(['error' => 'Invalid email or phone number'], 400);
        }

        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        $otp = rand(100000, 999999);
        $key = 'otp_' . $request->email;
        Cache::put($key, $otp, now()->addMinutes(10));
        return response()->json(['status' => $status, 'otp' => $otp]);
    }
    public function register(Request $request)
    {
        $userExists = User::where('email', $request->email)
            ->orWhere('phone', $request->phone)
            ->exists();
        if ($userExists) {
            $status = true;
            return response()->json(['error' => 'Already registered. Login using Phone or Email'], 409);
        } else {

            $newUser = User::create([
                'name' => $request->fullname,
                'email' => $request->email,
                'phone' => $request->phone,
                'status' => false,

            ]);

            $status = false;
            $message = 'OTP sent for new registration';
        }

        $otp = rand(100000, 999999);
        // $key = $request->email ? 'otp_'.$request->email : 'otp_'.$request->phone;
        $key = 'otp_' . $request->email;
        Cache::put($key, $otp, now()->addMinutes(10));

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

        $user =  User::where('email', $request->email)
            ->orWhere('phone', $request->phone)
            ->exists();

        if ($user) {
            $otpDigits = implode("", $request->otp);
            $key =  'otp_' . $request->email;
            if (Cache::get($key) != $otpDigits) {
                return response()->json(['message' => $otpDigits], 400);
            }

            Cache::forget($key);
            $token = $user->createToken('authToken')->plainTextToken;

            return response()->json(['message' => 'OTP verified', 'token' => $token, 'user' => $user]);
        } else {
            return response()->json(['error' => 'Something Went Wrong'], 400);
        }
    }
}
