<script setup lang="ts">
defineProps({
  item: {
    type: String,
    required: false,
    default: ''
  }
})
</script>

<template>
  <li>
    <span v-if="item !== ''">
      {{ item }}
    </span>
    <slot />
  </li>
</template>

<style scoped>
li:not(:last-of-type) {
  margin-bottom: calc(10px + 1vw);
}
</style>