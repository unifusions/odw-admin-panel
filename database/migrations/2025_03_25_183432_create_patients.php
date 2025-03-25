<?php

use App\Models\Admin\City;
use App\Models\Admin\State;
use App\Models\Admin\ZipCode;
use App\Models\Patient;
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
        Schema::create('patients', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class)->nullable();
            $table->string('first_name')->nullable();
            $table->string('middle_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('suffix', 45)->nullable();

            $table->date('dob')->nullable();
            $table->string('email')->nullable();
            $table->string('phone_number', 45)->nullable();
            $table->string('race')->nullable();
            $table->string('ethnicity')->nullable();
            $table->string('sex', 45)->nullable();
            $table->string('sexual_orientation', 45)->nullable();
            $table->string('gender_identity', 45)->nullable();
            $table->string('preferred_language', 45)->nullable();

            $table->timestamps();
            $table->softDeletes();
        });

        Schema::create('patient_address', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Patient::class)->nullable()->constrained();
            $table->enum('address_type', ['C','P']); // e.g., 'current', 'previous'
            $table->string('address_line_1')->nullable();
            $table->string('address_line_2')->nullable();
            $table->string('address_line_3')->nullable();
            $table->foreignIdFor(City::class)->nullable();
            $table->foreignIdFor(State::class)->nullable();
            $table->foreignIdFor(ZipCode::class)->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('patients');
        Schema::dropIfExists('patient_address');
    }
};
