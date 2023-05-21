<script setup>
  import { useWindowScroll } from '@vueuse/core'

  const { y } = useWindowScroll()

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
</script>

<template>
  <button @click="scrollTop" id="scrolltop-btn" :class="{ 'active': y > 200 }" class="sticky bottom-5 right-5 block ms-auto mb-5 me-5 bg-gray-light rounded-full p-5 sm:p-6">
    <span class="relative">
      <font-awesome-icon icon="fa-solid fa-arrow-up" class="scrolltop-icon absolute top-[50%] left-[50%] text-green sm:text-xl" />
    </span>
  </button>
</template>

<style scoped>
  #scrolltop-btn {
    opacity: 0;
    pointer-events: none;
    transition: opacity 150ms ease-out;
  }

  #scrolltop-btn.active {
    opacity: 1;
    pointer-events: auto;
  }

  #scrolltop-btn:hover {
    cursor: pointer;
  }

  .scrolltop-icon {
    transform: translate(-50%, -50%);
  }
</style>