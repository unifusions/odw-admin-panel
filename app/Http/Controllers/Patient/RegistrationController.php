<?php

namespace App\Http\Controllers\Patient;

use App\Http\Controllers\Controller;
use App\Mail\SendOtpMail;
use App\Models\Patient;
use App\Models\User;
use App\Services\FcmNotificationService;
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

        $input = $request->input('loginInput');
        $isEmail = false;

        if (filter_var($input, FILTER_VALIDATE_EMAIL)) {
            $isEmail = true;
            $status = true;
            $user = User::where('email', $input)->first();
        } else {
            $isEmail = false;
            $input = preg_replace("/[^0-9]/", "", $input);

            if (preg_match('/^\+?[0-9]{7,15}$/', $input)) {
                // It's a phone number (7-15 digits, allowing optional + at the start)
                $input = "+{$input}";

                $user = User::where('phone', $input)->first();
            } else {
                return response()->json(['error' => 'Invalid email or phone number'], 400);
            }
        }

        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        $otp = rand(100000, 999999);
        $key =   'otp_' . $input;
        Cache::put($key, $otp, now()->addMinutes(10));
        if ($isEmail) {
            Mail::to($input)->send(new SendOtpMail($otp));
        }
        return response()->json(['status' => $status, 'otp' => $otp, 'user' => $user, 'loginInput' => $input, 'isEmail' => $isEmail]);
    }
    public function register(Request $request)
    {

        // dd($request->input('phone'));

        $email = $request->input('email');
        $phone =  preg_replace("/[^0-9]/", "", $request->input('phone'));

        $user = null;



        if ($email) {
            $user = User::where('email', $email)->first();
        }

        if (!$user && $phone) { // Only search by phone if no user found by email
            $user = User::where('phone', $phone)->first(); // Assuming 'phone_number' is your phone column
        }


        if ($user) {
            // User found, you can now check for the other field if needed
            // For example, if you found by email, check if phone number exists for that user
            if ($email && !$user->phone) {
                // User found by email, but no phone number associated
                // You might want to prompt the user to add a phone number
                return response()->json(['error' => 'Email is already registered. Login using Email'], 409);
            } elseif ($phone && !$user->email) {
                return response()->json(['error' => 'Phone Number is already registered. Login using Phone'], 409);
            }
            // Proceed with your logic for the found user
            return response()->json(['error' => 'Email & Phone number is already registered. Login using Phone or Email'], 409);
        } else {
            // No user found with either email or phone
            $newUser = User::create([
                'name' => $request->fullname,
                'email' => $email,
                'phone' => $phone,
                'password' => Hash::make(uniqid()),
                'status' => false,

            ]);

            $patient = Patient::create([
                'user_id' => $newUser->id,
                'first_name' => $newUser->name,
                'email' => $email,
                'phone_number' => $phone,

            ]);

            $status = false;
            $message = 'OTP sent for new registration';
        }


        $otp = rand(100000, 999999);
        $key = $request->email ? 'otp_' . $request->email : 'otp_' . $request->phone;

        // $key = 'otp_' . $request->email;
        Mail::to($request->email)->send(new SendOtpMail($otp));
        Cache::put($key, $otp, now()->addMinutes(10));

        // return response()->json(['status' => 'success', 'message' => $message, 'otp' => $otp]);

        return response()->json([
            'status' => $status,
            'otp' => $otp,
            'user' => $newUser,
            'loginInput' => $email ,
            'isEmail' => false
        ], 200);
    }

    public function verifyOtp(Request $request)
    {

        $input = $request->input('loginInput');

        if (filter_var($input, FILTER_VALIDATE_EMAIL)) {
            // It's an email
            $status = true;
            $user = User::where('email',  $input)->first();
        } else {
            if (preg_match('/^\+?[0-9]{7,15}$/', $input))
                $user = User::where('phone', $input)->first();
        }



        if ($user) {

            $otpDigits = implode("", $request->otp);
            // $key = $request->email ? 'otp_' . $request->email : 'otp_' . $request->phone;
            $key = 'otp_' . $input;
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

        $user->expo_token = $request->input('token');
        $user->save();

        return response()->json(['success' => true]);
    }

    public function resendOtp(Request $request)
    {
        $user = null;
        $input = $request->input('loginInput');
        $isEmail = $request->input('isEmail');

        $otp = rand(100000, 999999);
        $key =   'otp_' . $input;
        Cache::put($key, $otp, now()->addMinutes(10));

        if ($isEmail) {

            $user = User::where('email', $input)->first();

            Mail::to($input)->send(new SendOtpMail($otp));
        } else {
            $user = User::where('email', $input)->first();
        }


        return response()->json([
            'message' => 'OTP has been Resent',
            'user' => $user,
            'loginInput' => $input,
            'isEmail' => $isEmail
        ]);
    }
}
