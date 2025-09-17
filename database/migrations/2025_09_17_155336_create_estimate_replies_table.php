<?php

use App\Models\Estimate;
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
        Schema::create('estimate_replies', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Estimate::class)->constrained()->cascadeOnDelete();
            $table->foreignIdFor(User::class)->constrained()->cascadeOnDelete();
            $table->text('reply_message')->nullable();
            $table->string('path')->nullable();
            $table->string('file_name')->nullable();

            $table->string('file_type')->nullable();
            $table->integer('size')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('estimate_replies');
    }
};
