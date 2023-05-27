<script setup>
  const props = defineProps({
    title: { type: String },
    type: { type: String },
    to: { type: String },
    role: { type: String }
  })
</script>

<template>
  <router-link v-if="type === 'link'" :to="to" class="tl-btn"><span class="tl-btn--content">{{ title }}</span></router-link>
  <button v-else-if="type === 'button'" :to="to" :type="role" class="tl-btn"><span class="tl-btn--content">{{ title }}</span></button>
</template>

<style scoped>
  .tl-btn {
    height: 45px;
    padding: 1px;
    background: linear-gradient(.4turn, #6ECFA7, #3EB6D2);
    text-align: center;
    border-radius: 11px;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tl-btn--content {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    padding: 5px 25px;
    border-radius: 10px;
    font-weight: 300;
    background-color: #262626;
    transition: background-color 120ms linear;
    height: 100%;
    width: 100%;
    color: #6ECFA7;
  }

  .tl-btn::before {
    content: "";
    position: absolute;
    top: 0;
    left: unset;
    right: 0;
    width: 0;
    height: 100%;
    background: linear-gradient(.4turn, #3EB6D2, #6ECFA7);
    transition: width 150ms ease-in-out;
  }

  .tl-btn:hover {
    cursor: pointer;
  }

  .tl-btn:hover .tl-btn--content {
    background-color: #3F3F3F;
  }

  .tl-btn:hover::before {
    left: 0;
    right: unset;
    width: 100%;
  }
</style>