<script setup>
  import useAuthStore from '../stores/useAuthStore'
  import useNavStore from '../stores/useNavStore'

  const authStore = useAuthStore()
  const navStore = useNavStore()
</script>

<template>
  <div :class="{ 'open': navStore.isOpen }" class="sidenav fixed left-0 z-20 w-max p-5 flex flex-col justify-between">
    <nav>
      <ul>
        <router-link to="/" class="nav-ghost-link">
          <div class="link-icon">
            <font-awesome-icon icon="fa-solid fa-home" />
          </div>
          Home
        </router-link>
        <!-- ROUTE ANTHENTIFIÉE -->
        <router-link to="/" class="nav-ghost-link">
          <div class="link-icon">
            <font-awesome-icon icon="fa-solid fa-bars-progress" />
          </div>
          Mes projets
        </router-link>
      </ul>
      <div class="nav-separator"></div>
      <ul>
        <router-link to="/projets" class="nav-ghost-link">
          <div class="link-icon">
            <font-awesome-icon icon="fa-solid fa-grip" />
          </div>
          Projets
        </router-link>
        <!-- ROUTE ANTHENTIFIÉE -->
        <router-link to="/communaute" class="nav-ghost-link">
          <div class="link-icon">
            <font-awesome-icon icon="fa-solid fa-users" />
          </div>
          Communauté
        </router-link>
        <!-- ROUTE ANTHENTIFIÉE -->
        <router-link to="/parametres" class="nav-ghost-link">
          <div class="link-icon">
            <font-awesome-icon icon="fa-solid fa-gear" />
          </div>
          Paramètres
        </router-link>
      </ul>
      <div class="nav-separator"></div>
      <ul>
        <router-link to="/a-propos" class="nav-ghost-link">
          <div class="link-icon">
            <span class="font-mono font-bold">TL</span>
          </div>
          À propos
        </router-link>
        <router-link to="/equipe" class="nav-ghost-link">
          <div class="link-icon">
            <font-awesome-icon icon="fa-solid fa-people-group" />
          </div>
          L'équipe
        </router-link>
        <router-link to="/contact" class="nav-ghost-link">
          <div class="link-icon">
            <font-awesome-icon icon="fa-solid fa-comments" />
          </div>
          Contact
        </router-link>
      </ul>
    </nav>
    <!-- ROUTE ANTHENTIFIÉE -->
    <div>
      <div class="nav-separator"></div>
      <router-link to="/profil" class="profile-link flex items-start gap-5">
        <div class="profile-pic rounded-full overflow-hidden h-16 w-16">
          <img class="object-cover h-full w-auto" src="@/assets/img/dev-1.jpg" alt="">
        </div>
        <div class="flex flex-col my-auto">
          <span class="text-base">Arnaud Dumoncel</span>
          <span class="profile-role text-sm text-green">Développeur</span>
        </div>
        <div>
          <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" />
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
  .sidenav {
    left: 0;
    top: 69px;
    height: 100%;
    height: -webkit-fill-available;
    background-color: rgba(38, 38, 38, .8);
    backdrop-filter: blur(20px);
    transform: translateX(-100%);
    transition: transform 200ms ease-out
  }

  .sidenav.open {
    transform: translateX(0%);
  }

  nav ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .nav-ghost-link {
    padding-right: 25px;
    height: 45px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    backdrop-filter: none;
    background-color: unset;
    transition: background-color 200ms ease-out;
  }

  .nav-ghost-link:hover {
    cursor: pointer;
    background-color: #F3F3F340;
    backdrop-filter: blur(20px);
  }

  .nav-ghost-link .link-icon {
    height: 100%;
    aspect-ratio: 1 / 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nav-separator {
    height: 2px;
    width: 100%;
    border-radius: 2px;
    background-color: #F3F3F360;
    /* background: linear-gradient(to right, #6ECFA7, #3EB6D2); */
    margin: 20px 0;
  }

  .profile-pic {
    border: 2px solid #3F3F3F;
  }

  .profile-pic img {
    transform: scale(1);
    transition: transform 250ms ease-out;
  }

  .profile-pic:hover img {
    transform: scale(1.1);
  }

  .profile-role {
    color: #F3F3F380;
  }

  @media (min-width: 640px) {
    .sidenav {
      top: 85px;
    }
  }
</style>