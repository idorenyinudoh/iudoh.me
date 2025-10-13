<script setup lang="ts">
interface Props {
  project: any
}

const props = defineProps<Props>()
const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}
</script>

<template>
  <div
    class="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-8"
    @click.self="closeModal"
  >
    <div
      class="bg-black border border-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      @click.stop
    >
      <!-- Header -->
      <div class="sticky top-0 bg-black/95 backdrop-blur-sm border-b border-gray-800 p-6 md:p-8 flex justify-between items-start z-10">
        <div>
          <div class="text-xs uppercase tracking-wider text-gray-400 mb-1">
            {{ project.category }}
          </div>
          <h3 class="text-3xl md:text-4xl font-bold">{{ project.title }}</h3>
          <div class="text-gray-400 mt-1">{{ project.company }} · {{ project.role }}</div>
        </div>
        <button
          @click="closeModal"
          class="p-2 hover:bg-gray-800 rounded-lg transition-colors"
          aria-label="Close modal"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Content -->
      <div class="p-6 md:p-8 space-y-8">
        <p class="text-lg text-gray-300 leading-relaxed">
          {{ project.fullDescription }}
        </p>

        <div>
          <h4 class="text-sm uppercase tracking-[0.2em] text-gray-400 mb-3">Challenge</h4>
          <p class="text-gray-300 leading-relaxed">{{ project.challenge }}</p>
        </div>

        <div>
          <h4 class="text-sm uppercase tracking-[0.2em] text-gray-400 mb-3">Solution</h4>
          <p class="text-gray-300 leading-relaxed">{{ project.solution }}</p>
        </div>

        <div>
          <h4 class="text-sm uppercase tracking-[0.2em] text-gray-400 mb-3">Key Highlights</h4>
          <ul class="space-y-2">
            <li
              v-for="(highlight, i) in project.highlights"
              :key="i"
              class="flex items-start gap-3 text-gray-300"
            >
              <span class="text-mint mt-1">•</span>
              <span>{{ highlight }}</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-sm uppercase tracking-[0.2em] text-gray-400 mb-3">Tech Stack</h4>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(tech, i) in project.stack"
              :key="i"
              class="px-3 py-2 text-sm rounded-lg bg-mint/10 text-mint border border-mint/20"
            >
              {{ tech }}
            </span>
          </div>
        </div>

        <a
          v-if="project.link"
          :href="project.link"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-mint text-black font-medium hover:bg-mint/90 transition-colors"
        >
          Visit Live Site
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>
