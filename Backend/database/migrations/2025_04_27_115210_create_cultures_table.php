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
        Schema::create('cultures', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('nom');
            $table->enum('categorie', ['fruit', 'legume', 'cereale', 'autre']);
            $table->text('conditions_climatiques')->nullable();
            $table->date('date_semis')->nullable();
            $table->date('date_installation')->nullable();
            $table->date('date_recolte')->nullable();
            $table->text('installation_remarques')->nullable();
            $table->string('methods_installation')->nullable();
            $table->text('plan_fertilisation')->nullable();
            $table->decimal('superficie', 10, 2)->nullable();
            $table->string('type_sol')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cultures');
    }
};
