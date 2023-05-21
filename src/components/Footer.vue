<script setup>
  import HomeLink from './micro/Home-link.vue'
</script>

<template>
  <footer class="bg-gray-light">
    <div class="footer-color-bar w-full h-[7px] sm:h-[10px]"></div>
    <div class="px-5 py-7">
      <div class="flex flex-col s:flex-row s:justify-between">
        <div>
          <HomeLink class="font-medium" />
          <div class="footer-networks text-blue flex justify-center gap-2 mt-3 s:mt-1">
            <font-awesome-icon icon="fa-brands fa-linkedin-in" />
            <font-awesome-icon icon="fa-brands fa-twitter" />
            <font-awesome-icon icon="fa-brands fa-facebook" />
            <font-awesome-icon icon="fa-brands fa-discord" />
          </div>
        </div>
        <div class="flex flex-col gap-2 items-center s:items-end mt-3 s:mt-0 sm:pe-10">
          <router-link to="/contact" class="footer-link">Contact</router-link>
          <router-link to="/a-propos" class="footer-link">À propos</router-link>
          <p class="footer-link">Solution</p>
          <p class="footer-link">Actualité</p>
          <p class="footer-link">Confidentialité</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
  .footer-color-bar {
    background: linear-gradient(to right, #6ECFA7, #3EB6D2);
  }

  .footer-link {
    color: #6D7278;
  }

  .footer-link:hover {
    color: #262626;
  }
</style>