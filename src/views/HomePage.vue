<template lang="pug">
header
    h1 Idorenyin Udoh
    p frontend developer &amp; technical writer
section#about
    base-heading(position="left" heading="about me")
    p I'm a Frontend developer and Technical writer from Akwa Ibom, Nigeria. I have a BSc in Computer Science from Babcock University.
    p I replicate UI designs to pixel-perfect webpages with HTML, CSS, and JavaScript. I'm currently getting better at Vue, I always work with Git, and my preferred template engine is Pug.
    p I often write articles when I learn new technologies as I want to give back to the community 
        small and make a few bucks.
section#works
    base-heading(position="right" heading="my works")
    article
        base-image(src="https://res.cloudinary.com/idorenyinudoh/image/upload/v1624204806/portfolio/undiluted-music-landing-page-screenshot.png" alt="undiluted music landing page screenshot")
        .texts
            h3 undiluted music
            p a website that gives users access to stream and download songs.
            router-link(to="/undiluted-music") Learn More
    hr
    h3 Some of my technical articles:
    ul
        li CSS-Tricks
            ul
                li: a(href="https://css-tricks.com/give-users-control-the-media-session-api/" target="_blank") Give Users Control: The Media Session API
                li: a(href="https://css-tricks.com/lets-create-a-custom-audio-player/" target="_blank") Let's Create a Custom Audio Player
        li freeCodeCamp
            ul
                li: a(href="https://www.freecodecamp.org/news/how-to-use-lottie-like-a-pro-resources-for-designers-and-developers/" target="_blank") How to Use the Lottie Library like a Pro - Lottie Resources for Designers and Developers
        li Medium
            ul
                li: a(href="https://bootcamp.uxdesign.cc/how-to-use-lottie-animations-on-the-web-cb222793d339" target="_blank") How to Use Lottie Animations on the Web
section#contact
    base-heading(position="left" heading="contact")
    contact-form
    #socials
        p: a(href="https://linkedin.com/in/idorenyinudoh", target="_blank") linkedin
        p: a(href="https://github.com/idorenyinudoh", target="_blank") github
the-footer
</template>

<script>
import ContactForm from '@/components/ContactForm.vue'

export default {
    beforeCreate() {
        document.title = 'Idorenyin Udoh'
    },
    components: {
        ContactForm
    }
}
</script>

<style scoped>
@media screen and (min-width: 800px) {
    article {
        grid-template-columns: 500px 1fr;
        max-width: 1000px;
    }
}
@media screen and (min-width: 660px) and (max-width: 799px) {
    article {
        grid-template-columns: 410px 1fr;
    }
}
@media screen and (min-width: 660px) {
    .image-container {
        border-right: 1px solid;
    }
    .texts {
        padding: 20px;
    }
}
@media screen and (max-width: 659px) {
    .image-container {
        border-bottom: 1px solid;
    }
    .texts {
        padding: 20px 10px;
    }
}
header {
    height: calc(100vh - 40px - 2vw);
    padding: calc(20px + 1vw);
    display: grid;
    align-content: center;
    row-gap: 10px;
}
h1 {
    margin: 0;
    width: 90%;
}
#about {
    margin-top: 13px;
    display: grid;
    row-gap: calc(10px + 1vw);
}
small {
    font-size: 16px;
}
section {
    margin: calc(90px + 1vw) 0;
}
article {
    display: grid;
    border: 2px solid;
    width: 100%;
    box-sizing: border-box;
    margin: 0 auto;
}
article:not(:last-child) {
    margin-bottom: calc(40px + 1vw);
}
hr {
    margin: calc(70px + 1vw) auto;
    border: none;
    background-color: #000;
    height: 2px;
    width: 80%;
}
.texts {
    display: grid;
    row-gap: 10px;
    align-content: center;
}
.texts a {
    width: max-content;
}
h3 {
    margin: 0;
    font-size: 24px;
    font-weight: 500;
}
.texts p, .texts a {
    font-size: 18px;
}
ul {
    margin: calc(20px + 1vw) calc(10px + 1vw);
    font-size: 24px;
    padding: 0 0 0 25px;
    list-style-type: disc;
}
ul > li {
    margin-bottom: calc(10px + 1vw);
}
ul ul {
    margin: calc(5px + 1vw);
    list-style-type: circle;
}
ul ul li {
    margin: calc(5px + 1vw);
}
.left-heading {
    margin-bottom: 0;
}
#socials {
    display: grid;
    grid-template-columns: repeat(2, max-content);
    column-gap: calc(20px + 1vw);
    justify-content: center;
}
</style>