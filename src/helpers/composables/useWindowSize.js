import { computed, onMounted, onUnmounted, ref } from 'vue'

export const useWindowSize = () => {
  const width = ref(window.innerWidth)
  const height = ref(window.innerHeight)

  const handleResize = () => {
    width.value = window.innerWidth,
    height.value = window.innerHeight
  }

  onMounted(() => window.addEventListener('resize', handleResize))
  onUnmounted(() => window.addEventListener('resize', handleResize))

  const desktop = computed(() => width.value > 900)
  const mobile = computed(() => width.value < 900)

  return { width, height, desktop, mobile }
}