
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
use App\Http\Controllers\Admin\DashboardController as AdminDashboardController;
use App\Http\Controllers\Admin\DealsController;
use App\Http\Controllers\Admin\DentistController;
use App\Http\Controllers\Admin\EstimateController;
use App\Http\Controllers\Admin\EstimateReplyController;
use App\Http\Controllers\Admin\FilesController;
use App\Http\Controllers\Admin\PatientsController;
use App\Http\Controllers\Admin\SearchController;
use App\Http\Controllers\Admin\SecondOpinionController;
use App\Http\Controllers\Admin\SecondOpinionReplyController;
use App\Http\Controllers\Admin\ServiceController;
use App\Http\Controllers\Admin\SettingsController;
use App\Http\Controllers\Admin\SpecialistController;
use App\Http\Controllers\Admin\UsersController;
use App\Http\Controllers\CitiesController;
use App\Http\Controllers\Clinic\AppointmentController as ClinicAppointmentController;
use App\Http\Controllers\Clinic\DashboardController as ClinicDashboardController;
use App\Http\Controllers\DentalServicesController;
use App\Http\Controllers\Patient\AppointmentController as PatientAppointmentController;
use App\Http\Controllers\Patient\DashboardController;
use App\Http\Controllers\PreloginController;
use App\Http\Controllers\PrivacyPolicyController;
use App\Http\Controllers\SupportController;
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

Route::get('privacy-policy', PrivacyPolicyController::class );
Route::get('support', SupportController::class );


// Route::get('/login', [PreloginController::class, 'preLogin'])->name('login');
// Route::post('/two-factor', [PreloginController::class, 'checkUser'])->name('checkuser');
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



    Route::get('/dashboard', AdminDashboardController::class)->name('admin.dashboard');
    Route::resource('appointments', AppointmentController::class);
    Route::put('/appointments/confirm/{appointment}', [AppointmentController::class, 'confirmAppointment'])->name('appointments.confirm');
    
    Route::put('/appointments/reschedule/{appointment}', [AppointmentController::class, 'rescheduleAppointment'])->name('appointments.reschedule');
    
    Route::get('/appointments/status/pending/', [AppointmentController::class, 'pendingAppointment'])->name('appointments.pending');
    Route::put('/appointments/status/cancel/{appointment}', [AppointmentController::class, 'cancelAppointment'])->name('appointments.cancel');

    Route::resource('second-opinion', SecondOpinionController::class);

    Route::resource('second-opinion.replies', SecondOpinionReplyController::class)->only(['store']);
    Route::post('second-opinion/{second_opinion}/status', [SecondOpinionController::class, 'updateStatus'])->name('second-opinion.status');
    Route::resource('estimates', EstimateController::class);
    Route::resource('estimates.replies', EstimateReplyController::class)->only('store');
    Route::post('estimates/{estimate}/status', [EstimateController::class, 'updateStatus'])->name('estimates.status');
    
    Route::resource('compare-costs', CompareCostController::class);

    Route::patch('/compare-costs/{compare_cost}/toggle-featured', [CompareCostController::class, 'toggleFeatured'])
        ->name('compare-costs.toggle-featured');

    Route::resource('patients', PatientsController::class);

    Route::resource('clinics', ClinicsController::class);
    Route::post('/clinics/{clinic}/update-schedule', [ClinicsController::class, "updateSchedule"])->name('clinics.updateSchedule');
    Route::post('/clinics/{clinic}/update-services', [ClinicsController::class, "updateServices"])->name('clinics.updateServices');
    Route::delete('/clinics/{clinic}/delete-gallery/{gallery}', [ClinicsController::class, "destroyGallery"])->name('clinics.destroyGallery');

    Route::resource('clinics.branches', ClinicBranchController::class);
    Route::resource('clinics.users', ClinicUserController::class);
    Route::resource('clinics.services', ClinicServiceController::class);

    Route::get('/allclinics', ClinicsListController::class)->name('clinicslist');
    Route::get('/clinicbranches/{clinic}', ClinicsBranchesListController::class);

    Route::resource('dentists', DentistController::class);
    Route::resource('specialists', SpecialistController::class);
    Route::resource('clinic-users', UsersController::class);



    Route::resource('services', ServiceController::class);

    Route::resource('deals', DealsController::class);

    Route::prefix('settings')->group(function () {
        Route::get('/{group}', [SettingsController::class, 'index'])->name('admin.settings.index');
        Route::put('/{group}', [SettingsController::class, 'update'])->name('admin.settings.update');
    });
    // SEARCH

    Route::get("/search", SearchController::class)->name('search');
});

Route::middleware(['auth', 'role:clinic_admin'])->prefix('clinic/admin')->group(function () {
    Route::get('/dashboard', ClinicDashboardController::class)->name('clinic.dashboard');
    Route::resource('users', UsersController::class);
    Route::get('/appointments', [AdminClinicAppointmentController::class, 'index'])->name('clinic.appointments.index');;
    Route::get('/appointments/pending', [AdminClinicAppointmentController::class, 'pendingAppointment'])->name('clinic.appointments.pending');
    Route::put('/appointments/confirm/{appointment}', [AdminClinicAppointmentController::class, 'confirmAppointment'])->name('clinic.appointments.confirm');
    Route::put('/appointments/cancel/{appointment}', [AdminClinicAppointmentController::class, 'cancelAppointment'])->name('clinic.appointments.cancel');
});

Route::middleware(['auth', 'role:clinic_user'])->prefix('clinic/user')->group(function () {
    Route::get('/dashboard', ClinicDashboardController::class)->name('clinic.user.dashboard');

    Route::get('/appointments', [AdminClinicAppointmentController::class, 'index'])->name('clinic.user.appointments.index');
    Route::get('/appointments/pending', [AdminClinicAppointmentController::class, 'pendingAppointment'])->name('clinic.user.appointments.pending');
    Route::put('/appointments/confirm/{appointment}', [AdminClinicAppointmentController::class, 'confirmAppointment'])->name('clinic.user.appointments.confirm');
    Route::put('/appointments/cancel/{appointment}', [AdminClinicAppointmentController::class, 'cancelAppointment'])->name('clinic.user.appointments.cancel');
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

// Route::get('/files/{path}', [FilesController::class, 'show'])
//     ->where('path', '.*')
//     ->name('files.show');



Route::get('/secure-file/{path}', [FilesController::class, 'show'])
    ->name('secure.file')
    ->middleware('signed')
    ->where('path', '.*');

// Route::middleware('api')->prefix('api')->group(function () {
//     require __DIR__ . '/api.php';
// });
