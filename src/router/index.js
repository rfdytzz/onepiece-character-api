import Character from '@/views/Character.vue'
import Fruit from '@/views/Fruit.vue'
import Home from '@/views/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home},
    { path: '/character', component: Character},
    { path: '/fruit', component: Fruit}
  ],
})

export default router
