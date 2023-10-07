<script setup lang="ts">
defineProps({
  position: {
    type: String,
    required: true
  },
  heading: {
    type: String,
    required: false,
    default: ''
  }
})
</script>

<template>
  <h2 :class="position">
    <span v-if="heading">
      {{ heading }}
    </span>
    <slot v-else />
  </h2>
</template>

<style scoped>
h2 {
  position: absolute;
  top: -21px;
  margin: 0;
  padding: 0 calc(10px + 1vw);
  font-weight: 500;
  font-size: 32px;
  background: white;
}
.left {
  left: 5vw;
  right: auto;
}
.right {
  left: auto;
  right: 5vw;
}
</style>