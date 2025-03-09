<?php

use App\Models\Admin\Clinic;
use App\Models\Admin\ClinicBranch;
use App\Models\Admin\Dentist;
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
        Schema::create('clinic_dentists', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Dentist::class);
            $table->foreignIdFor(ClinicBranch::class);
            $table->foreignIdFor(Clinic::class);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('clinic_dentists');
    }
};
