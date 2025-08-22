<?php

use App\Models\Admin\DentalService;
use App\Models\DentalCare;
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
        Schema::table('second_opinions', function (Blueprint $table) {
            $table->foreignIdFor(DentalService::class)->after('patient_id')->nullable();
         
            $table->text('last_visit')->nullable()->after('description');
            $table->boolean('is_quick')->after('hasEstimate')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('second_opinions', function (Blueprint $table) {
            $table->dropColumn('dental_service_id');
            $table->dropColumn('last_visit');
            $table->dropColumn('is_quick');
        });
    }
};
