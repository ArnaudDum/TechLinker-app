<script setup>
  import ScrollTop from '../components/micro/ScrollTop.vue'
  import ButtonLink from '../components/micro/ButtonLink.vue'
</script>

<template>
  <!-- Banner -->
  <section class="home-banner relative">
    <div class="home-banner-bg absolute top-0 left-0 w-full h-full">
      <div class="home-banner-bubble home-banner-bubble--green"></div>
      <div class="home-banner-bubble home-banner-bubble--blue"></div>
    </div>
    <div class="max-w-[1200px] mx-auto px-[20px] relative">
      <div class="py-[100px] text-center">
        <h1 class="text-5xl font-bold font-mono">Tech Linker</h1>
        <p class="text-2xl font-medium font-mono">Plus de limites à vos idées tech</p>
        <div class="mt-10 text-left text-xl max-w-max mx-auto">
          <h2>Une plateforme pour :</h2>
          <ul class="mt-3">
            <li>
              <font-awesome-icon class="text-green me-2" icon="fa-solid fa-circle-check" />
              Lancer vos projets
            </li>
            <li>
              <font-awesome-icon class="text-turquoise me-2" icon="fa-solid fa-circle-check" />
              Rechercher des compétences
            </li>
            <li>
              <font-awesome-icon class="text-blue me-2" icon="fa-solid fa-circle-check" />
              Recruter votre équipe
            </li>
          </ul>
        </div>
      </div>
      <div class="flex items-center justify-center gap-5">
        <ButtonLink to="/inscription" title="Essayer" />
        <ButtonLink to="/equipe" title="Participer" />
      </div>
    </div>
    <div class="absolute bottom-5 w-full px-[20px] flex items-center justify-between">
      <div class="btn-ghost">
        <font-awesome-icon icon="fa-brands fa-discord" />
      </div>
      <div class="btn-ghost">
        <font-awesome-icon icon="fa-brands fa-dribbble" />
      </div>
    </div>
  </section>

  <section>
    <!-- Intro -->
    <div>
      <h2>Une plateforme de création de projets</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>

    <!-- How it works -->
    <div>
      <h2>Démarrez votre projet</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>

    <!-- Link with other -->
    <div>
      <h2>Créez votre équipe</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </section>

  <ScrollTop />
</template>

<style scoped>
  .home-banner {
    height: 100vh;
    padding-top: 60px;
    overflow: hidden;
  }

  .home-banner-bg {
    /* background: linear-gradient(137deg, #5EC5BF 46%, #6ECFA7 100%); */
    filter: blur(100px);
  }

  .home-banner-bubble {
    border-radius: 50%;
    position: absolute;
    height: 100%;
    width: 100%;
  }

  .home-banner-bubble--green {
    background-color: #6ECFA7;
    top: -50%;
    right: -50%;
  }

  .home-banner-bubble--blue {
    background-color: #3EB6D2;
    bottom: -50%;
    left: -50%;
  }

  .btn-ghost {
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

  .btn-ghost:hover {
    cursor: pointer;
    background-color: #F3F3F340;
    backdrop-filter: blur(20px);
  }

  @media (min-width: 640px) {
    .home-banner {
      padding-top: 75px;
    }
  }
</style>