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
        Schema::table('estimates', function (Blueprint $table) {
            $table->foreignIdFor(Insurance::class)->after('description')->nullable();
            $table->boolean('is_quick')->default(false)->after('insurance_id');
            $table->text('status')->after('is_closed')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('estimates', function (Blueprint $table) {
            $table->dropColumn('description');
            $table->dropColumn('is_quick');
            $table->dropColumn('status');
        });
    }
};
