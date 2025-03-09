<?php

namespace App;

use App\Models\Admin\ClinicUser;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Schema;

trait ClinicScope
{
    protected static function bootClinicScope()
    {
        if (auth()->check()) {
            // dd(auth()->user());
            static::addGlobalScope('clinic', function (Builder $builder) {
                // Ensure we are not running in CLI (e.g., migrations, artisan commands)


                // Check if a user is authenticated
                $user = auth()->user();

                if ($user && !in_array($user->role, ['super_admin', 'patient'])) {
                   

                    // if ($clinicId) {
                    //     $builder->where('id', $clinicId);
                    // }

                    // if ($clinicId) {
                    //     $builder->whereHas('clinicUsers', function ($query) use ($clinicId) {
                    //         $query->where('clinic_id', $clinicId);
                    //     });

                    //     // $builder->where('facility_id', auth()->user()->facility_id);

                    // }

                    $modelTable = (new static())->getTable(); // Get the current model's table
                    $clinicId = ClinicUser::where('user_id', $user->id)->value('clinic_id');
                    if ($clinicId) {

                      
                        if (Schema::hasColumn($modelTable, 'clinic_id')) {

                            $builder->where('clinic_id', $clinicId);
                        }
                        elseif ($modelTable === 'users') {

                        $builder->whereHas('clinicUsers', function ($query) use ($clinicId) {
                            $query->where('clinic_id', $clinicId);
                        });

                        }
                        elseif ($modelTable === 'clinics') {
                            $builder->where('id', $clinicId);
                        }
                    }
                }
            });
        }
    }
}
