<script setup>
  import Header from './components/Header.vue'
  // import Footer from './components/Footer.vue'
</script>

<template>
  <Header />
  <main>
    <router-view />
  </main>
  <!-- <Footer /> -->
</template>

<style>
  body {
    background-color: #1A1E23;
    font-weight: 300;
  }
</style>