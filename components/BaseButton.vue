<template lang="pug">
button
  slot
</template>

<style scoped>
button {
  margin: 20px 0 50px 0;
  border: 2px solid #808080;
  padding: 8px 8px 8px 6px;
  background: inherit;
  font-family: inherit;
  font-size: 20px;
  letter-spacing: inherit;
  cursor: pointer;
}
button:hover,
button:focus {
  outline: none;
  border-color: #212121;
  background: #212121;
  color: #fff;
}
</style>