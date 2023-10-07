<script setup lang="ts">
const route = useRoute()
const isIndex = computed(() => route.fullPath === '/')
</script>

<template>
  <div>
    <TheNav v-if="!isIndex" />
    <slot />
    <TheFooter />
  </div>
</template>