<template lang="pug">
the-nav
</template>

<script>
import TheNav from '@/components/TheNav.vue'

export default {
    beforeCreate() {
        document.title += ' | Articles'
    },
    components: {
        TheNav
    }
}
</script>

<style scoped>

</style>