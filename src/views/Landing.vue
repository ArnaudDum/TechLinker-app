<script setup>
  import ScrollTop from '../components/micro/ScrollTop.vue'
  import Button from '../components/micro/Button.vue'
  import { onMounted } from 'vue'
  import { useIntersectionObserver } from '@vueuse/core'

  onMounted(() => {
    const cards = document.querySelectorAll('.card-observer')
    cards.forEach((card) => {
      useIntersectionObserver(
        card,
        ([{ isIntersecting }]) => {
          if (isIntersecting) {
            card.classList.add('appear')
          }
        }
      )
    })
  })
</script>

<template>
  <!-- Banner -->
  <section class="home-banner relative">
    <div class="home-banner-bg absolute top-0 left-0 w-full h-full">
      <div class="home-banner-bubble home-banner-bubble--green"></div>
      <div class="home-banner-bubble home-banner-bubble--blue"></div>
    </div>
    <div class="max-w-[1200px] mx-auto px-[30px] relative">
      <div class="py-[100px] text-center">
        <h1 class="text-5xl font-bold font-mono">Tech Linker</h1>
        <p class="text-2xl font-medium font-mono text-left max-w-max mx-auto">Plus aucune limite à vos idées de projets tech</p>
        <div class="mt-10 text-left text-xl max-w-max mx-auto">
          <h2>Une plateforme pour :</h2>
          <ul class="home-banner-list mt-3">
            <li>
              <font-awesome-icon class="text-green me-2" icon="fa-solid fa-circle-check" />
              Lancer vos projets
            </li>
            <li>
              <font-awesome-icon class="text-turquoise me-2" icon="fa-solid fa-circle-check" />
              Recruter des profils
            </li>
            <li>
              <font-awesome-icon class="text-blue me-2" icon="fa-solid fa-circle-check" />
              Suivre votre travail
            </li>
          </ul>
        </div>
      </div>
      <div class="flex items-center justify-center gap-5">
        <Button type="link" to="/inscription" title="S'inscrire" />
        <Button type="link" to="/projets" title="Voir les projets" />
      </div>
    </div>
    <div class="absolute bottom-5 w-full px-[30px] flex items-center justify-between">
      <div class="btn-ghost">
        <font-awesome-icon icon="fa-brands fa-discord" />
      </div>
      <div class="btn-ghost">
        <font-awesome-icon icon="fa-brands fa-dribbble" />
      </div>
    </div>
  </section>

  <section>
    <!-- Intro -->
    <div class="max-w-[1200px] mx-auto px-[30px] py-16 lg:flex lg:gap-10 lg:items-stretch">

      <div class="card-observer lg:flex-1">
        <div class="home-card bg-gray rounded-2xl mb-16 relative overflow-hidden h-full">
          <div class="h-full p-5 flex flex-col gap-5 relative z-10">
            <h3 class="font-mono text-xl text-green">Une communauté liée autours de vos idées</h3>
            <p><span>Tech Linker</span> met en lien les différents profils tech afin de transformer des idées de projets en réalisations concrètes.</p>
            <Button class="mt-auto" type="link" to="/projets" title="Comment ça marche ?" />
          </div>
          <div class="absolute bottom-10 right-0">
            <font-awesome-icon class="text-green h-32 opacity-40" icon="fa-solid fa-layer-group" />
          </div>
        </div>
      </div>

      <div class="card-observer lg:flex-1">
        <div class="home-card bg-gray rounded-2xl mb-16 relative overflow-hidden h-full">
          <div class="h-full p-5 flex flex-col gap-5 relative z-10">
            <h3 class="font-mono text-xl text-turquoise">Une idée de projet ?</h3>
            <p><span>Tech Linker</span> c'est simple.<br/><br/>L'outil permet de :</p>
            <ul>
              <li>
                <font-awesome-icon class="text-turquoise me-2" icon="fa-solid fa-check" />
                Définir le projet
              </li>
              <li>
                <font-awesome-icon class="text-turquoise me-2" icon="fa-solid fa-check" />
                Lister les compétences nécessaires
              </li>
              <li>
                <font-awesome-icon class="text-turquoise me-2" icon="fa-solid fa-check" />
                Réunir une équipe
              </li>
              <li>
                <font-awesome-icon class="text-turquoise me-2" icon="fa-solid fa-check" />
                Lancer le projet
              </li>
            </ul>
            <Button class="mt-auto" type="link" to="/projets" title="Démarrer un projet" />
          </div>
          <div class="absolute bottom-10 right-0">
            <font-awesome-icon class="text-turquoise h-32 opacity-40" icon="fa-solid fa-rocket" />
          </div>
        </div>
      </div>

      <div class="card-observer lg:flex-1">
        <div class="home-card bg-gray rounded-2xl relative overflow-hidden h-full">
          <div class="h-full p-5 flex flex-col justify-start gap-5 relative z-10">
            <h3 class="font-mono text-xl text-blue">Envie de participer ?</h3>
            <p>Vous pouvez consulter tous les projets mis en ligne par la communauté. Si une idée vous tente et que vous avez les compétences nécessaires au projet, faites une demande pour rejoindre l'équipe !</p>
            <Button class="mt-auto" type="link" to="/projets" title="Voir les projets" />
          </div>
          <div class="absolute bottom-10 right-0">
            <font-awesome-icon class="text-blue h-32 opacity-40" icon="fa-solid fa-screwdriver-wrench" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Scroll-to-top button -->
  <ScrollTop />
</template>

<style scoped>
  .home-banner {
    height: 100vh;
    padding-top: 60px;
    overflow: hidden;
  }

  .home-banner-bg {
    filter: blur(100px);
  }

  .home-banner-bubble {
    border-radius: 50%;
    position: absolute;
    height: 100%;
    width: 100%;
  }

  .home-banner-bubble--green {
    background-color: #6ECFA7;
    top: -50%;
    right: -50%;
  }

  .home-banner-bubble--blue {
    background-color: #3EB6D2;
    bottom: -50%;
    left: -50%;
  }

  .btn-ghost {
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1 / 1;
    border-radius: 10px;
    backdrop-filter: none;
    background-color: unset;
    transition: background-color 200ms ease-out;
  }

  .btn-ghost:hover {
    cursor: pointer;
    background-color: #F3F3F340;
    backdrop-filter: blur(20px);
  }

  @keyframes listAppear {
    from {
      opacity: 0;
      transform: translateX(25%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .home-banner-list li {
    animation: listAppear 500ms 300ms both;
  }

  .home-banner-list li:nth-child(2) {
    animation-delay: 600ms;
  }

  .home-banner-list li:nth-child(3) {
    animation-delay: 900ms;
  }

  .card-observer .home-card {
    max-width: 450px;
    margin-inline: auto;
    opacity: 0;
    transition: all 500ms ease-out;
  }

  .card-observer:nth-child(even) .home-card {
    transform: translateX(50%);
  }

  .card-observer:nth-child(odd) .home-card {
    transform: translateX(-50%);
  }

  .card-observer.appear .home-card {
    opacity: 1;
    transform: translateX(0);
  }

  @media (min-width: 640px) {
    .home-banner {
      padding-top: 75px;
    }
  }

  @media (min-width: 1024px) {
    .card-observer:nth-child(2) .home-card {
      transition-delay: 150ms;
    }

    .card-observer:nth-child(3) .home-card {
      transition-delay: 300ms;
    }

    .card-observer:nth-child(even) .home-card,
    .card-observer:nth-child(odd) .home-card {
      transform: translateX(50%);
    }

    .card-observer.appear .home-card {
      opacity: 1;
      transform: translateX(0);
    }
  }
</style>