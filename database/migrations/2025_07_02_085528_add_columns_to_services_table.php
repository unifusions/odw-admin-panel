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
        Schema::table('dental_services', function (Blueprint $table) {
            $table->string('medical_name');
            $table->decimal('max_cost');
            $table->decimal('max_avg_cost');
            $table->integer('display_order')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('dental_services', function (Blueprint $table) {
            $table->dropColumn('medical_name');
            $table->dropColumn('max_cost');
            $table->dropColumn('max_avg_cost');
            $table->dropColumn('display_order');
        });
    }
};
