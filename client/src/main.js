import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faCode, faBriefcase, faEnvelope, faCaretRight, faArrowUp, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faUser, faCode, faBriefcase, faEnvelope, faGithub, faLinkedin, faCaretRight, faArrowUp, faArrowUpRightFromSquare)

const app = createApp(App)

app.component('FontAwesomeIcon', FontAwesomeIcon);

app.mount('#app')
