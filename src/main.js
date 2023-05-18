import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import './assets/main.css'

const app = createApp(App)
app.use(router)

library.add(faBars)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
