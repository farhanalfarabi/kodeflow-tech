<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Models\Category;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\BlogRequest;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index(Request $request)
    {
        $query = Blog::with(['category', 'author'])->latest();

        if ($request->has('search') && $request->search) {
            $search = $request->search;
            $query->where('title', 'ilike', "%{$search}%");
        }

        if ($request->has('status') && $request->status && $request->status !== 'all') {
            $query->where('status', $request->status);
        }

        if ($request->has('category') && $request->category && $request->category !== 'all') {
            $query->where('category_id', $request->category);
        }

        if ($request->has('author') && $request->author && $request->author !== 'all') {
            $query->where('author_id', $request->author);
        }

        $blogs = $query->paginate(10)->withQueryString();
        $categories = Category::select('id', 'name')->get();
        $authors = User::select('id', 'name')->get();

        return Inertia::render('Admin/Blogs/Index', [
            'blogs' => $blogs,
            'categories' => $categories,
            'authors' => $authors,
            'filters' => [
                'search' => $request->search ?? '',
                'status' => $request->status ?? 'all',
                'category' => $request->category ?? 'all',
                'author' => $request->author ?? 'all'
            ]
        ]);
    }

    public function create()
    {
        // Kirimkan data kategori dan tag yang sudah ada agar Svelte bisa menggunakannya untuk dropdown
        $categories = Category::pluck('name');
        $tags = Tag::pluck('name');
        $authors = User::select('id', 'name')->get();
        $blogsList = Blog::select('id', 'title')->latest()->get();

        return Inertia::render('Admin/Blogs/Create', [
            'existingCategories' => $categories,
            'existingTags' => $tags,
            'authors' => $authors,
            'blogsList' => $blogsList,
        ]);
    }

    public function store(BlogRequest $request)
    {
        $validated = $request->validated();

        // Cari atau buat kategori baru otomatis (mencegah duplikasi)
        $category = Category::firstOrCreate(
            ['name' => $validated['category_name']],
            ['slug' => Str::slug($validated['category_name'])]
        );

        // Buat slug blog yang unik
        $slug = Str::slug($validated['title']);
        $originalSlug = $slug;
        $counter = 1;
        while (Blog::where('slug', $slug)->exists()) {
            $slug = $originalSlug . '-' . $counter;
            $counter++;
        }

        // Upload Gambar jika ada
        $imagePath = $request->image_path;
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('blog-images', 'public');
            $imagePath = '/storage/' . $path;
        }

        // Simpan ke tabel Blogs
        $blog = Blog::create([
            'title' => $validated['title'],
            'slug' => $slug,
            'desc' => $validated['desc'],
            'content' => $validated['content'],
            'ai_summary' => $validated['ai_summary'] ?? null,
            'read_time' => $validated['read_time'],
            'is_featured' => $validated['is_featured'] ?? false,
            'image_path' => $imagePath,
            'publish_date' => $validated['publish_date'] ?: null,
            'category_id' => $category->id,
            'author_id' => $validated['author_id'],
            'related_blogs' => $validated['related_blogs'] ?? null,
            'status' => $validated['status'],
            'meta_title' => $validated['meta_title'] ?? null,
            'meta_description' => $validated['meta_description'] ?? null,
            'focus_keywords' => $validated['focus_keywords'] ?? null,
        ]);

        // Proses Tags (Cari atau buat otomatis, lalu tempelkan ke artikel ini)
        if (!empty($validated['tags'])) {
            $tagIds = [];
            foreach ($validated['tags'] as $tagName) {
                $tag = Tag::firstOrCreate(
                    ['name' => $tagName],
                    ['slug' => Str::slug($tagName)]
                );
                $tagIds[] = $tag->id;
            }
            $blog->tags()->sync($tagIds);
        }

        return redirect('/admin/blogs')->with('success', 'Artikel berhasil disimpan!');
    }

    public function edit($slug)
    {
        $blog = Blog::with(['category', 'tags'])->where('slug', $slug)->firstOrFail();
        $categories = Category::pluck('name');
        $tags = Tag::pluck('name');
        $authors = User::select('id', 'name')->get();
        $blogsList = Blog::select('id', 'title')->where('id', '!=', $blog->id)->latest()->get();

        return Inertia::render('Admin/Blogs/Create', [
            'blog' => $blog,
            'existingCategories' => $categories,
            'existingTags' => $tags,
            'authors' => $authors,
            'blogsList' => $blogsList,
        ]);
    }

    public function update(BlogRequest $request, $slug)
    {
        $blog = Blog::where('slug', $slug)->firstOrFail();
        
        $validated = $request->validated();

        $category = Category::firstOrCreate(
            ['name' => $validated['category_name']],
            ['slug' => Str::slug($validated['category_name'])]
        );

        // Update Slug
        $newSlug = Str::slug($validated['title']);
        if ($blog->slug !== $newSlug) {
            $originalSlug = $newSlug;
            $counter = 1;
            while (Blog::where('slug', $newSlug)->where('id', '!=', $blog->id)->exists()) {
                $newSlug = $originalSlug . '-' . $counter;
                $counter++;
            }
            $blog->slug = $newSlug;
        }

        if ($request->hasFile('image')) {
            if ($blog->image_path) {
                $oldPath = str_replace('/storage/', '', $blog->image_path);
                // Only delete old image if it is stored in blog-images (uploaded directly for this blog)
                // and NOT in media folder (which belongs to the reusable Media Library)
                if (\Illuminate\Support\Str::startsWith($oldPath, 'blog-images/')) {
                    Storage::disk('public')->delete($oldPath);
                }
            }
            $path = $request->file('image')->store('blog-images', 'public');
            $blog->image_path = '/storage/' . $path;
        } elseif ($request->has('image_path')) {
            $blog->image_path = $request->image_path;
        }

        $blog->title = $validated['title'];
        $blog->desc = $validated['desc'];
        $blog->content = $validated['content'];
        $blog->ai_summary = $validated['ai_summary'] ?? null;
        $blog->read_time = $validated['read_time'];
        $blog->is_featured = $validated['is_featured'] ?? false;
        $blog->publish_date = $validated['publish_date'] ?: null;
        $blog->category_id = $category->id;
        $blog->author_id = $validated['author_id'];
        $blog->related_blogs = $validated['related_blogs'] ?? null;
        $blog->status = $validated['status'];
        $blog->meta_title = $validated['meta_title'] ?? null;
        $blog->meta_description = $validated['meta_description'] ?? null;
        $blog->focus_keywords = $validated['focus_keywords'] ?? null;
        $blog->save();

        if (isset($validated['tags'])) {
            $tagIds = [];
            foreach ($validated['tags'] as $tagName) {
                $tag = Tag::firstOrCreate(
                    ['name' => $tagName],
                    ['slug' => Str::slug($tagName)]
                );
                $tagIds[] = $tag->id;
            }
            $blog->tags()->sync($tagIds);
        } else {
            $blog->tags()->sync([]);
        }

        return redirect('/admin/blogs')->with('success', 'Artikel berhasil diperbarui!');
    }

    public function destroy($slug)
    {
        $blog = Blog::where('slug', $slug)->firstOrFail();
        
        if ($blog->image_path) {
            $path = str_replace('/storage/', '', $blog->image_path);
            if (\Illuminate\Support\Str::startsWith($path, 'blog-images/')) {
                Storage::disk('public')->delete($path);
            }
        }
        
        $blog->delete();

        return redirect('/admin/blogs')->with('success', 'Artikel berhasil dihapus!');
    }
}
