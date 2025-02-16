<script setup lang="ts">
const activeHeaderIndex = ref(0)

onMounted(() => {
  setInterval(() => {
    activeHeaderIndex.value = activeHeaderIndex.value >= 7 ? 0 : ++activeHeaderIndex.value
  }, 10000)
})

const socials = [
  {
    url: 'https://x.com/broods_',
    title: 'X'
  },
  {
    url: 'https://instagram.com/iudoh.me',
    title: 'Instagram'
  },
  {
    url: 'https://www.linkedin.com/in/idorenyinudoh/',
    title: 'LinkedIn'
  },
  {
    url: 'https://medium.com/@idorenyinudoh10',
    title: 'Medium'
  },
  {
    url: 'https://github.com/idorenyinudoh',
    title: 'GitHub'
  },
  {
    url: 'mailto:idorenyinudoh10@outlook.com',
    title: 'Mail'
  }
]

const recentWorks = [
  {
    image: 'workflow-architects-favicon.png',
    url: 'https://workflowarchitects.io/'
  },
  // {
  //   image: 'david-blackmoore-favicon.png',
  //   url: 'https://davidblackmooreonline.com/'
  // },
  {
    image: 'aduragbemi-abiola-portfolio-favicon.png',
    url: 'https://adura.design/'
  },
  {
    image: 'residentes-en-revision-favicon.png',
    url: 'https://main.dxfansb9e0y0e.amplifyapp.com/'
  },
  {
    image: 'tanwa-favicon.png',
    url: 'https://www.tanwa.app/'
  }
]
</script>

<template>
  <main class="flex-grow pl-6 sm:pl-7 md:pl-10 lg:pl-14 pr-6 sm:pr-7 md:pr-8 pt-9 sm:pt-10 md:pt-14 lg:pt-20 pb-7 sm:pb-8 rounded-xl md:rounded-2xl lg:rounded-3xl flex flex-col bg-[#F5F5F5] dark:bg-[#242424]">
    <Transition name="fade" mode="out-in" :duration="{ enter: 700, leave: 500 }">
      <p v-if="activeHeaderIndex === 0" class="text text-lg md:text-xl lg:text-2xl font-normal tracking-tighter">Frontend engineer</p>
      <p v-else-if="activeHeaderIndex === 1" class="text text-lg md:text-xl lg:text-2xl font-normal tracking-tighter">Technical writer</p>
      <p v-else-if="activeHeaderIndex === 2" class="text text-lg md:text-xl lg:text-2xl font-normal tracking-tighter">Hip-hop fan</p>
      <p v-else-if="activeHeaderIndex === 3" class="text text-lg md:text-xl lg:text-2xl font-normal tracking-tighter">Open-source enthusiast</p>
      <p v-else-if="activeHeaderIndex === 4" class="text text-lg md:text-xl lg:text-2xl font-normal tracking-tighter">Dashboard aficionado</p>
      <p v-else-if="activeHeaderIndex === 5" class="text text-lg md:text-xl lg:text-2xl font-normal tracking-tighter"><NuxtLink to="https://adura.design" target="_blank" class="link">Adura</NuxtLink>'s other half</p>
      <p v-else-if="activeHeaderIndex === 6" class="text text-lg md:text-xl lg:text-2xl font-normal tracking-tighter">Calisthenics fanatic</p>
      <p v-else-if="activeHeaderIndex === 7" class="text text-lg md:text-xl lg:text-2xl font-normal tracking-tighter">Web3 enthusiast</p>
    </Transition>
    <h1 class="w-[90%] sm:w-[84%] mt-4 mb-20 lg:mb-24 text text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium">Crafting engaging interfaces and concise documentation, ensuring seamless digital solutions.</h1>
    <div class="mb-28 flex flex-col md:flex-wrap md:flex-row gap-x-16 lg:gap-x-20 gap-y-12 sm:gap-y-10">
      <section class="flex flex-col gap-y-1.5 lg:gap-y-2">
        <h2 class="text-lg md:text-xl font-medium text-[#666666] dark:text-[#D1D1D1] tracking-tighter">Main folio status</h2>
        <p class="w-max py-1.5 md:py-2 pl-2.5 md:pl-3 pr-3.5 md:pr-4 flex gap-x-1.5 items-center rounded-[32px] bg-[#77F675]/10 dark:bg-[#CEFFCD]">
          <img src="~/assets/icons/ellipse.svg" alt="ellipse">
          <span class="text-base md:text-lg font-semibold text-[#0A7422] dark:text-[#0A7422] tracking-tighter">Almost completed</span>
        </p>
      </section>
      <section class="flex flex-col gap-y-1.5 md:gap-y-2">
        <h2 class="text-lg md:text-xl font-medium text-[#666666] dark:text-[#D1D1D1] tracking-tighter">Reach out</h2>
        <div class="flex flex-wrap sm:items-center gap-x-3 md:gap-x-2 gap-y-2.5">
          <template v-for="(social, index) in socials" :key="index">
            <NuxtLink :to="social.url" target="_blank" class="text link text-xl md:text-2xl leading-7 font-normal">
              {{ social.title }}
            </NuxtLink>
            <img v-if="index !== socials.length - 1" src="~/assets/icons/middle-dot.svg" alt="middle dot">
          </template>
        </div>
      </section>
      <section class="flex flex-col gap-y-1.5 md:gap-y-2">
        <h2 class="text-lg md:text-xl font-medium text-[#666666] dark:text-[#D1D1D1] tracking-tighter">Recent works</h2>
        <div class="flex flex-wrap gap-3 lg:gap-2.5 items-center">
          <NuxtLink v-for="(work, index) in recentWorks" :key="index" :to="work.url" target="_blank" class="hover:brightness-90 dark:hover:brightness-75 transition-all duration-200 ease-linear">
            <img :src="`/images/${work.image}`" alt="" class="w-14 lg:w-12 h-14 lg:h-12 rounded-full">
          </NuxtLink>
        </div>
      </section>
    </div>
    <NowPlaying />
  </main>
</template>