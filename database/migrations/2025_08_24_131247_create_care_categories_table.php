<?php

use App\Models\Admin\DentalService;
use App\Models\DentalCare;
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
        Schema::create('care_categories', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(DentalCare::class)->nullable();
            $table->foreignIdFor(DentalService::class)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('care_categories');
    }
};
