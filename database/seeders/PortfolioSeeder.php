<?php

namespace Database\Seeders;

use App\Models\Portfolio;
use App\Models\PortfolioCategory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class PortfolioSeeder extends Seeder
{
    public function run(): void
    {
        $portfolios = [
            [
                "slug" => "flowbiz-erp",
                "category" => "ENTERPRISE ERP & LOGISTICS",
                "title" => "FlowBiz ERP: Orkestrasi Manufaktur Global & Logistik Terintegrasi",
                "subtitle" => "Sistem ERP berbasis cloud kustom yang menyederhanakan rantai pasok, kontrol produksi, dan logistik ekspor secara real-time - menghilangkan hambatan data dan meningkatkan margin keuntungan operasional hingga 42%.",
                "image" => "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
                "summary" => [
                    "importance" => "PT Indo Woodworks menghadapi denda keterlambatan pengiriman logistik internasional akibat data produksi & inventaris yang terpecah di 12 lembar spreadsheet manual.",
                    "context" => "Manufaktur Furniture Kayu Ekspor dengan pasar utama ke Amerika Serikat dan Uni Eropa. 450+ Karyawan, 3 pabrik aktif.",
                    "result" => [
                        "Efisiensi alur produksi naik +42%",
                        "Akurasi stok real-time mencapai 99.4%",
                        "Waktu audit inventaris dipangkas dari 5 hari menjadi 10 menit."
                    ],
                    "modules" => [
                        "Auto-Scheduler Produksi (MRP)",
                        "Barcode Integrasi Inventaris & Gudang",
                        "Pelacakan Logistik & Kontainer Kontrol",
                        "Otomatisasi Dokumen Invoice & Export Kepatuhan"
                    ],
                    "targetReader" => [
                        "Direktur Operasional Manufaktur",
                        "Pemilik Bisnis Ekspor/Impor",
                        "IT Manager"
                    ]
                ],
                "validation" => [
                    [
                        "metric" => "42%",
                        "title" => "Efisiensi Operasional",
                        "desc" => "Kapasitas produksi pabrik naik dari 80 kontainer/bulan menjadi 114 kontainer tanpa adanya lembur tambahan."
                    ],
                    [
                        "metric" => "ZERO",
                        "title" => "Denda Keterlambatan",
                        "desc" => "Sistem alarm otomatis berhasil mencegah keterlambatan kontainer sehingga denda pengapalan kini berada di angka nol rupiah."
                    ]
                ],
                "challenge_short" => "Manajemen PT Indo Woodworks merasa frustrasi karena data gudang sering tidak sinkron dengan tim penjualan. Bahan baku sering habis di tengah-tengah produksi ekspor.",
                "solution_short" => "Kami merancang sistem ERP custom berbasis web yang terintegrasi secara real-time.",
                "tech_stack" => ["Laravel 11", "Svelte", "PostgreSQL", "TailwindCSS"],
                "gallery" => [
                    [
                        "url" => "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
                        "caption" => "Tahap Analisis Kebutuhan"
                    ]
                ],
                "deep_dive" => [
                    "content" => "<h2>Latar Belakang</h2><p>PT Indo Woodworks adalah raksasa manufaktur olahan kayu di Jawa Timur yang melayani pasar ekspor. Selama 15 tahun berdiri, pertumbuhan bisnis mereka dihambat oleh sistem administrasi manual.</p>"
                ],
                "faqs" => [
                    [
                        "q" => "Apakah sistem ERP manufaktur ini bisa diintegrasikan dengan mesin fisik?",
                        "a" => "Ya, tentu saja. FlowBiz ERP dirancang dengan API-First architecture."
                    ]
                ],
                "status" => "published"
            ],
            [
                "slug" => "medikaconnect",
                "category" => "HEALTHCARE & TELEMEDICINE",
                "title" => "MedikaConnect: Platform Telekonsultasi & EHR Terpadu",
                "subtitle" => "Menghubungkan dokter dan pasien secara aman, mengintegrasikan rekam medis elektronik (EHR) end-to-end, dan memangkas waktu tunggu pasien hingga 65%.",
                "image" => "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
                "summary" => [
                    "importance" => "Klinik mitra mengalami bottleneck pendaftaran pasien dan kebocoran data rekam medis pada server legacy yang tidak aman.",
                    "context" => "Jaringan klinik swasta dengan 25+ cabang di Jawa Timur.",
                    "result" => [
                        "Waktu antrean pendaftaran dipangkas 65%",
                        "Keamanan data 100% patuh regulasi",
                        "Tingkat kepuasan pasien meningkat pesat ke 4.8/5"
                    ],
                    "modules" => [
                        "Telekonsultasi Video HD Real-Time",
                        "Electronic Health Record (EHR) Terenkripsi"
                    ],
                    "targetReader" => [
                        "Pemilik Rumah Sakit & Jaringan Klinik",
                        "Dokter / Praktisi Kesehatan"
                    ]
                ],
                "validation" => [
                    [
                        "metric" => "150K+",
                        "title" => "Pasien Aktif",
                        "desc" => "Telah melayani lebih dari 150.000 pasien terdaftar sejak 6 bulan pertama peluncuran."
                    ]
                ],
                "challenge_short" => "Klinik kewalahan akibat proses rekam medis manual yang berantakan.",
                "solution_short" => "Kami mengembangkan ekosistem MedikaConnect dengan enkripsi AES-256.",
                "tech_stack" => ["React", "Node.js", "MongoDB", "AWS Cloud"],
                "gallery" => [
                    [
                        "url" => "https://images.unsplash.com/photo-1579684389782-64d84b5e905d?q=80&w=800&auto=format&fit=crop",
                        "caption" => "Tahap UI/UX"
                    ]
                ],
                "deep_dive" => [
                    "content" => "<h2>Latar Belakang</h2><p>Jaringan klinik mitra menyadari bahwa efisiensi adalah kunci bertahan di era modern. Dengan 25 cabang, sinkronisasi rekam medis secara manual menggunakan kertas sudah tidak lagi relevan.</p>"
                ],
                "faqs" => [
                    [
                        "q" => "Apakah data rekam medis pasien dijamin keamanannya?",
                        "a" => "Sangat dijamin. Kami menerapkan enkripsi AES-256 pada tingkat database."
                    ]
                ],
                "status" => "published"
            ]
        ];

        foreach ($portfolios as $p) {
            $categoryName = $p["category"];
            unset($p["category"]);

            $category = PortfolioCategory::firstOrCreate([
                "name" => $categoryName
            ], [
                "slug" => Str::slug($categoryName)
            ]);

            $p["category_id"] = $category->id;

            Portfolio::updateOrCreate(
                ["slug" => $p["slug"]],
                $p
            );
        }
    }
}
