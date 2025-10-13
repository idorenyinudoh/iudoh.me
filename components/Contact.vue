<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const links = [
  {
    label: 'idorenyinudoh10@outlook.com',
    href: 'mailto:idorenyinudoh10@outlook.com'
  },
  {
    label: 'GitHub',
    href: 'https://github.com/idorenyinudoh'
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/idorenyinudoh'
  },
  {
    label: 'X (Twitter)',
    href: 'https://x.com/broods_'
  },
  {
    label: 'Medium',
    href: 'https://medium.com/@idorenyinudoh10'
  }
]

onMounted(() => {
  // Temporarily disable animations to debug visibility
  // gsap.from('.contact-header', {
  //   scrollTrigger: {
  //     trigger: '.contact-section',
  //     start: 'top 80%',
  //   },
  //   duration: 1,
  //   opacity: 0,
  //   y: 30,
  //   ease: 'power2.out'
  // })

  // gsap.from('.contact-content', {
  //   scrollTrigger: {
  //     trigger: '.contact-section',
  //     start: 'top 70%',
  //   },
  //   duration: 0.8,
  //   opacity: 0,
  //   y: 20,
  //   stagger: 0.1,
  //   ease: 'power2.out'
  // })
})
</script>

<template>
  <section class="contact-section px-6 md:px-12 py-20 border-t border-gray-800">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="contact-header mb-16">
        <div class="text-xs uppercase tracking-[0.3em] text-gray-400 mb-2">
          03 — Contact
        </div>
        <h2 class="text-5xl md:text-6xl font-bold">Get in Touch</h2>
      </div>

      <!-- Content Grid -->
      <div class="grid md:grid-cols-2 gap-16">
        <!-- Left Column -->
        <div>
          <p class="contact-content text-xl text-gray-300 leading-relaxed mb-8">
            Open to senior frontend engineering opportunities with international teams.
            Let's build something exceptional together.
          </p>

          <!-- Links -->
          <div class="space-y-4">
            <a
              v-for="link in links"
              :key="link.label"
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
              class="contact-content group flex items-center gap-2 text-mint hover:gap-3 transition-all text-lg"
            >
              <span>{{ link.label }}</span>
              <svg
                class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
