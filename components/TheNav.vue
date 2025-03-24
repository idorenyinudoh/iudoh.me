<script setup lang="ts">
const agentIsHoveredOn = ref(false)

const colorMode = useColorMode()

const changeColorMode = () => {
  colorMode.value = colorMode.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <nav class="mb-7 lg:mb-6 flex justify-between items-center opacity-0">
    <div class="flex-grow flex gap-x-[13.33%] items-center">
      <button class="hidden md:flex relative gap-x-2 items-center" @mouseover="agentIsHoveredOn = true" @mouseleave="agentIsHoveredOn = false">
        <img src="~/assets/icons/star-of-life.svg" alt="star of life" class="max-lg:w-5 max-lg:h-5 rotate">
        <span class="text text-xl lg:text-2xl font-normal">Agent 48</span>
      </button>
      <Transition name="fade" mode="out-in" :duration="{ enter: 600, leave: 400 }">
        <p v-if="agentIsHoveredOn" class="text text-xl lg:text-2xl font-normal">What my friends call me — there's a backstory 😉</p>
        <p v-else class="text text-xl lg:text-2xl font-normal">Idorenyin Udoh</p>
      </Transition>
    </div>
    <ColorScheme placeholder="" tag="div">
      <button class="border border-solid border-[#EFEFEF] dark:border-[#434343] rounded-[32px] md:px-1.5 lg:px-2 xl:px-2.5 md:py-1 lg:py-1.5 xl:py-2 grid grid-cols-1 md:grid-cols-2 bg-[#F9F9F9] dark:bg-[#505050] md:hover:brightness-95 md:dark:hover:brightness-75 transition-all duration-200 ease-linear" @click="changeColorMode">
        <div :class="['w-8 md:w-7 lg:w-8 xl:w-9 h-8 md:h-7 lg:h-8 xl:h-9 rounded-full flex justify-center items-center transition-all duration-200 ease-linear', colorMode.value === 'light' ? 'bg-white': 'bg-[#1A1A1A] md:translate-x-full']">
          <img v-if="colorMode.value === 'light'" src="~/assets/icons/sun.svg" alt="sun" class="w-[18px] md:w-3.5 lg:w-[18px] xl:w-[20px] h-[18px] md:h-3.5 lg:h-[18px] xl:h-[20px]">
          <img v-else src="~/assets/icons/moon.svg" alt="moon" class="w-[18px] md:w-3.5 lg:w-[18px] xl:w-[20px] h-[18px] md:h-3.5 lg:h-[18px] xl:h-[20px]">
        </div>
      </button>
    </ColorScheme>
  </nav>
</template>

<style scoped>
.rotate {
  animation: rotate 7s linear infinite forwards;
}

button:hover .rotate {
  animation-play-state: paused;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>