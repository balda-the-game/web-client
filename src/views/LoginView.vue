<template>
	<section class="hero is-primary is-fullheight-with-navbar">
		<div class="hero-body">
			<div class="container">
				<div class="columns is-centered">
					<div class="column is-5-tablet is-4-desktop is-5-widescreen">
						<form
							v-if="!showResetPassword"
							class="box"
							@submit.prevent="submitLogin"
						>
							<WTextInput
								v-model.trim="email"
								type="email"
								label="email"
								placeholder="example@email.com"
								icon-class="fas fa-at"
								:invalid="emailErrorLabel != '' || failure"
								:error-label="emailErrorLabel"
							/>
							<WTextInput
								v-model.trim="password"
								type="password"
								label="password"
								placeholder="********"
								icon-class="fas fa-key"
								:invalid="passwordErrorLabel != '' || failure"
								:error-label="passwordErrorLabel"
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
						<form v-else class="box" @submit.prevent="submitReset">
							<WTextInput
								v-model.trim="email"
								type="email"
								label="Reset password"
								placeholder="Your registered email"
								icon-class="fas fa-at"
								:invalid="emailErrorLabel != '' || failure"
								:error-label="emailErrorLabel"
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
import validator from "@/lib/validator.js";
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("auth");
import throttle from "lodash/throttle";

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
			this.emailErrorLabel = !validator.email(this.email)
				? "Invalid email"
				: "";
			this.passwordErrorLabel = !validator.password(this.password)
				? "Invalid password"
				: "";
			return this.emailErrorLabel.length + this.passwordErrorLabel.length == 0;
		},
		submitLogin: throttle(
			async function () {
				if (this.loginFormValidation()) {
					await this.login({ email: this.email, password: this.password });
					if (!this.failure) this.$router.push("/profile");
				}
			},
			1000,
			{ trailing: false }
		),
		submitReset: throttle(
			async function () {
				this.emailErrorLabel = !validator.email(this.email)
					? "Invalid email"
					: "";
				if (this.emailErrorLabel.length == 0) {
					await this.sendResetPasswordEmail(this.email);
					// TODO: Show success notification 'Success! Check email'
					this.email = "";
					this.showResetPassword = false;
				}
			},
			1000,
			{ trailing: false }
		),
	},
};
</script>
