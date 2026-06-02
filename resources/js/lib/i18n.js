import { writable, derived } from 'svelte/store';
import { idLegal, enLegal } from './legalTexts';

// Set up the current language store (defaulting to Indonesian)
export const currentLanguage = writable('id');

// Provide the translations dictionary
export const translations = {
  id: {
    BRAND_NAME: "Kodeflow",
    BRAND_TAGLINE: "Full-suite development and design partners.",
    HERO_HEADLINE: "All-in-one Solution.",
    HERO_HEADLINE2: "Your Tech Partner",
    HERO_SUB: "We're the all-in-one solution for enterprise, ecommerce and startups. We work with you from concept to launch, and beyond.",
    HERO_CTA_PRIMARY: "Konsultasi Gratis",
    HERO_CTA_SECONDARY: "Mengapa Kodeflow?",
    PARTNERS: ["SvelteKit", "React JS", "Supabase", "TailwindCSS", "Node JS"],
    SERVICES: [
      { icon: "Box", title: "Distributor & Trading", body: "Sistem manajemen inventaris, order otomatis, dan dashboard real-time untuk efisiensi distribusi." },
      { icon: "Truck", title: "Logistik & Ekspedisi", body: "Tracking pengiriman real-time, manajemen armada, dan portal pelanggan yang transparan." },
      { icon: "HardHat", title: "Kontraktor & Properti", body: "Sistem manajemen proyek, pelacakan RAB, dan laporan progress otomatis untuk cegah kebocoran budget." },
      { icon: "Activity", title: "Klinik & Rumah Sakit", body: "Rekam medis digital, sistem antrian pintar, dan billing terintegrasi untuk layanan kesehatan." },
      { icon: "Coffee", title: "F&B Multi-Outlet", body: "POS terintegrasi, manajemen stok bahan baku, dan laporan multi-cabang dalam satu dashboard." },
      { icon: "Store", title: "Retail & Toko Bangunan", body: "Manajemen ribuan SKU, sistem POS, dan pelacakan piutang B2B yang akurat." },
      { icon: "Factory", title: "Manufaktur Skala Menengah", body: "Monitoring produksi, sistem QC, dan pelacakan bahan baku dari awal hingga akhir." },
      { icon: "GraduationCap", title: "Sekolah & Pendidikan", body: "Sistem informasi sekolah, pembayaran SPP digital, dan portal komunikasi wali murid." },
    ],
    APP_CATEGORIES_BADGE: "Layanan Kami",
    APP_CATEGORIES_TITLE: "Sistem yang Bisa ",
    APP_CATEGORIES_TITLE_HIGHLIGHT: "Kami Bangun",
    APP_CATEGORIES_DESC: "Dari landing page sederhana hingga sistem ERP kompleks berskala enterprise, kami siap mewujudkan solusi digital sesuai kebutuhan bisnis Anda.",
    APP_CATEGORIES: [
      {
        icon: "Monitor",
        title: "Web Apps & Platforms",
        items: ["Sistem ERP Terintegrasi", "CRM (Customer Relationship Management)", "Dashboard Web App & Analitik", "Platform SaaS Custom"]
      },
      {
        icon: "LayoutTemplate",
        title: "Websites & Landing Pages",
        items: ["Company Profile Interaktif", "E-Commerce & Toko Online", "Product Landing Page", "Portal Berita & Media"]
      },
      {
        icon: "Bot",
        title: "AI & Automation",
        items: ["AI Chatbot Customer Service", "Workflow Automation (n8n/Make)", "Sistem Data Scraping", "Integrasi AI ke Aplikasi"]
      },
      {
        icon: "PlugZap",
        title: "API & Integrations",
        items: ["Integrasi Payment Gateway", "Koneksi API Pihak Ketiga", "Custom Middleware", "Legacy System Bridging"]
      }
    ],
    REASONS: [
      { icon: "Code", title: "Powerful Web Apps", body: "Kami ahli dalam mengembangkan aplikasi web yang cepat, aman, dan mudah diskalakan menggunakan SvelteKit & Supabase.", impact: "Performa 3x lebih cepat & mudah diskalakan." },
      { icon: "Lightbulb", title: "Beyond Projects", body: "Berpikir melampaui batasan proyek langsung, dengan membagikan pengetahuan yang menguntungkan perusahaan Anda.", impact: "Transfer knowledge & nilai bisnis jangka panjang." },
      { icon: "Users2", title: "Sangat Kolaboratif", body: "Tim Kodeflow sangat responsif dan selalu memperhatikan setiap detail kebutuhan bisnis klien.", impact: "Update perkembangan harian & koordinasi instan." },
      { icon: "MessageSquare", title: "Insightful", body: "Mengajukan pertanyaan yang berwawasan, memberikan masukan, dan mencari solusi terbaik bersama.", impact: "Solusi tepat sasaran & efisiensi budget maksimal." },
    ],
    PROCESS_STEPS: [
      { n: "1", title: "Intro & Discovery", body: "Panggilan perkenalan singkat selama 30 menit untuk membongkar detail kebutuhan proyek Anda." },
      { n: "2", title: "Strategy", body: "Menentukan dengan tepat bagaimana kami dapat membantu dan merancang arsitektur sistemnya." },
      { n: "3", title: "Development", body: "Membangun solusi digital Anda dari konsep hingga peluncuran, menghidupkan ide Anda." },
      { n: "4", title: "Launch & Beyond", body: "Peluncuran produk dan dukungan jangka panjang untuk mendorong hasil yang terukur." },
    ],
    STATS: [
      { value: "30", label: "Menit Konsultasi Gratis" },
      { value: "100%", label: "Fokus Klien" },
      { value: "24/7", label: "Kolaborasi Tim" },
      { value: "5+", label: "Tech Stacks Populer" },
    ],
    CASE_STUDIES: [
      {
        metrics: [
          { value: "300%", label: "Peningkatan Kecepatan" },
          { value: "2-3", label: "Sistem Digabungkan" },
          { value: "Tinggi", label: "Tingkat Retensi Pengguna" }
        ],
        tags: ["Web App", "Supabase", "SvelteKit"],
        title: "Aplikasi Web Super Cepat & Terskalakan",
        challenge: "Platform sebelumnya lambat, sulit dikembangkan, dan aplikasi terasa berat ketika menampung banyak pengguna secara bersamaan.",
        solution: "Kodeflow membangun ulang arsitektur menggunakan SvelteKit & Supabase, menghasilkan waktu muat instan dan manajemen basis data real-time.",
        quote: "Kami mencoba banyak agensi yang menjanjikan lebih namun hasil nihil. Kodeflow berhasil menyelesaikannya. Minggu pertama live: performa naik drastis. Hanya mereka yang bisa membuktikannya.",
        author: "Startup Founder"
      },
      {
        metrics: [
          { value: "50%", label: "Efisiensi Biaya" },
          { value: "Otomatis", label: "Sinkronisasi Data" },
          { value: "99.9%", label: "Uptime Server" }
        ],
        tags: ["API Integration", "Automations"],
        title: "Sistem Manajemen Data Terpusat",
        challenge: "Data tersebar di berbagai alat terpisah sehingga tim kehilangan banyak waktu melakukan sinkronisasi manual yang rentan human error.",
        solution: "Kami merancang integrasi API khusus yang menyatukan semua aliran data secara cerdas, menghemat puluhan jam kerja mingguan secara signifikan.",
        quote: "Tim Kodeflow sangat responsif. Mereka mengajukan pertanyaan yang insightful, memberikan masukan teknis, dan mengangkat masalah ketika diperlukan.",
        author: "Enterprise Client"
      },
      {
        metrics: [
          { value: "4x", label: "Konversi Penjualan" },
          { value: "Lancar", label: "Alur Pembayaran" },
          { value: "Mobile", label: "First Approach" }
        ],
        tags: ["E-Commerce", "UI/UX", "Payment"],
        title: "Pengalaman E-Commerce yang Mulus",
        challenge: "Tingkat konversi penjualan sangat rendah karena antarmuka yang membingungkan dan proses checkout yang berbelit-belit di HP.",
        solution: "Melakukan perombakan total pada UI/UX dan mengintegrasikan gateway pembayaran modern untuk memungkinkan checkout ekspres.",
        quote: "Seluruh solusi digital yang Anda butuhkan ada di satu agensi. Kami bekerja dengan mereka dari ide konsep hingga peluncuran raksasa.",
        author: "Business Owner"
      }
    ],
    FAQ_ITEMS: [
      { q: "Apa layanan utama Kodeflow?", a: "Kami adalah partner all-in-one untuk desain dan pengembangan web. Layanan kami meliputi Web Development untuk Enterprise, Startup, dan Ecommerce." },
      { q: "Teknologi apa saja yang digunakan oleh Kodeflow?", a: "Tim kami sangat berpengalaman dalam menggunakan teknologi modern seperti SvelteKit, React JS, Supabase, Tailwind CSS, dan berbagai integrasi API." },
      { q: "Bagaimana cara memulai proyek bersama Kodeflow?", a: "Anda bisa memesan jadwal telepon 30 menit secara gratis dengan tim kami. Kita akan melakukan pengenalan cepat, membedah proyek Anda, dan menentukan solusinya." },
      { q: "Apakah Kodeflow menyediakan layanan otomatisasi?", a: "Ya, kami menyediakan Workflow Automation untuk merampingkan proses bisnis Anda serta integrasi API untuk menghubungkan berbagai tools yang Anda gunakan." },
      { q: "Di mana lokasi kantor Kodeflow?", a: "Head Office kami berlokasi di Sidoarjo, Jawa Timur. Kami juga memiliki Branch Office di Pasuruan, Jawa Timur." }
    ],
    CTA_HEADLINE: "Dapatkan Pengecekan Proyek ",
    CTA_HEADLINE_HIGHLIGHT: "Gratis",
    CTA_SUB: "Kirim pesan atau jadwalkan panggilan cepat. Baik itu merombak situs sepenuhnya atau mengembangkan ide baru, kami siap mewujudkannya.",
    CTA_LABEL: "Jadwalkan Panggilan",
    FOOTER_LINKS: [
      { label: "Tentang Kami", href: "/about" },
      { label: "Portofolio", href: "/portfolio" },
      { label: "Blog", href: "/blogs" },
      { label: "Kontak", href: "/contact" },
      { label: "Kebijakan Privasi", href: "/privacy" }
    ],
    NAV_ITEMS: [
      { label: "Beranda", href: "/" },
      { label: "Tentang", href: "/about" },
      { label: "Layanan", href: "/services" },
      { label: "Portofolio", href: "/portfolio" },
      { label: "Blog", href: "/blogs" },
      { label: "Kontak", href: "/contact" }
    ],
    CONTACT_US: "Hubungi Kami",
    LOGIN: "Masuk",
    SERVICES_TITLE: "Keahlian",
    SERVICES_SUBTITLE: "Apa yang kami lakukan",
    POURQUOI_TITLE: "Mengapa",
    POURQUOI_SUBTITLE: "Kenapa Harus Kodeflow?",
    PROCESS_TITLE: "Langkah-Langkah",
    PROCESS_SUBTITLE: "Proses Kami",
    TESTIMONIAL_TITLE: "Suara Klien",
    TESTIMONIAL_SUBTITLE: "Apa Kata Mereka",
    FAQ_TITLE: "Pertanyaan",
    FAQ_SUBTITLE: "FAQ",
    FAQ_CTA: "Punya pertanyaan lain?",
    STATS_TITLE: "Pencapaian",
    SERVICES_BENTO_BADGE: "Main features",
    SERVICES_BENTO_TITLE: "Kami Siap Melayani ",
    SERVICES_BENTO_TITLE_HIGHLIGHT: "Berbagai Industri",
    SERVICES_BENTO_DESC: "Solusi pengembangan website dan aplikasi cerdas yang membantu mengkualifikasi leads, otomatisasi alur kerja, dan meningkatkan pendapatan Anda secara autopilot.",
    POURQUOI_BADGE: "Keuntungan Kami",
    POURQUOI_TITLE: "Mengapa Memilih ",
    POURQUOI_TITLE_HIGHLIGHT: "Kodeflow?",
    POURQUOI_IMPACT_LABEL: "Dampak:",
    POURQUOI_IMPACT_TEXT: "Fokus pada hasil akhir.",
    PROCESS_BADGE: "Cara Kerja",
    PROCESS_HEADING: "Jalur Anda dari Ide hingga ",
    PROCESS_HEADING_HIGHLIGHT: "Peluncuran",
    PROCESS_DESC: "Mengubah prospek dari CRM atau ide konsep Anda menjadi aset digital berkualitas tinggi yang siap mendominasi pasar secara efisien.",
    TESTIMONIALS_BADGE: "Studi Kasus",
    TESTIMONIALS_HEADING: "Bukti Nyata ",
    TESTIMONIALS_HEADING_HIGHLIGHT: "Kinerja Kami.",
    TESTIMONIALS_CHALLENGE: "Tantangan:",
    TESTIMONIALS_SOLUTION: "Solusi:",
    FAQ_HEADING: "Pertanyaan Seputar ",
    FAQ_HEADING_HIGHLIGHT: "Kodeflow.",
    FAQ_DESC: "Punya pertanyaan tentang cara kerja kami? Temukan jawaban untuk pertanyaan yang paling sering diajukan di sini.",
    CTA_GET_STARTED: "Mulai Sekarang",
    CTA_START_GROWTH: "Mulai Berkembang",
    FOOTER_LEGAL_TITLE: "Legal",
    FOOTER_NAV_TITLE: "Navigasi",
    FOOTER_CONTACT_TITLE: "Informasi Kontak",
    FOOTER_PRIVACY: "Kebijakan Privasi",
    FOOTER_TERMS: "Syarat & Ketentuan",
    FOOTER_PARTNER: "Ketentuan Mitra",
    FOOTER_SLA: "Service Level (SLA)",
    FOOTER_DPA: "Pemrosesan Data (DPA)",
    FOOTER_FEATURES: "Fitur",
    FOOTER_PRICING: "Harga",
    FOOTER_ABOUT: "Tentang Kami",

    // ABOUT PAGE
    ABOUT_HERO_BADGE: "Tentang Kami",
    ABOUT_HERO_TITLE: "Kami bukan sekadar vendor IT.<br/>Kami adalah tim yang ikut<br/>berkembang bersama <span class=\"text-primary-light italic drop-shadow-[0_0_15px_rgba(247,37,134,0.25)]\">Anda.</span>",
    ABOUT_HERO_QUOTE: "\"We Build. We Maintain. You Scale.\"",
    ABOUT_HERO_CONSULT: "Konsultasi Gratis",
    ABOUT_HERO_LOCATION: "Pasuruan, Jawa Timur · Est. 2022",

    ABOUT_STORY_BADGE: "Cerita Kami",
    ABOUT_STORY_TITLE: "Lahir dari frustrasi yang sama ",
    ABOUT_STORY_TITLE_HIGHLIGHT: "yang dirasakan klien kami",
    ABOUT_STORY_P1: "Kodeflow Tech didirikan pada 2022 di Pasuruan, Jawa Timur — bukan di Jakarta, bukan di Silicon Valley. Kami mulai dari keresahan sederhana: terlalu banyak bisnis di Indonesia yang punya kebutuhan IT nyata, tapi tidak bisa menemukan partner yang bisa diandalkan.",
    ABOUT_STORY_P2: "Polanya selalu sama — vendor yang terlihat bagus di proposal tapi menghilang setelah delivery. Developer yang rekrut susah, lama onboarding, lalu resign di tengah proyek. Sistem yang selesai dibangun tapi tidak ada yang tahu cara maintain-nya. Kami melihat ini terjadi berulang, dan kami yakin ada cara yang lebih baik.",
    ABOUT_STORY_P3: "Cara yang lebih baik itu dimulai dengan satu prinsip: <strong class=\"text-foreground font-medium\">kami tidak pergi setelah go-live.</strong> Kami hadir tidak hanya saat build, tapi saat maintain, iterate, dan scale. Bukan sebagai vendor yang menyelesaikan satu proyek lalu pamit — tapi sebagai tim yang memahami konteks bisnis Anda dan ikut merayakan setiap pencapaiannya.",

    ABOUT_STORY_MILESTONES: [
      { year: "2022", title: "Didirikan", desc: "Kodeflow Tech didirikan di Pasuruan, Jawa Timur" },
      { year: "2023", title: "Klien Pertama", desc: "Klien pertama onboard & tim berkembang hingga 20+ professionals" },
      { year: "2024", title: "Scale Up", desc: "Ekspansi ke 50+ IT Professionals dengan 7 Supervisors aktif" },
      { year: "2025", title: "Sekarang", desc: "5 Klien Aktif, 20+ Proyek Selesai, dan terus berkembang" }
    ],

    ABOUT_STATS_ITEMS: [
      { target: 5, label: "Klien Aktif", sub: "Bisnis yang sedang scaling", isPlus: false },
      { target: 50, label: "IT Professionals", sub: "Siap untuk tim Anda", isPlus: true },
      { target: 8, label: "Supervisors", sub: "Memantau kualitas kerja", isPlus: false },
      { target: 5, label: "Project Managers", sub: "Menjaga proyek on-track", isPlus: false },
      { target: 20, label: "Proyek Selesai", sub: "Dan terus bertambah", isPlus: true }
    ],

    ABOUT_VISION_BADGE: "Visi Kami",
    ABOUT_VISION_TITLE: "Menjadi <span class=\"text-primary-light italic drop-shadow-[0_0_15px_rgba(247,37,134,0.25)]\">technology partner</span> paling terpercaya",
    ABOUT_VISION_DESC: "Membangun sistem digital yang tidak hanya selesai, tapi bertahan, berkembang, dan memberikan nilai nyata jangka panjang untuk bisnis di Indonesia dan Asia Tenggara.",
    ABOUT_VISION_MISSIONS: [
      { title: "Build with intention", desc: "Membangun sistem digital yang benar dari hari pertama — arsitektur scalable, antarmuka berpusat pada pengguna, standar engineering yang tidak dikompromikan demi kecepatan." },
      { title: "Stay when others leave", desc: "Hadir tidak hanya saat build, tapi saat maintain, iterate, dan scale. Komitmen kami dimulai tepat ketika kebanyakan vendor berpamitan — saat sistem go-live." },
      { title: "Quality over shortcuts", desc: "Tidak ada technical debt yang kami wariskan. Setiap baris kode direview, setiap fitur melewati QA, karena produk yang dibangun sembarangan selalu meminta bayaran mahal." },
      { title: "Grow together", desc: "Ketika bisnis klien tumbuh, kami tumbuh bersamanya. Bukan sebagai vendor yang mengerjakan satu proyek lalu selesai, tapi partner yang memahami konteks dan arah selanjutnya." }
    ],

    ABOUT_VALUES_BADGE: "Nilai Perusahaan",
    ABOUT_VALUES_TITLE: "Tiga prinsip yang ",
    ABOUT_VALUES_TITLE_HIGHLIGHT: "tidak pernah kami kompromikan",
    ABOUT_VALUES_DESC: "Nilai-nilai ini bukan poster di dinding kantor. Ini adalah filter yang kami gunakan saat menghadapi pilihan sulit — antara cepat atau benar, antara murah atau berkualitas.",
    ABOUT_VALUES_ITEMS: [
      { num: "01", title: "Built Right", desc: "Setiap keputusan teknikal diambil dengan pertimbangan jangka panjang. Kami tidak pernah memilih jalan pintas yang akan menjadi masalah enam bulan kemudian. Arsitektur yang benar, code yang bisa dibaca, dokumentasi yang lengkap.", quote: "Kalau tidak bisa di-maintain, belum selesai." },
      { num: "02", title: "Built for Users", desc: "Produk yang tidak dipakai adalah kegagalan, apapun alasannya. Setiap sistem kami rancang dari sudut pandang orang yang akan menggunakannya setiap hari — bukan dari sudut pandang database atau convenience developer.", quote: "Teknologi ada untuk manusia, bukan sebaliknya." },
      { num: "03", title: "Built to Last", desc: "Ini yang paling membedakan kami. Sistem kami dirancang untuk hidup lama — bisa di-maintain, bisa di-scale, dan bisa berkembang seiring bisnis klien. Dan kami tetap ada untuk memastikan itu terjadi, bukan hanya di hari pertama.", quote: "Kami tidak pergi setelah go-live." }
    ],

    ABOUT_TEAM_BADGE: "Tim Kami",
    ABOUT_TEAM_TITLE: "Orang-orang di Balik <br/>",
    ABOUT_TEAM_TITLE_HIGHLIGHT: "Kodeflow Tech",
    ABOUT_FOUNDERS_TITLE: "CO - Founder",
    ABOUT_FOUNDERS: [
      { name: "Founder Name", role: "Founder", image: "/assets/teams/ribhi.png" },
      { name: "Co-Founder Name", role: "CO Founder", image: "/assets/teams/tomi.png" }
    ],
    ABOUT_SUPERVISORS_TITLE: "Supervisor",
    ABOUT_SUPERVISORS: [
      { name: "Muhammad Fayi", role: "UI/UX Designer", image: "/assets/teams/fayi.png" },
      { name: "Maulana", role: "Security and Network", image: "/assets/teams/maul.png" },
      { name: "Rafikhul Akhiroh", role: "Mobile Dev", image: "/assets/teams/rafi.png" },
      { name: "Muhammad Rafif", role: "Project Manager", image: "/assets/teams/rafif.png" },
      { name: "Farhan Alfaraby", role: "Front End", image: "/assets/teams/farhan.png" },
      { name: "Rodhi", role: "AI Automation", image: "/assets/teams/rodhi.png" },
      { name: "Muhammad Murthado", role: "Back End", image: "/assets/teams/tado.png" },
      { name: "Muhammad Taufik", role: "Dev Ops", image: "/assets/teams/taufik.png" }
    ],

    // SERVICES PAGE
    SERVICES_HERO_BADGE: "Dedicated IT Team",
    SERVICES_HERO_TITLE: "<span class=\"block\">Tim IT profesional Anda</span>\n            <span class=\"block\">tanpa repot rekrut,</span>\n            <span class=\"block text-primary-light italic drop-shadow-[0_0_15px_rgba(247,37,134,0.25)]\">tanpa risiko turnover.</span>",
    SERVICES_HERO_DESC: "Dari frontend developer hingga AI engineer — semua posisi tersedia, termonitor dari kantor kami, siap bergabung dengan tim Anda dalam hitungan minggu.",
    SERVICES_HERO_CONSULT: "Konsultasi Gratis",
    SERVICES_HERO_CHECKLIST: ['Tanpa deposit — bayar setelah tim bekerja', 'Trial period tersedia sebelum kontrak penuh', 'Garansi replacement jika tidak cocok'],
    SERVICES_HERO_STATS_TITLE: "Kodeflow Tech di Angka",

    SERVICES_DETAIL_BADGE: "Posisi Tersedia",
    SERVICES_DETAIL_TITLE: "Pilih profesional yang tepat ",
    SERVICES_DETAIL_TITLE_HIGHLIGHT: "untuk tim Anda",
    SERVICES_DETAIL_DESC: "Semua posisi tersedia full-time dari kantor kami, termonitor oleh supervisor berpengalaman. Anda fokus ke bisnis — kami jaga kualitas tim.",
    SERVICES_DETAIL_AVAILABLE: "Tersedia",
    SERVICES_DETAIL_CONSULT: "Konsultasi untuk posisi ini",
    SERVICES_DETAIL_FILTERS: ["Semua", "Engineering", "Design", "Operations"],
    SERVICES_POSITIONS: {
      web: { title: "Web Developer — Fullstack, Frontend & Backend", desc: "Banyak yang bisa bikin website. Tapi tidak banyak yang membangunnya dengan cara yang benar — dengan framework modern, arsitektur yang bisa di-scale, dan kode yang masih bisa dibaca setahun kemudian. Di situlah tim web developer kami masuk. Tersedia sebagai fullstack, frontend, atau backend — sesuai apa yang benar-benar Anda butuhkan.", category: "Engineering" },
      mob: { title: "Mobile Developer - Native atau Cross Platform", desc: "Aplikasi mobile bukan sekadar versi kecil dari website. Perlu didesain untuk layar sentuh, koneksi yang tidak stabil, dan pengguna yang tidak sabar. Tim kami paham itu — dan membangun aplikasi Android dan iOS yang terasa cepat, ringan, dan menyenangkan dipakai. Dengan Flutter, React Native, Kotlin, atau Swift — sesuai yang paling masuk akal untuk kebutuhan Anda.", category: "Engineering" },
      devops: { title: "DevOps / Cloud Engineer", desc: "Aplikasi yang bagus bisa hancur reputasinya dalam satu malam kalau infrastrukturnya tidak solid. Tim DevOps kami memastikan sistem Anda berjalan stabil, aman, dan siap scale — tanpa drama. Deployment otomatis via CI/CD, monitoring real-time, backup terjadwal, dan respons cepat saat ada anomali. Kami bekerja di AWS, GCP, DigitalOcean, hingga VPS custom — dan tidak pernah menyerahkan server dalam kondisi yang tidak bisa dijaga sendiri.", category: "Engineering" },
      ai: { title: "AI & Automation Engineer", desc: "Pekerjaan berulang yang memakan waktu tim Anda setiap hari — kami otomasi. Chatbot yang paham konteks, workflow yang terhubung ke sistem yang sudah ada, dan integrasi AI yang terasa natural bukan fitur tempelan. Dibangun dengan LangChain, Mastra, n8n, Flowise, dan framework modern lainnya — termasuk integrasi WhatsApp official maupun third-party. Bekerja diam-diam setiap hari, menghemat ratusan jam kerja per bulan.", category: "Engineering" },
      ui: { title: "UI/UX Designer", desc: "Sistem yang canggih pun tidak ada gunanya kalau pengguna bingung cara memakainya. UI/UX designer kami masuk dari awal — bukan di akhir setelah semua sudah di-coding. Mereka merancang alur yang mengikuti cara berpikir pengguna, bukan cara kerja database. Dari wireframe hingga high-fidelity prototype di Figma, setiap keputusan desain punya alasan yang bisa dijelaskan — bukan sekadar terlihat bagus di mata desainernya.", category: "Design" },
      pm: { title: "Project Manager", desc: "Proyek IT yang gagal bukan selalu karena developernya kurang pintar — seringkali karena tidak ada yang memastikan semua pihak bicara bahasa yang sama. Project Manager kami adalah jembatan antara kebutuhan bisnis Anda dan eksekusi teknikal tim. Mereka yang menjaga sprint tetap pada jalurnya, memastikan klien selalu tahu progresnya, dan mengangkat hambatan sebelum berkembang menjadi masalah. Bukan koordinator rapat — tapi orang yang memastikan produk benar-benar selesai sesuai ekspektasi.", category: "Operations" }
    },

    SERVICES_CTA_TITLE: "Belum yakin posisi mana yang paling dibutuhkan tim Anda?",
    SERVICES_CTA_DESC: "Ceritakan kebutuhan bisnis Anda — kami analisis dan rekomendasikan komposisi tim yang paling tepat, tanpa biaya, tanpa komitmen.",
    SERVICES_CTA_BTN: "Konsultasikan",
    SERVICES_CTA_NOTE: "⏱ Respon dalam < 24 jam",

    SERVICES_WHY_BADGE: "Perbandingan",
    SERVICES_WHY_TITLE: "Apa yang membuat ",
    SERVICES_WHY_TITLE_HIGHLIGHT: "Kodeflow Tech berbeda?",
    SERVICES_WHY_DESC: "Kami bukan sekadar \"menyediakan developer\". Kami adalah extension dari tim internal Anda — dengan sistem monitoring, supervisor, dan SLA yang jelas.",
    SERVICES_WHY_COL_ASPECT: "Aspek",
    SERVICES_WHY_COL_VENDOR: "Freelancer / Vendor Biasa",
    SERVICES_WHY_ITEMS: [
      { aspect: "Monitoring harian", f: "Tidak ada — Anda harus chase sendiri", k: "Dari kantor kami, supervisor aktif memantau" },
      { aspect: "Kecepatan onboarding", f: "2–8 minggu, sering mundur", k: "< 2 minggu, sudah terstruktur" },
      { aspect: "Jika tidak cocok", f: "Mulai rekrut dari nol lagi", k: "Garansi replacement tanpa biaya tambahan" },
      { aspect: "Trial sebelum komitmen", f: "Hampir tidak ada", k: "Tersedia — coba dulu sebelum kontrak penuh" },
      { aspect: "SLA tertulis", f: "Sering tidak ada atau tidak jelas", k: "Selalu ada — jam kerja, response time, laporan" },
      { aspect: "Deposit di muka", f: "Sering diminta 30–50%", k: "Tidak ada deposit sama sekali" },
      { aspect: "Urusan HR & admin", f: "Anda yang urus BPJS, THR, dll", k: "Kami urus semua — zero HR hassle" },
      { aspect: "Supervisor teknikal", f: "Tidak ada", k: "7 supervisors aktif" },
      { aspect: "Laporan progress", f: "Tidak konsisten", k: "Update harian via Kodeflow PM" }
    ],

    SERVICES_PROCESS_BADGE: "Proses Bergabung",
    SERVICES_PROCESS_TITLE: "Dari awal Sampai Tim Berjalan — ",
    SERVICES_PROCESS_TITLE_HIGHLIGHT: "7 Langkah Sederhana.",
    SERVICES_PROCESS_DESC: "Tidak ada proses yang berbelit. Tidak ada biaya tersembunyi. Setiap langkah punya output yang jelas dan timeline yang realistis.",
    SERVICES_PROCESS_OUTPUT_LABEL: "Output Langkah Ini",
    SERVICES_PROCESS_PREV: "Sebelumnya",
    SERVICES_PROCESS_NEXT: "Selanjutnya",
    SERVICES_PROCESS_STEPS: [
      { title: "Konsultasi Gratis", time: "Langkah 1", desc: "Ceritakan kebutuhan IT Anda. Kami analisis dan rekomendasikan komposisi tim yang tepat.", output: "Analisis Kebutuhan & Rekomendasi" },
      { title: "Proposal Tim", time: "Langkah 2", desc: "Kami siapkan proposal komposisi tim, detail skill, dan estimasi timeline dalam 1-2 hari kerja.", output: "Proposal Tim & Estimasi Timeline" },
      { title: "Penandatanganan PKS", time: "Langkah 3", desc: "Kontrak, NDA, dan SLA ditandatangani. Tidak ada deposit. Tidak ada biaya di muka.", output: "Dokumen Kontrak & SLA" },
      { title: "Onboarding & Setup", time: "Langkah 4", desc: "Tim mendapat akses sistem Anda. Diundang ke Kodeflow PM. Kickoff meeting dilakukan.", output: "Sistem Terkoneksi & Kickoff Selesai" },
      { title: "Tim Mulai Bekerja", time: "Langkah 5", desc: "Developer bekerja dari kantor Kodeflow, termonitor penuh. Update harian di Kodeflow PM.", output: "Progress Harian Termonitor" },
      { title: "Review Mingguan", time: "Langkah 6", desc: "Meeting singkat setiap minggu untuk evaluasi progress dan sprint planning bersama klien.", output: "Evaluasi Progress & Sprint Baru" },
      { title: "Pembayaran Akhir Bulan", time: "Langkah 7", desc: "Invoice dikirim di akhir bulan. Bayar setelah tim bekerja. Tidak ada deposit awal.", output: "Invoice Bulanan" }
    ],

    SERVICES_TECH_BADGE: "Tech Stack",
    SERVICES_TECH_TITLE: "Teknologi yang dikuasai tim kami",
    SERVICES_TECH_DESC: "Tidak menemukan stack yang Anda butuhkan? Konsultasikan — kemungkinan besar kami bisa bantu.",

    SERVICES_FAQ_BADGE: "FAQ",
    SERVICES_FAQ_TITLE: "Pertanyaan yang sering ditanyakan",
    SERVICES_FAQ_STILL_HAVE_Q: "Masih ada pertanyaan lain?",
    SERVICES_FAQ_CHAT: "Chat Langsung via WhatsApp",
    SERVICES_FAQS: [
      { q: "Berapa lama proses onboarding tim dari Kodeflow Tech?", a: "Rata-rata 7–14 hari kerja dari penandatanganan PKS hingga tim aktif bekerja. Ini mencakup akses setup, kickoff meeting, dan alignment dengan sistem Anda. Untuk kebutuhan mendesak, kami bisa diskusikan fast-track onboarding." },
      { q: "Apakah ada deposit atau biaya di muka?", a: "Tidak ada deposit sama sekali. Anda membayar di akhir bulan setelah tim bekerja selama bulan tersebut. Invoice dikirim di akhir bulan, pembayaran dilakukan setelah tim memberikan hasil kerja." },
      { q: "Bagaimana jika developer yang ditempatkan tidak cocok dengan tim kami?", a: "Kami memberikan garansi replacement — jika terjadi ketidakcocokan, kami akan mencari pengganti tanpa biaya tambahan. Sebelum itu, ada trial period di awal yang bisa dimanfaatkan untuk memastikan kecocokan sebelum masuk ke kontrak penuh." },
      { q: "Apakah developer bekerja remote atau dari kantor?", a: "Developer bekerja dari kantor Kodeflow Tech di Pasuruan, Jawa Timur — bukan remote lepas. Ini artinya ada supervisor yang secara aktif memantau pekerjaan, jam kerja terjaga, dan produktivitas termonitor setiap hari." },
      { q: "Bagaimana cara saya memantau progress pekerjaan tim?", a: "Anda mendapatkan akses ke Kodeflow PM — project management tool internal kami. Anda bisa melihat status task, progress harian, dan update terbaru kapan saja, tanpa harus menunggu laporan. Review mingguan juga dilakukan bersama Anda." },
      { q: "Berapa kontrak minimum dan apakah bisa diperpanjang?", a: "Kontrak minimum adalah 6 bulan. Untuk kontrak 12 bulan, ada diskon Rp 500.000 per orang per bulan. Setelah kontrak minimum selesai, bisa diperpanjang atau disesuaikan jumlah anggota tim sesuai kebutuhan bisnis Anda." },
      { q: "Apakah bisa menambah atau mengurangi anggota tim di tengah kontrak?", a: "Penambahan anggota tim bisa dilakukan kapan saja dengan proses onboarding baru. Pengurangan anggota tim diatur dalam ketentuan kontrak dengan notice period yang disepakati di awal — biasanya 30 hari sebelumnya." },
      { q: "Bagaimana dengan kerahasiaan data dan kode yang dikerjakan?", a: "Semua anggota tim menandatangani NDA (Non-Disclosure Agreement) sebelum mulai bekerja. Kode yang dikerjakan adalah sepenuhnya milik klien. Kami tidak menyimpan atau menggunakan kode klien untuk kepentingan lain." },
      { q: "Apakah Kodeflow Tech hanya untuk perusahaan besar?", a: "Tidak — kami melayani semua skala bisnis, dari startup yang baru mulai hingga perusahaan menengah dan enterprise. Yang terpenting adalah Anda memiliki kebutuhan IT yang jelas dan komitmen untuk bekerja sama minimal 6 bulan." },
      { q: "Bagaimana dengan perbedaan zona waktu jika perusahaan saya di luar Jawa Timur?", a: "Tim kami beroperasi Senin–Jumat, jam 08.00–17.00 WIB. Untuk perusahaan di luar WIB, kami bisa mendiskusikan jadwal overlap yang sesuai. Review mingguan dan komunikasi rutin bisa diatur menyesuaikan kebutuhan Anda." }
    ],

    // BLOG PAGE
    BLOG_HERO_BADGE: "Blog",
    BLOG_HERO_TITLE: "<span class=\"block\">Insights untuk bisnis</span>\n      <span class=\"block text-primary-light italic drop-shadow-[0_0_15px_rgba(247,37,134,0.25)]\">yang sedang scaling.</span>",
    BLOG_HERO_DESC: "Artikel praktis tentang IT, digitalisasi, dan cara membangun tim teknologi yang bisa diandalkan.",
    BLOG_HERO_SEARCH_PLACEHOLDER: "Cari artikel, topik, atau kata kunci...",

    BLOG_GRID_ALL: "Semua",
    BLOG_GRID_UNCATEGORIZED: "Uncategorized",
    BLOG_GRID_ADMIN: "Admin",
    BLOG_GRID_READ_MIN: "menit baca",
    BLOG_GRID_READ_ARTICLE: "Baca Artikel",
    BLOG_GRID_EMPTY: "Belum ada artikel di kategori ini.",
    BLOG_GRID_READ_MORE: "Baca selengkapnya",

    BLOG_CTA_TITLE: "Artikel ini relevan dengan bisnis Anda?",
    BLOG_CTA_DESC: "Mari ngobrol langsung. Konsultasi gratis untuk membahas kebutuhan IT bisnis Anda — tanpa tekanan, tanpa komitmen.",
    BLOG_CTA_NOTE: "Sudah dipercaya 5 bisnis yang scaling · Respon < 24 jam",
    BLOG_CTA_SERVICES: "Lihat Layanan Kami",
    BLOG_CTA_BTN: "Konsultasi Gratis",

    BLOG_DETAIL_BACK: "Kembali ke Blog",
    BLOG_DETAIL_SHARE: "Bagikan",
    BLOG_DETAIL_TAGS: "Tag:",
    BLOG_DETAIL_READ_ALSO: "Baca Juga",
    BLOG_DETAIL_RELATED_ARTICLE: "Blog Terkait",
    BLOG_DETAIL_VIEW_ALL: "Lihat Semua",

    BLOG_TAGS_TITLE: "Jelajahi Topik",
    BLOG_TAGS_DESC: "Temukan artikel berdasarkan topik yang spesifik. Klik salah satu tag di bawah ini untuk melihat kumpulan artikel terkait.",
    BLOG_TAGS_EMPTY: "Belum ada tag yang tersedia.",
    BLOG_TAGS_BACK: "Kembali ke Blog Utama",

    BLOG_TAG_DETAIL_ALL_TOPICS: "Semua Topik",
    BLOG_TAG_DETAIL_TOPIC: "Topik:",
    BLOG_TAG_DETAIL_FOUND: "Ditemukan",
    BLOG_TAG_DETAIL_ARTICLES_WITH_TOPIC: "artikel dengan topik ini.",
    BLOG_TAG_DETAIL_EMPTY: "Belum ada artikel yang menggunakan tag ini.",

    PORTFOLIO_PREVIEW_BADGE: "Karya Pilihan",
    PORTFOLIO_PREVIEW_TITLE: "Hasil Kerja Nyata yang ",
    PORTFOLIO_PREVIEW_TITLE_HIGHLIGHT: "Mendorong Dampak",
    PORTFOLIO_PREVIEW_DESC: "Kami merancang dan membangun sistem digital kustom yang memecahkan masalah nyata, mengoptimalkan operasional, dan mempercepat pertumbuhan bisnis.",
    PORTFOLIO_PREVIEW_CTA: "Lihat Semua Portofolio",

    CONTACT_HERO_BADGE: "Hubungi Kami",
    CONTACT_HERO_TITLE: "Mari Mulai Mengobrol & ",
    CONTACT_HERO_TITLE_HIGHLIGHT: "Bekerja Sama",
    CONTACT_HERO_DESC: "Punya ide brilian atau butuh tim IT profesional yang siap didelegasikan? Hubungi kami langsung melalui saluran resmi di bawah ini.",
    LEGAL_BADGE: "Kepatuhan Hukum",
    LEGAL_TITLE: "Legalitas & Perizinan Resmi ",
    LEGAL_TITLE_HIGHLIGHT: "Perusahaan",
    LEGAL_DESC: "Kodeflow Digital Indonesia merupakan perusahaan yang telah terdaftar secara resmi dan memiliki legalitas usaha yang sah di Indonesia. Kami berkomitmen menjalankan setiap layanan dan operasional bisnis secara profesional, transparan, dan sesuai dengan regulasi yang berlaku.\n\nLegalitas ini menjadi bentuk komitmen kami dalam membangun kepercayaan, menjaga kredibilitas perusahaan, serta memberikan rasa aman bagi setiap klien dan partner yang bekerja sama dengan kami.",
    LEGAL_PAGES: idLegal
  },
  en: {
    BRAND_NAME: "Kodeflow",
    BRAND_TAGLINE: "Full-suite development and design partners.",
    HERO_HEADLINE: "All-in-one Solution.",
    HERO_HEADLINE2: "Your Tech Partner",
    HERO_SUB: "We're the all-in-one solution for enterprise, ecommerce and startups. We work with you from concept to launch, and beyond.",
    HERO_CTA_PRIMARY: "Start a project",
    HERO_CTA_SECONDARY: "Why Kodeflow?",
    PARTNERS: ["SvelteKit", "React JS", "Supabase", "TailwindCSS", "Node JS"],
    SERVICES: [
      { icon: "Box", title: "Distributor & Trading", body: "Inventory management systems, automated ordering, and real-time dashboards for distribution efficiency." },
      { icon: "Truck", title: "Logistics & Expedition", body: "Real-time delivery tracking, fleet management, and transparent customer portals." },
      { icon: "HardHat", title: "Contractors & Property", body: "Project management systems, budget tracking, and automated progress reports to prevent budget leaks." },
      { icon: "Activity", title: "Clinics & Hospitals", body: "Digital medical records, smart queuing systems, and integrated billing for healthcare services." },
      { icon: "Coffee", title: "F&B Multi-Outlet", body: "Integrated POS, raw material stock management, and multi-branch reports in a single dashboard." },
      { icon: "Store", title: "Retail & Hardware Stores", body: "Management of thousands of SKUs, POS systems, and accurate B2B receivables tracking." },
      { icon: "Factory", title: "Mid-Scale Manufacturing", body: "Production monitoring, QC systems, and raw material tracking from start to finish." },
      { icon: "GraduationCap", title: "Schools & Education", body: "School information systems, digital tuition payments, and parent communication portals." },
    ],
    APP_CATEGORIES_BADGE: "Our Services",
    APP_CATEGORIES_TITLE: "Systems We Can ",
    APP_CATEGORIES_TITLE_HIGHLIGHT: "Build",
    APP_CATEGORIES_DESC: "From simple landing pages to complex enterprise-scale ERP systems, we are ready to build digital solutions tailored to your business needs.",
    APP_CATEGORIES: [
      {
        icon: "Monitor",
        title: "Web Apps & Platforms",
        items: ["Integrated ERP Systems", "CRM (Customer Relationship Management)", "Dashboard Web Apps & Analytics", "Custom SaaS Platforms"]
      },
      {
        icon: "LayoutTemplate",
        title: "Websites & Landing Pages",
        items: ["Interactive Company Profiles", "E-Commerce & Online Stores", "Product Landing Pages", "News & Media Portals"]
      },
      {
        icon: "Bot",
        title: "AI & Automation",
        items: ["AI Customer Service Chatbots", "Workflow Automation (n8n/Make)", "Data Scraping Systems", "AI App Integrations"]
      },
      {
        icon: "PlugZap",
        title: "API & Integrations",
        items: ["Payment Gateway Integration", "Third-Party API Connections", "Custom Middleware", "Legacy System Bridging"]
      }
    ],
    REASONS: [
      { icon: "Code", title: "Powerful Web Apps", body: "We specialize in developing fast, secure, and scalable web applications using SvelteKit & Supabase.", impact: "3x faster & highly scalable performance." },
      { icon: "Lightbulb", title: "Beyond Projects", body: "Thinking beyond immediate project boundaries, sharing knowledge that benefits your company.", impact: "Knowledge transfer & long-term business value." },
      { icon: "Users2", title: "Highly Collaborative", body: "The Kodeflow team is very responsive and always pays attention to every detail of the client's business needs.", impact: "Daily progress updates & instant coordination." },
      { icon: "MessageSquare", title: "Insightful", body: "Asking insightful questions, providing input, and finding the best solutions together.", impact: "Targeted solutions & maximum budget efficiency." },
    ],
    PROCESS_STEPS: [
      { n: "1", title: "Intro & Discovery", body: "A quick 30-minute intro call to unpack the details of your project requirements." },
      { n: "2", title: "Strategy", body: "Determining exactly how we can help and designing the system architecture." },
      { n: "3", title: "Development", body: "Building your digital solution from concept to launch, bringing your ideas to life." },
      { n: "4", title: "Launch & Beyond", body: "Product launch and long-term support to drive measurable results." },
    ],
    STATS: [
      { value: "30", label: "Minutes Free Consultation" },
      { value: "100%", label: "Client Focus" },
      { value: "24/7", label: "Team Collaboration" },
      { value: "5+", label: "Popular Tech Stacks" },
    ],
    CASE_STUDIES: [
      {
        metrics: [
          { value: "300%", label: "Speed Increase" },
          { value: "2-3", label: "Systems Merged" },
          { value: "High", label: "User Retention Rate" }
        ],
        tags: ["Web App", "Supabase", "SvelteKit"],
        title: "Super Fast & Scalable Web App",
        challenge: "The previous platform was slow, hard to develop, and felt heavy when handling many users concurrently.",
        solution: "Kodeflow rebuilt the architecture using SvelteKit & Supabase, resulting in instant load times and real-time database management.",
        quote: "We tried many agencies that promised a lot but delivered nothing. Kodeflow got it done. First week live: performance skyrocketed. Only they could prove it.",
        author: "Startup Founder"
      },
      {
        metrics: [
          { value: "50%", label: "Cost Efficiency" },
          { value: "Auto", label: "Data Sync" },
          { value: "99.9%", label: "Server Uptime" }
        ],
        tags: ["API Integration", "Automations"],
        title: "Centralized Data Management System",
        challenge: "Data was scattered across various separate tools so the team lost a lot of time doing manual syncs prone to human error.",
        solution: "We designed a custom API integration that intelligently unified all data streams, significantly saving dozens of work hours weekly.",
        quote: "The Kodeflow team is very responsive. They ask insightful questions, provide technical input, and raise issues when needed.",
        author: "Enterprise Client"
      },
      {
        metrics: [
          { value: "4x", label: "Sales Conversion" },
          { value: "Smooth", label: "Payment Flow" },
          { value: "Mobile", label: "First Approach" }
        ],
        tags: ["E-Commerce", "UI/UX", "Payment"],
        title: "Seamless E-Commerce Experience",
        challenge: "Sales conversion rates were very low due to a confusing interface and convoluted mobile checkout process.",
        solution: "Completely overhauled the UI/UX and integrated modern payment gateways to enable express checkout.",
        quote: "All the digital solutions you need are in one agency. We worked with them from concept idea to giant launch.",
        author: "Business Owner"
      }
    ],
    FAQ_ITEMS: [
      { q: "What are Kodeflow's main services?", a: "We are an all-in-one partner for web design and development. Our services include Web Development for Enterprise, Startups, and Ecommerce." },
      { q: "What technologies does Kodeflow use?", a: "Our team is highly experienced in using modern technologies like SvelteKit, React JS, Supabase, Tailwind CSS, and various API integrations." },
      { q: "How do I start a project with Kodeflow?", a: "You can book a free 30-minute call with our team. We'll do a quick intro, unpack your project, and determine the solution." },
      { q: "Does Kodeflow provide automation services?", a: "Yes, we provide Workflow Automation to streamline your business processes and API integration to connect various tools you use." },
      { q: "Where is Kodeflow located?", a: "Our Head Office is located in Sidoarjo, East Java. We also have a Branch Office in Pasuruan, East Java." }
    ],
    CTA_HEADLINE: "Get a Free Project ",
    CTA_HEADLINE_HIGHLIGHT: "Check-up",
    CTA_SUB: "Drop us a message or book a quick call. Whether it’s revamping a full‑blown site or nurturing the kernel of an idea, we’re here to make it happen.",
    CTA_LABEL: "Book a Call",
    FOOTER_LINKS: [
      { label: "About Us", href: "/about" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Blogs", href: "/blogs" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" }
    ],
    NAV_ITEMS: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Blogs", href: "/blogs" },
      { label: "Contact", href: "/contact" }
    ],
    CONTACT_US: "Contact Us",
    LOGIN: "Login",
    SERVICES_TITLE: "Expertise",
    SERVICES_SUBTITLE: "What We Do",
    POURQUOI_TITLE: "Why",
    POURQUOI_SUBTITLE: "Why Choose Kodeflow?",
    PROCESS_TITLE: "Steps",
    PROCESS_SUBTITLE: "Our Process",
    TESTIMONIAL_TITLE: "Client Voices",
    TESTIMONIAL_SUBTITLE: "What They Say",
    FAQ_TITLE: "Questions",
    FAQ_SUBTITLE: "FAQ",
    FAQ_CTA: "Have another question?",
    STATS_TITLE: "Achievements",
    SERVICES_BENTO_BADGE: "Main features",
    SERVICES_BENTO_TITLE: "We Are Ready to Serve ",
    SERVICES_BENTO_TITLE_HIGHLIGHT: "Various Industries",
    SERVICES_BENTO_DESC: "Smart website and app development solutions that help qualify leads, automate workflows, and increase your revenue on autopilot.",
    POURQUOI_BADGE: "Our Benefits",
    POURQUOI_TITLE: "Why Choose ",
    POURQUOI_TITLE_HIGHLIGHT: "Kodeflow?",
    POURQUOI_IMPACT_LABEL: "Impact:",
    POURQUOI_IMPACT_TEXT: "Focus on the end result.",
    PROCESS_BADGE: "How it Works",
    PROCESS_HEADING: "Your Path from Idea to ",
    PROCESS_HEADING_HIGHLIGHT: "Launch",
    PROCESS_DESC: "Transform your CRM prospects or concept ideas into high-quality digital assets ready to dominate the market efficiently.",
    TESTIMONIALS_BADGE: "Case Studies",
    TESTIMONIALS_HEADING: "Real Proof of ",
    TESTIMONIALS_HEADING_HIGHLIGHT: "Our Work.",
    TESTIMONIALS_CHALLENGE: "Challenge:",
    TESTIMONIALS_SOLUTION: "Solution:",
    FAQ_HEADING: "Questions About ",
    FAQ_HEADING_HIGHLIGHT: "Kodeflow.",
    FAQ_DESC: "Have questions about how we work? Find answers to the most frequently asked questions here.",
    CTA_GET_STARTED: "Get Started",
    CTA_START_GROWTH: "Start Growth",
    FOOTER_LEGAL_TITLE: "Legal",
    FOOTER_NAV_TITLE: "Navigation",
    FOOTER_CONTACT_TITLE: "Contact Information",
    FOOTER_PRIVACY: "Privacy Policy",
    FOOTER_TERMS: "Terms of Service",
    FOOTER_PARTNER: "Partner Terms",
    FOOTER_SLA: "Service Level (SLA)",
    FOOTER_DPA: "Data Processing (DPA)",
    FOOTER_FEATURES: "Features",
    FOOTER_PRICING: "Pricing",
    FOOTER_ABOUT: "About Us",

    // ABOUT PAGE
    ABOUT_HERO_BADGE: "About Us",
    ABOUT_HERO_TITLE: "We are not just an IT vendor.<br/>We are a team that<br/>grows with <span class=\"text-primary-light italic drop-shadow-[0_0_15px_rgba(247,37,134,0.25)]\">You.</span>",
    ABOUT_HERO_QUOTE: "\"We Build. We Maintain. You Scale.\"",
    ABOUT_HERO_CONSULT: "Free Consultation",
    ABOUT_HERO_LOCATION: "Pasuruan, East Java · Est. 2022",

    ABOUT_STORY_BADGE: "Our Story",
    ABOUT_STORY_TITLE: "Born from the same frustrations ",
    ABOUT_STORY_TITLE_HIGHLIGHT: "our clients felt",
    ABOUT_STORY_P1: "Kodeflow Tech was founded in 2022 in Pasuruan, East Java — not in Jakarta, not in Silicon Valley. We started from a simple concern: too many businesses in Indonesia have real IT needs but cannot find a reliable partner.",
    ABOUT_STORY_P2: "The pattern is always the same — vendors who look good in proposals but disappear after delivery. Developers who are hard to recruit, take a long time to onboard, then resign mid-project. Systems that are built but no one knows how to maintain. We saw this happen repeatedly, and we believed there had to be a better way.",
    ABOUT_STORY_P3: "That better way begins with one principle: <strong class=\"text-foreground font-medium\">we don't leave after go-live.</strong> We are present not only when building but also when maintaining, iterating, and scaling. Not as a vendor that finishes a project and leaves — but as a team that understands your business context and celebrates every milestone with you.",

    ABOUT_STORY_MILESTONES: [
      { year: "2022", title: "Founded", desc: "Kodeflow Tech was founded in Pasuruan, East Java" },
      { year: "2023", title: "First Client", desc: "First client onboarded & team grew to 20+ professionals" },
      { year: "2024", title: "Scale Up", desc: "Expanded to 50+ IT Professionals with 7 active Supervisors" },
      { year: "2025", title: "Now", desc: "5 Active Clients, 20+ Completed Projects, and still growing" }
    ],

    ABOUT_STATS_ITEMS: [
      { target: 5, label: "Active Clients", sub: "Scaling businesses", isPlus: false },
      { target: 50, label: "IT Professionals", sub: "Ready for your team", isPlus: true },
      { target: 8, label: "Supervisors", sub: "Monitoring work quality", isPlus: false },
      { target: 5, label: "Project Managers", sub: "Keeping projects on track", isPlus: false },
      { target: 20, label: "Projects Completed", sub: "And counting", isPlus: true }
    ],

    ABOUT_VISION_BADGE: "Our Vision",
    ABOUT_VISION_TITLE: "Becoming the most trusted <span class=\"text-primary-light italic drop-shadow-[0_0_15px_rgba(247,37,134,0.25)]\">technology partner</span>",
    ABOUT_VISION_DESC: "Building digital systems that are not only finished but endure, scale, and provide real long-term value for businesses in Indonesia and Southeast Asia.",
    ABOUT_VISION_MISSIONS: [
      { title: "Build with intention", desc: "Building the right digital system from day one — scalable architecture, user-centered interface, engineering standards that are not compromised for speed." },
      { title: "Stay when others leave", desc: "Present not only during build but when maintaining, iterating, and scaling. Our commitment begins exactly when most vendors say goodbye — when the system goes live." },
      { title: "Quality over shortcuts", desc: "We inherit no technical debt. Every line of code is reviewed, every feature passes QA, because hastily built products always demand a high price." },
      { title: "Grow together", desc: "When our client's business grows, we grow with it. Not as a vendor doing a one-off project, but a partner who understands the context and next direction." }
    ],

    ABOUT_VALUES_BADGE: "Company Values",
    ABOUT_VALUES_TITLE: "Three principles ",
    ABOUT_VALUES_TITLE_HIGHLIGHT: "we never compromise on",
    ABOUT_VALUES_DESC: "These values are not posters on the office wall. They are the filters we use when facing hard choices — between fast or right, between cheap or quality.",
    ABOUT_VALUES_ITEMS: [
      { num: "01", title: "Built Right", desc: "Every technical decision is made with long-term consideration. We never choose shortcuts that will be a problem six months later. Proper architecture, readable code, comprehensive documentation.", quote: "If it can't be maintained, it's not finished." },
      { num: "02", title: "Built for Users", desc: "An unused product is a failure, no matter the reason. Every system we design is from the perspective of the people who will use it every day — not from the perspective of the database or developer convenience.", quote: "Technology exists for humans, not the other way around." },
      { num: "03", title: "Built to Last", desc: "This is what distinguishes us most. Our systems are designed to live long — maintainable, scalable, and adaptable as the client's business grows. And we stay to ensure it happens, not just on day one.", quote: "We don't leave after go-live." }
    ],

    ABOUT_TEAM_BADGE: "Our Team",
    ABOUT_TEAM_TITLE: "The People Behind <br/>",
    ABOUT_TEAM_TITLE_HIGHLIGHT: "Kodeflow Tech",
    ABOUT_FOUNDERS_TITLE: "CO - Founder",
    ABOUT_FOUNDERS: [
      { name: "Founder Name", role: "Founder", image: "/assets/teams/farhan.png" },
      { name: "Co-Founder Name", role: "CO Founder", image: "/assets/teams/tomi.png" }
    ],
    ABOUT_SUPERVISORS_TITLE: "Supervisor",
    ABOUT_SUPERVISORS: [
      { name: "Muhammad Fayi", role: "UI/UX", image: "/assets/teams/fayi.png" },
      { name: "Maulana", role: "Front End", image: "/assets/teams/maul.png" },
      { name: "Rafi", role: "Back End", image: "/assets/teams/rafi.png" },
      { name: "Rafif", role: "Dev Ops", image: "/assets/teams/rafif.png" },
      { name: "Ribhi", role: "Kodeflow Team", image: "/assets/teams/ribhi.png" },
      { name: "Farhan", role: "Kodeflow Team", image: "/assets/teams/farhan.png" },
      { name: "Rodhi", role: "Kodeflow Team", image: "/assets/teams/rodhi.png" },
      { name: "Tado", role: "Kodeflow Team", image: "/assets/teams/tado.png" },
      { name: "Taufik", role: "Kodeflow Team", image: "/assets/teams/taufik.png" }
    ],

    // SERVICES PAGE
    SERVICES_HERO_BADGE: "Dedicated IT Team",
    SERVICES_HERO_TITLE: "<span class=\"block\">Your professional IT team</span>\n            <span class=\"block\">without recruitment hassle,</span>\n            <span class=\"block text-primary-light italic drop-shadow-[0_0_15px_rgba(247,37,134,0.25)]\">without turnover risk.</span>",
    SERVICES_HERO_DESC: "From frontend developers to AI engineers — all roles available, monitored from our office, ready to join your team within weeks.",
    SERVICES_HERO_CONSULT: "Free Consultation",
    SERVICES_HERO_CHECKLIST: ['Zero deposit — pay after work is done', 'Trial period available before full contract', 'Replacement guarantee if not a fit'],
    SERVICES_HERO_STATS_TITLE: "Kodeflow Tech in Numbers",

    SERVICES_DETAIL_BADGE: "Available Positions",
    SERVICES_DETAIL_TITLE: "Choose the right professionals ",
    SERVICES_DETAIL_TITLE_HIGHLIGHT: "for your team",
    SERVICES_DETAIL_DESC: "All roles are full-time from our office, monitored by experienced supervisors. You focus on your business — we maintain team quality.",
    SERVICES_DETAIL_AVAILABLE: "Available",
    SERVICES_DETAIL_CONSULT: "Consult for this role",
    SERVICES_DETAIL_FILTERS: ["All", "Engineering", "Design", "Operations"],
    SERVICES_POSITIONS: {
      web: { title: "Web Developer — Fullstack, Frontend & Backend", desc: "Many can build a website. But not many build it the right way — with modern frameworks, scalable architectures, and code that is still readable a year later. That's where our web developer team comes in. Available as fullstack, frontend, or backend — depending on what you really need.", category: "Engineering" },
      mob: { title: "Mobile Developer - Native or Cross Platform", desc: "A mobile app is not just a smaller version of a website. It needs to be designed for touch screens, unstable connections, and impatient users. Our team understands this — and builds Android and iOS apps that feel fast, lightweight, and delightful to use. With Flutter, React Native, Kotlin, or Swift — whichever makes the most sense for your needs.", category: "Engineering" },
      devops: { title: "DevOps / Cloud Engineer", desc: "A great application can have its reputation ruined overnight if its infrastructure isn't solid. Our DevOps team ensures your system runs stable, secure, and ready to scale — without drama. Automated deployment via CI/CD, real-time monitoring, scheduled backups, and fast response when anomalies occur. We work with AWS, GCP, DigitalOcean, to custom VPS — and never hand over a server in a condition that cannot be maintained independently.", category: "Engineering" },
      ai: { title: "AI & Automation Engineer", desc: "The repetitive work that consumes your team's time every day — we automate it. Context-aware chatbots, workflows connected to existing systems, and AI integrations that feel natural instead of bolted-on features. Built with LangChain, Mastra, n8n, Flowise, and other modern frameworks — including official and third-party WhatsApp integrations. Working silently every day, saving hundreds of hours of work per month.", category: "Engineering" },
      ui: { title: "UI/UX Designer", desc: "Even an advanced system is useless if users are confused about how to use it. Our UI/UX designers come in from the beginning — not at the end after everything is coded. They design flows that follow how users think, not how the database works. From wireframes to high-fidelity prototypes in Figma, every design decision has an explainable reason — not just looking good to the designer's eyes.", category: "Design" },
      pm: { title: "Project Manager", desc: "Failed IT projects are not always because the developers aren't smart enough — often it's because no one ensures all parties speak the same language. Our Project Managers are the bridge between your business needs and the team's technical execution. They keep sprints on track, ensure clients always know the progress, and remove roadblocks before they escalate into problems. Not just meeting coordinators — but the people who ensure the product is actually finished according to expectations.", category: "Operations" }
    },

    SERVICES_CTA_TITLE: "Not sure which roles your team needs most?",
    SERVICES_CTA_DESC: "Tell us your business needs — we'll analyze and recommend the most suitable team composition, at no cost and no commitment.",
    SERVICES_CTA_BTN: "Consult Your Needs",
    SERVICES_CTA_NOTE: "⏱ Response in < 24 hours",

    SERVICES_WHY_BADGE: "Comparison",
    SERVICES_WHY_TITLE: "What makes ",
    SERVICES_WHY_TITLE_HIGHLIGHT: "Kodeflow Tech different?",
    SERVICES_WHY_DESC: "We don't just \"provide developers\". We act as an extension of your internal team — with a clear monitoring system, supervisors, and SLAs.",
    SERVICES_WHY_COL_ASPECT: "Aspect",
    SERVICES_WHY_COL_VENDOR: "Freelancers / Regular Vendors",
    SERVICES_WHY_ITEMS: [
      { aspect: "Daily monitoring", f: "None — you have to chase them yourself", k: "Active monitoring from our office supervisors" },
      { aspect: "Onboarding speed", f: "2–8 weeks, often delayed", k: "< 2 weeks, highly structured" },
      { aspect: "If it's a mismatch", f: "Start recruiting from scratch", k: "Replacement guarantee with no extra cost" },
      { aspect: "Pre-commitment trial", f: "Rarely exists", k: "Available — try before a full contract" },
      { aspect: "Written SLA", f: "Often absent or unclear", k: "Always included — working hours, response times, reports" },
      { aspect: "Upfront deposit", f: "Usually 30–50% requested", k: "Zero upfront deposit" },
      { aspect: "HR & admin matters", f: "You handle benefits, taxes, etc.", k: "We handle everything — zero HR hassle" },
      { aspect: "Technical supervisor", f: "None", k: "7 active supervisors" },
      { aspect: "Progress reports", f: "Inconsistent", k: "Daily updates via Kodeflow PM" }
    ],

    SERVICES_PROCESS_BADGE: "Onboarding Process",
    SERVICES_PROCESS_TITLE: "From Consultation to Running Team — ",
    SERVICES_PROCESS_TITLE_HIGHLIGHT: "7 Simple Steps.",
    SERVICES_PROCESS_DESC: "No convoluted processes. No hidden fees. Every step has a clear output and a realistic timeline.",
    SERVICES_PROCESS_OUTPUT_LABEL: "Step Output",
    SERVICES_PROCESS_PREV: "Previous",
    SERVICES_PROCESS_NEXT: "Next",
    SERVICES_PROCESS_STEPS: [
      { title: "Free Consultation", time: "Step 1", desc: "Tell us your IT needs. We will analyze and recommend the right team composition.", output: "Needs Analysis & Recommendation" },
      { title: "Team Proposal", time: "Step 2", desc: "We prepare a team composition proposal, skill details, and timeline estimation within 1-2 working days.", output: "Team Proposal & Timeline Estimation" },
      { title: "Agreement Signing", time: "Step 3", desc: "Contract, NDA, and SLA signed. No deposit. No upfront costs.", output: "Official Contract & SLA" },
      { title: "Onboarding & Setup", time: "Step 4", desc: "The team gets access to your system. Invited to Kodeflow PM. Kickoff meeting conducted.", output: "System Connected & Kickoff Completed" },
      { title: "Team Starts Working", time: "Step 5", desc: "Developers work from Kodeflow office, fully monitored. Daily updates on Kodeflow PM.", output: "Daily Monitored Progress" },
      { title: "Weekly Review", time: "Step 6", desc: "Short weekly meetings to evaluate progress and sprint planning with clients.", output: "Progress Evaluation & New Sprint" },
      { title: "End of Month Payment", time: "Step 7", desc: "Invoice sent at the end of the month. Pay after the team works. No initial deposit.", output: "Monthly Invoice" }
    ],

    SERVICES_TECH_BADGE: "Tech Stack",
    SERVICES_TECH_TITLE: "Technologies mastered by our team",
    SERVICES_TECH_DESC: "Don't see the stack you need? Let's talk — there's a good chance we can help.",

    SERVICES_FAQ_BADGE: "FAQ",
    SERVICES_FAQ_TITLE: "Frequently Asked Questions",
    SERVICES_FAQ_STILL_HAVE_Q: "Still have questions?",
    SERVICES_FAQ_CHAT: "Chat Directly via WhatsApp",
    SERVICES_FAQS: [
      { q: "How long does onboarding a team from Kodeflow Tech take?", a: "On average, 7–14 business days from signing the agreement until the team is actively working. This includes access setup, kickoff meeting, and system alignment. For urgent needs, we can discuss fast-track onboarding." },
      { q: "Is there any upfront deposit or fee?", a: "No upfront deposit at all. You pay at the end of the month after the team has worked during that period. Invoices are sent at month-end, and payment is made after delivering results." },
      { q: "What if the placed developer isn't a good fit?", a: "We provide a replacement guarantee — if there is a mismatch, we will find a substitute at no additional cost. Furthermore, there's an initial trial period you can use to ensure a good fit before entering a full contract." },
      { q: "Do the developers work remotely or from your office?", a: "Developers work from the Kodeflow Tech office in Pasuruan, East Java — not as remote freelancers. This means there are supervisors actively monitoring the work, maintaining set hours, and tracking daily productivity." },
      { q: "How can I monitor the team's progress?", a: "You get access to Kodeflow PM — our internal project management tool. You can check task statuses, daily progress, and the latest updates anytime, without waiting for a report. We also hold weekly reviews with you." },
      { q: "What is the minimum contract and can it be extended?", a: "The minimum contract is 6 months. For a 12-month contract, we offer a discount of Rp 500,000 per person per month. Once the minimum term concludes, it can be extended or adjusted based on your business needs." },
      { q: "Can we add or remove team members mid-contract?", a: "Adding team members can be done anytime through a new onboarding process. Removing team members is governed by the contract terms with an agreed notice period — typically 30 days in advance." },
      { q: "What about the confidentiality of data and code?", a: "All team members sign an NDA (Non-Disclosure Agreement) before starting work. The code developed belongs entirely to the client. We do not store or use client code for any other purposes." },
      { q: "Is Kodeflow Tech only for large enterprises?", a: "No — we serve businesses of all sizes, from newly launched startups to mid-sized companies and enterprises. What matters most is that you have clear IT needs and a commitment to collaborate for at least 6 months." },
      { q: "What about time zone differences if my company is outside East Java?", a: "Our team operates Monday–Friday, 08:00–17:00 WIB (Western Indonesian Time). For companies outside this zone, we can negotiate a suitable overlapping schedule. Weekly reviews and routine communications can be adjusted to fit your needs." }
    ],

    // BLOG PAGE
    BLOG_HERO_BADGE: "Blog",
    BLOG_HERO_TITLE: "<span class=\"block\">Insights for scaling</span>\n      <span class=\"block text-primary-light italic drop-shadow-[0_0_15px_rgba(247,37,134,0.25)]\">businesses.</span>",
    BLOG_HERO_DESC: "Practical articles on IT, digitization, and how to build a reliable tech team.",
    BLOG_HERO_SEARCH_PLACEHOLDER: "Search articles, topics, or keywords...",

    BLOG_GRID_ALL: "All",
    BLOG_GRID_UNCATEGORIZED: "Uncategorized",
    BLOG_GRID_ADMIN: "Admin",
    BLOG_GRID_READ_MIN: "min read",
    BLOG_GRID_READ_ARTICLE: "Read Article",
    BLOG_GRID_EMPTY: "No articles in this category yet.",
    BLOG_GRID_READ_MORE: "Read more",

    BLOG_CTA_TITLE: "Is this article relevant to your business?",
    BLOG_CTA_DESC: "Let's talk directly. Free consultation to discuss your business IT needs — no pressure, no commitment.",
    BLOG_CTA_NOTE: "Trusted by 5 scaling businesses · Response < 24 hours",
    BLOG_CTA_SERVICES: "View Our Services",
    BLOG_CTA_BTN: "Free Consultation",

    BLOG_DETAIL_BACK: "Back to Blog",
    BLOG_DETAIL_SHARE: "Share",
    BLOG_DETAIL_TAGS: "Tags:",
    BLOG_DETAIL_READ_ALSO: "Read Also",
    BLOG_DETAIL_RELATED_ARTICLE: "Related Blogs",
    BLOG_DETAIL_VIEW_ALL: "View All",

    BLOG_TAGS_TITLE: "Explore Topics",
    BLOG_TAGS_DESC: "Find articles based on specific topics. Click on any tag below to see related articles.",
    BLOG_TAGS_EMPTY: "No tags available yet.",
    BLOG_TAGS_BACK: "Back to Main Blog",

    BLOG_TAG_DETAIL_ALL_TOPICS: "All Topics",
    BLOG_TAG_DETAIL_TOPIC: "Topic:",
    BLOG_TAG_DETAIL_FOUND: "Found",
    BLOG_TAG_DETAIL_ARTICLES_WITH_TOPIC: "articles with this topic.",
    BLOG_TAG_DETAIL_EMPTY: "No articles using this tag yet.",

    PORTFOLIO_PREVIEW_BADGE: "Featured Work",
    PORTFOLIO_PREVIEW_TITLE: "Real Work that ",
    PORTFOLIO_PREVIEW_TITLE_HIGHLIGHT: "Drives Impact",
    PORTFOLIO_PREVIEW_DESC: "We design and build custom digital systems that solve real challenges, optimize operations, and accelerate business growth.",
    PORTFOLIO_PREVIEW_CTA: "View All Portfolios",

    CONTACT_HERO_BADGE: "Contact Us",
    CONTACT_HERO_TITLE: "Let's Start a Conversation & ",
    CONTACT_HERO_TITLE_HIGHLIGHT: "Work Together",
    CONTACT_HERO_DESC: "Have a brilliant idea or need a dedicated IT team ready to delegate? Connect with us directly through our official channels below.",
    LEGAL_BADGE: "Legal Compliance",
    LEGAL_TITLE: "Official Legal & Business ",
    LEGAL_TITLE_HIGHLIGHT: "Licensing",
    LEGAL_DESC: "Kodeflow Digital Indonesia is an officially registered company with valid legal business permits in Indonesia. We are committed to running all services and business operations professionally, transparently, and in accordance with current regulations.\n\nThis compliance is our dedication to building trust, maintaining corporate credibility, and providing absolute security for every client and partner collaborating with us.",
    LEGAL_PAGES: enLegal
  }
};

// Derived store to automatically get the correct translations object
export const t = derived(currentLanguage, ($lang) => translations[$lang]);
