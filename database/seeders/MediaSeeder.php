<?php

namespace Database\Seeders;

use App\Models\Media;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class MediaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        // Sample Unsplash IDs to make the generated URLs somewhat realistic
        $unsplashIds = [
            '1552664730-d307ca884978',
            '1460925895917-afdab827c52f',
            '1556742049-0cfed4f6a45d',
            '1627398240411-8bbeb44973ae',
            '1526304640581-d334cdbbf45e',
            '1561070791-2526d30994b5',
            '1551288049-bebda4e38f71',
            '1512941937669-90a1b58e7e9c',
            '1522071820081-009f0129c71c',
            '1677442136019-21780ecad995',
            '1504384308090-c894fdcc538d',
            '1498050108023-c5249f4df085',
            '1517694712202-14dd9538aa97',
            '1531403009284-440f080d1e12',
            '1550751827-4bd374c3f58b',
        ];

        for ($i = 0; $i < 20; $i++) {
            $width = $faker->randomElement([800, 1024, 1280, 1920]);
            $height = $faker->randomElement([600, 768, 720, 1080]);
            
            $imageId = $faker->randomElement($unsplashIds);
            // Append random query to avoid cache if same image used
            $randomQ = '&rnd=' . $faker->numberBetween(100, 999);

            Media::create([
                'name' => 'Media Image ' . ($i + 1) . ' - ' . $faker->word,
                'path' => 'https://images.unsplash.com/photo-' . $imageId . '?q=80&w=1000&auto=format&fit=crop' . $randomQ,
                'mime_type' => 'image/jpeg',
                'size' => $faker->numberBetween(102400, 5242880), // 100KB to 5MB
                'dimensions' => $width . 'x' . $height,
                'created_at' => $faker->dateTimeBetween('-3 months', 'now'),
                'updated_at' => now(),
            ]);
        }
    }
}
