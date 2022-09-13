import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../views/RegisterView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
  {
    path: '/rules',
    name: 'rules',
    component: () => import(/* webpackChunkName: "rules" */ '../views/RulesView.vue')
  },
  {
    path: '/lobbies',
    name: 'lobbies',
    component: () => import(/* webpackChunkName: "lobbies" */ '../views/LobbyListView.vue')
  },
  {
	path: '/404',
	name: 'notFound',
	component: () => import(/* webpackChunkName: "notFound" */ '../views/404.vue')
  },
  {
	path: '/:catchAll(.*)',
	redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
