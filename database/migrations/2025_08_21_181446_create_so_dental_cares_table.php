<?php

use App\Models\DentalCare;
use App\Models\SecondOpinion;
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
        Schema::create('so_dental_cares', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(SecondOpinion::class);
            $table->foreignIdFor(DentalCare::class);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('so_dental_cares');
    }
};
