<script setup>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
</script>

<template>
  <Header />
  <main class="bg-gray-dark text-white">
    <router-view />
  </main>
  <Footer />
</template>

<style>
  body {
    font-weight: 300;
  }
</style>