// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-gtag',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    "@nuxtjs/sitemap"
  ],
  colorMode: {
    classSuffix: ''
  },
  runtimeConfig: {
    public: {
      airtableAPIKey: process.env.AIRTABLE_API_KEY,
      airtableBase: process.env.AIRTABLE_BASE,
      spotifyClientId: process.env.SPOTIFY_CLIENT_ID,
      spotifyClientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    }
  },
  site: {
    url: 'https://iudoh.me'
  },
  build: {
    transpile: [
      'gsap'
    ]
  },
})