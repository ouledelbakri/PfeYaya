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
        Schema::create('recoltes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('culture_id')->constrained()->onDelete('cascade');
            $table->date('date_recolte');
            $table->decimal('quantite', 10, 2)->nullable();
            $table->decimal('prix_vente', 10, 2)->nullable();
            $table->decimal('benefice', 10, 2)->nullable();
            $table->string('etat')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('recoltes');
    }
};
