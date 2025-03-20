<?php

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
        Schema::table('clinic_branches', function (Blueprint $table) {
            $table->time('opening_time')->after('zip_code_id')->default('08:00:00')->nullable(); // Default: 8 AM
            $table->time('closing_time')->after('opening_time')->default('20:00:00')->nullable(); // Default: 8 PM
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('clinic_branches', function (Blueprint $table) {
            $table->dropColumn(['opening_time', 'closing_time']);
        });
    }
};
