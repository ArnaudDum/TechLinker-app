import useAuthStore from '../../stores/useAuthStore'

const authGuard = () => {
  const store = useAuthStore()
  if (!store.getIsAuthenticated) {
    return { name: 'signup-signin' }
  }
}

export default authGuard