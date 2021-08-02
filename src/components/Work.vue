<template lang="pug">
header
    h1 {{ name }}
    p {{ summary }}
    #container    
        #image-container
            img(:src="screenshot1src",:alt="alt1")
main
    section
        h2 project purpose
        p(v-for="purpose in purposes" v-html="purpose")
</template>

<script>
export default {
    name: 'Work',
    props: {
        name: String,
        summary: String,
        screenshot1src: String,
        alt1: String,
        purposes: Array
    }
}
</script>

<style scoped>
@media screen and (max-width: 664px) {
    #container {
        margin: calc(25px + 1vw) auto;
    }
}
@media screen and (min-width: 665px) {
    #container {
        margin: calc(35px + 1vw) auto;
    }
}
@media screen and (min-width: 769px) {
    header {
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
    #container {
        grid-row: 1 / 3;
    }
}
header {
    margin: 20px calc(20px + 1vw);
    display: grid;
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
}
#container {
    width: 100%;
    max-width: 500px;
    box-sizing: border-box;
    border: 2px solid #000;
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