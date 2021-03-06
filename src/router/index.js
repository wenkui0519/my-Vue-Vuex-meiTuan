import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'defaultPage',
    component: () => import('@/layout/default.vue'),
    redirect: '/index',
    children: [{
      path: 's/:name',
      name: 'goods',
      component: () => import('@/page/goodList.vue')
    }, {
      path: '/index',
      name: 'index',
      component: () => import('@/page/index.vue')
    }, {
      path: '/changeCity',
      name: 'changeCity',
      component: () => import('@/page/changeCity.vue')
    }]
  },
  {
    path: '/blank',
    name: 'blank',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: () => import('@/layout/blank.vue'),
    children: [{
      path: 'login',
      name: 'login',
      component: () => import('@/page/login.vue')
    }, {
      path: 'register',
      name: 'register',
      component: () => import('@/page/register.vue')
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
