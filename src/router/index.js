import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: '國立高中社團-介紹網站'
      }
    },
    {
      path: '/guitar',
      name: 'guitar',
      component: () => import('../views/GuitarHistory.vue'),
      // 放路由的設定及資料
      meta: {
        title: '吉他社社史'
      }
    },
    {
      path: '/guitar/events',
      name: 'guitar-events',
      component: () => import('../views/GuitarEvents.vue'),
      // 放路由的設定及資料
      meta: {
        title: '吉他社活動公告'
      }
    },
    {
      path: '/guitar/teach',
      name: 'guitar-teach',
      component: () => import('../views/GuitarTeach.vue'),
      // 放路由的設定及資料
      meta: {
        title: '吉他社教學內容'
      }
    },
    {
      // 讓不同的 path 用同一個路由
      path: '/prepare',
      name: 'prepare',
      component: () => import('../views/NotReady.vue'),
      // 路由別名
      // 除了 /prepare 定義的路徑以外，以下路徑也會套用此設定
      // 注意以下路徑換頁時會被當作同一個路由
      alias: [
        '/dance',
        '/baseball',
        '/badminton',
        '/soccer',
        '/scout'
      ]
    },
    {
      path: '/404',
      name: 'not-found',
      component: () => import('../views/NotFound.vue'),
      // 放路由的設定及資料
      meta: {
        title: '吉他社教學內容'
      }
    },
    {
      // 捕捉所有不符合的 path(路由)
      path: '/:catchAll(.*)',
      // 可自行命名
      name: 'all',
      redirect: '/404'
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // lazy-loaded 進到 about 內頁後才載入JS 省效能
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

router.afterEach((to, from) => {
  document.title = to.meta.title
})

export default router
