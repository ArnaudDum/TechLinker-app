<script setup>
  import { ref } from 'vue'
  import { signup } from '../helpers/services/authService'
  import { useRouter } from 'vue-router'
  import Button from '../components/micro/Button.vue'

  const router = useRouter()
  const credentials = ref({
    email: '',
    password: ''
  })
  const showPassword = ref(false)
  const showConfirmPassword = ref(false)

  const confirmPassword = ref('')
  const handleSignup = () => {
    if (confirmPassword.value === credentials.value.password) {
      try {
        signup(credentials.value)
          .then(() => {
            resetForm()
            router.push('/home')
          })
          .catch((error) => console.error(error))
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

  const togglePWVisibility = () => showPassword.value = !showPassword.value
  const toggleConfirmVisibility = () => showConfirmPassword.value = !showConfirmPassword.value
</script>

<template>
  <section class="form-page">
    <div class="max-w-[1200px] mx-auto px-[30px] pt-[50px] pb-[100px] lg:pt-[100px] lg:pb-[200px]">
      <div class="log-form rounded-2xl p-5 max-w-[450px] mx-auto">
        <h1 class="font-mono text-2xl lg:text-3xl text-center">Inscription</h1>
        <form @submit.prevent="handleSignup" class="flex flex-col gap-8 lg:gap-12 my-10">
          <div class="flex flex-col gap-1 relative">
            <label class="log-label absolute">Email</label>
            <input type="email" v-model="credentials.email" :class="{ 'filled': credentials.email }" class="log-input">
          </div>
          <div :class="{ 'hide': !showPassword }" class="password-input flex flex-col gap-1 relative">
            <label class="log-label absolute">Mot de passe</label>
            <input :type="showPassword ? 'text' : 'password'" v-model="credentials.password" :class="{ 'filled': credentials.password }" class="log-input">
            <div @click="togglePWVisibility" class="log-pw-visibility">
              <font-awesome-icon class="opened-eye" icon="fa-solid fa-eye" />
              <font-awesome-icon class="closed-eye" icon="fa-solid fa-eye-slash" />
            </div>
          </div>
          <div :class="{ 'hide': !showConfirmPassword }" class="password-input flex flex-col gap-1 relative">
            <label class="log-label absolute">Confirmer le mot de passe</label>
            <input :type="showConfirmPassword ? 'text' : 'password'" v-model="confirmPassword" :class="{ 'filled': confirmPassword && confirmPassword === credentials.password }" class="log-input">
            <div @click="toggleConfirmVisibility" class="log-pw-visibility">
              <font-awesome-icon class="opened-eye" icon="fa-solid fa-eye" />
              <font-awesome-icon class="closed-eye" icon="fa-solid fa-eye-slash" />
            </div>
          </div>
          <div>
            <Button role="submit" type="button" title="Enregistrer" class="w-full" />
          </div>
        </form>
        <div class="text-center">
          <p>Déjà enregistré ? <router-link to="/connexion" class="text-green underline cursor-pointer">Connectez-vous</router-link></p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .form-page {
    padding-top: 69px;
  }

  .form-page h1 {
    color: #6ECFA7;
    background: -webkit-linear-gradient(25deg, #6ECFA7 30%, #3EB6D2);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: rgba(0, 0, 0, 0);
  }

  .log-label {
    transform: translate(15px, -50%);
    background-color: #262626;
    color: #F3F3F360;
    padding-inline: 5px;
  }

  .log-input {
    outline: none;
    background: transparent;
    height: 45px;
    padding-inline: 15px;
    border-radius: 10px;
    border: 1px solid #3F3F3F;
    transition: border 150ms ease-out;
  }

  .log-input:focus,
  .log-input.filled {
    border: 1px solid #6ECFA7;
  }

  .log-input:invalid {
    border: 1px solid pink;
  }

  .log-pw-visibility {
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1 / 1;
    border-radius: 8px;
    transform: translate(-5px, 5px);
    height: 35px;
    background-color:#3F3F3F;
    transition: all 150ms ease-out;
  }

  .log-pw-visibility:hover {
    cursor: pointer;
    background-color: #F3F3F360;
  }

  .password-input:not(.hide) .log-pw-visibility {
    background-color: #F3F3F360;
  }

  .log-pw-visibility svg {
    color: #6ECFA7;
  }

  .password-input.hide .log-pw-visibility .opened-eye,
  .password-input:not(.hide) .log-pw-visibility .closed-eye {
    display: none;
  }

  .password-input:not(.hide) .log-pw-visibility .opened-eye,
  .password-input.hide .log-pw-visibility .closed-eye {
    display: block;
  }

  @media (min-width: 640px) {
    .form-page {
      padding-top: 85px;
    }
  }
</style>