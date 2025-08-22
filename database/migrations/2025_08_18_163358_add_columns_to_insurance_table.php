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
        Schema::table('insurances', function (Blueprint $table) {
            $table->date('dob')->after('last_name')->nullable();
            $table->string('state')->after('address_line_3')->nullable();
            $table->string('city')->after('state')->nullable();
            $table->string('zip_code')->after('city')->nullable();
            $table->string('member_id')->after('insurance_provider')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('insurances', function (Blueprint $table) {
            $table->dropColumn('dob');
            $table->dropColumn('state');
            $table->dropColumn('city');
            $table->dropColumn('zip_code');
            $table->dropColumn('member_id');
        });
    }
};
