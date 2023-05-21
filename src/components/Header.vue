<script setup>
  import { ref } from 'vue'
  import { useWindowSize } from '../helpers/composables/useWindowSize'
  import { useRouter } from 'vue-router'
  import { logout } from '../helpers/services/authService'
  import useAuthStore from '../stores/useAuthStore'
  import NavMobile from '../components/NavMobile.vue'
  import NavDesktop from '../components/NavDesktop.vue'
  import ButtonLink from '../components/micro/Button-link.vue'
  import HomeLink from '../components/micro/Home-link.vue'

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
</script>

<template>
  <header class="fixed h-[60px] sm:h-[75px] w-full">
    <div class="h-full flex items-center justify-between px-5 sm:px-8 py-3 sm:py-5">
      <div class="order-1">
        <HomeLink />
      </div>
      <NavDesktop v-if="desktop" class="order-2" />
      <div v-else class="order-4">
        <font-awesome-icon class="text-green" icon="fa-solid fa-bars" @click="toggleMenu"/>
      </div>
      <div class="order-3 pe-5 md:ps-5 md:pe-0 ms-auto md:ms-0">
        <ButtonLink v-if="!store.getIsAuthenticated" to="/connexion" title="Connexion" />
        <button v-else @click="handleLogout">Déconnexion</button>
      </div>
    </div>
    <NavMobile v-if="mobile && isMobileMenuOpen" />
  </header>
</template>