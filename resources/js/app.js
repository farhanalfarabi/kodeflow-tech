import { createInertiaApp } from '@inertiajs/svelte'
import { mount } from 'svelte'

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
