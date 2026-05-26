export const FRAMES_PATH = "/frames";
export const FRAME_COUNT = 240;
export const FRAME_EXT = "jpg";

export const LANG = "id-ID";
export const BRAND_NAME = "Kodeflow";
export const BRAND_TAGLINE = "Full-suite development and design partners.";
export const HERO_HEADLINE = "All-in-one Solution.";
export const HERO_HEADLINE2 = "Your Tech Partner";
export const HERO_SUB = "We're the all-in-one solution for enterprise, ecommerce and startups. We work with you from concept to launch, and beyond.";
export const HERO_CTA_PRIMARY = "Start a project";
export const HERO_CTA_SECONDARY = "Why Kodeflow?";

// Menggunakan tech stack sebagai ganti brands karena di web tidak spesifik
export const PARTNERS = ["SvelteKit", "React JS", "Supabase", "TailwindCSS", "Node JS"];

export const SERVICES = [
  { icon: "LayoutTemplate", title: "Web Development", body: "Membuat aplikasi web yang powerful untuk Enterprise, Ecommerce, dan Startup." },
  { icon: "Smartphone",     title: "Responsive Design",    body: "Tampilan website yang sempurna di semua perangkat dan ukuran layar." },
  { icon: "Zap",            title: "Fast Performance",body: "Dioptimalkan untuk kecepatan pemuatan dan pengalaman pengguna terbaik." },
  { icon: "Workflow",       title: "Workflow Automation",body: "Menyederhanakan proses bisnis Anda menjadi lebih efisien dan otomatis." },
  { icon: "Unplug",         title: "API Integration",      body: "Menghubungkan semua tools dan layanan bisnis Anda dengan lancar." },
  { icon: "Users",          title: "Expert Mentorship",   body: "Belajar langsung dari profesional industri melalui program mentorship kami." },
];

export const REASONS = [
  { icon: "Code",         title: "Powerful Web Apps", body: "Kami ahli dalam mengembangkan aplikasi web yang cepat, aman, dan mudah diskalakan menggunakan SvelteKit & Supabase." },
  { icon: "Lightbulb",    title: "Beyond Projects",   body: "Berpikir melampaui batasan proyek langsung, dengan membagikan pengetahuan yang menguntungkan perusahaan Anda." },
  { icon: "Users2",       title: "Sangat Kolaboratif",body: "Tim Kodeflow sangat responsif dan selalu memperhatikan setiap detail kebutuhan bisnis klien." },
  { icon: "MessageSquare",title: "Insightful",        body: "Mengajukan pertanyaan yang berwawasan, memberikan masukan, dan mencari solusi terbaik bersama." },
];

export const PROCESS_STEPS = [
  { n: "1", title: "Intro & Discovery", body: "Panggilan perkenalan singkat selama 30 menit untuk membongkar detail kebutuhan proyek Anda." },
  { n: "2", title: "Strategy", body: "Menentukan dengan tepat bagaimana kami dapat membantu dan merancang arsitektur sistemnya." },
  { n: "3", title: "Development", body: "Membangun solusi digital Anda dari konsep hingga peluncuran, menghidupkan ide Anda." },
  { n: "4", title: "Launch & Beyond", body: "Peluncuran produk dan dukungan jangka panjang untuk mendorong hasil yang terukur." },
];

export const STATS = [
  { value: "30", label: "Menit Konsultasi Gratis" },
  { value: "100%",   label: "Fokus Klien" },
  { value: "24/7",   label: "Kolaborasi Tim" },
  { value: "5+",label: "Tech Stacks Populer" },
];

export const STATS_BG_VIDEO = "https://u1core-dev.com/hero_section_4K_full.mp4";

export const CASE_STUDIES = [
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
];

export const FAQ_ITEMS = [
  { q: "Apa layanan utama Kodeflow?", a: "Kami adalah partner all-in-one untuk desain dan pengembangan web. Layanan kami meliputi Web Development untuk Enterprise, Startup, dan Ecommerce." },
  { q: "Teknologi apa saja yang digunakan oleh Kodeflow?", a: "Tim kami sangat berpengalaman dalam menggunakan teknologi modern seperti SvelteKit, React JS, Supabase, Tailwind CSS, dan berbagai integrasi API." },
  { q: "Bagaimana cara memulai proyek bersama Kodeflow?", a: "Anda bisa memesan jadwal telepon 30 menit secara gratis dengan tim kami. Kita akan melakukan pengenalan cepat, membedah proyek Anda, dan menentukan solusinya." },
  { q: "Apakah Kodeflow menyediakan layanan otomatisasi?", a: "Ya, kami menyediakan Workflow Automation untuk merampingkan proses bisnis Anda serta integrasi API untuk menghubungkan berbagai tools yang Anda gunakan." },
  { q: "Di mana lokasi kantor Kodeflow?", a: "Head Office kami berlokasi di Sidoarjo, Jawa Timur. Kami juga memiliki Branch Office di Pasuruan, Jawa Timur." }
];

export const CTA_BG_VIDEO = "https://stream.mux.com/E8w01B8c3X915RkM6D012G6XqXf021qGZ2g8P1wXh02vQc.m3u8";
export const CTA_HEADLINE = "Get a free project check-up";
export const CTA_SUB = "Drop us a message or book a quick call. Whether it’s revamping a full‑blown site or nurturing the kernel of an idea, we’re here to make it happen.";
export const CTA_LABEL = "Book a Call";
export const CTA_HREF = "https://wa.me/6285733235489";

export const FOOTER_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" }
];
export const COPYRIGHT = "© 2026 Kodeflow. All rights reserved.";
export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" }
];
