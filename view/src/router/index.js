import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout/Layout.vue'

Vue.use(VueRouter)

const routes = [
  // 重定向到首页
  {
    path: '/',
    redirect: '/index'
  },
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
      },
      {
        path: '/devDetail',
        component: () => import('@/views/development/index.vue')
      },
      {
        path: '/blogType',
        component: () => import('@/views/system/blogType/blogType.vue')
      },
      {
        path: '/knowledge',
        component: () => import('@/views/knowledge/index.vue')
      },
      {
        path: '/love',
        component: () => import('@/views/love/love.vue')
      }
    ]
  },
  {
    path: '/justIndex',
    component: () => import('@/views/aboutme/index.vue')
  },
  {
    path: '/justlove',
    component: () => import('@/views/love/love.vue')
  },
  {
    path: '/justdetail',
    component: () => import('@/views/aboutme/detail.vue')
  },
  {
    path: '/justknowledge',
    component: () => import('@/views/knowledge/index.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
