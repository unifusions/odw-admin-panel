<?php

use App\Models\Admin\DentalService;
use App\Models\Category;
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
        Schema::table('dental_cares', function (Blueprint $table) {
            
            $table->foreignIdFor(DentalService::class)->after('category_id');
            $table->dropColumn('category_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('dental_cares', function (Blueprint $table) {
            $table->foreignIdFor(Category::class)->nullable();
            $table->dropColumn('dental_service_id');    
        });
    }
};
