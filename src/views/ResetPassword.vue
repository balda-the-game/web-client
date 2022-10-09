<template>
	<section class="hero is-primary is-fullheight-with-navbar">
		<div class="hero-body">
			<div class="container">
				<div class="columns is-centered">
					<div class="column is-5-tablet is-4-desktop is-5-widescreen">
						<form class="box" @submit.prevent="submitForm">
							<WTextInput
								v-model.trim="password"
								type="password"
								label="New password"
								placeholder="********"
								icon-class="fas fa-key"
								:error-label="passwordErrorLabel"
								:invalid="passwordErrorLabel != ''"
							/>
							<WTextInput
								v-model.trim="passwordConfirm"
								type="password"
								label="Confirm new password"
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
							<button type="submit" class="button is-success">
								Change password
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
	name: "ResetPassword",
	components: { WTextInput },
	data() {
		return {
			password: "",
			passwordConfirm: "",
			passwordErrorLabel: "",
			passwordConfirmErrorLabel: "",
		};
	},
	computed: {
		...mapGetters(["failure", "failureMessage"]),
	},
	methods: {
		...mapActions(["login", "update"]),
		formValidation() {
			let valid = true;
			if (!/^[\d\w\S]{8,}$/g.test(this.password)) {
				this.passwordErrorLabel = "Wrong pass pattern. 8 char length minimum";
				valid = false;
			} else {
				this.passwordErrorLabel = "";
			}
			if (
				this.password != this.passwordConfirm ||
				this.passwordConfirm.length == 0
			) {
				this.passwordConfirmErrorLabel = "Passwords doesn't match";
				valid = false;
			} else {
				this.passwordConfirmErrorLabel = "";
			}
			return valid;
		},
		async submitForm() {
			if (this.formValidation()) {
				await this.update({ password: this.password });
				if (!this.failure)
					// TODO: Show success notification 'Success password reset'
					this.$router.push("/login");
			}
		},
	},
};
</script>
