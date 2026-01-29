<?php

namespace App\Providers;

use GuzzleHttp\Psr7\Request;
use Illuminate\Foundation\Application;
use Illuminate\Container\Attributes\Auth;
use Illuminate\Notifications\Events\NotificationFailed;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        

        Vite::prefetch(concurrency: 3);

        app(Application::class)->afterResolving('redirects', function ($redirector) {
            $redirector->setRedirectHandler(function (Request $request) {
                return $this->redirectTo($request);
            });
        });
\Event::listen(NotificationFailed::class, function ($event) {
        // This logs the ACTUAL error from Apple's servers
        \Log::error('APN Delivery Failed', [
            'token' => $event->notifiable->routeNotificationForApn(),
            'error' => $event->data
        ]);
    });
        
    }

    protected function redirectTo(Request $request)
    {
        $user = Auth::user();

        if (!$user) {
            return route('login');
        }

        return match ($user->role) {
            'super_admin'  => route('admin.dashboard'),
            'clinic_admin' => route('clinic.dashboard'),
            'clinic_user'  => route('clinic.user.dashboard'),
            'clinic_doctor'=> route('doctor.dashboard'),
            default        => route('home'), // Default fallback route
        };
    }
}
