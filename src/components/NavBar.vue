<template>
	<nav class="navbar" role="navigation">
		<div class="navbar-brand">
			<router-link to="/" class="navbar-item" @click="isActive = false">
				<strong>BALDA</strong>
			</router-link>

			<a
				role="button"
				class="navbar-burger"
				data-target="menu-items"
				@click="isActive = !isActive"
			>
				<span></span>
				<span></span>
				<span></span>
			</a>
		</div>

		<div
			class="navbar-menu"
			:class="{ 'is-active': isActive }"
			@click="isActive = false"
		>
			<div class="navbar-start">
				<router-link to="/rules" class="navbar-item py-3"> Rules </router-link>
				<router-link v-if="authorized" to="/lobbies" class="navbar-item py-3">
					Lobbies
				</router-link>
			</div>

			<div v-if="authorized" class="navbar-end">
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

			<div v-else class="navbar-end">
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
