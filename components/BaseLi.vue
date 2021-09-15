<template lang="pug">
li {{ item }}
    slot
</template>

<script>
export default {
    props: {
        item: {
            required: false,
            type: String,
            default: 'item'
        }
    }
}
</script>

<style scoped>
li:not(:last-of-type) {
    margin-bottom: calc(10px + 1vw);
}
</style>