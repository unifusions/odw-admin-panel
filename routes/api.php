<?php

use App\Http\Controllers\Patient\DentalServiceController;
use App\Http\Controllers\Patient\RegistrationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::post('/verify-otp', [RegistrationController::class, 'verifyOtp']);
Route::post('/register', [RegistrationController::class, 'register']);
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');



Route::middleware('auth:sanctum')->group(function(){
    Route::get('/dental-services', DentalServiceController::class);
   
});
