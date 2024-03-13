import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from './components/LoginPage.vue'
import LandingPage from './components/LandingPage.vue'
import SignupPage from './components/SignupPage.vue'
import ForgotPasswordPage from './components/ForgotPasswordPage.vue'
import DashboardPage from './components/DashboardPage.vue'
import ForumPage from './components/ForumPage.vue'
import ProfilPage from './components/ProfilPage.vue'
import SettingsPage from './components/SettingsPage.vue'
import ServicePage from './components/ServicePage.vue'
import NotFoundPage from './components/NotFoundPage.vue'
import ToastPlugin from 'vue-toast-notification';

const routes = [
  { path: '/', component: LandingPage },
  { path: '/login', component: LoginPage },
  { path: '/signup', component: SignupPage },
  { path: '/forgot-password', component: ForgotPasswordPage },
  { path: '/dashboard', component: DashboardPage },
  { path: '/forum', component: ForumPage },
  { path: '/profil', component: ProfilPage },
  { path: '/settings', component: SettingsPage },
  { path: '/service', component: ServicePage },
  {path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundPage}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App)
  .use(ToastPlugin)
  .use(router)
  .mount('#app')