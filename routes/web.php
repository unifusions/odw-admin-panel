
<?php

use App\Http\Controllers\Admin\AppointmentController;
use App\Http\Controllers\Admin\Clinic\AppointmentController as AdminClinicAppointmentController;
use App\Http\Controllers\Admin\Clinic\ClinicBranchController;
use App\Http\Controllers\Admin\Clinic\ClinicServiceController;
use App\Http\Controllers\Admin\Clinic\ClinicUserController;
use App\Http\Controllers\Admin\ClinicsBranchesListController;
use App\Http\Controllers\Admin\ClinicsController;
use App\Http\Controllers\Admin\ClinicsListController;
use App\Http\Controllers\Admin\CompareCostController;
use App\Http\Controllers\Admin\DealsController;
use App\Http\Controllers\Admin\DentistController;
use App\Http\Controllers\Admin\EstimateController;
use App\Http\Controllers\Admin\PatientsController;
use App\Http\Controllers\Admin\SecondOpinionController;
use App\Http\Controllers\Admin\ServiceController;
use App\Http\Controllers\Admin\UsersController;
use App\Http\Controllers\CitiesController;
use App\Http\Controllers\Clinic\AppointmentController as ClinicAppointmentController;
use App\Http\Controllers\Clinic\DashboardController as ClinicDashboardController;
use App\Http\Controllers\DentalServicesController;
use App\Http\Controllers\Patient\AppointmentController as PatientAppointmentController;
use App\Http\Controllers\Patient\DashboardController;
use App\Http\Controllers\PreloginController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StatesController;
use App\Http\Middleware\RoleMiddleware;
use App\Mail\SendOtpMail;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('send-test-mail', function () {
    return view('mail.otp');
    // Mail::to('siyamkumar@gmail.com')->send(new SendOtpMail('656280'));
})->name('sendtestmail');


Route::get('/login', [PreloginController::class, 'preLogin'])->name('login');
Route::post('/two-factor', [PreloginController::class, 'checkUser'])->name('checkuser');
Route::post('/authentication', [PreloginController::class, 'verifyOtp'])->name('verifyotp');
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::get('/states', StatesController::class);
Route::get('/cities/{state}', CitiesController::class);
Route::get('/dental-services', DentalServicesController::class);

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->prefix('admin')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::middleware(['auth', 'role:super_admin'])->prefix('admin')->group(function () {

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('admin.dashboard');
    Route::resource('appointments', AppointmentController::class);
    Route::resource('second-opinion', SecondOpinionController::class);
    Route::resource('estimates', EstimateController::class);
    Route::resource('compare-costs', CompareCostController::class);
    Route::resource('patients', PatientsController::class);

    Route::resource('clinics', ClinicsController::class);
    Route::resource('clinics.branches', ClinicBranchController::class);
    Route::resource('clinics.users', ClinicUserController::class);
    Route::resource('clinics.services', ClinicServiceController::class);

    Route::get('/allclinics', ClinicsListController::class)->name('clinicslist');
    Route::get('/clinicbranches/{clinic}', ClinicsBranchesListController::class);

    Route::resource('dentists', DentistController::class);
    Route::resource('clinic-users', UsersController::class);



    Route::resource('services', ServiceController::class);

    Route::resource('deals', DealsController::class);
});

Route::middleware(['auth', 'role:clinic_admin'])->prefix('clinic/admin')->group(function () {
    Route::get('/dashboard', ClinicDashboardController::class)->name('clinic.dashboard');
    Route::resource('users', UsersController::class);
    Route::get('/appointments', [AdminClinicAppointmentController::class, 'index']);
    Route::get('/appointments/pending', [AdminClinicAppointmentController::class, 'pendingAppointment'])->name('appointments.pending');
    Route::put('/appointments/confirm/{appointment}', [AdminClinicAppointmentController::class, 'confirmAppointment'])->name('appointments.confirm');
    Route::put('/appointments/cancel/{appointment}', [AdminClinicAppointmentController::class, 'cancelAppointment'])->name('appointments.cancel');
});

// Route::middleware(['auth', 'role:clinic_user'])->group(function () {
//     // Route::get('/clinic/user/dashboard', [UserController::class, 'index']);
// });

// Route::middleware(['auth', 'role:clinic_doctor'])->group(function () {
//     // Route::get('/doctor/dashboard', [DoctorController::class, 'index']);
// });

Route::middleware(['auth', 'role:patient'])->prefix('patient')->group(function () {
    Route::get('/dashboard', DashboardController::class)->name('patient.dashboard');
    Route::get('/appointments', [PatientAppointmentController::class, 'index'])->name('patient.appointments.index');

    Route::get('/appointments/{branch}', [PatientAppointmentController::class, 'clinicView'])->name('patient.appointments.clinic');
    Route::get('/appointments/{branch}/slots', [PatientAppointmentController::class, 'getAvailableSlots'])->name('patient.appointments.slots');
    Route::post('/appointments/{branch}/bookappointment', [PatientAppointmentController::class, 'bookAppointment'])->name('patient.appointments.booking');
});

require __DIR__ . '/auth.php';

Route::get('preview-notification', function () {
    return view('mail.appointmentconfirmation');
}); 

// Route::middleware('api')->prefix('api')->group(function () {
//     require __DIR__ . '/api.php';
// });
