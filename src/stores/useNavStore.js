import { defineStore } from 'pinia'
import { ref } from 'vue'

const useNavStore = defineStore('nav', () => {
  const isOpen = ref(false)

  const toggleMenu = () => {
    isOpen.value = !isOpen.value
  }

  return { isOpen, toggleMenu }
})

export default useNavStore