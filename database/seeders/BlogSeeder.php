<?php

namespace Database\Seeders;

use App\Models\Blog;
use App\Models\Category;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class BlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // 1. Siapkan User (Admin)
        $user = User::firstOrCreate(
            ['email' => 'admin@kodeflow.tech'],
            [
                'name' => 'Farhan Alfarabi',
                'password' => bcrypt('password123'),
            ]
        );

        $user2 = User::firstOrCreate(
            ['email' => 'rizky@kodeflow.tech'],
            [
                'name' => 'Rizky Firmansyah',
                'password' => bcrypt('password123'),
            ]
        );

        // 2. Siapkan Categories
        $categories = [
            'IT untuk Bisnis',
            'Panduan & Tips',
            'Insight Industri',
            'Studi Kasus',
            'Dari Kodeflow'
        ];

        $categoryIds = [];
        foreach ($categories as $cat) {
            $category = Category::firstOrCreate(
                ['slug' => Str::slug($cat)],
                ['name' => $cat]
            );
            $categoryIds[] = $category->id;
        }

        // 3. Siapkan Tags
        $tags = [
            'Web Development', 'Mobile App', 'UI/UX Design', 'Backend', 
            'Frontend', 'Cloud Computing', 'Agile', 'Laravel', 'Svelte', 'Cyber Security'
        ];

        $tagIds = [];
        foreach ($tags as $tagName) {
            $tag = Tag::firstOrCreate(
                ['slug' => Str::slug($tagName)],
                ['name' => $tagName]
            );
            $tagIds[] = $tag->id;
        }

        // 4. Data 10 Artikel Blog yang Kaya dengan HTML
        $blogsData = [
            [
                'title' => 'Panduan Memilih Vendor IT yang Tepat untuk Perusahaan Skala Menengah',
                'desc' => 'Jangan sampai proyek IT Anda mangkrak di tengah jalan. Pelajari 7 kriteria utama sebelum menandatangani kontrak.',
                'image_path' => 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop',
                'category_id' => $categoryIds[1],
                'is_featured' => true,
                'content' => '
                    <p>Memilih <strong>vendor IT</strong> yang tepat seringkali menjadi tantangan terbesar bagi perusahaan menengah. Jika salah pilih, Anda tidak hanya membuang anggaran, tetapi juga membuang waktu berharga yang bisa digunakan untuk ekspansi bisnis.</p>
                    <h2>Mengapa Banyak Proyek Gagal?</h2>
                    <p>Dari pengalaman kami di <em>Kodeflow Tech</em>, lebih dari 60% proyek IT gagal karena ekspektasi yang tidak dikomunikasikan dengan baik sejak awal.</p>
                    <ul>
                        <li><p>Kurangnya dokumen spesifikasi (PRD)</p></li>
                        <li><p>Metodologi kerja yang tidak transparan</p></li>
                        <li><p>Tim vendor yang sering berganti-ganti personel</p></li>
                    </ul>
                    <blockquote>
                        <p>Sebuah software yang bagus dibangun di atas pondasi komunikasi yang baik, bukan sekadar barisan kode.</p>
                    </blockquote>
                    <h3>Solusinya?</h3>
                    <p>Terapkan pola kerja <strong>Agile</strong>. Mintalah vendor Anda untuk memberikan laporan atau <em>sprint review</em> setiap dua minggu sekali. Jika dalam dua minggu pertama Anda merasa tidak cocok, Anda bisa memotong kerugian lebih awal.</p>
                '
            ],
            [
                'title' => 'Migrasi dari Spreadsheet ke Aplikasi Custom: Kapan Saat yang Tepat?',
                'desc' => 'Excel dan Google Sheets memang hebat. Tapi ada batas di mana bisnis Anda butuh lebih dari sekadar baris dan kolom.',
                'image_path' => 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
                'category_id' => $categoryIds[0],
                'is_featured' => false,
                'content' => '
                    <p>Setiap bisnis pasti memulai pencatatan datanya menggunakan <strong>Spreadsheet</strong>. Gratis, mudah digunakan, dan semua orang familiar. Namun, kapan hal ini menjadi sebuah masalah?</p>
                    <h2>3 Tanda Anda Harus Migrasi</h2>
                    <ol>
                        <li><p><strong>Data Hilang Secara Misterius:</strong> Ketika ada lebih dari 5 orang yang memiliki akses edit ke file yang sama.</p></li>
                        <li><p><strong>File Lemot:</strong> Anda harus menunggu 5 detik hanya untuk berpindah antar *sheet*.</p></li>
                        <li><p><strong>Keamanan Rendah:</strong> Siapa pun bisa menyalin dan mengunduh data pelanggan Anda ke *flashdrive* pribadi mereka.</p></li>
                    </ol>
                    <h3>Membangun Sistem ERP Custom</h3>
                    <p>Berbeda dengan langganan bulanan <em>Software as a Service</em> (SaaS), sistem kustom dibuat 100% mengikuti cara kerja perusahaan Anda. Anda membayar satu kali pembuatan, dan sistem menjadi aset Anda seutuhnya.</p>
                    <pre><code class="language-javascript">const checkBusinessGrowth = (currentTools) => {
    if(currentTools.name === "Spreadsheet" && currentTools.userCount > 10) {
        return "Time to upgrade!";
    }
    return "You are fine.";
}</code></pre>
                '
            ],
            [
                'title' => 'Studi Kasus: Membangun Aplikasi E-Commerce yang Tahan Banting Saat Flash Sale',
                'desc' => 'Bagaimana Kodeflow Tech menangani lonjakan 10.000 pengunjung per detik tanpa membuat server down.',
                'image_path' => 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop',
                'category_id' => $categoryIds[3],
                'is_featured' => false,
                'content' => '
                    <p>Klien e-commerce kami sering menangis ketika mengadakan <strong>Flash Sale</strong>. Kenapa? Karena server mereka selalu tumbang di menit pertama, yang berakibat pada kemarahan pelanggan di media sosial.</p>
                    <h2>Arsitektur yang Digunakan</h2>
                    <p>Kami merombak total arsitektur mereka dalam kurun waktu 3 bulan menggunakan pendekatan modern.</p>
                    <ul>
                        <li><p><strong>Frontend:</strong> SvelteKit untuk <em>render</em> halaman yang secepat kilat.</p></li>
                        <li><p><strong>Backend:</strong> Laravel Octane dengan Swoole yang meningkatkan kecepatan proses <em>request</em> hingga 5x lipat.</p></li>
                        <li><p><strong>Database:</strong> Redis untuk <em>caching</em> jumlah stok dan PostgreSQL untuk data utama.</p></li>
                    </ul>
                    <blockquote>
                        <p>Skalabilitas itu direncanakan, bukan terjadi secara kebetulan.</p>
                    </blockquote>
                    <p>Hasilnya? Pada kampanye harbolnas berikutnya, mereka berhasil melayani puluhan ribu transaksi tanpa ada satupun keluhan server error.</p>
                '
            ],
            [
                'title' => 'Mengapa Svelte Mengalahkan React untuk Proyek Kami Selanjutnya?',
                'desc' => 'Perbandingan jujur dari sisi Developer Experience (DX) dan performa untuk pengguna akhir.',
                'image_path' => 'https://images.unsplash.com/photo-1627398240411-8bbeb44973ae?q=80&w=1000&auto=format&fit=crop',
                'category_id' => $categoryIds[4],
                'is_featured' => false,
                'content' => '
                    <p>React adalah raja dari <em>framework</em> UI selama bertahun-tahun. Tapi akhir-akhir ini, tim kami semakin jatuh cinta dengan <strong>Svelte</strong>.</p>
                    <h2>Virtual DOM is Pure Overhead</h2>
                    <p>Svelte tidak menggunakan Virtual DOM. Svelte adalah sebuah <em>compiler</em>. Artinya, ia mengubah kode komponen menjadi instruksi <em>Vanilla JavaScript</em> yang sangat presisi sebelum dikirim ke peramban pengguna.</p>
                    <pre><code class="language-html">&lt;script&gt;
    let count = 0;
    function handleClick() {
        count += 1;
    }
&lt;/script&gt;

&lt;button on:click={handleClick}&gt;
    Diklik {count} kali
&lt;/button&gt;</code></pre>
                    <p>Lihat seberapa bersihnya kode di atas? Tidak ada <code>useState</code>, tidak ada <code>useEffect</code> yang memusingkan, dan yang terpenting: ukuran *bundle* akhirnya sangat kecil sehingga situs web memuat dengan sekejap mata.</p>
                '
            ],
            [
                'title' => 'Ancaman Ransomware: Apa yang Terjadi Jika Data Bisnis Anda Disandera?',
                'desc' => 'Ransomware bukan lagi monopoli perusahaan besar. UKM kini menjadi target utama para peretas.',
                'image_path' => 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1000&auto=format&fit=crop',
                'category_id' => $categoryIds[2],
                'is_featured' => false,
                'content' => '
                    <p>Bayangkan Anda datang ke kantor di hari Senin, menyalakan komputer, namun menemukan layar merah yang menuntut uang kripto sebesar ratusan juta rupiah hanya untuk membuka file-file pekerjaan Anda. Mengerikan, bukan?</p>
                    <h2>Celah Utama Peretas</h2>
                    <ul>
                        <li><p>Lampiran email <em>Phishing</em> (Faktur palsu, panggilan wawancara palsu)</p></li>
                        <li><p>Sistem operasi bajakan yang tidak pernah diperbarui</p></li>
                        <li><p>Kata sandi yang sangat lemah seperti <code>admin123</code></p></li>
                    </ul>
                    <h3>Mitigasi Efektif</h3>
                    <p>Kami mewajibkan seluruh proyek klien kami mengadopsi <strong>Arsitektur Zero Trust</strong> dan pencadangan data (*backup*) otomatis ke server terpisah yang secara fisik berbeda lokasi setiap malam. Ingat, tidak ada sistem yang aman 100%, tapi kita bisa membuat peretas menyerah karena terlalu repot menembus sistem kita.</p>
                '
            ],
            [
                'title' => 'Pentingnya UI/UX yang Mulus untuk Aplikasi Internal Karyawan',
                'desc' => 'Mengapa Anda tidak boleh mengabaikan desain untuk aplikasi yang dipakai sendiri oleh staf Anda.',
                'image_path' => 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop',
                'category_id' => $categoryIds[1],
                'is_featured' => false,
                'content' => '
                    <p>Ada mitos yang beredar: <em>"Ah, ini kan cuma dipakai oleh orang dalam. Desainnya jelek dan kaku juga tidak apa-apa, yang penting fungsinya jalan."</em></p>
                    <h2>Mengapa Itu Salah Besar?</h2>
                    <p>Karyawan menghabiskan 8 jam seharinya di depan aplikasi internal tersebut. Jika UI-nya membingungkan, UX-nya penuh klik yang tidak perlu, dan warnanya menyakitkan mata, akibatnya adalah <strong>kelelahan mental (burnout)</strong> dan penurunan produktivitas.</p>
                    <blockquote>
                        <p>Good design is good business. Berlaku juga untuk operasional internal Anda.</p>
                    </blockquote>
                    <p>Aplikasi yang mudah digunakan akan memangkas waktu <em>training</em> anak magang dari berminggu-minggu menjadi hanya beberapa jam saja.</p>
                '
            ],
            [
                'title' => 'Dari Monolith ke Microservices: Perjalanan Kodeflow',
                'desc' => 'Tidak semua proyek butuh microservices. Inilah kapan waktu yang tepat untuk memecah arsitektur Anda.',
                'image_path' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
                'category_id' => $categoryIds[4],
                'is_featured' => false,
                'content' => '
                    <p>Dulu, memecah aplikasi menjadi ratusan layanan kecil (<strong>Microservices</strong>) sangat tren. Namun, kompleksitas infrastrukturnya seringkali membuat pusing kepala developer kecil.</p>
                    <h2>Modular Monolith: Kompromi Terbaik</h2>
                    <p>Di <em>Kodeflow</em>, kami sering merekomendasikan pendekatan <strong>Modular Monolith</strong>. Artinya, kodenya berada di dalam satu <em>repository</em> besar, dan di-<em>deploy</em> bersamaan, namun secara internal filenya benar-benar terisolasi.</p>
                    <pre><code class="language-php">namespace App\Modules\Billing;

class InvoiceGenerator {
    // Layanan ini hanya mengurus tagihan, 
    // sama sekali dilarang memanggil kode dari modul Pengiriman.
}</code></pre>
                    <p>Jika nanti <em>traffic</em> perusahaan meledak tak tertahankan, modul tersebut bisa dipotong dan dipindahkan ke server berbeda dengan sangat mudah karena secara desain sudah terpisah.</p>
                '
            ],
            [
                'title' => 'Mengenal PWA (Progressive Web Apps): Masa Depan Aplikasi?',
                'desc' => 'Aplikasi web yang bisa di-install layaknya aplikasi native tanpa harus melalui Play Store atau App Store.',
                'image_path' => 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop',
                'category_id' => $categoryIds[0],
                'is_featured' => false,
                'content' => '
                    <p>Banyak klien meminta kami membuat aplikasi Android dan iOS. Namun ketika ditanya fungsinya, jawabannya sederhana: <em>"Biar ikonnya ada di layar beranda ponsel pengguna."</em></p>
                    <h2>Solusi Lebih Cerdas: PWA</h2>
                    <p>Dengan <strong>Progressive Web App</strong>, pengguna mengunjungi situs web Anda dari *browser* HP, menekan opsi "Tambahkan ke Layar Utama", dan seketika aplikasi itu terpasang layaknya aplikasi *native*!</p>
                    <ul>
                        <li><p>Biaya pembuatan jauh lebih murah</p></li>
                        <li><p>Bisa diakses saat koneksi internet terputus (Offline mode via Service Worker)</p></li>
                        <li><p>Tidak perlu repot dengan persetujuan (approval) berbelit dari pihak Apple atau Google</p></li>
                    </ul>
                '
            ],
            [
                'title' => 'Cara Efektif Merekrut Software Engineer Berbakat',
                'desc' => 'Hindari ujian coding papan tulis yang kaku. Inilah cara kami menyeleksi kandidat terbaik.',
                'image_path' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop',
                'category_id' => $categoryIds[2],
                'is_featured' => false,
                'content' => '
                    <p>Menemukan <em>programmer</em> itu mudah. Menemukan seorang <strong>Software Engineer</strong> sejati itu sangat sulit.</p>
                    <h2>Wawancara Berbasis Masalah Nyata</h2>
                    <p>Kami membuang ujian membalikkan struktur data "*binary tree*" di papan tulis putih. Hal tersebut nyaris tidak pernah kami temui dalam pekerjaan agensi harian kami.</p>
                    <p>Sebagai gantinya, kami memberi kandidat sebuah aplikasi yang sengaja kami beri *bug* parah di logika pembayarannya. Kami lalu meminta mereka untuk memperbaikinya, sembari menjelaskan proses berpikir mereka. Dari situ, karakter asli, ketelitian, dan penguasaan <em>tools debugging</em> mereka terlihat jelas.</p>
                '
            ],
            [
                'title' => 'Apakah AI Akan Menggantikan Programmer Manusia?',
                'desc' => 'Dampak Artificial Intelligence seperti Copilot pada industri pengembangan perangkat lunak.',
                'image_path' => 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop',
                'category_id' => $categoryIds[4],
                'is_featured' => false,
                'content' => '
                    <p>Kemunculan asisten <strong>AI</strong> seperti GitHub Copilot, ChatGPT, dan Claude telah mengguncang dunia pengembangan perangkat lunak. Tapi, apakah pekerjaan <em>programmer</em> akan sirna?</p>
                    <h2>AI Sebagai Traktor, Bukan Petani</h2>
                    <p>Dulu, petani membajak sawah menggunakan cangkul. Lalu datanglah mesin traktor. Traktor sangat kuat, tetapi ia tidak akan pernah menanam padi dengan sendirinya. Petani tetap dibutuhkan untuk mengendarai dan mengarahkannya.</p>
                    <blockquote>
                        <p>AI tidak akan menggantikan Software Engineer. Software Engineer yang MENGGUNAKAN AI akan menggantikan mereka yang tidak.</p>
                    </blockquote>
                    <p>Di Kodeflow Tech, kami mewajibkan pemakaian AI untuk mempercepat penulisan kode-*boilerplate* yang membosankan. Waktu ekstra tersebut kami alihkan untuk memikirkan arsitektur dan aspek keamanan yang lebih krusial yang saat ini belum bisa ditangani AI.</p>
                '
            ]
        ];

        $faker = \Faker\Factory::create('id_ID');
        
        $unsplashIds = [
            '1504384308090-c894fdcc538d', '1498050108023-c5249f4df085', '1517694712202-14dd9538aa97', 
            '1531403009284-440f080d1e12', '1550751827-4bd374c3f58b', '1451187580459-43490279c0fa',
            '1504868584819-f8f8b4b7e90e', '1522202176988-66273c2fd55f', '1499951360447-b19be8fe80f5',
            '1515378791033-cded33daa814'
        ];

        for ($i = 0; $i < 10; $i++) {
            $imageId = $faker->randomElement($unsplashIds);
            
            $blogsData[] = [
                'title' => rtrim($faker->sentence(rand(6, 10)), '.'),
                'desc' => $faker->paragraph(2),
                'image_path' => 'https://images.unsplash.com/photo-' . $imageId . '?q=80&w=1000&auto=format&fit=crop&rnd=' . $faker->numberBetween(100, 999),
                'category_id' => $faker->randomElement($categoryIds),
                'is_featured' => $faker->boolean(10), // 10% chance to be featured
                'content' => '
                    <p>' . implode('</p><p>', $faker->paragraphs(3)) . '</p>
                    <h2>' . $faker->sentence(4) . '</h2>
                    <p>' . implode('</p><p>', $faker->paragraphs(2)) . '</p>
                ',
                'ai_summary' => '<p><strong>Ringkasan Eksekutif:</strong> Artikel ini membahas topik penting yang dirangkum oleh AI. Ini adalah contoh ringkasan cerdas yang menyoroti poin-poin utama dari konten di bawah ini, membantu pembaca mendapatkan intisari dalam waktu kurang dari 30 detik.</p><ul><li>Poin utama pertama</li><li>Poin penting kedua</li><li>Kesimpulan singkat</li></ul>'
            ];
        }

        // Looping dan buat Blog + pasang Tags
        $allBlogIds = [];

        foreach ($blogsData as $index => $data) {
            $author = ($index % 2 == 0) ? $user->id : $user2->id;

            $blog = Blog::firstOrCreate(
                ['slug' => Str::slug($data['title'])],
                [
                    'title' => $data['title'],
                    'desc' => $data['desc'],
                    'content' => $data['content'],
                    'ai_summary' => $data['ai_summary'] ?? null,
                    'image_path' => $data['image_path'],
                    'read_time' => rand(3, 10),
                    'status' => 'published',
                    'is_featured' => $data['is_featured'],
                    'publish_date' => now()->subDays(rand(1, 30)),
                    'category_id' => $data['category_id'],
                    'author_id' => $author
                ]
            );

            $allBlogIds[] = $blog->id;

            // Attach 2 to 4 random tags
            $randomTags = collect($tagIds)->random(rand(2, 4));
            $blog->tags()->attach($randomTags);
        }

        // Setup Related Blogs for some blogs
        foreach ($allBlogIds as $index => $blogId) {
            if (rand(1, 3) == 1) { // 33% chance to have related blogs
                // pick 1 to 3 random related blogs
                $randomRelatedIds = collect($allBlogIds)->reject(function($id) use ($blogId) {
                    return $id == $blogId;
                })->random(rand(1, 3))->values()->toArray();
                
                Blog::where('id', $blogId)->update(['related_blogs' => json_encode($randomRelatedIds)]);
            }
        }
    }
}
