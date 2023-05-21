import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faShareNodes, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faTwitter, faFacebook, faDiscord } from '@fortawesome/free-brands-svg-icons'

import './assets/base.css'
import './assets/main.css'

const app = createApp(App)
app.use(router)

const pinia = createPinia()
app.use(pinia)

library.add(faBars, faShareNodes, faLinkedinIn, faTwitter, faFacebook, faDiscord, faArrowUp)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
