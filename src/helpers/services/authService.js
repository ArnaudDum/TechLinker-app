import useAuthStore from '../../stores/useAuthStore'
import { API_URL } from '../apiUrl'
import axios from 'axios'

export const signup = async (credentials) => {
  try {
    const store = useAuthStore()
    const { data } = await axios.post(`${API_URL}/signup`, credentials)
    store.login({ user: data.user, token: data.accessToken })
  } catch (error) {
    console.error(error)
  }
}

export const signin = async (credentials) => {
  try {
    const store = useAuthStore()
    const { data } = await axios.get(`${API_URL}/signin`, credentials)
    store.login({ user: data.user, token: data.accessToken })
  } catch (error) {
    console.error(error)
  }
}

export const logout = async (user) => {
  const store = useAuthStore()
  store.logout()
}