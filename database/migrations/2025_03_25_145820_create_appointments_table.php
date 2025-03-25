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
            $table->foreignIdFor(Clinic::class)->constrained();
            $table->foreignIdFor(ClinicBranch::class)->constrained();
            $table->foreignIdFor(ClinicDentist::class)->nullable()->constrained();
            $table->foreignIdFor(Patient::class)->constrained('users');
            $table->date('appointment_date');
            $table->time('time_slot'); // Stores 30-min slots
            $table->string('status')->default('pending'); // 'pending', 'confirmed', 'rescheduled', 'canceled'
            $table->integer('reschedule_count')->default(0);
            $table->timestamps();
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
