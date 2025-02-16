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
  const windowWidth = window.innerWidth
  const navHeight = windowWidth < 768 ? '34px' : windowWidth < 1024 ? '38px' : windowWidth < 1280 ? '46px' : '54px'

  const splitHeading = SplitType.create('h1', {
    types: 'words,chars',
    tagName: 'span'
  })
  gsap.set(splitHeading.chars, { opacity: 0 })

  const tl = gsap.timeline()
  tl.from('.root', { duration: 2, padding: '0', autoAlpha: 0, ease: 'power2.out' })
  .from('main', { duration: 2, borderRadius: '0px', ease: 'power4.out' }, '-1')
  .to('main', { duration: 2, opacity: 1, ease: 'power2.out' }, '<')
  .to('nav', { duration: 1.5, height: navHeight, ease: 'power2.out' }, '-=1')
  .to('.title', { duration: 5, opacity: 1, ease: 'power4.out' })
  .to('h1', { duration: 1, opacity: 1 }, '<')
  .to(splitHeading.chars, { opacity: 1, duration: 3, stagger: 0.07, ease: 'power4.out' }, '-=4.5')
  .to('nav', { duration: 2, opacity: 1, ease: 'power2.out' }, '-=7.5')
  .to(document.querySelectorAll('.sections > section'), { duration: 2, opacity: 1, stagger: 0.7, ease: 'power2.out' }, '-=6')
  .to('.now-playing', { duration: 2, opacity: 1, ease: 'power2.out' }, '-=2')
})
</script>

<template>
  <div class="root px-6 md:px-8 lg:px-12 pb-12 pt-8 w-full min-h-screen flex flex-col bg-white dark:bg-[#1A1A1A]">
    <TheNav />
    <TheMain />
  </div>
</template>