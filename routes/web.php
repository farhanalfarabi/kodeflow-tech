<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Inertia\Inertia;

use App\Http\Controllers\AuthController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'name' => 'Laravel User'
    ]);
});

Route::get('/about', function () {
    return Inertia::render('About');
});

Route::get('/services', function () {
    return Inertia::render('Services');
});

use App\Models\Portfolio;
use App\Models\PortfolioCategory;

Route::get('/portfolio', function (Request $request) {
    $query = Portfolio::with('category')->published()->latest();

    // Category filter
    if ($request->has('category') && $request->category && $request->category !== 'semua') {
        $query->whereHas('category', function($q) use ($request) {
            $q->where('slug', $request->category);
        });
    }

    $portfolios = $query->get();

    $categories = PortfolioCategory::whereHas('portfolios', function($q) {
        $q->where('status', 'published');
    })->orderBy('name')->get();

    return Inertia::render('Portfolio', [
        'portfolios' => $portfolios,
        'categories' => $categories,
        'filters' => [
            'category' => $request->category ?? 'semua',
        ]
    ]);
});

Route::get('/contact', function () {
    return Inertia::render('Contact');
});

// Legal Routes
Route::get('/privacy', function () { return Inertia::render('Legal', ['type' => 'privacy']); });
Route::get('/terms', function () { return Inertia::render('Legal', ['type' => 'terms']); });
Route::get('/partner', function () { return Inertia::render('Legal', ['type' => 'partner']); });
Route::get('/sla', function () { return Inertia::render('Legal', ['type' => 'sla']); });
Route::get('/dpa', function () { return Inertia::render('Legal', ['type' => 'dpa']); });

Route::get('/portfolio/{slug}', function ($slug) {
    $portfolio = Portfolio::with('category')->published()->where('slug', $slug)->firstOrFail();
    
    // Get other published portfolios for "related" section
    $relatedPortfolios = Portfolio::with('category')
        ->published()
        ->where('id', '!=', $portfolio->id)
        ->where('category_id', $portfolio->category_id)
        ->latest()
        ->take(2)
        ->get();

    return Inertia::render('PortfolioDetail', [
        'portfolio' => $portfolio,
        'relatedPortfolios' => $relatedPortfolios,
    ]);
});

use App\Http\Controllers\LeadController;
Route::post('/leads', [LeadController::class, 'store'])->name('leads.store');

use App\Models\Blog;



Route::get('/blogs', function (Request $request) {
    $query = Blog::with(['category', 'author'])->published()->orderBy('publish_date', 'desc');

    if ($request->has('search') && $request->search) {
        $search = $request->search;
        $query->where('title', 'ilike', "%{$search}%");
    }

    if ($request->has('category') && $request->category && $request->category !== 'semua') {
        $query->whereHas('category', function($q) use ($request) {
            $q->where('slug', $request->category);
        });
    }

    $blogs = $query->paginate(7)->withQueryString(); // 1 featured + 6 grid = 7
    
    // Untuk mendapatkan kategori unik dari semua blog yang publish
    $categories = Blog::with('category')->published()->get()->pluck('category')->filter()->unique('id')->values();

    return Inertia::render('Blogs', [
        'blogs' => $blogs,
        'categories' => $categories,
        'filters' => [
            'search' => $request->search ?? '',
            'category' => $request->category ?? 'semua'
        ]
    ]);
});

use App\Models\Tag;

Route::get('/blogs/tags', function () {
    $tags = Tag::whereHas('blogs', function($query) {
        $query->published();
    })->withCount(['blogs' => function($query) {
        $query->published();
    }])->orderBy('blogs_count', 'desc')->get();
    
    return Inertia::render('BlogTags', [
        'tags' => $tags
    ]);
});

Route::get('/blogs/tags/{slug}', function ($slug, Request $request) {
    $tag = Tag::where('slug', $slug)->firstOrFail();
    
    $query = Blog::with(['category', 'author'])->published()
                 ->whereHas('tags', function($q) use ($tag) {
                     $q->where('tags.id', $tag->id);
                 })->orderBy('publish_date', 'desc');

    $blogs = $query->paginate(9)->withQueryString();
    
    return Inertia::render('BlogTagDetail', [
        'tag' => $tag,
        'blogs' => $blogs
    ]);
});

Route::get('/blogs/{slug}', function ($slug) {
    $blog = Blog::with(['category', 'author', 'tags'])->where('slug', $slug)->published()->firstOrFail();
    
    if (!empty($blog->related_blogs)) {
        $relatedArticles = Blog::with(['category', 'author'])
            ->whereIn('id', $blog->related_blogs)
            ->published()
            ->get();
    } else {
        $relatedArticles = Blog::with(['category', 'author'])
            ->where('category_id', $blog->category_id)
            ->where('id', '!=', $blog->id)
            ->published()
            ->latest('publish_date')
            ->take(3)
            ->get();
    }

    return Inertia::render('BlogDetail', [
        'blog' => $blog,
        'relatedArticles' => $relatedArticles
    ]);
});

// Authentication Routes
Route::get('/login', [AuthController::class, 'showLoginForm'])->name('login');
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

// Admin Dashboard Routes (Protected)
Route::prefix('admin')->middleware('auth')->group(function () {
    Route::get('/', function() {
        return redirect('/admin/analytics');
    });
    
    // Admin Analytics
    Route::get('/analytics', [\App\Http\Controllers\Admin\AnalyticsController::class, 'index'])->name('admin.analytics.index');

    Route::get('/blogs', [\App\Http\Controllers\Admin\BlogController::class, 'index'])->name('admin.blogs.index');
    Route::get('/blogs/create', [\App\Http\Controllers\Admin\BlogController::class, 'create'])->name('admin.blogs.create');
    Route::post('/blogs', [\App\Http\Controllers\Admin\BlogController::class, 'store'])->name('admin.blogs.store');
    Route::get('/blogs/{slug}/edit', [\App\Http\Controllers\Admin\BlogController::class, 'edit'])->name('admin.blogs.edit');
    Route::post('/blogs/{slug}', [\App\Http\Controllers\Admin\BlogController::class, 'update'])->name('admin.blogs.update');
    Route::delete('/blogs/{slug}', [\App\Http\Controllers\Admin\BlogController::class, 'destroy'])->name('admin.blogs.destroy');
    
    // Admin Portfolios Routes
    Route::get('/portfolios', [\App\Http\Controllers\Admin\PortfolioController::class, 'index'])->name('admin.portfolios.index');
    Route::get('/portfolios/create', [\App\Http\Controllers\Admin\PortfolioController::class, 'create'])->name('admin.portfolios.create');
    Route::post('/portfolios', [\App\Http\Controllers\Admin\PortfolioController::class, 'store'])->name('admin.portfolios.store');
    Route::get('/portfolios/{slug}/edit', [\App\Http\Controllers\Admin\PortfolioController::class, 'edit'])->name('admin.portfolios.edit');
    Route::post('/portfolios/{slug}', [\App\Http\Controllers\Admin\PortfolioController::class, 'update'])->name('admin.portfolios.update');
    Route::delete('/portfolios/{slug}', [\App\Http\Controllers\Admin\PortfolioController::class, 'destroy'])->name('admin.portfolios.destroy');
    
    // Admin Portfolio Categories API
    Route::post('/portfolio-categories/api-store', [\App\Http\Controllers\Admin\PortfolioController::class, 'apiStore'])->name('admin.portfolio-categories.api-store');
    
    // Admin Leads Routes
    Route::get('/leads', [\App\Http\Controllers\Admin\LeadController::class, 'index'])->name('admin.leads.index');
    Route::delete('/leads/{id}', [\App\Http\Controllers\Admin\LeadController::class, 'destroy'])->name('admin.leads.destroy');

    // Admin Settings Routes
    Route::get('/settings', [\App\Http\Controllers\Admin\SettingController::class, 'index'])->name('admin.settings.index');
    Route::post('/settings', [\App\Http\Controllers\Admin\SettingController::class, 'update'])->name('admin.settings.update');

    // Admin Media Library Routes
    Route::get('/media', [\App\Http\Controllers\Admin\MediaController::class, 'index'])->name('admin.media.index');
    Route::post('/media', [\App\Http\Controllers\Admin\MediaController::class, 'store'])->name('admin.media.store');
    Route::put('/media/{id}', [\App\Http\Controllers\Admin\MediaController::class, 'update'])->name('admin.media.update');
    Route::delete('/media/{id}', [\App\Http\Controllers\Admin\MediaController::class, 'destroy'])->name('admin.media.destroy');
});
