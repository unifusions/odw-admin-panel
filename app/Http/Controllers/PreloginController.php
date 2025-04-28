<?php

namespace App\Http\Controllers;

use App\Mail\SendOtpMail;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class PreloginController extends Controller
{
    public function preLogin()
    {
        return Inertia::render('Auth/Prelogin', props: [

            'status' => session('status'),
        ]);
    }
    public function checkUser(Request $request)
    {
        $query = User::query();

        if ($request->filled('email')) {
            $query->where('email', $request->email);
        }

        if ($request->filled('phone')) {
            $query->where('phone', $request->phone);
        }

        $userExists = $query->exists();
        $user = $query->first();
        if ($userExists) {
            if ($user->isPatient()) {
                $otp = rand(100000, 999999);
                $key = 'otp_' . $request->email;
                Cache::put($key, $otp, now()->addMinutes(10));
                Mail::to($request->email)->send(new SendOtpMail($otp));
                return Inertia::render(
                    'Auth/TwoStep',
                    [
                        'email' => $request->email,
                        'otpDigits' => $otp
                    ]
                );
            } else {
                
                return Inertia::render(
                    'Auth/Login',
                    ['email' => $request->email]
                );

                // return redirect()->route('oldlogin')->with(['email' => $request->email,   'status' => session('status')]);
            }
        } else
            return redirect()->back()->with(['failed' => 'User Not Found']);
    }

    public function verifyOtp(Request $request)
    {

        $query = User::query();

        if ($request->filled('email')) {
            $query->where('email', $request->email);
        }

        if ($request->filled('phone')) {
            $query->where('phone', $request->phone);
        }

        $userExists = $query->exists();


        $user = $query->first();



        if ($userExists) {

            // $otpDigits = implode('', $request->otp);
            $otpDigits = $request->otp;

            // dd($otpDigits);
            $key =  'otp_' . $request->email;
            if (Cache::get($key) != $otpDigits) {
                return Inertia::render('Auth/TwoStep', [
                    'email' => $request->email,
                    'error' => 'Invalid OTP'
                ]);
            } else {
                Auth::login($user);
                $user->load('patient');
                Cache::forget($key);
                return redirect()->route('patient.dashboard');
            }
        } else {
        
            return redirect()->route('login')->with(['error' => 'Something went wrong']);
        }
    }
}
