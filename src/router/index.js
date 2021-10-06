/* Vue */
import Vue from 'vue'
import VueRouter from 'vue-router'

/* Views */
import About from '@/views/About'
import Home from '@/views/Home'
import NotFound from '@/views/NotFound'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/404', name: '404', component: NotFound },
  { path: '*', redirect: '404' }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
