<script setup lang="ts">
const date = new Date().getFullYear()
</script>

<template>
  <footer>
    <p>&copy; {{ date }} Idorenyin Udoh.</p>
  </footer>
</template>

<style scoped>
footer {
  padding: calc(15px + 1vw);
  text-align: center;
}
p {
  font-size: 18px;
}
</style>