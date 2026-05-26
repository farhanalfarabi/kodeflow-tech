<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $settings = [
            ['key' => 'whatsapp', 'value' => '6281234567890'],
            ['key' => 'facebook', 'value' => 'https://facebook.com/kodeflow'],
            ['key' => 'instagram', 'value' => 'https://instagram.com/kodeflow.id'],
            ['key' => 'threads', 'value' => 'https://threads.net/@kodeflow.id'],
            ['key' => 'youtube', 'value' => 'https://youtube.com/@kodeflow'],
        ];

        foreach ($settings as $setting) {
            \App\Models\Setting::updateOrCreate(
                ['key' => $setting['key']],
                ['value' => $setting['value']]
            );
        }
    }
}
