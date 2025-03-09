<?php

use App\Models\Admin\Clinic;
use App\Models\Admin\ZipCode;

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
        Schema::create('clinic_branches', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Clinic::class)->constrained('clinics')->onDelete('cascade');
            $table->string('name');
            $table->string('address_line_1')->nullable();
            $table->string('address_line_2')->nullable();
            $table->string('phone')->nullable();
            $table->string('email')->nullable();
            $table->foreignIdFor(ZipCode::class)->constrained('zip_codes')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('clinic_branches');
    }
};
