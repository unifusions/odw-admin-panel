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
        Schema::table('appointments', function (Blueprint $table) {
            $table->boolean('is_confirmed')->after('status')->default(false);
            $table->enum('reschedule_requested_by' , ['clinic', 'patient'])->after('is_confirmed')->nullable();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('appointments', function (Blueprint $table) {
           $table->dropColumn('is_confirmed');
           $table->dropColumn('reschedule_requested_by'); 
        });
    }
};
