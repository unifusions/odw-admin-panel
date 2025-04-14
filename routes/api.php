<?php

use App\Http\Controllers\Patient\Api\AppointmentController;
use App\Http\Controllers\Patient\ClinicController;
use App\Http\Controllers\Patient\DealsController;
use App\Http\Controllers\Patient\DentalServiceController;
use App\Http\Controllers\Patient\RegistrationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::post('/verify-otp', [RegistrationController::class, 'verifyOtp']);
Route::post('/login', [RegistrationController::class, 'login']);
Route::post('/register', [RegistrationController::class, 'register']);
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Route::get('/clinics', ClinicController::class);


//ADD URLS BELOW SANCTUM 


Route::middleware('auth:sanctum')->group(function () {
    Route::get('/dental-services', DentalServiceController::class);
    Route::get('/deals', DealsController::class);
    Route::get('/clinics', ClinicController::class);
    Route::post('/book-appointment', [AppointmentController::class, 'bookAppointment']);
});
