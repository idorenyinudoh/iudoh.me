<template lang="pug">
li {{ item }}
    slot
</template>

<script>
export default {
    props: {
        // eslint-disable-next-line vue/require-default-prop
        item: {
            required: false,
            type: String
        }
    }
}
</script>

<style scoped>
li:not(:last-of-type) {
    margin-bottom: calc(10px + 1vw);
}
</style>