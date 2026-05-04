# PRD UI — Blog Page
**Kodeflow Tech Website · v1.0 · PT Kodeflow Digital Indonesia · April 2025**
*Dokumen ini adalah acuan desain dan copy untuk halaman `/blog` dan `/blog/[slug]`*

---

## Daftar Isi

1. [Overview Halaman](#1-overview-halaman)
2. [Strategi Konten Blog](#2-strategi-konten-blog)
3. [Wireframe — Blog Index `/blog`](#3-wireframe--blog-index-blog)
4. [S-01 · Hero Blog Index](#4-s-01--hero-blog-index)
5. [S-02 · Filter Kategori](#5-s-02--filter-kategori)
6. [S-03 · Grid Artikel](#6-s-03--grid-artikel)
7. [S-04 · Pagination](#7-s-04--pagination)
8. [S-05 · CTA Section Blog](#8-s-05--cta-section-blog)
9. [S-06 · Footer](#9-s-06--footer)
10. [Wireframe — Blog Detail `/blog/[slug]`](#10-wireframe--blog-detail-blogslug)
11. [Artikel Detail — Header](#11-artikel-detail--header)
12. [Artikel Detail — Body & Sidebar](#12-artikel-detail--body--sidebar)
13. [Artikel Detail — Related Articles](#13-artikel-detail--related-articles)
14. [Artikel Detail — CTA](#14-artikel-detail--cta)
15. [CMS & Struktur Konten](#15-cms--struktur-konten)
16. [Interaction & Animation Notes](#16-interaction--animation-notes)
17. [SEO & Meta Tags](#17-seo--meta-tags)
18. [Ide Artikel Pertama (Content Roadmap)](#18-ide-artikel-pertama-content-roadmap)
19. [Checklist Sign-off](#19-checklist-sign-off)

---

## 1. Overview Halaman

| Atribut | Detail |
|---|---|
| **URL Index** | `/blog` |
| **URL Detail** | `/blog/[slug]` |
| **Tujuan utama** | SEO-driven content marketing — menarik traffic organik dari calon klien yang sedang mencari informasi |
| **Tujuan sekunder** | Membangun authority Kodeflow Tech sebagai thought leader di IT outsourcing dan software development Indonesia |
| **Target pengguna** | Pemilik bisnis / manajer yang mencari informasi sebelum memutuskan vendor IT |
| **Primary CTA** | "Konsultasi Gratis" — di setiap artikel, di sidebar, di akhir halaman |
| **Tone artikel** | Edukatif, praktis, langsung bisa diaplikasikan — bukan akademis atau terlalu teknikal |
| **Status v1.0** | Halaman dibuild, tapi launch berbarengan dengan minimal 5 artikel pertama yang sudah siap |

### Kenapa Blog Penting untuk Kodeflow Tech

Calon klien Kodeflow Tech — pemilik bisnis dan manajer — sering memulai perjalanan mereka dengan Google. Mereka tidak langsung search *"jasa IT outsourcing"*, tapi mereka search:

- *"berapa biaya hire developer Indonesia"*
- *"cara pilih vendor software yang bisa dipercaya"*
- *"perbedaan IT outsourcing vs hire sendiri"*
- *"kenapa sistem ERP perusahaan saya tidak dipakai"*

Blog adalah cara Kodeflow Tech **ada di sana** saat pertanyaan itu muncul — sebelum mereka bahkan tahu nama Kodeflow Tech.

---

## 2. Strategi Konten Blog

### 2.1 Tiga Pilar Konten

| Pilar | Tujuan | Contoh Topik |
|---|---|---|
| **Pilar 1: Edukasi IT untuk Bisnis** | Menjawab pertanyaan yang dicari calon klien non-teknikal | "Apa itu IT outsourcing?", "ERP vs spreadsheet", "Tanda sistem IT Anda sudah perlu diganti" |
| **Pilar 2: Panduan Praktis** | Memberikan nilai nyata yang bisa langsung digunakan | "Checklist sebelum hire developer", "Template SLA untuk vendor IT", "Cara hitung ROI digitalisasi" |
| **Pilar 3: Insight & Opini** | Membangun authority dan diferensiasi Kodeflow | "Kenapa banyak proyek IT gagal di Indonesia", "Kami ubah cara kerja ini setelah dapat feedback dari klien" |

### 2.2 Kategori Artikel

| ID | Kategori | Warna | Deskripsi |
|---|---|---|---|
| `it-bisnis` | IT untuk Bisnis | `primary-800` navy | Artikel edukasi untuk pemilik bisnis non-teknikal |
| `panduan` | Panduan & Tips | `#085041` green | How-to, checklist, template praktis |
| `industri` | Insight Industri | `#633806` amber | Tren teknologi, opini, analisis pasar |
| `studi-kasus` | Studi Kasus | `#3C3489` purple | Cerita proyek nyata (dengan izin klien) |
| `kodeflow` | Dari Kodeflow | `neutral-700` | Update internal, cara kerja, behind the scenes |

### 2.3 Format Artikel

| Format | Panjang | Cocok untuk |
|---|---|---|
| Artikel informatif | 800–1500 kata | Edukasi umum, definisi, perbandingan |
| Panduan lengkap | 1500–3000 kata | How-to mendalam, checklist, tutorial |
| Opini / insight | 500–1000 kata | Pendapat tim, analisis tren |
| Studi kasus | 1000–2000 kata | Hasil proyek nyata dengan data |

---

## 3. Wireframe — Blog Index `/blog`

```
┌─────────────────────────────────────────────────────┐
│  S-00  NAVBAR (sticky)                              │
├─────────────────────────────────────────────────────┤
│                                                     │
│  S-01  HERO BLOG INDEX                              │
│                                                     │
│  [eyebrow]                                          │
│  Insights untuk bisnis                              │
│  yang sedang scaling.                               │
│                                                     │
│  [subheadline]                                      │
│  [Search box]                                       │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  S-02  FILTER KATEGORI                              │
│                                                     │
│  [Semua] [IT Bisnis] [Panduan] [Industri]           │
│  [Studi Kasus] [Dari Kodeflow]                      │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  S-03  GRID ARTIKEL                                 │
│                                                     │
│  ┌────────────────────────────────────────────┐     │
│  │  ARTIKEL FEATURED (full width)             │     │
│  │  [Thumbnail besar] + [Meta + Judul + Desc] │     │
│  └────────────────────────────────────────────┘     │
│                                                     │
│  ┌──────────────┐ ┌──────────────┐ ┌────────────┐  │
│  │  Artikel 2   │ │  Artikel 3   │ │  Artikel 4 │  │
│  │  [Thumbnail] │ │  [Thumbnail] │ │ [Thumbnail]│  │
│  │  [Meta]      │ │  [Meta]      │ │  [Meta]    │  │
│  │  [Judul]     │ │  [Judul]     │ │  [Judul]   │  │
│  │  [Desc]      │ │  [Desc]      │ │  [Desc]    │  │
│  └──────────────┘ └──────────────┘ └────────────┘  │
│                                                     │
│  ┌──────────────┐ ┌──────────────┐ ┌────────────┐  │
│  │  Artikel 5   │ │  Artikel 6   │ │  Artikel 7 │  │
│  └──────────────┘ └──────────────┘ └────────────┘  │
│                                                     │
│  ... dst                                            │
│                                                     │
├─────────────────────────────────────────────────────┤
│  S-04  PAGINATION                                   │
├─────────────────────────────────────────────────────┤
│  S-05  CTA SECTION BLOG                             │
├─────────────────────────────────────────────────────┤
│  S-06  FOOTER                                       │
└─────────────────────────────────────────────────────┘
```

---

## 4. S-01 · Hero Blog Index

### Layout

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  [eyebrow]                                                   │
│                                                              │
│  Insights untuk bisnis                                       │
│  yang sedang scaling.                                        │
│                                                              │
│  Artikel praktis tentang IT, digitalisasi, dan               │
│  cara membangun tim teknologi yang bisa diandalkan.          │
│                                                              │
│  ┌────────────────────────────────────────────────────┐      │
│  │ 🔍  Cari artikel...                          [→]   │      │
│  └────────────────────────────────────────────────────┘      │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Spesifikasi

| Atribut | Nilai |
|---|---|
| Background | `neutral-50` + gradient mesh sangat halus |
| Padding | `section-py` (96px) — lebih pendek dari hero halaman lain |
| Headline | `text-4xl` desktop · `text-3xl` mobile, center align |
| Subheadline | `text-lg`, `neutral-500`, center, max-width `480px` |
| Search box | Background `neutral-0`, border `neutral-200`, radius `radius-lg`, padding `14px 20px`, shadow `shadow-sm` |
| Search hover | Border `neutral-300` |
| Search focus | Border `accent-500`, ring `accent-100` |
| Search icon | `Search`, `neutral-400`, kiri |
| Submit icon | `ArrowRight`, `primary-800`, kanan (muncul saat ada input) |
| Max width hero | `640px`, center |

### Copy

| Elemen | Teks |
|---|---|
| Eyebrow | `BLOG` |
| Headline baris 1 | `Insights untuk bisnis` |
| Headline baris 2 | `yang sedang scaling.` |
| Subheadline | `Artikel praktis tentang IT, digitalisasi, dan cara membangun tim teknologi yang bisa diandalkan.` |
| Search placeholder | `Cari artikel, topik, atau kata kunci...` |

---

## 5. S-02 · Filter Kategori

### Layout

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  ┌──────┐ ┌───────────┐ ┌──────────┐ ┌──────────┐           │
│  │ Semua│ │ IT Bisnis │ │ Panduan  │ │ Industri │           │
│  └──────┘ └───────────┘ └──────────┘ └──────────┘           │
│  ┌─────────────┐ ┌───────────────┐                           │
│  │ Studi Kasus │ │ Dari Kodeflow │                           │
│  └─────────────┘ └───────────────┘                           │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Spesifikasi

| Atribut | Nilai |
|---|---|
| Background | `neutral-0` |
| Padding | `20px 0 0` (dekat dengan grid artikel di bawahnya) |
| Filter style | Pill buttons, `border-radius: full` |
| Default | Border `neutral-200`, teks `neutral-500` |
| Active | Background warna kategori, teks putih |
| Hover | Border `neutral-400`, teks `neutral-800` |
| Count badge | `(12)` kecil di sebelah label — opsional |
| Mobile | Horizontal scroll, `overflow-x: auto`, no scrollbar visible |

### Behavior Filter

```javascript
// Filter artikel berdasarkan kategori
// v1.0: client-side filter jika jumlah artikel < 50
// v2.0: server-side filter dengan query param ?kategori=panduan

function filterArticles(kategori) {
  const cards = document.querySelectorAll('.article-card');
  cards.forEach(card => {
    const match = kategori === 'semua' ||
                  card.dataset.kategori === kategori;
    card.style.display = match ? 'block' : 'none';
  });

  // Update URL tanpa reload
  const url = new URL(window.location);
  if (kategori === 'semua') {
    url.searchParams.delete('kategori');
  } else {
    url.searchParams.set('kategori', kategori);
  }
  window.history.pushState({}, '', url);
}

// Restore filter dari URL saat page load
const params = new URLSearchParams(window.location.search);
const activeKategori = params.get('kategori') || 'semua';
filterArticles(activeKategori);
```

---

## 6. S-03 · Grid Artikel

### Layout

**Artikel Featured (1 artikel, full width, di atas):**

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  ┌────────────────────────┐  ┌──────────────────────────┐   │
│  │                        │  │ [badge kategori]          │   │
│  │   Thumbnail Featured   │  │                           │   │
│  │   (16:9, full height)  │  │ Judul artikel featured    │   │
│  │                        │  │ yang bisa 2 baris         │   │
│  │                        │  │                           │   │
│  │                        │  │ Deskripsi singkat 2–3     │   │
│  │                        │  │ kalimat yang menjelaskan  │   │
│  │                        │  │ apa yang akan dipelajari  │   │
│  │                        │  │                           │   │
│  │                        │  │ [Avatar] Nama · Tanggal   │   │
│  │                        │  │ · ⏱ 5 menit baca          │   │
│  │                        │  │                           │   │
│  │                        │  │ [Baca Artikel →]          │   │
│  └────────────────────────┘  └──────────────────────────┘   │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

**Grid Artikel Biasa (3 kolom):**

```
┌─────────────────────┐  ┌─────────────────────┐  ┌──────────┐
│                     │  │                     │  │          │
│  [Thumbnail 16:9]   │  │  [Thumbnail 16:9]   │  │ [Thumb]  │
│                     │  │                     │  │          │
│  [badge kategori]   │  │  [badge kategori]   │  │ [badge]  │
│                     │  │                     │  │          │
│  Judul artikel yang │  │  Judul artikel yang │  │  Judul   │
│  bisa sampai 2 baris│  │  bisa sampai 2 baris│  │  ...     │
│                     │  │                     │  │          │
│  Desc 2 kalimat...  │  │  Desc 2 kalimat...  │  │  Desc... │
│                     │  │                     │  │          │
│  [Avatar] Nama · 4m │  │  [Avatar] Nama · 7m │  │ [Meta]   │
└─────────────────────┘  └─────────────────────┘  └──────────┘
```

### Spesifikasi Article Card

| Atribut | Nilai |
|---|---|
| Card border | `1px solid neutral-200` |
| Card radius | `radius-xl` |
| Card overflow | `hidden` |
| Card hover | `border-color: neutral-300` + `shadow-md` + `translateY(-2px)` |
| Thumbnail ratio | `16:9`, object-fit `cover` |
| Thumbnail hover | `scale(1.03)` dalam `300ms` (parent overflow hidden) |
| Category badge | Pill, background per warna kategori, teks putih, `text-xs` |
| Judul | `font-display`, `font-semibold`, `neutral-800`, max 2 baris dengan `line-clamp-2` |
| Deskripsi | `font-body`, `neutral-500`, `text-sm`, max 2–3 baris `line-clamp-3` |
| Meta row | Avatar `24×24px` + nama + separator `·` + tanggal + separator `·` + waktu baca |
| Waktu baca | Dihitung otomatis: `Math.ceil(wordCount / 200)` menit |
| Padding konten card | `20px` |

### Featured Card Tambahan

| Atribut | Nilai |
|---|---|
| Layout | Split 50/50 horizontal |
| Thumbnail | Full height kiri, `object-fit: cover` |
| Radius | `radius-2xl` |
| Judul | `text-2xl`, `font-bold` |
| Desc | `text-base`, max 3 baris |
| CTA | `btn-ghost` — "Baca Artikel →" |
| Tag "Featured" | Badge `warning-500` di pojok thumbnail |

---

## 7. S-04 · Pagination

### Layout

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│     ← Sebelumnya    [1]  [2]  [3]  ...  [8]   Berikutnya →  │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Spesifikasi

| Atribut | Nilai |
|---|---|
| Artikel per halaman | 9 artikel (1 featured + 8 grid 3 kolom) |
| Page number | `40×40px`, radius `radius-md` |
| Page aktif | Background `primary-800`, teks putih |
| Page hover | Background `neutral-100` |
| Prev/Next | Button dengan icon `ChevronLeft` / `ChevronRight` |
| Disabled state | Opacity `0.35`, cursor `not-allowed` |
| Mobile | Hanya tampilkan Prev · halaman aktif · Next |

> **Untuk Next.js:** Gunakan file-based routing dengan `page` query param. URL: `/blog?page=2`. Static generation untuk halaman pertama, dynamic untuk sisanya.

---

## 8. S-05 · CTA Section Blog

### Copy khusus untuk halaman Blog

Pengunjung blog adalah orang yang sedang *belajar* — CTA harus terasa seperti kelanjutan natural dari konten yang dibaca, bukan interrupt yang mengganggu.

| Elemen | Teks |
|---|---|
| Headline | `Artikel ini relevan dengan bisnis Anda?` |
| Subheadline | `Mari ngobrol langsung. Konsultasi gratis untuk membahas kebutuhan IT bisnis Anda — tanpa tekanan, tanpa komitmen.` |
| CTA Primary | `Konsultasi Gratis →` |
| CTA Secondary | `Lihat Layanan Kami` |
| Trust line | `Sudah dipercaya 5 bisnis yang scaling · Respon < 24 jam` |

---

## 9. S-06 · Footer

Identik dengan Footer di halaman lain.

---

## 10. Wireframe — Blog Detail `/blog/[slug]`

```
┌─────────────────────────────────────────────────────┐
│  NAVBAR (sticky)                                    │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ARTIKEL HEADER                                     │
│  [Breadcrumb: Home › Blog › Judul]                  │
│  [Badge kategori]                                   │
│  [Judul artikel — besar]                            │
│  [Deskripsi singkat / intro]                        │
│  [Meta: Avatar + Nama + Tanggal + Waktu baca]       │
│  [Thumbnail full width]                             │
│                                                     │
├─────────────────────────────────────────────────────┤
│                          │                          │
│  ARTIKEL BODY            │  SIDEBAR                 │
│  (65% width)             │  (35% width)             │
│                          │                          │
│  [Konten artikel]        │  [Table of Contents]     │
│  [H2, H3, paragraf,      │  [sticky saat scroll]    │
│   list, blockquote,      │                          │
│   code, gambar]          │  ────────────────         │
│                          │                          │
│                          │  [CTA Card]              │
│                          │  Konsultasi Gratis       │
│                          │                          │
│                          │  ────────────────         │
│                          │                          │
│                          │  [Artikel Terkait mini]  │
│                          │  3 artikel kecil         │
│                          │                          │
├─────────────────────────────────────────────────────┤
│                                                     │
│  SHARE BAR                                          │
│  [Share: WhatsApp · LinkedIn · Copy Link]           │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  RELATED ARTICLES                                   │
│  [3 artikel terkait — card grid]                    │
│                                                     │
├─────────────────────────────────────────────────────┤
│  CTA SECTION (sama dengan blog index)               │
├─────────────────────────────────────────────────────┤
│  FOOTER                                             │
└─────────────────────────────────────────────────────┘
```

---

## 11. Artikel Detail — Header

### Layout

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  Home › Blog › [Kategori] › [Judul pendek]                   │
│                                                              │
│  [Badge kategori]                                            │
│                                                              │
│  Judul artikel yang bisa sampai dua baris                    │
│  dan tetap terbaca dengan baik                               │
│                                                              │
│  Ringkasan singkat artikel dalam 1–2 kalimat                 │
│  yang menjelaskan apa yang akan dipelajari pembaca.          │
│                                                              │
│  ┌───────┐  Nama Penulis · 12 April 2025 · ⏱ 5 menit baca   │
│  │Avatar │                                                   │
│  └───────┘                                                   │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐    │
│  │                                                      │    │
│  │            Thumbnail / Cover Image                   │    │
│  │            (16:9, full width, max-height 480px)      │    │
│  │                                                      │    │
│  └──────────────────────────────────────────────────────┘    │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Spesifikasi

| Atribut | Nilai |
|---|---|
| Background | `neutral-0` |
| Max width header | `800px`, center |
| Breadcrumb | `text-sm`, `neutral-400`, separator `›`, dengan link |
| Judul | `font-display`, `text-4xl` desktop · `text-3xl` mobile, `font-bold`, `neutral-900`, `leading-tight` |
| Intro/summary | `font-body`, `text-lg`, `neutral-500`, `leading-relaxed` |
| Avatar penulis | `40×40px`, lingkaran |
| Meta teks | `text-sm`, `neutral-400` |
| Thumbnail | Full width, `radius-xl`, `shadow-md`, aspect ratio `16:9` |
| Thumbnail alt text | Wajib diisi — untuk SEO dan aksesibilitas |

---

## 12. Artikel Detail — Body & Sidebar

### Layout Body (65%)

#### Typography Artikel

```css
/* Prose styles untuk konten artikel */
.prose {
  font-family: var(--font-body);
  font-size: 1.0625rem;    /* 17px — sedikit lebih besar dari base */
  line-height: 1.75;
  color: var(--color-neutral-700);
  max-width: 680px;
}

.prose h2 {
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  font-weight: var(--weight-bold);
  color: var(--color-neutral-800);
  margin-top: 2.5em;
  margin-bottom: 0.75em;
  line-height: var(--leading-tight);
  /* Garis aksen kiri */
  padding-left: 16px;
  border-left: 3px solid var(--color-accent-500);
}

.prose h3 {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: var(--weight-semibold);
  color: var(--color-neutral-800);
  margin-top: 2em;
  margin-bottom: 0.5em;
}

.prose p {
  margin-bottom: 1.5em;
}

.prose ul, .prose ol {
  margin-bottom: 1.5em;
  padding-left: 1.5em;
}

.prose li {
  margin-bottom: 0.5em;
}

.prose li::marker {
  color: var(--color-accent-500);
}

/* Blockquote */
.prose blockquote {
  margin: 2em 0;
  padding: 20px 24px;
  background: var(--color-primary-50);
  border-left: 4px solid var(--color-primary-800);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  font-style: italic;
  color: var(--color-primary-800);
}

/* Inline code */
.prose code:not(pre code) {
  font-family: var(--font-mono);
  font-size: 0.875em;
  background: var(--color-neutral-100);
  color: var(--color-primary-800);
  padding: 2px 6px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-neutral-200);
}

/* Code block */
.prose pre {
  background: var(--color-neutral-900);
  color: var(--color-neutral-100);
  padding: 20px 24px;
  border-radius: var(--radius-lg);
  overflow-x: auto;
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  line-height: 1.7;
  margin: 2em 0;
}

/* Gambar dalam artikel */
.prose img {
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  margin: 2em auto;
  display: block;
  max-width: 100%;
}

/* Caption gambar */
.prose figcaption {
  text-align: center;
  font-size: var(--text-sm);
  color: var(--color-neutral-400);
  margin-top: -1em;
  margin-bottom: 2em;
  font-style: italic;
}

/* Highlight box (callout) */
.prose .callout {
  padding: 16px 20px;
  border-radius: var(--radius-lg);
  margin: 2em 0;
  display: flex;
  gap: 12px;
  align-items: flex-start;
}
.prose .callout-info    { background: var(--color-accent-100); border: 1px solid var(--color-accent-300); }
.prose .callout-warning { background: var(--color-warning-100); border: 1px solid #FCD34D; }
.prose .callout-tip     { background: var(--color-success-100); border: 1px solid #86EFAC; }

/* Tabel */
.prose table {
  width: 100%;
  border-collapse: collapse;
  margin: 2em 0;
  font-size: var(--text-sm);
}
.prose th {
  background: var(--color-neutral-100);
  font-family: var(--font-display);
  font-weight: var(--weight-semibold);
  text-align: left;
  padding: 10px 16px;
  border-bottom: 2px solid var(--color-neutral-200);
}
.prose td {
  padding: 10px 16px;
  border-bottom: 1px solid var(--color-neutral-200);
}
.prose tr:hover td { background: var(--color-neutral-50); }
```

### Layout Sidebar (35%)

```
┌────────────────────────────────┐
│  DAFTAR ISI                    │
│  (sticky: top 64px + 20px)     │
│                                │
│  · Heading 2 pertama           │
│  · Heading 2 kedua             │
│    · Heading 3 di dalamnya     │
│  · Heading 2 ketiga            │
│  · Kesimpulan                  │
│                                │
│  ──────────────────────        │
│                                │
│  CTA CARD                      │
│  ┌────────────────────────┐    │
│  │ Butuh tim IT yang bisa │    │
│  │ handle ini untuk       │    │
│  │ bisnis Anda?           │    │
│  │                        │    │
│  │ [Konsultasi Gratis →]  │    │
│  │ Gratis · Tanpa komitmen│    │
│  └────────────────────────┘    │
│                                │
│  ──────────────────────        │
│                                │
│  BACA JUGA                     │
│  · Judul artikel 1             │
│  · Judul artikel 2             │
│  · Judul artikel 3             │
│                                │
└────────────────────────────────┘
```

### Spesifikasi Sidebar

| Elemen | Spesifikasi |
|---|---|
| Sticky | `top: 84px` (navbar 64px + 20px gap) |
| TOC container | Border kiri `2px solid neutral-200`, padding-left `16px` |
| TOC link | `text-sm`, `neutral-500`, hover `neutral-800` |
| TOC link aktif | `primary-800`, `font-medium`, border-left `2px solid accent-500` |
| TOC H3 | Indent `12px`, `text-xs` |
| CTA Card | Background `primary-800`, teks putih, radius `xl`, padding `24px` |
| CTA Card subtext | `primary-200` |
| CTA Card button | Background putih, teks `primary-800` |
| Baca Juga | Link list sederhana, `text-sm`, hover `primary-800` |

### TOC Auto-generation

```javascript
// Generate TOC dari H2 dan H3 dalam artikel
function generateTOC() {
  const headings = document.querySelectorAll('.prose h2, .prose h3');
  const toc = document.querySelector('.toc-list');

  headings.forEach((heading, i) => {
    // Add ID ke heading jika belum ada
    if (!heading.id) {
      heading.id = `section-${i}`;
    }

    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `#${heading.id}`;
    a.textContent = heading.textContent;
    a.className = heading.tagName === 'H3' ? 'toc-h3' : 'toc-h2';
    li.appendChild(a);
    toc.appendChild(li);
  });
}

// Highlight TOC link saat scroll
const headingEls = document.querySelectorAll('.prose h2, .prose h3');
const tocLinks = document.querySelectorAll('.toc-list a');

const tocObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        tocLinks.forEach(link => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${entry.target.id}`
          );
        });
      }
    });
  },
  { rootMargin: '-64px 0px -70% 0px', threshold: 0 }
);

headingEls.forEach(el => tocObserver.observe(el));
```

### Share Bar

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  Bagikan artikel ini:                                        │
│                                                              │
│  [WhatsApp] [LinkedIn] [Copy Link ✓]                         │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

**Share URLs:**
```javascript
const shareUrls = {
  whatsapp: `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`,
  linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  copyLink: () => {
    navigator.clipboard.writeText(url);
    // Ubah teks tombol jadi "Tersalin! ✓" selama 2 detik
  }
};
```

---

## 13. Artikel Detail — Related Articles

### Layout

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  Artikel terkait                                             │
│                                                              │
│  ┌─────────────────────┐ ┌─────────────────────┐ ┌───────┐  │
│  │ [Thumbnail]         │ │ [Thumbnail]         │ │ [Thumb│  │
│  │ [badge]             │ │ [badge]             │ │ [badg]│  │
│  │ Judul artikel...    │ │ Judul artikel...    │ │ Judul │  │
│  │ [Meta]              │ │ [Meta]              │ │ [Meta]│  │
│  └─────────────────────┘ └─────────────────────┘ └───────┘  │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

**Logic Related Articles:**
1. Artikel dari kategori yang sama, exclude artikel saat ini
2. Jika kurang dari 3, tambah artikel dari kategori lain berdasarkan recency
3. Maksimal selalu 3 artikel

---

## 14. Artikel Detail — CTA

Identik dengan CTA Section di blog index. Copy yang sama:

> *"Artikel ini relevan dengan bisnis Anda? Mari ngobrol langsung..."*

---

## 15. CMS & Struktur Konten

### 15.1 Rekomendasi CMS

| Pilihan | Pros | Cons | Rekomendasi |
|---|---|---|---|
| **Sanity.io** | Flexible schema, real-time, image CDN, GROQ query | Setup awal lebih kompleks | ✅ Direkomendasikan untuk v1.0 |
| **Notion API** | Tim sudah familiar, gratis, mudah pakai | API lambat, tidak untuk produksi skala besar | Opsional jika budget terbatas |
| **MDX files** | Zero cost, version control, performa optimal | Non-developer tidak bisa edit | Hanya jika tim teknikal yang kelola konten |
| **Contentful** | Mature, enterprise-ready | Mahal untuk skala kecil | Overkill untuk v1.0 |

### 15.2 Schema Artikel (Sanity)

```javascript
// schemas/article.js
export default {
  name: 'article',
  title: 'Artikel',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Judul Artikel',
      type: 'string',
      validation: Rule => Rule.required().max(80)
    },
    {
      name: 'slug',
      title: 'Slug URL',
      type: 'slug',
      options: { source: 'title', maxLength: 80 },
      validation: Rule => Rule.required()
    },
    {
      name: 'kategori',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'IT untuk Bisnis',  value: 'it-bisnis' },
          { title: 'Panduan & Tips',   value: 'panduan' },
          { title: 'Insight Industri', value: 'industri' },
          { title: 'Studi Kasus',      value: 'studi-kasus' },
          { title: 'Dari Kodeflow',    value: 'kodeflow' },
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'summary',
      title: 'Ringkasan (untuk card dan meta description)',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required().max(160)
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail / Cover Image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required()
    },
    {
      name: 'penulis',
      title: 'Penulis',
      type: 'reference',
      to: [{ type: 'author' }]
    },
    {
      name: 'publishedAt',
      title: 'Tanggal Publish',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'featured',
      title: 'Tampilkan sebagai Featured?',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'body',
      title: 'Konten Artikel',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } },
        { type: 'code' },
      ]
    },
    {
      name: 'seoTitle',
      title: 'SEO Title (opsional, override judul)',
      type: 'string',
      validation: Rule => Rule.max(60)
    },
    {
      name: 'seoDescription',
      title: 'SEO Description (opsional, override summary)',
      type: 'text',
      rows: 2,
      validation: Rule => Rule.max(160)
    },
  ],
  preview: {
    select: { title: 'title', media: 'thumbnail', subtitle: 'kategori' }
  }
}
```

### 15.3 Schema Author (Sanity)

```javascript
// schemas/author.js
export default {
  name: 'author',
  title: 'Penulis',
  type: 'document',
  fields: [
    { name: 'name',    title: 'Nama',   type: 'string' },
    { name: 'jabatan', title: 'Jabatan', type: 'string' },
    { name: 'avatar',  title: 'Foto',   type: 'image' },
    { name: 'bio',     title: 'Bio Singkat', type: 'text', rows: 2 },
  ]
}
```

### 15.4 Estimasi Waktu Baca

```javascript
// Dihitung dari word count konten
function estimateReadTime(content) {
  const wordsPerMinute = 200; // rata-rata pembaca Indonesia
  const wordCount = content
    .replace(/<[^>]*>/g, '')  // strip HTML
    .split(/\s+/)
    .filter(Boolean).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} menit baca`;
}
```

---

## 16. Interaction & Animation Notes

### Blog Index

```
Page load:
  0ms  → Navbar
  100ms → Hero text fadeInUp
  200ms → Search box fadeInUp
  300ms → Filter tabs fadeInUp
  400ms → Featured card fadeInUp
  500ms → Article grid stagger (60ms per card)
```

**Filter kategori:**
- Klik filter → artikel yang tidak sesuai fade out `opacity 0, scale 0.95` (150ms)
- Artikel yang sesuai fade in `opacity 1, scale 1` (200ms, delay 100ms)
- Smooth, tidak ada reflow kasar

**Search:**
- Saat user mengetik (debounce 300ms): filter artikel berdasarkan judul dan konten
- Jika tidak ada hasil: tampilkan empty state dengan ilustrasi dan CTA
- Search tidak submit form — filter real-time di client side (v1.0)

**Empty state search:**
```
[Ilustrasi: kaca pembesar dengan tanda tanya]

Tidak ada artikel untuk "[query]"

Coba kata kunci lain, atau:
[Konsultasi langsung dengan tim kami →]
```

### Blog Detail

**TOC highlight saat scroll:** smooth update `color` dan `border-left` tanpa jump.

**Reading progress bar:**
```css
/* Progress bar tipis di bagian atas halaman saat scroll di artikel */
.reading-progress {
  position: fixed;
  top: 64px; /* tepat di bawah navbar */
  left: 0;
  height: 3px;
  background: var(--color-accent-500);
  z-index: 45;
  transition: width 0.1s linear;
  transform-origin: left;
}
```

```javascript
window.addEventListener('scroll', () => {
  const article = document.querySelector('.prose');
  const { top, height } = article.getBoundingClientRect();
  const scrolled = Math.max(0, -top);
  const progress = Math.min(scrolled / (height - window.innerHeight), 1);
  document.querySelector('.reading-progress').style.width = `${progress * 100}%`;
});
```

**Copy Link button:**
- Klik → teks berubah jadi `"Tersalin! ✓"` + warna `success-500`
- Setelah 2 detik kembali ke teks semula

**Sidebar sticky stop:**
Sidebar berhenti sticky saat mencapai footer artikel (tidak overlap Related Articles).

---

## 17. SEO & Meta Tags

### Blog Index

```html
<title>Blog — Insights IT untuk Bisnis | Kodeflow Tech</title>
<meta name="description"
  content="Artikel dan panduan praktis tentang IT outsourcing, digitalisasi bisnis, dan membangun tim teknologi yang bisa diandalkan. Dari tim Kodeflow Tech, Pasuruan." />

<meta property="og:title"       content="Blog Kodeflow Tech — Insights IT untuk Bisnis" />
<meta property="og:description" content="Artikel praktis tentang IT, digitalisasi, dan cara membangun tim teknologi yang bisa diandalkan." />
<meta property="og:image"       content="/og-blog.png" />
<meta property="og:url"         content="https://kodeflow.tech/blog" />
<link rel="canonical"           href="https://kodeflow.tech/blog" />
```

### Artikel Detail (dinamis per artikel)

```html
<!-- Di-generate dari data CMS per artikel -->
<title>{seoTitle || title} | Blog Kodeflow Tech</title>
<meta name="description" content="{seoDescription || summary}" />

<meta property="og:title"       content="{title}" />
<meta property="og:description" content="{summary}" />
<meta property="og:image"       content="{thumbnail.url}?w=1200&h=630&fit=crop" />
<meta property="og:url"         content="https://kodeflow.tech/blog/{slug}" />
<meta property="og:type"        content="article" />
<meta property="article:published_time" content="{publishedAt}" />
<meta property="article:author"         content="{penulis.name}" />
<meta property="article:section"        content="{kategori}" />

<link rel="canonical" href="https://kodeflow.tech/blog/{slug}" />

<!-- Article structured data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "{title}",
  "description": "{summary}",
  "image": "{thumbnail.url}",
  "datePublished": "{publishedAt}",
  "dateModified": "{updatedAt}",
  "author": {
    "@type": "Person",
    "name": "{penulis.name}",
    "jobTitle": "{penulis.jabatan}"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Kodeflow Tech",
    "logo": { "@type": "ImageObject", "url": "https://kodeflow.tech/logo.png" }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://kodeflow.tech/blog/{slug}"
  }
}
</script>

<!-- Breadcrumb -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kodeflow.tech" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://kodeflow.tech/blog" },
    { "@type": "ListItem", "position": 3, "name": "{title}", "item": "https://kodeflow.tech/blog/{slug}" }
  ]
}
</script>
```

---

## 18. Ide Artikel Pertama (Content Roadmap)

Minimal **5 artikel** harus siap sebelum halaman blog di-launch. Berikut rekomendasi urutan prioritas berdasarkan search volume dan relevansi:

### Batch 1 — Launch (5 Artikel)

| # | Judul | Kategori | Keyword Target | Estimasi |
|---|---|---|---|---|
| 1 | IT Outsourcing vs Hire Sendiri: Mana yang Lebih Hemat untuk Bisnis Anda? | IT Bisnis | `it outsourcing vs hire sendiri` | 1200 kata |
| 2 | 5 Tanda Sistem IT Perusahaan Anda Sudah Perlu Diganti | IT Bisnis | `tanda sistem IT perlu diganti` | 1000 kata |
| 3 | Checklist 10 Poin Sebelum Hire Developer untuk Bisnis Anda | Panduan | `checklist hire developer` | 1500 kata |
| 4 | Berapa Biaya Sebenarnya untuk Punya Developer IT di Perusahaan? | IT Bisnis | `biaya hire developer Indonesia` | 1000 kata |
| 5 | Kenapa Banyak Proyek IT Gagal di Indonesia (dan Cara Menghindarinya) | Insight | `proyek IT gagal Indonesia` | 1200 kata |

### Batch 2 — Bulan 1–2 Setelah Launch

| # | Judul | Kategori |
|---|---|---|
| 6 | Panduan Lengkap ERP untuk Bisnis UKM Indonesia | Panduan |
| 7 | WhatsApp Business API vs WABA: Apa Bedanya dan Mana yang Cocok? | IT Bisnis |
| 8 | Cara Membuat SLA yang Efektif dengan Vendor IT Anda | Panduan |
| 9 | ROI Digitalisasi: Bagaimana Menghitung Keuntungan Nyata dari Sistem IT? | Panduan |
| 10 | Studi Kasus: Bagaimana [Klien X] Memangkas Waktu Proses HR dari 3 Hari ke 30 Menit | Studi Kasus |

> **Catatan Studi Kasus:** Dapatkan izin tertulis dari klien sebelum publish. Sembunyikan data sensitif dan hanya tampilkan angka yang sudah disetujui klien.

---

## 19. Checklist Sign-off

### Konten
- [ ] Minimal 5 artikel batch pertama sudah ditulis, direview, dan disetujui
- [ ] Semua artikel sudah memiliki: judul, slug, kategori, summary (≤160 karakter), thumbnail, dan penulis
- [ ] Thumbnail semua artikel sudah dibuat — ukuran konsisten (1200×630px atau 1200×800px)
- [ ] Data penulis (minimal 1–2 orang) sudah diisi di CMS
- [ ] Satu artikel sudah ditandai sebagai `featured: true`

### CMS & Teknikal
- [ ] Sanity.io (atau CMS pilihan) sudah di-setup dan terkoneksi ke Next.js
- [ ] Schema artikel dan author sudah dibuat dan divalidasi
- [ ] API key Sanity sudah di-setup di environment variables
- [ ] Preview mode aktif — bisa preview artikel draft sebelum publish
- [ ] Image CDN dari Sanity berfungsi dengan parameter transformasi (crop, resize)
- [ ] ISR (Incremental Static Regeneration) di-setup untuk artikel baru otomatis muncul

### Desain
- [ ] Prose styles (typography artikel) sudah ditest dengan konten nyata
- [ ] Blockquote, code block, tabel, callout box sudah ditest tampilannya
- [ ] Sidebar TOC sticky berhenti sebelum footer artikel
- [ ] Reading progress bar smooth dan tidak mengganggu
- [ ] Share buttons berfungsi (WhatsApp, LinkedIn, Copy Link)
- [ ] Empty state search sudah didesain
- [ ] OG Image Blog `1200×630px` sudah dibuat (`/og-blog.png`)
- [ ] Mobile layout artikel (tanpa sidebar) sudah ditest — TOC jadi collapsible di atas artikel

### SEO
- [ ] Artikel structured data (Article schema) tervalidasi di Google Rich Results Test
- [ ] Breadcrumb structured data benar di semua level
- [ ] Setiap artikel punya meta description unik
- [ ] Canonical URL benar untuk semua artikel
- [ ] Sitemap XML menyertakan semua URL artikel (`/blog/[slug]`)
- [ ] robots.txt tidak memblok `/blog`

### Performance
- [ ] Gambar artikel di-lazy load
- [ ] Thumbnail dioptimasi via Sanity CDN (WebP, ukuran tepat)
- [ ] LCP artikel < 2.5 detik (thumbnail tidak jadi bottleneck)
- [ ] Reading progress scroll event di-throttle untuk performa

---

*We Build. We Maintain. You Scale.*
**PT Kodeflow Digital Indonesia — Pasuruan, Jawa Timur — Est. 2022**
*PRD UI Blog v1.0 — Dokumen hidup, update sesuai perkembangan konten*
