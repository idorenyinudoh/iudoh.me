<template lang="pug">
Work(:="props")
</template>

<script>
import Work from '@/components/Work.vue'

const props = {
    name: 'frontend references',
    summary: 'a web application for developers to find out the meaning of any HTML, CSS, JavaScript, SVG, MathML, or API\'s keyword.',
    screenshot1src: 'https://res.cloudinary.com/idorenyinudoh/image/upload/v1624204937/portfolio/frontend-references-landing-page-screenshot.png',
    alt1: 'frontend references landing page screenshot'
}

export default {
    name: 'FrontendReferences',
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