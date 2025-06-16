<?php

use App\Http\Controllers\Patient\Api\AppointmentController;
use App\Http\Controllers\Patient\Api\DentistController;
use App\Http\Controllers\Patient\Api\EstimateController;
use App\Http\Controllers\Patient\Api\InsuranceController;
use App\Http\Controllers\Patient\Api\ProfileController;
use App\Http\Controllers\Patient\Api\SecondOpinionController;
use App\Http\Controllers\Patient\ClinicController;
use App\Http\Controllers\Patient\DealsController;
use App\Http\Controllers\Patient\DentalServiceController;
use App\Http\Controllers\Patient\RegistrationController;
use App\Models\Estimate;
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
Route::get('/my-appointments', [AppointmentController::class,'myAppointment']);
Route::post('/book-appointment', [AppointmentController::class, 'bookAppointment']);
Route::get('/dental-services', DentalServiceController::class);
Route::get('/deals', DealsController::class);
Route::get('/clinics', ClinicController::class);

Route::get('/second-opinions', [SecondOpinionController::class, 'index']);
Route::post('/second-opinions/store',[SecondOpinionController::class, 'store']);

// PROFILE CONTROLLER

Route::get('/profile', [ProfileController::class, 'index']);

// INSURANCE CONTROLLER

Route::get('/insurance',[ InsuranceController::class, 'index']);
Route::post('/add-insurance',[ InsuranceController::class, 'store']);

// ESTIMATE CONTROLLER

// APPOINTMENT DENTIST CONTROLLERS

Route::get('/dentists-by-branch', [DentistController::class, 'dentistsByClinicBranch']);
Route::get('/dentalcare', [EstimateController::class, 'index']);




Route::middleware('auth:sanctum')->group(function () {
 
    
});
