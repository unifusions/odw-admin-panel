<?php

use App\Models\Patient;
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
        Schema::create('second_opinions', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Patient::class);
            $table->string('subject');
            $table->text('description');
            $table->boolean('hasEstimate')->default(false);
            $table->enum('status', ['pending', 'in_review', 'answered', 'closed'])->default('pending');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('second_opinions');
    }
};
