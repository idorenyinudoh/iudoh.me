<template>
  <Work :="props"></Work>
</template>

<script>
import Work from "@/components/Work.vue"

const props = {
    name: 'undiluted music',
    summary: 'a website that gives users access to stream and download songs.'
}

export default {
    name: 'UndilutedMusic',
    data() {
        return {
            props
        }
    },
    components: {
        Work
    }
}
</script>

<style>

</style>