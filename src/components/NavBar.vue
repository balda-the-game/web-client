<template>
	<nav class="navbar" role="navigation">
		<div class="navbar-brand">
			<router-link to="/" class="navbar-item" @click="isActive = false">
				<strong>BALDA</strong>
			</router-link>

			<a
				role="button"
				@click="isActive = !isActive"
				class="navbar-burger"
				data-target="menu-items"
			>
				<span></span>
				<span></span>
				<span></span>
			</a>
		</div>

		<div
			class="navbar-menu"
			@click="isActive = false"
			:class="{ 'is-active': isActive }"
		>
			<div class="navbar-start">
				<router-link to="/rules" class="navbar-item py-3"> Rules </router-link>
				<router-link to="/lobbies" class="navbar-item py-3" v-if="authorized">
					Lobbies
				</router-link>
			</div>

			<div class="navbar-end" v-if="authorized">
				<div class="navbar-item dropdown is-hoverable py-3">
					<div class="dropdown-trigger">
						<div class="has-text-success">
							<span> {{ user.username }}</span>
							<span class="icon is-small">
								<i class="fas fa-angle-down"></i>
							</span>
						</div>
					</div>
					<div class="dropdown-menu p-1">
						<div class="dropdown-content">
							<router-link to="/profile" class="dropdown-item is-small py-3">
								Profile
							</router-link>
							<hr class="dropdown-divider" />
							<a class="dropdown-item is-small py-3" @click.self="logout()">
								Log out
							</a>
						</div>
					</div>
				</div>
			</div>

			<div class="navbar-end" v-else>
				<router-link
					to="/register"
					class="navbar-item has-text-success is-small py-3"
				>
					Sign up
				</router-link>
				<router-link to="/login" class="navbar-item is-small py-3">
					Log in
				</router-link>
			</div>
		</div>
	</nav>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("auth");

export default {
	name: "NavBar",
	props: {},
	data() {
		return {
			isActive: false,
		};
	},
	computed: {
		...mapGetters(["authorized", "user"]),
	},
	methods: {
		async logout() {
			await this.$router.push("/");
			this.$store.dispatch("auth/logout");
		},
	},
};
</script>

<style scoped lang="scss">
.navbar * {
	padding-top: 0;
	padding-bottom: 0;
}
</style>
