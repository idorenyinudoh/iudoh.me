<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'shortcut icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap' }
  ],
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ]
})

useSeoMeta({
  title: 'Idorenyin Udoh | Frontend Engineer',
  ogTitle: 'Idorenyin Udoh | Frontend Engineer',
  twitterTitle: 'Idorenyin Udoh | Frontend Engineer',
  description: 'Idorenyin Udoh — a frontend engineer based in Lagos, Nigeria.',
  ogDescription: 'Idorenyin Udoh — a frontend engineer based in Lagos, Nigeria.',
  twitterDescription: 'Idorenyin Udoh — a frontend engineer based in Lagos, Nigeria.',
  ogImage: 'https://res.cloudinary.com/idorenyinudoh/image/upload/portfolio/home-hero.png',
  twitterImage: 'https://res.cloudinary.com/idorenyinudoh/image/upload/portfolio/home-hero.png',
  twitterCard: 'summary_large_image',
  ogUrl: `https://iudoh.me`,
})
</script>

<template>
  <div>
    <TheMain />
  </div>
</template>