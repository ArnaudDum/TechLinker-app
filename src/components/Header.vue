<script setup>
  import { ref } from 'vue'
  import { useWindowSize } from '../helpers/composables/useWindowSize'
  import { useRouter } from 'vue-router'
  import { logout } from '../helpers/services/authService'
  import useAuthStore from '../stores/useAuthStore'
  import useNavStore from '../stores/useNavStore'
  import { useWindowScroll } from '@vueuse/core'
  import Button from '../components/micro/Button.vue'
  import HomeLink from '../components/micro/HomeLink.vue'

  const { mobile, desktop } = useWindowSize()

  const authStore = useAuthStore()
  const navStore = useNavStore()
  const router = useRouter()
  const handleLogout = () => {
    logout()
    router.push('/')
  }

  const { y } = useWindowScroll()
</script>

<template>
  <header class="fixed w-[100vw] z-20" :class="{ 'gray': y > 100 || navStore.isOpen }">
    <div class="h-full flex items-center justify-between px-5 sm:px-8 py-3 sm:py-5">
      <div class="flex items-center sm:flex-row-reverse gap-5">
        <div @click="navStore.toggleMenu" class="burger-btn">
          <div class="burger-icon">
            <span class="burger-line"></span>
            <span class="burger-line"></span>
            <span class="burger-line"></span>
          </div>
        </div>
        <HomeLink />
      </div>
      <div class="pe-5 md:ps-5 md:pe-0 ms-auto md:ms-0">
        <Button v-if="!authStore.getIsAuthenticated" type="link" to="/connexion" title="Connexion" color="base" />
        <Button v-else @click="handleLogout" type="button" title="Déconnexion" color="base" />
      </div>
    </div>
  </header>
</template>

<style scoped>
  header {
    background-color: transparent;
    transition: background-color 120ms linear;
  }

  header.gray {
    background-color: rgba(38, 38, 38, .8);
    backdrop-filter: blur(20px);
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

  .burger-icon {
    height: 20px;
    width: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
  }

  .burger-line {
    width: 100%;
    height: 2px;
    background-color: #FFF;
    border-radius: 3px;
  }
</style>