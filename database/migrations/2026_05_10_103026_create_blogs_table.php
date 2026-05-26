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
        Schema::create('blogs', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->text('desc')->nullable();
            $table->longText('content');
            $table->longText('ai_summary')->nullable();
            $table->integer('read_time')->default(5);
            $table->boolean('is_featured')->default(false);
            $table->string('image_path')->nullable();
            $table->timestamp('publish_date')->nullable();
            
            // Foreign Keys
            $table->foreignId('category_id')->nullable()->constrained()->nullOnDelete();
            $table->foreignId('author_id')->constrained('users')->cascadeOnDelete();
            $table->json('related_blogs')->nullable();
            
            $table->enum('status', ['draft', 'published'])->default('draft');

            // SEO Fields
            $table->text('meta_title')->nullable();
            $table->text('meta_description')->nullable();
            $table->json('focus_keywords')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('blogs');
    }
};
