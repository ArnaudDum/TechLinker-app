<script setup>
  import { ref } from 'vue'
  import { useWindowSize } from '../helpers/composables/useWindowSize'
  import { useRouter } from 'vue-router'
  import { logout } from '../helpers/services/authService'
  import useAuthStore from '../stores/useAuthStore'
  import { useWindowScroll } from '@vueuse/core'
  import NavMobile from '../components/NavMobile.vue'
  import NavDesktop from '../components/NavDesktop.vue'
  import Button from '../components/micro/Button.vue'
  import ButtonLink from '../components/micro/ButtonLink.vue'
  import HomeLink from '../components/micro/HomeLink.vue'

  const { mobile, desktop } = useWindowSize()
  const isMobileMenuOpen = ref(false)
  const toggleMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  }

  const store = useAuthStore()
  const router = useRouter()
  const handleLogout = () => {
    logout()
    router.push('/')
  }

  const { y } = useWindowScroll()
</script>

<template>
  <header class="fixed w-[100vw] z-10" :class="{ 'gray': y > 200 }">
    <div class="h-full flex items-center justify-between px-5 sm:px-8 py-3 sm:py-5">
      <div class="order-1">
        <HomeLink />
      </div>
      <NavDesktop v-if="desktop" class="order-2" />
      <div v-else class="order-4">
        <div @click="toggleMenu" class="burger-btn">
          <font-awesome-icon class="h-5" :class="{ 'text-white': y < 200, 'text-green': y > 200 }" icon="fa-solid fa-bars"/>
        </div>
      </div>
      <div class="order-3 pe-5 md:ps-5 md:pe-0 ms-auto md:ms-0">
        <ButtonLink v-if="!store.getIsAuthenticated" to="/connexion" title="Connexion" />
        <Button v-else @click="handleLogout" title="Déconnexion" />
      </div>
    </div>
    <NavMobile v-if="mobile && isMobileMenuOpen" />
  </header>
</template>

<style scoped>
  header {
    background-color: transparent;
    transition: background-color 120ms linear;
  }

  header.gray {
    background-color: #262626;
  }

  .burger-btn {
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1 / 1;
    border-radius: 10px;
    backdrop-filter: none;
    background-color: unset;
    transition: background-color 200ms ease-out;
  }

  .burger-btn:hover {
    cursor: pointer;
    background-color: #F3F3F340;
    backdrop-filter: blur(20px);
  }
</style>