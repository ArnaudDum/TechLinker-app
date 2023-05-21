import { createRouter, createWebHistory } from 'vue-router'
import useAuthStore from '../stores/useAuthStore'
import authGuard from '../helpers/guards/authGuards'

const Landing = () => import('../views/Landing.vue')
const Home = () => import('../views/Home.vue')
const Signin = () => import('../views/Signin.vue')
const Signup = () => import('../views/Signup.vue')
const Projects = () => import('../views/Projects.vue')
const Profile = () => import('../views/Profile.vue')
const Contact = () => import('../views/Contact.vue')

const router = createRouter({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing,
      meta: { title: 'Accueil' },
      beforeEnter: (to, from, next) => {
        const store = useAuthStore()
        if (store.isAuthenticated) {
          next('/home')
        } else {
          next()
        }
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: { title: 'Dashboard' },
      beforeEnter: authGuard
    },
    {
      path: '/connexion',
      name: 'Signin',
      component: Signin,
      meta: { title: 'Connexion' },
      beforeEnter: (to, from, next) => {
        const store = useAuthStore()
        if (store.isAuthenticated) {
          next('/home')
        } else {
          next()
        }
      }
    },
    {
      path: '/inscription',
      name: 'Signup',
      component: Signup,
      meta: { title: 'Inscription' },
      beforeEnter: (to, from, next) => {
        const store = useAuthStore()
        if (store.isAuthenticated) {
          next('/home')
        } else {
          next()
        }
      }
    },
    {
      path: '/projets',
      name: 'Projects',
      component: Projects,
      meta: { title: 'Projets' }
    },
    {
      path: '/profil',
      name: 'Profile',
      component: Profile,
      meta: { title: 'Profil' },
      beforeEnter: authGuard
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
      meta: { title: 'Contact' }
    }
  ],
  history: createWebHistory()
})

router.beforeEach(async(to, from, next) => {
  document.title = `${to.meta.title} | TechLinker`
  next()
})

export default router