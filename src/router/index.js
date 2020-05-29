import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/MacOS',
    name: 'MacOS',
    component: () => import(/* webpackChunkName: "about" */ '../views/Mac.vue')
  },
  {
    path: '/Windows',
    name: 'Windows',
    // component: Home
    component: () => import(/* webpackChunkName: "about" */ '../views/Windows.vue')
  },
  {
    path: '/iOS',
    name: 'iOS',
    component: () => import(/* webpackChunkName: "about" */ '../views/iOS.vue')
  },
  {
    path: '/Android',
    name: 'Android',
    component: () => import(/* webpackChunkName: "about" */ '../views/Android.vue')
  }
  // {
  //   path: '/Windows',
  //   name: 'Windows',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
