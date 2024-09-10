import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/components/layouts/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect: '/home',
      children: [
        // 主页
        {
          path: '/home',
          name: 'HomeView',
          component: () => import('@/views/HomeView.vue'),
          meta: {
            hideSide: true,
          },
        },
        // 组件
        {
          path: '/components',
          name: 'ComponentsView',
          redirect: '/components/overview',
          children: [
            {
              path: '/components/overview',
              name: 'Overview',
              component: () => import('@/views/ComponentsView/Overview.vue'),
            },
            {
              path: '/components/button',
              name: 'Button',
              component: () => import('@/views/ComponentsView/Button.vue'),
            },
            {
              path: '/components/calendar',
              name: 'Calendar',
              component: () => import('@/views/ComponentsView/Calendar.vue'),
            },
            {
              path: '/components/watermark',
              name: 'Watermark',
              component: () => import('@/views/ComponentsView/Watermark.vue'),
            },
            {
              path: '/components/space',
              name: 'Space',
              component: () => import('@/views/ComponentsView/Space.vue'),
            },
          ]
        },
        // 工具
        {
          path: '/utils',
          name: 'UtilsView',
          redirect: '/utils/http',
          children: [
            {
              path: '/utils/http',
              name: 'HTTP',
              component: () => import('@/views/UtilsView/HTTP.vue'),
            },
            {
              path: '/utils/throttle_debounce',
              name: 'ThrottleDebounce',
              component: () => import('@/views/UtilsView/ThrottleDebounce.vue'),
            },
          ]
        },
      ],
    },
  ],
})

export default router
