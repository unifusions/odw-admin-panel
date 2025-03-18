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
            $table->string('image_path')->after('desc')->nullable();
            $table->decimal('avg_cost')->after('cost')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('dental_services', function (Blueprint $table) {
            $table->dropColumn('image_path');
            $table->dropColumn('avg_cost');
        });
    }
};
