import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Layout,
    children: [
      {
        path: '/index',
        component: () => import('@/views/aboutme/index.vue')
      },
      {
        path: '/detail',
        component: () => import('@/views/aboutme/detail.vue')
      }
    ]
  },
  {
    path: '/justIndex',
    component: () => import('@/views/aboutme/index.vue')
  },
  {
    path: '/justdetail',
    component: () => import('@/views/aboutme/detail.vue')
  },
  // 重定向到首页
  {
    path: '/',
    redirect: '/index'
  }
]

const router = new VueRouter({
  routes
})

export default router
