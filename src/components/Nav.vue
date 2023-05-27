<script setup>
  import useAuthStore from '../stores/useAuthStore'
  import useNavStore from '../stores/useNavStore'

  const authStore = useAuthStore()
  const navStore = useNavStore()
</script>

<template>
  <div :class="{ 'open': navStore.isOpen }" class="sidenav fixed left-0 z-20 w-max">
    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/projets">Projets</router-link>
        </li>
        <li v-if="authStore.getIsAuthenticated">
          <router-link to="/communaute">Communauté</router-link>
        </li>
        <li>
          <router-link to="/a-propos">À propos</router-link>
        </li>
        <li>
          <router-link to="/equipe">L'équipe</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
        <li v-if="authStore.getIsAuthenticated">
          <router-link to="/parametres">Paramètres</router-link>
        </li>
      </ul>
    </nav>
    <div v-if="authStore.getIsAuthenticated">
      <li>
        <router-link to="/profil">Profil</router-link>
      </li>
    </div>
  </div>
</template>

<style scoped>
  .sidenav {
    left: 0;
    top: 69px;
    height: calc(100% - 69px);
    background-color: rgba(38, 38, 38, .8);
    backdrop-filter: blur(20px);
    transform: translateX(-100%);
    transition: transform 200ms ease-out
  }

  .sidenav.open {
    transform: translateX(0%);
  }

  @media (min-width: 640px) {
    .sidenav {
      top: 85px;
      height: calc(100% - 85px);
    }
  }
</style>