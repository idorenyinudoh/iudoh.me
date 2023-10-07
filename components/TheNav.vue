<script setup lang="ts">
const initialScrollY = ref(0)

const toggleNavVisibility = () => {
  const nav = document.querySelector('nav')

  if (!nav) {
    return
  }

  if (window.scrollY > initialScrollY.value) {
    initialScrollY.value = window.scrollY
    if (nav.classList.contains('show-nav')) {
      nav.classList.replace('show-nav', 'hide-nav')
    } else if (!nav.classList.contains('hide-nav')) {
      nav.classList.add('hide-nav')
    }
  } else {
    initialScrollY.value = window.scrollY
    if (nav.classList.contains('hide-nav') && !nav.classList.contains('show-nav')) {
      nav.classList.replace('hide-nav', 'show-nav')
    }
  }
}

onMounted(() => {
  initialScrollY.value = window.scrollY

  window.addEventListener('scroll', toggleNavVisibility)
})

onUnmounted(() => {
  window.removeEventListener('scroll', toggleNavVisibility)
})
</script>

<template>
  <nav>
    <p>
      <NuxtLink to="/">Idorenyin Udoh</NuxtLink>
    </p>
  </nav>
</template>

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