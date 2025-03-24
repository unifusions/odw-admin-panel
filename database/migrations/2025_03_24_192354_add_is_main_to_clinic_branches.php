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
            $table->boolean('is_main')->after('zip_code_id')->default(false);
            $table->string('image_path')->after('is_main')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('clinic_branches', function (Blueprint $table) {
            $table->dropColumn('image_path');
            $table->dropColumn('is_main');
        });
    }
};
