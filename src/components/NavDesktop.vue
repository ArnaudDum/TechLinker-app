<script setup>
  import { useRouter } from 'vue-router'

  const router = useRouter()
</script>

<template>
  <nav>
    <ul>
      <li>
        <router-link to="/projets">Projets</router-link>
      </li>
      <li>
        <router-link to="/profil">Profil</router-link>
      </li>
      <li>
        <router-link to="/contact">Contact</router-link>
      </li>
    </ul>
  </nav>
</template>