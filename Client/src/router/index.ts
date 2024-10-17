import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExpertiseLevelView from '@/views/ExpertiseLevelView.vue'
import BeginnerView from '../views/workouts/BeginnerView.vue'
import IntermediateView from '@/views/workouts/IntermediateView.vue'
import AdvancedView from '@/views/workouts/AdvancedView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: () => import('../views/SignUpView.vue')
    },
    {
      path: '/expertise-level',
      name: 'expertise-level',
      component: () => import ('../views/ExpertiseLevelView.vue')
    },
    {
      path: '/workout-tracker',
      name: 'workout-tracker',
      component: () => import ('../views/WorkoutTrackerView.vue')
    }
  ]
})

export default router
