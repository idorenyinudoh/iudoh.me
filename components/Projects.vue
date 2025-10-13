<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const { projects } = useProjects()
const selectedProject = ref(null)

onMounted(() => {
  // Temporarily disable animations to debug visibility
  // setTimeout(() => {
  //   // Animate section header
  //   gsap.from('.projects-header', {
  //     scrollTrigger: {
  //       trigger: '.projects-section',
  //       start: 'top 80%',
  //     },
  //     duration: 1,
  //     opacity: 0,
  //     y: 30,
  //     ease: 'power2.out'
  //   })

  //   // Animate project cards
  //   gsap.from('.project-card', {
  //     scrollTrigger: {
  //       trigger: '.projects-grid',
  //       start: 'top 80%',
  //     },
  //     duration: 0.8,
  //     opacity: 0,
  //     y: 40,
  //     stagger: 0.1,
  //     ease: 'power2.out'
  //   })
  // }, 100)
})

const openProject = (project: any) => {
  selectedProject.value = project
}

const closeProject = () => {
  selectedProject.value = null
}
</script>

<template>
  <section class="projects-section px-6 md:px-12 py-20 border-t border-gray-800">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="projects-header mb-16 flex items-end justify-between">
        <div>
          <div class="text-xs uppercase tracking-[0.3em] text-gray-400 mb-2">
            01 — Selected Work
          </div>
          <h2 class="text-5xl md:text-6xl font-bold">Projects</h2>
        </div>
        <div class="text-sm text-gray-400">
          Six Recent Projects
        </div>
      </div>

      <!-- Debug: Show if projects not loading -->
      <div v-if="!projects || projects.length === 0" class="text-white text-center py-12">
        <p>Loading projects...</p>
        <p class="text-sm text-gray-400 mt-2">If this persists, check console</p>
      </div>

      <!-- Bento Grid -->
      <div v-else class="projects-grid space-y-4">
        <!-- Large Hero Card (First Project) -->
        <div
          @click="openProject(projects[0])"
          class="project-card group relative overflow-hidden rounded-2xl cursor-pointer transition-all hover:shadow-2xl hover:shadow-mint/10 p-8 md:p-12 min-h-[400px] md:min-h-[500px] flex flex-col justify-between bg-gradient-to-br from-mint/10 to-deep-green/10 border border-mint/20 hover:border-mint/40"
        >
          <div>
            <div class="text-xs uppercase tracking-wider text-gray-400 mb-2">
              {{ projects[0].category }}
            </div>
            <h3 class="text-4xl md:text-5xl font-bold mb-2 group-hover:text-mint transition-colors">
              {{ projects[0].title }}
            </h3>
            <div class="text-gray-400 mb-4">
              {{ projects[0].company }} · {{ projects[0].year }}
            </div>
          </div>
          <div>
            <p class="text-lg text-gray-300 mb-4 max-w-2xl">
              {{ projects[0].description }}
            </p>
            <div class="flex items-center gap-3">
              <span class="px-4 py-2 rounded-full bg-mint/20 text-mint text-sm font-medium">
                {{ projects[0].metrics }}
              </span>
              <svg
                class="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </div>
          </div>
        </div>

        <!-- Two Medium Cards -->
        <div class="grid md:grid-cols-2 gap-4">
          <div
            v-for="project in projects.slice(1, 3)"
            :key="project.id"
            @click="openProject(project)"
            class="project-card group relative overflow-hidden rounded-2xl cursor-pointer transition-all hover:shadow-2xl hover:shadow-mint/10 p-6 md:p-8 min-h-[300px] md:min-h-[350px] flex flex-col justify-between bg-gradient-to-br from-mint/5 to-deep-green/5 border border-mint/10 hover:border-mint/30"
          >
            <div>
              <div class="text-xs uppercase tracking-wider text-gray-400 mb-1">
                {{ project.category }}
              </div>
              <h3 class="text-2xl md:text-3xl font-bold mb-1 group-hover:text-mint transition-colors">
                {{ project.title }}
              </h3>
              <div class="text-sm text-gray-400">{{ project.company }}</div>
            </div>
            <div class="flex items-center gap-2">
              <span class="px-3 py-1.5 rounded-full bg-mint/20 text-mint text-xs font-medium">
                {{ project.metrics }}
              </span>
              <svg
                class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </div>
          </div>
        </div>

        <!-- Three Small Cards -->
        <div class="grid md:grid-cols-3 gap-4">
          <div
            v-for="project in projects.slice(3)"
            :key="project.id"
            @click="openProject(project)"
            class="project-card group relative overflow-hidden rounded-2xl cursor-pointer transition-all hover:shadow-2xl hover:shadow-mint/10 p-6 min-h-[280px] md:min-h-[320px] flex flex-col justify-between bg-gradient-to-br from-mint/5 to-deep-green/5 border border-mint/10 hover:border-mint/30"
          >
            <div>
              <div class="text-xs uppercase tracking-wider text-gray-400 mb-1">
                {{ project.category }}
              </div>
              <h3 class="text-xl md:text-2xl font-bold mb-1 group-hover:text-mint transition-colors">
                {{ project.title }}
              </h3>
              <div class="text-sm text-gray-400">{{ project.company }}</div>
            </div>
            <div class="flex items-center gap-2">
              <span class="px-3 py-1.5 rounded-full bg-mint/20 text-mint text-xs font-medium">
                {{ project.metrics }}
              </span>
              <svg
                class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Project Modal -->
    <ProjectModal
      v-if="selectedProject"
      :project="selectedProject"
      @close="closeProject"
    />
  </section>
</template>
