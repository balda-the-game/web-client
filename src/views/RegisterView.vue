<template>
	<section class="hero is-primary is-fullheight-with-navbar">
		<div class="hero-body">
			<div class="container">
				<div class="columns is-centered">
					<div class="column is-5-tablet is-4-desktop is-5-widescreen">
						<form class="box" @submit.prevent="submitForm">
							<WTextInput
								v-model.trim="username"
								type="username"
								label="username"
								placeholder="username"
								icon-class="fas fa-user"
								:error-label="usernameErrorLabel"
								:invalid="usernameErrorLabel != ''"
							/>
							<WTextInput
								v-model.trim="email"
								type="email"
								label="email"
								placeholder="example@email.com"
								icon-class="fas fa-at"
								:error-label="emailErrorLabel"
								:invalid="emailErrorLabel != ''"
							/>
							<WTextInput
								v-model.trim="password"
								type="password"
								label="password"
								placeholder="********"
								icon-class="fas fa-key"
								:error-label="passwordErrorLabel"
								:invalid="passwordErrorLabel != ''"
							/>
							<WTextInput
								v-model.trim="passwordConfirm"
								type="password"
								label="confirm password"
								placeholder="********"
								icon-class="fas fa-key"
								:error-label="passwordConfirmErrorLabel"
								:invalid="passwordConfirmErrorLabel != ''"
							/>
							<label
								class="help is-danger"
								:class="{ 'is-hidden': !failure }"
								>{{ failureMessage }}</label
							>
							<button type="submit" class="button is-success">Register</button>
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

export default {
	name: "RegisterView",
	components: { WTextInput },
	data() {
		return {
			username: "",
			email: "",
			password: "",
			passwordConfirm: "",
			usernameErrorLabel: "",
			emailErrorLabel: "",
			passwordErrorLabel: "",
			passwordConfirmErrorLabel: "",
		};
	},
	computed: {
		...mapGetters(["failure", "failureMessage"]),
	},
	methods: {
		...mapActions(["register"]),
		formValidation() {
			this.usernameErrorLabel = !validator.username(this.username)
				? "User letters and digits 2 to 16 length"
				: "";
			this.emailErrorLabel = !validator.email(this.email)
				? "Please enter a valid email address"
				: "";
			this.passwordErrorLabel = !validator.password(this.password)
				? "Wrong password pattern. 8 chars length minimum"
				: "";
			this.passwordConfirmErrorLabel =
				this.password != this.passwordConfirm ? "Passwords doesn't match" : "";
			return (
				this.usernameErrorLabel.length +
					this.emailErrorLabel.length +
					this.passwordErrorLabel.length +
					this.passwordConfirmErrorLabel.length ==
				0
			);
		},
		async submitForm() {
			if (this.formValidation()) {
				await this.register({
					email: this.email,
					password: this.password,
					username: this.username,
				});
				if (!this.failure)
					this.$router.push({
						name: "profile",
					});
			}
		},
	},
};
</script>
