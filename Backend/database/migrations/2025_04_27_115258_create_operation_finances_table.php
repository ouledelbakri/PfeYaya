<?php

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
        Schema::create('operation_finances', function (Blueprint $table) {
            $table->id();
            $table->foreignId('operation_id')->constrained()->onDelete('cascade');
            $table->decimal('cout_produit', 10, 2)->default(0.00);
            $table->decimal('cout_equipement', 10, 2)->default(0.00);
            $table->decimal('cout_main_oeuvre', 10, 2)->default(0.00);
            $table->decimal('autres_couts', 10, 2)->default(0.00);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('operation_finances');
    }
};
