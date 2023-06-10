import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useSessionStorage } from '@vueuse/core'

const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(useSessionStorage('isAuthenticated', false))
  const currentUser = ref(useSessionStorage('currentUser', {}))
  const token = ref(useSessionStorage('token', null))

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