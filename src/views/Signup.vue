<script setup>
  import { ref } from 'vue'
  import { signup } from '../helpers/services/authService'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const credentials = ref({
    email: '',
    password: ''
  })

  const confirmPassword = ref('')
  const handleSignup = () => {
    if (confirmPassword.value === credentials.value.password) {
      try {
        signup(credentials.value)
        resetForm()
        router.push('/')
      } catch (error) {
        console.error(error)
      }
    }
  }

  const resetForm = () => {
    credentials.value = {
      email: '',
      password: ''
    }
    confirmPassword.value = ''
  }
</script>

<template>
  <section>
    <h1>Inscription</h1>
    <form @submit.prevent="handleSignup">
      <div>
        <label>Email</label>
        <input type="email" v-model="credentials.email">
      </div>
      <div>
        <label>Mot de passe</label>
        <input type="password" v-model="credentials.password">
      </div>
      <div>
        <label>Confirmer le mot de passe</label>
        <input type="password" v-model="confirmPassword">
      </div>
      <div>
        <button type="submit">Enregistrer</button>
      </div>
    </form>
    <div>
      <p>Déjà enregistré ? <router-link to="/connexion">Connectez-vous</router-link></p>
    </div>
  </section>
</template>