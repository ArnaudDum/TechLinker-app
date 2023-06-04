<script setup>
  import useAuthStore from '../stores/useAuthStore'

  const authStore = useAuthStore()
</script>

<template>
  <section class="profile-page">
    <h1>Profil</h1>
  </section>
</template>

<style scoped>
  .profile-page {
    padding-top: 69px;
  }

  @media (min-width: 640px) {
    .profile-page {
      top: 85px;
    }
  }
</style>