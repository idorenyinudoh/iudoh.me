<script setup lang="ts">
const colorMode = useColorMode()

const changeColorMode = () => {
  colorMode.value = colorMode.value === 'light' ? 'dark' : 'light'
}

const projects = [
  {
    title: 'The 1897',
    year: '2025',
    url: 'https://the1897.com/'
  },
  // {
  //   title: 'Cadobook',
  //   year: '2025',
  //   url: 'https://cadobook.com/'
  // },
  {
    title: 'Inbentori',
    year: '2025',
    url: 'https://inventory.beingfemi.com/'
  },
  {
    title: 'Workflow Architects',
    year: '2024',
    url: 'https://main.d1scst0n43xrzm.amplifyapp.com/'
  },
  {
    title: 'David Blackmoore',
    year: '2023',
    url: 'https://davidblackmoore.com/'
  },
  {
    title: 'Aduragbemi Abiola',
    year: '2023',
    url: 'https://adura.design/'
  },
  // {
  //   title: 'Residentes en Revision',
  //   year: '2023',
  //   url: 'https://main.dxfansb9e0y0e.amplifyapp.com/'
  // },
  // {
  //   title: 'Tanwa',
  //   year: '2022',
  //   url: 'https://www.tanwa.app/'
  // },
]

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
    title: 'Email'
  }
]
</script>

<template>
  <main class="p-6 md:p-4">
    <section class="grid grid-cols-[1fr_max-content] md:grid-cols-12 gap-x-6 md:gap-x-2 gap-y-10">
      <h1 class="md:col-span-2 text-5xl xl:text-6xl font-medium tracking-tighter md:fixed">
        Idorenyin <br class="max-md:hidden"> Udoh
      </h1>
      <p class="max-md:row-start-2 md:col-start-5 xl:col-start-6 col-span-2 md:col-span-4 text-5xl xl:text-6xl font-medium tracking-tighter">Frontend <br> Engineer</p>
      <p class="max-md:hidden md:row-start-1 md:col-start-11 md:col-span-2 text-base font-medium tracking-tighter">Full site soon</p>
      <ColorScheme placeholder="" tag="div">
        <button :class="['col-start-2 md:col-start-12 row-start-1 justify-self-end mt-[5px] w-5 md:w-3 h-5 md:h-3 rounded-full', colorMode.value === 'light' ? 'bg-black' : 'bg-white']" @click="changeColorMode" />
      </ColorScheme>
    </section>
    <section class="my-28 md:my-60 grid grid-cols-12 gap-x-2">
      <div class="md:col-start-5 xl:col-start-6 col-span-7 flex flex-col gap-y-10">
        <h2 class="text-base font-medium tracking-tighter">Recent works</h2>
        <ul class="max-sm:flex max-sm:flex-col max-sm:gap-y-2">
          <li v-for="(project, index) in projects" :key="index">
            <NuxtLink
              :to="project.url"
              target="_blank"
              class="relative text-5xl xl:text-6xl font-medium tracking-tighter group md:hover:underline"
            >
              {{ project.title }}
              <span class="hidden md:group-hover:block absolute top-0 left-full ml-2 text-base tracking-tighter">({{ project.year }})</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section>
    <section class="mb-28 md:mb-60 grid grid-cols-12 gap-x-2">
      <div class="md:col-start-5 xl:col-start-6 col-span-7 flex flex-col gap-y-10">
        <h2 class="text-base font-medium tracking-tighter">Contact</h2>
        <ul>
          <li v-for="(social, index) in socials" :key="index">
            <NuxtLink
              :to="social.url"
              target="_blank"
              class="text-5xl xl:text-6xl font-medium tracking-tighter group hover:underline"
            >
              {{ social.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>