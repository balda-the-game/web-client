<template>
	<section class="hero is-primary is-fullheight-with-navbar">
		<div class="hero-body">
			<div class="container">
				<div class="columns is-centered">
					<div class="column is-5-tablet is-4-desktop is-5-widescreen">
						<form
							@submit.prevent="submitLogin"
							class="box"
							v-if="!showResetPassword"
						>
							<WTextInput
								type="email"
								label="email"
								placeholder="example@email.com"
								icon-class="fas fa-at"
								:invalid="emailErrorLabel != '' || failure"
								:errorLabel="emailErrorLabel"
								v-model.trim="email"
							/>
							<WTextInput
								type="password"
								label="password"
								placeholder="********"
								icon-class="fas fa-key"
								:invalid="passwordErrorLabel != '' || failure"
								:errorLabel="passwordErrorLabel"
								v-model.trim="password"
							/>
							<label
								class="help is-danger"
								:class="{ 'is-hidden': !failure }"
								>{{ failureMessage }}</label
							>
							<button type="submit" class="button is-success">Log in</button>
							<button
								class="button is-ghost"
								@click.prevent="showResetPassword = true"
							>
								forgot password
							</button>
						</form>
						<form @submit.prevent="submitReset" class="box" v-else>
							<WTextInput
								type="email"
								label="Reset password"
								placeholder="Your registered email"
								icon-class="fas fa-at"
								:invalid="emailErrorLabel != '' || failure"
								:errorLabel="emailErrorLabel"
								v-model.trim="email"
							/>
							<label
								class="help is-danger"
								:class="{ 'is-hidden': !failure }"
								>{{ failureMessage }}</label
							>
							<button type="submit" class="button is-success">
								Send email
							</button>
							<button
								class="button is-ghost"
								@click="showResetPassword = false"
							>
								go back
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import WTextInput from "@/components/Core/WTextInput.vue";
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("auth");

export default {
	name: "LoginView",
	components: { WTextInput },
	data() {
		return {
			email: "",
			password: "",
			emailErrorLabel: "",
			passwordErrorLabel: "",
			showResetPassword: false,
		};
	},
	computed: {
		...mapGetters(["failure", "failureMessage"]),
	},
	methods: {
		...mapActions(["login", "sendResetPasswordEmail"]),
		loginFormValidation() {
			let valid = true;
			if (!/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.email)) {
				this.emailErrorLabel = "Invalid email";
				valid = false;
			} else {
				this.emailErrorLabel = "";
			}
			if (!/^[\d\w\S]{8,}$/g.test(this.password)) {
				this.passwordErrorLabel = "Invalid password";
				valid = false;
			} else {
				this.passwordErrorLabel = "";
			}
			return valid;
		},
		async submitLogin() {
			if (this.loginFormValidation()) {
				await this.login({ email: this.email, password: this.password });
				if (!this.failure) this.$router.push("/profile");
			}
		},
		async submitReset() {
			if (!/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.email))
				this.emailErrorLabel = "Invalid email";
			else await this.sendResetPasswordEmail(this.email);
			if (!this.failure) {
				// TODO: Show success notification 'Success! Check email'
				this.email = "";
				this.showResetPassword = false;
			}
		},
	},
};
</script>
