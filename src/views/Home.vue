<script setup>

</script>

<template>
  <!-- Banner -->
  <section class="home-banner">
    <div class="relative h-full w-full">
      <div class="absolute top-0 left-0 h-full w-full">
        <div class="banner-background h-full w-full"></div>
      </div>
      <div class="relative">
        <h1>Tech Linker</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
</template>

<style>
  .home-banner {
    height: calc(100vh - 60px);
  }

  .banner-background {
    background: linear-gradient(
      .35turn,
      #6ecfa7 0 10%,
      #69ccac 10% 20%,
      #63c9b1 20% 30%,
      #5ec7b5 30% 40%,
      #59c4ba 40% 50%,
      #53c1bf 50% 60%,
      #4ebec4 60% 70%,
      #49bcc8 70% 80%,
      #43b9cd 80% 90%,
      #3eb6d2 90% 100%
    );
  }

  @media (min-width: 640px) {
    .home-banner {
      height: calc(100vh - 75px);
    }
  }
</style>