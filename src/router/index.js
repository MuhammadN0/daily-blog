import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewArticleView from '@/views/NewArticleView.vue'
import ThankYouView from '@/views/ThankYouView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/new-post',
      name:'new-post',
      component:NewArticleView,
    },
    {
      path: '/thank-you',
      name: 'thank-you',
      component: ThankYouView,
    }
  ]
})

export default router
