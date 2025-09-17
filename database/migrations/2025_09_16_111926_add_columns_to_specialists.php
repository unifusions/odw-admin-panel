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
        Schema::table('specialists', function (Blueprint $table) {
            $table->text('about')->nullable();
            $table->integer('no_of_patients')->nullable();
            $table->integer('no_of_reviews')->nullable();
            $table->float('rating')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('specialists', function (Blueprint $table) {
            $table->dropColumn('about');
            $table->dropColumn('no_of_patients');
            $table->dropColumn('no_of_reviews');
            $table->dropColumn('rating');
        });
    }
};
