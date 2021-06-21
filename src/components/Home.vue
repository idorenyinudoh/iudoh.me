<template lang="pug">
header
    p Hey there,
    h1 Idorenyin Udoh, here
    p I'll be graduating with a BSc in Computer Science by next month, I work out, I often play Candy Crush and CoDM, I like to think I can rap, and most importantly, I write. Code — and technical articles.
#lil-intro
    p I mostly write JavaScript but I'm also into HTML and CSS.
    p Ocassionally, I work with Node.js, Express, Pug, MongoDB, and nodemon.
    p And — I use Git all the time.
section#works
    h2 stuff i've worked on
    article
        #image-container
            img(src="https://res.cloudinary.com/idorenyinudoh/image/upload/v1624204806/portfolio/undiluted-music-landing-page-screenshot.png")
        #texts
            h3 undiluted music
            p a website that gives users access to stream and download songs.
            a(href="#") Learn More
    article
        #image-container
            img(src="https://res.cloudinary.com/idorenyinudoh/image/upload/v1624204937/portfolio/frontend-references-landing-page-screenshot.png")
        #texts
            h3 frontend references
            p a web application for developers to find out the meaning of any HTML, CSS, JavaScript, SVG, MathML, or API's keyword.
            a(href="#") Learn More
#lil-intro
    p I write articles too, remember?
    p I plan on writing for 
        a(href="#") my blog
        |  and I also have my works on a couple websites:
    ul
        li CSS-Tricks
            ul
                li: a(href="https://css-tricks.com/give-users-control-the-media-session-api/") Give Users Control: The Media Session API
                li: a(href="https://css-tricks.com/animating-with-lottie/") Animating with Lottie
                li: a(href="https://css-tricks.com/lets-create-a-custom-audio-player/") Let's Create a Custom Audio Player
        li freeCodeCamp
            ul
                li: a(href="https://www.freecodecamp.org/news/how-to-use-lottie-like-a-pro-resources-for-designers-and-developers/") How to Use the Lottie Library like a Pro - Lottie Resources for Designers and Developers
        li Medium
            ul
                li: a(href="https://bootcamp.uxdesign.cc/how-to-use-lottie-animations-on-the-web-cb222793d339") How to Use Lottie Animations on the Web
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style scoped>
@media screen and (min-width: 800px) {
    article {
        grid-template-columns: 500px 1fr;
    }
}
@media screen and (min-width: 650px) and (max-width: 799px) {
    article {
        grid-template-columns: 410px 1fr;
    }
}
@media screen and (min-width: 650px) {
    #image-container {
        border-right: 1px solid;
    }
    #texts {
        padding: 20px;
    }
}
@media screen and (max-width: 649px) {
    #image-container {
        border-bottom: 1px solid;
    }
    #texts {
        padding: 20px 10px;
    }
}
header {
    height: calc(100vh - 40px - 2vw);
    padding: calc(20px + 1vw);
    display: grid;
    align-content: center;
    row-gap: calc(30px + 1vw);
}
p {
    margin: 0;
    font-size: 24px;
}
h1 {
    margin: 0;
    font-weight: 500;
    font-size: 48px;
}
#lil-intro {
    border-top: 2px solid;
    border-bottom: 2px solid;
    padding: calc(20px + 1vw);
}
#lil-intro p {
    margin: calc(10px + 1vw);
}
#works {
    position: relative;
    border-top: 2px solid;
    border-bottom: 2px solid;
    margin: calc(90px + 1vw) 0;
    padding: calc(40px + 1vw) 30px;
}
h2 {
    position: absolute;
    right: 5vw;
    top: -21px;
    margin: 0;
    padding: 0 calc(10px + 1vw);
    font-weight: 500;
    font-size: 32px;
    background: white;
}
article {
    display: grid;
    border: 2px solid;
    width: 100%;
    box-sizing: border-box;
}
article:not(:last-child) {
    margin-bottom: calc(25px + 1vw);
}
#image-container {
    position: relative;
    padding-top: 75%;
}
img {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
}
#texts {
    display: grid;
    row-gap: 10px;
    align-content: center;
}
h3 {
    margin: 0;
    font-size: 24px;
    font-weight: 500;
}
#texts p, #texts a {
    font-size: 16px;
}
ul {
    margin: calc(20px + 1vw) calc(10px + 1vw);
    font-size: 24px;
    padding: 0 0 0 25px;
}
ul > li {
    margin-bottom: calc(10px + 1vw);
}
ul ul {
    margin: calc(5px + 1vw);
}
ul ul li {
    margin: calc(5px + 1vw);
}
</style>