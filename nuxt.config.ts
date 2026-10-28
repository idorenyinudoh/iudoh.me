import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-gtag',
    '@nuxtjs/color-mode',
    "@nuxtjs/sitemap"
  ],
  css: ['~/assets/css/tailwind.css'],
  vite: {
    plugins: [tailwindcss()]
  },
  colorMode: {
    classSuffix: ''
  },
  site: {
    url: 'https://iudoh.me'
  },
})
