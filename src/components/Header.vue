<script setup>
  import { useWindowSize } from '../helpers/composables/useWindowSize'
  import NavMobile from '../components/NavMobile.vue'
  import NavDesktop from '../components/NavDesktop.vue'

  const { mobile, desktop } = useWindowSize()
</script>

<template>
  <header>
    <div>
      <div>
        <p>Tech Linker</p>
      </div>
      <div>
        <NavDesktop v-if="desktop" />
        <div v-else>
          <font-awesome-icon icon="fa-solid fa-bars" />
        </div>
      </div>
    </div>
    <NavMobile v-if="mobile" />
  </header>
</template>