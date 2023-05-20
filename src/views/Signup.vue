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
    try {
      signup(credentials.value)
      resetForm()
      router.push('/home')
    } catch (error) {
      console.error(error)
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
        <label for="">Email</label>
        <input type="email">
      </div>
      <div>
        <label for="">Mot de passe</label>
        <input type="password">
      </div>
      <div>
        <label for="">Confirmer le mot de passe</label>
        <input type="password">
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