export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Idorenyin Udoh - Frontend Developer & Technical Writer',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Frontend Developer and Technical Writer from Akwa Ibom, Nigeria.' },
      { name: 'author', content: 'Idorenyin Udoh' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'monetization', content: '$ilp.uphold.com/ynG6GXkiyNjM' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/static/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/gtag.js',
    '~/plugins/disqus'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxt/image'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/sitemap'
  ],

  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/idorenyinudoh/image/upload/'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  publicRuntimeConfig: {
    googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID
  },

  sitemap: {
    hostname: 'https://iudoh.me',
    routes: [
      '/blog/my-2021-in-review'
    ]
  }
}
