export const portfolios = {
  id: [
    {
      id: 1,
      slug: "flowbiz-erp",
      category: "ENTERPRISE ERP & LOGISTICS",
      tag: "Enterprise ERP",
      title: "FlowBiz ERP: Orkestrasi Manufaktur Global & Logistik Terintegrasi",
      shortTitle: "FlowBiz ERP: Sistem Orkestrasi Manufaktur Ekspor",
      subtitle: "Sistem ERP berbasis cloud kustom yang menyederhanakan rantai pasok, kontrol produksi, dan logistik ekspor secara real-time—menghilangkan hambatan data dan meningkatkan margin keuntungan operasional hingga 42%.",
      shortDescription: "Sistem ERP terintegrasi kustom untuk mengotomatisasi produksi, kontrol inventaris, dan kepatuhan standar ekspor global.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      impact: "+42% EFISIENSI",
      
      // Quick Summary
      summary: {
        importance: "PT Indo Woodworks menghadapi denda keterlambatan pengiriman logistik internasional akibat data produksi & inventaris yang terpecah di 12 lembar spreadsheet manual.",
        context: "Manufaktur Furniture Kayu Ekspor dengan pasar utama ke Amerika Serikat dan Uni Eropa. 450+ Karyawan, 3 pabrik aktif.",
        result: [
          "Efisiensi alur produksi naik +42%",
          "Akurasi stok real-time mencapai 99.4%",
          "Waktu audit inventaris dipangkas dari 5 hari menjadi 10 menit."
        ],
        modules: [
          "Auto-Scheduler Produksi (MRP)",
          "Barcode Integrasi Inventaris & Gudang",
          "Pelacakan Logistik & Kontainer Kontrol",
          "Otomatisasi Dokumen Invoice & Export Kepatuhan"
        ],
        targetReader: [
          "Direktur Operasional Manufaktur",
          "Pemilik Bisnis Ekspor/Impor",
          "IT Manager yang butuh referensi migrasi sistem warisan (legacy)"
        ]
      },

      // Validation
      validation: [
        {
          metric: "42%",
          title: "Efisiensi Operasional",
          desc: "Kapasitas produksi pabrik naik dari 80 kontainer/bulan menjadi 114 kontainer tanpa adanya lembur tambahan."
        },
        {
          metric: "ZERO",
          title: "Denda Keterlambatan",
          desc: "Sistem alarm otomatis berhasil mencegah keterlambatan kontainer sehingga denda pengapalan kini berada di angka nol rupiah."
        },
        {
          metric: "< 2 Hari",
          title: "Onboarding Staf",
          desc: "Staf gudang langsung mahir menggunakan scanner barcode terintegrasi dalam waktu kurang dari 2 hari karena UI yang intuitif."
        }
      ],

      // Challenges & Short Solution
      challengeShort: "Manajemen PT Indo Woodworks merasa frustrasi karena data gudang sering tidak sinkron dengan tim penjualan. Bahan baku sering habis di tengah-tengah produksi ekspor, memicu keterlambatan pengiriman kontainer dan denda ribuan dolar setiap bulan.",
      solutionShort: "Kami merancang sistem ERP 'FlowBiz' kustom berbasis web yang terintegrasi secara real-time. Setiap pergerakan bahan baku dicatat via scanner genggam, sementara algoritma cerdas kami otomatis menyusun jadwal produksi optimal berdasarkan prioritas tanggal pengapalan kapal laut.",
      techStack: ["Laravel 11", "Svelte", "PostgreSQL", "Docker", "TailwindCSS", "AWS S3"],

      // Process Gallery
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
          caption: "Tahap Analisis Kebutuhan: Tim Kodeflow turun langsung ke lantai pabrik bersama kepala gudang."
        },
        {
          url: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop",
          caption: "Tahap Validasi Alur: Merancang antarmuka UI/UX sederhana ramah perangkat industri."
        }
      ],
      galleryCaption: "Dokumentasi proses pengerjaan asli—mulai dari turun langsung ke lantai pabrik untuk memahami alur kayu fisik, hingga perancangan arsitektur data yang mampu memproses ribuan inventaris dalam hitungan milidetik.",

      // Deep Dive Case Study
      deepDive: {
        background: "PT Indo Woodworks adalah raksasa manufaktur olahan kayu di Jawa Timur yang melayani pasar ekspor. Selama 15 tahun berdiri, pertumbuhan bisnis mereka dihambat oleh sistem administrasi manual. Penggunaan kertas memo fisik untuk memindahkan barang dari satu area pabrik ke area lain sering kali hilang. Pemilik perusahaan kesulitan melihat laporan laba-rugi proyek secara real-time karena data keuangan baru selesai dikompilasi 3 minggu setelah bulan berakhir. Mereka membutuhkan mitra teknologi yang tidak hanya sekadar membuat perangkat lunak, melainkan memahami proses bisnis manufaktur yang kompleks.",
        challenges: [
          "Sinkronisasi Multi-Lokasi: Menghubungkan data dari 3 pabrik fisik yang berjarak puluhan kilometer ke satu pusat database yang konsisten.",
          "Kondisi Lingkungan Ekstrem: Aplikasi gudang harus berjalan lancar pada perangkat scanner murah di area pabrik yang berdebu kayu tebal dengan koneksi Wi-Fi yang tidak stabil.",
          "Optimasi Jadwal Produksi (MRP): Menghitung kebutuhan bahan baku kayu (logs) secara presisi dengan memperhitungkan penyusutan volume saat proses pengeringan kiln-dry.",
          "Kepatuhan Regulasi SVLK: Menjamin setiap kayu yang diproses memiliki sertifikasi legalitas ekspor (SVLK) yang dapat dilacak balik asal-usul pohonnya oleh auditor internasional.",
          "Skalabilitas & Kecepatan: Sistem harus mampu merender inventaris berisi 50.000+ item aktif tanpa mengalami lag halaman yang dapat mengganggu pekerja gudang."
        ],
        approach: "Kodeflow menerapkan pendekatan Agile-Hybrid dengan fokus pada kolaborasi pengguna. Kami merancang arsitektur aplikasi berbasis Single Page Application (SPA) menggunakan Svelte untuk antarmuka yang sangat responsif, dipadukan dengan Laravel di sisi backend untuk ketangguhan manajemen logika transaksi database. Untuk mengatasi masalah Wi-Fi pabrik yang buruk, kami menerapkan teknologi Offline-First Capabilities pada modul pemindaian barcode gudang—data disimpan sementara di memori lokal peramban (IndexedDB) dan otomatis disinkronkan saat koneksi internet pulih.",
        modulesBuilt: [
          {
            name: "Modul Kiln-Dry Monitor (Pengeringan Kayu)",
            desc: "Modul sensor terintegrasi untuk memantau suhu dan kelembapan ruangan oven pengering kayu guna memastikan kayu tidak melengkung dan siap diekspor."
          },
          {
            name: "Modul Barcode Tracking",
            desc: "Manajemen inventaris real-time yang memetakan posisi tepat kayu (Rak A, Gudang 2) melalui pemindaian instan kode QR."
          },
          {
            name: "Modul SVLK Traceability",
            desc: "Fitur pelacakan asal-usul log kayu, mengaitkan nomor dokumen tebang hutan dengan hasil produk jadi secara otomatis untuk pelaporan audit ekspor."
          },
          {
            name: "Modul Financial Ledger & Costing",
            desc: "Perhitungan harga pokok penjualan (HPP) otomatis per produk berdasarkan durasi pengerjaan mesin dan jumlah bahan baku yang dikonsumsi secara presisi."
          }
        ],
        decisions: "Dibandingkan React/Vue, Svelte menghasilkan bundel JS yang jauh lebih kecil dan tidak menggunakan Virtual DOM, melainkan langsung memperbarui DOM asli saat kompilasi. Ini memastikan aplikasi berjalan super cepat pada tablet industri berspesifikasi rendah di area pabrik. Struktur data transaksi ERP membutuhkan konsistensi ACID yang sangat ketat untuk mencegah selisih nilai keuangan. PostgreSQL dipilih karena ketangguhannya dalam menangani kueri relasional kompleks dan integritas data yang solid.",
        timeline: [
          { phase: "Minggu 1-2 (Discovery & Mapping)", desc: "Lokakarya bersama kepala pabrik, pemetaan alur proses bisnis fisik, dan pembuatan wireframe UI." },
          { phase: "Minggu 3-6 (Core Backend & DB Design)", desc: "Pengembangan skema database relasional, API internal, dan modul dasar manajemen inventaris." },
          { phase: "Minggu 7-9 (Frontend & Integration)", desc: "Implementasi UI Svelte, integrasi sistem pemindaian barcode offline-first, dan pengujian stress-test sistem." },
          { phase: "Minggu 10-11 (UAT & Dry-Run)", desc: "Uji coba langsung di lapangan oleh operator gudang dan mandor pabrik. Iterasi minor berdasarkan umpan balik pengguna." },
          { phase: "Minggu 12 (Go-Live & Support)", desc: "Migrasi data penuh dari spreadsheet manual ke ERP baru dan pelatihan intensif untuk seluruh staf." }
        ],
        resultsVisible: "Setelah 3 bulan sistem berjalan aktif, PT Indo Woodworks melaporkan zero-loss data inventaris. Keputusan pembelian bahan baku kayu kini didasarkan pada data analitik prediktif sistem, bukan tebakan subjektif. Direksi dapat memantau margin keuntungan harian langsung dari ponsel pintar mereka saat sedang melakukan perjalanan bisnis internasional.",
        lessonsLearned: "Teknologi tercanggih sekalipun tidak akan berguna jika pengguna di lapangan menolaknya. Kami menyadari pentingnya melibatkan operator gudang senior sejak hari pertama perancangan wireframe. Dengan membuat tombol aplikasi berukuran besar (mudah ditekan meski staf memakai sarung tangan kerja pelindung) dan alur kerja sesederhana mungkin, kami berhasil meminimalkan resistensi staf terhadap perubahan sistem baru.",
        conclusion: "Transformasi digital bukanlah tentang membeli perangkat lunak termahal, melainkan tentang membangun sistem kustom yang selaras sempurna dengan detak nadi operasional unik perusahaan Anda. FlowBiz ERP membuktikan bahwa efisiensi tinggi dan kepatuhan standar ekspor global dapat berjalan berdampingan melalui rekayasa perangkat lunak yang matang dari Kodeflow Tech."
      },

      // FAQ
      faqs: [
        {
          q: "Apakah sistem ERP manufaktur ini bisa diintegrasikan dengan mesin fisik?",
          a: "Ya, tentu saja. FlowBiz ERP dirancang dengan API-First architecture, memungkinkan integrasi dengan mesin timbangan digital, sensor suhu oven kiln-dry, maupun mesin pemotong kayu IoT untuk pencatatan otomatis."
        },
        {
          q: "Berapa lama waktu yang dibutuhkan untuk migrasi dari Excel ke sistem ERP?",
          a: "Proses migrasi data historis rata-rata memakan waktu 2 hingga 4 minggu. Tim data spesialis Kodeflow akan membersihkan (data cleaning) dan memvalidasi data Excel Anda sebelum diimpor aman ke database PostgreSQL baru."
        },
        {
          q: "Bagaimana jika koneksi internet di lokasi pabrik kami sering terputus?",
          a: "Kami merancang modul gudang dengan fitur 'Offline-First'. Operator tetap bisa melakukan scanning barcode barang meski internet mati. Data pemindaian disimpan aman secara lokal dan akan otomatis diunggah ketika sinyal kembali."
        }
      ]
    },
    {
      id: 2,
      slug: "medikaconnect",
      category: "HEALTHCARE & TELEMEDICINE",
      tag: "Mobile Apps",
      title: "MedikaConnect: Platform Telekonsultasi & EHR Terpadu",
      shortTitle: "MedikaConnect: Platform Telekonsultasi & EHR Terpadu",
      subtitle: "Menghubungkan dokter dan pasien secara aman, mengintegrasikan rekam medis elektronik (EHR) end-to-end, dan memangkas waktu tunggu pasien hingga 65%.",
      shortDescription: "Aplikasi mobile pasien & portal web dokter dengan sistem enkripsi data rekam medis (EHR) end-to-end yang aman dan real-time.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
      impact: "150K+ PASIEN",
      
      summary: {
        importance: "Klinik mitra mengalami bottleneck pendaftaran pasien dan kebocoran data rekam medis pada server legacy yang tidak aman.",
        context: "Jaringan klinik swasta dengan 25+ cabang di Jawa Timur, melayani ribuan kunjungan harian.",
        result: [
          "Waktu antrean pendaftaran dipangkas 65%",
          "Keamanan data 100% patuh regulasi HIPAA/Kemenkes",
          "Tingkat kepuasan pasien meningkat pesat ke 4.8/5"
        ],
        modules: [
          "Telekonsultasi Video HD Real-Time",
          "Electronic Health Record (EHR) Terenkripsi",
          "Resep Obat Digital & Integrasi Apotek",
          "Sistem Antrean Booking Online"
        ],
        targetReader: [
          "Pemilik Rumah Sakit & Jaringan Klinik",
          "Dokter / Praktisi Kesehatan",
          "Developer MedTech"
        ]
      },

      validation: [
        {
          metric: "150K+",
          title: "Pasien Aktif",
          desc: "Telah melayani lebih dari 150.000 pasien terdaftar sejak 6 bulan pertama peluncuran."
        },
        {
          metric: "65%",
          title: "Penghematan Waktu",
          desc: "Pasien tidak perlu antre fisik berjam-jam; pendaftaran hingga konsultasi selesai di aplikasi."
        },
        {
          metric: "100%",
          title: "Kepatuhan Kemenkes",
          desc: "Seluruh struktur data rekam medis elektronik telah sesuai regulasi SatuSehat Kementerian Kesehatan."
        }
      ],

      challengeShort: "Manajemen klinik kewalahan akibat proses rekam medis manual yang berantakan, hilangnya berkas pasien, serta lamanya proses booking dokter yang memicu antrean menumpuk di lobi klinik setiap pagi.",
      solutionShort: "Kami mengembangkan ekosistem MedikaConnect: aplikasi mobile Svelte Native untuk pasien dan dashboard web React untuk dokter/admin. Dilengkapi dengan enkripsi AES-256 pada EHR dan gateway pembayaran terintegrasi.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "AWS Cloud", "Agora SDK"],

      gallery: [
        {
          url: "https://images.unsplash.com/photo-1579684389782-64d84b5e905d?q=80&w=800&auto=format&fit=crop",
          caption: "Tahap UI/UX: Merancang antarmuka pasien yang bersih, tenang, dan mudah dioperasikan lansia."
        },
        {
          url: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop",
          caption: "Tahap Security Audit: Pengujian penetrasi enkripsi data untuk memastikan privasi rekam medis."
        }
      ],
      galleryCaption: "Dokumentasi proses pengerjaan intensif berfokus pada standardisasi kepatuhan medis dan kemudahan penggunaan aplikasi oleh pasien dari berbagai rentang usia.",

      deepDive: {
        background: "Jaringan klinik mitra menyadari bahwa efisiensi adalah kunci bertahan di era modern. Dengan 25 cabang, sinkronisasi rekam medis secara manual menggunakan kertas sudah tidak lagi relevan. Dokter sering kali harus menunggu staf mencari berkas pasien yang terselip, membuang waktu konsultasi yang berharga. MedikaConnect lahir sebagai jawaban komprehensif untuk menyatukan ekosistem klinik secara nirkertas.",
        challenges: [
          "Enkripsi Data Medis: Mengamankan data klinis pasien agar tidak mengalami kebocoran data.",
          "Integrasi SatuSehat: Menghubungkan sistem rekam medis lokal dengan platform SatuSehat Kementerian Kesehatan RI.",
          "Latensi Telekonsultasi: Memastikan komunikasi video call dokter-pasien berjalan mulus di daerah dengan sinyal 3G/4G minim.",
          "Manajemen Jadwal Dokter: Sinkronisasi real-time jadwal praktek dokter yang dinamis antar cabang."
        ],
        approach: "Kodeflow merancang infrastruktur cloud bersertifikasi keamanan tinggi di AWS. Modul telekonsultasi menggunakan Agora SDK untuk efisiensi kompresi video di jaringan lambat. Untuk sinkronisasi database EHR, kami menerapkan sistem microservices terenkripsi agar performa pencarian rekam medis pasien di bawah 1 detik.",
        modulesBuilt: [
          { name: "Portal Pasien (Android & iOS)", desc: "Aplikasi mobile intuitif untuk booking, konsultasi video, melihat riwayat resep, dan rekam medis pribadi." },
          { name: "Dashboard Rekam Medis Dokter", desc: "Portal web responsif yang memperlihatkan grafik kesehatan pasien, catatan diagnosa ICD-10, dan resep digital." },
          { name: "Sistem Antrean Klinik Pintar", desc: "Display antrean fisik di klinik yang sinkron otomatis dengan antrean booking aplikasi." }
        ],
        decisions: "Infrastruktur MongoDB dipilih untuk rekam medis karena struktur dokumen medis yang fleksibel (tidak kaku seperti tabel SQL) menyesuaikan perbedaan spesialisasi dokter. Node.js di sisi backend digunakan untuk menangani ribuan koneksi web-socket real-time secara efisien.",
        timeline: [
          { phase: "Minggu 1-3", desc: "Riset pengguna, kepatuhan hukum medis (HIPAA), dan arsitektur database terenkripsi." },
          { phase: "Minggu 4-8", desc: "Pengembangan modul rekam medis, modul antrean, dan sistem integrasi API SatuSehat." },
          { phase: "Minggu 9-11", desc: "Integrasi video call Agora, testing enkripsi end-to-end, dan rilis versi Beta di 2 cabang utama." },
          { phase: "Minggu 12", desc: "Peluncuran penuh di 25 cabang, pelatihan administrator medis, dan monitoring keamanan server." }
        ],
        resultsVisible: "Antrean fisik di klinik berkurang hingga 60%. Pasien dapat berkonsultasi langsung dari rumah untuk keluhan ringan, sementara dokter dapat mengakses riwayat rekam medis pasien dari cabang manapun dalam sekejap.",
        lessonsLearned: "Sektor kesehatan menuntut zero-tolerance terhadap kesalahan penanganan data. Pengujian skenario kegagalan server dan enkripsi berlapis harus diposisikan sebagai prioritas utama sebelum melangkah ke pengembangan antarmuka visual.",
        conclusion: "MedikaConnect menunjukkan bagaimana rekayasa teknologi modern mampu mentransformasi cara kerja layanan kesehatan menjadi lebih efisien, aman, dan humanis."
      },

      faqs: [
        {
          q: "Apakah data rekam medis pasien dijamin keamanannya?",
          a: "Sangat dijamin. Kami menerapkan enkripsi AES-256 pada tingkat database. Hanya dokter yang berwenang saat sesi konsultasi yang memiliki kunci dekripsi data klinis pasien."
        },
        {
          q: "Apakah aplikasi ini sudah terintegrasi dengan asuransi BPJS?",
          a: "Sistem ini telah dirancang kompatibel dengan API BPJS (P-Care) dan SatuSehat Kemenkes, memudahkan klinik untuk melakukan integrasi klaim asuransi."
        },
        {
          q: "Bagaimana sistem menangani resep obat?",
          a: "Dokter menulis resep obat digital di portal medis, resep dikirim langsung ke sistem apotek klinik terdekat, dan obat siap dikirim ke alamat pasien via kurir terintegrasi."
        }
      ]
    }
  ],
  en: [
    {
      id: 1,
      slug: "flowbiz-erp",
      category: "ENTERPRISE ERP & LOGISTICS",
      tag: "Enterprise ERP",
      title: "FlowBiz ERP: Global Manufacturing Orchestration & Integrated Logistics",
      shortTitle: "FlowBiz ERP: Export Manufacturing Orchestration",
      subtitle: "A custom cloud-based ERP system that streamlines supply chain, production control, and export logistics in real-time—eliminating data bottlenecks and boosting operational margin by 42%.",
      shortDescription: "A custom integrated ERP system to automate production, inventory control, and global export compliance.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      impact: "+42% EFFICIENCY",
      
      summary: {
        importance: "PT Indo Woodworks faced international shipping delay penalties due to production and inventory data fragmented across 12 manual spreadsheets.",
        context: "Export Wood Furniture Manufacturer with major markets in the United States and European Union. 450+ Employees, 3 active factories.",
        result: [
          "Production flow efficiency increased by 42%",
          "Real-time inventory accuracy reached 99.4%",
          "Inventory audit time cut from 5 days to 10 minutes."
        ],
        modules: [
          "Auto-Production Scheduler (MRP)",
          "Barcode Integrated Inventory & Warehouse",
          "Logistics & Container Tracking",
          "Automated Invoice & Export Compliance Documents"
        ],
        targetReader: [
          "Manufacturing Operations Directors",
          "Export/Import Business Owners",
          "IT Managers looking for legacy system migration case studies"
        ]
      },

      validation: [
        {
          metric: "42%",
          title: "Operational Efficiency",
          desc: "Factory production capacity increased from 80 containers/month to 114 containers without additional overtime."
        },
        {
          metric: "ZERO",
          title: "Delay Penalties",
          desc: "The automated alarm system successfully prevented container delays, bringing shipping penalties to exactly zero."
        },
        {
          metric: "< 2 Days",
          title: "Staff Onboarding",
          desc: "Warehouse staff quickly mastered the integrated barcode scanners in less than 2 days due to the intuitive UI."
        }
      ],

      challengeShort: "PT Indo Woodworks' management was frustrated by warehouse data frequently being out of sync with sales. Raw materials often ran out mid-production, triggering shipping delays and thousands of dollars in penalties monthly.",
      solutionShort: "We designed 'FlowBiz ERP', a custom web-based real-time system. Every inventory movement is logged via handheld barcode scanners, while our smart scheduling algorithm automatically schedules production based on shipping deadlines.",
      techStack: ["Laravel 11", "Svelte", "PostgreSQL", "Docker", "TailwindCSS", "AWS S3"],

      gallery: [
        {
          url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
          caption: "Discovery Phase: The Kodeflow team working on-site on the factory floor with the warehouse chief."
        },
        {
          url: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop",
          caption: "Workflow Validation: Designing an industrial-friendly UI/UX optimized for rugged scanner devices."
        }
      ],
      galleryCaption: "Original documentation of the development process—from working directly on the factory floor to understand the physical wood flow, to designing a data architecture capable of processing thousands of items in milliseconds.",

      deepDive: {
        background: "PT Indo Woodworks is a prominent wood processing manufacturer in East Java serving export markets. Throughout their 15 years, growth was choked by manual administration. Physical paper memos used to move stock between areas frequently got lost. Owners struggled to view real-time project profitability as financial reports took 3 weeks to compile after month-end. They needed a technology partner who understood complex manufacturing flows, not just code.",
        challenges: [
          "Multi-location Sync: Connecting data from 3 physical factories located kilometers apart into a consistent central database.",
          "Harsh Operating Environments: Warehouse apps had to run smoothly on low-cost scanners in dusty, woodchip-laden environments with spotty Wi-Fi.",
          "MRP Production Optimization: Accurately calculating log wood requirements while accounting for volume shrinkage during kiln-dry oven processes.",
          "SVLK Export Compliance: Ensuring every processed wood item carries legal SVLK certification, traceable by international auditors.",
          "Speed & Scalability: Rendering active inventory grids with 50,000+ items with zero lag for busy warehouse workers."
        ],
        approach: "Kodeflow applied an Agile-Hybrid approach focused on user collaboration. We designed a Single Page Application (SPA) architecture using Svelte for a hyper-responsive frontend, paired with Laravel on the backend for robust transactional database logic. To resolve the factory's poor Wi-Fi, we implemented Offline-First Capabilities in the warehouse barcode scanning module—storing data locally in the browser's IndexedDB and auto-syncing when internet returned.",
        modulesBuilt: [
          { name: "Kiln-Dry Monitoring Module", desc: "Integrated sensor module tracking temperature and humidity in wood ovens to ensure wood stability for export." },
          { name: "Barcode Tracking Module", desc: "Real-time inventory management mapping the exact coordinates of wood items via instant QR scanning." },
          { name: "SVLK Traceability Module", desc: "Feature tracing wood logs back to the forest log permit, automatically binding logs to finished goods for export auditing." },
          { name: "Financial Ledger & Costing", desc: "Automated cost of goods sold (COGS) calculation based on exact machine runtimes and raw material consumption." }
        ],
        decisions: "Compared to React/Vue, Svelte compiles to smaller bundles and updates the actual DOM directly without a Virtual DOM, ensuring top performance on low-spec industrial tablets. PostgreSQL was chosen for ERP transactions due to its strict ACID compliance, preventing any financial discrepancy while handling complex relational queries.",
        timeline: [
          { phase: "Weeks 1-2 (Discovery)", desc: "Workshops with factory heads, mapping physical workflows, and drafting UI wireframes." },
          { phase: "Weeks 3-6 (Backend)", desc: "Developing DB schema, internal REST APIs, and core inventory modules." },
          { phase: "Weeks 7-9 (Frontend)", desc: "Svelte frontend construction, offline barcode integration, and stress testing." },
          { phase: "Weeks 10-11 (UAT)", desc: "On-site testing by warehouse operators, iterating on direct user feedback." },
          { phase: "Week 12 (Go-Live)", desc: "Data migration from spreadsheets, staff training, and full production launch." }
        ],
        resultsVisible: "After 3 months active, PT Indo Woodworks reported zero inventory data loss. Purchasing decisions are now driven by predictive analytics rather than guesswork. Executives monitor daily margins from their smartphones during business trips.",
        lessonsLearned: "The most advanced technology is useless if workers reject it. We involved senior warehouse operators from day one of wireframing. By creating large buttons (easy to tap with work gloves) and simple flows, we eliminated user resistance.",
        conclusion: "Digital transformation isn't about buying the most expensive software—it's about building a custom system aligned with your company's unique heartbeat. FlowBiz ERP proves efficiency and compliance go hand in hand."
      },

      faqs: [
        {
          q: "Can this ERP system integrate with physical machinery?",
          a: "Yes, absolutely. FlowBiz ERP is built with an API-First architecture, enabling integrations with digital weight scales, kiln-dry sensors, or IoT wood-cutting machinery."
        },
        {
          q: "How long does it take to migrate from Excel to the ERP?",
          a: "Data migration usually takes 2 to 4 weeks. Kodeflow's data specialists will clean and validate your Excel files before importing them securely into PostgreSQL."
        },
        {
          q: "What if our factory's internet connection drops?",
          a: "We built the warehouse module with 'Offline-First' capabilities. Operators scan barcodes normally while offline. Scans are saved securely in browser memory and sync automatically once online."
        }
      ]
    },
    {
      id: 2,
      slug: "medikaconnect",
      category: "HEALTHCARE & TELEMEDICINE",
      tag: "Mobile Apps",
      title: "MedikaConnect: Unified Teleconsultation & EHR Platform",
      shortTitle: "MedikaConnect: Unified Teleconsultation & EHR Platform",
      subtitle: "Connecting doctors and patients securely, integrating end-to-end electronic health records (EHR), and cutting patient wait times by 65%.",
      shortDescription: "Patient mobile app and doctor web portal featuring end-to-end encrypted real-time EHR data.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
      impact: "150K+ PATIENTS",
      
      summary: {
        importance: "Partner clinics faced bottleneck registrations and record data leaks on insecure legacy servers.",
        context: "Private clinic network with 25+ branches in East Java, serving thousands of daily visits.",
        result: [
          "Registration wait times cut by 65%",
          "100% data security complying with Ministry of Health / HIPAA guidelines",
          "Patient satisfaction rating surged to 4.8/5"
        ],
        modules: [
          "HD Real-Time Video Teleconsultation",
          "Encrypted Electronic Health Records (EHR)",
          "Digital Prescription & Pharmacy Integration",
          "Online Booking Queue System"
        ],
        targetReader: [
          "Hospital & Clinic Chain Owners",
          "Medical Doctors & Healthcare Practitioners",
          "MedTech Developers"
        ]
      },

      validation: [
        {
          metric: "150K+",
          title: "Active Patients",
          desc: "Successfully served over 150,000 registered patients in the first 6 months of launching."
        },
        {
          metric: "65%",
          title: "Time Saved",
          desc: "Patients avoid physical waiting lines; booking to consultation is completed entirely in the app."
        },
        {
          metric: "100%",
          title: "MOH Compliance",
          desc: "All Electronic Health Record data structures are fully compliant with the Indonesian SatuSehat platform."
        }
      ],

      challengeShort: "Clinic management was overwhelmed by messy manual patient charts, misplaced files, and slow doctor scheduling that caused huge morning crowds in clinic lobbies.",
      solutionShort: "We developed the MedikaConnect ecosystem: a cross-platform mobile app for patients and a Svelte-powered web dashboard for doctors/admins, featuring AES-256 EHR encryption and payment gateways.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "AWS Cloud", "Agora SDK"],

      gallery: [
        {
          url: "https://images.unsplash.com/photo-1579684389782-64d84b5e905d?q=80&w=800&auto=format&fit=crop",
          caption: "UI/UX Design: Designing a clean, calming patient interface easily operated by the elderly."
        },
        {
          url: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop",
          caption: "Security Audit: Extensive penetration testing to ensure medical record privacy."
        }
      ],
      galleryCaption: "Documentation of the intense development cycle centered on strict healthcare compliance and cross-demographic user accessibility.",

      deepDive: {
        background: "Our partner clinic network realized operational speed was crucial for survival. With 25 branches, manual paper charting was obsolete. Doctors wasted time waiting for staff to retrieve charts. MedikaConnect was conceived as a comprehensive solution to digitize their medical ecosystem.",
        challenges: [
          "Medical Data Encryption: Ensuring patient medical records are secure from cyber attacks.",
          "SatuSehat Integration: Seamlessly syncing local medical records with the Indonesian Ministry of Health platform.",
          "Teleconsultation Latency: Ensuring stable HD video calls between doctor and patient even in weak signal areas.",
          "Doctor Schedule Synchronization: Managing dynamic doctor schedules in real-time across multiple branches."
        ],
        approach: "Kodeflow engineered a certified secure cloud infrastructure on AWS. Agora SDK was integrated for reliable video streaming on low networks. We utilized encrypted microservices to fetch patient EHR files in under 1 second.",
        modulesBuilt: [
          { name: "Patient App (Android & iOS)", desc: "Intuitive mobile booking, video calls, digital prescriptions, and personal health chart access." },
          { name: "Doctor EHR Portal", desc: "Responsive web portal detailing patient stats, ICD-10 diagnosis logs, and digital prescription tools." },
          { name: "Smart Clinic Queue System", desc: "On-site queue TVs synchronized in real-time with online patient booking streams." }
        ],
        decisions: "MongoDB was selected for EHR data due to its document flexibility which easily accommodates different medical specialties. Node.js handles thousands of concurrent socket connections efficiently.",
        timeline: [
          { phase: "Weeks 1-3", desc: "User research, medical legal compliance checks (HIPAA/MOH), and encrypted DB mapping." },
          { phase: "Weeks 4-8", desc: "Core EHR module, queue system, and SatuSehat API connection." },
          { phase: "Weeks 9-11", desc: "Agora video integration, end-to-end security penetration testing, and Beta launch in 2 branches." },
          { phase: "Week 12", desc: "Full rollout in 25 branches, admin onboarding training, and server scaling monitoring." }
        ],
        resultsVisible: "On-site waiting lines fell by 60%. Patients consult online for minor issues, and doctors access complete histories from any branch instantly.",
        lessonsLearned: "Healthcare tolerates zero errors. Stress testing database failure recovery and encryption layers must take priority over early visual designs.",
        conclusion: "MedikaConnect shows how modern technology makes healthcare more efficient, secure, and human-centric."
      },

      faqs: [
        {
          q: "Are patient medical records guaranteed secure?",
          a: "Absolutely. We enforce AES-256 database-level encryption. Only doctors authorized during an active consultation session have keys to decrypt clinical charts."
        },
        {
          q: "Does this system integrate with local insurance providers?",
          a: "Yes, it is designed to be compatible with BPJS (P-Care) APIs and Ministry of Health SatuSehat portals, facilitating insurance claim processing."
        },
        {
          q: "How does the prescription flow work?",
          a: "Doctors write prescriptions in the portal. It syncs to the clinic's pharmacy module immediately, and medication is packed and delivered to the patient's home via integrated couriers."
        }
      ]
    }
  ]
};
