<?php

use App\Models\Admin\DentalService;
use App\Models\Admin\Specialist;
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
        Schema::create('specialist_services', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Specialist::class);
            $table->foreignIdFor(DentalService::class);

            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('specialist_services');
    }
};
