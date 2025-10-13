<script setup lang="ts">
import { gsap } from 'gsap'

onMounted(() => {
  const tl = gsap.timeline({ delay: 0.5 })

  tl.from('.hero-label', {
    duration: 0.8,
    opacity: 0,
    y: 20,
    ease: 'power2.out'
  })
  .from('.hero-title', {
    duration: 1,
    opacity: 0,
    y: 40,
    ease: 'power2.out',
    stagger: 0.1
  }, '-=0.5')
  .from('.hero-subtitle', {
    duration: 0.8,
    opacity: 0,
    y: 20,
    ease: 'power2.out'
  }, '-=0.6')
  .from('.hero-meta', {
    duration: 0.6,
    opacity: 0,
    y: 15,
    ease: 'power2.out',
    stagger: 0.1
  }, '-=0.4')
})
</script>

<template>
  <section class="min-h-screen flex items-center px-6 md:px-12 pt-32 pb-20">
    <div class="max-w-7xl mx-auto w-full">
      <!-- Label -->
      <div class="hero-label mb-8 text-xs uppercase tracking-[0.3em] text-gray-400">
        Portfolio 2025
      </div>

      <!-- Main Title -->
      <h1 class="mb-12">
        <div class="hero-title text-[clamp(3rem,10vw,8rem)] font-bold leading-[0.9] tracking-tight">
          IDORENYIN
        </div>
        <div class="hero-title text-[clamp(3rem,10vw,8rem)] font-bold leading-[0.9] tracking-tight">
          UDOH
        </div>
      </h1>

      <!-- Grid Content -->
      <div class="grid md:grid-cols-2 gap-12 max-w-5xl">
        <!-- Description -->
        <div>
          <p class="hero-subtitle text-xl md:text-2xl text-gray-300 leading-relaxed">
            Senior Frontend Engineer specializing in high-impact fintech products and
            engaging digital experiences. 4+ years building with Vue, Nuxt, and TypeScript.
          </p>
        </div>

        <!-- Meta Info -->
        <div class="flex flex-col justify-end gap-3">
          <div class="hero-meta text-sm text-gray-400">
            Currently @ Cowrywise
          </div>
          <div class="hero-meta text-sm text-gray-400">
            Based in Lagos, Nigeria
          </div>
          <div class="hero-meta text-sm text-mint">
            Open to international opportunities
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
