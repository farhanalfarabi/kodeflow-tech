<script>
    import { t } from "@/lib/i18n";
    import { ArrowRight, Sparkles } from "lucide-svelte";
    import ArrowButton from "./ui/ArrowButton.svelte";
    import LeadModal from "./LeadModal.svelte";
    import { isLeadModalOpen } from "@/lib/stores";
    import { page } from "@inertiajs/svelte";

    function openModal() {
        isLeadModalOpen.set(true);
    }
</script>

<section
    class="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-background pt-56"
>
    <!-- Massive Bottom Eclipse Glow -->
    <div
        class="absolute -bottom-[500px] left-1/2 -translate-x-1/2 w-[1200px] h-[1000px] rounded-[100%] bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.6)_0%,rgba(147,51,234,0.4)_30%,transparent_70%)] opacity-80 pointer-events-none z-0"
    ></div>

    <!-- Secondary inner glow for that bright rim at the bottom -->
    <div
        class="absolute -bottom-[200px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-white/20 blur-[80px] pointer-events-none z-0"
    ></div>

    <!-- Floating Logo Background Accents -->
    <img
        src="/assets/k.png"
        alt="Kodeflow Icon Accent"
        class="absolute top-[30%] left-[5%] md:left-[15%] w-[120px] md:w-[220px] aspect-square object-contain opacity-[0.03] rotate-[-15deg] pointer-events-none select-none blur-[2px]"
    />
    <img
        src="/assets/k.png"
        alt="Kodeflow Icon Accent"
        class="absolute top-[15%] right-[5%] md:right-[15%] w-[100px] md:w-[180px] aspect-square object-contain opacity-[0.025] rotate-[20deg] pointer-events-none select-none blur-[1px]"
    />

    <div
        class="relative z-10 flex flex-col items-center justify-center flex-1 w-full px-6 text-center max-w-4xl mx-auto"
    >
        <!-- Get Started Pill -->
        <div
            class="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-semibold text-primary-light uppercase tracking-wider mb-8 shadow-[0_0_30px_rgba(247,37,134,0.15)]"
        >
            <Sparkles class="size-4 text-primary-light" />
            <span>{$t.CTA_GET_STARTED}</span>
        </div>

        <!-- Headline -->
        <h2
            class="font-display text-5xl md:text-6xl lg:text-[72px] font-bold leading-[1.05] tracking-tight text-white uppercase mb-8 drop-shadow-2xl"
        >
            {$t.CTA_HEADLINE}<span class="text-primary-light italic drop-shadow-[0_0_15px_rgba(247,37,134,0.25)]"
                >{$t.CTA_HEADLINE_HIGHLIGHT}</span
            >
        </h2>

        <!-- Subheadline -->
        <p
            class="font-body text-base md:text-lg text-white/70 max-w-xl text-center mx-auto mb-12 font-medium"
        >
            {$t.CTA_SUB}
        </p>

        <!-- Action Buttons -->
        <div class="flex items-center gap-4 flex-wrap justify-center">
            <!-- Primary Button -->
            <ArrowButton
                href="#"
                text={$t.CTA_START_GROWTH}
                size="lg"
                class="shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            />

            <!-- Secondary Dark Button (No Icon) -->
            <button
                on:click={openModal}
                class="inline-flex items-center justify-center h-[64px] px-8 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full transition-all backdrop-blur-sm ring-[6px] ring-white/5 hover:ring-white/10"
            >
                <span class="font-bold text-lg">{$t.CONTACT_US}</span>
            </button>
        </div>
    </div>

    <!-- New Card Footer Layout -->
    <div class="relative z-10 w-full max-w-[1400px] mx-auto px-6 mt-24 pb-6">
        <div
            class="w-full bg-background/50 backdrop-blur-md border border-white/5 rounded-[32px] p-8 md:p-12 lg:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
        >
            <!-- Top Grid -->
            <div
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
            >
                <!-- Logo & Socials -->
                <div class="flex flex-col gap-6">
                    <div class="flex items-center gap-2">
                        <img
                            src="/assets/logopng.png"
                            alt="Kodeflow"
                            class="h-10 w-auto object-contain"
                        />
                    </div>
                    <div class="flex items-center gap-3">
                        {#if page.props.social_links?.facebook}
                        <a
                            href={page.props.social_links.facebook}
                            target="_blank"
                            class="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all shadow-inner"
                        >
                            <svg
                                class="size-4"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                ><path
                                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                /></svg
                            >
                        </a>
                        {/if}
                        {#if page.props.social_links?.instagram}
                        <a
                            href={page.props.social_links.instagram}
                            target="_blank"
                            class="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all shadow-inner"
                        >
                            <svg
                                class="size-4"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                ><path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                                /></svg
                            >
                        </a>
                        {/if}
                        {#if page.props.social_links?.threads}
                        <a
                            href={page.props.social_links.threads}
                            target="_blank"
                            class="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all shadow-inner font-bold text-lg leading-none"
                        >
                            #
                        </a>
                        {/if}
                        {#if page.props.social_links?.youtube}
                        <a
                            href={page.props.social_links.youtube}
                            target="_blank"
                            class="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all shadow-inner"
                        >
                            <svg
                                class="size-4"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                ><path
                                    d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.33 29 29 0 00-.46-5.33z"
                                /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg
                            >
                        </a>
                        {/if}
                    </div>
                </div>

                <!-- Legal -->
                <div class="flex flex-col gap-4">
                    <span class="font-display font-semibold text-white/90 mb-2"
                        >{$t.FOOTER_LEGAL_TITLE}</span
                    >
                    <a
                        href="#"
                        class="font-body text-sm text-white/60 font-medium hover:text-white transition-colors"
                        >{$t.FOOTER_PRIVACY}</a
                    >
                    <a
                        href="#"
                        class="font-body text-sm text-white/60 font-medium hover:text-white transition-colors"
                        >{$t.FOOTER_TERMS}</a
                    >
                    <a
                        href="#"
                        class="font-body text-sm text-white/60 font-medium hover:text-white transition-colors"
                        >{$t.FOOTER_PARTNER}</a
                    >
                    <a
                        href="#"
                        class="font-body text-sm text-white/60 font-medium hover:text-white transition-colors"
                        >{$t.FOOTER_SLA}</a
                    >
                    <a
                        href="#"
                        class="font-body text-sm text-white/60 font-medium hover:text-white transition-colors"
                        >{$t.FOOTER_DPA}</a
                    >
                </div>

                <!-- Navigation -->
                <div class="flex flex-col gap-4">
                    <span class="font-display font-semibold text-white/90 mb-2"
                        >{$t.FOOTER_NAV_TITLE}</span
                    >
                    <a
                        href="#services"
                        class="font-body text-sm text-white/60 font-medium hover:text-white transition-colors"
                        >{$t.FOOTER_FEATURES}</a
                    >
                    <a
                        href="#pricing"
                        class="font-body text-sm text-white/60 font-medium hover:text-white transition-colors"
                        >{$t.FOOTER_PRICING}</a
                    >
                    <a
                        href="#about"
                        class="font-body text-sm text-white/60 font-medium hover:text-white transition-colors"
                        >{$t.FOOTER_ABOUT}</a
                    >
                </div>

                <!-- Contact -->
                <div class="flex flex-col gap-4">
                    <span class="font-display font-semibold text-white/90 mb-2"
                        >{$t.FOOTER_CONTACT_TITLE}</span
                    >
                    <span
                        class="font-body text-sm text-white/60 font-medium leading-relaxed"
                        >Jakarta Raya, Indonesia<br />12190</span
                    >
                    <a
                        href="mailto:hello@kodeflow.id"
                        class="font-body text-sm text-white/60 font-medium hover:text-white transition-colors mt-2"
                        >hello@kodeflow.id</a
                    >
                </div>
            </div>

            <!-- Bottom Divider & Copyright -->
            <div
                class="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
            >
                <span class="font-body text-sm text-white/50"
                    >© 2026 Kodeflow Corp. All rights reserved</span
                >
                <span
                    class="font-body text-sm text-white/50 flex items-center gap-2"
                    >Created by Kodeflow</span
                >
            </div>
        </div>
    </div>
</section>

<!-- Include Lead Modal -->
<LeadModal />
