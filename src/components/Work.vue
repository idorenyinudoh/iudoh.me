<template lang="pug">
nav
    p: router-link(to="/") Idorenyin Udoh
header
    h1 {{ name }}
    p {{ summary }}
    .container    
        .image-container
            img(:src="screenshot1src",:alt="alt1")
main
    section.left-heading
        h2 project purpose
        p(v-for="purpose in purposes" v-html="purpose")
    section
        h2 tech stack
        .container    
            .image-container
                img(:src="screenshot2src",:alt="alt2")
        div
            p(v-for="stack in stacks" v-html="stack")
    section.left-heading
        h2 challenges
        div
            p(v-for="challenge in challenges" v-html="challenge")
        .container    
            .image-container
                img(:src="screenshot3src",:alt="alt3")
    section
        h2 lessons
        .container    
            .image-container
                img(:src="screenshot4src",:alt="alt4")
        div
            p(v-for="lesson in lessons" v-html="lesson")
    section.left-heading
        h2 check it out
        p: a(:href="repo", target="_blank") codebase repository
        p: a(:href="url", target="_blank") live
Footer
</template>

<script>
import Footer from './Footer.vue'

export default {
    name: 'Work',
    props: {
        name: String,
        summary: String,
        screenshot1src: String,
        alt1: String,
        purposes: Array,
        screenshot2src: String,
        alt2: String,
        stacks: Array,
        challenges: Array,
        screenshot3src: String,
        alt3: String,
        screenshot4src: String,
        alt4: String,
        lessons: Array,
        repo: String,
        url: String
    },
    components: {
        Footer
    },
    data() {
        return {
            initialScrollY: 0
        }
    },
    beforeMount() {
        window.addEventListener('scroll', this.toggleNavVisibility)
    },
    mounted() {
        this.initialScrollY = window.scrollY;
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.toggleNavVisibility)
    },
    methods: {
        toggleNavVisibility() {
            const nav = document.querySelector('nav');

            if(window.scrollY > this.initialScrollY) {
                this.initialScrollY = window.scrollY
                if(nav.classList.contains('hide-nav')) {
                    return;
                } else if(nav.classList.contains('show-nav')) {
                    nav.classList.replace('show-nav', 'hide-nav')
                } else {
                    nav.classList.add('hide-nav')
                }
            } else {
                this.initialScrollY = window.scrollY
                if(nav.classList.contains('show-nav')) {
                    return;
                } else if(nav.classList.contains('hide-nav')) {
                    nav.classList.replace('hide-nav', 'show-nav')
                }
            }
        }
    }
}
</script>

<style scoped>
@media screen and (max-width: 664px) {
    header .container {
        margin: calc(25px + 1vw) auto;
    }
    section .container {
        margin: calc(5px + 1vw) auto;
    }
}
@media screen and (min-width: 665px) {
    header .container {
        margin: calc(35px + 1vw) auto;
    }
}
@media screen and (min-width: 665px) and (max-width: 768px) {
    section .container {
        margin: calc(15px + 1vw) auto;
    }
}
@media screen and (max-width: 768px) {
    header {
        margin: 120px calc(20px + 1vw) 20px calc(20px + 1vw);
    }
    section:not(:first-child):not(:nth-child(3)) p:first-child {
        margin: calc(30px + 1vw) 0 calc(10px + 1vw) 0;
    }
    section:nth-child(3) p:last-child {
        margin-bottom: calc(30px + 1vw);
    }
}
@media screen and (min-width: 769px) {
    header {
        margin: 80px calc(20px + 1vw) 20px calc(20px + 1vw);
        grid-template-columns: 1fr 1fr;
        column-gap: 20px;
    }
    h1 {
        align-self: flex-end;
    }
    header p {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
    }
    header .container {
        grid-row: 1 / 3;
    }
    section:not(:first-child) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: calc(20px + 1vw);
        place-items: center;
    }
    section:last-child {
        grid-template-columns: max-content max-content;
        justify-content: center;
    }
    section:last-child p:not(:first-child){
        margin-bottom: 0;
    }
}
header {
    display: grid;
}
nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    box-sizing: border-box;
    border-bottom: 2px solid #000;
    padding: 20px calc(30px + 1vw);
    box-shadow: 1px 1px 5px 0px #000;
    z-index: 2;
    background: #ffa826;
    transition: transform 500ms ease-in-out;
}
nav p {
    font-size: 32px;
}
nav a, nav a:visited {
    color: #000;
}
nav a:hover {
    text-decoration: none;
}
.hide-nav {
    transform: translateY(-90px);
}
.show-nav {
    transform: translateY(0px);
}
h1 {
    margin: 0 0 20px 0;
    width: calc(90% - 40px);
    padding-bottom: 10px;
    border-bottom: 2px solid;
    font-weight: 500;
    font-size: 48px;
}
p {
    margin: 0;
    font-size: 24px;
}
main {
    margin-top: calc(30px + 1vw);
    display: grid;
    row-gap: calc(90px + 1vw);
}
.container {
    width: 100%;
    max-width: 500px;
    box-sizing: border-box;
    border: 2px solid #000;
}
.image-container {
    position: relative;
    padding-top: 75%;
}
img {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
}
section {
    position: relative;
    border-top: 2px solid;
    border-bottom: 2px solid;
    /* margin: calc(90px + 1vw) 0; */
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
.left-heading h2 {
    left: 5vw;
    right: auto;
}
section p {
    margin: 0;
}
section p:not(:last-child) {
    margin-bottom: calc(10px + 1vw);
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
</style>