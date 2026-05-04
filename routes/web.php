<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/blogs', function () {
    return Inertia::render('Blogs');
});

Route::get('/blogs/{slug}', function ($slug) {
    return Inertia::render('BlogDetail', [
        'slug' => $slug
    ]);
});

// Admin Dashboard Routes (Mock)
Route::prefix('admin')->group(function () {
    Route::get('/blogs', function () {
        return Inertia::render('Admin/Blogs/Index');
    });
    
    Route::get('/blogs/create', function () {
        return Inertia::render('Admin/Blogs/Create');
    });
});
