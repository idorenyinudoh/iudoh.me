<template lang="pug">
footer
  p &copy; {{ date }} Idorenyin Udoh.
</template>

<script>
export default {
  computed: {
    date() {
      const date = new Date()
      return date.getFullYear()
    }
  }
}
</script>

<style scoped>
footer {
  padding: calc(15px + 1vw);
  text-align: center;
}

p {
  font-size: 18px;
}
</style>