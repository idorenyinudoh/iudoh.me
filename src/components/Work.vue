<template lang="pug">
h1 {{ name }}
p {{ summary }}
</template>

<script>
export default {
    name: 'Work',
    props: {
        name: String,
        summary: String
    }
}
</script>

<style>

</style>