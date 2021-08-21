import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import UndilutedMusic from '../views/UndilutedMusic.vue'
import FrontendReferences from '../views/FrontendReferences.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/undiluted-music',
    name: 'Undiluted Music',
    component: UndilutedMusic
  },
  {
    path: '/frontend-references',
    name: 'Frontend References',
    component: FrontendReferences
  }
//   {
    // path: '/about',
    // name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router