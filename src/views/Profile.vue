<script setup>
  import useAuthStore from '../stores/useAuthStore'

  const authStore = useAuthStore()
</script>

<template>
  <section class="profile-page bg-gray">
    <div class="bg-gray-dark">
      <div class="max-w-[1200px] mx-auto px-[30px] pb-[30px]">
        <div class="flex items-start gap-5 border-b-2 border-gray">
          <div class="profile-pic rounded-full h-12 w-12 relative">
            <img src="" alt="">
            <button v-if="authStore.isAuthenticated" class="absolute bottom-2 right-1 cursor-pointer">
              <font-awesome-icon icon="fa-solid fa-camera" />
            </button>
          </div>
          <div class="pt-5 relative">
            <button v-if="authStore.isAuthenticated" class="absolute bottom-0 right-0 cursor-pointer">
              <font-awesome-icon icon="fa-solid fa-pen-to-square" />
            </button>
            <h1 class="font-mono text-2xl">Arnaud Dumoncel</h1>
            <p>Développeur Web</p>
          </div>
        </div>
        <div class="py-8 border-b-2 border-gray relative">
          <button v-if="authStore.isAuthenticated" class="absolute top-8 right-0 cursor-pointer">
            <font-awesome-icon icon="fa-solid fa-pen-to-square" />
          </button>
          <h2 class="profile-section-title font-mono text-2xl">Informations</h2>
          <div class="py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-lg text-[#F3F3F380] mb-3">Localisation</h3>
              <p>Rouen (76)</p>
            </div>
            <div>
              <h3 class="text-lg text-[#F3F3F380] mb-3">Bio</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
            <div>
              <h3 class="text-lg text-[#F3F3F380] mb-3">Liens</h3>
              <ul>
                <li><font-awesome-icon icon="fa-solid fa-globe" class="text-green me-2"/>Site personnel</li>
                <li><font-awesome-icon icon="fa-brands fa-github" class="text-green me-2" />GitHub</li>
                <li><font-awesome-icon icon="fa-brands fa-linkedin-in" class="text-green me-2" />LinkedIn</li>
                <li><font-awesome-icon icon="fa-brands fa-dribbble" class="text-green me-2" />Dribbble</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="py-8 border-b-2 border-gray relative">
          <button v-if="authStore.isAuthenticated" class="absolute top-8 right-0 cursor-pointer">
            <font-awesome-icon icon="fa-solid fa-pen-to-square" />
          </button>
          <h2 class="profile-section-title font-mono text-2xl">Technologies & rôles</h2>
          <div class="py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-lg text-[#F3F3F380] mb-3">Rôles</h3>
              <ul>
                <li><font-awesome-icon class="text-green me-2" icon="fa-solid fa-check" />Développement Fullstack</li>
                <li><font-awesome-icon class="text-green me-2" icon="fa-solid fa-check" />Conception UX / UI</li>
                <li><font-awesome-icon class="text-green me-2" icon="fa-solid fa-check" />Gestion de projet</li>
              </ul>
            </div>
            <div>
              <h3 class="text-lg text-[#F3F3F380] mb-3">Stack</h3>
              <ul>
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
              <ul>
                <li><font-awesome-icon class="text-green me-2" icon="fa-solid fa-check" />Git & GitHub</li>
                <li><font-awesome-icon class="text-green me-2" icon="fa-solid fa-check" />Postman</li>
                <li><font-awesome-icon class="text-green me-2" icon="fa-solid fa-check" />Visual Studio Code</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="py-8 relative">
          <button v-if="authStore.isAuthenticated" class="absolute top-8 right-0 cursor-pointer">
            <font-awesome-icon icon="fa-solid fa-pen-to-square" />
          </button>
          <h2 class="profile-section-title font-mono text-2xl">Activité</h2>
          <div class="py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-lg text-[#F3F3F380] mb-3">Projets</h3>
              <p>Participation dans 3 projets</p>
            </div>
            <div>
              <h3 class="text-lg text-[#F3F3F380] mb-3">Présence dans la communauté</h3>
              <p>17 comptes suivis par Arnaud</p>
              <p>12 comptes suivent Arnaud</p>
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
    border-radius: 50%;
    border: 4px solid #262626;
    background-image: linear-gradient(to right bottom, #6ecfa7, #69cdac, #64ccb1, #61cab6, #5fc8ba, #5ac6be, #56c4c1, #53c2c4, #4bbfc8, #45bccc, #40b9cf, #3eb6d2);
    transform: translateY(-30%);
  }

  h1,
  .profile-section-title {
    width: max-content;
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
</style>