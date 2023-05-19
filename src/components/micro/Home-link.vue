<template>
  <router-link to="/" class="tl-logo font-mono">
    <font-awesome-icon icon="fa-solid fa-share-nodes" class="me-1" />
    Tech Linker
  </router-link>
</template>

<style scoped>
  .tl-logo {
    color: #6ECFA7;
    background: -webkit-linear-gradient(25deg, #6ECFA7 30%, #3EB6D2);
    background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: rgba(0, 0, 0, 0);
  }

  .tl-logo:hover {
    cursor: pointer;
  }
</style>