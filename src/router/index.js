import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewArticleView from '@/views/NewArticleView.vue'
import ThankYouView from '@/views/ThankYouView.vue'
import AuthenticationView from '@/views/AuthenticationView.vue'
import { auth } from '@/includes/firebase'
import AccountView from '@/views/AccountView.vue'
import PostView from '@/views/PostView.vue'

function requireAuth(to, from, next) {
  let user = auth.currentUser
  if (!user) {
    next({ name: 'authentication' })
  } else {
    next()
  }
}
function requireNoAuth(to, from, next) {
  let user = auth.currentUser
  if (!user) {
    next()
  } else {
    next({ name: 'home' })
  }
}
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
      name: 'new-post',
      component: NewArticleView,
      beforeEnter: requireAuth
    },
    {
      path: '/thank-you',
      name: 'thank-you',
      component: ThankYouView,
      beforeEnter: requireAuth
    },
    {
      path: '/authentication',
      name: 'authentication',
      component: AuthenticationView,
      beforeEnter: requireNoAuth
    },
    {
      name: 'account',
      path: '/account',
      component: AccountView,
      beforeEnter: requireAuth
    },
    {
      name:'post',
      path:'/post/:id',
      component: PostView,
    }
  ]
})

export default router
