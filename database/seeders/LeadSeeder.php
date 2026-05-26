<?php

namespace Database\Seeders;

use App\Models\Lead;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class LeadSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create('id_ID');

        $services = [
            'Pembuatan Website Custom',
            'Pengembangan Aplikasi Mobile',
            'UI/UX Design',
            'Audit Keamanan & Konsultasi IT',
            'Pemeliharaan Sistem & Cloud',
            'Sistem ERP/CRM Internal'
        ];

        for ($i = 0; $i < 20; $i++) {
            $date = $faker->dateTimeBetween('now', '+1 month');
            Lead::create([
                'name' => $faker->name,
                'company_name' => $faker->company,
                'message' => $faker->paragraph(2),
                'meeting_date' => $date->format('Y-m-d'),
                'meeting_time' => $faker->randomElement(['09.00', '10.00', '11.00', '14.00', '15.00', '16.00', '19.00', '20.00']),
                'created_at' => $faker->dateTimeBetween('-1 month', 'now'),
                'updated_at' => now(),
            ]);
        }
    }
}
