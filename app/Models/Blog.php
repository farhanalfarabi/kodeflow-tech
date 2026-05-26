<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    protected $fillable = [
        'title', 'slug', 'desc', 'content', 'ai_summary', 'read_time', 
        'is_featured', 'image_path', 'publish_date', 
        'category_id', 'author_id', 'related_blogs', 'status',
        'meta_title', 'meta_description', 'focus_keywords'
    ];

    protected $casts = [
        'is_featured' => 'boolean',
        'publish_date' => 'datetime',
        'focus_keywords' => 'array',
        'related_blogs' => 'array',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function author()
    {
        return $this->belongsTo(User::class, 'author_id');
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }

    public function scopePublished($query)
    {
        return $query->where('status', 'published')
                     ->where(function($q) {
                         $q->whereNull('publish_date')
                           ->orWhere('publish_date', '<=', now());
                     });
    }
}
