# PRD UI — Services Page
**Kodeflow Tech Website · v1.0 · PT Kodeflow Digital Indonesia · April 2025**
*Dokumen ini adalah acuan desain dan copy untuk halaman `/services`*

---

## Daftar Isi

1. [Overview Halaman](#1-overview-halaman)
2. [Wireframe Global](#2-wireframe-global)
3. [S-01 · Hero Services](#3-s-01--hero-services)
4. [S-02 · Detail Services — Card Posisi](#4-s-02--detail-services--card-posisi)
5. [S-03 · CTA Interrupt](#5-s-03--cta-interrupt)
6. [S-04 · Kenapa Berbeda dari Vendor Biasa](#6-s-04--kenapa-berbeda-dari-vendor-biasa)
7. [S-05 · Proses Rekrutmen Detail](#7-s-05--proses-rekrutmen-detail)
8. [S-06 · Tech Stack per Kategori](#8-s-06--tech-stack-per-kategori)
9. [S-07 · FAQ](#9-s-07--faq)
10. [S-08 · CTA Final](#10-s-08--cta-final)
11. [S-09 · Footer](#11-s-09--footer)
12. [Interaction & Animation Notes](#12-interaction--animation-notes)
13. [SEO & Meta Tags](#13-seo--meta-tags)
14. [Checklist Sign-off](#14-checklist-sign-off)

---

## 1. Overview Halaman

| Atribut | Detail |
|---|---|
| **URL** | `/services` |
| **Tujuan utama** | Konversi pengunjung yang sudah interested → ambil langkah konsultasi |
| **Target pengguna** | Calon klien yang sudah tahu mereka butuh IT team — tinggal pilih vendor |
| **Primary CTA** | "Konsultasi Gratis" → WhatsApp |
| **Secondary CTA** | Tidak ada — halaman ini fokus ke satu aksi |
| **Tone** | Lebih spesifik dan detail dari homepage — berbicara ke decision maker |
| **Estimasi scroll depth** | ~5500px desktop / ~8500px mobile |
| **Sumber traffic utama** | Dari navbar homepage · dari CTA "Lihat Layanan" di hero |

### Perbedaan dengan Homepage

| Aspek | Homepage | Services |
|---|---|---|
| Tujuan | Awareness + konversi pertama | Konversi pengunjung yang sudah qualified |
| Kedalaman | Overview semua layanan | Detail mendalam tentang Dedicated IT Team |
| Audience | Semua pengunjung baru | Calon klien yang sudah evaluasi |
| CTA | Dua CTA (primary + secondary) | Satu CTA konsisten di semua section |
| Konten teknis | Minimal | Lebih detail — tech stack, SLA, FAQ |

### Pertanyaan yang Harus Dijawab Halaman Ini

Pengunjung yang tiba di `/services` biasanya punya pertanyaan spesifik. Halaman ini harus menjawab semua ini **sebelum** mereka perlu bertanya:

1. *"Posisi apa saja yang tersedia dan tech stack-nya apa?"*
2. *"Gimana cara kerjanya? Apakah mereka benar-benar monitor tim?"*
3. *"Berapa lama proses onboarding?"*
4. *"Kalau nggak cocok gimana? Ada jaminannya?"*
5. *"Teknologi apa yang dikuasai — bisa handle proyek kami?"*
6. *"Apa bedanya dari hire freelancer atau vendor biasa?"*

---

## 2. Wireframe Global

```
┌─────────────────────────────────────────────────────┐
│  S-00  NAVBAR (sticky — sama dengan homepage)       │
├─────────────────────────────────────────────────────┤
│                                                     │
│  S-01  HERO SERVICES                                │
│                                                     │
│  [eyebrow: "DEDICATED IT TEAM"]                     │
│                                                     │
│  Tim IT profesional Anda —                          │
│  tanpa repot rekrut,                                │
│  tanpa risiko turnover.                             │
│                                                     │
│  [subheadline]                                      │
│                                                     │
│  [Konsultasi Gratis →]                              │
│                                                     │
│  ✓ Tanpa deposit  ✓ Trial period  ✓ Garansi replace │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  S-02  DETAIL SERVICES — CARD POSISI                │
│                                                     │
│  [eyebrow] [heading] [subheading]                   │
│                                                     │
│  [Filter tab: Semua | Engineering | Design | Ops]   │
│                                                     │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐              │
│  │ FE   │ │ BE   │ │Mobile│ │DevOps│              │
│  │ Dev  │ │ Dev  │ │ Dev  │ │Cloud │              │
│  └──────┘ └──────┘ └──────┘ └──────┘              │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐              │
│  │  AI  │ │UI/UX │ │  PM  │ │  QA  │              │
│  └──────┘ └──────┘ └──────┘ └──────┘              │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  S-03  CTA INTERRUPT                                │
│  "Belum yakin posisi mana yang dibutuhkan?"         │
│  [Konsultasikan Kebutuhan Anda]                     │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  S-04  KENAPA BERBEDA DARI VENDOR BIASA             │
│                                                     │
│  [Tabel / split perbandingan]                       │
│  Freelancer vs Kodeflow Tech vs Hire Sendiri        │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  S-05  PROSES REKRUTMEN DETAIL                      │
│                                                     │
│  [Timeline horizontal 5 steps — lebih detail]      │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  S-06  TECH STACK PER KATEGORI                      │
│                                                     │
│  [Grouped grid dengan kategori]                     │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  S-07  FAQ                                          │
│                                                     │
│  [Accordion — 8–10 pertanyaan]                      │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  S-08  CTA FINAL                                    │
│                                                     │
│  [Navy gradient — sama style dengan homepage]       │
│                                                     │
├─────────────────────────────────────────────────────┤
│  S-09  FOOTER                                       │
└─────────────────────────────────────────────────────┘
```

---

## 3. S-01 · Hero Services

### Tujuan
Berbeda dari hero homepage yang bersifat awareness — hero Services langsung bicara ke calon klien yang **sudah tahu** mereka butuh IT team. Lebih spesifik, lebih conviction-driven.

### Layout Desktop

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  [eyebrow badge]                                             │
│                                                              │
│  Tim IT profesional Anda —             ┌──────────────────┐ │
│  tanpa repot rekrut,                   │  Stats card:     │ │
│  tanpa risiko turnover.                │                  │ │
│                                        │  50+ IT Pro      │ │
│  [subheadline]                         │  5 Klien Aktif   │ │
│                                        │  7 Supervisors   │ │
│  [Konsultasi Gratis →]                 │  < 2 Minggu      │ │
│                                        │  Onboarding      │ │
│  ─────────────────────────             └──────────────────┘ │
│  ✓ Tanpa deposit                                             │
│  ✓ Trial period tersedia                                     │
│  ✓ Garansi replacement                                       │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

**Grid:** Kolom kiri 60% · Kolom kanan 40%
**Mobile:** Stack vertikal — headline dulu, stats card di bawah, checklist di bawahnya

### Spesifikasi

| Atribut | Nilai |
|---|---|
| Background | `neutral-50` + gradient mesh halus |
| Padding | `section-py-lg` (128px) |
| Headline size | `text-5xl` desktop · `text-4xl` mobile |
| Stats card | Background `neutral-0`, border `neutral-200`, shadow `shadow-md`, radius `xl` |
| Checklist | Icon `CheckCircle2` warna `success-500`, teks `neutral-700` |

### Copy

| Elemen | Teks |
|---|---|
| Eyebrow | `DEDICATED IT TEAM` |
| Headline baris 1 | `Tim IT profesional Anda —` |
| Headline baris 2 | `tanpa repot rekrut,` |
| Headline baris 3 | `tanpa risiko turnover.` |
| Subheadline | `Dari frontend developer hingga AI engineer — semua posisi tersedia, termonitor dari kantor kami, siap bergabung dengan tim Anda dalam hitungan minggu.` |
| CTA | `Konsultasi Gratis →` |
| Checklist 1 | `Tanpa deposit — bayar setelah tim bekerja` |
| Checklist 2 | `Trial period tersedia sebelum kontrak penuh` |
| Checklist 3 | `Garansi replacement jika tidak cocok` |

**Stats Card:**

| Angka | Label |
|---|---|
| `50+` | IT Professionals |
| `5` | Klien Aktif |
| `7` | Supervisors |
| `< 2 minggu` | Rata-rata Onboarding |

---

## 4. S-02 · Detail Services — Card Posisi

### Tujuan
Halaman ini adalah **pusat informasi posisi** — pengunjung bisa melihat semua posisi yang tersedia, tech stack, deskripsi singkat, dan langsung ambil tindakan.

### Layout

```
┌──────────────────────────────────────────────────────────────┐
│  [eyebrow]  [heading]  [subheading]                          │
│                                                              │
│  [Filter Tabs]                                               │
│  ┌──────────┐ ┌──────────────┐ ┌──────────┐ ┌───────────┐  │
│  │  Semua   │ │  Engineering │ │  Design  │ │ Operations│  │
│  └──────────┘ └──────────────┘ └──────────┘ └───────────┘  │
│                                                              │
│  ┌──────────────────────┐  ┌──────────────────────┐         │
│  │ [icon container]     │  │ [icon container]     │         │
│  │ [badge: Tersedia]    │  │ [badge: Tersedia]    │         │
│  │                      │  │                      │         │
│  │ Frontend Developer   │  │ Backend Developer    │         │
│  │                      │  │                      │         │
│  │ Bangun antarmuka web │  │ Bangun API, logika   │         │
│  │ yang cepat, responsive│  │ bisnis, dan database │         │
│  │ dan maintainable.    │  │ yang scalable.       │         │
│  │                      │  │                      │         │
│  │ ┌──────┐ ┌────────┐  │  │ ┌───────┐ ┌──────┐  │         │
│  │ │React │ │Next.js │  │  │ │Laravel│ │NodeJS│  │         │
│  │ └──────┘ └────────┘  │  │ └───────┘ └──────┘  │         │
│  │ ┌─────┐ ┌───────┐    │  │ ┌──────┐             │         │
│  │ │ Vue │ │Svelte │    │  │ │Golang│             │         │
│  │ └─────┘ └───────┘    │  │ └──────┘             │         │
│  │                      │  │                      │         │
│  │ [Konsultasi →]       │  │ [Konsultasi →]       │         │
│  └──────────────────────┘  └──────────────────────┘         │
│                                                              │
│         ... (semua 8 posisi dalam grid 2 kolom) ...          │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Spesifikasi Card

| Atribut | Nilai |
|---|---|
| Grid | 2 kolom desktop · 1 kolom mobile |
| Card padding | `32px` |
| Card border | `1.5px solid neutral-200` |
| Card radius | `16px` (`radius-xl`) |
| Card hover | `border-color: primary-800` + `shadow-lg` + `translateY(-3px)` |
| Icon container | `56×56px`, radius `12px` |
| Badge "Tersedia" | `badge-success`, pojok kanan atas card (absolute) |
| CTA dalam card | `btn-ghost` — "Konsultasi untuk posisi ini →" |
| Tech tag | `tech-badge` mono style |
| Jumlah tech tag | Maksimal 6 per card, sisanya `+N lainnya` |

### Filter Tab

```css
.filter-tab {
  display: flex;
  gap: var(--space-2);
  margin-bottom: var(--space-8);
  flex-wrap: wrap;
}

.filter-tab-btn {
  padding: 8px 18px;
  border-radius: var(--radius-full);
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
  border: 1.5px solid var(--color-neutral-200);
  background: transparent;
  color: var(--color-neutral-500);
  cursor: pointer;
  transition: all 0.15s ease;
}
.filter-tab-btn.active {
  background: var(--color-primary-800);
  border-color: var(--color-primary-800);
  color: white;
}
.filter-tab-btn:hover:not(.active) {
  border-color: var(--color-neutral-400);
  color: var(--color-neutral-800);
}
```

**Kategori Filter:**
- `Semua` → tampilkan 8 card
- `Engineering` → FE Dev, BE Dev, Mobile Dev, DevOps, AI & Automation
- `Design` → UI/UX Designer
- `Operations` → Project Manager, Quality Assurance

### Copy Header

**Eyebrow:** `POSISI TERSEDIA`

**Heading:** `Pilih profesional yang tepat untuk tim Anda`

**Subheading:** `Semua posisi tersedia full-time dari kantor kami, termonitor oleh supervisor berpengalaman. Anda fokus ke bisnis — kami jaga kualitas tim.`

### Data 8 Posisi

#### 1. Frontend Developer
**Deskripsi:** Membangun antarmuka web yang cepat, responsif, dan maintainable. Dari landing page hingga aplikasi web kompleks dengan UX yang intuitif.

**Tech Stack:** React · Next.js · Vue · Svelte · TypeScript · Tailwind CSS

**Cocok untuk:** Perusahaan yang butuh web app, dashboard, atau sistem internal berbasis browser.

---

#### 2. Backend Developer
**Deskripsi:** Membangun API, logika bisnis, dan infrastruktur database yang scalable dan aman. Dari REST API sederhana hingga sistem microservices yang kompleks.

**Tech Stack:** Laravel · Node.js · Golang · PostgreSQL · MySQL · Redis

**Cocok untuk:** Perusahaan yang butuh server-side logic, API integration, atau sistem backend yang solid.

---

#### 3. Mobile Developer
**Deskripsi:** Membangun aplikasi mobile native atau cross-platform untuk Android dan iOS. Performa optimal, UX yang intuitif, dan integrasi dengan sistem backend yang mulus.

**Tech Stack:** Flutter · React Native · Kotlin · Swift

**Cocok untuk:** Bisnis yang butuh mobile app untuk pelanggan atau tim internal.

---

#### 4. DevOps / Cloud Engineer
**Deskripsi:** Mengelola infrastruktur cloud, otomasi deployment, dan memastikan sistem berjalan dengan uptime tinggi. CI/CD, monitoring, dan keamanan infrastruktur.

**Tech Stack:** AWS · GCP · Docker · Kubernetes · CI/CD · Linux · Nginx · VPS

**Cocok untuk:** Perusahaan yang ingin migrasi ke cloud, otomasi deployment, atau membutuhkan infrastruktur yang reliable.

---

#### 5. AI & Automation Engineer
**Deskripsi:** Membangun sistem AI dan otomasi yang terintegrasi dengan proses bisnis — dari chatbot WhatsApp hingga pipeline otomasi workflow yang kompleks.

**Tech Stack:** LangChain · n8n · Flowise · Mastra · CrewAI · OpenAI API · Python

**Cocok untuk:** Bisnis yang ingin mengotomasi proses berulang, membangun chatbot, atau mengintegrasikan AI ke sistem yang ada.

---

#### 6. UI/UX Designer
**Deskripsi:** Merancang pengalaman pengguna yang intuitif dan antarmuka yang indah. Dari riset pengguna, wireframe, hingga high-fidelity prototype yang siap handover ke developer.

**Tech Stack:** Figma · Adobe XD · Prototyping · User Research · Design System

**Cocok untuk:** Perusahaan yang ingin meningkatkan UX produk digital atau membutuhkan design system yang konsisten.

---

#### 7. Project Manager
**Deskripsi:** Memastikan proyek berjalan on-track, on-budget, dan sesuai ekspektasi. Menggunakan metodologi Agile/Scrum dengan transparansi penuh melalui Kodeflow PM.

**Tech Stack:** Kodeflow PM · Agile/Scrum · Sprint Planning · Jira · Notion · Google Meet

**Cocok untuk:** Tim yang butuh koordinasi proyek IT yang terstruktur dan laporan progress yang transparan.

---

#### 8. Quality Assurance
**Deskripsi:** Memastikan setiap fitur yang selesai benar-benar berfungsi sesuai ekspektasi — dari functional testing, edge case, hingga performance testing sebelum naik ke production.

**Tech Stack:** Manual Testing · Selenium · Cypress · Postman · QA Checklist · Bug Tracking

**Cocok untuk:** Tim yang ingin memastikan kualitas software sebelum di-release ke pengguna nyata.

---

## 5. S-03 · CTA Interrupt

### Tujuan
**Interrupt** pengunjung di tengah halaman — sebelum mereka kebanyakan baca dan tidak jadi ambil tindakan. Ini adalah CTA "ringan" yang tidak terlalu memaksa.

### Layout

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│   Belum yakin posisi mana yang paling dibutuhkan tim Anda?  │
│                                                              │
│   Ceritakan kebutuhan bisnis Anda — kami akan                │
│   rekomendasikan komposisi tim yang paling tepat, gratis.    │
│                                                              │
│         [Konsultasikan Kebutuhan Anda →]                     │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Spesifikasi

| Atribut | Nilai |
|---|---|
| Background | `primary-50` (#EFF6FF) — biru sangat muda, bukan putih |
| Border | `1px solid primary-200` |
| Radius | `radius-2xl` (20px) |
| Layout | Center align, max-width `640px`, margin `0 auto` |
| Heading | `text-xl`, `font-semibold`, `primary-800` |
| Subtext | `text-base`, `neutral-500` |
| CTA | `btn-primary`, `btn-lg` |
| Padding | `48px` vertikal · `40px` horizontal |

### Copy

| Elemen | Teks |
|---|---|
| Heading | `Belum yakin posisi mana yang paling dibutuhkan tim Anda?` |
| Subtext | `Ceritakan kebutuhan bisnis Anda — kami analisis dan rekomendasikan komposisi tim yang paling tepat, tanpa biaya, tanpa komitmen.` |
| CTA | `Konsultasikan Kebutuhan Anda →` |
| Microcopy | `Respon dalam < 24 jam` |

---

## 6. S-04 · Kenapa Berbeda dari Vendor Biasa

### Tujuan
Menjawab pertanyaan paling kritis dari pengunjung yang sudah sampai sini: *"Apa bedanya Kodeflow Tech dari freelancer, vendor biasa, atau hire sendiri?"*

### Layout

```
┌──────────────────────────────────────────────────────────────┐
│  [eyebrow]  [heading]  [subheading]                          │
│                                                              │
│  ┌─────────────────┬──────────────────┬────────────────────┐ │
│  │                 │ Freelancer/      │                    │ │
│  │   Aspek         │ Vendor Biasa     │ Kodeflow Tech      │ │
│  ├─────────────────┼──────────────────┼────────────────────┤ │
│  │ Monitoring      │ ✗ Tidak ada      │ ✓ Dari kantor kami │ │
│  │ Onboarding      │ ✗ Minggu–bulan   │ ✓ < 2 minggu       │ │
│  │ Replacement     │ ✗ Mulai dari nol │ ✓ Garansi ganti    │ │
│  │ Trial period    │ ✗ Tidak ada      │ ✓ Tersedia         │ │
│  │ SLA tertulis    │ ✗ Jarang         │ ✓ Selalu ada       │ │
│  │ Deposit         │ ✗ Sering diminta │ ✓ Tidak ada        │ │
│  │ HR hassle       │ ✗ Anda urus      │ ✓ Kami urus semua  │ │
│  │ Supervisor      │ ✗ Tidak ada      │ ✓ 7 Supervisors    │ │
│  └─────────────────┴──────────────────┴────────────────────┘ │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Spesifikasi Tabel Perbandingan

| Atribut | Nilai |
|---|---|
| Background section | `neutral-0` |
| Header tabel | Kolom Kodeflow Tech diberi background `primary-800`, teks putih |
| Header freelancer | `neutral-100`, teks `neutral-600` |
| Icon ✓ | `CheckCircle2`, `success-500` |
| Icon ✗ | `XCircle`, `neutral-300` |
| Teks kolom Kodeflow | `neutral-800`, bold |
| Teks kolom freelancer | `neutral-400` |
| Border tabel | `neutral-200` |
| Kolom Kodeflow Tech | Sedikit elevated — `box-shadow` kiri kanan `accent-200` |
| Mobile | Scroll horizontal atau ubah ke card comparison |

**Mobile Alternative Layout** (jika tabel terlalu sempit):

```
┌────────────────────────────────────────┐
│  [Aspek]          [✗]        [✓]       │
│  Monitoring    Freelancer  Kodeflow     │
│  ─────────────────────────────────     │
│  Onboarding    Berminggu   < 2 mgg     │
│  ...                                   │
└────────────────────────────────────────┘
```

### Data Tabel Perbandingan

| Aspek | Freelancer / Vendor Biasa | Kodeflow Tech |
|---|---|---|
| Monitoring harian | Tidak ada — Anda harus chase sendiri | Dari kantor kami, supervisor aktif memantau |
| Kecepatan onboarding | 2–8 minggu, sering mundur | < 2 minggu, sudah terstruktur |
| Jika tidak cocok | Mulai rekrut dari nol lagi | Garansi replacement tanpa biaya tambahan |
| Trial sebelum komitmen | Hampir tidak ada | Tersedia — coba dulu sebelum kontrak penuh |
| SLA tertulis | Sering tidak ada atau tidak jelas | Selalu ada — jam kerja, response time, laporan |
| Deposit di muka | Sering diminta 30–50% | Tidak ada deposit sama sekali |
| Urusan HR & admin | Anda yang urus BPJS, THR, dll | Kami urus semua — zero HR hassle |
| Supervisor teknikal | Tidak ada | 7 supervisors aktif |
| Laporan progress | Tidak konsisten | Update harian via Kodeflow PM |

### Copy

**Eyebrow:** `PERBANDINGAN`

**Heading:** `Apa yang membuat Kodeflow Tech berbeda?`

**Subheading:** `Kami bukan sekadar "menyediakan developer". Kami adalah extension dari tim internal Anda — dengan sistem monitoring, supervisor, dan SLA yang jelas.`

---

## 7. S-05 · Proses Rekrutmen Detail

### Tujuan
Versi lebih detail dari "Proses Rekrutmen" di homepage — menjelaskan setiap step dengan output konkret dan timeline yang realistis.

### Layout

```
┌──────────────────────────────────────────────────────────────┐
│  [eyebrow]  [heading]  [subheading]                          │
│                                                              │
│  ①──────────②──────────③──────────④──────────⑤             │
│  Konsultasi  Proposal   PKS         Onboarding  Tim Jalan    │
│  Gratis      Tim        & NDA       & Setup                  │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐    │
│  │                                                      │    │
│  │  01  Konsultasi Gratis                               │    │
│  │                                                      │    │
│  │  Ceritakan kebutuhan IT Anda. Kami fasilitasi        │    │
│  │  sesi konsultasi untuk memahami:                     │    │
│  │                                                      │    │
│  │  · Posisi yang dibutuhkan dan jumlahnya              │    │
│  │  · Tech stack yang akan digunakan                    │    │
│  │  · Timeline dan durasi kontrak                       │    │
│  │  · Cara kerja dan ritme kolaborasi yang diinginkan   │    │
│  │                                                      │    │
│  │  ┌─────────────────────────────────────────────┐    │    │
│  │  │ Output: Pemahaman kebutuhan + rekomendasi   │    │    │
│  │  │ awal komposisi tim                          │    │    │
│  │  └─────────────────────────────────────────────┘    │    │
│  │                                                      │    │
│  │  ⏱ Timeline: Respon dalam < 24 jam                   │    │
│  │                                                      │    │
│  └──────────────────────────────────────────────────────┘    │
│                                                              │
│  [← Sebelumnya]      1 / 5      [Selanjutnya →]              │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Spesifikasi

| Atribut | Nilai |
|---|---|
| Background | `neutral-50` (alt section) |
| Detail card | `neutral-0`, border `neutral-200`, radius `xl`, padding `40px` |
| Nomor step | `text-6xl`, `neutral-100`, posisi absolute dekoratif di background card |
| Timeline badge | `badge-accent`, teks `"⏱ Respon < 24 jam"` dll |
| Output box | Background `primary-50`, border `primary-200`, radius `md`, padding `16px` |
| Bullet list | Icon `ArrowRight` kecil `accent-500` |

### Copy — 5 Step Detail

#### Step 1 — Konsultasi Gratis
**Timeline:** Respon dalam < 24 jam

Ceritakan kebutuhan IT Anda. Kami fasilitasi sesi konsultasi untuk memahami:
- Posisi yang dibutuhkan dan berapa orangnya
- Tech stack dan sistem yang akan digunakan
- Durasi dan model kontrak yang diinginkan
- Cara kerja dan ritme kolaborasi tim Anda

**Output:** Pemahaman kebutuhan yang jelas + rekomendasi awal komposisi tim

---

#### Step 2 — Proposal Tim
**Timeline:** Proposal siap dalam 1–2 hari kerja

Kami siapkan proposal yang mencakup:
- Komposisi tim yang direkomendasikan beserta profil skill
- Estimasi timeline onboarding per posisi
- Detail SLA: jam kerja, response time, mekanisme laporan
- Ketentuan kontrak dan opsi trial period

**Output:** Proposal tim lengkap + draft kontrak untuk direview

---

#### Step 3 — Penandatanganan PKS & NDA
**Timeline:** Proses tanda tangan 1–3 hari kerja

Dokumen yang ditandatangani:
- Perjanjian Kerja Sama (PKS) antara PT Kodeflow Digital Indonesia dan perusahaan Anda
- NDA (Non-Disclosure Agreement) untuk kerahasiaan data dan informasi bisnis
- SLA tertulis yang mengikat kedua pihak

**Output:** Kontrak resmi yang melindungi kedua belah pihak. **Tidak ada deposit.**

---

#### Step 4 — Onboarding & Setup
**Timeline:** 3–7 hari kerja

Proses onboarding mencakup:
- Tim mendapat akses ke sistem, repository, dan tools Anda
- Anda diundang ke Kodeflow PM sebagai observer
- Kickoff meeting untuk alignment tujuan, cara kerja, dan ekspektasi
- Setup komunikasi harian (Slack/Discord/Google Meet sesuai preferensi Anda)

**Output:** Tim siap, sistem terkoneksi, komunikasi berjalan

---

#### Step 5 — Tim Mulai Bekerja
**Timeline:** Mulai aktif bekerja dari hari pertama

Setelah onboarding selesai:
- Developer bekerja full-time dari kantor Kodeflow — termonitor penuh oleh supervisor
- Update status harian tersedia di Kodeflow PM — Anda bisa pantau kapan saja
- Review mingguan bersama Anda untuk evaluasi progress dan planning sprint
- Semua komunikasi dan laporan berjalan terstruktur sesuai SLA

**Output:** Tim produktif, progress transparan, Anda bisa fokus ke bisnis

### Copy Header

**Eyebrow:** `PROSES BERGABUNG`

**Heading:** `Dari percakapan pertama ke tim yang produktif — dalam 2 minggu`

**Subheading:** `Tidak ada proses yang berbelit. Tidak ada biaya tersembunyi. Setiap langkah punya output yang jelas dan timeline yang realistis.`

---

## 8. S-06 · Tech Stack per Kategori

### Tujuan
Menjawab pertanyaan teknikal: *"Apakah tim Kodeflow Tech bisa handle proyek dengan tech stack kami?"*

### Layout

```
┌──────────────────────────────────────────────────────────────┐
│  [eyebrow]  [heading]                                        │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐     │
│  │  Frontend                                           │     │
│  │  React  Next.js  Vue  Svelte  TypeScript  Tailwind  │     │
│  └─────────────────────────────────────────────────────┘     │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐     │
│  │  Backend                                            │     │
│  │  Laravel  Node.js  Golang  Express  REST  GraphQL   │     │
│  └─────────────────────────────────────────────────────┘     │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐     │
│  │  Mobile                                             │     │
│  │  Flutter  React Native  Kotlin  Swift               │     │
│  └─────────────────────────────────────────────────────┘     │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐     │
│  │  DevOps & Cloud                                     │     │
│  │  AWS  GCP  Docker  Kubernetes  CI/CD  Linux  Nginx  │     │
│  └─────────────────────────────────────────────────────┘     │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐     │
│  │  AI & Automation                                    │     │
│  │  LangChain  n8n  Flowise  Mastra  CrewAI  OpenAI   │     │
│  └─────────────────────────────────────────────────────┘     │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐     │
│  │  Database                                           │     │
│  │  PostgreSQL  MySQL  MongoDB  Redis  Supabase        │     │
│  └─────────────────────────────────────────────────────┘     │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Spesifikasi

| Atribut | Nilai |
|---|---|
| Background | `neutral-0` |
| Category block | Background `neutral-50`, border `neutral-200`, radius `lg`, padding `20px 24px` |
| Category label | `text-xs`, `neutral-400`, uppercase, `tracking-wider`, margin-bottom `12px` |
| Tech badge | `tech-badge` dari Design System — mono font, dot accent |
| Hover tech badge | Background `accent-50`, border `accent-300` |
| Grid | 2 kolom desktop (`grid-cols-2`) · 1 kolom mobile |

### Copy

**Eyebrow:** `TECH STACK`

**Heading:** `Teknologi yang dikuasai tim kami`

**Subheading (opsional):** `Tidak menemukan stack yang Anda butuhkan? Konsultasikan — kemungkinan besar kami bisa bantu.`

---

## 9. S-07 · FAQ

### Tujuan
Hilangkan semua keberatan terakhir sebelum pengunjung memutuskan untuk konsultasi. FAQ yang baik adalah **sales tool** — bukan sekadar informasi.

### Layout

```
┌──────────────────────────────────────────────────────────────┐
│  [eyebrow]  [heading]                                        │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐    │
│  │ Q: Berapa lama proses onboarding? ▼                  │    │
│  ├──────────────────────────────────────────────────────┤    │
│  │ A: Rata-rata 7–14 hari kerja dari PKS...             │    │
│  └──────────────────────────────────────────────────────┘    │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐    │
│  │ Q: Apakah ada deposit di muka? ▼                     │    │
│  └──────────────────────────────────────────────────────┘    │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐    │
│  │ Q: Bagaimana jika developer tidak cocok? ▼           │    │
│  └──────────────────────────────────────────────────────┘    │
│                                                              │
│  ... (8–10 pertanyaan total)                                 │
│                                                              │
│         Masih ada pertanyaan lain?                           │
│         [Chat Langsung via WhatsApp →]                       │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Spesifikasi Accordion

| Atribut | Nilai |
|---|---|
| Background | `neutral-50` |
| Item border | `1px solid neutral-200`, radius `lg` |
| Item padding | `20px 24px` |
| Item hover | `border-color: neutral-300`, background `neutral-0` |
| Item aktif | Border kiri `3px solid accent-500`, background `neutral-0` |
| Chevron icon | `ChevronDown` — rotate `180deg` saat terbuka |
| Animasi buka | Max-height transition `300ms ease-out` |
| Teks pertanyaan | `font-display`, `font-medium`, `neutral-800` |
| Teks jawaban | `font-body`, `neutral-600`, `leading-relaxed`, padding-top `12px` |

### 10 FAQ dengan Jawaban

#### Q1: Berapa lama proses onboarding tim dari Kodeflow Tech?
Rata-rata **7–14 hari kerja** dari penandatanganan PKS hingga tim aktif bekerja. Ini mencakup akses setup, kickoff meeting, dan alignment dengan sistem Anda. Untuk kebutuhan mendesak, kami bisa diskusikan fast-track onboarding.

#### Q2: Apakah ada deposit atau biaya di muka?
**Tidak ada deposit sama sekali.** Anda membayar di akhir bulan setelah tim bekerja selama bulan tersebut. Invoice dikirim di akhir bulan, pembayaran dilakukan setelah tim memberikan hasil kerja.

#### Q3: Bagaimana jika developer yang ditempatkan tidak cocok dengan tim kami?
Kami memberikan **garansi replacement** — jika terjadi ketidakcocokan, kami akan mencari pengganti tanpa biaya tambahan. Sebelum itu, ada **trial period** di awal yang bisa dimanfaatkan untuk memastikan kecocokan sebelum masuk ke kontrak penuh.

#### Q4: Apakah developer bekerja remote atau dari kantor?
Developer bekerja **dari kantor Kodeflow Tech** di Pasuruan, Jawa Timur — bukan remote lepas. Ini artinya ada supervisor yang secara aktif memantau pekerjaan, jam kerja terjaga, dan produktivitas termonitor setiap hari.

#### Q5: Bagaimana cara saya memantau progress pekerjaan tim?
Anda mendapatkan akses ke **Kodeflow PM** — project management tool internal kami. Anda bisa melihat status task, progress harian, dan update terbaru kapan saja, tanpa harus menunggu laporan. Review mingguan juga dilakukan bersama Anda.

#### Q6: Berapa kontrak minimum dan apakah bisa diperpanjang?
Kontrak minimum adalah **6 bulan**. Untuk kontrak 12 bulan, ada diskon Rp 500.000 per orang per bulan. Setelah kontrak minimum selesai, bisa diperpanjang atau disesuaikan jumlah anggota tim sesuai kebutuhan bisnis Anda.

#### Q7: Apakah bisa menambah atau mengurangi anggota tim di tengah kontrak?
Penambahan anggota tim bisa dilakukan kapan saja dengan proses onboarding baru. Pengurangan anggota tim diatur dalam ketentuan kontrak dengan notice period yang disepakati di awal — biasanya 30 hari sebelumnya.

#### Q8: Bagaimana dengan kerahasiaan data dan kode yang dikerjakan?
Semua anggota tim menandatangani **NDA (Non-Disclosure Agreement)** sebelum mulai bekerja. Kode yang dikerjakan adalah sepenuhnya milik klien. Kami tidak menyimpan atau menggunakan kode klien untuk kepentingan lain.

#### Q9: Apakah Kodeflow Tech hanya untuk perusahaan besar?
Tidak — kami melayani semua skala bisnis, dari **startup yang baru mulai** hingga **perusahaan menengah dan enterprise**. Yang terpenting adalah Anda memiliki kebutuhan IT yang jelas dan komitmen untuk bekerja sama minimal 6 bulan.

#### Q10: Bagaimana dengan perbedaan zona waktu jika perusahaan saya di luar Jawa Timur?
Tim kami beroperasi **Senin–Jumat, jam 08.00–17.00 WIB**. Untuk perusahaan di luar WIB, kami bisa mendiskusikan jadwal overlap yang sesuai. Review mingguan dan komunikasi rutin bisa diatur menyesuaikan kebutuhan Anda.

### Copy Header FAQ

**Eyebrow:** `FAQ`

**Heading:** `Pertanyaan yang sering ditanyakan`

**CTA bawah:** `Masih ada pertanyaan lain?` + `[Chat Langsung via WhatsApp →]`

---

## 10. S-08 · CTA Final

### Tujuan
Pengunjung yang sudah baca sampai FAQ adalah mereka yang paling serius. Buat CTA final ini **tidak mungkin dilewatkan**.

### Layout

```
┌──────────────────────────────────────────────────────────────┐
│                [bg: navy gradient]                           │
│                                                              │
│         Tim IT yang Anda butuhkan                           │
│         sudah menunggu.                                      │
│                                                              │
│   Konsultasi gratis, tanpa deposit, tanpa komitmen awal.    │
│         Tim siap dalam hitungan minggu.                      │
│                                                              │
│   [Mulai Konsultasi Gratis]    [Chat via WhatsApp]           │
│                                                              │
│   ─────────────────────────────────────────────────         │
│                                                              │
│   "Tidak ada deposit · Trial period tersedia ·              │
│    Garansi replacement"                                      │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Copy

| Elemen | Teks |
|---|---|
| Headline baris 1 | `Tim IT yang Anda butuhkan` |
| Headline baris 2 | `sudah menunggu.` |
| Subheadline | `Konsultasi gratis, tanpa deposit, tanpa komitmen awal. Tim Anda bisa siap dalam hitungan minggu.` |
| CTA Primary | `Mulai Konsultasi Gratis` |
| CTA Secondary | `Chat via WhatsApp` |
| Trust line | `Tidak ada deposit · Trial period tersedia · Garansi replacement` |

> **Desain sama** dengan CTA Section di homepage (`gradient-cta`, CTA putih, dot grid pattern) — konsistensi membangun brand recognition.

---

## 11. S-09 · Footer

Identik dengan Footer di Homepage (`/` page) — lihat **PRD UI Homepage, S-11**.

---

## 12. Interaction & Animation Notes

### Page Load

```
0ms    → Navbar already visible (sticky)
100ms  → Hero eyebrow badge scaleIn
200ms  → Hero headline fadeInUp (3 baris dengan stagger 50ms tiap baris)
400ms  → Hero subheadline fadeInUp
500ms  → Hero CTA button fadeInUp
600ms  → Hero checklist items fadeInUp (stagger 60ms tiap item)
700ms  → Stats card fadeIn dari kanan
```

### Filter Tab (S-02)

```javascript
// Saat klik filter tab:
// 1. Tab aktif berubah styling
// 2. Card yang tidak sesuai kategori: opacity 0 + scale 0.95 (200ms)
// 3. Card yang sesuai: opacity 1 + scale 1 (200ms, delay 100ms)
// 4. Grid re-layout smooth dengan CSS grid transition
```

### Accordion FAQ

```javascript
// Saat klik pertanyaan:
// 1. Chevron rotate 180deg (200ms ease)
// 2. Answer div: max-height 0 → max-height content (300ms ease-out)
// 3. Border kiri muncul (150ms)
// 4. Jika ada yang terbuka: tutup dulu (200ms), lalu buka yang baru
```

### Comparison Table (S-04)

- Baris tabel muncul satu per satu dengan stagger `40ms` per baris saat masuk viewport
- Kolom Kodeflow Tech sedikit di-highlight dengan background `primary-50` yang subtle

### Stepper Proses Rekrutmen (S-05)

- Sama dengan stepper di homepage — klik dot atau tombol navigasi
- Nomor step besar di background card sebagai dekoratif
- Transisi antar step: `fadeIn` 250ms

---

## 13. SEO & Meta Tags

```html
<title>Services — Dedicated IT Team | Kodeflow Tech</title>
<meta name="description"
  content="Sewa tim IT profesional dari Kodeflow Tech: Frontend Developer, Backend Developer, Mobile, DevOps, AI Engineer, UI/UX, PM, dan QA. Tanpa deposit, tanpa rekrut, siap dalam 2 minggu." />

<meta property="og:title"       content="Services — Dedicated IT Team | Kodeflow Tech" />
<meta property="og:description" content="8 posisi IT profesional tersedia. Termonitor dari kantor kami, siap bergabung dalam 2 minggu. Tanpa deposit, trial period tersedia." />
<meta property="og:image"       content="/og-services.png" />
<meta property="og:url"         content="https://kodeflow.tech/services" />

<link rel="canonical" href="https://kodeflow.tech/services" />

<!-- Breadcrumb structured data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home",     "item": "https://kodeflow.tech" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://kodeflow.tech/services" }
  ]
}
</script>

<!-- FAQ structured data — untuk rich snippet di Google -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Berapa lama proses onboarding tim dari Kodeflow Tech?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rata-rata 7–14 hari kerja dari penandatanganan PKS hingga tim aktif bekerja."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah ada deposit atau biaya di muka?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tidak ada deposit sama sekali. Pembayaran dilakukan di akhir bulan setelah tim bekerja."
      }
    }
  ]
}
</script>
```

> **Catatan:** FAQ structured data memungkinkan pertanyaan-jawaban muncul langsung di halaman hasil pencarian Google (FAQ rich snippet) — ini meningkatkan CTR secara signifikan.

---

## 14. Checklist Sign-off

### Konten
- [ ] Copy semua section sudah direview dan disetujui
- [ ] FAQ sudah direview — tambah pertanyaan jika ada yang sering muncul dari calon klien
- [ ] Nomor WhatsApp CTA sudah dikonfigurasi dengan pesan pre-fill yang relevan
- [ ] Deskripsi 8 posisi sudah sesuai dengan kapabilitas tim saat ini

### Desain
- [ ] Filter tab posisi berfungsi dengan benar (filter Engineering/Design/Operations)
- [ ] Comparison table responsif di mobile — scroll horizontal atau ubah ke card
- [ ] Accordion FAQ smooth di semua browser (Chrome, Safari, Firefox)
- [ ] Stepper proses rekrutmen konsisten dengan stepper di homepage
- [ ] OG Image Services `1200×630px` sudah dibuat (`/og-services.png`)

### Teknikal
- [ ] FAQ structured data tervalidasi di Google Rich Results Test
- [ ] Breadcrumb structured data benar
- [ ] Canonical URL sudah benar (`/services`)
- [ ] Semua CTA WhatsApp link punya pre-filled message yang kontekstual:
  - Hero CTA: `"Halo, saya ingin konsultasi Dedicated IT Team"`
  - CTA Interrupt: `"Halo, saya belum yakin posisi mana yang dibutuhkan"`
  - FAQ CTA: `"Halo, saya masih punya pertanyaan tentang layanan Kodeflow Tech"`
- [ ] Filter tab tidak break layout saat semua card ditampilkan
- [ ] Scroll animation tidak terpotong di iOS Safari

### Performance
- [ ] LCP < 2.5 detik di mobile
- [ ] Tidak ada layout shift saat filter tab digunakan
- [ ] Accordion buka-tutup tidak menyebabkan reflow yang berat

---

*We Build. We Maintain. You Scale.*
**PT Kodeflow Digital Indonesia — Pasuruan, Jawa Timur — Est. 2022**
*PRD UI Services v1.0 — Dokumen hidup, update sesuai feedback review*
