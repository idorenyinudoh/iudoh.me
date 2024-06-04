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
</script>

<template>
  <NuxtLayout>
    <NuxtPage :page-key="route => route.fullPath" />
  </NuxtLayout>
</template>