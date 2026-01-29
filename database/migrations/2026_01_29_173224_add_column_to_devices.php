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
        Schema::table('devices', function (Blueprint $table) {
            $table->string('device_id')->nullable();
            $table->string('platform')->nullable();
            $table->string('manufacturer')->nullable();
            $table->string(column: 'model')->nullable();
            $table->dateTime('last_active_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('devices', function (Blueprint $table) {
            $table->dropColumn('device_id');
            $table->dropColumn('platform');
            $table->dropColumn('manufacturer');
            $table->dropColumn('model');    
            $table->dropColumn('last_active_at');
        });
    }
};
