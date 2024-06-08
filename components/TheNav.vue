<script setup lang="ts">
const colorMode = useColorMode()

const changeColorMode = () => {
  colorMode.value = colorMode.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <nav class="mb-6 flex justify-between items-center">
    <div class="flex-grow flex gap-x-[13.33%] items-center">
      <p class="flex gap-x-2 items-center">
        <img src="~/assets/icons/star-of-life.svg" alt="star of life">
        <span class="text text-2xl font-normal">Agent 48</span>
      </p>
      <p class="text text-2xl font-normal">Frontend engineer</p>
    </div>
    <button class="border border-solid border-[#EFEFEF] dark:border-[#434343] rounded-[32px] px-2.5 py-2 grid grid-cols-2 bg-[#F9F9F9] dark:bg-[#505050] hover:brightness-95 dark:hover:brightness-75 transition-all duration-200 ease-linear" @click="changeColorMode">
      <div :class="['w-9 h-9 rounded-full flex justify-center items-center transition-all duration-200 ease-linear', colorMode.value === 'light' ? 'bg-white': 'bg-[#1A1A1A] translate-x-full']">
        <img v-if="colorMode.value === 'light'" src="~/assets/icons/sun.svg" alt="sun">
        <img v-else src="~/assets/icons/moon.svg" alt="moon">
      </div>
    </button>
  </nav>
</template>