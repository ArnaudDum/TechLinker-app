import useAuthStore from '../../stores/useAuthStore'
import { API_URL } from '../apiUrl'
import axios from 'axios'

export const signup = async (credentials) => {
  try {
    const store = useAuthStore()
    const { data } = await axios.post(`${API_URL}/user/signup`, credentials)
    store.login({ user: data.userId, token: data.token })
  } catch (error) {
    console.error(error)
  }
}

export const signin = async (credentials) => {
  try {
    const store = useAuthStore()
    const { data } = await axios.post(`${API_URL}/user/login`, credentials)
    store.login({ user: data.userId, token: data.token })
  } catch (error) {
    console.error(error)
  }
}

export const logout = async () => {
  const store = useAuthStore()
  store.logout()
}