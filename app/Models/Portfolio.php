<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Portfolio extends Model
{
    protected $fillable = [
        'slug', 'category_id', 'title', 'subtitle',
        'image', 'summary', 'validation',
        'challenge_short', 'solution_short', 'tech_stack', 'gallery',
        'deep_dive', 'faqs', 'status'
    ];

    protected $casts = [
        'summary' => 'array',
        'validation' => 'array',
        'tech_stack' => 'array',
        'gallery' => 'array',
        'deep_dive' => 'array',
        'faqs' => 'array',
    ];

    /**
     * Scope a query to only include published portfolios.
     */
    public function scopePublished($query)
    {
        return $query->where('status', 'published');
    }

    public function category()
    {
        return $this->belongsTo(PortfolioCategory::class);
    }
}
