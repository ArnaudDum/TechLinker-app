<script setup>
  import useAuthStore from '../stores/useAuthStore'
  import { useApi } from '../helpers/composables/useApi'
  import { API_URL } from '../helpers/apiUrl'
  import { useRoute } from 'vue-router'
  import { ref, computed, onMounted } from 'vue'

  const route = useRoute()
  const { id } = route.params
  const authStore = useAuthStore()

  const { isFetching, error, data: currentUser } = useApi(`${API_URL}/user/${id}`)

  onMounted(() => {
    console.log(currentUser)
  })
</script>

<template>
  <section class="profile-page bg-gray">
    <div class="bg-gray-dark">
      <div class="max-w-[1200px] mx-auto px-[30px] pb-[30px]">
        <div class="flex items-start gap-5 md:gap-10 border-b-2 border-gray">
          <div class="profile-pic rounded-full h-12 w-12 relative">
            <img v-if="currentUser.image" :src="currentUser.image" alt="">
            <button v-if="authStore.currentUser._id === currentUser._id" class="absolute bottom-2 right-1 cursor-pointer">
              <font-awesome-icon icon="fa-solid fa-camera" />
            </button>
          </div>
          <div class="pt-5 flex-1 relative">
            <button v-if="authStore.currentUser._id === currentUser._id" class="absolute bottom-0 right-0 cursor-pointer">
              <font-awesome-icon icon="fa-solid fa-pen-to-square" />
            </button>
            <h1 class="font-mono text-2xl">User {{ currentUser._id }}</h1>
            <p v-if="currentUser.roles" class="text-lg">
              <span v-for="(role, index) in currentUser.roles" :key="index">
                {{ role }}, 
              </span>
            </p>
            <p v-else class="text-lg text-[#F3F3F380]">Pas encore de rôle</p>
          </div>
        </div>
        <div class="py-8 border-b-2 border-gray relative">
          <button v-if="authStore.currentUser._id === currentUser._id" class="absolute top-8 right-0 cursor-pointer">
            <font-awesome-icon icon="fa-solid fa-pen-to-square" />
          </button>
          <h2 class="profile-section-title font-mono text-2xl">Informations</h2>
          <div class="py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-lg text-[#F3F3F380] mb-3">Localisation</h3>
              <p v-if="currentUser.localisation">{{ currentUser.localisation }}</p>
            </div>
            <div>
              <h3 class="text-lg text-[#F3F3F380] mb-3">Bio</h3>
              <p v-if="currentUser.bio">{{ currentUser.bio }}</p>
            </div>
            <div>
              <h3 class="text-lg text-[#F3F3F380] mb-3">Liens</h3>
              <ul v-if="currentUser.links">
                <li><font-awesome-icon icon="fa-solid fa-globe" class="text-green me-2"/>Site personnel</li>
                <li><font-awesome-icon icon="fa-brands fa-github" class="text-green me-2" />GitHub</li>
                <li><font-awesome-icon icon="fa-brands fa-linkedin-in" class="text-green me-2" />LinkedIn</li>
                <li><font-awesome-icon icon="fa-brands fa-dribbble" class="text-green me-2" />Dribbble</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="py-8 border-b-2 border-gray relative">
          <button v-if="authStore.currentUser._id === currentUser._id" class="absolute top-8 right-0 cursor-pointer">
            <font-awesome-icon icon="fa-solid fa-pen-to-square" />
          </button>
          <h2 class="profile-section-title font-mono text-2xl">Technologies & rôles</h2>
          <div class="py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-lg text-[#F3F3F380] mb-3">Rôles</h3>
              <ul v-if="currentUser.roles">
                <li><font-awesome-icon class="text-green me-2" icon="fa-solid fa-check" />Développement Fullstack</li>
                <li><font-awesome-icon class="text-green me-2" icon="fa-solid fa-check" />Conception UX / UI</li>
                <li><font-awesome-icon class="text-green me-2" icon="fa-solid fa-check" />Gestion de projet</li>
              </ul>
            </div>
            <div>
              <h3 class="text-lg text-[#F3F3F380] mb-3">Stack</h3>
              <ul v-if="currentUser.stack">
                <li><font-awesome-icon class="text-green me-2" icon="fa-solid fa-check" />Javascript</li>
                <li><font-awesome-icon class="text-green me-2" icon="fa-solid fa-check" />Vue.js</li>
                <li><font-awesome-icon class="text-green me-2" icon="fa-solid fa-check" />Node.js</li>
                <li><font-awesome-icon class="text-green me-2" icon="fa-solid fa-check" />Express.js</li>
                <li><font-awesome-icon class="text-green me-2" icon="fa-solid fa-check" />MongoDB</li>
                <li><font-awesome-icon class="text-green me-2" icon="fa-solid fa-check" />Tailwind</li>
                <li><font-awesome-icon class="text-green me-2" icon="fa-solid fa-check" />Sass</li>
              </ul>
            </div>
            <div>
              <h3 class="text-lg text-[#F3F3F380] mb-3">Outils</h3>
              <ul v-if="currentUser.tools">
                <li><font-awesome-icon class="text-green me-2" icon="fa-solid fa-check" />Git & GitHub</li>
                <li><font-awesome-icon class="text-green me-2" icon="fa-solid fa-check" />Postman</li>
                <li><font-awesome-icon class="text-green me-2" icon="fa-solid fa-check" />Visual Studio Code</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="py-8 relative">
          <button v-if="authStore.currentUser._id === currentUser._id" class="absolute top-8 right-0 cursor-pointer">
            <font-awesome-icon icon="fa-solid fa-pen-to-square" />
          </button>
          <h2 class="profile-section-title font-mono text-2xl">Activité</h2>
          <div class="py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-lg text-[#F3F3F380] mb-3">Projets</h3>
              <p>Participation dans {{ currentUser.projects.length }} projets</p>
            </div>
            <div>
              <h3 class="text-lg text-[#F3F3F380] mb-3">Communauté</h3>
              <p>{{ currentUser.followers.length }} profils suivent {{ currentUser.firstName ?? currentUser.pseudo }}</p>
              <p>{{ currentUser.following.length }} profils suivis par {{ currentUser.firstName ?? currentUser.pseudo }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .profile-page {
    padding-top: 150px;
  }

  .profile-pic {
    height: 120px;
    width: 120px;
    min-width: 120px;
    border-radius: 50%;
    border: 4px solid #262626;
    background-image: linear-gradient(to right bottom, #6ecfa7, #69cdac, #64ccb1, #61cab6, #5fc8ba, #5ac6be, #56c4c1, #53c2c4, #4bbfc8, #45bccc, #40b9cf, #3eb6d2);
    transform: translateY(-30%);
  }

  h1,
  .profile-section-title {
    word-break: break-all;
    color: #6ECFA7;
    background: -webkit-linear-gradient(25deg, #6ECFA7 30%, #3EB6D2);
    background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: rgba(0, 0, 0, 0);
  }

  @media (min-width: 640px) {
    .profile-page {
      padding-top: 200px;
    }
  }

  @media (min-width: 640px) {
    .profile-pic {
      height: 180px;
      width: 180px;
      min-width: 180px;
    }

    .profile-pic button {
      bottom: 15px;
      right: 15px;
    }
  }
</style>