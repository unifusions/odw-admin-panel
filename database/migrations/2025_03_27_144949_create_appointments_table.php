<?php

use App\Models\Admin\Clinic;
use App\Models\Admin\ClinicBranch;
use App\Models\ClinicDentist;
use App\Models\Patient;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('appointments', function (Blueprint $table) {
            $table->id();
            // $table->foreignIdFor(Clinic::class)->constrained();
             $table->foreignId('clinic_id')
          ->constrained()
          ->cascadeOnDelete();

    // FIXED — no foreignIdFor
    $table->foreignId('clinic_dentist_id')
          ->constrained('clinic_dentists')
          ->cascadeOnDelete();

    $table->foreignId('patient_id')
          ->constrained()
          ->cascadeOnDelete();
            // $table->foreignIdFor(ClinicDentist::class)->constrained('clinic_dentists');
            // $table->foreignIdFor(Patient::class)->constrained('patients');
            $table->date('appointment_date')->nullable();
            $table->time('time_slot')->nullable(); // Stores 30-min slots
            $table->string('status')->default('pending'); // 'pending', 'confirmed', 'rescheduled', 'canceled'
            $table->integer('reschedule_count')->default(0);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('appointments');
    }
};
