<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Cache;

class SettingController extends Controller
{
    /**
     * Display the settings page.
     */
    public function index()
    {
        $settings = Setting::whereIn('key', ['whatsapp', 'facebook', 'instagram', 'linkedin', 'youtube'])
            ->pluck('value', 'key');

        return Inertia::render('Admin/Settings/Index', [
            'settings' => $settings
        ]);
    }

    /**
     * Update settings.
     */
    public function update(Request $request)
    {
        $validated = $request->validate([
            'whatsapp' => 'nullable|string',
            'facebook' => 'nullable|url',
            'instagram' => 'nullable|url',
            'linkedin' => 'nullable|url',
            'youtube' => 'nullable|url',
        ]);

        foreach ($validated as $key => $value) {
            Setting::updateOrCreate(
                ['key' => $key],
                ['value' => $value]
            );
        }

        // Clear cache so frontend gets updated links
        Cache::forget('social_links');

        return back()->with('success', 'Pengaturan berhasil disimpan.');
    }
}
