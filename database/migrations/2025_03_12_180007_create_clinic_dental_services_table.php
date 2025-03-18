<?php

use App\Models\Admin\Clinic;
use App\Models\Admin\ClinicBranch;
use App\Models\Admin\DentalService;
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
        Schema::create('clinic_dental_services', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Clinic::class);
            $table->foreignIdFor(ClinicBranch::class)->nullable();
            $table->foreignIdFor(DentalService::class);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('clinic_dental_services');
    }
};
