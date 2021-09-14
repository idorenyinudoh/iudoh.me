<template lang="pug">
li {{ item }}
    slot
</template>

<script>
export default {
    props: {
        item: {
            required: false,
            type: String
        }
    }
}
</script>

<style scoped>
li {
    margin-bottom: calc(10px + 1vw);
}
</style>