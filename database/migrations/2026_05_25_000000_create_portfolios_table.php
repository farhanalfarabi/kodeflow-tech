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
        Schema::create('portfolios', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->foreignId('category_id')->constrained('portfolio_categories')->cascadeOnDelete();
            $table->string('title');
            $table->text('subtitle')->nullable();
            $table->string('image')->nullable();
            
            // Rich structures cast as JSON
            $table->json('summary')->nullable(); // importance, context, result, modules, targetReader
            $table->json('validation')->nullable(); // array of metrics
            $table->text('challenge_short')->nullable();
            $table->text('solution_short')->nullable();
            $table->json('tech_stack')->nullable(); // array of strings
            $table->json('gallery')->nullable(); // array of {url, caption}
            $table->json('deep_dive')->nullable(); // large case study document
            $table->json('faqs')->nullable(); // questions and answers
            
            $table->string('status', 20)->default('draft'); // draft or published
            $table->timestamps();
            
            // No composite unique index needed anymore since we made slug unique above
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('portfolios');
    }
};
