<template lang="pug">
header
    p Hey there,
    h1 Idorenyin Udoh, here
    p I'll be graduating with a BSc in Computer Science by next month, I work out, I often play Candy Crush and CoDM, I like to think I can rap, and most importantly, I write. Code and technical articles.
#lil-intro
    p I mostly write JavaScript but I'm also into HTML and CSS.
    p Ocassionally, I work with Node.js, Express, Pug, MongoDB, and nodemon.
    p And - I use Git all the time.
section#works
    h2 stuff i've worked on
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style scoped>
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
    margin: calc(90px + 1vw) 0;
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
</style>