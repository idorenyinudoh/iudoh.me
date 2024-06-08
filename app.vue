<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
  ],
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ]
})
useSeoMeta({
  title: 'Idorenyin Udoh | frontend engineer & technical writer',
  ogTitle: 'Idorenyin Udoh | frontend engineer & technical writer',
  twitterTitle: 'Idorenyin Udoh | frontend engineer & technical writer',
  description: 'Idorenyin Udoh - a frontend engineer and technical writer based in Lagos, Nigeria.',
  ogDescription: 'Idorenyin Udoh - a frontend engineer and technical writer based in Lagos, Nigeria.',
  twitterDescription: 'Idorenyin Udoh - a frontend engineer and technical writer based in Lagos, Nigeria.',
  ogImage: 'https://res.cloudinary.com/idorenyinudoh/image/upload/portfolio/home-hero.png',
  twitterImage: 'https://res.cloudinary.com/idorenyinudoh/image/upload/portfolio/home-hero.png',
  twitterCard: 'summary_large_image',
  ogUrl: `https://iudoh.me`,
})
</script>

<template>
  <div class="px-12 pb-12 pt-8 w-full h-full bg-white dark:bg-[#1A1A1A]">
    <TheNav />
    <h1 class="text text-[80px] leading-[110%] font-medium">Text goes here. Text goes here. Text goes here. Text goes here. Text goes here.</h1>
  </div>
</template>