import { createRouter, createWebHashHistory } from 'vue-router'

import Index from './pages/index.vue'
import Projets from './pages/projets.vue'
import Competences from './pages/competences.vue'
import Experiences from './pages/experiences.vue'
import Parcours from './pages/parcours.vue'
import Contacts from './pages/contacts.vue'

const routes = [
  { path: '/', component: Index },
  { path: '/projets', component: Projets },
  { path: '/competences', component: Competences },
  { path: '/experiences', component: Experiences },
  { path: '/parcours', component: Parcours },
  { path: '/contacts', component: Contacts },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router