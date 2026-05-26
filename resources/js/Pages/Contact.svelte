<script>
  import Navbar from "../Components/Navbar.svelte";
  import CtaFooter from "../Components/CtaFooter.svelte";
  import { t, currentLanguage } from "@/lib/i18n";
  import { fade, fly } from "svelte/transition";
  import { 
    Sparkles, 
    MessageSquare, 
    Mail, 
    Copy, 
    Check, 
    MapPin, 
    Phone, 
    Globe, 
    Scale, 
    ExternalLink,
    X,
    FileText
  } from "lucide-svelte";
  import { page } from "@inertiajs/svelte";

  // State
  let show = true;
  let copied = false;
  let selectedDoc = null; // Holds the path of the expanded legal document

  // Copied alert helper
  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    copied = true;
    setTimeout(() => copied = false, 2000);
  }

  // Legal document data
  $: legalDocs = [
    {
      id: "legalitas",
      title: $currentLanguage === 'id' ? "Sertifikat Legalitas Resmi" : "Official Legal Certificate",
      subtitle: "Kemenkumham & OSS RI",
      image: "/assets/images/Screen Shot 2026-05-15 at 00.32.47 1.png",
      desc: $currentLanguage === 'id' 
        ? "Dokumen perizinan resmi PT Kodeflow Digital Indonesia yang mencakup Nomor Induk Berusaha (NIB) serta keputusan kementerian untuk pelaksanaan operasional dan teknis penyediaan solusi teknologi informasi."
        : "Official licensing document of PT Kodeflow Digital Indonesia including the Business Identification Number (NIB) and ministerial decree for technical operation of IT solutions."
    }
  ];

  // PT Corporate specifications
  const ptSpecs = [
    { label: "Nama Resmi", value: "PT Kodeflow Digital Indonesia" },
    { label: "Bentuk Badan Hukum", value: "Perseroan Terbatas (PT)" },
    { label: "Nomor NIB", value: "0220202534591" },
    { label: "Nomor NPWP", value: "40.123.456.7-643.000" },
    { label: "Keputusan Kemenkumham", value: "AHU-0023456.AH.01.01.Tahun 2022" },
    { label: "Klasifikasi Baku Lapangan Usaha (KBLI)", value: "62019 (Aktivitas Pemrograman Komputer Lainnya)" }
  ];
</script>

<svelte:head>
  <title>{$currentLanguage === 'id' ? 'Hubungi Kami — Solusi Digital Terbaik | Kodeflow Tech' : 'Contact Us — Best Digital Solutions | Kodeflow Tech'}</title>
  <meta name="description" content="Hubungi dedicated IT team dan software house Kodeflow Tech. Temukan kontak resmi, media sosial, Google Maps, dan legalitas PT Kodeflow Digital Indonesia." />
</svelte:head>

<div class="bg-background text-foreground min-h-screen relative noise overflow-x-hidden">
  <Navbar />

  <main class="pt-32 pb-16">
    <!-- Hero Section -->
    <section class="max-w-[var(--max)] mx-auto px-[var(--gutter)] mb-16 text-center">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary-light uppercase tracking-wider mb-6 animate-fade-up">
        <Sparkles class="size-3.5 text-primary-light" />
        <span>{$t.CONTACT_HERO_BADGE || 'HUBUNGI KAMI'}</span>
      </div>

      <h1 class="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-4xl mx-auto leading-tight uppercase animate-fade-up" style="animation-delay: 100ms">
        {$t.CONTACT_HERO_TITLE}
        <span class="text-primary-light italic drop-shadow-[0_0_15px_rgba(247,37,134,0.25)]">
          {$t.CONTACT_HERO_TITLE_HIGHLIGHT}
        </span>
      </h1>

      <p class="font-body text-base md:text-lg text-foreground/75 max-w-2xl mx-auto leading-relaxed animate-fade-up" style="animation-delay: 200ms">
        {$t.CONTACT_HERO_DESC}
      </p>
    </section>

    <!-- Contacts & Socials Grid -->
    <section class="max-w-[var(--max)] mx-auto px-[var(--gutter)] mb-20 animate-fade-up" style="animation-delay: 300ms">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <!-- WhatsApp Card -->
        <a 
          href={`https://wa.me/${page.props.social_links?.whatsapp || '628123456789'}?text=Halo%20Kodeflow%20Tech,%20saya%20tertarik%20untuk%20konsultasi%20proyek%20IT`}
          target="_blank"
          rel="noopener noreferrer"
          class="liquid-glass rounded-3xl p-8 flex flex-col group transition-all duration-500 hover:shadow-xl hover:shadow-green-500/5 hover:translate-y-[-4px] cursor-pointer relative overflow-hidden"
        >
          <div class="absolute -top-12 -right-12 w-32 h-32 bg-green-500/10 rounded-full blur-2xl group-hover:bg-green-500/20 transition-all"></div>
          
          <div class="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <MessageSquare class="size-6 text-green-400" />
          </div>

          <div class="flex items-center gap-2 mb-2">
            <span class="text-xs font-semibold text-green-400 tracking-wider uppercase">WhatsApp Business</span>
            <div class="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-[9px] font-bold text-green-400">
              <span class="size-1.5 rounded-full bg-green-400 animate-ping"></span>
              <span>ONLINE</span>
            </div>
          </div>

          <h3 class="font-display text-2xl font-bold text-white group-hover:text-green-400 transition-colors mb-3">
            {$currentLanguage === 'id' ? 'Chat WhatsApp' : 'Chat via WhatsApp'}
          </h3>
          
          <p class="font-body text-sm text-foreground/60 leading-relaxed mb-6">
            {$currentLanguage === 'id' 
              ? 'Hubungi kami langsung untuk respon instan dalam waktu kurang dari 15 menit.' 
              : 'Connect with our team directly for a rapid response within 15 minutes.'}
          </p>

          <span class="mt-auto inline-flex items-center gap-1.5 text-xs font-bold text-green-400 group-hover:underline">
            {$currentLanguage === 'id' ? 'KIRIM PESAN SEKARANG' : 'SEND MESSAGE NOW'}
            <ExternalLink class="size-3.5" />
          </span>
        </a>

        <!-- Email Card -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div 
          on:click={() => copyToClipboard('hello@kodeflow.id')}
          class="liquid-glass rounded-3xl p-8 flex flex-col group transition-all duration-500 hover:shadow-xl hover:shadow-primary-light/5 hover:translate-y-[-4px] cursor-pointer relative overflow-hidden"
        >
          <div class="absolute -top-12 -right-12 w-32 h-32 bg-primary-light/10 rounded-full blur-2xl group-hover:bg-primary-light/20 transition-all"></div>
          
          <div class="w-14 h-14 rounded-2xl bg-primary-light/10 border border-primary-light/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Mail class="size-6 text-primary-light" />
          </div>

          <span class="text-xs font-semibold text-primary-light tracking-wider uppercase mb-2">OFFICIAL EMAIL</span>
          
          <h3 class="font-display text-2xl font-bold text-white group-hover:text-primary-light transition-colors mb-3">
            hello@kodeflow.id
          </h3>
          
          <p class="font-body text-sm text-foreground/60 leading-relaxed mb-6">
            {$currentLanguage === 'id' 
              ? 'Kirimkan proposal kemitraan bisnis resmi atau undangan tender RFQ Anda.' 
              : 'Send us official partnership letters, business proposals, or RFQ tenders.'}
          </p>

          <span class="mt-auto inline-flex items-center gap-1.5 text-xs font-bold text-primary-light group-hover:underline">
            {#if copied}
              <Check class="size-3.5" />
              <span>{$currentLanguage === 'id' ? 'EMAIL DISALIN!' : 'EMAIL COPIED!'}</span>
            {:else}
              <Copy class="size-3.5" />
              <span>{$currentLanguage === 'id' ? 'KLIK UNTUK MENYALIN' : 'CLICK TO COPY EMAIL'}</span>
            {/if}
          </span>
        </div>

        <!-- Social Media Card -->
        <div 
          class="liquid-glass rounded-3xl p-8 flex flex-col group transition-all duration-500 hover:shadow-xl hover:shadow-white/5 hover:translate-y-[-4px] relative overflow-hidden"
        >
          <div class="absolute -top-12 -right-12 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all"></div>
          
          <div class="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Globe class="size-6 text-white" />
          </div>

          <span class="text-xs font-semibold text-white/50 tracking-wider uppercase mb-2">CONNECT WITH US</span>
          
          <h3 class="font-display text-2xl font-bold text-white mb-4">
            {$currentLanguage === 'id' ? 'Jaringan Media Sosial' : 'Social Media Channels'}
          </h3>
          
          <!-- Social links list -->
          <div class="grid grid-cols-2 gap-3 mt-2">
            <a 
              href={page.props.social_links?.instagram || "https://instagram.com"} 
              target="_blank" 
              class="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-sm text-foreground/80 hover:text-white transition-colors"
            >
              <svg class="size-4 text-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span>Instagram</span>
            </a>
            <a 
              href={page.props.social_links?.facebook || "https://facebook.com"} 
              target="_blank" 
              class="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-sm text-foreground/80 hover:text-white transition-colors"
            >
              <svg class="size-4 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              <span>Facebook</span>
            </a>
          </div>
        </div>

      </div>
    </section>

    <!-- Maps Location Section -->
    <section class="max-w-[var(--max)] mx-auto px-[var(--gutter)] mb-28 animate-fade-up" style="animation-delay: 400ms">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        <!-- Location details -->
        <div class="lg:col-span-5 flex flex-col justify-center">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary-light uppercase tracking-wider mb-6 w-max">
            <MapPin class="size-3.5 text-primary-light" />
            <span>{$currentLanguage === 'id' ? 'LOKASI KAMI' : 'OUR LOCATION'}</span>
          </div>

          <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight text-white uppercase leading-tight mb-6">
            {$currentLanguage === 'id' ? 'Kunjungi Kantor Operasional ' : 'Visit Our Operational '}
            <span class="text-primary-light italic drop-shadow-[0_0_15px_rgba(247,37,134,0.25)]">
              {$currentLanguage === 'id' ? 'Kami' : 'Office'}
            </span>
          </h2>

          <p class="font-body text-base text-foreground/75 leading-relaxed mb-8">
            {$currentLanguage === 'id' 
              ? 'Kami menyambut hangat kedatangan mitra dan calon klien untuk mendiskusikan rencana otomatisasi digital secara langsung di kantor kami.'
              : 'We warmly welcome partners and potential clients to visit us and discuss digital automation plans face-to-face.'}
          </p>

          <div class="space-y-4">
            <div class="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/5">
              <MapPin class="size-5 text-primary-light shrink-0 mt-0.5" />
              <div>
                <span class="block font-display text-sm font-bold text-white uppercase mb-1">Head Office Sidoarjo</span>
                <span class="block font-body text-sm text-foreground/60">Jalan Raya Buduran No. 12, Sidoarjo, Jawa Timur - 61252</span>
              </div>
            </div>

            <div class="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/5">
              <MapPin class="size-5 text-primary-light shrink-0 mt-0.5" />
              <div>
                <span class="block font-display text-sm font-bold text-white uppercase mb-1">Branch Office Pasuruan</span>
                <span class="block font-body text-sm text-foreground/60">Jalan Pahlawan No. 45, Pasuruan, Jawa Timur - 67126</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Google Map iframe card -->
        <div class="lg:col-span-7 h-[400px] lg:h-auto min-h-[350px]">
          <div class="w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
            <iframe 
              title="Kodeflow Tech Office Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15825.875322971268!2d112.71536768393695!3d-7.446549247653609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e6a71e19dc29%3A0x673c683b5443be12!2sBuduran%2C%20Sidoarjo%20Regency%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1716500000000!5m2!1sen!2sid" 
              class="w-full h-full border-0 grayscale saturate-50 opacity-80 hover:opacity-100 transition-opacity duration-500" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </section>

    <!-- Legalities Section -->
    <section class="max-w-[var(--max)] mx-auto px-[var(--gutter)] mb-28 animate-fade-up" style="animation-delay: 500ms">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary-light uppercase tracking-wider mb-6">
          <Scale class="size-3.5 text-primary-light" />
          <span>{$t.LEGAL_BADGE || 'KEPATUHAN HUKUM'}</span>
        </div>

        <h2 class="font-display text-4xl md:text-5xl font-bold tracking-tight text-white uppercase leading-tight mb-6">
          {$t.LEGAL_TITLE}
          <span class="text-primary-light italic drop-shadow-[0_0_15px_rgba(247,37,134,0.25)]">
            {$t.LEGAL_TITLE_HIGHLIGHT}
          </span>
        </h2>

        <p class="font-body text-base text-foreground/75 leading-relaxed whitespace-pre-line">
          {$t.LEGAL_DESC}
        </p>
      </div>

      <!-- Legal content grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        <!-- Specs Table Column -->
        <div class="lg:col-span-6">
          <div class="liquid-glass rounded-3xl p-8 border border-white/10 shadow-2xl">
            <h3 class="font-display text-2xl font-bold text-white mb-6 uppercase flex items-center gap-2">
              <FileText class="size-5 text-primary-light" />
              <span>{$currentLanguage === 'id' ? 'Data Kepatuhan Perusahaan' : 'Corporate Identity Specs'}</span>
            </h3>

            <div class="space-y-4">
              {#each ptSpecs as spec}
                <div class="py-3.5 border-b border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span class="font-body text-xs font-semibold text-white/50 uppercase tracking-wide shrink-0">{spec.label}</span>
                  <span class="font-body text-sm font-semibold text-white text-left sm:text-right leading-relaxed">{spec.value}</span>
                </div>
              {/each}
            </div>
          </div>
        </div>

        <!-- Papers Preview Column -->
        <div class="lg:col-span-6">
          {#each legalDocs as doc}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div 
              on:click={() => selectedDoc = doc}
              class="liquid-glass rounded-3xl overflow-hidden border border-white/10 group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-primary-light/5 hover:translate-y-[-4px] w-full"
            >
              <!-- Image Wrapper -->
              <div class="aspect-[16/10] bg-muted/20 relative overflow-hidden border-b border-white/5">
                <img 
                  src={doc.image} 
                  alt={doc.title} 
                  class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <!-- Gradient hover glow overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
                <div class="absolute inset-0 bg-primary-light/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <!-- Open overlay icon -->
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div class="px-4 py-2 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase flex items-center gap-1.5 shadow-xl">
                    <span>{$currentLanguage === 'id' ? 'PERBESAR DOKUMEN' : 'VIEW DOCUMENT'}</span>
                    <ExternalLink class="size-3" />
                  </div>
                </div>
              </div>

              <!-- Content details -->
              <div class="p-6">
                <span class="block text-[10px] font-bold text-primary-light tracking-widest uppercase mb-1">{doc.subtitle}</span>
                <h4 class="font-display text-lg font-bold text-white mb-2 leading-tight">{doc.title}</h4>
                <p class="font-body text-xs text-foreground/50 leading-relaxed m-0">{doc.desc}</p>
              </div>
            </div>
          {/each}
        </div>

      </div>
    </section>
  </main>

  <CtaFooter />
</div>

<!-- Svelte Dynamic Lightbox Overlay Modal -->
{#if selectedDoc}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <div 
    class="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-md cursor-zoom-out"
    transition:fade={{ duration: 250 }}
    on:click={() => selectedDoc = null}
    role="dialog"
    aria-modal="true"
  >
    <!-- Close icon top right -->
    <button 
      on:click={() => selectedDoc = null}
      class="absolute top-6 right-6 size-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all cursor-pointer shadow-lg z-10"
    >
      <X class="size-6" />
    </button>

    <!-- Modal Paper Image Container -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div 
      class="relative max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl border border-white/10 shadow-2xl cursor-default bg-black"
      transition:fly={{ y: 30, duration: 400 }}
      on:click|stopPropagation
    >
      <img 
        src={selectedDoc.image} 
        alt={selectedDoc.title} 
        class="w-auto h-auto max-h-[85vh] object-contain mx-auto"
      />
      <!-- Bottom floating description panel inside overlay -->
      <div class="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent pt-12 text-center">
        <h4 class="font-display text-xl font-bold text-white mb-2">{selectedDoc.title}</h4>
        <p class="font-body text-sm text-white/75 max-w-xl mx-auto leading-relaxed">{selectedDoc.desc}</p>
      </div>
    </div>
  </div>
{/if}
