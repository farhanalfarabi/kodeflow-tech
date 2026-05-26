<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Media;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class MediaController extends Controller
{
    public function index(Request $request)
    {
        $query = Media::latest();

        if ($request->has('search') && $request->search) {
            $search = $request->search;
            $query->where('name', 'like', "%{$search}%");
        }

        // Paginate for main page, but we can also load all for API or paginate.
        // Standard pagination: 18 items per page for a nice media grid.
        $media = $query->paginate(18)->withQueryString();

        if ($request->wantsJson() || $request->has('api')) {
            return response()->json($media);
        }

        return Inertia::render('Admin/Media/Index', [
            'media' => $media,
            'filters' => [
                'search' => $request->search ?? ''
            ]
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'file' => 'required|image|max:10240', // max 10MB
        ]);

        if ($request->hasFile('file')) {
            $file = $request->file('file');
            
            // Store file in public storage inside media directory
            $path = $file->store('media', 'public');
            
            // Get dimensions
            $sizeInfo = @getimagesize(storage_path('app/public/' . $path));
            $dimensions = $sizeInfo ? $sizeInfo[0] . 'x' . $sizeInfo[1] : null;

            $media = Media::create([
                'name' => $file->getClientOriginalName(),
                'path' => '/storage/' . $path,
                'mime_type' => $file->getMimeType(),
                'size' => $file->getSize(),
                'dimensions' => $dimensions,
            ]);

            if ($request->wantsJson() || $request->has('api')) {
                return response()->json([
                    'success' => true,
                    'media' => $media
                ]);
            }

            return redirect()->back()->with('success', 'Media berhasil diunggah!');
        }

        return response()->json(['error' => 'File tidak ditemukan'], 400);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $media = Media::findOrFail($id);
        $media->update([
            'name' => $request->name,
        ]);

        if ($request->wantsJson() || $request->has('api')) {
            return response()->json([
                'success' => true,
                'media' => $media
            ]);
        }

        return redirect()->back()->with('success', 'Nama media berhasil diperbarui!');
    }

    public function destroy($id)
    {
        $media = Media::findOrFail($id);

        // Delete physical file
        $diskPath = str_replace('/storage/', '', $media->path);
        if (Storage::disk('public')->exists($diskPath)) {
            Storage::disk('public')->delete($diskPath);
        }

        $media->delete();

        return redirect()->back()->with('success', 'Media berhasil dihapus!');
    }
}
