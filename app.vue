<script setup lang="ts">
import { gsap } from 'gsap'
import SplitType from 'split-type'

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
  const splitHeading = SplitType.create('h1', {
    types: 'lines',
    tagName: 'span'
  })
  gsap.set(splitHeading.lines, { opacity: 0 })

  const tl = gsap.timeline()
  tl.from('.root', { duration: 1.5, padding: '0', autoAlpha: 0, ease: 'power4.out' })
  .to('main', { duration: 1.5, opacity: 1, ease: 'power4.out' }, '<')
  .to('nav', { duration: 2, opacity: 1, ease: 'power4.out' })
  .to('h1', { duration: 1, opacity: 1, ease: 'power4.out' }, '<')
  .to('.title', { duration: 2, opacity: 1, ease: 'power4.out' }, '-=0.5')
  .fromTo(splitHeading.lines, { x: -25 }, { duration: 3, x: 0, opacity: 1, stagger: 0.5, ease: 'elastic.out' }, '<')
  .fromTo('.sections > section', { scale: 0.9 }, { duration: 3, scale: 1, opacity: 1, stagger: 0.5, ease: 'elastic.out' }, '<')
 .fromTo('.now-playing', { scale: 0.9 }, { duration: 2.5, scale: 1, opacity: 1, ease: 'elastic.out' }, '-=3')
})
</script>

<template>
  <div class="root px-6 md:px-8 lg:px-12 pb-12 pt-8 w-full min-h-screen flex flex-col bg-white dark:bg-[#1A1A1A]">
    <TheNav />
    <TheMain />
  </div>
</template>