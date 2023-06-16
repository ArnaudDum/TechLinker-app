<script setup>
  defineProps({
    open: {
      type: Boolean,
      default: false
    },
    location: {
      type: String
    },
    bio: {
      type: String
    },
    links: {
      type: Array
    },
  })

  const emits = defineEmits(['close-modal'])
  const closeModal = () => {
    emits('close-modal')
  }
</script>

<template>
  <div :class="{ 'open': open }" class="modal fixed top-0 left-0 w-full h-[100vh] z-50 flex justify-center items-center overflow-hidden">
    <div class="modal-body px-8 pt-6 pb-8 flex flex-col items-stretch gap-6">
      <div class="modal-header flex items-start justify-between">
        <p class="text-green font-mono text-2xl">Informations</p>
        <div>
          <font-awesome-icon @click="closeModal" icon="fa-solid fa-xmark" class="cursor-pointer" />
        </div>
      </div>
      <div class="modal-separator"></div>
      <div class="modal-content">
        <form action="" class="flex flex-col items-stretch gap-7">
          <div class="flex flex-col">
            <label for="" class="ps-3">Localisation</label>
            <input type="text">
          </div>
          <div class="flex flex-col">
            <label for="" class="ps-3">Bio</label>
            <input type="textarea">
          </div>
          <div class="flex flex-col">
            <label for="" class="ps-3">Liens</label>
            <!-- CUSTOM LINKS TABLE -->
          </div>
          <button class="modal-btn mt-3" type="submit"><span class="modal-btn--content">Enregistrer</span></button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .modal {
    visibility: hidden;
    pointer-events: none;
    backdrop-filter: unset;
    opacity: 0;
    transition: all 200ms ease-out;
  }

  .modal.open {
    visibility: visible;
    pointer-events: unset;
    backdrop-filter: blur(1px);
    opacity: 1;
  }

  .modal-body {
    border: 1px solid #3F3F3F;
    background: #3F3F3F;
    border-radius: 15px;
    width: 100%;
    max-width: 80vw;
  }

  .modal-separator {
    height: 2px;
    border-radius: 2px;
    background: linear-gradient(to right, #6ECFA7, #3EB6D2);
  }

  .modal-btn {
    position: relative;
    padding: 1px;
    border-radius: 11px;
    background: linear-gradient(.4turn, #6ECFA7, #3EB6D2);
    height: 40px;
  }

  .modal-btn::before {
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

  .modal-btn .modal-btn--content {
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

  form input,
  form select {
    height: 40px;
    border: 1px solid #3F3F3F;
    border-radius: 8px;
    background-color: #262626;
    padding: 3px 10px;
    outline: none;
    appearance: none;
  }

  form input:focus,
  form select:focus {
    border: 1px solid #6ECFA7;
  }

  @media screen and (min-width: 500px) {
    .modal-body {
      width: 100%;
      max-width: 400px;
    }
  }
</style>