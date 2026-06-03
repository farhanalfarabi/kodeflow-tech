import { createInertiaApp, router } from '@inertiajs/svelte'
import { mount } from 'svelte'

// Paksa hapus atribut tema light jika pengunjung keluar dari halaman admin
router.on('navigate', (event) => {
    if (!window.location.pathname.startsWith('/admin')) {
        document.documentElement.removeAttribute('data-theme');
    }
})

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.svelte', { eager: true })
    return pages[`./Pages/${name}.svelte`]
  },
  setup({ el, App, props }) {
    if (App.render) {
        // Fallback for Svelte 4
        new App({ target: el, props })
    } else {
        // Svelte 5
        mount(App, { target: el, props })
    }
  },
})
