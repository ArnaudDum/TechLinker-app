import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home.vue')

const router = createRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { title: 'Accueil' }
    }
  ],
  history: createWebHistory()
})

router.beforeEach(async(to, from, next) => {
  document.title = `${to.meta.title} | TechLinker`
  next()
})

export default router