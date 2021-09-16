<template lang="pug">
div
    the-nav
    main
        section
            base-heading(position="right" heading="my articles")
            base-ul
                base-li
                    a(href="https://blog.logrocket.com/the-web-animations-api-vs-css/" target="_blank") The Web Animations API vs CSS
                    small 18 August, 2021 · 
                        span.logrocket LogRocket's Blog
                base-li
                    a(href="https://css-tricks.com/almanac/properties/h/hyphenate-limit-chars/" target="_blank") hyphenate-limit-chars
                    small 15 July, 2021 · 
                        span.css-tricks CSS-Tricks
                base-li
                    a(href="https://css-tricks.com/almanac/properties/c/content-visibility/" target="_blank") content-visibility
                    small 21 June, 2021 · 
                        span.css-tricks CSS-Tricks
                base-li
                    a(href="https://www.freecodecamp.org/news/how-to-use-lottie-like-a-pro-resources-for-designers-and-developers/" target="_blank") How to Use the Lottie Library like a Pro – Lottie Resources for Designers and Developers
                    small 17 May, 2021 · 
                        span.freecodecamp freeCodeCamp
                base-li
                    a(href="https://bootcamp.uxdesign.cc/how-to-use-lottie-animations-on-the-web-cb222793d339" target="_blank") How to Use Lottie Animations On the Web
                    small 5 April, 2021 · 
                        span Medium
                base-li
                    a(href="https://css-tricks.com/lets-create-a-custom-audio-player/" target="_blank") Let's Create a Custom Audio Player
                    small 18 February, 2021 · 
                        span.css-tricks CSS-Tricks
                base-li
                    a(href="https://css-tricks.com/animating-with-lottie/" target="_blank") Animating with Lottie
                    small 11 January, 2021 · 
                        span.css-tricks CSS-Tricks
                base-li
                    a(href="https://css-tricks.com/give-users-control-the-media-session-api/" target="_blank") Give Users Control: The Media Session API
                    small 14 December, 2020 · 
                        span.css-tricks CSS-Tricks
    the-footer
</template>

<script>
export default {
    head: {
        title: 'Idorenyin Udoh | Articles'
    }
}
</script>

<style scoped>
main {
    margin-top: calc(150px + 1vw);
}
ul {
    margin-top: 0;
    margin-bottom: 0;
}
li:not(:last-of-type) {
    margin-bottom: calc(20px + 1vw);
}
small {
    display: block;
    margin: 10px 0;
    font-size: 18px;
}
.logrocket {
    color: #764abc;
}
.css-tricks {
    background-image: linear-gradient(130deg, #ff7a18, #af002d 41.07%, #319197 76.05%);
    background-clip: text;
    color: transparent;
}
.freecodecamp {
    color: #0a0a23;
}
</style>