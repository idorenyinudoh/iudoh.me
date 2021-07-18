<template lang="pug">
header
    h1 Idorenyin Udoh
    p frontend developer &amp; technical writer
section#about.left-heading
    h2 about me
    p I'm a Frontend developer and Technical writer from Akwa Ibom, Nigeria. I have a BSc in Computer Science from Babcock University.
    p I replicate UI designs to pixel-perfect webpages with HTML, CSS, and JavaScript. I'm currently getting better at Vue, I always work with Git, and my preferred template engine is Pug.
    p I often write articles when I learn new technologies as I want to give back to the community 
        small and make a few bucks.
section#works
    h2 my works
    article
        #image-container
            img(src="https://res.cloudinary.com/idorenyinudoh/image/upload/v1624204806/portfolio/undiluted-music-landing-page-screenshot.png", alt="undiluted music landing page screenshot")
        #texts
            h3 undiluted music
            p a website that gives users access to stream and download songs.
            a(href="#") Learn More
    article
        #image-container
            img(src="https://res.cloudinary.com/idorenyinudoh/image/upload/v1624204937/portfolio/frontend-references-landing-page-screenshot.png", alt="frontend references landing page screenshot")
        #texts
            h3 frontend references
            p a web application for developers to find out the meaning of any HTML, CSS, JavaScript, SVG, MathML, or API's keyword.
            a(href="#") Learn More
    hr
    p Some of my technical articles:
    ul
        li CSS-Tricks
            ul
                li: a(href="https://css-tricks.com/give-users-control-the-media-session-api/") Give Users Control: The Media Session API
                li: a(href="https://css-tricks.com/lets-create-a-custom-audio-player/") Let's Create a Custom Audio Player
        li freeCodeCamp
            ul
                li: a(href="https://www.freecodecamp.org/news/how-to-use-lottie-like-a-pro-resources-for-designers-and-developers/") How to Use the Lottie Library like a Pro - Lottie Resources for Designers and Developers
        li Medium
            ul
                li: a(href="https://bootcamp.uxdesign.cc/how-to-use-lottie-animations-on-the-web-cb222793d339") How to Use Lottie Animations on the Web
section#contact.left-heading
    h2 contact
    label(for="name") Name:
    input(type="text", name="name", id="name", required)
    label(for="email") Email:
    input(type="email", name="email", id="email", required)
    label(for="subject") Subject:
    input(type="text", name="subject", id="subject", required)
    label(for="message") Message: 
    textarea(maxlength="500", rows="10", name="message", id="message", required, v-model="message", @input="getCharactersLeft")
    span#number-of-characters-left(v-if="charactersLeft === 1") {{ charactersLeft }} character left
    span#number-of-characters-left(v-else) {{ charactersLeft }} characters left
    button(type="submit") Submit
    //- p You can reach out to me through  
    //-     a(href="mailto:idorenyinudoh10@outlook.com", target="_blank") email
    //-     |  or  
    //-     a(href="https://linkedin.com/in/idorenyinudoh", target="_blank") LinkedIn
    //-     | . If you want a less formal setting, there's  
    //-     a(href="https://twitter.com/broods_", target="_blank") my twitter
    //-     | . Finally, 
    //-     a(href="https://github.com/idorenyinudoh", target="_blank") here
    //-     | 's my GitHub.
footer
    p &copy; Idorenyin Udoh. All Rights Reserved.
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            charactersLeft: 500
        }
    },
    methods: {
        getCharactersLeft() {
            this.charactersLeft = 500 - this.message.length;
        }
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
    #image-container {
        border-right: 1px solid;
    }
    #texts {
        padding: 20px;
    }
}
@media screen and (max-width: 659px) {
    #image-container {
        border-bottom: 1px solid;
    }
    #texts {
        padding: 20px 10px;
    }
}
a {
    color: #00f;
    text-decoration: none;
    outline: none;
}
a:hover, a:focus {
    text-decoration: underline;
}
a:visited {
    color: #551a8b;
}
header {
    height: calc(100vh - 40px - 2vw);
    padding: calc(20px + 1vw);
    display: grid;
    align-content: center;
    row-gap: 10px;
}
p {
    margin: 0;
    font-size: 24px;
}
h1 {
    margin: 0;
    width: 90%;
    padding-bottom: 10px;
    border-bottom: 2px solid;
    font-weight: 500;
    font-size: 48px;
}
#about {
    margin-top: 13px;
}
#about p:not(:last-child) {
    margin-bottom: calc(10px + 1vw);
}
small {
    font-size: 16px;
}
section {
    position: relative;
    border-top: 2px solid;
    border-bottom: 2px solid;
    margin: calc(90px + 1vw) 0;
    padding: calc(40px + 1vw) calc(30px + 1vw);
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
#works {
    padding: calc(50px + 1vw) calc(30px + 1vw);
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
#texts a {
    width: max-content;
}
h3 {
    margin: 0;
    font-size: 24px;
    font-weight: 500;
}
#texts p, #texts a {
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
.left-heading h2 {
    left: 5vw;
    right: auto;
}
label {
    display: block;
    width: max-content;
    margin-bottom: 5px;
    font-size: 24px;
}
input {
    margin-bottom: 25px;
}
input, textarea {
    box-sizing: border-box;
    width: 100%;
    max-width: 400px;
    border: 2px solid #808080;
    padding: 5px 2px;
    font-size: 20px;
    letter-spacing: inherit;
    outline: none;
}
textarea {
    display: block;
    font-family: inherit;
}
input:focus, textarea:focus {
    border-color: #000;
}
#number-of-characters-left {
    display: block;
    margin: 5px 0;
    font-size: 18px;
}
button {
    margin: 20px 0;
    border: 2px solid #000;
    padding: 8px 8px 8px 6px;
    background: inherit;
    font-family: inherit;
    font-size: 20px;
    letter-spacing: inherit;
    cursor: pointer;
}
footer {
    margin: calc(30px + 1vw);
    text-align: center;
}
footer p {
    font-size: 18px;
}
</style>