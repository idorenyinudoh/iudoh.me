// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['nuxt-gtag', 'nuxt-simple-sitemap'],
  site: {
    url: 'https://iudoh.me',
  },
})
