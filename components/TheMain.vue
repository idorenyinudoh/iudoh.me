<script setup lang="ts">
const socials = [
  {
    url: 'https://x.com/broods_',
    title: 'X'
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
  }
]

const recentWorks = [
  {
    image: 'aduragbemi-abiola-portfolio-favicon.png',
    url: 'https://adura.design/'
  },
  {
    image: 'residentes-en-revision-favicon.png',
    url: 'https://residentesenrevision.com/'
  },
  {
    image: 'tanwa-favicon.png',
    url: 'https://tanwa.app/'
  }
]
</script>

<template>
  <main class="flex-grow pl-20 pr-8 pt-24 pb-8 rounded-3xl flex flex-col bg-[#F5F5F5] dark:bg-[#242424]">
    <p class="text text-2xl font-normal tracking-tight">I'm Idorenyin</p>
    <h1 class="w-[84%] mt-4 mb-20 text text-[80px] leading-[110%] font-medium">Crafting engaging interfaces and concise documentation, ensuring seamless digital solutions.</h1>
    <div class="flex gap-x-14">
      <section class="flex flex-col gap-y-2">
        <h2 class="text-xl font-medium text-[#666666] dark:text-[#D1D1D1] tracking-tighter">Main folio status</h2>
        <p class="w-max py-2 pl-3 pr-4 flex gap-x-1.5 items-center rounded-[32px] bg-[#77F675]/10 dark:bg-[#CEFFCD]">
          <img src="~/assets/icons/ellipse.svg" alt="ellipse">
          <span class="text-lg font-semibold text-[#0A7422] dark:text-[#0A7422] tracking-tighter">Almost completed</span>
        </p>
      </section>
      <section class="flex flex-col gap-y-2">
        <h2 class="text-xl font-medium text-[#666666] dark:text-[#D1D1D1] tracking-tighter">Reach out</h2>
        <div class="flex gap-x-2 items-center">
          <template v-for="(social, index) in socials" :key="index">
            <NuxtLink :to="social.url" target="_blank" class="border-b border-solid border-transparent hover:border-[#1A1A1A] dark:hover:border-white text text-2xl leading-7 font-normal">
              {{ social.title }}
            </NuxtLink>
            <img v-if="index !== socials.length - 1" src="~/assets/icons/middle-dot.svg" alt="middle dot">
          </template>
        </div>
      </section>
      <section class="flex flex-col gap-y-2">
        <h2 class="text-xl font-medium text-[#666666] dark:text-[#D1D1D1] tracking-tighter">Recent works</h2>
        <div class="flex gap-x-2.5 items-center">
          <NuxtLink v-for="(work, index) in recentWorks" :key="index" :to="work.url" target="_blank" class="hover:brightness-90 dark:hover:brightness-75 transition-all duration-200 ease-linear">
            <img :src="`/images/${work.image}`" alt="" class="w-12 h-12 rounded-full">
          </NuxtLink>
        </div>
      </section>
    </div>
    <NowPlaying />
  </main>
</template>