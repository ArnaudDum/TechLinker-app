<script setup>
  import { ref } from 'vue'
  import { signin } from '../helpers/services/authService'
  import { useRouter } from 'vue-router'
  import Button from '../components/micro/Button.vue'

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
  <section class="form-page relative">
    <div class="form-bg absolute top-0 left-0 w-full h-full">
      <div class="form-bubble form-bubble--gray"></div>
      <div class="form-bubble form-bubble--turquoise"></div>
    </div>
    <div class="max-w-[1200px] mx-auto p-[30px]">
      <div class="log-form rounded-2xl p-5 max-w-[500px] mx-auto">
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
            <Button role="submit" type="button" title="Valider" />
          </div>
        </form>
        <div>
          <p>Pas encore de compte ? <router-link to="/inscription">Inscrivez-vous</router-link></p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .form-page {
    padding-top: 69px;
  }

  .form-bg {
    filter: blur(100px);
  }

  .form-bubble {
    border-radius: 50%;
    position: absolute;
    height: 100%;
    width: 100%;
  }

  .form-bubble.form-bubble--gray {
    background-color: #3F3F3F;
  }

  .form-bubble.form-bubble--turquoise {
    background-color: #5EC5BF;
  }

  .form-bubble:nth-child(1) {
    top: -50%;
    right: -50%;
  }

  .form-bubble:nth-child(2) {
    bottom: -50%;
    left: -50%;
  }

  .log-form {
    background-color: #F3F3F340;
    backdrop-filter: blur(20px);
  }

  @media (min-width: 640px) {
    .form-page {
      padding-top: 85px;
    }
  }
</style>