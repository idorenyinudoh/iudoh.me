<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const skills = [
  'Vue.js', 'Nuxt.js', 'TypeScript', 'React', 'Next.js',
  'GSAP', 'Tailwind', 'Pinia', 'REST APIs', 'Git'
]

const experience = [
  {
    role: 'Frontend Engineer',
    company: 'Cowrywise (YC S18)',
    period: 'Apr 2025 - Present'
  },
  {
    role: 'Founding Frontend Engineer',
    company: 'Cadobook',
    period: 'Feb 2025 - Present'
  },
  {
    role: 'Founding Frontend Engineer',
    company: 'MyDecorTrade',
    period: 'Jul 2024 - Feb 2025'
  },
  {
    role: 'Frontend Engineer',
    company: 'Acumen Digital',
    period: 'Jan 2022 - Nov 2023'
  }
]

onMounted(() => {
  // Temporarily disable animations to debug visibility
  // gsap.from('.about-header', {
  //   scrollTrigger: {
  //     trigger: '.about-section',
  //     start: 'top 80%',
  //   },
  //   duration: 1,
  //   opacity: 0,
  //   y: 30,
  //   ease: 'power2.out'
  // })

  // gsap.from('.about-content', {
  //   scrollTrigger: {
  //     trigger: '.about-section',
  //     start: 'top 70%',
  //   },
  //   duration: 0.8,
  //   opacity: 0,
  //   y: 30,
  //   stagger: 0.2,
  //   ease: 'power2.out'
  // })
})
</script>

<template>
  <section class="about-section px-6 md:px-12 py-20 border-t border-gray-800">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="about-header mb-16">
        <div class="text-xs uppercase tracking-[0.3em] text-gray-400 mb-2">
          02 — About
        </div>
        <h2 class="text-5xl md:text-6xl font-bold">Profile</h2>
      </div>

      <!-- Content Grid -->
      <div class="grid md:grid-cols-2 gap-16">
        <!-- Left Column - Bio -->
        <div class="space-y-6">
          <p class="about-content text-xl text-gray-300 leading-relaxed">
            Senior Frontend Engineer with 4+ years of experience building high-impact web applications
            across fintech, SaaS, and e-commerce.
          </p>
          <p class="about-content text-lg text-gray-400 leading-relaxed">
            Currently at Cowrywise, where I've shipped features used by hundreds of thousands of customers
            across Africa. My work focuses on creating performant, accessible, and visually engaging interfaces.
          </p>
          <p class="about-content text-lg text-gray-400 leading-relaxed">
            I specialize in Vue/Nuxt ecosystems and have a strong track record of leading projects from
            concept to production. I contribute to open source, write technical content, and mentor junior engineers.
          </p>
        </div>

        <!-- Right Column - Skills & Experience -->
        <div class="space-y-8">
          <!-- Skills -->
          <div class="about-content">
            <h3 class="text-sm uppercase tracking-[0.2em] text-gray-400 mb-4">Core Stack</h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in skills"
                :key="skill"
                class="px-3 py-2 text-sm rounded-lg bg-mint/10 text-mint border border-mint/20"
              >
                {{ skill }}
              </span>
            </div>
          </div>

          <!-- Experience Timeline -->
          <div class="about-content">
            <h3 class="text-sm uppercase tracking-[0.2em] text-gray-400 mb-4">Experience</h3>
            <div class="space-y-4">
              <div
                v-for="(exp, index) in experience"
                :key="index"
                class="pl-4 border-l-2 border-deep-green"
              >
                <div class="font-medium">{{ exp.role }}</div>
                <div class="text-sm text-gray-400">{{ exp.company }} · {{ exp.period }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
