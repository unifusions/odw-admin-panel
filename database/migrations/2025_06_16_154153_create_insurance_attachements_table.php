<?php

use App\Models\Insurance;
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
        Schema::create('insurance_attachements', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Insurance::class)->onDelete('cascade');
            $table->string('file_name');
            $table->string('path');
            $table->string('size');
            $table->string('ext');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('insurance_attachements');
    }
};
