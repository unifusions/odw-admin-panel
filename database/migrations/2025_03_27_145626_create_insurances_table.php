<?php

use App\Models\Admin\City;
use App\Models\Admin\State;
use App\Models\Admin\ZipCode;
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
        Schema::create('insurances', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Patient::class);
            $table->string('first_name');
            $table->string('last_name');
            $table->string('relation');
            $table->string('address_line_1');
            $table->string('address_line_2');
            $table->string('address_line_3')->nullable();
            $table->foreignIdFor(State::class)->nullable();
            $table->foreignIdFor(City::class)->nullable();
            $table->foreignIdFor(ZipCode::class)->nullable();
            $table->string('mode');
            $table->string('insurance_provider');
            $table->string('carrier')->nullable();
            $table->string('plan_no')->nullable();
            $table->string('status');
            $table->boolean('is_current');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('insurances');
    }
};
