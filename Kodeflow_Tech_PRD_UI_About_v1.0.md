# PRD UI — About Page
**Kodeflow Tech Website · v1.0 · PT Kodeflow Digital Indonesia · April 2025**
*Dokumen ini adalah acuan desain dan copy untuk halaman `/about`*

---

## Daftar Isi

1. [Overview Halaman](#1-overview-halaman)
2. [Wireframe Global](#2-wireframe-global)
3. [S-01 · Hero About](#3-s-01--hero-about)
4. [S-02 · Cerita Kami](#4-s-02--cerita-kami)
5. [S-03 · Angka & Pencapaian](#5-s-03--angka--pencapaian)
6. [S-04 · Visi & Misi](#6-s-04--visi--misi)
7. [S-05 · Nilai Perusahaan](#7-s-05--nilai-perusahaan)
8. [S-06 · Tim](#8-s-06--tim)
9. [S-07 · CTA Section](#9-s-07--cta-section)
10. [S-08 · Footer](#10-s-08--footer)
11. [Interaction & Animation Notes](#11-interaction--animation-notes)
12. [SEO & Meta Tags](#12-seo--meta-tags)
13. [Checklist Sign-off](#13-checklist-sign-off)

---

## 1. Overview Halaman

| Atribut | Detail |
|---|---|
| **URL** | `/about` |
| **Tujuan utama** | Membangun kepercayaan melalui transparansi — siapa Kodeflow Tech, dari mana, dan apa yang dipercayai |
| **Target pengguna** | Calon klien yang sedang due-diligence sebelum memutuskan · Talenta yang ingin bergabung · Mitra bisnis |
| **Primary CTA** | "Konsultasi Gratis" → WhatsApp |
| **Tone** | Paling personal dari semua halaman — jujur, hangat, manusiawi, tapi tetap profesional |
| **Sumber traffic** | Navbar · Calon klien yang sudah interested dan ingin tahu lebih dalam siapa Kodeflow |
| **Estimasi scroll depth** | ~4000px desktop / ~6500px mobile |

### Tujuan Emosional Halaman Ini

Halaman About bukan sekadar daftar fakta perusahaan. Pengunjung yang buka halaman ini sedang bertanya:
*"Bisa saya percaya orang-orang ini dengan bisnis saya?"*

Setiap section harus menjawab pertanyaan itu dari sudut berbeda:

| Section | Pertanyaan yang Dijawab |
|---|---|
| Cerita Kami | *"Dari mana mereka berasal? Apakah mereka serius?"* |
| Angka & Pencapaian | *"Apakah ini bisnis yang nyata dan berkembang?"* |
| Visi & Misi | *"Apa yang mereka perjuangkan? Apakah nilainya selaras dengan saya?"* |
| Nilai Perusahaan | *"Bagaimana cara kerja mereka sehari-hari?"* |
| Tim | *"Siapa orang-orang di baliknya? Apakah mereka kompeten?"* |

---

## 2. Wireframe Global

```
┌─────────────────────────────────────────────────────┐
│  S-00  NAVBAR (sticky)                              │
├─────────────────────────────────────────────────────┤
│                                                     │
│  S-01  HERO ABOUT                                   │
│                                                     │
│  [eyebrow]                                          │
│  Kami bukan sekadar vendor IT.                      │
│  Kami adalah tim yang ikut                          │
│  berkembang bersama Anda.                           │
│                                                     │
│  [tagline: We Build. We Maintain. You Scale.]       │
│  [CTA Konsultasi Gratis →]                          │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  S-02  CERITA KAMI                                  │
│                                                     │
│  [Split layout: teks kiri · visual timeline kanan]  │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  S-03  ANGKA & PENCAPAIAN                           │
│                                                     │
│  [5 stat cards dalam satu row]                      │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  S-04  VISI & MISI                                  │
│                                                     │
│  [Visi — full width highlight box]                  │
│  [4 Misi — 2×2 grid card]                           │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  S-05  NILAI PERUSAHAAN                             │
│                                                     │
│  [3 nilai — 3 kolom card]                           │
│  [dark background — berbeda dari section lain]      │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  S-06  TIM                                          │
│                                                     │
│  [Supervisor cards — grid]                          │
│  [PM cards — grid]                                  │
│  [Developer count — angka visual]                   │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  S-07  CTA SECTION                                  │
│  [navy gradient — konsisten]                        │
│                                                     │
├─────────────────────────────────────────────────────┤
│  S-08  FOOTER                                       │
└─────────────────────────────────────────────────────┘
```

---

## 3. S-01 · Hero About

### Tujuan
Set tone halaman — ini bukan halaman korporat yang dingin. Ini adalah halaman yang memperkenalkan **manusia** di balik Kodeflow Tech.

### Layout Desktop

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  [eyebrow]                                                   │
│                                                              │
│  Kami bukan sekadar vendor IT.              ┌─────────────┐  │
│  Kami adalah tim yang ikut                  │             │  │
│  berkembang bersama Anda.                   │  Foto tim / │  │
│                                             │  ilustrasi  │  │
│  [tagline badge]                            │  kantor     │  │
│  "We Build. We Maintain. You Scale."        │             │  │
│                                             └─────────────┘  │
│  [Konsultasi Gratis →]                                       │
│                                                              │
│  Pasuruan, Jawa Timur · Est. 2022                            │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

**Grid:** Kolom kiri 55% · Kolom kanan 45%
**Mobile:** Stack vertikal, visual di atas headline

### Spesifikasi

| Atribut | Nilai |
|---|---|
| Background | `neutral-50` + gradient mesh sangat halus |
| Padding | `section-py-lg` (128px) |
| Headline size | `text-5xl` desktop · `text-4xl` mobile |
| Tagline badge | Pill badge dengan background `primary-50`, border `primary-200`, teks `primary-800`, font italic |
| Visual kanan | Foto tim di kantor (jika tersedia) ATAU ilustrasi abstract kantor/workspace · radius `2xl` · `shadow-lg` |
| Location line | Icon `MapPin` + teks, `neutral-400`, `text-sm` |

### Copy

| Elemen | Teks |
|---|---|
| Eyebrow | `TENTANG KAMI` |
| Headline baris 1 | `Kami bukan sekadar vendor IT.` |
| Headline baris 2 | `Kami adalah tim yang ikut` |
| Headline baris 3 | `berkembang bersama Anda.` |
| Tagline badge | `"We Build. We Maintain. You Scale."` |
| CTA | `Konsultasi Gratis →` |
| Location | `Pasuruan, Jawa Timur · Est. 2022` |

> **Catatan visual:** Jika belum ada foto tim yang profesional, gunakan ilustrasi abstract yang menggambarkan workspace kolaboratif — jangan pakai stock photo generik. Foto nyata selalu lebih baik untuk halaman About.

---

## 4. S-02 · Cerita Kami

### Tujuan
Narasi asal-usul yang jujur dan relatable — mengapa Kodeflow Tech ada, apa masalah yang dilihat, dan apa keyakinan yang mendorong berdirinya perusahaan.

### Layout Desktop

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  ┌──────────────────────────────┐  ┌──────────────────────┐  │
│  │                              │  │                      │  │
│  │  [eyebrow]                   │  │  TIMELINE VISUAL     │  │
│  │  [heading]                   │  │                      │  │
│  │                              │  │  2022 ─── Didirikan  │  │
│  │  [paragraf 1 — origin story] │  │  ●                   │  │
│  │                              │  │  │  Pasuruan, Jatim   │  │
│  │  [paragraf 2 — masalah       │  │  │                    │  │
│  │   yang dilihat]              │  │  2023 ─── Klien      │  │
│  │                              │  │  ●  pertama          │  │
│  │  [paragraf 3 — keyakinan     │  │  │                    │  │
│  │   dan cara berbeda]          │  │  2024 ─── Scale      │  │
│  │                              │  │  ●  50+ Professionals │  │
│  │                              │  │  │                    │  │
│  │                              │  │  2025 ─── Sekarang   │  │
│  │                              │  │  ●  5 Klien Aktif    │  │
│  └──────────────────────────────┘  └──────────────────────┘  │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

**Grid:** 55% kiri (narasi) · 45% kanan (timeline)
**Mobile:** Stack vertikal — narasi dulu, timeline di bawah

### Spesifikasi Timeline

| Atribut | Nilai |
|---|---|
| Timeline line | `2px solid neutral-200`, vertikal |
| Dot milestone | `12×12px`, circle, `primary-800` fill |
| Dot shadow | `0 0 0 4px primary-100` |
| Tahun label | `font-display`, `font-bold`, `primary-800`, `text-sm` |
| Milestone label | `font-body`, `neutral-600`, `text-sm` |
| Milestone card | Background `neutral-0`, border `neutral-200`, radius `md`, padding `12px 16px` |

### Copy

**Eyebrow:** `CERITA KAMI`

**Heading:** `Lahir dari frustrasi yang sama yang dirasakan klien kami`

**Paragraf 1 — Origin:**
> Kodeflow Tech didirikan pada 2022 di Pasuruan, Jawa Timur — bukan di Jakarta, bukan di Silicon Valley. Kami mulai dari keresahan sederhana: terlalu banyak bisnis di Indonesia yang punya kebutuhan IT nyata, tapi tidak bisa menemukan partner yang bisa diandalkan.

**Paragraf 2 — Masalah yang Dilihat:**
> Polanya selalu sama — vendor yang terlihat bagus di proposal tapi menghilang setelah delivery. Developer yang rekrut susah, lama onboarding, lalu resign di tengah proyek. Sistem yang selesai dibangun tapi tidak ada yang tahu cara maintain-nya. Kami melihat ini terjadi berulang, dan kami yakin ada cara yang lebih baik.

**Paragraf 3 — Keyakinan:**
> Cara yang lebih baik itu dimulai dengan satu prinsip: kami tidak pergi setelah go-live. Kami hadir tidak hanya saat build, tapi saat maintain, iterate, dan scale. Bukan sebagai vendor yang menyelesaikan satu proyek lalu pamit — tapi sebagai tim yang memahami konteks bisnis Anda dan ikut merayakan setiap pencapaiannya.

**Timeline Milestones:**

| Tahun | Milestone |
|---|---|
| 2022 | Kodeflow Tech didirikan di Pasuruan, Jawa Timur |
| 2023 | Klien pertama onboard · Tim berkembang hingga 20+ professionals |
| 2024 | Ekspansi ke 50+ IT Professionals · 7 Supervisors aktif |
| 2025 | 5 Klien Aktif · 20+ Proyek Selesai · Terus berkembang |

---

## 5. S-03 · Angka & Pencapaian

### Tujuan
Satu baris angka yang membuktikan: *"Ini bisnis yang nyata, berkembang, dan bisa diandalkan."*

### Layout

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│   ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌────────┐ ┌─────┐ │
│   │    5     │ │   50+    │ │    7     │ │   5    │ │ 20+ │ │
│   │  Klien   │ │   IT     │ │Supervisor│ │Project │ │Proyek│ │
│   │  Aktif   │ │  Pros    │ │          │ │Manager │ │Selesai│ │
│   └──────────┘ └──────────┘ └──────────┘ └────────┘ └─────┘ │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Spesifikasi

| Atribut | Nilai |
|---|---|
| Background | `primary-800` (dark navy) |
| Layout | 5 stat items dalam satu row, `justify-center`, `gap: 0` dengan divider |
| Divider | `1px solid rgba(255,255,255,0.15)` vertikal antara item |
| Angka | `text-5xl`, `font-extrabold`, `white` |
| Label | `text-sm`, `primary-200`, `font-body` |
| Padding | `64px 0` |
| Mobile | 2×3 grid (terakhir center) |
| Animasi | Counter up animation saat masuk viewport |

### Copy — 5 Stats

| Angka | Label | Sub-label (opsional) |
|---|---|---|
| `5` | Klien Aktif | Bisnis yang sedang scaling |
| `50+` | IT Professionals | Siap untuk tim Anda |
| `7` | Supervisors | Memantau kualitas kerja |
| `5` | Project Managers | Menjaga proyek on-track |
| `20+` | Proyek Selesai | Dan terus bertambah |

### Counter Animation

```javascript
// Animasi angka naik saat masuk viewport
function animateCounter(el, target, duration = 1500) {
  const start = performance.now();
  const isPlus = el.dataset.suffix === '+';

  const update = (time) => {
    const elapsed = time - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * target);
    el.textContent = current + (isPlus ? '+' : '');
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        animateCounter(el, parseInt(el.dataset.target));
        statsObserver.unobserve(el);
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll('.stat-number[data-target]')
  .forEach(el => statsObserver.observe(el));
```

---

## 6. S-04 · Visi & Misi

### Tujuan
Menunjukkan bahwa Kodeflow Tech punya arah yang jelas dan nilai yang konkret — bukan sekadar bisnis yang mengejar revenue.

### Layout

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  [eyebrow]  [heading]                                        │
│                                                              │
│  ── VISI ──                                                  │
│  ┌──────────────────────────────────────────────────────┐    │
│  │                                                      │    │
│  │  ❝  Menjadi technology partner paling terpercaya     │    │
│  │     bagi bisnis yang scaling di Indonesia dan        │    │
│  │     Asia Tenggara — membangun sistem digital yang    │    │
│  │     tidak hanya selesai, tapi bertahan, berkembang,  │    │
│  │     dan memberikan nilai nyata jangka panjang.       │    │
│  │                                                      │    │
│  └──────────────────────────────────────────────────────┘    │
│                                                              │
│  ── MISI ──                                                  │
│                                                              │
│  ┌──────────────────────┐  ┌──────────────────────┐         │
│  │ 01 Build with        │  │ 02 Stay when         │         │
│  │    intention         │  │    others leave      │         │
│  │                      │  │                      │         │
│  │ [deskripsi singkat]  │  │ [deskripsi singkat]  │         │
│  └──────────────────────┘  └──────────────────────┘         │
│                                                              │
│  ┌──────────────────────┐  ┌──────────────────────┐         │
│  │ 03 Quality over      │  │ 04 Grow together     │         │
│  │    shortcuts         │  │                      │         │
│  │                      │  │                      │         │
│  │ [deskripsi singkat]  │  │ [deskripsi singkat]  │         │
│  └──────────────────────┘  └──────────────────────┘         │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Spesifikasi Visi Box

| Atribut | Nilai |
|---|---|
| Background | `primary-50` |
| Border | `1.5px solid primary-200` |
| Border kiri | `4px solid primary-800` |
| Radius | `radius-xl` |
| Padding | `40px 48px` |
| Quote mark | `❝` besar, `text-7xl`, `primary-200`, dekoratif absolut |
| Teks visi | `font-display`, `text-xl`, `font-medium`, `primary-800`, `leading-relaxed` |

### Spesifikasi Misi Cards

| Atribut | Nilai |
|---|---|
| Grid | 2×2 desktop · 1 kolom mobile |
| Card border | `1.5px solid neutral-200` |
| Card radius | `radius-xl` |
| Card padding | `32px` |
| Nomor | `text-3xl`, `font-extrabold`, `primary-100`, dekoratif di kanan atas |
| Judul | `font-display`, `text-lg`, `font-bold`, `primary-800` |
| Deskripsi | `font-body`, `neutral-600`, `leading-relaxed` |
| Icon | `24×24px`, `primary-600`, margin-bottom `16px` |
| Hover | `border-color: primary-300`, `shadow-sm` |

### Copy

**Eyebrow:** `VISI & MISI`

**Heading:** `Ke mana kami melangkah, dan bagaimana kami sampai ke sana`

**Visi (verbatim dari dokumen Visi Misi):**
> *"Menjadi technology partner paling terpercaya bagi bisnis yang scaling di Indonesia dan Asia Tenggara — membangun sistem digital yang tidak hanya selesai, tapi bertahan, berkembang, dan memberikan nilai nyata jangka panjang."*

**Konteks visi (sub-teks italic di bawah quote):**
> *Visi ini lahir dari satu keyakinan sederhana: terlalu banyak bisnis di Indonesia yang punya sistem IT — tapi tidak bisa memanfaatkannya karena sistem itu tidak dibangun dengan benar, tidak dipelihara, dan tidak dirancang untuk tumbuh.*

**4 Misi — Ringkasan:**

| # | Judul | Icon | Deskripsi Singkat |
|---|---|---|---|
| 01 | Build with intention | `Compass` | Membangun sistem digital yang benar dari hari pertama — arsitektur scalable, antarmuka berpusat pada pengguna, standar engineering yang tidak dikompromikan demi kecepatan. |
| 02 | Stay when others leave | `Anchor` | Hadir tidak hanya saat build, tapi saat maintain, iterate, dan scale. Komitmen kami dimulai tepat ketika kebanyakan vendor berpamitan — saat sistem go-live. |
| 03 | Quality over shortcuts | `Shield` | Tidak ada technical debt yang kami wariskan. Setiap baris kode direview, setiap fitur melewati QA, karena produk yang dibangun sembarangan selalu meminta bayaran lebih mahal di kemudian hari. |
| 04 | Grow together | `TrendingUp` | Ketika bisnis klien tumbuh, kami tumbuh bersamanya. Bukan sebagai vendor yang mengerjakan satu proyek lalu selesai, tapi sebagai partner yang memahami konteks bisnis dan tahu ke mana arah selanjutnya. |

---

## 7. S-05 · Nilai Perusahaan

### Tujuan
Menerjemahkan nilai abstrak menjadi sesuatu yang konkret dan terasa — 3 prinsip yang digunakan setiap hari saat menghadapi pilihan sulit.

### Layout

```
┌──────────────────────────────────────────────────────────────┐
│  [bg: neutral-900 — dark section]                            │
│                                                              │
│  [eyebrow — putih muted]                                     │
│  [heading — putih]                                           │
│  [subheading — putih muted]                                  │
│                                                              │
│  ┌──────────────────────┐ ┌─────────────────────┐ ┌───────┐  │
│  │                      │ │                     │ │       │  │
│  │  01                  │ │  02                 │ │  03   │  │
│  │  Built Right         │ │  Built for Users    │ │ Built │  │
│  │                      │ │                     │ │ to    │  │
│  │  [deskripsi]         │ │  [deskripsi]        │ │ Last  │  │
│  │                      │ │                     │ │       │  │
│  │  ────────────        │ │  ────────────       │ │       │  │
│  │  "Kalau tidak        │ │  "Teknologi ada     │ │       │  │
│  │  bisa di-maintain,   │ │  untuk manusia,     │ │       │  │
│  │  belum selesai."     │ │  bukan sebaliknya." │ │       │  │
│  │                      │ │                     │ │       │  │
│  └──────────────────────┘ └─────────────────────┘ └───────┘  │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Spesifikasi

| Atribut | Nilai |
|---|---|
| Background section | `neutral-900` |
| Padding | `section-py-lg` (128px) |
| Grid | 3 kolom desktop · 1 kolom mobile |
| Card background | `rgba(255,255,255,0.05)` glass |
| Card border | `1px solid rgba(255,255,255,0.1)` |
| Card radius | `radius-xl` |
| Card padding | `40px 32px` |
| Nomor dekoratif | `text-6xl`, `white opacity-08`, absolut kanan atas |
| Judul nilai | `font-display`, `text-2xl`, `font-bold`, `white` |
| Deskripsi | `font-body`, `neutral-300`, `leading-relaxed` |
| Divider sebelum quote | `1px solid rgba(255,255,255,0.15)`, margin `24px 0` |
| Quote | Italic, `primary-300`, `text-sm` |
| Hover card | Background `rgba(255,255,255,0.08)` |
| Aksen warna per nilai | Built Right: `accent-500` · Built for Users: `#16A34A` · Built to Last: `#D97706` |

### Copy

**Eyebrow:** `NILAI PERUSAHAAN`

**Heading:** `Tiga prinsip yang tidak pernah kami kompromikan`

**Subheading:** `Nilai-nilai ini bukan poster di dinding kantor. Ini adalah filter yang kami gunakan saat menghadapi pilihan sulit — antara cepat atau benar, antara murah atau berkualitas.`

**3 Nilai:**

| # | Judul | Aksen | Deskripsi | Quote |
|---|---|---|---|---|
| 01 | Built Right | `accent-500` biru | Setiap keputusan teknikal diambil dengan pertimbangan jangka panjang. Kami tidak pernah memilih jalan pintas yang akan menjadi masalah enam bulan kemudian. Arsitektur yang benar, code yang bisa dibaca, dokumentasi yang lengkap. | *"Kalau tidak bisa di-maintain, belum selesai."* |
| 02 | Built for Users | `#16A34A` hijau | Produk yang tidak dipakai adalah kegagalan, apapun alasannya. Setiap sistem kami rancang dari sudut pandang orang yang akan menggunakannya setiap hari — bukan dari sudut pandang database atau convenience developer. | *"Teknologi ada untuk manusia, bukan sebaliknya."* |
| 03 | Built to Last | `#D97706` amber | Ini yang paling membedakan kami. Sistem kami dirancang untuk hidup lama — bisa di-maintain, bisa di-scale, dan bisa berkembang seiring bisnis klien. Dan kami tetap ada untuk memastikan itu terjadi, bukan hanya di hari pertama. | *"Kami tidak pergi setelah go-live."* |

---

## 8. S-06 · Tim

### Tujuan
Memberikan wajah manusiawi pada Kodeflow Tech — pengunjung ingin tahu siapa orang-orangnya, bukan hanya angka di stats bar.

### Layout

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  [eyebrow]  [heading]  [subheading]                          │
│                                                              │
│  ── SUPERVISORS ──                                           │
│                                                              │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐        │
│  │ [Avatar] │ │ [Avatar] │ │ [Avatar] │ │ [Avatar] │        │
│  │  Nama    │ │  Nama    │ │  Nama    │ │  Nama    │        │
│  │ Jabatan  │ │ Jabatan  │ │ Jabatan  │ │ Jabatan  │        │
│  │ [skills] │ │ [skills] │ │ [skills] │ │ [skills] │        │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘        │
│                                                              │
│  ── PROJECT MANAGERS ──                                      │
│                                                              │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐        │
│  │ [Avatar] │ │ [Avatar] │ │ [Avatar] │ │ [Avatar] │        │
│  │  Nama    │ │  Nama    │ │  Nama    │ │  Nama    │        │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘        │
│                                                              │
│  ── DEVELOPER TEAM ──                                        │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐  │
│  │                                                        │  │
│  │  50+ IT Professionals yang siap untuk tim Anda        │  │
│  │                                                        │  │
│  │  [Frontend: XX]  [Backend: XX]  [Mobile: XX]          │  │
│  │  [DevOps: XX]    [AI: XX]       [UI/UX: XX]           │  │
│  │                                                        │  │
│  └────────────────────────────────────────────────────────┘  │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Spesifikasi Person Card

| Atribut | Nilai |
|---|---|
| Grid | 4 kolom desktop · 2 kolom tablet · 1 kolom mobile |
| Card padding | `24px` |
| Card border | `1.5px solid neutral-200` |
| Card radius | `radius-xl` |
| Card hover | `border-color: primary-300`, `shadow-md`, `translateY(-2px)` |
| Avatar | `80×80px`, lingkaran, foto atau inisial |
| Avatar inisial | Background `primary-100`, teks `primary-800`, `font-bold`, `text-xl` |
| Nama | `font-display`, `font-semibold`, `neutral-800` |
| Jabatan | `font-body`, `neutral-500`, `text-sm` |
| Skill badges | `badge-neutral` kecil, maks 3 per card |
| Divider | `border-top: 1px solid neutral-100` antara Supervisors dan PMs |

### Spesifikasi Developer Count Box

| Atribut | Nilai |
|---|---|
| Background | `primary-50` |
| Border | `1.5px solid primary-200` |
| Radius | `radius-xl` |
| Padding | `40px` |
| Headline | `text-2xl`, `font-bold`, `primary-800` |
| Breakdown grid | 3×2 grid, setiap item: angka bold + label |
| Angka breakdown | `text-3xl`, `font-extrabold`, `primary-800` |
| Label breakdown | `text-sm`, `neutral-500` |

### Copy

**Eyebrow:** `TIM KAMI`

**Heading:** `Orang-orang di balik Kodeflow Tech`

**Subheading:** `Setiap proyek dan setiap tim klien didukung oleh supervisor berpengalaman yang memastikan standar kualitas terjaga — bukan hanya di hari pertama, tapi setiap hari.`

**Label Sub-section:**
- `SUPERVISORS` — `text-xs`, uppercase, `neutral-400`, `tracking-wider`
- `PROJECT MANAGERS` — sama
- `TIM DEVELOPER` — sama

**Developer Count Box:**

```
50+ IT Professionals yang siap untuk tim Anda

Frontend Dev    Backend Dev     Mobile Dev
     XX              XX              XX

DevOps/Cloud    AI Engineer     UI/UX Designer
     XX              XX              XX
```

**Catatan di bawah Developer Count Box:**
> *"Angka ini terus bertambah. Kami secara aktif merekrut dan mengembangkan talent IT terbaik di Pasuruan dan sekitarnya."*

> **Data placeholder:** Nomor, nama, jabatan, dan foto supervisor + PM adalah placeholder. Isi dengan data nyata sebelum launch. Pastikan semua anggota tim sudah memberikan persetujuan untuk ditampilkan.

---

## 9. S-07 · CTA Section

### Copy khusus untuk halaman About

Setelah membaca tentang siapa Kodeflow Tech, CTA harus terasa seperti kelanjutan natural dari percakapan.

| Elemen | Teks |
|---|---|
| Headline | `Sudah kenal kami. Sekarang saatnya ngobrol.` |
| Subheadline | `Konsultasi gratis, tanpa komitmen. Ceritakan kebutuhan bisnis Anda dan mari cari tahu bersama bagaimana kami bisa bantu.` |
| CTA Primary | `Mulai Percakapan →` |
| CTA Secondary | `Chat via WhatsApp` |
| Trust line | `Pasuruan, Jawa Timur · Est. 2022 · 5 Klien Aktif` |

> **Desain identik** dengan CTA Section di halaman lain — `gradient-cta`, CTA button putih, dot grid pattern.

---

## 10. S-08 · Footer

Identik dengan Footer di halaman lain — lihat **PRD UI Homepage, S-11**.

---

## 11. Interaction & Animation Notes

### Page Load Sequence

```
0ms    → Navbar visible
100ms  → Eyebrow badge scaleIn
200ms  → Headline baris 1 fadeInUp
280ms  → Headline baris 2 fadeInUp
360ms  → Headline baris 3 fadeInUp
450ms  → Tagline badge fadeIn
550ms  → CTA button fadeInUp
650ms  → Location line fadeIn
700ms  → Visual kanan fadeIn (lebih lambat, tidak compete)
```

### Stats Counter (S-03)

Angka naik dari 0 ke target saat section masuk viewport. Hanya berjalan sekali (observer di-disconnect setelah trigger).

```
Durasi counter: 1500ms
Easing: ease-out cubic
Delay: stagger 100ms per stat item
```

### Timeline (S-02)

```css
/* Milestone item reveal satu per satu */
.timeline-item {
  opacity: 0;
  transform: translateX(20px);
  transition: opacity 400ms ease-out, transform 400ms ease-out;
}
.timeline-item.visible {
  opacity: 1;
  transform: translateX(0);
}

/* Stagger per item */
.timeline-item:nth-child(1) { transition-delay: 0ms; }
.timeline-item:nth-child(2) { transition-delay: 150ms; }
.timeline-item:nth-child(3) { transition-delay: 300ms; }
.timeline-item:nth-child(4) { transition-delay: 450ms; }
```

### Visi Box (S-04)

- Masuk viewport: `fadeInUp` dengan `scale(0.98) → scale(1)` bersamaan
- Quote mark `❝` muncul sedikit lebih lambat (`200ms delay`) untuk efek "ketik"

### Nilai Cards (S-05 — Dark Section)

```
Card 1: fadeInUp + 0ms delay
Card 2: fadeInUp + 120ms delay
Card 3: fadeInUp + 240ms delay
```

Hover card: `background rgba(255,255,255,0.08)` smooth `200ms` — terlihat jelas di atas dark background.

### Person Cards (S-06)

```
Stagger reveal: 60ms per card
Hover: translateY(-2px) + shadow-md + border accent
Avatar hover: scale(1.05) pada foto/inisial
```

---

## 12. SEO & Meta Tags

```html
<title>Tentang Kami — Kodeflow Tech | PT Kodeflow Digital Indonesia</title>
<meta name="description"
  content="Kodeflow Tech didirikan 2022 di Pasuruan, Jawa Timur. Kami adalah dedicated IT team provider dan software house yang hadir tidak hanya saat build — tapi saat maintain, iterate, dan scale bersama bisnis Anda." />

<meta property="og:title"
  content="Tentang Kami — Kodeflow Tech | PT Kodeflow Digital Indonesia" />
<meta property="og:description"
  content="Kenali tim di balik Kodeflow Tech — visi, misi, nilai perusahaan, dan 50+ IT Professionals yang siap menjadi bagian dari tim Anda." />
<meta property="og:image"   content="/og-about.png" />
<meta property="og:url"     content="https://kodeflow.tech/about" />

<link rel="canonical" href="https://kodeflow.tech/about" />

<!-- Breadcrumb -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home",  "item": "https://kodeflow.tech" },
    { "@type": "ListItem", "position": 2, "name": "About", "item": "https://kodeflow.tech/about" }
  ]
}
</script>

<!-- Organization detail — lebih lengkap dari homepage -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "PT Kodeflow Digital Indonesia",
  "alternateName": "Kodeflow Tech",
  "url": "https://kodeflow.tech",
  "logo": "https://kodeflow.tech/logo.png",
  "description": "Dedicated IT Team dan Custom Software Development untuk bisnis yang scaling di Indonesia",
  "foundingDate": "2022",
  "numberOfEmployees": { "@type": "QuantitativeValue", "value": 50 },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Pasuruan",
    "addressRegion": "Jawa Timur",
    "addressCountry": "ID"
  },
  "slogan": "We Build. We Maintain. You Scale.",
  "knowsAbout": [
    "Software Development", "IT Outsourcing", "Dedicated IT Team",
    "ERP Development", "Mobile App Development", "AI Automation"
  ]
}
</script>
```

---

## 13. Checklist Sign-off

### Konten
- [ ] Foto/visual hero sudah disiapkan — foto tim di kantor atau ilustrasi workspace
- [ ] Narasi "Cerita Kami" sudah direview oleh founder/leadership
- [ ] Timeline milestone sudah akurat (tahun, fakta)
- [ ] Data supervisor: nama, jabatan, foto/avatar, skill sudah dikumpulkan
- [ ] Data PM: nama, jabatan, foto/avatar sudah dikumpulkan
- [ ] Breakdown angka developer per posisi sudah akurat
- [ ] Semua anggota tim yang ditampilkan sudah memberikan persetujuan
- [ ] Copy visi dan misi konsisten dengan dokumen `Kodeflow_Tech_Visi_Misi.docx`

### Desain
- [ ] Dark section (S-05 Nilai) contrast ratio teks sudah dicek — minimum WCAG AA
- [ ] Stats counter animation smooth di semua browser
- [ ] Timeline tidak overflow di mobile — scroll atau stack vertikal
- [ ] Person card avatar sudah konsisten ukurannya (80×80px, lingkaran)
- [ ] Developer count box responsive — 3×2 grid collapse ke 2×3 di mobile
- [ ] OG Image About `1200×630px` sudah dibuat (`/og-about.png`)

### Teknikal
- [ ] Counter animation di-disconnect setelah triggered (tidak re-animate saat scroll balik)
- [ ] Timeline Intersection Observer threshold tepat
- [ ] Structured data Organization divalidasi di Google Rich Results Test
- [ ] Foto tim sudah dioptimasi — WebP, ukuran ≤ 100KB per foto
- [ ] Avatar fallback (inisial) berfungsi jika foto tidak ada atau gagal load
- [ ] Canonical URL benar (`/about`)

### Performance
- [ ] Foto tim di-lazy load semua
- [ ] LCP < 2.5 detik (pastikan foto hero tidak jadi LCP bottleneck)
- [ ] Person cards tidak menyebabkan layout shift saat gambar load

---

*We Build. We Maintain. You Scale.*
**PT Kodeflow Digital Indonesia — Pasuruan, Jawa Timur — Est. 2022**
*PRD UI About v1.0 — Dokumen hidup, update sesuai feedback review*
