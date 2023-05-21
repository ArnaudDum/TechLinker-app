import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useLocalStorage } from '@vueuse/core'

const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(useLocalStorage('isAuthenticated', false))
  const currentUser = ref(useLocalStorage('currentUser', {}))
  const token = ref(useLocalStorage('token', null))

  const getIsAuthenticated = (computed(() => isAuthenticated.value))
  const getCurrentUser = (computed(() => currentUser.value))
  const getToken = (computed(() => token.value))

  const login = (payload) => {
    isAuthenticated.value = true
    currentUser.value = payload.user
    token.value = payload.token
  }

  const logout = () => {
    isAuthenticated.value = false
    currentUser.value = {}
    token.value = null
  }

  return { isAuthenticated, currentUser, token, getIsAuthenticated, getCurrentUser, getToken, login, logout }
})

export default useAuthStore