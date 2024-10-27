import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ExpertiseLevelView from '@/views/ExpertiseLevelView.vue';
import BeginnerView from '../views/workouts/BeginnerView.vue';
import IntermediateView from '@/views/workouts/IntermediateView.vue';
import AdvancedView from '@/views/workouts/AdvancedView.vue';
import WorkoutTrackerView from '@/views/WorkoutTrackerView.vue';
import FriendActivityView from '@/views/FriendActivityView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: () => import('../views/SignUpView.vue'),
    },
    {
      path: '/expertise-level',
      name: 'expertise-level',
      component: () => import('../views/ExpertiseLevelView.vue'),
    },
    {
      path: '/workout-tracker',
      name: 'workout-tracker',
      component: () => import('../views/WorkoutTrackerView.vue'),
    },
    {
      path: '/friends',
      name: 'Friend Activity',
      component: () => import('../views/FriendActivityView.vue'),
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('../views/DashboardView.vue'),
    },
    {
      path: '/admin',
      name: 'Admin',
      component: () => import('../views/AdminView.vue'),
    },
  ],
});



export default router;
