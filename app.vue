<script setup lang="ts">
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(SplitText)

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

onMounted(() => {
  const splitHeading = SplitText.create('h1', {
    type: 'lines',
    autoSplit: true,
    mask: 'lines'
  })
  
  gsap.set('.root', { opacity: 0, scale: 0.98 })
  gsap.set('nav', { opacity: 0, x: -12 })
  gsap.set('main', { opacity: 0, y: 8 })
  gsap.set('.title', { opacity: 0, scale: 0.95 })
  gsap.set('h1', { opacity: 0, y: 8 })
  gsap.set(splitHeading.lines, { opacity: 0, y: 24 })
  gsap.set('.sections > section', { opacity: 0, x: 8, rotationY: 2 })
  gsap.set('.now-playing', { opacity: 0, scale: 0.9, y: 4 })

  const tl = gsap.timeline({ delay: 0.3 })
  
  tl.to('.root', { duration: 2.2, opacity: 1, scale: 1, ease: 'power2.out' })
  .to('nav', { duration: 1.7, opacity: 1, x: 0, ease: 'power2.out' }, '-=1.7')
  .to('main', { duration: 1.7, opacity: 1, y: 0, ease: 'power2.out' }, '<')
  .to('.title', { duration: 1.5, opacity: 1, scale: 1, ease: 'back.out(1.1)' }, '-=1.5')
  .to('h1', { duration: 1.5, opacity: 1, y: 0, ease: 'power2.out' }, '<')
  .to(splitHeading.lines, { duration: 1.2, opacity: 1, y: 0, stagger: 0.1, ease: 'power2.out' }, '-=1.3')
  .to('.sections > section', { duration: 1.0, opacity: 1, x: 0, rotationY: 0, stagger: 0.08, ease: 'power2.out' }, '-=1.1')
  .to('.now-playing', { duration: 1.0, opacity: 1, scale: 1, y: 0, ease: 'back.out(1.2)' }, '-=1.0')
})
</script>

<template>
  <div class="root px-6 md:px-8 lg:px-12 pb-12 pt-8 w-full min-h-screen flex flex-col bg-white dark:bg-[#1A1A1A]">
    <TheNav />
    <TheMain />
  </div>
</template>