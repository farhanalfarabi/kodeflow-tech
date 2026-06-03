<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Portfolio;
use App\Models\PortfolioCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class PortfolioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = Portfolio::query()->with('category')->latest();

        // Search filter
        if ($request->has('search') && $request->search) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('title', 'ilike', "%{$search}%")
                  ->orWhere('slug', 'ilike', "%{$search}%")
                  ->orWhereHas('category', function($q) use ($search) {
                      $q->where('name', 'ilike', "%{$search}%");
                  });
            });
        }

        // Status filter
        if ($request->has('status') && $request->status && $request->status !== 'all') {
            $query->where('status', $request->status);
        }

        // Category filter
        if ($request->has('category') && $request->category && $request->category !== 'all') {
            $query->whereHas('category', function($q) use ($request) {
                $q->where('slug', $request->category);
            });
        }

        $portfolios = $query->paginate(10)->withQueryString();

        return Inertia::render('Admin/Portfolios/Index', [
            'portfolios' => $portfolios,
            'categories' => PortfolioCategory::orderBy('name')->get()->map(fn($c) => [
                'value' => $c->slug,
                'label' => $c->name,
            ]),
            'filters' => [
                'search' => $request->search ?? '',
                'status' => $request->status ?? 'all',
                'category' => $request->category ?? 'all',
            ]
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Portfolios/Create', [
            'isEdit' => false,
            'portfolio' => null,
            'categories' => PortfolioCategory::pluck('name')
        ]);
    }

    /**
     * Store a newly created category via API (AJAX).
     */
    public function apiStore(Request $request)
    {
        $validated = $request->validate([
            'category' => 'required|string|max:255'
        ]);

        $category = PortfolioCategory::firstOrCreate([
            'name' => $validated['category']
        ], [
            'slug' => Str::slug($validated['category'])
        ]);

        return response()->json([
            'message' => 'Category created successfully',
            'category' => $category->name
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'slug' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'title' => 'required|string|max:255',
            'subtitle' => 'nullable|string',
            
            // Nested arrays/JSON
            'summary' => 'required|array',
            'summary.importance' => 'required|string',
            'summary.context' => 'required|string',
            'summary.result' => 'required|array',
            'summary.result.*' => 'nullable|string',
            'summary.modules' => 'required|array',
            'summary.modules.*' => 'nullable|string',
            'summary.targetReader' => 'required|array',
            'summary.targetReader.*' => 'nullable|string',
            
            'validation' => 'required|array',
            'validation.*.metric' => 'nullable|string|max:50',
            'validation.*.title' => 'nullable|string|max:255',
            'validation.*.desc' => 'nullable|string',
            
            'challenge_short' => 'nullable|string',
            'solution_short' => 'nullable|string',
            
            'tech_stack' => 'required|array',
            'tech_stack.*' => 'nullable|string',
            
            'gallery' => 'required|array',
            'gallery.*.url' => 'nullable|string',
            'gallery.*.caption' => 'nullable|string',
            'gallery.*.file' => 'nullable|image|max:5120',
            

            // Deep Dive (optional or comprehensive)
            'deep_dive' => 'required|array',
            'deep_dive.content' => 'required|string',
            
            'faqs' => 'nullable|array',
            'faqs.*.q' => 'nullable|string',
            'faqs.*.a' => 'nullable|string',
            
            'image' => 'nullable|image|max:5120', // max 5MB
            'image_path' => 'nullable|string',
            'status' => 'required|string|in:draft,published',
        ]);

        // Handing file upload
        $imagePath = $validated['image_path'] ?? null;
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('portfolio-images', 'public');
            $imagePath = '/storage/' . $path;
        }

        // Handle gallery file uploads
        $galleryData = $validated['gallery'];
        foreach ($galleryData as $index => &$galleryItem) {
            if ($request->hasFile("gallery.{$index}.file")) {
                $path = $request->file("gallery.{$index}.file")->store('portfolio-images', 'public');
                $galleryItem['url'] = '/storage/' . $path;
            }
            unset($galleryItem['file']);
            unset($galleryItem['preview']);
        }

        // Slug generation/checks
        $slug = Str::slug($validated['slug'] ?: $validated['title']);
        
        // Ensure uniqueness for slug
        $counter = 1;
        $originalSlug = $slug;
        while (Portfolio::where('slug', $slug)->exists()) {
            $slug = $originalSlug . '-' . $counter;
            $counter++;
        }

        $category = PortfolioCategory::firstOrCreate([
            'name' => $validated['category']
        ], [
            'slug' => Str::slug($validated['category'])
        ]);

        Portfolio::create([
            'slug' => $slug,
            'category_id' => $category->id,
            'title' => $validated['title'],
            'subtitle' => $validated['subtitle'] ?? null,
            'image' => $imagePath,
            'summary' => $validated['summary'],
            'validation' => $validated['validation'],
            'challenge_short' => $validated['challenge_short'],
            'solution_short' => $validated['solution_short'],
            'tech_stack' => $validated['tech_stack'],
            'gallery' => $galleryData,
            'deep_dive' => $validated['deep_dive'],
            'faqs' => $validated['faqs'] ?? [],
            'status' => $validated['status'],
        ]);

        return redirect()->route('admin.portfolios.index')->with('success', 'Portofolio berhasil ditambahkan!');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($slug)
    {
        $portfolio = Portfolio::where('slug', $slug)->firstOrFail();

        $portfolio->load('category');
        // Override the portfolio data to pass the category string to the frontend form
        $portfolioData = $portfolio->toArray();
        $portfolioData['category'] = $portfolio->category ? $portfolio->category->name : '';

        return Inertia::render('Admin/Portfolios/Create', [
            'isEdit' => true,
            'portfolio' => $portfolioData,
            'categories' => PortfolioCategory::pluck('name')
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $slug)
    {
        $portfolio = Portfolio::where('slug', $slug)->firstOrFail();

        $validated = $request->validate([
            'slug' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'title' => 'required|string|max:255',
            'subtitle' => 'nullable|string',
            
            'summary' => 'required|array',
            'summary.importance' => 'required|string',
            'summary.context' => 'required|string',
            'summary.result' => 'required|array',
            'summary.result.*' => 'nullable|string',
            'summary.modules' => 'required|array',
            'summary.modules.*' => 'nullable|string',
            'summary.targetReader' => 'required|array',
            'summary.targetReader.*' => 'nullable|string',
            
            'validation' => 'required|array',
            'validation.*.metric' => 'nullable|string|max:50',
            'validation.*.title' => 'nullable|string|max:255',
            'validation.*.desc' => 'nullable|string',
            
            'challenge_short' => 'nullable|string',
            'solution_short' => 'nullable|string',
            
            'tech_stack' => 'required|array',
            'tech_stack.*' => 'nullable|string',
            
            'gallery' => 'required|array',
            'gallery.*.url' => 'nullable|string',
            'gallery.*.caption' => 'nullable|string',
            'gallery.*.file' => 'nullable|image|max:5120',
            

            'deep_dive' => 'required|array',
            'deep_dive.content' => 'required|string',
            
            'faqs' => 'nullable|array',
            'faqs.*.q' => 'nullable|string',
            'faqs.*.a' => 'nullable|string',
            
            'image' => 'nullable|image|max:5120',
            'image_path' => 'nullable|string',
            'status' => 'required|string|in:draft,published',
        ]);

        // Handing file upload
        $imagePath = $validated['image_path'] ?? $portfolio->image;
        if ($request->hasFile('image')) {
            // Delete old file if it was custom uploaded
            if ($portfolio->image && Str::startsWith($portfolio->image, '/storage/portfolio-images/')) {
                Storage::disk('public')->delete(str_replace('/storage/', '', $portfolio->image));
            }
            $path = $request->file('image')->store('portfolio-images', 'public');
            $imagePath = '/storage/' . $path;
        }

        // Handle gallery file uploads
        $galleryData = $validated['gallery'];
        foreach ($galleryData as $index => &$galleryItem) {
            if ($request->hasFile("gallery.{$index}.file")) {
                $path = $request->file("gallery.{$index}.file")->store('portfolio-images', 'public');
                $galleryItem['url'] = '/storage/' . $path;
            }
            unset($galleryItem['file']);
            unset($galleryItem['preview']);
        }

        // Slug checks
        $slug = Str::slug($validated['slug'] ?: $validated['title']);
        // Ensure uniqueness for slug
        if ($slug !== $portfolio->slug) {
            $counter = 1;
            $originalSlug = $slug;
            while (Portfolio::where('slug', $slug)
                ->where('id', '!=', $portfolio->id)
                ->exists()) {
                $slug = $originalSlug . '-' . $counter;
                $counter++;
            }
        }

        $category = PortfolioCategory::firstOrCreate([
            'name' => $validated['category']
        ], [
            'slug' => Str::slug($validated['category'])
        ]);

        $portfolio->update([
            'slug' => $slug,
            'category_id' => $category->id,
            'title' => $validated['title'],
            'subtitle' => $validated['subtitle'] ?? null,
            'image' => $imagePath,
            'summary' => $validated['summary'],
            'validation' => $validated['validation'],
            'challenge_short' => $validated['challenge_short'],
            'solution_short' => $validated['solution_short'],
            'tech_stack' => $validated['tech_stack'],
            'gallery' => $galleryData,
            'deep_dive' => $validated['deep_dive'],
            'faqs' => $validated['faqs'] ?? [],
            'status' => $validated['status'],
        ]);

        return redirect()->route('admin.portfolios.index')->with('success', 'Portofolio berhasil diperbarui!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($slug)
    {
        $portfolio = Portfolio::where('slug', $slug)->firstOrFail();

        if ($portfolio->image && Str::startsWith($portfolio->image, '/storage/portfolio-images/')) {
            Storage::disk('public')->delete(str_replace('/storage/', '', $portfolio->image));
        }

        $portfolio->delete();

        return redirect()->route('admin.portfolios.index')->with('success', 'Portofolio berhasil dihapus!');
    }
}
