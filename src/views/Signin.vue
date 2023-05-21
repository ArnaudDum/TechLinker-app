<script setup>
  import { ref } from 'vue'
  import { signin } from '../helpers/services/authService'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const credentials = ref({
    email: '',
    password: ''
  })

  const handleSignin = () => {
    try {
      signin(credentials.value)
        .then(() => {
          resetForm()
          router.push('/home')
        })
        .catch((error) => console.error(error))
    } catch (error) {
      console.error(error)
    }
  }

  const resetForm = () => {
    credentials.value = {
      email: '',
      password: ''
    }
  }
</script>

<template>
  <section>
    <h1>Connexion</h1>
    <form @submit.prevent="handleSignin">
      <div>
        <label>Email</label>
        <input type="email" v-model="credentials.email" class="text-black">
      </div>
      <div>
        <label>Mot de passe</label>
        <input type="password" v-model="credentials.password" class="text-black">
      </div>
      <div>
        <button type="submit">Valider</button>
      </div>
    </form>
    <div>
      <p>Pas encore de compte ? <router-link to="/inscription">Inscrivez-vous</router-link></p>
    </div>
  </section>
</template>