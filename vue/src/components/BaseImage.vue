<template lang="pug">
.image-container
    img(:src="src" :alt="alt")    
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            required: true
        }
    }
}
</script>

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