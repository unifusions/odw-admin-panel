<?php

use App\Models\Admin\DentalService;
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
        Schema::create('dentist_services', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Dentist::class)->constrained()->onDelete('cascade');
            $table->foreignIdFor(DentalService::class)->constrained()->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dentist_services');
    }
};
