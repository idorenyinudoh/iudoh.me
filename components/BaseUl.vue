<template lang="pug">
ul
  slot
</template>

<style scoped>
ul {
  margin: calc(20px + 1vw) calc(10px + 1vw);
  font-size: 24px;
  padding: 0 0 0 25px;
  list-style-type: disc;
}
</style>