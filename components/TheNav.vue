<template lang="pug">
nav
    p: router-link(to="/") Idorenyin Udoh
</template>

<script>
export default {
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
                if(nav.classList.contains('show-nav')) {
                    nav.classList.replace('show-nav', 'hide-nav')
                } else if(!nav.classList.contains('hide-nav')) {
                    nav.classList.add('hide-nav')
                }
            } else {
                this.initialScrollY = window.scrollY
                if(nav.classList.contains('hide-nav') && !nav.classList.contains('show-nav')) {
                    nav.classList.replace('hide-nav', 'show-nav')
                }
            }
        }
    }
}
</script>

<style scoped>
nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    box-sizing: border-box;
    border-bottom: 2px solid #000;
    padding: 20px calc(30px + 1vw);
    box-shadow: 1px 1px 5px 0 #000;
    z-index: 2;
    background: #ffa826;
    transition: transform 500ms ease-in-out;
}
p {
    font-size: 32px;
}
a, a:visited {
    color: #000;
}
a:hover {
    text-decoration: none;
}
.hide-nav {
    transform: translateY(-90px);
}
.show-nav {
    transform: translateY(0);
}
</style>