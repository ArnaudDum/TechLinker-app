import { ref, onMounted, onUnmounted } from 'vue'

export const useWindowScroll = () => {
  const y = ref(window.scrollY)

  const handleScroll = () => {
    y.value = window.scrollY
  }

  onMounted(() => window.addEventListener('scroll', handleScroll))
  onUnmounted(() => window.addEventListener('scroll', handleScroll))

  return y
}