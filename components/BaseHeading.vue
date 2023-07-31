<template lang="pug">
h2(:class='determinePosition')
  span(v-if="heading") {{ heading }}
  slot(v-else)
</template>

<script>
export default {
  props: {
    position: {
      type: String,
      required: true,
    },
    heading: {
      type: String,
      required: false,
      default: ''
    },
  },
  computed: {
    determinePosition() {
      if (this.position === 'left') {
        return 'left'
      } else {
        return 'right'
      }
    },
  },
}
</script>

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