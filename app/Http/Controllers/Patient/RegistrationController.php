<?php

namespace App\Http\Controllers\Patient;

use App\Http\Controllers\Controller;
use App\Mail\SendOtpMail;
use App\Models\Patient;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Password;
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
        // Mail::to($request->email)->send(new SendOtpMail($otp));
        return response()->json(['status' => $status, 'otp' => $otp, 'user' => $user]);
    }
    public function register(Request $request)
    {
     
        if (!$request->email && !$request->phone) {
            return response()->json(['error' => 'Empty Inputs'], 410);
            // no input to check
        }
        
        $exists = User::where(function($query) use ($request) {
            $query->when($request->email, fn($q) => $q->where('email', $request->email))
                  ->when($request->phone, fn($q) => $q->orWhere('phone', $request->phone));
        })->exists();

        // $userExists =  User::when($request->email, fn($q) => $q->where('email', $request->email))
        // ->when($request->phone, fn($q) => $q->orWhere('phone', $request->phone))
        // ->exists();
        // dd($exists);
        // User::where('email', $request->email)
        //     ->orWhere('phone', $request->phone)
        //     ->exists();
        if ($exists) {
            $status = true;
            return response()->json(['error' => 'Already registered. Login using Phone or Email'], 409);
        } else {

            $newUser = User::create([
                'name' => $request->fullname,
                'email' => $request->email,
                'phone' => $request->phone,
                'password' => Hash::make(uniqid()),
                'status' => false,

            ]);

            $patient = Patient::create([
                'user_id' => $newUser->id,
                'first_name' => $newUser->name,
                'email' => $newUser->email,
                'phone_number' => $newUser->phone,

            ]);

            $status = false;
            $message = 'OTP sent for new registration';
        }

        $otp = rand(100000, 999999);
        $key = $request->email ? 'otp_' . $request->email : 'otp_' . $request->phone;

        // $key = 'otp_' . $request->email;
        // Mail::to($request->email)->send(new SendOtpMail($otp));
        Cache::put($key, $otp, now()->addMinutes(10));

        return response()->json(['status' => $status, 'message' => $message, 'otp' => $otp]);
    }

    public function verifyOtp(Request $request)
    {

        $input = $request->input('email');

        if (filter_var($input, FILTER_VALIDATE_EMAIL)) {
            // It's an email
            $status = true;
            $user = User::where('email', operator: $input)->first();
        } else {
            if (preg_match('/^\+?[0-9]{7,15}$/', $input))
                $user = User::where('phone', $input)->first();
        }



        if ($user) {


            $otpDigits = implode("", $request->otp);
            $key = $request->email ? 'otp_' . $request->email : 'otp_' . $request->phone;
            if (Cache::get($key) != $otpDigits) {
                return response()->json(['message' => $otpDigits], 400);
            }

            Cache::forget($key);
            $token = $user->createToken('authToken')->plainTextToken;

            $user->load('patient');
            return response()->json(['message' => 'OTP verified', 'token' => $token, 'user' => $user]);
        } else {
            return response()->json(['error' => 'Something Went Wrong'], 400);
        }
    }

    public function storeExpoToken(Request $request)
    {
        $request->validate(['token' => 'required|string']);
        $user = $request->user();

        $user->expo_token = $request->token;
        $user->save();

        return response()->json(['success' => true]);
    }
}
