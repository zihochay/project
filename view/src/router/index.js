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
        path: '/knowledge/add',
        component: () => import('@/views/knowledge/components/addEdit.vue')
      },
      {
        path: '/knowledge/read',
        component: () => import('@/views/knowledge/components/readBlog.vue')
      },
      {
        path: '/love',
        component: () => import('@/views/love/love.vue')
      }
      // {
      //   path: '/love/gz-love',
      //   component: () => import('@/views/love/detail/guangzhou.vue')
      // }
    ]
  },
  // 不需要导航栏部分路由 --- 开始
  {
    path: '/justIndex',
    component: () => import('@/views/aboutme/index.vue')
  },
  {
    path: '/justlove',
    component: () => import('@/views/love/love.vue')
  },
  {
    path: '/love/gz-love',
    component: () => import('@/views/love/detail/guangzhou.vue')
  },
  {
    path: '/justdetail',
    component: () => import('@/views/aboutme/detail.vue')
  },
  {
    path: '/justknowledge',
    component: () => import('@/views/knowledge/index.vue')
  }
  // 不需要导航栏部分路由 --- 结束
]

const router = new VueRouter({
  routes
})

export default router
