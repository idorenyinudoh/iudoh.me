<script setup lang="ts">
defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="image-container">
    <img :src="src" :alt="alt">
  </div>
</template>

<style scoped>
.image-container {
  position: relative;
  padding-top: 75%;
}
img {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
}
</style>