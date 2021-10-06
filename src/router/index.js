/* Vue */
import Vue from 'vue'
import VueRouter from 'vue-router'

/* Views */
import Home from '@/views/Home'
import About from '@/views/About'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
