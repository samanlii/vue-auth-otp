import { createRouter, createWebHistory } from 'vue-router'
import AuthLayout from 'layouts/AuthLayout.vue'
import RegisterPage from 'pages/RegisterPage.vue'
import VerificationPage from 'pages/VerificationPage.vue'

const routes = [
  {
    path: '/',
    component: AuthLayout,
    children: [
      { path: '', component: RegisterPage },
      { path: 'verify', component: VerificationPage },
    ],
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
