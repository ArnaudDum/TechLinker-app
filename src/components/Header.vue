<script setup>
  import { ref } from 'vue'
  import { useWindowSize } from '../helpers/composables/useWindowSize'
  import NavMobile from '../components/NavMobile.vue'
  import NavDesktop from '../components/NavDesktop.vue'

  const { mobile, desktop } = useWindowSize()
  const isMobileMenuOpen = ref(false)
  const toggleMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  }
</script>

<template>
  <header class="relative h-[60px] sm:h-[75px]">
    <div class="h-full flex items-center justify-between px-5 sm:px-8 py-3 sm:py-5">
      <div>
        <router-link to="/" class="font-mono text-green">
          <font-awesome-icon icon="fa-solid fa-share-nodes" />
          TechLinker
        </router-link>
      </div>
      <div>
        <NavDesktop v-if="desktop" />
        <div v-else>
          <font-awesome-icon class="text-green" icon="fa-solid fa-bars" @click="toggleMenu"/>
        </div>
      </div>
    </div>
    <NavMobile v-if="mobile && isMobileMenuOpen" />
  </header>
</template>
