<?php

use App\Models\DentalCare;
use App\Models\Estimate;
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
        Schema::create('estimate_services', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Estimate::class);
            $table->foreignIdFor(DentalCare::class);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('estimate_services');
    }
};
