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
        Schema::table('so_replies', function (Blueprint $table) {
            $table->string('path')->nullable();
            $table->string('file_name')->nullable();
          
            $table->string('file_type')->nullable();
            $table->integer('size')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('so_replies', function (Blueprint $table) {
            $table->dropColumn('path');
            $table->dropColumn('file_name');
            $table->dropColumn('type');
            $table->dropColumn('file_type');
            $table->dropColumn('size');
        });
    }
};
