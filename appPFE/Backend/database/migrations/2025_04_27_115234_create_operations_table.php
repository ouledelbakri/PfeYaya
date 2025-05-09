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
        Schema::create('operations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('culture_id')->constrained()->onDelete('cascade');
            $table->enum('type_operation', ['semis', 'traitement', 'recolte', 'autre']);
            $table->date('date_operation');
            $table->string('produit_utilise')->nullable();
            $table->decimal('dose', 10, 2)->nullable();
            $table->string('technique')->nullable();
            $table->string('equipment')->nullable();
            $table->text('remarques')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('operations');
    }
};
