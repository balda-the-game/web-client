import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "/",
		name: "home",
		component: () => import("../views/HomeView.vue"),
	},
	{
		path: "/register",
		name: "register",
		component: () => import("../views/RegisterView.vue"),
	},
	{
		path: "/login",
		name: "login",
		component: () => import("../views/LoginView.vue"),
	},
	{
		path: "/reset-password",
		name: "resetPassword",
		component: () => import("../views/ResetPasswordView.vue"),
	},
	{
		path: "/rules",
		name: "rules",
		component: () => import("../views/RulesView.vue"),
	},
	{
		path: "/lobbies",
		name: "lobbies",
		component: () => import("../views/LobbyListView.vue"),
	},
	{
		path: "/lobbies/:id",
		name: "game",
		component: () => import("../views/GameView.vue"),
	},
	{
		path: "/profile",
		name: "profile",
		component: () => import("../views/ProfileView.vue"),
	},
	{
		path: "/404",
		name: "notFound",
		component: () => import("../views/404View.vue"),
	},
	{
		path: "/:catchAll(.*)",
		redirect: "/404",
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
