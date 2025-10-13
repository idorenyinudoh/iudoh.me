<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96', },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'shortcut icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
  ],
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ]
})

useSeoMeta({
  title: 'Idorenyin Udoh | Senior Frontend Engineer',
  ogTitle: 'Idorenyin Udoh | Senior Frontend Engineer',
  twitterTitle: 'Idorenyin Udoh | Senior Frontend Engineer',
  description: 'Senior Frontend Engineer with 4+ years building high-impact web applications across fintech, SaaS, and e-commerce. Specializing in Vue/Nuxt ecosystems.',
  ogDescription: 'Senior Frontend Engineer with 4+ years building high-impact web applications across fintech, SaaS, and e-commerce. Specializing in Vue/Nuxt ecosystems.',
  twitterDescription: 'Senior Frontend Engineer with 4+ years building high-impact web applications across fintech, SaaS, and e-commerce. Specializing in Vue/Nuxt ecosystems.',
  ogImage: 'https://res.cloudinary.com/idorenyinudoh/image/upload/portfolio/home-hero.png',
  twitterImage: 'https://res.cloudinary.com/idorenyinudoh/image/upload/portfolio/home-hero.png',
  twitterCard: 'summary_large_image',
  ogUrl: `https://iudoh.me`,
})
</script>

<template>
  <div class="min-h-screen bg-black text-white font-geist">
    <div class="fixed inset-0 pointer-events-none overflow-hidden">
      <div class="absolute top-0 left-0 w-[500px] h-[500px] bg-mint/10 rounded-full blur-[150px]"></div>
      <div class="absolute bottom-0 right-0 w-[600px] h-[600px] bg-deep-green/10 rounded-full blur-[150px]"></div>
    </div>
    <div class="relative z-10">
      <Navigation />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  </div>
</template>
