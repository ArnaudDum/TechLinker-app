import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home.vue')
const Projects = () => import('../views/Projects.vue')
const Profile = () => import('../views/Profile.vue')
const Contact = () => import('../views/Contact.vue')

const router = createRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { title: 'Accueil' }
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
      meta: { title: 'Profil' }
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