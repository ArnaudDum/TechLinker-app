<script setup>
  import Header from './components/Header.vue'
  // import Footer from './components/Footer.vue'
</script>

<template>
  <Header class="bg-gray-dark" />
  <main class="bg-gray-dark">
    <router-view />
  </main>
  <!-- <Footer /> -->
</template>

<style>
  body {
    font-weight: 300;
  }
</style>