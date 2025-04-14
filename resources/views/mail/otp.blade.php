@php $title = 'Login OTP '; @endphp
@extends('mail.layout')
@section('content')
    <h2 style="text-align: center; font-weight: 700;">Verify Your Sign-Up</h2>
    <p style="text-align: center; font-size: 14px; color: #555;">We received a sign-up attempt with the following code.
        Please enter it in the browser window where you started signing up.</p>

    <div
        style="background: #eef1f6; text-align: center; margin: 30px auto; padding: 20px; border-radius: 8px; font-size: 32px; font-weight: bold; color: #333;">
        {{ $otp ?? '000000' }}
    </div>

    <p style="text-align: center; font-size: 13px; color: #777;">If you didn’t request this code, please ignore this email.
        The code will expire in 10 minutes.</p>
@endsection
