<?php

use App\Models\SecondOpinion;
use App\Models\User;
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
        Schema::create('sostatus_logs', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(SecondOpinion::class)->constrained()->cascadeOnDelete();
            $table->foreignIdFor(User::class);
            $table->string('change_from');
            $table->string('change_to');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sostatus_logs');
    }
};
