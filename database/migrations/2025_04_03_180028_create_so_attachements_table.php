<?php

use App\Models\SecondOpinion;
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
        Schema::create('so_attachements', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(SecondOpinion::class);
            $table->string('path')->nullable();
            $table->string('file_name')->nullable();
            $table->string('type')->nullable();
            $table->string('file_type')->nullable();
            $table->integer('size')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('so_attachements');
    }
};
